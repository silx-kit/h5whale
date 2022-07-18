# h5whale: a Docker application to explore HDF5 files 🐳

## Quick start 🚀

- Copy the files in `data`
- Run `docker-compose up`
- Access the viewer at `http://localhost:3000/?file=<name_of_your_file>`

## Repository contents 📦

h5whale provides Docker images to run a fullstack application to view HDF5 files in a web browser. The fullstack app is composed of two apps:

- A Python back-end app based on [h5grove](https://github.com/silx-kit/h5grove) to serve HDF5 files contained in the `data` folder through the network.
- A React front-end app based on [h5web](https://github.com/silx-kit/h5web) to display and inspect HDF5 files served by the back-end app.

Each app has its own Dockerfile and the fullstack app can be run with `docker-compose`:

```
docker-compose up
```

The viewer can be accessed at `http://localhost:3000`, the file being specified by the query param `file`. Ex: `nexus.nx` can be viewed by accessing `http://localhost:3000/?file=nexus.nx`.

## Docker images 🐋🖼️

### Back-end (h5grove_app)

The back-end app in `h5grove_app` is a simple Python script that runs a [Flask](https://flask.palletsprojects.com/) h5grove instance, deployed with [gunicorn](https://gunicorn.org/).

By default, it serves HDF5 files in the `data` folder through the port `8888`.

### Front-end (h5web_app)

The front-end app in `h5web_app` is a React application deploying the H5Web viewer with [vite](https://vitejs.dev/). It is copied from the [H5Web vite sandbox](https://codesandbox.io/s/h5webapp-vite-5c204).

By default, the viewer can be accessed `http://localhost:3000`.
