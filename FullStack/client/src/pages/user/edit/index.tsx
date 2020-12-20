import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import * as _ from 'lodash';
import { createForm, formShape } from 'rc-form';
import { useStoreHook } from 'think-react-store';
export interface IEditProps {
    form: any
}

export function Edit(props: IEditProps) {
    const [files, setFiles] = useState([]);
    const ListItem = List.Item;
    const { getFieldProps, validateFields } = props.form;
    // @ts-ignore
    const { user: { editUserAsync } } = useStoreHook()
    const handleChange = (files: any[]) => {
        // 限制大小
        if (_.last(files)?.file.size / 1024 / 1024 > 0.5) {
            Toast.fail('图片尺寸不得大于0.5M');
            files.pop();
        }
        console.log(files);
        // @ts-ignore
        setFiles(files);
    };
    const handleSubmit = () => {
        if (files.length === 0) {
            Toast.fail('请上传图片');
            return
        }
        validateFields((err: any, value: any) => {
            if (err) {
                Toast.fail('form表单错误');
                return
            } else {
                // @ts-ignore
                const { tel, sign } = value;
                const {url} = files[0];
                console.log(value);
                editUserAsync({
                    id: 10,
                    tel, sign,
                    avatar: url
                })
            }
        })

    }
    return (
        <div>
            <List>
                <ListItem>
                    <ImagePicker
                        files={files}
                        // 是否显示选择框---限制图片数量
                        selectable={files.length < 1}
                        length={2}
                        onChange={handleChange}
                    ></ImagePicker>
                </ListItem>
                <ListItem>
                    <InputItem placeholder="电话"
                        {...getFieldProps('tel', {
                            rules: [{ required: true }],
                            initialValue: '110',

                        })}
                    >电话</InputItem>
                </ListItem>
                <ListItem>
                    <InputItem placeholder="签名"
                        {...getFieldProps('sign', {
                            rules: [{ required: true }],
                            initialValue: '...',

                        })}
                    >签名</InputItem>
                </ListItem>
            </List>
            <Button type='warning' size='large'
                onClick={handleSubmit}
            >提交</Button>
        </div>
    );
}


export default createForm()(Edit)