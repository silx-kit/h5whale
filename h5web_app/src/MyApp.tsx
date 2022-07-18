import { App, H5GroveProvider } from '@h5web/app';

function MyApp() {
  const query = new URLSearchParams(window.location.search);
  const file = query.get('file');

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
      url="http://localhost:8888/"
      filepath={file}
      axiosConfig={{ params: { file } }}
    >
      <App />
    </H5GroveProvider>
  );
}

export default MyApp;
