import React, { useState } from 'react';
import style from './textsys.less'
import common from '@/lib/common.less'
import Navigation from '@/component/navigation'
import Footer from '@/component/footer'
import { Form, Input, Button, Checkbox, InputNumber, List } from 'antd';
import api from '@/api'
const { TextArea } = Input;
import { history } from 'umi'
import routerlist from '@/lib/routerlist'

type formData = {
  text: string
  directSimilarityThreshold: number
  sentenceSimilarityThreshold: number
  proportionThreshold: number
  twoStageThreshold: number
  useTwoStage: boolean
}
const initValue: formData = {
  text: "",
  directSimilarityThreshold: 0.95,
  sentenceSimilarityThreshold: 0.90,
  proportionThreshold: 40,
  twoStageThreshold: 0.80,
  useTwoStage: false
}

type WordInfonProps = {
  Text: string
};
const WordCard: React.FunctionComponent<WordInfonProps> = ({ Text }) => {
  return <div className={style.card_box}>
    <div className={style.card_content}>
      <ul>
        <li className={common.clearfix}><TextArea className={style.text_area} autoSize value={Text} /></li>
      </ul>
    </div>
  </div>
};

const IndexPage = () => {
  const [formValue, setFormValue] = useState(initValue)
  const [useTwoStage, setUseTwoStage] = useState(initValue.useTwoStage);
  const [listContents, setListContents] = useState([])
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
  };
  const onFinish = (values: any) => {
    api.copyright.getIllegalText(values).then((data) => {
      setListContents(data.resList)
    }).catch(() => {

    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onRandClick = () => {
    api.copyright.getRandText().then((data) => {
      form.setFieldsValue({ text: data.res })
    }).catch(() => {

    })
  }


  return <div>
    <Navigation selectedIndex={3}></Navigation>
    <div className={style.text_sys}>
      <div className={style.textsys}>
        <div className={style.textsys_left}>
          <h1>文字版权保护在线系统</h1>
          <p className={style.textsys_text}>文字版权保护在线体验系统</p>
        </div>
        <div className={style.textsys_right}>
          <Button type="primary" className={style.experience_bth} onClick={() => { window.open(`${routerlist.textdoc.pathname}`) }}>使用文档</Button>
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
            label="待检测句子"
            name="text"
            rules={[{ required: true, message: '请输入一个句子' }]}
          >
            <TextArea style={{ width: "700px" }} autoSize />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={onRandClick}>获取随机句子</Button>
          </Form.Item>
          <Form.Item
            label="直接抄袭相似度阈值"
            name="directSimilarityThreshold"
          >
            <InputNumber min={0} max={1} step={0.01} style={{ width: "700px" }} defaultValue={formValue.directSimilarityThreshold} />
          </Form.Item>

          <Form.Item
            label="分句检测时句子相似度阈值"
            name="sentenceSimilarityThreshold"
          >
            <InputNumber min={0} max={1} step={0.01} style={{ width: "700px" }} defaultValue={formValue.sentenceSimilarityThreshold} />
          </Form.Item>
          <Form.Item
            label="分句检测时原文占比阈值（%）"
            name="proportionThreshold"
          >
            <InputNumber min={0} max={100} formatter={value => `${value}%`} style={{ width: "700px" }} defaultValue={formValue.proportionThreshold} />
          </Form.Item>
          <Form.Item {...tailLayout} name="useTwoStage" valuePropName="checked">
            <Checkbox onChange={(e) => { setUseTwoStage(e.target.checked) }}>是否启用两段式检测</Checkbox>
          </Form.Item>

          <div className={useTwoStage ? style.show_elm : style.hidden_elm}>
            <Form.Item
              label="启用分句检测相似度阈值"
              name="twoStageThreshold"
            >
              <InputNumber min={0} max={1} step={0.01} style={{ width: "700px" }} defaultValue={formValue.twoStageThreshold} />
            </Form.Item>
          </div>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ width: "700px" }}>检测</Button>
          </Form.Item>
        </Form>
      </div>
      <div className={style.list_box}>
        {listContents.length > 0 ? <List dataSource={listContents}
          renderItem={item => (
            <List.Item style={{ padding: "0px", border: "0px" }}>
              <WordCard Text={item}></WordCard>
            </List.Item>
          )}>
        </List> : null}
      </div>
    </div>
    <Footer />
  </div>
}

export default IndexPage
