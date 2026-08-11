#Nginx as a Reverse-Proxy

<br>1) Dockerize the flask app
<br>2) Run the app as container
<br>3) Set Nginx as reverse-proxy

```text
├── Nginx-as-Reverse-Proxy/
    |
    ├── app/
    |       ├── app.py
    |       ├── test.py
    |       └── requirements.txt
    ├── docker-compose.yml
    ├── Dockerfile
    |
    ├── nginx/
    |     └── default.conf
    └── README.md

Author: Hossein Moradi
