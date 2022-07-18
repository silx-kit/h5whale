FROM python:slim-bullseye

WORKDIR /h5grove_app
RUN pip install h5grove[flask]
RUN pip install gunicorn

COPY main.py .

ENV PYTHONUNBUFFERED=1
EXPOSE 8888
ENTRYPOINT ["gunicorn"]
CMD ["-b", "0.0.0.0:8888", "main:get_app(basedir='/data')"]
