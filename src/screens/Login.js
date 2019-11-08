import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import './Login.scss'
function Login({ form: { getFieldDecorator } }) {

    function handleSubmit() {

    }

    return (
        <div className="login-wrapper">
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <div className="justify-between">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                    </Button>
                        Or
                    <Link to="/register">register now!</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );

}

export default Form.create({ name: 'login' })(Login)