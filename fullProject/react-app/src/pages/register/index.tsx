import * as React from 'react';
import { history } from 'umi'
import { Toast, List, InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import './index.less'
import { useStoreHook } from 'think-react-store';

export interface IRegisterProps {
    form: any
}

export function Register(props: IRegisterProps) {
    const { getFieldProps, validateFields } = props.form;
    const ListItem = List.Item;
    // @ts-ignore
    const { login: { registerAsync } } = useStoreHook()

    const handleSubmit = () => {
        validateFields((err: any, value: any) => {
            if (err) {
                Toast.fail('输入有误')
            } else {
                const { pwd, pwd2, userName } = value;
                if (pwd !== pwd2) {
                    Toast.fail('两次密码不一致')
                }
                registerAsync({
                    userName, pwd
                })
            }
        })
    }
    const handleClick = () => {
        history.push({
            pathname: '/login'
        })
    }
    return (
        <div>
            <div className="register-page">
                用户注册页面
                <List>
                    {/* <ListItem> */}
                        <InputItem placeholder='用户名'
                            {...getFieldProps('userName', {
                                rules: [{ required: true }],
                                initialValue: ''
                            })}
                        >用户名
                        </InputItem>
                    {/* </ListItem> */}
                    {/* <ListItem> */}
                        <InputItem placeholder='密码'
                            {...getFieldProps('pwd', {
                                rules: [{ required: true }],
                                initialValue: ''
                            })}
                        >密码
                        </InputItem>
                    {/* </ListItem> */}
                    {/* <ListItem> */}
                        <InputItem placeholder='请再次输入密码'
                            {...getFieldProps('pwd2', {
                                rules: [{ required: true }],
                                initialValue: ''
                            })}
                        >确认密码
                        </InputItem>
                    {/* </ListItem> */}
                </List>
                <Button type='warning' size='large' onClick={handleSubmit}>注册</Button>
                <div className='login' onClick={handleClick}>已有账号，去登陆</div>
            </div>

        </div>
    );
}

export default createForm()(Register)
