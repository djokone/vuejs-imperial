
export default {
  admin: {
    path: '/admin',
    components: {
      default: require('src/Modules/Admin/Templates/admin')
    },
    children: [
      {
        name: 'admin',
        path: 'dash',
        component: require('src/Modules/Pages/Admin/home')
      },
      {
        name: 'produit',
        path: 'produit',
        components: {
          default: require('src/Modules/Produits/Admin/produit'),
          options: require('src/Modules/Admin/Templates/produitOptions')
        },
        children: [
          {
            name: 'produitIndex',
            path: 'index',
            component: require('src/Modules/Produits/Admin/produitIndex')
          },
          {
            name: 'produitAdd',
            path: 'add',
            component: require('src/Modules/Produits/Admin/produitEdit')
          },
          {
            name: 'produitEdit',
            path: 'edit/:id',
            component: require('src/Modules/Produits/Admin/produitEdit')
          },
          {
            name: 'categorieIndex',
            path: 'categorie',
            component: require('src/Modules/Produits/Admin/categorieIndex')
          },
          {
            name: 'categorieAdd',
            path: 'categorie/add',
            component: require('src/Modules/Produits/Admin/categorieEdit')
          },
          {
            name: 'categorieEdit',
            path: 'categorie/edit/:id',
            component: require('src/Modules/Produits/Admin/categorieEdit')
          }
        ]
      }
    ]
  }
}

