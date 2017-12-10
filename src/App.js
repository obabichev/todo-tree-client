import React from 'react';
import NavigationBarComponent from './components/NavigationBarComponent'
import WelcomeContentComponent from './components/WelcomeContentComponent'
import RegistrationContainer from './containers/RegistrationContainer'
import AuthenticationContainer from './containers/AuthenticationContainer'

import {HashRouter, Route} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" component={NavigationBarComponent}/>
                    <Route exact path="/" component={WelcomeContentComponent}/>
                    <Route exact path="/authentication" component={AuthenticationContainer}/>
                    <Route exact path="/registration" component={RegistrationContainer}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;