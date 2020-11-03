import axios from "axios";



export default {
    install: (app, options) => {
        let newIns = axios.create();
        app.prototype.$axios = newIns;
    },
};
