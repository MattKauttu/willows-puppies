import { createRouter, createWebHistory } from 'vue-router';
import PuppiesPage from './components/PuppiesPage.vue';
import PuppyDetailPage from './components/PuppyDetailPage.vue';

const router = createRouter({
  history: createWebHistory('/willows-puppies/'),
  routes: [
    {
      path: '/',
      name: 'PuppiesPage',
      component: PuppiesPage
    },
    {
      path: '/puppy/:puppyName',
      name: 'PuppyDetailPage',
      component: PuppyDetailPage,
      props: true
    }
  ],
});

router.afterEach((to) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-B1WY1BR3FG', {
      page_path: to.fullPath,
      page_title: to.name
    })
  }
})

export default router;
