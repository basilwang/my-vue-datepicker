<template>

     

   <div id="calendar" class="calendar-wrap"  :style="styleSheets" :class="{open:isActive}">
  		<!-- 按钮 -->
  		<i id="prev" @click="prevFn()" class="prev"></i>
  		<i id="next" @click="nextFn()" class="next"></i>
  		<!-- 日历主体 -->
  		<div class="calendar-box">
  			<div class="calendar">
  				<!-- 表头 -->
  				<div class="date-title" v-text="title"></div>
  				<!-- 表体 -->
  				<table>
  					<!-- 星期指示 -->
  					<thead>
  						<tr>
  							<th v-for = "item in weekList"><span>{{item}}</span></th>
  						</tr>
  					</thead>
  					<tbody>
  						<tr v-for = "list in daysList">
  							<td v-for = "item in list" @click="selectDate(item)"><span v-if="item != '' ">{{item}}</span></td>
  						</tr>
  					</tbody>
  				</table>
  			</div>
		  </div>
	</div> 
    
</template>

<script>
  var Vue=require('vue');
  module.exports = {
    name:'datepicker',
    data: function () {
      var today=new Date();
      return {
         isActive:false,
         year:today.getFullYear(),
         month:today.getMonth(),
         date:today.getDate(),
         selected:'',
         weekList:['日', '一', '二', '三','四','五','六'],
         monthList:[]

      };
    },
    mounted:function(){
         this.styleSheets={
         	top: this.$parent.offsetTop + 50 + 'px',
         	left: '20px'
         };
    },
    methods: {
        //点击prev按钮
  		prevFn:function(){
          this.month = this.month == 0? 11 : this.month - 1;
          
          if(this.month == 11){
            this.year = this.year - 1
          }
  		},
  		//点击next按钮
  		nextFn:function(){

  		  this.month = this.month == 11? 0 : this.month + 1;
  				
  		  if(this.month == 0){
  			this.year = this.year + 1
  		  }
  		},
    }
  };
</script>