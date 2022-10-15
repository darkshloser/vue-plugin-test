<script setup>
import { ref } from 'vue';
const toolTipText = ref("Hello World");
</script>

<template>
  <h3>Custom Vue.js 3 Plugins</h3>
  <input type="text" v-model="toolTipText"/><br/>
  <span>Hover Over Me <ToolTip :text="toolTipText" :options="{placement:'bottom'}" /></span>
  <br/>
  <span>Other ... <ToolTip :text="toolTipText"  /></span>
  <br/>
  <button @click="$hideAllTooltips()">Hide all tooltips</button>
</template>