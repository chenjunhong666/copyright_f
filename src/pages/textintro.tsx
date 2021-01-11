import React, { useState } from 'react';
import style from './textintro.less'
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
    <Navigation selectedIndex={2}></Navigation>
    <div className={style.content_area}>
      <div className={style.main}>
        <div className={style.textintro}>
          <div className={style.textintro_left}>
            <h1>文字版权保护介绍</h1>
            <p className={style.textintro_text}>基于深度学习技术，计算文本语义相似度。定制智能算法，高效识别侵权文本。</p>
          </div>
          {/* <div className={style.textintro_right}>
            <Button type="primary" className={style.experience_bth} onClick={() => { history.push(routerlist.textsys.pathname) }}>在线体验</Button>
          </div> */}
        </div>
        <div className={style.tch_sup}>
          <h2 className={style.tch_sup_title}>技术支撑</h2>
          <div className={style.ch_sup_img_box}>
            <div className={style.ch_sup_img_item}>深度学习</div>
            <div className={style.ch_sup_img_item}>词向量模型</div>
            <div className={style.ch_sup_img_item}>NLP技术</div>
            <div className={style.ch_sup_img_item}>上下文语义识别</div>
          </div>
        </div>
        <div className={style.advantage}>
          <h2 className={style.advantage_title}>核心优势</h2>
          <div className={style.advantage_content_box}>
            <div className={style.advantage_content_item}>
              <p className={style.advantage_content_item_title}>规则灵活定制</p>
              <span className={style.advantage_content_item_text}>接受灵活的规则定制。针对业务场景下个性化的数据和需求，可自由定制模型的阈值参数，灵活调优识别效果 </span>
            </div>
            <div className={style.advantage_content_item}>
              <p className={style.advantage_content_item_title}>自然语言处理</p>
              <span className={style.advantage_content_item_text}>通过语义分析构建智能机器学习算法，高效过滤复杂变种文本</span>
            </div>
          </div>
        </div>
        <div className={style.usage}>
          <h2 className={style.title}>应用场景</h2>
          <div className={style.content_box}>
            <div className={style.content_item}>
              <p className={style.ontent_item_title}>文本版权保护</p>
              <span className={style.content_item_text}>采用深度学习技术，计算文本间语义相似度，并定制识别算法，有效识别文字版权侵权行为</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
}

export default IndexPage
