# Load JSON Via Proxy

Simple application to load JSON using a server-side proxy. Either load JSON through AJAX request, or by directly using /load URL. Request sends URL to flask web application, which retrieves to given (JSON) file and returns it to the browser.

## Installation:

    sudo apt-get install python-pip python-virtualenv git
    git clone https://github.com/markmuetz/flask-json-proxy
    cd flask-json-proxy
    virtualenv .env
    source .env/bin/activate
    pip install -r requirements.txt
    python app.py

Then navigate to [127.0.0.1:5000](http://127.0.0.1:5000).

## Dependencies:

Uses:
- [Python](https://www.python.org/)
- [Flask](http://flask.pocoo.org/)
- [Python-requests](http://docs.python-requests.org/en/latest/)
- [JQuery](https://jquery.com/)
