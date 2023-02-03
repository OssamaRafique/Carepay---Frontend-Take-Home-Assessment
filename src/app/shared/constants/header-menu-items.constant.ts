import { IHeaderMenuItem } from '../models';

/**
 * Stores all header menu items to be rendered in the layout component
 * @constant
 */
export const HeaderMenuItems: IHeaderMenuItem[] = [
  {
    name: 'Home',
    path: '',
  },
  {
    name: '404 Not Found',
    path: 'broken-page',
  },
];
