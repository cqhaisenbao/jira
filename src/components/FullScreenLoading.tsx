import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import styled from "@emotion/styled";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenLoading = () => {
  return (
    <Wrapper>
      <Spin indicator={antIcon} />
    </Wrapper>
  );
};

export default FullScreenLoading;
