from __future__ import print_function
from time import sleep

from fabric.api import env, run, cd, settings, sudo, put, execute, task, prefix, get, local
from fabric.contrib.files import exists
import secret_settings

if hasattr(secret_settings, 'SERVER_PASSWORD'):
    env.password = secret_settings.SERVER_PASSWORD

if hasattr(secret_settings, 'USER'):
    env.user = secret_settings.USER

@task
def apt_installs():
    sudo('aptitude install git python-pip virtualenv supervisor nginx build-essential python-dev')

@task
def initial_setup():
    apt_installs()
    if not exists('Projects'):
        run('mkdir Projects')
    with cd('Projects'):
        if not exists('flask-systo'):
            run('git clone https://github.com/markmuetz/flask-systo.git')
        else:
            with cd('flask-systo'):
                run('git pull')

        with cd('flask-systo'):
            if not exists('.env'):
                run('virtualenv .env')
            with prefix('source .env/bin/activate'):
                run('pip install -U pip')
                run('pip install -r requirements.txt')
    setup_supervisor()
    setup_nginx()


@task 
def setup_supervisor():
    if not exists('/etc/supervisor/conf.d/supervisor_systo.conf'):
        sudo('ln -s /home/{}/Projects/flask-systo/config/supervisor_systo.conf '
             '/etc/supervisor/conf.d/supervisor_systo.conf'.format(env.user))
    sudo('service supervisor restart')


@task 
def setup_nginx():
    if not exists('/etc/nginx/sites-enabled/nginx_systo.conf'):
        sudo('ln -s /home/{}/Projects/flask-systo/config/nginx_systo.conf '
             '/etc/nginx/sites-enabled/'.format(env.user))
    sudo('service nginx restart')


@task 
def deploy():
    git_status = local('git status --porcelain', capture=True)
    if git_status != '':
        print('Uncommited changes')
        print('Please run "git commit" first')
        return
    local('git push')
    with cd('Projects/flask-systo'):
        run('git fetch')
        run('git merge origin/master')
    sudo('service supervisor stop')
    sleep(1.5)
    sudo('service supervisor start')
    sudo('service nginx restart')

@task 
def setup_static_nginx():
    if not exists('/etc/nginx/sites-enabled/nginx_static_systo.conf'):
        sudo('ln -s /home/{}/Projects/flask-systo/config/nginx_static_systo.conf '
             '/etc/nginx/sites-enabled/'.format(env.user))
    sudo('service nginx restart')
