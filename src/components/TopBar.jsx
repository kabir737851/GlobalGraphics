import React from 'react';
import { Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const TopBar = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '10px 50px', borderBottom: '1px solid #eee' }}>
      <Row justify="space-between" align="middle">
        <Col>
          <MailOutlined style={{ color: '#f4c300', marginRight: 8 }} />
          <span>info@idesignads.ae</span>
        </Col>
        <Col>
          <PhoneOutlined style={{ color: '#f4c300', marginRight: 8 }} />
          <span>+971 4 580 1789</span>
        </Col>
        <Col>
          <EnvironmentOutlined style={{ color: '#f4c300', marginRight: 8 }} />
          <span>13/1 - Al Qusais, Dubai - UAE</span>
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;
