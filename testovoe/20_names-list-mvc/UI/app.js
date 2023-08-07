const routes = [
  { path: '/home-component-name-example', component: home },
  { path: '/home-component-name-example', component: example },
];

const router = new VueRouter({
  //не читается!
  routes,
});

const app = new Vue({
  router,
});

app.$mount('#app');
