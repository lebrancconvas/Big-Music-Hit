from flask import Flask, render_template
from flask_cors import CORS, cross_origin
import requests
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return "Welcome to Big Music Hit Server."

@app.route('/api/v1/musics', methods=['GET'])
@cross_origin()
def musics():
  req = requests.get('http://localhost:9000/musics')
  data = req.content
  json_data = json.loads(data)
  return render_template('index.html', data=json_data)

if __name__ == "__main__":
  app.run(debug=True)
