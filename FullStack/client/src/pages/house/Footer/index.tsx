import React, { useState, useEffect } from 'react';
import { Modal } from '@/components';
import { TextareaItem, Button, Toast } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  const [show, setShow] = useState(false);
  const [commentsValue, setCommentsValue] = useState('');

  const {
    // @ts-ignore
    house: { addCommentAsync },
  } = useStoreHook();

  useEffect(() => {}, []);

  const handleClick = () => {
    console.log('点击');
    setShow(true);
  };
  const handleClose = () => {
    console.log('关闭');
    setShow(false);
    setCommentsValue('');
  };

  const handleSubmit = () => {
    console.log('提交', commentsValue);
    if (commentsValue) {
      addCommentAsync({
        url: 'house/comment/add',
        payload: commentsValue,
      });
      handleClose();
    } else {
      Toast.fail('请添加信息');
    }
  };

  const handleChange = (value: string) => {
    setCommentsValue(value);
  };
  return (
    <div>
      <div className="footer" onClick={handleClick}></div>
      <Modal
        show={show}
        styleBody={{
          height: '220px',
          bottom: '0px',
          top: 'unset',
        }}
        onClose={handleClose}
      >
        <div className="modal-comment">
          <TextareaItem
            rows={2}
            count={200}
            onChange={() => handleChange}
            placeholder={'评论'}
          ></TextareaItem>
          <Button className="comment-btn" type="warning" onClick={handleSubmit}>
            评论
          </Button>
        </div>
      </Modal>
    </div>
  );
}
