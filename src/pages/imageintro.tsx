import React, { useState } from 'react';
import style from './imageintro.less'
import Navigation from '@/component/navigation'
import Footer from '@/component/footer'
import common from '@/lib/common.less'
import { Player } from 'video-react';
import '@/public/video/video-react.css'
type PlaPicProps = {
  id: number
}
const PlaPicItem: React.FunctionComponent<PlaPicProps> = ({ id }) => {
  return <div className={style.item}>
    <img className={style.img} src={require(`@/public/imageintro/${id}.jpg`)}></img>
    <span className={style.text}>{`剽窃图片 ${id}`}</span>
  </div>
}

const IndexPage = () => {
  const pla_pic_list = []
  for (var i = 1; i <= 15; i++) {
    const item = PlaPicItem({ id: i });
    pla_pic_list.push(item)
  }

  return <div>
    <Navigation selectedIndex={1}></Navigation>
    <div className={style.content_area}>
      <div className={style.main}>
        <div className={style.textintro}>
          <div className={style.textintro_left}>
            <h1>图像视频保护介绍</h1>
            <p className={style.textintro_text}>图像视频版权保护平台，为作品内容生产机构或内容运营企业提供高效准确的图像视频侵权检测的解决方案</p>
          </div>
        </div>
        <div className={style.tch_sup}>
          <h2 className={style.tch_sup_title}>技术支撑</h2>
          <div className={style.ch_sup_img_box}>
            <div className={style.ch_sup_img_item}>卷积神经网络</div>
            <div className={style.ch_sup_img_item}>图像哈希算法</div>
            <div className={style.ch_sup_img_item}>注意力机制</div>
          </div>
        </div>
        <div className={style.advantage}>
          <h2 className={style.advantage_title}>核心优势</h2>
          <div className={style.advantage_content_box}>
            <div className={style.advantage_content_item}>
              <p className={style.advantage_content_item_title}>高效版权保护</p>
              <span className={style.advantage_content_item_text}>通过构建深度哈希模型，将图像信息编码成紧凑的哈希码，从而进行高效侵权判别</span>
            </div>
            <div className={style.advantage_content_item}>
              <p className={style.advantage_content_item_title}>强大技术支撑</p>
              <span className={style.advantage_content_item_text}>结合近几年研究火热的深度学习技术和图像注意力机制，能准确检测出常见侵权攻击</span>
            </div>
          </div>
        </div>
        <div className={style.img_result}>
          <h2 className={style.title}>图片算法结果展示</h2>
          <div className={style.content_box}>
            <div className={style.ori_pic}>
              <img className={style.img} src={require("@/public/imageintro/ori_pic.jpg")}></img>
              <span className={style.text}>原图</span>
            </div>
            <div className={style.description}>以下剽窃图片都可以被算法识别</div>
            <div className={`${style.pla_pic} ${common.clearfix}`}>{pla_pic_list}</div>
          </div>
        </div>
        <div className={style.video_result}>
          <h2 className={style.title}>视频算法结果展示</h2>
          <div className={style.content_box}>
            <div className={style.item}>
              <Player>
                <source src={require("@/public/video/video1.mp4")} />
              </Player>
              <span className={style.text}>video1</span>
            </div>
            <div className={style.item}>
              <Player>
                <source src={require("@/public/video/video2.mp4")} />
              </Player>
              <span className={style.text}>video2</span>
            </div>
            <div className={style.item}>
              <Player>
                <source src={require("@/public/video/video3.mp4")} />
              </Player>
              <span className={style.text}>video3</span>
            </div>
          </div>
          <div className={style.text_box}>
            <p className={style.text}>经过算法计算得出</p>
            <p className={style.text}>video1与video2相似度为0.49</p>
            <p className={style.text}>video1与video3相似度为0.94</p>
            <p className={style.text}>video2与video3相似度为0.69</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
}

export default IndexPage
