import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import useAccess from '@/lib/access'
function BasicLayout(props) {
    let access = useAccess((props.location.pathname))
    if (access) {
        return <div>{props.children}</div>
    } else {
        return <div></div>
    }
}

export default BasicLayout
