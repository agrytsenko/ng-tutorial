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


def init():
    with sqlite3.connect(DATABASE) as cursor:
        cursor.execute("drop table if exists employees")
        cursor.execute(
            "Create table employees ("
                "id integer primary key autoincrement, "
                "name nvarchar(50), "
                "gender nvarchar(10), "
                "salary integer"
            ")")
        cursor.execute("Insert into employees (name, gender, salary) values ('Ben', 'Male', 55000)")
        cursor.execute("Insert into employees (name, gender, salary) values ('Sara', 'Female', 68000)")
        cursor.execute("Insert into employees (name, gender, salary) values ('Mark', 'Male', 57000)")
        cursor.execute("Insert into employees (name, gender, salary) values ('Pam', 'Female', 53000)")
        cursor.execute("Insert into employees (name, gender, salary) values ('Todd', 'Male', 80000)")


if __name__ == '__main__':
    init()
