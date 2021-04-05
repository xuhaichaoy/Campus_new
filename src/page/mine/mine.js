import { Link } from 'react-router-dom'
import "./mine.css";

import { List } from 'antd-mobile';

const Item = List.Item;

function Mine() {

    return (
        <div className="mine">
            <div className="mineTopBox">
                <Link to="/personal">
                    <div className="mineTopBoxBtn">
                        <span>个人主页</span>
                        <i></i>
                    </div>
                </Link>
                <div className="mineTopUserContent">
                    <div className="mineUserBox">
                        <img src="//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                        <div className="mineUserName">
                            海超
                        </div>
                    </div>
                    <div className="mineUserTips">
                        <div className="mineUserItem">
                            <i>2</i>
                            <span>关注</span>
                        </div>
                        <div className="mineUserItem">
                            <i>2</i>
                            <span>粉丝</span>
                        </div>
                        <div className="mineUserItem">
                            <i>2</i>
                            <span>收藏</span>
                        </div>
                        <div className="mineUserItem">
                            <i>2</i>
                            <span>草稿箱</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mineContent">

                <List renderHeader={() => ''} className="my-list">
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        我的消息
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        我的足迹
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        手机通讯录
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        APP分享
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        清理缓存
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        黑名单
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        设置
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => { }}
                        platform="android"
                        className="myMineItem"
                    >
                        关于
                    </Item>

                </List>
                <List renderHeader={() => 'HaiChao 2021'} className="my-list1">


                </List>

            </div>

        </div>
    );
}

export default Mine;
