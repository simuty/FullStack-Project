import * as React from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

import {
  BsHouse,
  BsHouseFill,
  BsBag,
  BsBagFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs';

import './index.less';

export interface IMenuBarProps {
  // 是否显示tabbar
  show: boolean;
  pathname: string;
}

export interface IMenuBarState {
  items: {
    title: string;
    icon: any;
    selectedIcon: any;
    link: string;
  }[];
  selectedTab: string;
}

export default class MenuBar extends React.Component<
  IMenuBarProps,
  IMenuBarState
> {
  constructor(props: IMenuBarProps) {
    super(props);

    this.state = {
      selectedTab: 'home',
      items: [
        {
          title: '首页',
          icon: (
            <div>
              <BsHouse />
            </div>
          ),
          selectedIcon: (
            <div>
              <BsHouseFill />
            </div>
          ),
          link: '/',
        },
        {
          title: '订单',
          icon: (
            <div>
              <BsBag />
            </div>
          ),
          selectedIcon: (
            <div>
              <BsBagFill />
            </div>
          ),
          link: '/order',
        },
        {
          title: '我的',
          icon: (
            <div>
              <BsPerson />
            </div>
          ),
          selectedIcon: (
            <div>
              <BsPersonFill />
            </div>
          ),
          link: '/user',
        },
      ],
    };
  }

  public render() {
    const { show, pathname } = this.props;

    const home = this.state.items[0];
    const order = this.state.items[1];
    const user = this.state.items[2];

    const TabBarItem = TabBar.Item;
    console.log('show---', show);

    return (
      <div className="menu-bar">
        {/* 无效 */}
        {/* <TabBar hidden={false}>
          {this.state.items.map(item => {
              console.log(item);
            <TabBar.Item title={item.title} key={item.link}></TabBar.Item>;
          })}
        </TabBar> */}
        <TabBar hidden={!show}>
          <TabBarItem
            badge={1}
            title={home.title}
            key={home.link}
            icon={home.icon}
            selectedIcon={home.selectedIcon}
            selected={pathname === home.link}
            onPress={() => history.push(home.link)}
          ></TabBarItem>
          <TabBarItem
            badge={1}
            key={order.link}
            title={order.title}
            icon={order.icon}
            selectedIcon={order.selectedIcon}
            selected={pathname === order.link}
            onPress={() => history.push(order.link)}
          />
          <TabBarItem
            badge={2}
            key={user.link}
            title={user.title}
            icon={user.icon}
            selectedIcon={user.selectedIcon}
            selected={pathname === user.link}
            onPress={() => history.push(user.link)}
          />
        </TabBar>
      </div>
    );
  }
}
