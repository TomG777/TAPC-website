from flask import Flask
from flask_cors import CORS, cross_origin
from flask_mail import Mail, Message

app = Flask(__name__)
cors = CORS(app)
mail = Mail(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['MAIL_SERVER'] = 'smtp.utwente.nl'
app.config['MAIL_PORT'] = 25
app.config['MAIL_USERNAME'] = 'ICTSV Inter-Actief <tkp@inter-actief.net>'
mail = Mail(app)


@app.route('/')
@cross_origin()
def index():
    return 'Server Works! Maybe on the outside too?'


# def say_hello():
#     msg = Message('Hello',
#         sender='ICTSV Inter-Actief <tkp@inter-actief.net>',
#         recipients=['barisimre98@gmail.com'])

#     msg.body = "This is the sandbox sending"
#     # mail.send(msg)
#     return msg.body

@app.route('/mail', methods=['POST'])
@cross_origin()
def say_hello():

    first = request.form['one']
    second = request.form['two']
    return "ola"
