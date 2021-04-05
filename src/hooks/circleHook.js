import { useState, useEffect } from "react"

function CircleHook() {
    const [refreshing, setRefreshing] = useState(false)
    const [down, setDown] = useState(false)
    const [height, setHeight] = useState(document.documentElement.clientHeight)

    

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

    function handleChange(tab, index) {
        console.log('onChange', index, tab);
        // (tab, index) => { console.log('onChange', index, tab); }
    }

    function handleClick(tab, index) {
        console.log('onClick', index, tab);
        // (tab, index) => { console.log('onChange', index, tab); }
    }

    useEffect(() => {
        const hei = height - 94;
        setHeight(hei)
    }, [])

    return [refreshing, down, style, refresh]
}

export default CircleHook