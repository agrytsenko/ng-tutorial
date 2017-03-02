from __future__ import unicode_literals

from flask import Flask
from flask import request, render_template, send_from_directory


app = Flask(__name__, static_url_path='')
route = app.route


@route('/favicon.ico')
def favicon():
    return send_from_directory('templates', 'favicon.ico')


@route('/js/<path:path>')
def serve_static(path):
    return send_from_directory('js', path)


@route('/')
def init():
    return send_from_directory('templates', 'home.html')


if __name__ == '__main__':
    app.run('localhost', 5000, debug=True)



