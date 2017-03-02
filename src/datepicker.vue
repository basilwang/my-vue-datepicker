<template>

     

   <div id="calendar" class="calendar-wrap"  :style="styleSheets" :class="{open:isDatePickerActive}">
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
    props:['isActive'],
    data: function () {
      var today=new Date();
      return {
         year:today.getFullYear(),
         month:today.getMonth(),
         date:today.getDate(),
         selected:'',
         weekList:['日', '一', '二', '三','四','五','六']

      };
    },
    computed:{
    	isDatePickerActive:function(){
    		return this.isActive
    	},
    	//只做日历数组
  			daysList:function() {
  				//返回每个月的日长
  				var currentMonthLength = new Date(this.year, this.month + 1, 0).getDate(),
  					dateObj = [],
  					dateList = [];

  				//确定当月的第一天是星期几
        		var startDay = new Date(this.year, this.month, 1).getDay();
  				//先将当月日期塞入数组中
  				for (var i = 0; i < currentMonthLength; i++) {
  					dateObj[i] = i+1
  				}
        		
      		//补全剩余位置
      		for (var j = 0; j <= 35; j++) {
      			if(j < startDay){
      				dateObj = [''].concat(dateObj)
      			}
      			if(j > startDay + currentMonthLength){
      				dateObj = dateObj.concat('')
      			}
      		}

      		//以7天为一组从新组合一个二维日期数组
            var timeStep = Math.ceil(dateObj.length / 7);
            for(var i = 0; i < timeStep; i++){
                var stepArr = [];
                var stepRank = dateObj.length < 7 ? dateObj.length : 7;
                
                stepArr = dateObj.splice(0, stepRank);
                
                dateList.push(stepArr);
            }
            console.log(dateList)
        		return dateList
  			},
  			//表头语言控制
        title:function(){

            var month = {1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六',7: '七', 8: '八', 9: '九', 10: '十', 11: '十一', 12: '十二'}[this.month+1]
             return this.year + '年' + month + '月';
                 
          }
    },
    // mounted:function(){
    //      this.styleSheets={
    //      	top: this.$parent.$el.offsetTop + 50 + 'px',
    //      	left: '20px'
    //      };
    // },
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