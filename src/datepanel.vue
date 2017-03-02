<template>
    <div>
          <span class="title">出发日期<br><i>Set&nbsp;out&nbsp;Date</i></span>
          <input id="setOutDate" type="text" @focus="isActive=true" name="" value="2016-10-01 星期一">
          <i class="date-btn prev"></i>
          <i class="date-btn next"></i>
          <datepicker :isActive="isActive"></datepicker>
    </div>
</template>

<script>
  var Vue=require('vue');
  module.exports = {
    name:'datepanel',
    data:function(){
         return {
           isActive:false
         };
    },
    components:{datepicker:require('./datepicker.vue')}
    
  };
</script>