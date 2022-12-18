<template>
  <h1>zzzzzz</h1>
  <div class="mapContainer" ref="mapContent"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/markercluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import allData from "../data/xinyi.json";

let map = {};
const mapContent = ref(null);

const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const markers = L.markerClusterGroup();



const addressPoints = [
  [24.046435, 120.687053, "2"],
  [24.046435, 120.687053, "3"],
  [24.046435, 120.687053, "3A"],
  [24.046435, 120.687053, "178"],
  [24.046435, 120.687053, "190"],
  [24.046435, 120.687053, "156"],
];

console.log(addressPoints )
console.log(allData.restaurants )



onMounted(() => {
  map = new L.Map(mapContent.value, {
    center: [24.046435,120.687053],
    zoom: 17,
  });

  L.tileLayer(osmUrl, {
    maxZoom: 19,
    attribution: attribution,
  }).addTo(map);
  
  for(let i =0;allData.restaurants.length>i;i++){
  markers.addLayer(L.marker([allData.restaurants[i].lat, allData.restaurants[i].lng])); //將 L.mark(地標) 的圖層放到 makers 上面
  }

  map.addLayer(markers);
});
</script>

<style>
.mapContainer { 
  width: 1200px;height: 1000px;
}
</style>

