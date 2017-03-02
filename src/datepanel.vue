<template>
    <div>
          <span class="title">出发日期<br><i>Set&nbsp;out&nbsp;Date</i></span>
          <input id="setOutDate" type="text" @focus="isActive=true" v-clickoutside="handleClose"  name="" value="2016-10-01 星期一">
          <i class="date-btn prev"></i>
          <i class="date-btn next"></i>
          <datepicker :isActive="isActive" ref="reference" ></datepicker>
    </div>
</template>

<script>
  var Vue=require('vue');
  var Clickoutside=require('./utils/clickoutside.js');
  module.exports = {
    name:'datepanel',
    data:function(){
         return {
           isActive:false,
           popperElm:null
         };
    },
    mounted:function(){
         this.popperElm=this.$refs.reference.$el;
    },
    components:{datepicker:require('./datepicker.vue')},
    directives:{Clickoutside},
    methods:{
    	handleClose:function(){
    		this.isActive=false;
    	}
    }

    
  };
</script>