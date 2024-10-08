import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { wrapperEnv } from './src/utils/wrapperEnv';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const viteEnv = wrapperEnv(env);

    return {
        plugins: [
            react(),
        ],
        server: {
            host: "0.0.0.0",
            port: viteEnv.VITE_PORT,
            open: viteEnv.VITE_OPEN,
            cors: true,
            proxy: {

            }
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    additionalData: `@import "@/assets/styles/index.less";`
                }
            }
        },
        esbuild: {
            pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
        },
        build: {
            outDir: "dist",
            minify: "esbuild",
        },
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
                "#": resolve(__dirname, "./types")
            }
        }
    }
})
