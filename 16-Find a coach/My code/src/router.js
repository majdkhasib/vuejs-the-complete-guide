import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList';
import CoachDetails from './pages/coaches/CoachDetails';
import CoachRegisteration from './pages/coaches/CoachRegisteration';
import ContactCoach from './pages/requests/ContactCoach';
import RequestsRecieved from './pages/requests/RequestsRecieved';
import NotFound from './pages/NotFound';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegisteration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
