var Vue=require('vue');
var on=require('./dom.js').on;

var nodeList = [];
var ctx = '@@clickoutsideContext';

on(document, 'click', function(e){
  nodeList.forEach(function(node){ return node[ctx].documentHandler(e)});
});
/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
module.exports= {
  bind:function(el, binding, vnode) {
    var id = nodeList.push(el) - 1;
    var documentHandler = function(e) {
      if (!vnode.context ||
        el.contains(e.target) ||
        (vnode.context.popperElm &&
        vnode.context.popperElm.contains(e.target))) return;

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
    el[ctx] = {
      id:id,
      documentHandler:documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update:function(el, binding) {
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind:function(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
  }
};
