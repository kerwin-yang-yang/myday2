import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  // 配置路由
  routes: [
    {
      path: '/',
      redirect: '/login',

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      // 路由懒加载
      component: () => import('../view/Home.vue'),
      redirect: '/home/student',
      children: [
        {
          name: 'student',
          path: '/home/student',
          component: () => import('../view/Student.vue'),

        },
        {
          name: 'class',
          path: '/home/class',
          component: () => import('../view/Classname.vue'),

        },
        {
          name: 'studentData',
          path: '/home/studentData',
          component: () => import('../view/StudentData.vue'), // 动态加载页面数据的页面数据模型。不需要在你的页面中引用此页面
        },
        {
          name: 'email',
          path: '/home/email',
          component: () => import('../view/Email.vue'), // 动态加载页面数据的页面数据模型。不需要在你的页面中引用此页面
        },
        {
          name: 'emailContent',
          path: '/home/emailContent',
          component: () => import('../view/EmailContent.vue'), // 动态加载页面数据的页面数据模型。不需要在你的页面中引用此页面
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 第一种通过路径去判断
  // 第二种通过路由元信息去判断
  console.log(to)
  if (!to.meta.isLogin) {
    next()
  } else {
    //进入else则代表要进的页面需要登录 所以我应该去判断是否登录
    if (sessionStorage.getItem('user')) {
      next()
    } else {
      alert('请先登录')
      next('/login')
    }
  }
})
export default router