import PersonalHook from "../../hooks/personalHook"
import "./personal.css";

import { Badge, Tabs } from 'antd-mobile';

function Personal() {

    const [tabs, back] = PersonalHook()
    tabs.map((tabItem) => {
        <Badge key={tabItem}>{tabItem}</Badge>
    })

    return (
        <div className="personal">
            <div className="returnBtn" onClick={back}>
            </div>
            <div className="personalTopBox">
                <div className="personalTop">

                </div>
            </div>
            <div className="personalInfoBox">
                <div className="personalInfoImage">
                    <img src="//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                </div>
                <div className="personalInfoEditBtn">
                    <i></i>
                    <span>编辑资料</span>
                </div>
                <div className="personInfoUser">
                    <div className="personalName">
                        <span>海超</span>
                        <i></i>
                    </div>
                    <div className="personalSchool">
                        北京大学bliabliablia
                   </div>
                </div>
                <div className="personalWord">
                    个性签名个性签名个性签名个性签名个性签名个性签名个性签名性签名个性签名个性签名性签名个性签名个性签名
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

            <div className="vistorRecordBox">
                <div className="recordTitle">
                    访客记录
                </div>
                <div className="recordBox">
                    <div className="recordItems">
                        <img src="//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                        <span>访客AAAA</span>
                    </div>
                    <div className="recordItems">
                        <img src="//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                        <span>访客AAAA</span>
                    </div>
                    <div className="recordItems">
                        <img src="//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                        <span>访客AAAA</span>
                    </div>
                    <div className="recordItems">
                        <img src="//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                        <span>访客AAAA</span>
                    </div>
                    <div className="recordItems">
                        <img src="//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                        <span>访客AAAA</span>
                    </div>
                </div>
            </div>

            <div className="personalData">
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div className="personalDataContent">
                        Content of first tab
                    </div>
                    <div className="personalDataContent">
                        Content of second tab
                    </div>
                    <div className="personalDataContent">
                        Content of third tab
                    </div>
                    <div className="personalDataContent">
                        Content of fourth tab
                    </div>
                </Tabs>
            </div>
        </div>
    )

}



// const Anchor = lazy(() => import('../anchor/anchor'))
// const { Meta } = Card;

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     };

//     componentDidMount() {

//     }
//     componentWillReceiveProps(prevProps, prevState) {

//     }

//     render() {
//         return (
//             <div>
//                 <TabExample history={this.props.history}/>
//             </div>
//         );
//     }
// }

export default Personal;
