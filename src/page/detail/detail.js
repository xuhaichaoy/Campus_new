import React from "react";
import DetailHook from '../../hooks/detailHook'
// import api from '../../config/http';
import "./detail.css";

import { NavBar, Tabs, WhiteSpace, Badge, Icon } from 'antd-mobile';
import Textarea from '../../component/textarea/textarea';
import Comment from '../../component/comment/comment';
import Like from '../../component/like/like';

function Detail() {
    const [showTextarea, tabs, returnBack, cancelInput, handleClick] = DetailHook()

    tabs.map((tabs) => {
        return <Badge key={tabs}>{tabs}</Badge>
    })
    return (
        <div>
            <div className="detailIndex">
                <NavBar
                    className="detailNavBar"
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={returnBack}
                    rightContent={[
                        <span key="0" style={{ marginRight: '16px' }}>关注</span>,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >Detail详情页</NavBar>
                <div className="detailNavBarHidden">

                </div>
                <div className="detailContent">
                    <div className="detailContentTitle">
                        标题u红红火火恍恍惚惚
                    </div>
                    <div className="detailContentUserBox">
                        <div className="detailUserImgs">
                            <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                        </div>
                        <div className="detailUserContent">
                            <div className="detailUserContentName">
                                namenamename
                            </div>
                            <div className="detailUserTime">
                                2021-02-28
                            </div>
                        </div>
                    </div>
                    <div className="detailText">
                        唉，士大夫喀什地方骄傲撒大家看法哈桑雕刻技法合适的卡就发啊是大家看法第三方撒地方撒地方撒地方是的就
                        按时打卡激发函数的肌肤上的飞机哈士大夫喀什地方撒地方速度加快恢复咯技术的发上雕刻技法是大家看法和
                        困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了
                    </div>
                    <div className="detailImgs">
                        <img src="//pic.cgyouxi.com/orange/upload/202012/79031554_2fa4ff1e09657db2a72f3d4f3b2ef859.jpg!n300" className="detailImgItem" />
                        <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="detailImgItem" />
                        <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="detailImgItem" />
                    </div>
                </div>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'block', backgroundColor: '#fff' }}>
                        <Comment />
                    </div>
                    <div style={{ display: 'block', backgroundColor: '#fff' }}>
                        <Like />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of fourth tab
                    </div>
                </Tabs>
                {/* <WhiteSpace /> */}
                <div className="bottomTipsHidden">
                </div>
                <div className="bottomTips">
                    <div className="bottomReplyHidden" onClick={handleClick}>
                        <div className="replyHiddenIcon">
                        </div>
                        <span>写回复...</span>
                    </div>
                    <div className="bottomLike bottomItem">
                        <i></i>
                    </div>
                    <div className="bottomForward bottomItem">
                        <i></i>
                    </div>
                    <div className="bottomFav bottomItem">
                        <i></i>
                    </div>

                </div>
            </div>
            {showTextarea ? (<div className="ReplyBox" onClick={cancelInput}>
                <Textarea />
            </div>) : ''}


        </div>
    )
}


export default Detail;
