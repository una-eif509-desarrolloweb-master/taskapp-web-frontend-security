import React, { useState } from "react";
import { Form, Input, PageHeader, Button} from 'antd';

const layout = {
    labelCol: {
        span: 2,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 8,
    },
};

const Home = (props) => {
    const [form] = Form.useForm();
    const [error, setError] = useState(false);

    /**
     * React Hooks
     * https://reactjs.org/docs/hooks-reference.html
     */

    /** Service methods **/

    /** Handle actions in the Form **/

    /** General Methods **/

    return (
        <div>
            HOME
        </div>
    )
};

export default Home;