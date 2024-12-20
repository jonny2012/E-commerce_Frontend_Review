import ReactDOM from 'react-dom/client';
import App from './App';
import styles from "./index.module.scss"
import { Provider } from 'react-redux';

import { setupStore } from './redux/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = setupStore()

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

