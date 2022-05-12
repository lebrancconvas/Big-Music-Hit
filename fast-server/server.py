from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse
import uvicorn
import requests
import json

app = FastAPI()

origins = [
	"http://localhost:3000"
]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

@app.get('/')
async def index():
  url = "http://localhost:9000/musics"
  req = requests.get(url)
  data = req.content
  json_data = json.loads(data)
  return json_data