import express, {Router} from 'express';
import path from 'path';
import deploy from './pages/deploy/deployRouter';
import login from './pages/login/loginRouter';

const router = Router();
export default router;

router.use('/deploy', deploy);

router.use('/login', login);

router.use(express.static(path.join(__dirname, 'public'), {
  etag: false,
  lastModified: false,
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0
}));
