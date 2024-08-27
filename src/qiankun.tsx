import { registerMicroApps, start } from 'qiankun';

// 微前端 - 子应用列表
export const APPS = [
    {
        name: 'qiankun-vue-system',
        container: '#qiankun-main',
        entry: 'http://localhost:13100',
        activeRule: '/qiankun-vue-system',
    },
];

registerMicroApps(APPS);

//启动 qiankun
start({
    sandbox: {
        // 样式隔离特性
        experimentalStyleIsolation: true,
    }
})
