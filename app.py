from __future__ import unicode_literals

import os

from flask import Flask
from flask import request, send_from_directory


app = Flask(__name__, static_url_path='')
route = app.route


@route('/')
def index():
    return send_from_directory('templates', 'index.html')


shared_files = {
    '/js': os.path.join(os.path.dirname(__file__), 'js'),
    '/': os.path.join(os.path.dirname(__file__), 'templates')
}

if __name__ == '__main__':
    app.run(
        host='localhost',
        port=5000,
        debug=True,
        static_files=shared_files
    )



