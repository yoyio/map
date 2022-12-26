<template>
  <div class="container">
    <div class="card">
      <input
        class="c-shrinkIcon__input"
        id="searchText"
        type="text"
        name="search"
        placeholder="搜尋..."
      />
      <div class="Information scrollbar" v-if="area">
        <img class="Information-img" :src="img" style="" />
        <RouterLink to="/Information" class="Information-title">{{
          name
        }}</RouterLink>
        <p class="Information-text">{{ area }}</p>
        <p class="Information-text">{{ c }}</p>
        <P class="Information-text">{{ amount }}</P>
        <P class="Information-text">{{ proele }}</P>
        <P class="Information-text">{{ co2 }}</P>
        <P class="Information-text">{{ reduceCo2 }}</P>
      </div>
      <div class="p-sideContent scrollbar" v-else>
        <div class="p-card" v-for="(item, key) in data" :key="key">
          <div class="h-d-flex h-mb-3 h-align-items-center">
            <h2 class="h-flex-1">
              <RouterLink to="/Information" style="text-decoration:none; color:#3f3f3f">{{ item.name }}</RouterLink>
            </h2>
          </div>
          <span class="h5 h-text-dark">{{ item.address }}</span>
          <br />
          <span class="h5 h-text-dark">{{ item.iphon }}</span>
          <br />
        </div>
      </div>
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
import "leaflet-draw/dist/leaflet.draw";
import "leaflet-draw/dist/leaflet.draw.css";
import allData from "../data/xinyi.json";
import cityName from "../data/cityName.json";
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
const data = allData.restaurants;

onMounted(() => {
  console.log(allData.restaurants);
  console.log(cityName);
  const data = allData.restaurants;
  console.log(data);

  //建立地圖物件
  const map = L.map(mapContainer.value, {
    center: [23.710100, 120.602125],
    zoom: 10,
  });

  //L.tileLayer建立圖資
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  //繪圖工具&繪圖
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

  //Marker for迴圈標記 ,圖標上顯示訊息
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.mapContainer {
  width: 80vw;
  height: 91vh;
}

.scrollbar {
  overflow-y: scroll;
  padding-left: 6px;
}
.scrollbar::-webkit-scrollbar {
  width: 3px;
}
.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: #ffffff;
}
.card {
  background-color: #ffffff;
  width: 20vw;
  height: 89vh;
  margin: 0px 10px;
}
.Information {
  background-color: #ffffff;
  width: 20vw;
  height: 87vh;
}
.Information-img {
  width: 98%;
  height: 25%;
  margin-top: 10px;
}
.Information-title {
  color: #3f3f3f;
  font-size: 40px;
  text-decoration: none;
}
.Information-text {
  color: #3f3f3f;
  font-size: 20px;
}

/*搜尋*/
.c-shrinkIcon__input {
  font-size: 1rem;
  height: 31px;
  width: 100%;
  background-color: #fff;
  border-style: solid;
  border-color: #1e1c1b;
  border-width: 3px;
  padding-left: 10px;
  padding-right: 35px;
  border-radius: 20px;
  margin-top: 10px;
}
.p-sideContent {
  overflow-y: auto;
  background-color: #fff;
}
.p-card {
  padding: 0.9375rem 0.75rem;
  border-bottom: 1px solid #d9d9d9;
}
</style>
