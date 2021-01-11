import React, { useState } from 'react';
import style from './index.less'
import common from '@/lib/common.less'
import Navigation from '@/component/navigation'
import routerlist from '@/lib/routerlist'
import Footer from '@/component/footer'
import { Link } from 'umi';
import { Carousel } from 'antd';

const IndexPage = () => {
  return <div>
    <Navigation selectedIndex={0}></Navigation>

    <div className={`${style.content_area} ${common.clearfix}`}>
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
        </div>
        <div className={style.main_content}>
          <img src={require("@/public/main/computer.png")}></img>
          <p className={style.main_description}>数字版权侵权追踪系统</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
}

export default IndexPage
