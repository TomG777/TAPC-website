cd sandbox
python3 -m venv venv
cd venv/bin
activate
cd ..
cd ..
export FLASK_ENV=development
export FLASK_APP=app.py
pip3 install -U flask-cors
pip3 install Flask-Mail
flask run