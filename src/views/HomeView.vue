<template>
  <div class="about">
    <div class="about-img"></div>
    <div class="about-t">
      <p class="about-title">數位地圖</p>
      <p class="about-text">
        於時遠和神發不先極她是沒民市接一生我設，物訴入感表坡明位。麼畫落現行車，著事本只教朋……市馬事去國後職且笑愛來世，靜商灣衣資：客雲看：到極人說名那治之每好以，海所了我而。有大當有夫動裡她？電火你無體、不眼商說有笑，因效持先不說自的知男要大對操心長告就言那超於去護？
      </p>
      <div class="about-i">
        <RouterLink to="/Map" class="about-button">開始使用</RouterLink>
        <!-- <img src=".././assets/1.png" class="i1"> -->
      </div>
    </div>
  </div>
  <div class="introduce">
    <div class="introduce-img"></div>
    <div class="introduce-text">
      <p>
        於時遠和神發不先極她是沒民市接一生我設，物訴入感表坡明位。麼畫落現行車，著事本只教朋……市馬事去國後職且笑愛來世，靜商灣衣資：客雲看：到極人說名那治之每好以，海所了我而。有大當有夫動裡她？電火你無體、不眼商說有笑，因效持先不說自的知男要大對操心長告就言那超於去護？
      </p>
    </div>
  </div>
  <div class="introduce">
    <div class="introduce-text">
      <p>
        於時遠和神發不先極她是沒民市接一生我設，物訴入感表坡明位。麼畫落現行車，著事本只教朋……市馬事去國後職且笑愛來世，靜商灣衣資：客雲看：到極人說名那治之每好以，海所了我而。有大當有夫動裡她？電火你無體、不眼商說有笑，因效持先不說自的知男要大對操心長告就言那超於去護？
      </p>
    </div>
    <img class="introduce-img" />
  </div>
  <div class="top">
    <a href="#top">上</a>
  </div>
  <div class="footer" id="footer">
    <div class="footer_logo">
      <span style="margin-right: 1rem; font-size: 30px">
        <font face="DFKai-sb"><b>亞洲大學</b></font>
      </span>
      <span style="margin-right: 1rem">
        <font face="DFKai-sb">精準健康研究中心</font>
      </span>
    </div>
    <div class="footer_text">
      <font face="DFKai-sb"
        ><span>校址: 413305 台中市霧峰區柳豐路500號</span></font
      >
      <font face="DFKai-sb"
        ><span>TEL: +886-4-2332-3456 | +886-4-3706-1889</span></font
      >
    </div>
  </div>
</template>

<script>
</script>

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
  background-image: url(".././assets/2.png");
  background-position: center;
  background-size: cover;
  filter: blur(5px);
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
  font-size: 6rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 30px 0px 0px 0px;
  z-index: 1;
}
.about-text {
  color: #1e1c1b;
  font-size: 1.5rem;
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
  font-size: 2rem;
  background-color: #f7f5ed;
  border-style: solid;
  border-color: #1e1c1b;
  border-width: 3px;
  width: 300px;
  height: 60px;
  border-radius: 20px 30px;
  text-decoration: none;
  padding: 0px 80px;
}
.introduce {
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
}
.introduce-img {
  background-color: #f7f5ed;
  width: 50%;
}
.introduce-text {
  background-color: #1e1c1b;
  color: #f7f5ed;
  width: 50%;
  padding: 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*top*/
.top {
  text-align: center;
  line-height: 200px;
  height: 200px;
  padding: 10px;
  font-size: 40px;
  color: #000;
  background-color: #fdf7df;
}
a{
  text-decoration: none;
  color: #000;
}
/*footer*/
.footer {
  width: 100%;
  height: 150px;
  /* footer的高度一定要是固定值*/
  position: absolute;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  background-color: #fdf7df;
  color: #1e1c1b;
}
.footer_logo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
}
.footer_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  font-size: 16px;
}
</style>
