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

const rootRoutes = ["/Search", "/AdvancedSearch", "/favourites", "/logout"];
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
              <Link to="/Search">
                {/* <ContactsOutlined /> */}
                <span className="menu-item-link">Search</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/AdvancedSearch">
                {/* <ContactsOutlined /> */}
                <span className="menu-item-link">AdvancedSearch</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/favourites">
                {/* <ContactsOutlined /> */}
                <span className="menu-item-link">Favourites</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <span onClick={() => {
                localStorage.removeItem("userId")
                console.log("history", this.history, this.location)
                window.location.replace("http://localhost:3000/Login");

                // history.push("/Search");
              }} 
              className="menu-item-link">LogOut</span>
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
