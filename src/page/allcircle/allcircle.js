import React from "react";
import { withRouter } from "react-router-dom";
import CircleItem from '../../component/circleitem/circleitem';
// import api from '../../config/http';
import "./allcircle.css";

import { SearchBar, PullToRefresh } from 'antd-mobile';


class Search extends React.Component {
    state = {
        value: '美食',
    };
    componentDidMount() {
    }

    render() {
        return (<div>
            <SearchBar placeholder="Search" maxLength={8} />
        </div>);
    }
}

function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

class TabExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
        };
       
    }
    componentDidMount() {
        const hei = this.state.height - 87.5;

        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }
    render() {
        return (
            <div className="allcircle">
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        minHeight: this.state.height,
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({ refreshing: true });
                        setTimeout(() => {
                            this.setState({ refreshing: false });
                        }, 1000);
                    }}
                >

                    <CircleItem />
                    
                  
                    

                </PullToRefresh>
                
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    componentDidMount() {

    }
    componentWillReceiveProps(prevProps, prevState) {

    }

    render() {
        return (
            <div>
                <Search />
                <TabExample />
            </div>
        );
    }
}

export default withRouter(App);
