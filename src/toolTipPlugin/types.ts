import type {HideAll, Props} from "tippy.js";
import type ToolTip from "./ToolTip.vue";
export type PluginOptions = Partial<Props>;

//to export all types from our main 
export * from "./index";

declare module "vue"{
    interface ComponentCustomProperties{
        $hideAllTooltips: HideAll
    }
    interface GlobalComponents{
        ToolTip: typeof ToolTip;
    }
}