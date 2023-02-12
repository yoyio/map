<template>
  <div class="container">
    <div class="card scrollbar">
      <input class="c-shrinkIcon__input" id="searchText" type="text" name="search" placeholder="搜尋..." />
      <div class="Information " v-if="area">
        <br />
        <img :src="img" class="Information-img" />
        <br />
        <RouterLink :to="`/Information/${id}`" class="Information-title">{{  name  }}</RouterLink>
        <br />
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
              <RouterLink to="/" style="text-decoration: none;color: #3f3f3f">{{ item.name }}</RouterLink>
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
  <div class="footer" id="footer">
    <div class="footer_logo">
      <span style="margin-right: 1rem; font-size: 18px">
        <font face="DFKai-sb"><b>亞洲大學-精準健康研究中心</b></font>
      </span>
    </div>
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
const id = ref(null);
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
  for (let i = 0; data.length > i; i++) {
    markers.addLayer(
      L.marker([data[i].lat, data[i].lng])
        .bindPopup(
          `<div class="InfoWindowOpened-text " style="font-size: 20px;">
        <h1>` +
          data[i].name +
          `</h1><p style="font-size: 15px;">地址:` +
          data[i].address +
          `<br>電話` +
          data[i].iphon +
          `<br>申請人類別:` +
          data[i].whoCategory +
          `<br>申請人或機構:` +
          data[i].who +
          `<br>設置型別:` +
          data[i].category +
          `<br>發電設備種類:` +
          data[i].electricity +
          `(PV)<br>設置位置:` +
          data[i].location +
          `<br>總裝置容量:` +
          data[i].capacity +
          `kW</p> `
        )
        .on("click", () => {
          img.value = data[i].img;
          id.value = data[i].id;
          name.value = data[i].name;
          area.value = "占地面積: " + data[i].area + "公頃";
          c.value = "漁獲: " + data[i].c;
          amount.value = "產量: " + data[i].amount + "公斤";
          proele.value = "發電量: " + data[i].proele + "KW";
          co2.value = "碳排量: " + data[i].co2 + "公斤";
          reduceCo2.value =
            "減少碳排量: " + data[i].reduceCo2 + "公斤";
        })
    );
  }
  map.addLayer(markers);
});
</script>

<style scoped>
.container {
  width: 100%;
}

.mapContainer {
  width: 100%;
  height: 80vh;
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
  width: 100%;
  height: 35vh;
  margin: 10px;
}

.Information {
  background-color: #ffffff;
  width: 95%;
  height: 30vh;
}

.Information-img {
  max-width: 400px;
  height: 300px;
}

.Information-title {
  color: #3f3f3f;
  font-size: 25px;
  text-decoration: none;
}

.Information-text {
  color: #3f3f3f;
  font-size: 15px;
}

/*搜尋*/
.c-shrinkIcon__input {
  font-size: 1rem;
  height: 31px;
  width: 90%;
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
  height: 50vh;
}

.p-card {
  padding: 0.3rem 1rem;
  border-bottom: 1px solid #d9d9d9;
}

.h-flex-1 {
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
}

.h5 {
  font-size: 12px;
}

/*footer*/
.footer {
  width: 100%;
  height: 60px;
  /* footer的高度一定要是固定值*/
  position: absolute;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  background-color: #038686;
  color: #f7f5ed;
}

.footer_logo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
}

/*響應式*/
@media (min-width: 389px) {
  .card {
    height: 30vh;
  }

  .Information {
    width: 100%;
  }

  .Information-title {
    font-size: 30px;
  }

  .Information-text {
    font-size: 20px;
  }

  /*搜尋*/
  .p-sideContent {
    height: 60vh;
  }

  .p-card {
    padding: 0.9375rem 0.75rem;
  }

  .h-flex-1 {
    font-size: 25px;
  }

  .h5 {
    font-size: 15px;
  }
}

@media (min-width: 539px) {
  .card {
    height: 30vh;
  }

  .Information-title {
    font-size: 40px;
  }
}

@media (min-width: 699px) {
  .card {
    height: 30vh;
  }

  .Information {
    width: 100%;
  }

  .Information-title {
    font-size: 40px;
  }

  .Information-text {
    font-size: 20px;
  }

  /*搜尋*/

  .p-card {
    padding: 0.9375rem 0.75rem;
  }
}

@media (min-width: 819px) {
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

  .card {
    width: 20vw;
    height: 90vh;
    margin: 0px 10px;
  }

  .Information {
    width: 20vw;
    height: 100vh;
  }

  .Information-title {
    font-size: 30px;
  }

  .Information-text {
    font-size: 18px;
  }

  /*搜尋*/
  .c-shrinkIcon__input {
    width: 100%;
  }

  .p-sideContent {
    height: 90vh;
  }

  .p-card {
    padding: 0.9375rem 0.75rem;
  }

  .h-flex-1 {
    font-size: 20px;
  }

  .h5 {
    font-size: 15px;
  }
}

@media (min-width: 1199px) {
  .Information-title {
    font-size: 40px;
  }

  .Information-text {
    font-size: 23px;
  }

  .h-flex-1 {
    font-size: 25px;
  }
}
</style>
