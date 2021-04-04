import { useState, useEffect } from "react"

function HomeHook() {
    const [refreshing, setRefreshing] = useState(false)
    const [down, setDown] = useState(false)
    const [height, setHeight] = useState(document.documentElement.clientHeight)
    const [data, setDate] = useState([])

    const tabs = [{
        title: '关注'
    }, {
        title: "推荐"
    }];

    const style = {
        minHeight: height,
        height: height,
        overflow: 'auto',
    }

    function genData() {
        const dataArr = [];
        for (let i = 0; i < 20; i++) {
            dataArr.push(i);
        }
        return dataArr;
    }
    
    function refresh() {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1000);
    }

    function handleChange(tab, index) {
        console.log('onChange', index, tab);
        // (tab, index) => { console.log('onChange', index, tab); }
    }

    function handleClick(tab, index) {
        console.log('onClick', index, tab);
        // (tab, index) => { console.log('onChange', index, tab); }
    }

    useEffect(() => {
        const hei = height - 137.5;
        setHeight(hei)
        setDate(genData())
    }, [])

    return [refreshing, down, style, data, tabs, refresh, handleChange, handleClick]
}

export default HomeHook