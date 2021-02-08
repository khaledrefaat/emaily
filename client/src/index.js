import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './componenets/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
