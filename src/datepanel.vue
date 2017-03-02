<template>
   <div class="date">
        <div class="set-out-date">
          <span class="title">出发日期<br><i>Set&nbsp;out&nbsp;Date</i></span>
          <input id="setOutDate" type="text" @focus="isActive=true" name="" value="2016-10-01 星期一">
          <i class="date-btn prev"></i>
          <i class="date-btn next"></i>
          <datepicker></datepicker>
        </div>
        <div class="return-date disabled">
          <span class="title">返程日期<br><i>Return&nbsp;Date</i></span>
          <input id="returnDate" type="text" name="" value="2016-10-03 星期三">
          <datepicker></datepicker>
        </div>
   </div>

</template>

<script>
  var Vue=require('vue');
  module.exports = {
    name:'datepanel',
    components:{datepicker:require('./datepicker.vue')}
    
  };
</script>