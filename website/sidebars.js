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
      items: ['mobile/overview', 'mobile/setup', 'mobile/state', 'mobile/modele'],
    },
    {
      type: 'category',
      label: 'Backend',
      items: ['backend/overview', 'backend/setup', 'backend/general'],
    },
    {
      type: 'doc',
      id: 'gitlab',
      label: 'Gitlab',
    },
    {
      type: 'category',
      label: 'Deploiement',
      items: ['deploy/ios', 'deploy/android','deploy/back'],

    },
  ],
};
