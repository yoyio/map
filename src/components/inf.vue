<template>
  <div class="about">
    <h1>22222</h1>
    <img class="Information-img" :src="img" style="" />
    <h1>{{ name }}</h1>
    {{ c }}
    {{ area }}
    {{ amount }}
    {{ proele }}
    {{ co2 }}
    {{ reduceCo2 }}
  </div>
</template>

<script setup>
defineProps(['name', 'area', 'c', 'amount', 'proele', 'co2', 'reduceCo2', 'img'])

</script>

<style scoped>
.about {
  width: 100%;
  margin: 0 auto;
}
</style>