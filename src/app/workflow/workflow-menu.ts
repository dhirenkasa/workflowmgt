import { NbMenuItem } from '@nebular/theme';

export const WORKFLOW_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'V1.0',
    group: true,
  },
  {
    title: 'Workflow',
    icon: 'layout-outline',
    children: [
      {
        title: 'Summary',
        link: '/workflow',
      },
      {
        title: 'Add',
        link: '/workflow/add',
      },
      
    ],
  },
];
