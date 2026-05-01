import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'ochrana-osobnich-udaju', Component: PrivacyPolicy },
      { path: 'vseobecne-podminky', Component: TermsAndConditions },
    ],
  },
]);
