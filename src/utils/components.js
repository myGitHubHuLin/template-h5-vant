import SvgIcon from "@/components/SvgIcon.vue";
import MPanel from "@/components/MPanel.vue";
import BlockLoading from '@/components/BlockLoading.vue'

export default {
    install: (app, options) => {
        app.component("svg-icon", SvgIcon);
        app.component("MPanel", MPanel);
        app.component('BlockLoading', BlockLoading)
    },
};
