import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {Router} from 'react-router-dom';
import store from ',/store';
import './assets/styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App/>
        {/*<Router history={history}>*/}
            {/*<App/>*/}
        {/*</Router>    */}
    </Provider>, document.getElementById('root'));
registerServiceWorker();
