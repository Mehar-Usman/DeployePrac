
import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue'
import ApiCalls from '../pages/ApiCalls.vue'
import GsapTextAnimation from "../pages/GsapTextAnimation.vue";
import TypedAnimation from "../pages/TypedAnimation.vue";
import AttractiveForm from "../pages/AttractiveForm.vue";

const routes = [
  {path:'/' , component: Home},
  {path:'/ApiCalls' , component: ApiCalls},
  {path:'/GsapTextAnimation' , component: GsapTextAnimation},
  {path:'/TypedAnimation' , component: TypedAnimation},
  {path:'/AttractiveForm' , component: AttractiveForm},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;