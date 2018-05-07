import	'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Ons from 'onsenui'

import Headline from './Containers/firstPage';

Ons.platform.select('ios');
import './sass/main.scss';
import	storyFactory from './store/configureStore'

const store = storyFactory();
class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <Headline />
            </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
