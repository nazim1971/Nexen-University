import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';

const router = Router();

const moduleRoutes = [
  { path: '/user', route: UserRoutes },
  { path: '/student', route: StudentRoutes },
];


moduleRoutes.forEach((route)=> router.use(route.path, route.route))

export default router;
