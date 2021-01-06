import React, { useState } from 'react';
import style from './footer.less'
import common from '@/lib/common.less'
type NavigationProps = {

}
const Navigation: React.FunctionComponent<NavigationProps> = () => {
  return <div>
    <div className={`${style.footer} ${common.clearfix}`}>
      <div className={`${style.footer_box} ${common.clearfix}`}>
        <p>Copyright © 2018 - 2019 Lululab 华南理工大学</p>
        <p>南京爱特思信息技术有限公司</p>
        <p><a href="http://beian.miit.gov.cn" style={{ color: "#a5aaa9" }}>苏ICP备13049739号-1</a></p>
      </div>
    </div>
  </div>
}

export default Navigation