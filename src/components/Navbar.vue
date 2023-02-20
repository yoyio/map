<template>
  <header>
      <a href="#" class="navbar-brand">數位地圖</a>
      <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Map" class="nav-link">地圖</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">關於</RouterLink>
          </li>
        </ul>
      </nav>
      <label class="navbar-toggle-label" for="navbar-toggle">
        <span class="hamburger"></span>
      </label>
  </header>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap&subset=chinese-traditional");

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: #f6f7f8;
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  line-height: 0.9;
}

p {
  margin: 0;
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

/*Main Header*/
header {
  width: 100%;
  height: 60px;
  z-index: 999;
  text-align: center;
  background-color: #038686;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
}

.nav {
  position: absolute;
  top: 100%;
  background: #ffffff;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  z-index: 1;
}

.navbar-toggle {
  position: absolute;
  visibility: hidden;
}

.navbar-toggle:checked~.nav {
  transform: scale(1, 1);
}

.navbar-toggle:checked~.nav .nav-item {
  /*只有開啟時 delay .15s */
  transition: opacity 0.2s ease-out 0.15s;
  /*開啟時透明度為1*/
  opacity: 1;
}

.navbar-toggle-label {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 7.5%;
  display: flex;
  align-items: center;
}

.hamburger {
  position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  width: 25px;
  height: 3px;
  background: #F7F5ED;
  margin: 0.2rem 0;
}

.hamburger::before,
.hamburger::after {
  position: absolute;
  content: "";
  left: 0;
}

.hamburger::before {
  top: 8px;
}

.hamburger::after {
  bottom: 8px;
}

.navbar-brand {
  color: #F7F5ED;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 60px;
}

.nav-item {
  margin: 1.4rem 0;
  /*預設透明度 0*/
  opacity: 0;
}

.nav-link {
  color: #038686;
}


@media screen and (min-width: 850px) {
  .action {
    font-size: 1.2rem;
    padding: 0.75rem 2rem;
  }

  /*Main Header*/
  header {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
  }

  .navbar-toggle-label {
    display: none;
  }

  .navbar-brand {
    grid-column: 2 / 3;
  }

  .nav {
    all: unset;
    grid-column: 3 / 4;
  }

  .nav-list {
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    grid-gap: 2rem;
  }

  .nav-item {
    margin: 0;
    opacity: 1;
  }

  .nav-link {
    color: #F7F5ED;
  }
}
</style>