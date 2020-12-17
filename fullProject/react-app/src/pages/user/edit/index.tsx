import React, { useState } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import * as _ from 'lodash';
export interface IEditProps {}

export default function Edit(props: IEditProps) {
  const [files, setFiles] = useState([]);
  const ListItem = List.Item;
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
          <InputItem placeholder="电话">电话</InputItem>
        </ListItem>
        <ListItem>
          <InputItem placeholder="签名">签名</InputItem>
        </ListItem>
      </List>
      <Button type='warning' size='large'>提交</Button>
    </div>
  );
}
