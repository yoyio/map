<template>
    <div class="header-navbar">
        <div class="container-fluid">
          <!-- header-left -->
          <div class="header-left">
            <!-- title -->
            <div class="header-title-text">
              <RouterLink to="/" class="navbar-brand" style="font-size: 20px; color: #F7F5ED ;text-decoration: none;">數位地圖</RouterLink>
            </div>
          </div>

          <!-- header-right -->
          <div class="header-right">
            <RouterLink  to="/" class="header-right-text">首頁</RouterLink>
            <RouterLink  to="/Map" class="header-right-text">地圖</RouterLink>
            <RouterLink  to="/about" class="header-right-text">關於</RouterLink>
            <RouterLink  to="/zzz" class="header-right-text" >ZZZ</RouterLink>
          </div>
        </div>
    </div>
</template>


<style scoped>
.container-fluid {
  background-color: #ab9782;
  height: 60px;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}
.header-left {
  margin-left: 5%;
  line-height: 60px;
  text-align: center;
}

.header-right {
  margin-right: 5%;
  margin-left: 20%;
  font-size: 12px;
}

.header-right-text {
  margin: 0 5px;
  line-height: 60px;
  text-align: center;
  text-decoration: none;
}
a{
  color:#F7F5ED;
}


/*響應式*/
@media (min-width: 389px) {
  .header-left {
    margin-left: 10%;
  }
}

@media (min-width: 559px) {
    .header-left {
      margin-left: 10%;
    }
    .header-right {
      margin-left: 25%;
    }
    .header-right-text {
      margin: 0 10px;
    }
}
</style>