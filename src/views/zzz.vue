<template>
  <div class="container">
    <input type="checkbox" id="map-card-swit" />
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
      <div class="cl-arrow">
        <label class="cl-arrow-button" for="map-card-swit"> 55 </label>
      </div>
      <div class="mapContainer" ref="mapContent"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/markercluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet-draw/dist/leaflet.draw";
import "leaflet-draw/dist/leaflet.draw.css";
import allData from "../data/xinyi.json";
import cityName from "../data/cityName.json";

let map = {};
const mapContent = ref(null);

const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const markers = L.markerClusterGroup();

const AreaList = cityName.AreaList;
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

  //

  var drawItem = new L.FeatureGroup();
  map.addLayer(drawItem);
  var option = {
    position: "topleft",
    collapsed: true,
    draw: {
      rectangle: false,
      marker: false,
      circlemarker: false,
    },
    edit: {
      featureGroup: drawItem,
    },
  };
  var drawControl = new L.Control.Draw(option);
  map.addControl(drawControl);
  map.on(L.Draw.Event.CREATED, function (e) {
    var layer = e.layer;
    drawItem.addLayer(layer); // 必須將畫完的圖層加入
    console.log(arguments);
  });
  //
  for (let i = 0; allData.restaurants.length > i; i++) {
    markers.addLayer(
      L.marker([allData.restaurants[i].lat, allData.restaurants[i].lng])
    ); //將 L.mark(地標) 的圖層放到 makers 上面
  }
  map.addLayer(markers);
});
</script>


<style scoped>
#map-card-swit {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
#map-card-swit:checked + .Information {
  z-index: 1;
  transform: translateX(-5%);
}
#map-card-swit:checked + .Information label .fa-solid {
  transform: scaleX(-1);
}
.cl-arrow {
  position: absolute;
  top: 50%;
  left: 5%;
}
.cl-arrow-button {
  text-align: right;
  border-radius: 10%;
  border: 0;
  width: 30px;
  height: 50px;
  background-color: #ff1313;
  padding-right: 0px;
  line-height: 50px;
}

.container {
  width: 100%;
  margin: 0px auto;
  padding: 0px;
  display: flex;
  flex-direction: row;
  top: 90px;
}
.Information {
  background-color: rgb(135, 135, 135);
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
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
  width: 100%;
  height: 700px;
}
</style>

