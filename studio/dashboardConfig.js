export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62d9a151ab1bd8008818dee7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5377boc2',
                  apiId: 'fc7f840e-2c59-43d5-9b20-bf5743641b06'
                },
                {
                  buildHookId: '62d9a1518d0c70009ce55a14',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7qahwzu7',
                  apiId: '1e064966-25b7-4d23-8b53-3ee11ab9aae8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/retractedhack/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7qahwzu7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
