import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";

function PersonalHook() {

    const usehistory = useHistory()

    const tabs = [{
        title: '动态'
    }, {
        title: "日志"
    },{
        title: "话题"
    },{
        title: "问答"
    }];

    function back() {
        usehistory.goBack()
    }


    

    useEffect(() => {

    }, [])

    return [tabs, back]
}

export default PersonalHook