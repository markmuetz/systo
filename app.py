from flask import Flask, render_template, session, request, jsonify, redirect
import requests

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


def _download(url):
    r = requests.get(url)
    return r.content


@app.route('/load')
def load():
    url = request.args.get('url')
    return render_template('load.html', content=_download(url))


@app.route('/_api/load_json')
def _api():
    url = request.args.get('url')
    return jsonify({'content': _download(url)})


if __name__ == '__main__':
    app.debug = True
    # If you want the site to be accessible from other computers:
    # app.run(host='0.0.0.0')
    app.run()
