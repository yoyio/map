<template>
  <div class="dashboard">
    <div class="name">
      <div>
        <p class="name-title">場域名稱</p>
      </div>
      <div class="nametext">
        <p class="name-a" style="margin-right: 25px;">電話:0987564258</p>
        <p class="name-p">地址:413台中市霧峰區8股路100號</p>
      </div>

    </div>
    <!-- 第一排 -->
    <div class="row">
      <!-- 第1個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-1">
          <h4 class="header-title mt-0 mb-4">Total Revenue</h4>
          <div class="widget-chart-1">
            <div class="circle">
              <div class="circle-inside">
                60%
              </div>
            </div>
            <div class="widget-detail-1 text-right">
              <h2 class="font-weight-normal pt-2 mb-1"> 256 </h2>
              <p class="text-muted mb-1">Revenue today</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 第2個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-1">
          <h4 class="header-title mt-0 mb-3">Sales Analytics</h4>
          <div class="widget-box-2">
            <div class="widget-detail-2 text-right">
              <span class="badge-1 badge-success badge-pill float-left mt-3">32% <i class="mdi mdi-trending-up"></i>
              </span>
              <h2 class="font-weight-normal mb-1"> 8451 </h2>
              <p class="text-muted mb-3">Revenue today</p>
            </div>
            <div class="progress progress-bar-alt-success progress-sm">
              <div class="progress-bar bg-success" role="progressbar" aria-valuenow="77" aria-valuemin="0"
                aria-valuemax="100" style="width: 77%;">
                <span class="sr-only">55% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 第3個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-1">
          <h4 class="header-title mt-0 mb-4">Statistics</h4>
          <div class="widget-chart-1">
            <div class="circle-2">
              <div class="circle-inside-2">
                80%
              </div>
            </div>
            <div class="widget-detail-1 text-right">
              <h2 class="font-weight-normal pt-2 mb-1"> 4569 </h2>
              <p class="text-muted mb-1">Revenue today</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 第4個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-1">
          <h4 class="header-title mt-0 mb-3">Daily Sales</h4>
          <div class="widget-box-2">
            <div class="widget-detail-2 text-right">
              <span class="badge-1 badge-pink badge-pill float-left mt-3">32% <i class="mdi mdi-trending-up"></i>
              </span>
              <h2 class="font-weight-normal mb-1"> 158 </h2>
              <p class="text-muted mb-3">Revenue today</p>
            </div>
            <div class="progress progress-bar-alt-pink progress-sm">
              <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="77" aria-valuemin="0"
                aria-valuemax="100" style="width: 77%;">
                <span class="sr-only">77% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 第2排 -->
    <div class="row">
      <!-- 第1個 -->
      <div class="col-xl-4">
        <div class="card-box-2">
          <h4 class="header-title mt-0">Daily Sales</h4>
          <div class="widget-chart text-center">
            <div id="morris-donut-example" style="height: 245px;" class="morris-chart" dir="ltr"></div>
            <ul class="list-inline chart-detail-list mb-0">
              <li class="list-inline-item">
                <h5 style="color: #ff8acc;"><i class="fa fa-circle mr-1"></i>Series A</h5>
              </li>
              <li class="list-inline-item">
                <h5 style="color: #5b69bc;"><i class="fa fa-circle mr-1"></i>Series B</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 第2個 -->
      <div class="col-xl-4">
        <div class="card-box-2">
          <h4 class="header-title mt-0">Statistics</h4>
          <div id="morris-bar-example" style="height: 280px;" class="morris-chart" dir="ltr"></div>
        </div>
      </div>

      <!-- 第3個 -->
      <div class="col-xl-4">
        <div class="card-box-2">
          <h4 class="header-title mt-0">Total Revenue</h4>
          <div id="morris-line-example" style="height: 280px;" class="morris-chart" dir="ltr">
          </div>
        </div>
      </div>
    </div>

    <!-- 第3排 -->
    <div class="row">
      <!-- 第1個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-3 widget-user">
          <div>
            <div class="wid-u-info">
              <h5 class="mt-0">Chadengle</h5>
              <p class="text-muted-3 mb-1 font-13 text-truncate">52</p>
              <small class="text-warning"><b>單位</b></small>
            </div>
          </div>
        </div>
      </div>

      <!-- 第2個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-3 widget-user">
          <div>
            <div class="wid-u-info">
              <h5 class="mt-0"> Michael Zenaty</h5>
              <p class="text-muted-3 mb-1 font-13 text-truncate">22</p>
              <small class="text-warning"><b>單位</b></small>
            </div>
          </div>
        </div>
      </div>

      <!-- 第3個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-3 widget-user">
          <div>
            <div class="wid-u-info">
              <h5 class="mt-0">Stillnotdavid</h5>
              <p class="text-muted-3 mb-1 font-13 text-truncate">88</p>
              <small class="text-warning"><b>單位</b></small>
            </div>
          </div>
        </div>
      </div>

      <!-- 第4個 -->
      <div class="col-xl-3 col-md-6">
        <div class="card-box-3 widget-user">
          <div>
            <div class="wid-u-info">
              <h5 class="mt-0">Tomaslau</h5>
              <p class="text-muted-3 mb-1 font-13 text-truncate">156</p>
              <small class="text-warning"><b>單位</b></small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 第4排 -->
    <div class="row">
      <!-- 第1個 -->
      <div class="col-xl-4">
        <div class="card-box-4">
          <h4 class="header-title mb-3">Inbox</h4>
          <div class="inbox-widget">
            <div class="inbox-item" style="margin-top: 30px;">
              <div>
                <h5 class="inbox-item-author mt-0 mb-1">Chadengle</h5>
                <p class="inbox-item-text">Hey! there I'm available...</p>
              </div>
              <p class="inbox-item-date">13:40 PM</p>
            </div>
            <div class="inbox-item" style="margin-top: 30px;">
              <div>
                <h5 class="inbox-item-author mt-0 mb-1">Chadengle</h5>
                <p class="inbox-item-text">Hey! there I'm available...</p>
              </div>
              <p class="inbox-item-date">13:40 PM</p>
            </div>
            <div class="inbox-item" style="margin-top: 30px;">
              <div>
                <h5 class="inbox-item-author mt-0 mb-1">Chadengle</h5>
                <p class="inbox-item-text">Hey! there I'm available...</p>
              </div>
              <p class="inbox-item-date">13:40 PM</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 第2個 -->
      <div class="col-xl-8">
        <div class="card-box-4">
          <h4 class="header-title mt-0 mb-3">Latest Projects</h4>
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Start Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Assign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Adminto Admin v1</td>
                  <td>01/01/2017</td>
                  <td>26/04/2017</td>
                  <td><span class="badge badge-danger">Released</span></td>
                  <td>Coderthemes</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Adminto Frontend v1</td>
                  <td>01/01/2017</td>
                  <td>26/04/2017</td>
                  <td><span class="badge badge-success">Released</span></td>
                  <td>Adminto admin</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Adminto Admin v1.1</td>
                  <td>01/05/2017</td>
                  <td>10/05/2017</td>
                  <td><span class="badge badge-pink">Pending</span></td>
                  <td>Coderthemes</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Adminto Frontend v1.1</td>
                  <td>01/01/2017</td>
                  <td>31/05/2017</td>
                  <td><span class="badge badge-purple">Work in Progress</span>
                  </td>
                  <td>Adminto admin</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Adminto Admin v1.3</td>
                  <td>01/01/2017</td>
                  <td>31/05/2017</td>
                  <td><span class="badge badge-warning">Coming soon</span></td>
                  <td>Coderthemes</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Adminto Admin v1.3</td>
                  <td>01/01/2017</td>
                  <td>31/05/2017</td>
                  <td><span class="badge badge-primary">Coming soon</span></td>
                  <td>Adminto admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("route", this.$route.params.id)
    const id = this.$route.params.id
    console.log("id", id)
    console.log("route", this.$route)
    console.log("router", this.$router)
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 80%;
  margin: 20px auto;
}

.name {
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  margin: 10px 0px;
}

.name-title {
  font-size: 35px;
  margin-top: 10px;
}

.nametext {
  display: inline-flex;
  justify-content: space-around;
  align-self: flex-end;
  font-size: 20px;
}

/*1排*/
.widget-chart-1 {
  display: inline-flex;
  justify-content: space-around;
  align-self: flex-end;
  width: 100%;
  margin: 20px auto;
}

.circle {
  --width: 100px;
  --percent: 60;
  --deg: calc(360deg * calc(var(--percent) / 100));
  width: var(--width);
  height: var(--width);
  border-radius: 50%;
  margin: 0px auto;
  background-image: conic-gradient(red var(--deg), #ccc var(--deg));
  position: relative;
}

.circle-inside {
  --bar-width: 15px;
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #eee;
  width: calc(var(--width) - var(--bar-width));
  height: calc(var(--width) - var(--bar-width));
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.circle-2 {
  --width: 100px;
  --percent: 80;
  --deg: calc(360deg * calc(var(--percent) / 100));
  width: var(--width);
  height: var(--width);
  border-radius: 50%;
  margin: 0px auto;
  background-image: conic-gradient(rgb(255, 149, 0) var(--deg), #ccc var(--deg));
  position: relative;
}

.circle-inside-2 {
  --bar-width: 15px;
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #eee;
  width: calc(var(--width) - var(--bar-width));
  height: calc(var(--width) - var(--bar-width));
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.widget-box-2 {
  width: 100%;
  margin: 20px auto;
}

.badge-1 {
  top: 50px;
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  color: #fff;
}

/*3排*/
.text-warning {
  left: 80%;
  font-size: 15px;
}

.text-muted-3 {
  width: 30%;
  margin: 0px auto;
  margin-top: 10px;
  font-size: 30px;
  color: #98a6ad
}

/*4*/
.inbox-item {
  display: inline-flex;
  justify-content: space-around;
  align-self: flex-end;
  width: 100%;
  margin: 10px auto;
}
.inbox-item-date{
  top: 40px;
}


/*分隔線*/
:root {
  --blue: #71b6f9;
  --indigo: #675aa9;
  --purple: #5b69bc;
  --pink: #ff8acc;
  --red: #ff5b5b;
  --orange: #fd7e14;
  --yellow: #f9c851;
  --green: #10c469;
  --teal: #02a8b5;
  --cyan: #35b8e0;
  --white: #fff;
  --gray: #98a6ad;
  --gray-dark: #343a40;
  --primary: #71b6f9;
  --secondary: #6c757d;
  --success: #10c469;
  --info: #35b8e0;
  --warning: #f9c851;
  --danger: #ff5b5b;
  --light: #f1f5f7;
  --dark: #323a46;
  --pink: #ff8acc;
  --purple: #5b69bc;
  --blue: #71b6f9;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Roboto", sans-serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 1.5rem
}

p {
  margin-top: 0;
  margin-bottom: 1rem
}

ul {
  margin-top: 0;
  margin-bottom: 1rem
}

small {
  font-size: 80%
}

a {
  color: #71b6f9;
  text-decoration: none;
  background-color: transparent
}

a:hover {
  color: #2890f6;
  text-decoration: none
}

img {
  vertical-align: middle;
  border-style: none
}

table {
  border-collapse: collapse
}

th {
  text-align: inherit
}

input {
  margin: 0px;
  width: 80px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  overflow: visible
}

.h2,
.h4,
.h5,
h2,
h4,
h5 {
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.1
}

.h2,
h2 {
  font-size: 1.875rem
}

.h4,
h4 {
  font-size: 1.125rem
}

.h5,
h5 {
  font-size: .9375rem
}

.small,
small {
  font-size: .75rem;
  font-weight: 400
}

.list-inline {
  padding-left: 0;
  list-style: none
}

.list-inline-item {
  display: inline-block
}

.list-inline-item:not(:last-child) {
  margin-right: 6px
}

.img-fluid {
  max-width: 100%;
  height: auto
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px
}

.col-md-6,
.col-xl-3,
.col-xl-4,
.col-xl-8 {
  position: relative;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px
}

@media (min-width:768px) {

  .col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }
}

@media (min-width:1200px) {
  .col-xl-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-xl-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .col-xl-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%
  }
}

.table {
  width: 100%;
  margin-bottom: 1.5rem;
  color: #6c757d
}

.table td,
.table th {
  padding: .85rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6
}

.table-hover tbody tr:hover {
  color: #6c757d;
  background-color: #f1f5f7
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch
}

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
  .badge {
    -webkit-transition: none;
    transition: none
  }
}

a.badge:focus,
a.badge:hover {
  text-decoration: none
}

.badge:empty {
  display: none
}

.badge-pill {
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem
}

.badge-primary {
  color: #fff;
  background-color: #71b6f9
}

a.badge-primary:focus,
a.badge-primary:hover {
  color: #fff;
  background-color: #409df7
}

a.badge-primary.focus,
a.badge-primary:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 .2rem rgba(113, 182, 249, .5);
  box-shadow: 0 0 0 .2rem rgba(113, 182, 249, .5)
}


.badge-success {
  color: #fff;
  background-color: #10c469
}

a.badge-success:focus,
a.badge-success:hover {
  color: #fff;
  background-color: #0c9550
}

a.badge-success.focus,
a.badge-success:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 .2rem rgba(16, 196, 105, .5);
  box-shadow: 0 0 0 .2rem rgba(16, 196, 105, .5)
}

.badge-warning {
  color: #343a40;
  background-color: #f9c851
}

a.badge-warning:focus,
a.badge-warning:hover {
  color: #343a40;
  background-color: #f7b820
}

a.badge-warning.focus,
a.badge-warning:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 .2rem rgba(249, 200, 81, .5);
  box-shadow: 0 0 0 .2rem rgba(249, 200, 81, .5)
}

.badge-danger {
  color: #fff;
  background-color: #ff5b5b
}

a.badge-danger:focus,
a.badge-danger:hover {
  color: #fff;
  background-color: #ff2828
}

a.badge-danger.focus,
a.badge-danger:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 .2rem rgba(255, 91, 91, .5);
  box-shadow: 0 0 0 .2rem rgba(255, 91, 91, .5)
}

.badge-pink {
  color: #fff;
  background-color: #ff8acc
}

a.badge-pink:focus,
a.badge-pink:hover {
  color: #343a40;
  background-color: #ff57b6
}

a.badge-pink.focus,
a.badge-pink:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 .2rem rgba(255, 138, 204, .5);
  box-shadow: 0 0 0 .2rem rgba(255, 138, 204, .5)
}

.badge-purple {
  color: #fff;
  background-color: #5b69bc
}

a.badge-purple:focus,
a.badge-purple:hover {
  color: #fff;
  background-color: #4250a2
}

a.badge-purple.focus,
a.badge-purple:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 .2rem rgba(91, 105, 188, .5);
  box-shadow: 0 0 0 .2rem rgba(91, 105, 188, .5)
}

.progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: .625rem;
  overflow: hidden;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem
}

.progress-bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #71b6f9;
  -webkit-transition: width .6s ease;
  transition: width .6s ease
}

@media (prefers-reduced-motion:reduce) {
  .progress-bar {
    -webkit-transition: none;
    transition: none
  }
}

.float-left {
  float: left !important
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0
}

.text-right {
  text-align: right !important
}

.text-center {
  text-align: center !important
}

.font-weight-normal {
  font-weight: 400 !important
}

.text-success {
  color: #10c469 !important
}

a.text-success:focus,
a.text-success:hover {
  color: #0a7d43 !important
}

.text-info {
  color: #35b8e0 !important
}

a.text-info:focus,
a.text-info:hover {
  color: #1b8bae !important
}

.text-warning {
  color: #f9c851 !important
}

a.text-warning:focus,
a.text-warning:hover {
  color: #f5b008 !important
}

.text-pink {
  color: #ff8acc !important
}

a.text-pink:focus,
a.text-pink:hover {
  color: #ff3eab !important
}

.text-muted {
  color: #98a6ad !important
}

.badge {
  color: #fff
}

.card-box-1 {
  height: 200px;
  background-color: #faf6f6;
  padding: 1.5rem;
  -webkit-box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  margin-bottom: 24px;
  border-radius: .25rem
}

.card-box-1 .card-drop {
  color: #98a6ad;
  font-size: 20px;
  display: inline-block;
  line-height: 1px
}

.card-box-2 {
  height: 350px;
  background-color: #faf6f6;
  padding: 1.5rem;
  -webkit-box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  margin-bottom: 24px;
  border-radius: .25rem
}

.card-box-2 .card-drop {
  color: #98a6ad;
  font-size: 20px;
  display: inline-block;
  line-height: 1px
}

.card-box-3 {
  height: 150px;
  background-color: #faf6f6;
  padding: 1.5rem;
  -webkit-box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  margin-bottom: 24px;
  border-radius: .25rem
}

.card-box-3 .card-drop {
  color: #98a6ad;
  font-size: 20px;
  display: inline-block;
  line-height: 1px
}

.card-box-4 {
  background-color: #faf6f6;
  padding: 1.5rem;
  -webkit-box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  box-shadow: 0 .75rem 6rem rgba(56, 65, 74, .03);
  margin-bottom: 24px;
  border-radius: .25rem
}

.card-box-4 .card-drop {
  color: #98a6ad;
  font-size: 20px;
  display: inline-block;
  line-height: 1px
}

.header-title {
  font-size: 1rem;
  margin: 0 0 7px 0
}

.progress {
  margin-top: 18px
}

.h2,
.h4,
.h5,
h2,
h4,
h5 {
  margin: 10px 0;
  font-weight: 600;
  font-family: Karla, sans-serif;
  color: #343a40
}
</style>