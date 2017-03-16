from __future__ import unicode_literals

import os

from flask import Flask
from flask import send_from_directory, jsonify

from storage import get_db


app = Flask(__name__)
route = app.route


@route('/')
def index():
    return send_from_directory('templates', 'index.html')


@route('/api/students/')
def students():
    ss = get_db().execute('select id, name from students').fetchall()
    res = map(dict, ss)
    return jsonify(res)


@route('/api/students/<int:obj_id>/')
def get_student(obj_id):
    s = get_db().execute('select * from students where id=?', (obj_id, )).fetchone()
    res = dict(s)
    return jsonify(res)


shared_files = {
    '/js': os.path.join(os.path.dirname(__file__), 'js'),
    '/': os.path.join(os.path.dirname(__file__), 'templates'),
    '/templates': os.path.join(os.path.dirname(__file__), 'templates'),
    '/styles.css': os.path.join(os.path.dirname(__file__), 'styles.css')
}

if __name__ == '__main__':
    app.run(
        host='localhost',
        port=5000,
        debug=True,
        static_files=shared_files
    )



