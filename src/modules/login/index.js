/**
 * @Description:登录主入口
 * @author 云离
 * @date: 2018/12/28
 */
import React, { Component } from 'react'
import './index.css'
import {Card} from 'antd'
import LoginForm from './components/LoginForm'
import defaultI18n from '../../i18n/zh-CN'
import {injectIntl} from 'react-intl'
class Login extends Component {
    render() {
        return (
            <div className="login-view">
                <Card
                    className="login-form-card"
                    title={this.props.intl.formatMessage({
                      id: 'login',
                      defaultMessage: defaultI18n.login
                    })}
                    style={{ width: 300 }}>
                    <LoginForm/>
                </Card>,
            </div>
        )
    }
}

export default injectIntl(Login)
