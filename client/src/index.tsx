import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
import './index.css';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 155cb716278e134386ea3ca3410fe1ad2c7b30c9

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
<<<<<<< HEAD

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
=======
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 155cb716278e134386ea3ca3410fe1ad2c7b30c9
