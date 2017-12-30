import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import routes from "./navigation/routes";
import options from "./navigation/options";
import {Root} from "native-base";

const AppNavigator = StackNavigator(routes, options);

const App = () =>
    <Root>
        <AppNavigator/>
    </Root>

export default App;
