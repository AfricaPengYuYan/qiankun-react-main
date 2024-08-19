import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'qiankun-vue-system',
        container: '#qiankun-main',
        entry: 'http://localhost:13100',
        activeRule: '/qiankun-vue-system',
    },
]);

//启动 qiankun
start({
    sandbox: {
        // 样式隔离特性
        experimentalStyleIsolation: true,
    }
})