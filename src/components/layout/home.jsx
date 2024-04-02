import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";

const { Content } = Layout;

function MainLayout() {
  const layoutStyle = {
    minHeight: "100vh",
  };
  return (
    <Layout style={layoutStyle}>
      <Content>Content</Content>
    </Layout>
  );
}

export default MainLayout;
