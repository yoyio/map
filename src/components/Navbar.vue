<template>
  <header>
    <div class="header-navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- header-left -->
          <div class="header-left">
            <!-- title -->
            <div class="header-title-text">
              <RouterLink to="/" class="navbar-brand" style="font-size: 40px; color: #3f3f3f">數位地圖</RouterLink>
            </div>
          </div>

          <!-- header-right -->
          <div class="header-right">
            <RouterLink  to="/" class="header-right-text">首頁</RouterLink>
            <RouterLink  to="/Map" class="header-right-text">地圖</RouterLink>
            <a class="header-right-text">關於</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>


<style scoped>
header {
  background-color: #dcdcdc;
  border-style: solid;
  border-color: #3f3f3f;
  border-width: 0px 0px 3px 0px;
  height: 90px;
}
.container-fluid {
  height: 90px;
  width: 100%;
  top: 0px;
  display: flex;
  align-items: center;
  z-index: 1;
}
.header-left {
  margin-left: 150px;
  line-height: 90px;
  text-align: center;
}
.header-right {
  margin-right: 60px;
}
.header-right-text{
  margin: 0 25px;
  line-height: 90px;
  text-align: center;
  text-decoration: none;
}
a{
  color:#3f3f3f;
}
</style>