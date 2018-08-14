import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            let { userName, password} = values;
            if (err) {
                console.log('Received values of form: ', values);
            }else{
                console.log('vvv');
                fetch('/api/signIn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'user=' + userName + '&pwd=' + password,
                    credentials: 'include'
                }).then(
                    res => {
                        res.json().then(data => {
                            window.localStorage.setItem('user',userName);
                            window.location.href='/';
                        })
                    });
            }

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm