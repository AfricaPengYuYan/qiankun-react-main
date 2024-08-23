import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import AuthRouter from "./router/AuthRouter";

function App() {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <AuthRouter>
                    <Router />
                </AuthRouter>
            </ConfigProvider>
        </BrowserRouter>
    )
}

export default App
