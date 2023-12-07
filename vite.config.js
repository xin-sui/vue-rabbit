import {fileURLToPath, URL} from "node:url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [
                //1.配置element采用sass样式配色系统
                ElementPlusResolver({
                    importStyle: "sass"
                    // directives: true,
                    // version: "2.1.5",
                })
            ]
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                //2.自动导入定制化样式覆盖element
                additionalData: `@use "@/styles/element/index.scss" as *;
                @use "@/styles/var.scss" as *;` //scss自动导入变量
            }
        }
    }
});
