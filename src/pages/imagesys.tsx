import React, { useState } from 'react';
import style from './imagesys.less'
import common from '@/lib/common.less'
import Navigation from '@/component/navigation'
import Footer from '@/component/footer'
import { Form, Input, Button, Upload, InputNumber, List, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import netapi from '@/api'
import reqwest from 'reqwest'


type formData = {
  threshold: number
}
const initValue: formData = {
  threshold: 0.50,
}


type WordInfonProps = {
  data: Array<string>
};
const WordCard: React.FunctionComponent<WordInfonProps> = ({ data }) => {
  return <div className={style.card_box}>
    <div className={style.platform}>
      <span>相似度：{data[0]}</span>
      <a href={data[2]} target="_blank">查看图片</a>
      {/* <a href={data[2]} target="_blank">原文链接</a> */}
    </div>
    <div className={style.img}>
    <span>图片来源：{data[1]}</span>
    </div>
  </div>
};

const IndexPage = () => {
  const [formValue, setFormValue] = useState(initValue)
  const [listContents, setListContents] = useState([])
  const [form] = Form.useForm();
  const baseurl = 'http://cppt.i-test.com.cn/image/'
  const [filename, setfilename] = useState("1.jpg")
  const [fileurl, setfileurl] = useState(baseurl + "1.jpg")
  const [showData, setShowData] = useState(false)
  const [loading,setLoading] = useState(false)
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
  };
  const onFinish = (values: any) => {
    setLoading(true)
    netapi.imagesim.calsim({ "threshold": values.threshold, "filepath": filename }).then((data) => {
      setShowData(true)
      setListContents(data.res.slice(0,30))
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
    // api.copyright.getIllegalText(values).then((data) => {
    //   setListContents(data.resList)
    // }).catch(() => {

    // })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  
  const onRandClick = () => {
    netapi.imagesim.rand().then((data) => {
      setfileurl(baseurl + data.res)
      setfilename(data.res)
    }).catch(() => {

    })
  }
  const customRequest = (option) => {
    const formData = new FormData();
    const fileUrl = "/api2/v1/upload";
    formData.append('file', option.file);
    reqwest({
      url: fileUrl,
      method: 'post',
      processData: false,
      data: formData,
      success: (data) => {
        //res为文件上传成功之后返回的信息，res.responseText为接口返回的值
        if (data) {
          setfileurl(baseurl + data.res.filename)
          setfilename(data.res.filename)
        }
      },
      error: () => {
        message.error("文件上传失败！");
      },
    });
  }
  const props = {
    accept: "image/*",
    showUploadList: false,
    customRequest: customRequest
  }
  return <div>
    <Navigation selectedIndex={1}></Navigation>
    <div className={style.text_sys}>
      <div className={`${style.textsys} ${common.clearfix}`}>
        <div className={style.textsys_left}>
          <h1>图像版权保护在线系统</h1>
          <p className={style.textsys_text}>图像版权保护在线体验系统</p>
        </div>
        <div className={style.textsys_right}>
          {/* <Button type="primary" className={style.experience_bth} onClick={() => { window.open(`${routerlist.textdoc.pathname}`) }}>使用文档</Button> */}
          {/* <Button type="primary" className={style.experience_bth} onClick={() => { history.push(routerlist.textdoc.pathname) }}>使用文档</Button> */}
        </div>
      </div>

      <div className={style.main}>
        <Form
          {...layout}
          form={form}
          name="basic"
          initialValues={formValue}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="待检测图片"
          >
            <img src={fileurl} className={style.rand_img} draggable="false"></img>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <div className={style.button_item}>
              <Button onClick={onRandClick}>获取随机图片</Button>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>上传图片</Button>
              </Upload>
            </div>
          </Form.Item>
          <Form.Item
            label="相似度阈值"
            name="threshold"
          >
            <InputNumber min={0} max={1} step={0.01} style={{ width: "700px" }} defaultValue={formValue.threshold} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button loading={loading} type="primary" htmlType="submit" style={{ width: "700px" }}>检测</Button>
          </Form.Item>
        </Form>
      </div>
      {showData ? <div className={style.list_box}>
        <div>{listContents.length > 0 ? <List dataSource={listContents}
          renderItem={item => (
            <List.Item style={{ padding: "0px", border: "0px" }}>
              <WordCard data={item}></WordCard>
            </List.Item>
          )}>
        </List> :
          <div className={style.no_data}>
            <div className={style.box}>无数据</div>
          </div>}
        </div>
      </div> : <div className={style.list_box}></div>}
    </div>
    <Footer />
  </div>
}

export default IndexPage
