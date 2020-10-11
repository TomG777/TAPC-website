cd ~/dev/TAPC-website/api/sandbox
export FLASK_ENV=development
export FLASK_APP=app.py
pip3 install -U flask-cors
pip3 install Flask-Mail
flask run --host 0.0.0.0 --port=4242