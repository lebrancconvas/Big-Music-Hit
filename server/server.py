from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
  return "Welcome to Big Music Hit Server."

@app.route('/api/v1/musics', methods=['GET'])
def musics():
  req = requests.get('http://localhost:9000/musics')
  data = req.content
  json_data = json.loads(data)
  return render_template('index.html', data=json_data)

if __name__ == "__main__":
  app.run(debug=True)
