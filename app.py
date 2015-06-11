from flask import Flask, render_template, session, request, jsonify, redirect
import requests

app = Flask(__name__)


def _download(url):
    r = requests.get(url)
    return r.content


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/<path:path_name>')
def systo_page(path_name):
    return render_template(path_name)


@app.route('/load')
def load():
    url = request.args.get('url')
    return render_template('extras/load.html', content=_download(url))


@app.route('/_api/load_json')
def _api_load_json():
    url = request.args.get('url')
    return jsonify({'content': _download(url)})


@app.route('/_jsonp_proxy/get_jsonp')
def _jsonp_proxy_get_jsonp():
    url = request.args.get('url')
    payload = _download(url)
    return render_template('extras/jsonp_wrapper.js', payload=payload)


if __name__ == '__main__':
    app.debug = True
    # If you want the site to be accessible from other computers:
    app.run(host='0.0.0.0')
    app.run()
