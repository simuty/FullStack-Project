import React, { useState } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import { history } from 'umi';

export interface ISearchProps {
  citys: any;
  citysLoading: boolean;
}

export default function Search(props: ISearchProps) {

    // !因为先加载后http请求，没有默认值，UI组件会报错，所以设置个默认值。
  const defaultCitys = [[{ label: '上海', value: '1000' }]];
  const defaultSelectCity = ['1000'];

  const { citys = defaultCitys, citysLoading = false } = props;

  //   const [citys, setCitys] = useState(defaultCitys);
  const [selectCity, setSelectCity] = useState(defaultSelectCity);
  const [times, setTimes] = useState('可选时间');
  const [dateShow, setDateShow] = useState(false);

  const handleChangeCity = (value: any) => {
    // console.log(value);
    setSelectCity(value);
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
    if (times.includes('~')) {
      history.push({
        pathname: '/search',
        query: {
          value: 'sss',
          startTime: times.split('~')[0],
          endTime: times.split('~')[1],
        },
      });
    } else {
      Toast.fail('请选择时间');
    }
  };

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        {!citysLoading && (
          <Picker
            title="城市选择"
            data={citys}
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
