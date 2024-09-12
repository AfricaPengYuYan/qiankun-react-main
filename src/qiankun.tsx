import { addGlobalUncaughtErrorHandler, registerMicroApps, start } from 'qiankun';

// 微前端 - 子应用列表
export const APPS = [
    {
        name: 'qiankun-vue-system',
        container: '#qiankun-main',
        entry: 'http://localhost:13100',
        activeRule: '/qiankun-vue-system',
    },
];

registerMicroApps(APPS, {
    beforeLoad: (app) => {
        console.log('before load', app.name);
        return Promise.resolve();
    },
    beforeMount: (app) => {
        console.log('before mount', app.name);
        return Promise.resolve();
    }
});

// 全局的未捕获异常处理器
addGlobalUncaughtErrorHandler((event) => {
    console.error(event)
});

//启动 qiankun
start({
    sandbox: {
        // 样式隔离特性
        experimentalStyleIsolation: true,
    }
})
