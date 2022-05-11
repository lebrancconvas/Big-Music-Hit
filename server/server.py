from flask import Flask

app = Flask(__name__)

@app.route('/api/v1/musics')
def musics():
  return {"members": ["John", "Mary", "Bob"]}

if __name__ == "__main__":
  app.run(debug=True)
