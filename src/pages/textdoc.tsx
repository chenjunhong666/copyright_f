import React, { useState } from 'react';
import style from './textdoc.less'
import common from '@/lib/common.less'
import Navigation from '@/component/navigation'
import Footer from '@/component/footer'
import { Input, Button } from 'antd'
import api from '@/api'
import { history } from 'umi'
import routerlist from '@/lib/routerlist'

const IndexPage = () => {
  const [text, setText] = useState("")

  const onClick = () => {
    api.copyright.getIllegalText({ text: text }).then((data) => {
      console.log(data)
    }).catch(() => {

    })
  }
  return <div>
    <Navigation selectedIndex={3}></Navigation>
    <div className={style.content_area}>
      <div className={style.main}>
        <div className={`${style.textintro} ${common.clearfix}`}>
          <div className={style.textintro_left}>
            <h1>文字版权保护在线系统文档</h1>
            <p className={style.textintro_text}>基于深度学习技术，计算文本语义相似度。定制智能算法，高效识别侵权文本。</p>
          </div>
          <div className={style.textintro_right}>
            <Button type="primary" className={style.experience_bth} onClick={() => { history.push(routerlist.textsys.pathname) }}>在线体验</Button>
          </div>
        </div>
        <div className={style.textsys_manual}>
        <div className={style.textsys_manual_item}>
          <p className={style.textsys_manual_item_title}>待检测句子</p>
          <span className={style.textsys_manual_item_text}>需要检测的句子，必填项</span>
        </div>
        <div className={style.textsys_manual_item}>
          <p className={style.textsys_manual_item_title}>获取随机句子</p>
          <span className={style.textsys_manual_item_text}>从数据库中随机取得一条数据，将替换输入框中的待检测句子</span>
        </div>
        <div className={style.textsys_manual_item}>
          <p className={style.textsys_manual_item_title}>直接抄袭相似度阈值</p>
          <span className={style.textsys_manual_item_text}>检测时，若待检测句子与数据库中的句子相似度大于该值，将直接定义为抄袭</span>
        </div>
        <div className={style.textsys_manual_item}>
          <p className={style.textsys_manual_item_title}>分句检测时句子相似度阈值</p>
          <span className={style.textsys_manual_item_text}>
            检测时，若待检测句子与数据库中的句子相似度未达到直接抄袭相似度阈值，将启用分句判断，以句为单位，
            判断数据库中的数据是否抄袭原文。在进行句为单位的比较时，若相似度大于该值，将定义为抄袭
            </span>
        </div>
        <div className={style.textsys_manual_item}>
          <p className={style.textsys_manual_item_title}>分句检测时原文占比阈值</p>
          <span className={style.textsys_manual_item_text}>在启用分句检测时，若数据库中数据抄袭原文的比例大于该值，将定义为抄袭</span>
        </div>
        <div className={style.textsys_manual_item}>
          <p className={style.textsys_manual_item_title}>是否启用两段式检测</p>
          <span className={style.textsys_manual_item_text}>一种加速手段，启用后，对于数据库中与原文相似度低于某值的数据将不进行分句检测，而是直接定义为未抄袭</span>
        </div>
        <div className={style.textsys_manual_item}>
          <p className={style.textsys_manual_item_title}>启用分句检测相似度阈值</p>
          <span className={style.textsys_manual_item_text}>定义了启用分句的检测相似度阈值，若数据库中的数据与原文相似度低于该值，将不进行分句检测，否则启用分句检测</span>
        </div>
      </div>
      </div>
    </div>
    <Footer />
  </div>
}

export default IndexPage
