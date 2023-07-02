# from controllers import create_app
# app = create_app()
from app import app

@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == "__main__":
    app.run(debug=True)
