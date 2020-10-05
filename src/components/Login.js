import React, { useState, useRef } from "react";
import { Form, Input, PageHeader, Button} from 'antd';
import { EyeInvisibleOutlined, ExclamationCircleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';

import AuthService from "../services/auth.service";

const layout = {
    labelCol: {
        span: 2,
    },
    wrapperCol: {
        span: 3,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 8,
    },
};

const Login = (props) => {
    const [form] = Form.useForm();
    const [login, setLogin] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    /**
     * React Hooks
     * https://reactjs.org/docs/hooks-reference.html
     */

    /** Service methods **/
    const loginMethod = () => {
        AuthService.login(login)
            .then(response => {

                console.log(login);
                setLogin(response.data);
                setSubmitted(true);
                form.resetFields();
                props.history.push("/priority");
                window.location.reload();
            })
            .catch(err => {
                setError(true);
                console.log(err);
            });
    }

    /** Handle actions in the Form **/

    const handleInputChange = event => {
        let { name, value } = event.target;
        setLogin({ ...login, [name]: value });
    };

    /** General Methods **/

    const onFinish = data => {
        console.log(login);
        loginMethod();
    };

    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} >
                <Form.Item
                    name="username"
                    label="User Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        name="username"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        onChange={handleInputChange}
                        placeholder="User Name"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password
                        name="password"
                        onChange={handleInputChange}
                        placeholder="your password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default Login;