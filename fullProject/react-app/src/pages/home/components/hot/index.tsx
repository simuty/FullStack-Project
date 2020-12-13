import React, { useState } from 'react';
import { history } from 'umi';

export interface IHotProps {
  houses: IHouseType[];
  housesLoading: boolean;
}

interface IHouseType {
  title: string;
  price: string;
  info: string;
  img: string;
  id: number;
}

export default function Hot(props: IHotProps) {
  const { houses = [], housesLoading = true } = props;

  const handleClick = (id: number) => {
    history.push({
      pathname: '/house',
      query: { id },
    });
  };
  return (
    <div className="hot">
      <h3>最热民宿</h3>
      <div className="hot-lists">
        {!housesLoading &&
          houses.map(item => (
            <div
              className="hot-lists-item"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <img src={item.img} alt="" />
              <div className="title">{item.title}</div>
              <div className="info">{item.info}</div>
              <div className="price">¥{item.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
