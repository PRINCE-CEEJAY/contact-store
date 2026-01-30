from flask import Flask, url_for, render_template, redirect, request
import sqlite3
import os

app = Flask(__name__)

DB_PATH = "db/contacts.db"

# create db directory if not exist
os.makedirs('db', exist_ok=True)

# initialize database
def init_db():
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute('''
                CREATE TABLE IF NOT EXISTS contacts (
                    id INTEGER PRIMARY KEY,
                    firstname TEXT NOT NULL,
                    middlename TEXT NOT NULL,
                    lastname TEXT NOT NULL,
                    phone TEXT NOT NULL
                    )
                ''')

# all contacts
def get_contacts():
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute('SELECT * FROM contacts')
        contacts = cursor.fetchall()
        return contacts

# delete single contact
def delete_contact(id):
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute('DELETE FROM contacts WHERE id = ?', (id,))

# get single contact       
def get_contact(id):
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute('SELECT FROM contacts WHERE id = ?', (id,))
        contact = cursor.fetchone()
        return contact
        
# add single contact
def add_contact(data: dict):
    with sqlite3.connect(DB_PATH) as con: 
        cursor = con.cursor()     
        cursor.execute('INSERT INTO contacts (firstname, middlename, lastname, phone) VALUES (:firstname, :middlename, :lastname, :phone)', (data))

def update_contact(data: dict):
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute('UPDATE contacts SET :firstname = ?, :middlename = ?, :lastname = ?, :phone = ?, WHERE :id = ?', (dict))
    

# ROUTES
# home route
@app.route('/')
def home():
    return "Flask is running..."

@app.route('/add_contact', methods = ['POST'])
def add_contact_route():
    add_contact({
        "firstname": request.form['firstname'],
        "middlename": request.form['middlename'],
        "lastname": request.form['lastname'],
        "phone": request.form['phone'],
    })



# all
@app.route('/show_contacts', methods = ['GET'])
def get_contacts():
    contacts = get_contacts()
    return render_template(url_for('show_contacts.html'), contacts = contacts)

# single 
@app.route('/show_contact', methods = ['GET'])
def get_contact():
    contact = get_contact(id)
    return render_template(url_for('show_contact.html'), contact = contact)

@app.route('/update_contact/<int:id>', methods = ['GET', 'POST'])
def update_contact_route(id):
    if request.method == 'POST':
        update_contact({
            "firstname": request.form['firstname'],
            "middlename": request.form['middlename'],
            "lastname": request.form['lastname'],
            "phone": request.form['phone'], 
            "id": id
        })
        return redirect(url_for('index'))
    # prefill form with the most recent
    with sqlite3.connect(DB_PATH) as con:
        cursor = con.cursor()
        cursor.execute('SELECT FROM contacts WHERE id = ?', (id,))
        userdata = cursor.fetchone()
        return render_template(url_for('show_contact.html', userdata = userdata))


@app.route('/delete_contact/<int:id>', methods = ['GET'] )
def delete_contact_route(id):
    delete_contact(id)
    return redirect(url_for('index.html'))


if __name__ == "__main__":
    init_db()
    app.run(debug = True)