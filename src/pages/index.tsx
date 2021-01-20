import React, { useState } from 'react';
import style from './index.less'
import imgstyle from './imageintro.less'
import textstyle from './textintro.less'
import common from '@/lib/common.less'
import Navigation from '@/component/navigation'
import routerlist from '@/lib/routerlist'
import Footer from '@/component/footer'
import { Link } from 'umi';
import { Carousel } from 'antd';
import { Player } from 'video-react';
import '@/public/video/video-react.css'

const IndexPage = () => {
  return <div>
    <Navigation selectedIndex={0}></Navigation>

    {/* <div className={`${style.content_area} ${common.clearfix}`}>
      <div className={`${style.main} ${common.clearfix}`}>
        <Carousel autoplay>
          <div>
            <img src={require("@/public/main/1.jpg")} className={style.carousel_content} draggable="false"></img>
          </div>
          <div>
            <img src={require("@/public/main/2.jpeg")} className={style.carousel_content} draggable="false"></img>
          </div>
          <div>
            <img src={require("@/public/main/3.jpg")} className={style.carousel_content} draggable="false"></img>
          </div>
        </Carousel>
        <div className={style.image_btn_group}>
          <Link className={style.image_btn} to={routerlist.imageintro.pathname} style={{ background: `url('${require("@/public/main/image_btn.jpg")}')`, backgroundSize: "100% 100%" }}>图片视频版权保护</Link>
          <Link className={style.image_btn} to={routerlist.textintro.pathname} style={{ background: `url('${require("@/public/main/text_btn.jpg")}')`, backgroundSize: "100% 100%" }}>文字版权保护</Link>
          <Link className={style.image_btn} to={routerlist.textsys.pathname} style={{ background: `url('${require("@/public/main/sys_btn.jpeg")}')`, backgroundSize: "100% 100%" }}>文字版权保护在线系统</Link>
        </div>
        <div className={style.main_content}>
          <img src={require("@/public/main/computer.png")}></img>
          <p className={style.main_description}>数字版权侵权追踪系统</p>
        </div>
      </div>
    </div> */}
    <div className={textstyle.content_area}>
      <div className={textstyle.main}>
        <div className={textstyle.textintro}>
          <div className={textstyle.textintro_left}>
            <h1>文字版权保护介绍</h1>
            <p className={textstyle.textintro_text}>基于深度学习技术，计算文本语义相似度。定制智能算法，高效识别侵权文本。</p>
          </div>
          {/* <div className={style.textintro_right}>
            <Button type="primary" className={style.experience_bth} onClick={() => { history.push(routerlist.textsys.pathname) }}>在线体验</Button>
          </div> */}
        </div>
        <div className={textstyle.tch_sup}>
          <h2 className={textstyle.tch_sup_title}>技术支撑</h2>
          <div className={textstyle.ch_sup_img_box}>
            <div className={textstyle.ch_sup_img_item}>深度学习</div>
            <div className={textstyle.ch_sup_img_item}>词向量模型</div>
            <div className={textstyle.ch_sup_img_item}>NLP技术</div>
            <div className={textstyle.ch_sup_img_item}>上下文语义识别</div>
          </div>
        </div>
        <div className={textstyle.advantage}>
          <h2 className={textstyle.advantage_title}>核心优势</h2>
          <div className={textstyle.advantage_content_box}>
            <div className={textstyle.advantage_content_item}>
              <p className={textstyle.advantage_content_item_title}>规则灵活定制</p>
              <span className={textstyle.advantage_content_item_text}>接受灵活的规则定制。针对业务场景下个性化的数据和需求，可自由定制模型的阈值参数，灵活调优识别效果 </span>
            </div>
            <div className={textstyle.advantage_content_item}>
              <p className={textstyle.advantage_content_item_title}>自然语言处理</p>
              <span className={textstyle.advantage_content_item_text}>通过语义分析构建智能机器学习算法，高效过滤复杂变种文本</span>
            </div>
          </div>
        </div>
        <div className={textstyle.usage}>
          <h2 className={textstyle.title}>应用场景</h2>
          <div className={textstyle.content_box}>
            <div className={textstyle.content_item}>
              <p className={textstyle.ontent_item_title}>文本版权保护</p>
              <span className={textstyle.content_item_text}>采用深度学习技术，计算文本间语义相似度，并定制识别算法，有效识别文字版权侵权行为</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={imgstyle.content_area}>
      <div className={imgstyle.main}>
        <div className={imgstyle.textintro}>
          <div className={imgstyle.textintro_left}>
            <h1>图像视频保护介绍</h1>
            <p className={imgstyle.textintro_text}>图像视频版权保护平台，为作品内容生产机构或内容运营企业提供高效准确的图像视频侵权检测的解决方案</p>
          </div>
        </div>
        <div className={imgstyle.tch_sup}>
          <h2 className={imgstyle.tch_sup_title}>技术支撑</h2>
          <div className={imgstyle.ch_sup_img_box}>
            <div className={imgstyle.ch_sup_img_item}>卷积神经网络</div>
            <div className={imgstyle.ch_sup_img_item}>图像哈希算法</div>
            <div className={imgstyle.ch_sup_img_item}>注意力机制</div>
          </div>
        </div>
        <div className={imgstyle.advantage}>
          <h2 className={imgstyle.advantage_title}>核心优势</h2>
          <div className={imgstyle.advantage_content_box}>
            <div className={imgstyle.advantage_content_item}>
              <p className={imgstyle.advantage_content_item_title}>高效版权保护</p>
              <span className={imgstyle.advantage_content_item_text}>通过构建深度哈希模型，将图像信息编码成紧凑的哈希码，从而进行高效侵权判别</span>
            </div>
            <div className={imgstyle.advantage_content_item}>
              <p className={imgstyle.advantage_content_item_title}>强大技术支撑</p>
              <span className={imgstyle.advantage_content_item_text}>结合近几年研究火热的深度学习技术和图像注意力机制，能准确检测出常见侵权攻击</span>
            </div>
          </div>
        </div>
        <div className={imgstyle.video_result}>
          <h2 className={imgstyle.title}>视频算法结果展示</h2>
          <div className={imgstyle.content_box}>
            <div className={imgstyle.item}>
              <Player>
                <source src={require("@/public/video/video1.mp4")} />
              </Player>
              <span className={imgstyle.text}>video1</span>
            </div>
            <div className={imgstyle.item}>
              <Player>
                <source src={require("@/public/video/video2.mp4")} />
              </Player>
              <span className={imgstyle.text}>video2</span>
            </div>
            <div className={imgstyle.item}>
              <Player>
                <source src={require("@/public/video/video3.mp4")} />
              </Player>
              <span className={imgstyle.text}>video3</span>
            </div>
          </div>
          <div className={imgstyle.text_box}>
            <p className={imgstyle.text}>经过算法计算得出</p>
            <p className={imgstyle.text}>video1与video2相似度为0.49</p>
            <p className={imgstyle.text}>video1与video3相似度为0.94</p>
            <p className={imgstyle.text}>video2与video3相似度为0.69</p>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
}

export default IndexPage
