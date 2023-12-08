import { createWebHistory, createRouter } from 'vue-router'
import feeds from '@/pages/feeds/feeds.vue'
import Stories from '@/components/stories/Stories.vue'

const routes = [
  {
    // path: '/gitogram/dist/',
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    // path: '/gitogram/dist/stories/:initialSlide',
    path: '/stories/:initialSlide',
    name: 'stories',
    component: Stories
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
