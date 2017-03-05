<template>
  <div>
    <span class="title">{{title}}<br><i>{{desc}}</i></span>
    <input id="setOutDate" @focus="isActive=true" type="text" name="" :value="selected">
    <i class="date-btn prev"></i>
    <i class="date-btn next"></i>
    <datepicker :isActive="isActive" @date="selectDate"></datepicker>
  </div>
</template>
<script>
var datepicker = require('./datepicker.vue');
module.exports = {
  name: 'datepanel',
  props: ['title', 'desc'],
  methods: {
    selectDate: function (date) {
      console.log('在父组件接受的值' + date);
      this.selected = date;
      this.isActive = false;
    }
  },
  data: function () {
    return {
      isActive: false,
      selected: ''
    };
  },
  components: {
    datepicker: datepicker
  }
};
</script>
