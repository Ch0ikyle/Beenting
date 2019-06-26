<template>
    <div class = "Beeting">
        <div id = "title">
            <h1 id = "blacktxt">Beentin<span id = "green_text">g</span></h1>
        </div>
        <div id = "radio_box">
          <input type="radio" id="student" v-model="picked" v-bind:value = "std">
          <label for="student"> 학생</label>
          <br>
          <input type="radio" id="teacher" v-model="picked" v-bind:value = "tch">
          <label for="teacher"> 교사</label>
          <br>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Beeting',
  props: {
    msg: String
  }
}
</script>
<style>
#green_text{
    color: #27d000;
}
h1{
    font-size: 55px;
    text-align: center;
}
#radio_box input{
  width:20px;
  height: 20px;
  border: 2px solid black;

}
#radio_box{
  text-align: center;
}
#radio_box{
  font-size: 22px;
  font-weight: bolder;
}
</style>
