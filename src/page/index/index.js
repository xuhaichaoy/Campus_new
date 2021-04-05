import React, {useState, useEffect} from 'react'
import Home from "../home/home"
import Circle from "../circle/circle"
import Mine from "../mine/mine"
import Answer from "../answer/answer"
import Search from "../../component/search/search"
import { TabBar } from 'antd-mobile'

function IndexPage() {
    const [show, setShow] = useState(true)
    const [selectedTab, setSelectedTab] = useState('home')
    let SearchDom = show ? <Search /> : ''

    console.log(SearchDom)

    useEffect(() => {
        if(selectedTab === 'mine') {
            setShow(false)
        }else {
            setShow(true)
        }

    }, [selectedTab])

    return (
        <div>
            {SearchDom}
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    key="home"
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={selectedTab === 'home'}
                    // badge={1}
                    onPress={ () => setSelectedTab('home')}
                    data-seed="logId"
                >
                    <Home />
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="圈子"
                    key="circle"
                    // badge={'new'}
                    selected={selectedTab === 'circle'}
                    onPress={() => setSelectedTab('circle')}
                    data-seed="logId1"
                >
                    <Circle />
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="问问"
                    key="answer"
                    // dot
                    selected={selectedTab === 'answer'}
                    onPress={() => setSelectedTab('answer')}
                >
                    <Answer />
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="我的"
                    key="mine"
                    selected={selectedTab === 'mine'}
                    onPress={() => setSelectedTab('mine')}
                >
                    <Mine />
                </TabBar.Item>
            </TabBar>
        </div>
    )
}

export default IndexPage