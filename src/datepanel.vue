<template>
  <div>
    <span class="title">{{title}}<br><i>{{desc}}</i></span>
    <input id="setOutDate" @focus="isActive=true" v-clickoutside="handleClose" type="text" name="" :value="selected">
    <i class="date-btn prev"></i>
    <i class="date-btn next"></i>
    <datepicker :isActive="isActive" ref="reference" @date="selectDate"></datepicker>
  </div>
</template>
<script>
var datepicker = require('./datepicker.vue');
var Clickoutside = require('./utils/clickoutside.js');
module.exports = {
  name: 'datepanel',
  props: ['title', 'desc'],
  methods: {
    selectDate: function (date) {
      console.log('在父组件接受的值' + date);
      this.selected = date;
      this.isActive = false;
    },
    handleClose: function () {
      this.isActive = false;
    },
  },
  data: function () {
    return {
      isActive: false,
      popperElm: null,
      selected: ''
    };
  },
  directives: {
    Clickoutside: Clickoutside
  },
  mounted: function () {
    this.popperElm = this.$refs.reference.$el;
  },
  components: {
    datepicker: datepicker
  }
};
</script>
