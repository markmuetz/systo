from __future__ import print_function
from fabric.api import env, run, cd, settings, sudo, put, execute, task, prefix, get
from fabric.contrib.files import exists
import secret_settings

if hasattr(secret_settings, 'SERVER_PASSWORD'):
    env.password = secret_settings.SERVER_PASSWORD

@task
def apt_installs():
    sudo('aptitude install git pip virtualenv supervisor nginx')

@task
def initial_setup():
    apt_installs()
    if not exists('Projects'):
        run('mkdir Projects')
    with cd('Projects'):
        run('git clone https://github.com/markmuetz/flask-systo.git')
        with cd('flask-systo'):
            run('virtualenv .env')
            with prefix('source .env/bin/activate'):
                run('pip install -U pip')
                run('pip install -r requirements.txt')
    setup_supervisor()
    setup_nginx()


@task 
def setup_supervisor():
    if not exists('/etc/supervisor/conf.d/supervisor_systo.conf'):
        sudo('ln -s /home/markmuetz/Projects/flask-systo/supervisor_systo.ini '
             '/etc/supervisor/conf.d/supervisor_systo.conf')
    sudo('service supervisor restart')


@task 
def setup_nginx():
    if not exists('/etc/nginx/sites-enabled/nginx_systo.conf'):
        sudo('ln -s /home/markmuetz/Projects/flask-systo/nginx_systo.conf /etc/nginx/sites-enabled/')
    sudo('service nginx restart')


@task 
def deploy():
    with cd('Projects/flask-systo'):
        run('git fetch')
        run('git merge origin/master')
    sudo('service supervisor restart')
    sudo('service nginx restart')
    sudo('supervisorctl restart systo')
