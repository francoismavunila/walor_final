import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/disburse',
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/withdraw',
    disabled:true,
  
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/next',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
