import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import Select from '@/views/Select'
import Level from '@/views/Level'
import GameOver from '@/views/GameOver'
import Leaderboard from '@/views/Leaderboard'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: 'Calcurush'
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    },
    {
      path: '/level-:level',
      name: 'level',
      component: Level
    },
    {
      path: '/gameover',
      name: 'gameover',
      component: GameOver
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path = '/home'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
