// import ToolTip from './ToolTip.vue';
import { defineAsyncComponent } from 'vue';
import {defu} from 'defu';
import {hideAll} from 'tippy.js';
export const tooltipOptionsInject = Symbol();
import type {App} from 'vue';
import type {Props} from 'tippy.js';

interface PluginOptions extends Partial<Props>{}

export function createToolTipPlugin(options: PluginOptions){
    return (app) => {
        options = defu(options,{
            arrow: false,
        })
            
        app.config.globalProperties.$hideAllTooltips = hideAll;
            
        app.provide(tooltipOptionsInject, options)
        app.component(
            "ToolTip", 
            defineAsyncComponent(()=> import ("./ToolTip.vue"))
        );
    }
}


// export function toolTipPlugin(app: App, options = {}) {
//     options = defu(options,{
//         arrow: false,
//         ...options
//     })

//     app.config.globalProperties.$hideAllTooltips = hideAll;

//     app.provide(tooltipOptionsInject, options)
//     app.component(
//         "ToolTip", 
//         defineAsyncComponent(()=> import ("./ToolTip.vue"))
//     );
// }


// export const newPlugin = {
//     install(app, options) {
//         console.log("Hello plugin", options);
//     },
// };