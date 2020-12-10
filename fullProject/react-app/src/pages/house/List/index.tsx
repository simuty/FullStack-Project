import * as React from 'react';

export interface IListProps {}

export default function List(props: IListProps) {
  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        <div className="comment-lists_item">
          <img src="http://dummyimage.com/360x200/00405d/FFF&text=user" alt="user" className="avatar" />
          <div className="right">
            <div className="right-top">
              <p>{'user'}</p>
              <p>{'time'}</p>
            </div>
            <div className="right-bottom">
                {'info'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
