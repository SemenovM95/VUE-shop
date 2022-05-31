const clickOutside = {
  bind(el, binding, vnode) {
    function onClick(event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    }
    Object.defineProperty(el, 'clickOutsideEvent', { value: onClick });
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};

export default clickOutside;
