<template>
  <div class="about">
    <div class="background">
      <img class="about-img" />
    </div>
    <div class="about-t">
      <div class="about-title">
        <font face="DFKai-sb"><span>亞洲大學</span></font>
        <font face="DFKai-sb"><span>精準健康研究中心</span></font>
      </div>
      <div class="about-text">
        <font face="DFKai-sb"
          ><span>校址: 413305 台中市霧峰區柳豐路500號</span></font
        >
        <font face="DFKai-sb"
          ><span>TEL: +886-4-2332-3456 | +886-4-3706-1889</span></font
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-image: url(".././assets/1.png");
  background-position: center;
  background-size: cover;
}
.about-img {
  max-width: 70%;
  height: 93vh;
}
.about-t {
  width: 60%;
  height: 500px;
  margin: 10px auto;
  padding: 10px;
  position: absolute;
  top: 100px;
  left: 20%;
  background-color: #f7f5ed;
  display: flex;
  flex-direction: row;
  justify-content:center;
}
.about-title {
  margin: 10px;
  padding: 30px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-size: 30px;
  border-style: solid;
  border-color: #878787;
  border-width: 0px 3px 0px 0px;
}
.about-text {
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  font-size: 20px;
}
</style>