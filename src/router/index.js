import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '@/views/Home'
import Search from '@/views/Search'
import Register from '@/views/Register'
import Login from '@/views/Login'

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location,resolved,rejected){
  if(resolved === undefined && rejected === undefined){
    //如果没有写回调则在这里对错误进行处理，这里不能直接调用originPush函数,因为this指向window
    return originPush.call(this,location).catch(()=>{})
  }else{
    return originPush.call(this,resolved,rejected)
  }
}
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location,resolved,rejected){
  if(resolved === undefined && rejected === undefined){
    //如果没有写回调则在这里对错误进行处理，这里不能直接调用originPush函数,因为this指向window
    return originReplace.call(this,location).catch(()=>{})
  }else{
    return originReplace.call(this,resolved,rejected)
  }
}
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search/:keywords',
            name:'search',
            component:Search,
            props(route){
                return {
                    keywords:route.params.keywords,
                    keywords1:route.query.keywords1.toUpperCase()
                }
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})