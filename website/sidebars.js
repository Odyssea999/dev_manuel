module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'team',
      label: 'Equipe',
    },
    {
      type: 'category',
      label: 'Mobile',
      items: ['mobile/overview', 'mobile/setup', 'mobile/state', 'mobile/modele','mobile/internationalisation','mobile/theme'],
    },
    {
      type: 'category',
      label: 'Backend',
      items: ['backend/overview', 'backend/setup', 'backend/general'],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: ['frontend/overview', 'frontend/setup', 'frontend/general'],
    },
    {
      type: 'doc',
      id: 'github',
      label: 'Github',
    },
    {
      type: 'category',
      label: 'Deploiement',
      items: ['deploy/ios', 'deploy/android','deploy/back'],

    },
  ],
};
