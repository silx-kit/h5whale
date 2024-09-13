import './index.css';

import { assertNonNull, enableBigIntSerialization } from '@h5web/app';
import { createRoot } from 'react-dom/client';

import MyApp from './MyApp';

enableBigIntSerialization();

const rootElem = document.querySelector('#root');
assertNonNull(rootElem);

createRoot(rootElem).render(<MyApp />);
