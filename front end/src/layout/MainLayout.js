import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  QuestionCircleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "./MainLayout.css";

const { Footer, Sider } = Layout;

const rootRoutes = ["/Login", "/SignUp"];
// const aboutSubRoutes = ["/about/me", "/about/company"];

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          {collapsed ? (
            <div className="logo">S</div>
          ) : (
            <div className="logo">Sri Search Engine</div>
          )}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[
              rootRoutes.indexOf(window.location.pathname).toString(),
            ]}
          >
            <Menu.Item key="0">
              <Link to="/Login">
                {/* <HomeOutlined /> */}
                <span className="menu-item-link">Login</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/SignUp">
                {/* <QuestionCircleOutlined /> */}
                <span className="menu-item-link">SignUp</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>{children}</Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
