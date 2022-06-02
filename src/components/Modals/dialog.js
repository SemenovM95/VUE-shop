import Vue from 'vue';
import DialogWrapper from 'components/UI/Dialog.vue';

export default function openDialog(component, props) {
  return new Promise((resolve) => {
    const Wrapper = Vue.extend(DialogWrapper);
    const dialog = new Wrapper({
      propsData: {
        component,
        props,
      },
    }).$mount();
    const app = document.getElementById('app');
    app.appendChild(dialog.$el);

    dialog.$on('close', (value) => {
      dialog.$destroy();
      dialog.$el.remove();
      resolve(value);
    });
  });
}
