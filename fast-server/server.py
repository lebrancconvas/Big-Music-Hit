from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from secret import *
from album_list import *
import pandas as pd
import uvicorn
import requests
import json

app = FastAPI()

origins = [
	"http://localhost:3000",
]

SPOTIPY_REDIRECT_URI = "http://localhost:8000/data"
SCOPE = "user-top-read"

auth_manager = SpotifyClientCredentials(client_id=SPOTIFY_CLIEND_ID, client_secret=SPOTIFY_CLIENT_SECRET)
sp = spotipy.Spotify(auth_manager=auth_manager)

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

def ms_to_minsec(ms):
  min = int((ms / 1000) / 60)
  sec = int((ms / 1000) % 60)
  unit_int = [0,1,2,3,4,5,6,7,8,9]
  if(sec in unit_int):
    return(f'{min}:0{sec}')
  return(f'{min}:{sec}')

@app.get('/')
async def index():
  track_list_response = []
  albums = sp.album(album_list['album_2']) 
  artist_name = albums['artists'][0]['name']
  album_name = albums['name']
  track_list = albums['tracks']['items']
  album_image = albums['images'][1]['url']
  for i in range(0, len(track_list)):
    track_data_response = {}
    track_data_response['id'] = i + 1
    track_data_response['track'] = track_list[i]['name']
    track_data_response['artist'] = artist_name
    track_data_response['album'] = album_name
    track_data_response['duration'] = ms_to_minsec(track_list[i]['duration_ms'])
    track_data_response['url'] = track_list[i]['external_urls']['spotify']
    track_data_response['image'] = album_image
    track_list_response.append(track_data_response)
  return track_list_response 

  # return albums 
