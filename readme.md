# install requirements
pip install -r requirements.txt
# Para ejecutar la aplicacion en local 
flask --app main run

# flask
A minimal Flask web application.

For a step-by-step guide to deploying on [Railway](https://railway.app/?referralCode=alphasec), see [this](https://alphasec.io/how-to-deploy-a-python-flask-app-on-railway/) post, or click the button below.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/igzwwg?referralCode=alphasec)


# Crear entorno virtual
conda create --name cac_env python=3.8

# Activar el entorno virtual
conda activate cac_env

# Instalar Flask
conda install -c anaconda flask

# instalar flask con pip
pip install Flask

# ahora la api rest
pip install Flask Flask-RESTful

# para obtener requirements.txt
pip freeze > requirements.txt
