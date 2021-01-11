import React, { useState } from 'react';
import style from './text.less'
import common from '@/lib/common.less'
import Navigation from '@/component/navigation'
import Footer from '@/component/footer'
import { Input, Button } from 'antd'
import api from '@/api'

const IndexPage = () => {
  const [text, setText] = useState("")

  const onClick = ()=>{
    api.copyright.getIllegalText({ text: text }).then((data)=>{
      console.log(data)
    }).catch(()=>{

    })
  }
  return <div>
    <Navigation selectedIndex={2}></Navigation>
    <Input onChange={(text) => { setText(text.target.value) }}></Input>
    <Button type="primary" onClick={onClick}>Submit</Button>
    <Footer />
  </div>
}

export default IndexPage
