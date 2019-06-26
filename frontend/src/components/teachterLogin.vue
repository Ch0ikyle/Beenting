<template>
  <div class="hello">
    <div id = "text_box">
      <label for = "id">아이디</label><br>
      <input type="text" id ="id" name = "id"/><br>
      <label for = "pw">비밀번호</label><br>
      <input type="password" id ="pw" name = "pw"/><br>
      <label for = "pwcheck">비밀번호 확인</label><br>
      <input type="password" id ="pwcheck" name = "pwcheck"/><br>
    </div>
    <div id = "yes_no">
      <p>
        <span id = "no">
          취소
        </span>
        <span id = "yes">
          확인
        </span>
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'studentLogin',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#text_box{
  margin-top:5%;
  margin-left: 35%;
}
#text_box input{
  width: 580px;
  height: 40px;
  border: 5px solid black;
  margin-bottom: 30px;
}
label, #yes_no{
  font-size: 22px;
  font-weight: bolder;
}
label{
  text-align: left;
}
#yes_no{
  text-align: center;
  word-spacing : 100px;
}
</style>
