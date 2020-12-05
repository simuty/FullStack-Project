import React, { useState } from 'react';

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

  //   const [houseList, setHouseList] = useState(defaultHouseList);

  return (
    <div className="hot">
      <h3>最热民宿</h3>
      <div className="hot-lists">
        {!props.housesLoading &&
          props.houses.map(item => (
            <div className="hot-lists-item">
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
