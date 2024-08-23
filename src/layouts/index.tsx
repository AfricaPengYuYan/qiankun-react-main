import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { LayoutFooter } from "./components/Footer";
import { LayoutHeader } from "./components/Header";
import { LayoutMenu } from "./components/Menu";
import { LayoutTabs } from "./components/Tabs";

export const LayoutIndex = () => {
    const { Sider, Content } = Layout;

    return (
        <section className="container">
            <Sider trigger={null} width={220} theme="dark">
                <LayoutMenu></LayoutMenu>
            </Sider>
            <Layout>
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