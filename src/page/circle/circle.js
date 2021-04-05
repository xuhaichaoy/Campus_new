import React from 'react'
import Swiper from 'swiper';
import { Link } from 'react-router-dom'
import { PullToRefresh } from 'antd-mobile';
import CircleHook from '../../hooks/circleHook'
import CircleComponent from '../../component/circle/circle';
import "./circle.css";
import "swiper/swiper-bundle.css"

function Circle() {

    const [refreshing, down, style, refresh] = CircleHook()

    const newlist = [1, 1, 1, 1, 1, 1]

    new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
        virtual: {
            slides: newlist,
        },
    });

    return (
        <div className="circle">
            <PullToRefresh
                damping={60}
                // ref={el => this.ptr = el}
                style={style}
                indicator={down ? {} : { deactivate: '上拉可以刷新' }}
                direction={down ? 'down' : 'up'}
                refreshing={refreshing}
                onRefresh={refresh}
            >

                <div className="mineCircle">
                    <div className="mineCircleTop">
                        <div className="mineCircleName">
                            我的圈子
                        </div>
                        <div className="mineCircleMore">
                            <Link to="/managecircle">
                                查看更多
                            </Link>
                        </div>
                    </div>
                    <div className="mineCircleContent">
                        <div className="mineCircleItemBox">
                            <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            <Link to="/circledetail/1"><span>建行卡圣诞开始</span></Link>
                        </div>
                        <div className="mineCircleItemBox">
                            <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            <span>hhhhhhhh</span>
                        </div>
                        <div className="mineCircleItemBox">
                            <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            <span>呀呀呀呀呀</span>
                        </div>
                        <div className="mineCircleItemBox">
                            <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            <span>建行卡圣就开始</span>
                        </div>
                        <div className="mineCircleItemBox">
                            <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            <span>建行卡圣诞开始</span>
                        </div>
                    </div>
                </div>

                <div className="mineCareful">
                    <div className="mineCarefullyBox">
                        <div className="mineCareTopBox">
                            <div className="mineCareTopName">
                                精选推荐
                            </div>

                            <div className="mineCareTopMore">
                                <Link to="/allcircle">
                                    查看更多
                                </Link>
                            </div>
                        </div>
                        <div className="mineCareTopTips">
                            最适合你的都在这了
                        </div>
                    </div>
                    <div className="swiper-container swiperContainer">
                        <div className="swiper-wrapper">
                            {newlist.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img
                                            className="swiperImgBox"
                                            src="//pic.cgyouxi.com/orange/title/1606757715_1823.gif!n600"
                                        />
                                        <div className="swiperTitleBox">
                                            <div className="swiperTitleName">
                                                BliaBliaBlia
                                        </div>
                                            <div className="swiperTitleBtn">
                                                立即加入
                                        </div>
                                        </div>
                                        <div className="swiperBottomBox">
                                            <div className="swiperBottomIcon">
                                                <img src="//pic.cgyouxi.com/orange/upload/202012/79031351_730e30a97d622308c637df4271bbdbfd.jpg!n300" />
                                            </div>
                                            <div className="swiperBottomContent">
                                                <div className="swiperBottomCName">
                                                    你怎么知道?
                                            </div>
                                                <div className="swiperBottomCNum">
                                                    成员207人
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <CircleComponent />


            </PullToRefresh>

        </div>
    );
}

export default Circle