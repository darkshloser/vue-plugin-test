// import ToolTip from './ToolTip.vue';
import { defineAsyncComponent } from 'vue';

export function toolTipPlugin(app, options) {
    app.component("ToolTip", defineAsyncComponent(()=> import ("./ToolTip.vue")));
    console.log("Hello plugin", options)
}


// export const newPlugin = {
//     install(app, options) {
//         console.log("Hello plugin", options);
//     },
// };