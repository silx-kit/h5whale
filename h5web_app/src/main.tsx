import './index.css';

import { assertNonNull } from '@h5web/app';
import { createRoot } from 'react-dom/client';

import MyApp from './MyApp';

const rootElem = document.querySelector('#root');
assertNonNull(rootElem);

createRoot(rootElem).render(<MyApp />);
