import React, { useState } from 'react'
import { Modal, Form, Input, Icon } from 'antd';

function ModalCreateBook({ active, setActive, form: { getFieldDecorator, validateFields } }) {
    const [loading, setLoading] = useState(false)

    function onModalSubmit() {
        validateFields((err, values) => {
            if (!err) {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    setActive(false)
                }, 1000)
            }

        })
    }
    console.log(active)

    return (
        <Modal
            title="Title"
            visible={active}
            onOk={onModalSubmit}
            confirmLoading={loading}
            onCancel={() => setActive(false)}
        >
            <Form>
                <Form.Item>
                    {getFieldDecorator('firstname', {
                        rules: [{ required: true, message: 'Digite seu primeiro nome' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Nome"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('lastname', {
                        rules: [{ required: true, message: 'Digite seu sobrenome!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Sobrenome"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Digite seu email!' }],
                    })(
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="E-mail"

                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Digite sua senha!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Senha"
                        />,
                    )}
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Form.create({ name: 'create-book' })(ModalCreateBook)