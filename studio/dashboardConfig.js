export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f6901e74d87770e493c7b6f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4ehx9iqd',
                  apiId: '861a0e8f-f5c1-4c16-aebe-7716bc60fceb'
                },
                {
                  buildHookId: '5f6901e757777e0fedee7829',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-m23sxxat',
                  apiId: '6ddb600a-9bb0-40d9-8895-b6125c572c19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pmalak/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-m23sxxat.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
