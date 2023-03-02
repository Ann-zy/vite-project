import { createStore } from "vuex"

const store = createStore({
    state: {
        isLoading: false,
        // loginInfo: {}, // ts(2339)报错
        loginInfo: function(val: any) {return val}
    },
    getters: {
        getLoginInfo: state => (state.loginInfo({}).token ? state.loginInfo : JSON.parse(localStorage.getItem('LOGININFO'))),
    },
    mutations: {
        setLoginInfo(state, params) {
            localStorage.setItem('LOGININFO' , JSON.stringify(params))
            state.loginInfo = params
        }
    },
    actions: {},
    modules: {},
});

export default store