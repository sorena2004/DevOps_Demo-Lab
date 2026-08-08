from flask import Flask
import socket
import os

app = Flask(__name__)

@app.route("/")
def home():
    return f"""
    <h1>DevOps Lab</h1>

    <p>Application is running successfully ✅</p>

    <p><b>Hostname:</b> {socket.gethostname()}</p>

    <p><b>Environment:</b> {os.getenv("ENVIRONMENT","Development")}</p>
    """

@app.route("/health")
def health():
    return {
        "status":"UP"
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000)
