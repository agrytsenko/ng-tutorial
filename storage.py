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


def create_employees():
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


def create_countries():
    with sqlite3.connect(DATABASE) as cursor:
        cursor.execute("drop table if exists country")
    with sqlite3.connect(DATABASE) as cursor:
        cursor.execute("Create Table country (id integer primary key autoincrement, name nvarchar(50))")
        cursor.execute("Insert into country (id, name) values (0, 'India')")
        cursor.execute("Insert into country (id, name) values (1, 'USA')")
        cursor.execute("Insert into country (id, name) values (2, 'UK')")


def create_cities():
    with sqlite3.connect(DATABASE) as cursor:
        cursor.execute("drop table if exists city")
    with sqlite3.connect(DATABASE) as cursor:
        cursor.execute(
            "Create Table city ("
                "id integer primary key autoincrement, "
                "name nvarchar(50), "
                "country_id integer,"
                "foreign key (country_id) references country(id)"
            ")")
        cc = (
            'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad',
            'New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia',
            'London', 'Birmingham', 'Coventry', 'Liverpool', 'Manchester',
        )
        q = "Insert into city (id, name, country_id) values (?, ?, ?)"
        for i, city in enumerate(cc):
            cursor.execute(q, (i, city, i/5))


if __name__ == '__main__':
    create_employees()
    create_countries()
    create_cities()
