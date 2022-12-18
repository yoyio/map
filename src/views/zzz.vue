<template>
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
const attribution =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const markers = L.markerClusterGroup();

const addressPoints = [
  [24.046435, 120.687053, "2"],
  [24.046435, 120.687053, "3"],
  [24.046435, 120.687053, "3A"],
  [24.046435, 120.687053, "178"],
  [24.046435, 120.687053, "190"],
  [24.046435, 120.687053, "156"],
];

console.log(addressPoints);
console.log(allData.restaurants);

onMounted(() => {
  map = new L.Map(mapContent.value, {
    center: [24.046435, 120.687053],
    zoom: 17,
  });

  L.tileLayer(osmUrl, {
    maxZoom: 19,
    attribution: attribution,
  }).addTo(map);

  for (let i = 0; allData.restaurants.length > i; i++) {
    markers.addLayer(
      L.marker([allData.restaurants[i].lat, allData.restaurants[i].lng])
    ); //將 L.mark(地標) 的圖層放到 makers 上面
  }
  var greenIcon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });


  map.addLayer(markers);
})
</script>

<style>
.mapContainer {
  width: 100%px;
  height: 1000px;
}
</style>

