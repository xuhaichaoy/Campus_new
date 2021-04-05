import React from "react";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./answer.css";
import { PullToRefresh } from 'antd-mobile';

import AnswerHook from '../../hooks/answerHook'



function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

function Answer() {
    const [refreshing, down, style, refresh] = AnswerHook()

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
                <div className="questionBox">
                    <div className="hotQuestBox">
                        <div className="hotQuestTitle">
                            <div className="hotQuestLeft">
                                热门问题
                            </div>
                            <div className="hotQuestRight">
                                查看更多
                            </div>
                        </div>
                        <div className="hotItemBox">
                            <div className="hotItemBoxTitle">
                                <div className="hotItemLeft">
                                    <div className="hotItemIcon">

                                    </div>
                                    <div className="hotItemMiddle">
                                        阿萨的贺卡上的框架和阿萨
                                    </div>
                                </div>

                                <div className="hotItemRight">

                                </div>
                            </div>
                            <div className="hotItemBoxContent">
                                <div className="hotAnswerBox">
                                    <span className="answerSpan">热门回答</span>
                                    <i>123</i>
                                </div>
                                <div className="hotAnswerFirst">
                                    <div className="hotUser">
                                        那么:
                                    </div>
                                    <div className="hotContent">
                                        啊水水水水水水水水水水水水水水水水水水
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hotItemBox">
                            <div className="hotItemBoxTitle">
                                <div className="hotItemLeft">
                                    <div className="hotItemIcon">

                                    </div>
                                    <div className="hotItemMiddle">
                                        阿萨的贺卡上的框架和阿萨
                                    </div>
                                </div>

                                <div className="hotItemRight">

                                </div>
                            </div>
                            <div className="hotItemBoxContent">
                                <div className="hotAnswerBox">
                                    <span className="answerSpan">热门回答</span>
                                    <i>123</i>
                                </div>
                                <div className="hotAnswerFirst">
                                    <div className="hotUser">
                                        那么:
                                    </div>
                                    <div className="hotContent">
                                        啊水水水水水水水水水水水水水水水水水水
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hotItemBox">
                            <div className="hotItemBoxTitle">
                                <div className="hotItemLeft">
                                    <div className="hotItemIcon">

                                    </div>
                                    <div className="hotItemMiddle">
                                        阿萨的贺卡上的框架和阿萨
                                    </div>
                                </div>

                                <div className="hotItemRight">

                                </div>
                            </div>
                            <div className="hotItemBoxContent">
                                <div className="hotAnswerBox">
                                    <span className="answerSpan">热门回答</span>
                                    <i>123</i>
                                </div>
                                <div className="hotAnswerFirst">
                                    <div className="hotUser">
                                        那么:
                                    </div>
                                    <div className="hotContent">
                                        啊水水水水水水水水水水水水水水水水水水
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="newQuestBox">
                        <div className="newQuestBoxTitle">
                            最新问题
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newItemBox">
                            <div className="newItemTopBox">
                                <div className="newItemTitle">
                                    按时间快点哈教科书的接口?
                                </div>
                                <div className="newItemIcon">

                                </div>
                            </div>
                            <div className="newAnswerNumBox">
                                <span className="newSpan">回答</span>
                                <i>22</i>
                            </div>
                            <div className="newUserBox">
                                <div className="newUserBoxLeft">
                                    <div className="newUserImg">
                                        <img src="//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                    </div>
                                    <div className="newUserName">
                                        阿斯顿觉得:
                                    </div>
                                    <div className="newUserContent">
                                        打卡工商局的嘎江户时代
                                    </div>
                                </div>
                                <div className="newUserBoxRight">
                                    <div className="newUserTime">
                                        2小时前
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>




            </PullToRefresh>

        </div>
    );
}


export default Answer;
