#!/usr/bin/env python
# coding: utf-8
import argparse
from flask import Flask
from flask_compress import Compress
from flask_cors import CORS
import os

# Disable libhdf5 file locking since h5grove is only reading files
# This needs to be done before any import of h5py, so before h5grove import
os.environ["HDF5_USE_FILE_LOCKING"] = "FALSE"

from h5grove.flask_utils import BLUEPRINT as h5grove_blueprint  # noqa


def parser_fn():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "-p", "--port", type=int, default=8888, help="Port the server is listening on"
    )
    parser.add_argument(
        "--ip", default="localhost", help="IP the server is listening on"
    )
    parser.add_argument(
        "--basedir",
        default=".",
        help="Base directory from which to retrieve HDF5 files",
    )
    return parser


def get_app(basedir):
    # Create Flask application
    app = Flask(__name__)

    # Enable cross-origin resource sharing, see https://flask-cors.readthedocs.io
    CORS(app)

    # Enable compression, see https://github.com/colour-science/flask-compress
    Compress(app)

    # Configure h5grove default endpoints
    app.config["H5_BASE_DIR"] = os.path.abspath(basedir)
    app.register_blueprint(h5grove_blueprint)

    return app


if __name__ == "__main__":
    parser = parser_fn()
    options = parser.parse_args()

    app = get_app(basedir=options.basedir)

    # Start server
    app.run(port=options.port, host=options.ip)
