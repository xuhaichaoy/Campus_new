import { useState, useEffect } from "react"

function HomeHook() {
    const [refreshing, setRefreshing] = useState(false)
    const [down, setDown] = useState(false)
    const [height, setHeight] = useState(document.documentElement.clientHeight)

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

    function refresh() {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1000);
    }

    

    useEffect(() => {
        const hei = height - 94;
        setHeight(hei)
    }, [])

    return [refreshing, down, style, refresh]
}

export default HomeHook