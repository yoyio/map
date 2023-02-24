<template>
  <div class="about">
    <div class="about-img">
      <div class="about-t">
        <p class="about-title">綠能下的數位地圖</p>
        <p class="about-text">
          歡迎來體驗農電共生數位地圖，這是一款智慧化的應用，結合了農業與能源產業，透過資訊科技，提供全面性、即時性、準確性的數據分析，協助農業、能源業及政府相關單位制定最佳的農電共生模式，以達到節能減碳，提高農業效益等多重效益。
        </p>
      </div>
    </div>
    <div class="about-i">
      <p class="about-text-r">
        透過數位地圖，瞭解農地的能源潛力、太陽能、風能、水力等能源的利用現況及未來潛力，依據數據分析，推算出最佳的農電共生模式及配電規劃，以達到區域性的能源整合與協調，促進區域經濟發展及社會永續。
      </p>
      <br />
      <RouterLink to="/Map" class="about-button">
        <button type="button" class="btn btn-outline-success">
          開始使用<font-awesome-icon icon="arrow-right" />
        </button>
      </RouterLink>
    </div>
  </div>
  <div class="introduce-a">
    <div class="introduce-img-a"></div>
    <div class="introduce-text-a">
      <p class="introduce-ti-a">
        農業為本 綠能加值
      </p>
      <p class="introduce-te-a">
        農電共生數位地圖能夠協助您實現能源與農業的共生，實現環境保護、節能減碳、提高農業效益的目標。此外，它還可以幫助您進一步降低能源成本，提高能源利用效率，並且為您提供更多的商業價值。
      </p>
      <p class="introduce-te-a">
        如果您是農民，您可以透過農電共生數位地圖，了解農地的能源潛力，制定最佳的農業種植及能源利用策略，提高農產品的品質和產量；如果您是能源業者，您可以透過農電共生數位地圖，了解能源資源的利用現況及未來潛力，制定最佳的能源利用策略，實現能源的最大化效益；如果您是政府相關部門，您可以透過農電共生數位地圖，了解區域性的能源整合及協調，實現經濟發展與社會永續。
      </p>
    </div>
  </div>
  <div class="introduce-b">
    <div class="introduce-text-b">
      <p class="introduce-ti-b">
        農業綠能
      </p>
      <p class="introduce-te-b">
        農電共生數位地圖具有即時性、全面性及準確性，能夠協助各界了解農業、能源資源的利用現況及未來潛力，協助決策者進行區域性的能源整合與協調，促進區域經濟發展及社會永續。
      </p>
    </div>
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

<script>
</script>

<style scoped>
.about {
  width: 100%;
  margin: 0 auto;
}

.about-img {
  width: 100%;
  margin: 0 auto;
  height: 85vh;
  padding: 100% 0px 0px 0px;
  background-image: url('../assets/4.jpg');
  /*3 9*/
  background-position: center;
  background-size: cover;
}

.about-t {
  max-width: 70%;
  margin: -70px auto;
  color: #fff;
}

.about-title {
  font-size: 30px;
  padding: 1rem 0rem;
  font-weight: bold;
}


.about-i {
  max-width: 70%;
  margin: 60px auto;
}

.about-text-r {
  color: #141b18;
  width: 100%;
}

.about-button {
  color: #141b18;
  font-weight: bold;
  font-size: 20px;
  width: 200px;
  height: 40px;
  left: 35%;
  text-decoration: none;
}

/*a*/
.introduce-a {
  max-width: 70%;
  margin: 150px auto;
}

.introduce-img-a {
  width: 100%;
  height: 400px;
  background-color: #cccccc;
  background-image: url('../assets/10.jpg');
  /*17*/
  background-position: center;
  background-size: cover;
}

.introduce-text-a {
  color: #141b18;
  max-width: 100%;
  margin: 50px auto;
}

.introduce-ti-a {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
}

.introduce-te-a {
  margin: 30px 0px;
}

/*b*/
.introduce-b {
  width: 100%;
  margin: 100px auto 100px auto;
  padding: 2rem;
  background-color: #cccccc;
  background-color: #cccccc;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('../assets/6.jpg');
  background-position: center;
  background-size: cover;
}

.introduce-text-b {
  color: #fff;
  width: 80%;
  margin: 0px auto;
}

.introduce-ti-b {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding: 2rem 0rem;
}

.introduce-te-b {
  max-width: 50%;
  margin: 0px auto;
  padding: 2rem;
}


a {
  text-decoration: none;
  color: #000;
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
@media (min-width: 359px) {
  .about-img {
    padding: 70% 0px 0px 0px;
  }

  .about-t {
    margin: 0px auto;
  }

  .about-button {
    left: 55%;
  }
}

@media (min-width: 524px) {
  .about-img {
    padding: 60% 0px 0px 0px;
  }
  .about-t {
    margin: -10px auto;
  }
  .about-button {
    left: 65%;
  }
}

@media (min-width: 739px) {
  .about-img {
    padding: 50% 0px 0px 0px;
  }

  .about-t {
    margin: 10px auto;
  }

  .about-button {
    left: 75%;
  }

  .introduce-a {
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  .introduce-img-a {
    width: 45%;
    height: 600px;
  }

  .introduce-text-a {
    width: 50%;
  }
}

@media (min-width: 809px) {
  .about-img {
    padding: 40% 0px 0px 0px;
  }
  .about-t {
    margin: 80px auto;
  }
}

@media (min-width: 919px) {
  .about-button {
    left: 80%;
  }
  .about-t {
    margin: 40px auto;
  }
}

@media (min-width: 1109px) {
  .about-img {
    padding: 30% 0px 0px 0px;
  }

  .about-button {
    left: 90%;
  }
}</style>
