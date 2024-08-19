import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <div id="qiankun-main"></div>
            </ConfigProvider>
        </BrowserRouter>
    )
}

export default App
