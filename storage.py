from __future__ import unicode_literals

import sqlite3
from flask import g


DATABASE = '/tmp/ng-app.db'


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db


def create_students():
    with sqlite3.connect(DATABASE) as cursor:
        cursor.execute("drop table if exists students")
    with sqlite3.connect(DATABASE) as cursor:
        cursor.execute(
            "Create table students ("
                "id integer primary key autoincrement, "
                "name nvarchar(50), "
                "gender nvarchar(10), "
                "city nvarchar(50)"
            ")")
        q = "Insert into students (name, gender, city) values (?, ?, ?)"
        cursor.execute(q, ('Mark', 'Male', 'Chicago'))
        cursor.execute(q, ('Guido', 'Male', 'London'))
        cursor.execute(q, ('Linus', 'Male', 'New-York'))
        cursor.execute(q, ('Julia', 'Female', 'Budapest'))
        cursor.execute(q, ('Peter', 'Male', 'Hannover'))
        cursor.execute(q, ('Anna', 'Female', 'London'))
        cursor.execute(q, ('Gregor', 'Male', 'Berlin'))
        cursor.execute(q, ('Armin', 'Male', 'Vancouver'))
        cursor.execute(q, ('Helen', 'Female', 'Bonn'))
        cursor.execute(q, ('Dora', 'Female', 'London'))
        cursor.execute(q, ('Sieve', 'Male', 'Melbourne'))


if __name__ == '__main__':
    create_students()
