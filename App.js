import React from 'react';
import { NativeRouter, Route, Switch} from 'react-router-native'
import createStore from './store';
import { Provider } from 'react-redux';
import Menu from './containers/Menu';
import Game from './containers/Game';

const App = () => ( 
    <Provider store={createStore()}>
        <NativeRouter>
            <Switch>
                <Route exact path="/" component={Game}/>
                <Route path="/game" component={Menu}/>
            </Switch>
        </NativeRouter>
    </Provider>
);

export default App;
