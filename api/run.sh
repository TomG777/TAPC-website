cd ~/dev/TAPC-website/api/sandbox
export FLASK_ENV=development
export FLASK_APP=app.py
pip3 install -U flask-cors
pip3 install Flask-Mail
flask run --port=4242