var reactive = require('reactive');
var domify = require('domify');

module.exports = function(key, template, createView) {
  return function(parent) {
    parent.bind(key, function(el, attr, model) {
      var container = this.el;
      this.change(function(){
        container.innerHTML = "";
        var items = this.value(attr);
        if( Array.isArray(items) === false ) return;
        items.forEach(function(item){
          var itemEl = domify(template);
          var itemView = createView ? createView(item, itemEl) : parent.view;
          reactive(itemEl, item, itemView);
          container.appendChild(itemEl);
        });
      });
    });
  };
};