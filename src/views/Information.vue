<template>
  <div class="about">
    <div class="about-img"></div>
    <div class="about-t">
      <p class="about-text">
        於時遠和神發不先極她是沒民市接一生我設，物訴入感表坡明位。麼畫落現行車，著事本只教朋……市馬事去國後職且笑愛來世，靜商灣衣資：客雲看：到極人說名那治之每好以，海所了我而。有大當有夫動裡她？電火你無體、不眼商說有笑，因效持先不說自的知男要大對操心長告就言那超於去護？
      </p>
      <div class="about-i">
        <RouterLink to="/Map" class="about-button">開始使用</RouterLink>
        <!-- <img src=".././assets/1.png" class="i1"> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  margin: 0 auto;
  height: 870px;
  top: 80px;
}
.about-img {
  width: 100%;
  margin: 0 auto;
  height: 800px;
  background-image: url(".././assets/1.png");
  background-position: center;
  background-size: cover;
  filter: blur(10px);
}
.about-t {
  width: 75%;
  margin: 0px auto;
  position: absolute;
  top: 100px;
  left: 12.5%;
}
.about-title {
  color: #1e1c1b;
  font-size: 100px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 30px 0px 0px 0px;
  z-index: 1;
}
.about-text {
  color: #1e1c1b;
  font-size: 20px;
  font-weight: bold;
  padding: 0px 50px 30px 50px;
  display: flex;
  justify-content: center;
}
.about-i {
  width: 100%;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
}
.about-button {
  color: #1e1c1b;
  font-weight: bold;
  font-size: 20px;
  background-color: #f7f5ed;
  border-style: solid;
  border-color: #1e1c1b;
  border-width: 3px;
  width: 200px;
  height: 40px;
  border-radius: 20px 30px;
  text-decoration: none;
  padding: 0px 55px;
}
</style>