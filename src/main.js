var Vue = require('vue');
var citypicker = require('./citypicker.vue');
var datepanel = require('./datepanel.vue');
var helloworld = require('./helloworld.vue');

var app = new Vue({
  el: '#app',
  components: { citypicker: citypicker, helloworld: helloworld, datepanel: datepanel }
});
// alert(app.message);
// alert(citypicker.fromCity);

// alert('hello world');
