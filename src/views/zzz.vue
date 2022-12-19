<template>
  <div class="container">
    <div class="Information">
      <div class="toolbox col-sm-3 p-2 bg-white">
        <div class="form-group d-flex">
          <label for="cityName" class="col-form-label mr-2 text-right"
            >縣市</label
          >
          <div class="flex-fill">
            <select id="cityName" class="form-control">
              <option value="">-- 請選擇縣市 --</option>
              <option
                :value="c.CityName"
                v-for="c in cityName"
                :key="c.CityName"
              >
                {{ c.CityName }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group d-flex">
          <label for="area" class="col-form-label mr-2 text-right">地區</label>
          <div class="flex-fill">
            <select id="area" class="form-control">
              <option value="">-- 請選擇地區 --</option>
              <option
                :value="a.AreaName"
                v-for="a in cityName"
                :key="a.AreaName"
              >
                {{ a.AreaName }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="mapContainer" ref="mapContent"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/markercluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import allData from "../data/xinyi.json";
import cityName from "../data/cityName.json";

let map = {};
const mapContent = ref(null);

const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const markers = L.markerClusterGroup();

const AreaList=cityName.AreaList
console.log(cityName);
console.log(AreaList);
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
});
</script>


<style scoped>
.container {
  width: 100%;
  margin: 0px auto;
  padding: 0px;
  display: flex;
  flex-direction: row;
  top: 90px;
}
.Information {
  background-color: #fff;
  width: 20%;
  height: 700px;
}
.Information-title {
  color: #3f3f3f;
  font-size: 40px;
  padding: 20px 20px;
}
.Information-text {
  color: #3f3f3f;
  font-size: 20px;
  padding: 3px 30px;
}
.mapContainer {
  width: 80%;
  height: 700px;
}
</style>

