import React, { useState } from 'react';
import { Picker, List, Calendar, Button } from 'antd-mobile';
import dayjs from 'dayjs';

export interface ISearchProps {
  citys: any[];
  citysLoading: boolean;
}

export default function Search(props: ISearchProps) {
  //   const defaultCitys = [
  //     [
  //       { label: '上海', value: '1000' },
  //       { label: '北京', value: '1001' },
  //     ],
  //   ];
  const defaultSelectCity = ['1000'];

  //   const [citys, setCitys] = useState(defaultCitys);
  const [selectCity, setSelectCity] = useState(defaultSelectCity);
  const [times, setTimes] = useState('可选时间');
  const [dateShow, setDateShow] = useState(false);

  const handleChangeCity = (value: any) => {
    // console.log(value);
    // setSelectCity(value);
  };

  const handleDate = () => {
    setDateShow(!dateShow);
  };

  const handleDateConfirm = (startTime: Date, endTime: Date) => {
    const start = dayjs(startTime).format('YYYY-MM-DD');
    const end = dayjs(endTime).format('YYYY-MM-DD');
    setTimes(start + '~' + end);
    setDateShow(!dateShow);
  };

  const handleSearch = () => {
    console.log('搜索');
  };

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        {!props.citysLoading && (
          <Picker
            title="城市选择"
            data={props.citys}
            // 选中
            value={selectCity}
            // 是否联动
            cascade={false}
            // 列数
            cols={1}
            onChange={handleChangeCity}
          >
            <List.Item>可选城市</List.Item>
          </Picker>
        )}
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleDate}>
        <p className="search-time_left">出租时间</p>
        <p className="search-time_right">{times}</p>
      </div>
      {/* 点击按钮 */}
      <Button type="warning" size="large" onClick={handleSearch}>
        搜索民宿
      </Button>
      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        // @ts-ignore
        onConfirm={handleDateConfirm}
      >
        日历
      </Calendar>
    </div>
  );
}
