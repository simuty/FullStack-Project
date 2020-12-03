import * as React from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';

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
    selectIcon: any;
    link: string;
  }[];
}

export default class MenuBar extends React.Component<
  IMenuBarProps,
  IMenuBarState
> {
  constructor(props: IMenuBarProps) {
    super(props);

    this.state = {
      items: [
        {
          title: '首页',
          icon: (
            <BsHouse
              style={{
                fontSize: 1.5,
              }}
            />
          ),
          selectIcon: (
            <BsHouseFill
              style={{
                fontSize: 1.5,
              }}
            />
          ),
          link: '/',
        },
        {
          title: '订单',
          icon: (
            <BsBag
              style={{
                fontSize: 1.5,
              }}
            />
          ),
          selectIcon: (
            <BsBagFill
              style={{
                fontSize: 1.5,
              }}
            />
          ),
          link: '/',
        },
        {
          title: '我的',
          icon: (
            <BsPerson
              style={{
                fontSize: 1.5,
              }}
            />
          ),
          selectIcon: (
            <BsPersonFill
              style={{
                fontSize: 1.5,
              }}
            />
          ),
          link: '/user',
        },
      ],
    };
  }

  public render() {
    const { show } = this.props;
    return (
      <div className="menu-bar">
        <TabBar>
          {this.state.items.map(item => {
              console.log(item);
            <TabBar.Item title={'1111'} key={1}></TabBar.Item>;
          })}
        </TabBar>

        <h1>1111</h1>
        {console.log(this.state.items)}
        <TabBar
          hidden={false}
          //   hidden={!show}
          //   unselectedTintColor="#949494"
          //   tintColor="#33A3F4"
          //   barTintColor="#33A3F4"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            // icon={<div style={{
            //   width: '22px',
            //   height: '22px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            // />
            // }
            // selectedIcon={<div style={{
            //   width: '22px',
            //   height: '22px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            // />
            // }
            // selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            // onPress={() => {
            // //   this.setState({
            // //     selectedTab: 'blueTab',
            // //   });
            // }}
            // data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>

          {this.state.items.map(item => {
            console.log(item.title);
            <TabBar.Item
              badge={100}
              key={item.link}
              title={item.title}
              //   icon={item.icon}
              //   selected={item.selectIcon}
              //   onPress={() => history.push(item.link)}
            ></TabBar.Item>;
          })}
        </TabBar>
      </div>
    );
  }
}
