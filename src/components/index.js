//全局注册components 组件
import ImageView from "./ImgeView/index.vue";
import Sku from "./XtxSku/index.vue";
export const componentsPlugin = {
    install(app) {
        app.component("XtxImageView", ImageView);
        app.component("XtxSku", Sku);
    }
};
