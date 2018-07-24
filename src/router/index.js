import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstInJapanPost from '@/blogs/FirstInJapanPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blogs/first-in-japan',
      component: FirstInJapanPost
    }
  ]
})
