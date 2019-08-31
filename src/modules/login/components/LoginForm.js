/**
 * @Description:
 * @author 云离
 * @date: 2018/12/29
 */
import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import {withRouter} from 'react-router-dom'
import {FormattedMessage, injectIntl} from 'react-intl'
import defaultI18n from '../../../i18n/zh-CN'

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {userName, password, remember} = values
                console.log(userName, password, remember)
            }
        });
    }
    componentDidMount () {
        const userName = window.localStorage.getItem('userName') || ''
        const password = window.localStorage.getItem('password') || ''
        const remember = window.localStorage.getItem('check') || false
        this.props.form.setFieldsValue({
            userName,
            password,
            remember
        })
    }

    render() {
        const self = this
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: self.props.intl.formatMessage({
                            id: 'pleaseEnterUsername',
                            defaultMessage: defaultI18n.pleaseEnterUsername
                          })}],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={this.props.intl.formatMessage({
                          id: 'username',
                          defaultMessage: defaultI18n.username
                        })} autoComplete="off"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: self.props.intl.formatMessage({
                            id: 'pleaseEnterPassword',
                            defaultMessage: defaultI18n.pleaseEnterPassword
                          })}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder={this.props.intl.formatMessage({
                          id: 'password',
                          defaultMessage: defaultI18n.password
                        })} autoComplete="off"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        <FormattedMessage id="login" defaultMessage="登录" />
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default withRouter(injectIntl(Form.create()(NormalLoginForm)))
