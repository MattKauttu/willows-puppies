import { createRouter, createWebHistory } from 'vue-router';
import PuppiesPage from './components/PuppiesPage.vue';
import PuppyDetailPage from './components/PuppyDetailPage.vue';

const routes = [
  { path: '/', component: PuppiesPage },
  { path: '/puppy/:id', component: PuppyDetailPage, props: true },
];

const router = createRouter({
  history: createWebHistory('/willows-puppies/'),
  routes: [
    {
      path: '/',
      name: 'PuppiesPage',
      component: PuppiesPage
    },
    {
      path: '/puppy/:id',
      name: 'PuppyDetailPage',
      component: PuppyDetailPage
    }
  ],
});

export default router;
