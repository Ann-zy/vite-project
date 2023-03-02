/// <reference types="vite/client" />
declare module '*.vue' {
    // ts只支持导出导入模块，但是vue不是模块，我们需要申明一下vue是个模块
    import type { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}