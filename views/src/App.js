import React from 'react';
import { Select, Card } from 'antd';

const { Option } = Select;
const { Meta } = Card;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const App = () => (
  <div className="App">
    <Select
      mode="tags"
      style={{ width: '100%' }}
      placeholder="选择图书类型"
      allowClear
      onChange={handleChange}>
      <Option value={1}>财经</Option>)
      <Option value={2}>小说</Option>)
      <Option value={3}>前端</Option>)
    </Select>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Card
      hoverable
      style={{ width: 200, margin: 20 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>

    <Card
      hoverable
      style={{ width: 200, margin: 20 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    </div>
  </div>
);

export default App;