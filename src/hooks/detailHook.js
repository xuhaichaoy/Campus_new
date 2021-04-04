import {useState} from 'react'
import { useHistory } from "react-router-dom";

function DetailHook() {
    const [showTextarea, setShowTextarea] = useState(false)
    const usehistory = useHistory()

    const tabs = [
        { title: '回复'},
        { title: '点赞'},
        { title: '转发'},
        { title: '收藏'},
    ];

    function returnBack() {
        usehistory.goBack()
    }


    function cancelInput(e) {
        if (e.target.getAttribute('maxlength')) {
            return
        }
        setShowTextarea(false)
    }

    function handleClick() {
        setShowTextarea(true)
    }

    return [showTextarea, tabs, returnBack, cancelInput, handleClick]
}

export default DetailHook