import React, {Component} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import { connect } from 'react-redux'

import Login from './modules/login/index'
import {messages} from './config/i18n.config'


const mapStateToProps = (state, ownProps) => {
    return {
        system: state.system
    }
}

class App extends Component {
    render() {
        const currentLang = this.props.system.language
        return (
            <IntlProvider locale={currentLang} messages={messages[currentLang]}>
                <Router>
                    <div>
                        <Route exact path="/" component={Login}/>
                    </div>
                </Router>
            </IntlProvider>
        )
    }
}

export default connect(mapStateToProps)(App)
