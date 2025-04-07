import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Menu, Row, Col } from 'antd';
import { FaWarehouse } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="top-info-bar" style={{ background: '#fff', padding: '10px 40px' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <img src="/logo.png" alt="Logo" height={40} />
          </Col>
          <Col>
            <Row gutter={40}>
              <Col>
                <MailOutlined style={{ color: 'gold', fontSize: 20 }} /> <strong>Mail Us</strong><br />
                <span>info@idesignads.ae</span>
              </Col>
              <Col>
                <PhoneOutlined style={{ color: 'gold', fontSize: 20 }} /> <strong>Call Us</strong><br />
                <span>+971 4 580 1789</span>
              </Col>
              <Col>
                <FaWarehouse style={{ color: 'gold', fontSize: 20 }} /> <strong>Warehouse Number 25</strong><br />
                <span>13/1 - Al Qusais, Dubai - UAE</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Navigation Bar */}
      <div style={{ background: 'purple', padding: '0 40px' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['home']} style={{ background: 'transparent' }}>
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="explore">Explore iDesign</Menu.Item>
              <Menu.Item key="services">Services</Menu.Item>
              <Menu.Item key="products">Products</Menu.Item>
              <Menu.Item key="clients">Our Clients</Menu.Item>
              <Menu.Item key="portfolio">Portfolio</Menu.Item>
              <Menu.Item key="blog">Blog</Menu.Item>
              <Menu.Item key="contact">Contact Us</Menu.Item>
            </Menu>
          </Col>
          <Col>
            <Button type="primary" style={{ backgroundColor: '#ffce00', color: '#000' }}>
              DOWNLOAD
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
