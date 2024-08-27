import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { LayoutFooter } from "./components/Footer";
import { LayoutHeader } from "./components/Header";
import { LayoutMenu } from "./components/Menu";
import { LayoutTabs } from "./components/Tabs";
import "./index.less";

export const LayoutIndex = () => {
    const { Sider, Content } = Layout;

    return (
        <section className="container">
            <Sider breakpoint="lg" trigger={null}
                collapsible
                collapsedWidth="0" width={220} theme="light"
                className='sider-container'
            >
                <LayoutMenu></LayoutMenu>
            </Sider>
            <Layout style={{ marginLeft: 220 }}>
                <LayoutHeader></LayoutHeader>
                <LayoutTabs></LayoutTabs>
                <Content>
                    <Outlet></Outlet>
                </Content>
                <LayoutFooter></LayoutFooter>
            </Layout>
        </section>
    )
}