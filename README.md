# Flask-Systo

## Installation and Running Locally:

    sudo apt-get install python-pip python-virtualenv git
    git clone https://github.com/markmuetz/flask-systo
    cd flask-systo
    virtualenv .env
    source .env/bin/activate
    pip install -r requirements.txt
    python app.py

## Updating and Running Locally

    cd flask-systo
    git pull
    source .env/bin/activate
    # If requirements.txt has changed:
    pip install -r requirements.txt
    python app.py

Then navigate to [127.0.0.1:5000](http://127.0.0.1:5000).

## Deploying to Server

    source .env/bin/activate
    # If added new files:
    git add -A
    git commit
    fab --host flask.systo.org deploy

Then navigate to [flask.systo.org](http://flask.systo.org/). Any page can easily be checked against the old site - [www.systo.org](http://www.systo.org/) - or the static site - [static.systo.org](http://static.systo.org/).

## Dependencies (Local):

- [Systo](http://www.systo.org/) - [code](https://github.com/markmuetz/flask-systo)
- [Python](https://www.python.org/)
- [Flask](http://flask.pocoo.org/)
- [Python-requests](http://docs.python-requests.org/en/latest/)
- [JQuery](https://jquery.com/)
- [fabric](http://www.fabfile.org/)

## Dependencies (Server):

- [uWSGI](https://uwsgi-docs.readthedocs.org/en/latest/)
- [nginx](http://wiki.nginx.org/Main)
- [supervisor](http://supervisord.org/)
