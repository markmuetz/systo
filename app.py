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


@app.route('/<path:path_name>')
def get_html(path_name):
    with open(path_name, 'r') as html_file:
        return html_file.read()


@app.route('/_api/load_json')
def _api():
    url = request.args.get('url')
    return jsonify({'content': _download(url)})

@app.route('/_jsonp_proxy/get_jsonp')
def _api():
    url = request.args.get('url')
    secret = request.args.get('secret')
    if secret != 'ce988119-569d-4d72-ba77-ed4e110fef9a':
        raise Exception()

    payload = _download(url)
    return render_template('jsonp_wrapper.js', payload=payload)


if __name__ == '__main__':
    # app.debug = True
    # If you want the site to be accessible from other computers:
    app.run(host='0.0.0.0')
    app.run()
