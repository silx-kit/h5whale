import { App, H5GroveProvider } from '@h5web/app';

function MyApp() {
  const query = new URLSearchParams(window.location.search);
  const file = query.get('file');
  const url = import.meta.env.VITE_H5GROVE_URL as string;
  const port = import.meta.env.VITE_H5GROVE_PORT as string;

  if (!file) {
    return (
      <p>
        Provide a file name by adding
        <pre>?file=...</pre>
        to the URL.
      </p>
    );
  }

  return (
    <H5GroveProvider
      url={port ? `${url}:${port}` : url}
      filepath={file}
      axiosConfig={{ params: { file } }}
    >
      <App />
    </H5GroveProvider>
  );
}

export default MyApp;
