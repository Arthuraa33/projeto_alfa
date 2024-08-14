# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /code/backend/
# COPY backend/requirements.txt /code/
COPY ./backend /code/backend

RUN pip install -r requirements.txt

# RUN python manage.py makemigrations
# RUN python manage.py migrate

WORKDIR /code/backend/

# RUN python3 manage.py makemigrations && python3 manage.py migrate

