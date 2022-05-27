import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { ThemeProvider } from 'styled-components'
import theme from './components/stylesheet'
import { Provider } from 'react-redux';
import store from './store';
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <Provider store={store}>
      <App />
    </Provider>

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
