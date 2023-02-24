<template>
  <div class="a">
    <div class="cardc scrollbar">
      <div class="Information " v-if="area">
        <img :src="img" class="Information-img" />
        <div class="InformationT">
          <RouterLink :to="`/Information/${id}`" class="Information-title">{{ name }}</RouterLink>
          <hr style="margin-top:20px;"/>
          <p class="Information-text" style="margin-top:20px;">{{ area }}</p>
          <p class="Information-text">{{ c }}</p>
          <P class="Information-text">{{ amount }}</P>
          <P class="Information-text">{{ proele }}</P>
          <P class="Information-text">{{ co2 }}</P>
          <P class="Information-text">{{ reduceCo2 }}</P>
          <br />
          <RouterLink :to="`/Information/${id}`" style="text-decoration: none;left: 50%;color: #3f3f3f;font-size: 20px;">
            詳細資料<font-awesome-icon icon="fa-solid fa-arrow-right" />
          </RouterLink>
        </div>
      </div>
      <div class="p-sideContent scrollbar" v-else>
        <div class="card" v-for="(item, key) in data" :key="key">
          <div class="h-d-flex h-mb-3 h-align-items-center">
            <h2 class="h-flex-1">
              <RouterLink :to="`/Information/${item.id}`" style=";text-decoration: none;color: #3f3f3f">{{ item.name }}
              </RouterLink>

            </h2>
          </div>
          <p class="h5 h-text-dark">{{ item.address }}</p>
          <p class="h5 h-text-dark">{{ item.iphon }}</p>
          <RouterLink :to="`/Information/${item.id}`" style="text-decoration: none;left: 70%;color: #3f3f3f;">
            詳細資料<font-awesome-icon icon="fa-solid fa-arrow-right" />
          </RouterLink>

        </div>
      </div>
    </div>
    <!--地圖呈現在此-->
    <div class="mapContainer" ref="mapContainer"></div>
  </div>
  <!-- footer -->
  <div class="footer" id="footer">
    <div class="fo">
      <div class="footer_logo">
        <span style="font-size: 20px">
          <p>亞洲大學-綠色產業下的永續經濟創生研究</p>
        </span>

      </div>
      <div class="footer-text">
        <p class="footer-text-i">聯絡我們</p>
        <hr />
        <p class="footer-text-i">地址:41354台中市霧峰區柳豐路500號</p>
        <p class="footer-text-i">電話: 04-23323456#6502</p>
        <p class="footer-text-i">信箱:cnwang@aisa.edu.tw</p>
      </div>
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

 //客製化Marker
  const customIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [22, 32],
  });

  //Marker for迴圈標記 ,圖標上顯示訊息
  for (let i = 0; data.length > i; i++) {
    markers.addLayer(
      L.marker([data[i].lat, data[i].lng],{ icon: customIcon })
        .bindPopup(
          `<div class="InfoWindowOpened-text ">
        <h3>` +
          data[i].name +
          `</h3><p style="font-size: 12px;">地址:` +
          data[i].address +
          `<br>電話` +
          data[i].iphon +
          `</p> `
        )
        .on("click", () => {
          img.value = data[i].img;
          id.value = data[i].id;
          name.value = data[i].name;
          area.value = "場域面積: " + data[i].area + "公頃";
          c.value = "農作物型態: " + data[i].c;
          amount.value = "農作產量: " + data[i].amount + "公斤";
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
.a {
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

.cardc {
  background-color: #ffffff;
  width: 100%;
  height: 35vh;
}

.Information {
  background-color: #ffffff;
  width: 100%;
  margin: 0px auto;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Information-img {
  max-width: 90%;
  margin: 30px auto;
  height: 300px;
}

.InformationT {
  width: 90%;
  margin: 0px auto;
}

.Information-title {
  color: #3f3f3f;
  font-size: 20px;
  text-decoration: none;
}
.Information-title:hover{
  color: #038686;
}

.Information-text {
  color: #3f3f3f;
  font-size: 16px;
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
  line-height: 32px;
}

.card {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #d9d9d9;
  margin: 20px 0px;
}

.h-flex-1 {
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  margin-bottom: 30px;
}

.h5 {
  font-size: 16px;
}

/*footer*/
.footer {
  width: 100%;
  background-color: #038686;
  line-height: 24px;
}

.fo {
  max-width: 95%;
  margin: 0px auto;
  padding: 1px 0px;
  color: #f7f5ed;
}

.footer_logo {
  margin: 20px auto;
  text-align: center;
}

.footer-icon {
  width: 250px;
  margin: 0px auto;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.footer-text {
  margin: 20px auto;
  margin-top: 50px;
  width: 50%;
  text-align: center;
}

a {
  text-decoration: none;
  color: #fff;
}

/*響應式*/
@media (min-width: 389px) {
  .cardc {
    height: 30vh;
  }

  .Information {
    width: 100%;
  }

  /*搜尋*/
  .p-sideContent {
    height: 60vh;
  }

  .card {
    padding: 0.9375rem 0.75rem;
  }
}

@media (min-width: 539px) {
  .cardc {
    height: 30vh;
  }
}

@media (min-width: 699px) {
  .cardc {
    height: 30vh;
  }

  .Information {
    width: 100%;
  }

  /*搜尋*/
  .card {
    padding: 0.9375rem 0.75rem;
  }
}

@media (min-width: 819px) {
  .a {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .mapContainer {
    width: 75vw;
    height: 91vh;
  }

  .cardc {
    width: 25vw;
    height: 90vh;
    margin: 0px 10px;
  }

  .Information {
    width: 25vw;
  }

  .Information-img {
    max-width: 100%;
    margin: 30px auto;
    height: 300px;
  }

  /*搜尋*/
  .c-shrinkIcon__input {
    width: 100%;
  }

  .p-sideContent {
    height: 90vh;
  }

  .card {
    padding: 0.9375rem 0.75rem;
  }
}
</style>
