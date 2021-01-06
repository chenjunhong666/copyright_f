import React, { useState } from 'react';
import style from './navigation.less'
import common from '@/lib/common.less'
import routerlist from '@/lib/routerlist'
import { Link } from 'umi'
type NaviationProps = {
  selectedIndex: number
}
const Navigation: React.FunctionComponent<NaviationProps> = ({ selectedIndex }) => {
  return <div>
    <div className={style.nav}>
      <div className={`${style.nav_box} ${common.clearfix}`}>
        <div className={style.site_branding}>
          <h1 className={style.site_title}>
            <Link className={style.site_title} to={routerlist.index.pathname} >
              版权保护
            </Link>
          </h1>
          <p className={style.site_description}>数字版权侵权追踪系统</p>
        </div>
        <div className={style.menus}>
          <ul>
            <li><Link to={routerlist.index.pathname} className={selectedIndex == 0 ? style.selected_a : style.unselected_a}>首页</Link></li>
            <li><Link to={routerlist.image.pathname} className={selectedIndex == 1 ? style.selected_a : style.unselected_a}>图片视频</Link></li>
            <li><Link to={routerlist.text.pathname} className={selectedIndex == 2 ? style.selected_a : style.unselected_a}>文字</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Navigation