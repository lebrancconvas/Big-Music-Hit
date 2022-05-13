from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import spotipy
from spotipy.oauth2 import SpotifyOAuth
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

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIFY_CLIEND_ID, client_secret=SPOTIFY_CLIENT_SECRET, redirect_uri=SPOTIPY_REDIRECT_URI, scope=SCOPE))

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

@app.get('/')
async def index():
	top_track = sp.current_user_top_tracks(limit=10, offset=0, time_range="short_term")
	# json_data = json.load(top_track)
	return top_track
# async def index():
#   url = "http://localhost:9000/musics"
#   req = requests.get(url)
#   data = req.content
#   json_data = json.loads(data)
#   return json_data