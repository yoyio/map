<template>
  <h1>55555</h1>
    <img class="Information-img" :src="img" style="" />
    <h1>{{ props.name }}</h1>
    {{ props.c }}
    {{ props.area }}
    {{ props.amount }}
    {{ props.proele }}
    {{ props.co2 }}
    {{ props.reduceCo2 }}
</template>


<script setup>
import { watch } from "@vue/runtime-core"

const props = defineProps(['name', 'area', 'c', 'amount', 'proele', 'co2', 'reduceCo2','img'])

const emit = defineEmits(['up'])

watch(props,(newValue)=>{
  console.log(props)
  emit('up',newValue)
})




</script>