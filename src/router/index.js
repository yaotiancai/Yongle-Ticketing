import Vue from "vue";
import VueRouter from "vue-router";
import main from "./main";
import classify from "./classify";
import search from "./search";
import mine from "./mine";
Vue.use(VueRouter);

const router =new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/main",
        },
        main,
        classify,
        search,
        mine
    ]
})

export default router;