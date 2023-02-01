<template>
  <div class="about">
    <zzz :name="name" :area="area" :c="c" :amount="amount" :proele="proele" :co2="co2" :reduceCo2="reduceCo2" :img="img"
      @up="b" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import inf from "../components/inf.vue";
import zzz from "../components/zzz.vue";

const b=(name)=>{
  console.log("name")
  console.log(name)
}

</script>

<style scoped>
.about {
  width: 100%;
  margin: 0 auto;
}
</style>