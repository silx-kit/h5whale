FROM python:slim-bullseye

# https://docs.python.org/3/using/cmdline.html#cmdoption-u
ENV PYTHONUNBUFFERED=1

WORKDIR /h5grove_app
RUN pip install h5grove[flask]==2.2.0
RUN pip install gunicorn

COPY main.py .

ARG H5GROVE_APP_PORT=8888
EXPOSE $H5GROVE_APP_PORT
ENV GUNICORN_CMD_ARGS="--bind 0.0.0.0:$H5GROVE_APP_PORT"

ENTRYPOINT ["gunicorn"]
CMD ["main:get_app(basedir='/data')"]
