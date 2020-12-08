import React from "react";
import PropTypes from "prop-types";
import { Layout, PageHeader } from "antd";

import "./PageLayout.css";

const { Content } = Layout;

const PageLayout = ({ title, children }) => {
  return (
    <>
      <PageHeader title={title} />
      <Content className="page-content">{children}</Content>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PageLayout;
