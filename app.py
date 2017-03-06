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


@route('/employee/')
def employees():
    ee = get_db().execute('select * from employees').fetchall()
    res = map(dict, ee)
    return jsonify(res)


@route('/country/')
def country():
    db = get_db()
    countries = db.execute("select * from country").fetchall()
    countries = map(dict, countries)
    for c in countries:
        q = "select * from city where country_id = ?"
        tt = db.execute(q, str(c['id']))
        c['cities'] = map(dict, tt)
    return jsonify(countries)


shared_files = {
    '/js': os.path.join(os.path.dirname(__file__), 'js'),
    '/': os.path.join(os.path.dirname(__file__), 'templates'),
    '/styles.css': os.path.join(os.path.dirname(__file__), 'styles.css')
}

if __name__ == '__main__':
    app.run(
        host='localhost',
        port=5000,
        debug=True,
        static_files=shared_files
    )



