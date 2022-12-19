<template>
  <div class="footer">
    <div class="footer_logo">
      <span style="margin-right: 1rem;font-size: 30px;">
        <font face="DFKai-sb"><b>亞洲大學</b></font>
      </span>
      <span style="margin-right: 1rem; ">
        <font face="DFKai-sb">精準健康研究中心</font>
      </span>
    </div>
    <div class="footer_text">
      <font face="DFKai-sb"><span>校址: 413305 台中市霧峰區柳豐路500號</span></font>
      <font face="DFKai-sb"><span>TEL: +886-4-2332-3456 | +886-4-3706-1889</span></font>
    </div>
  </div>
</template>

<style scoped>
/*尾部*/
.footer {
	width: 100%;
	height: 100px;
	/* footer的高度一定要是固定值*/
	position: absolute;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 10px;
  background-color: #038686;
	color: #ffffff;
}
.footer_logo {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 3%;
}
.footer_text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 3%;
	font-size: 16px;
}
</style>