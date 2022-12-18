<template>
  <div class="container">
    <div class="Information">
      <img :src="img" style="width: 100%; height: 30%" />
      <p class="Information-title">{{ name }}</p>
      <p class="Information-text">{{ area }}</p>
      <p class="Information-text">{{ c }}</p>
      <P class="Information-text">{{ amount }}</P>
      <P class="Information-text">{{ proele }}</P>
      <P class="Information-text">{{ co2 }}</P>
      <P class="Information-text">{{ reduceCo2 }}</P>
      <!-- <RouterLink
        to="/Information"
        class=""
        style="font-size: 15px; color: #3f3f3f"
        >更多資訊</RouterLink
      > -->
    </div>
    <!--地圖呈現在此-->
    <div class="mapContainer" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/markercluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import allData from "../data/xinyi.json";
import { onMounted, ref } from "vue";

const mapContainer = ref(null);
const img = ref(null);
const name = ref(null);
const area = ref(null);
const c = ref(null);
const amount = ref(null);
const proele = ref(null);
const co2 = ref(null);
const reduceCo2 = ref(null);

const markers = L.markerClusterGroup();

onMounted(() => {
  console.log(allData.restaurants);

  //建立地圖物件
  const map = L.map(mapContainer.value, {
    center: [24.046435, 120.687053],
    zoom: 17,
  });

  //L.tileLayer建立圖資
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  //標記
  const marker = L.marker([24.046435, 120.687053], {}).addTo(map);

  //circle for 迴圈地圖新增圓形
  for (var i = 0; allData.restaurants.length > i; i++) {
    L.circle([allData.restaurants[i].lat, allData.restaurants[i].lng], {
      color: allData.restaurants[i].color,
      fillOpacity: 0.3,
      radius: 120,
    }).addTo(map);
  }

  //Marker for 迴圈 ,圖標上顯示訊息
  for (let i = 0; allData.restaurants.length > i; i++) {
    markers.addLayer(
      L.marker([allData.restaurants[i].lat, allData.restaurants[i].lng])
        .bindPopup(
          `<div class="InfoWindowOpened-text " style="font-size: 20px;">
        <h1>` +
            allData.restaurants[i].name +
            `</h1><p style="font-size: 15px;">地址:` +
            allData.restaurants[i].address +
            `<br>電話` +
            allData.restaurants[i].iphon +
            `<br>申請人類別:` +
            allData.restaurants[i].whoCategory +
            `<br>申請人或機構:` +
            allData.restaurants[i].who +
            `<br>設置型別:` +
            allData.restaurants[i].category +
            `<br>發電設備種類:` +
            allData.restaurants[i].electricity +
            `(PV)<br>設置位置:` +
            allData.restaurants[i].location +
            `<br>總裝置容量:` +
            allData.restaurants[i].capacity +
            `kW</p> `
        )
        .on("click", () => {
          img.value = allData.restaurants[i].img;
          name.value = allData.restaurants[i].name;
          area.value = "占地面積: " + allData.restaurants[i].area + "公頃";
          c.value = "漁獲: " + allData.restaurants[i].c;
          amount.value = "產量: " + allData.restaurants[i].amount + "公斤";
          proele.value = "發電量: " + allData.restaurants[i].proele + "KW";
          co2.value = "碳排量: " + allData.restaurants[i].co2 + "公斤";
          reduceCo2.value =
            "減少碳排量: " + allData.restaurants[i].reduceCo2 + "公斤";
        })
    );
  }
  map.addLayer(markers);
});
</script>

<style scoped>
.container {
  max-width: 1500px;
  margin: 0px auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.Information {
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
.google-map {
  width: 80%;
  height: 700px;
}
.mapContainer {
  width: 1200px;
  height: 700px;
}
</style>
