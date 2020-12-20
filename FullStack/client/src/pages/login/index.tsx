import * as React from 'react';
import { history } from 'umi'
import { Toast, List, InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import './index.less'
import { useStoreHook } from 'think-react-store';

export interface IRegisterProps {
    form: any
}

export function Login(props: IRegisterProps) {
    const { getFieldProps, validateFields } = props.form;
    const ListItem = List.Item;
    console.log(useStoreHook())
    // @ts-ignore
    const { login: { loginAsync } } = useStoreHook()
    const handleSubmit = () => {
        validateFields((err: any, value: any) => {
            if (err) {
                Toast.fail('输入有误')
            } else {
                const { pwd, userName } = value;
                loginAsync({
                    userName, pwd
                })
            }
        })
    }
    const handleClick = () => {
        history.push({
            pathname: '/register'
        })
    }
    return (
        <div>
            <div className="login-page">
                用户登陆页面
                <List>
                    {/* <ListItem> */}
                        <InputItem placeholder='用户名'
                            {...getFieldProps('userName', {
                                rules: [{ required: true }],
                                initialValue: ''
                            })}
                        >用户名
                        </InputItem>
                    {/* </ListItem>
                    <ListItem> */}
                        <InputItem placeholder='密码'
                            {...getFieldProps('pwd', {
                                rules: [{ required: true }],
                                initialValue: ''
                            })}
                        >密码
                        </InputItem>
                    {/* </ListItem> */}
                </List>
                <Button type='warning' size='large' onClick={handleSubmit}>登录</Button>
                <div className='register' onClick={handleClick}>没有账号，去注册</div>
            </div>

        </div>
    );
}

export default createForm()(Login)
