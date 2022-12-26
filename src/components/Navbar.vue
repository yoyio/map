<template>
  <header>
    <div class="header-navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- header-left -->
          <div class="header-left">
            <!-- title -->
            <div class="header-title-text">
              <RouterLink to="/" class="navbar-brand" style="font-size: 30px; color: #F7F5ED ;text-decoration: none;">數位地圖</RouterLink>
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
      </nav>
    </div>
  </header>
</template>


<style scoped>
header {
  background-color: #1e1c1b;
  height:80px;
  z-index: 1;
}
.container-fluid {
  background-color: #1e1c1b;
  height: 80px;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.header-left {
  margin-left: 180px;
  line-height: 80px;
  text-align: center;
}
.header-right {
  margin-right: 150px;
  font-size: 14px;
}
.header-right-text{
  margin: 0 25px;
  line-height: 80px;
  text-align: center;
  text-decoration: none;
}
a{
  color:#F7F5ED;
}
</style>