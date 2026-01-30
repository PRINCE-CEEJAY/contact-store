from flask import Flask, url_for, render_template, redirect, request
import sqlite3
import os

DB_PATH = "db/auth.db"

app = Flask(__name__)

# create db directory if not exist
os.makedirs('db', exist_ok=True)

def init_db():
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute(''' CREATE TABLE IF NOT EXIST auth (
                       id INTEGER PRIMARY KEY,
                       email TEXT NOT NULL,
                       password TEXT NOT NULL
                       )       
        ''')

@app.route('/auth/register')
def register_user(email, password):
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute(' INSERT INTO auth VALUES (?, ?)', (email, password,))

@app.route('/auth/login')
def login_user():
    ...

if __name__ == "__main__":
    init_db()
    app.run(debug = True)