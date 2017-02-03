// import revendeurTransition from 'src/Modules/Revendeurs/Transitions/revendeurTransition'
// import homeTransition from 'src/Modules/Pages/Transitions/homeTransition'
// import categorieTransition from 'src/Modules/Categories/Transitions/categorieTransition'
// import productTransition from 'src/Modules/Produits/Transitions/productTransition'
// import productsTransition from 'src/Modules/Produits/Transitions/productsTransition'
// import marquesTransition from 'src/Modules/Marques/Transitions/marquesTransition'
// import marqueTransition from 'src/Modules/Marques/Transitions/marqueTransition'
// import home from 'src/Modules/Pages/Templates/home'
// import login from 'src/Modules/Auth/Templates/login'
// import mentions from 'src/Modules/Pages/Templates/mentions'
// import cgv from 'src/Modules/Pages/Templates/cgv'
// import articlesTransition from 'src/Modules/Articles/Transitions/articlesTransition'
// import articleTransition from 'src/Modules/Articles/Transitions/articleTransition'
// import searchTransition from 'src/Modules/Research/Transitions/searchTransition'
// import signup from 'src/Modules/Auth/Templates/signup'

/*
  Profil
*/
import adminRoutes from 'src/Modules/Admin/Router/routes'
// import editProfilTransition from 'src/Modules/Auth/Transitions/editProfilTransition'
// import regionTransition from 'src/components/transitions/regionTransition'
// import modalTransition from 'src/components/transitions/modalTransition'
// import modal from 'src/Modules/Modal/Router/modal'
// import authRoutes from 'src/Modules/Auth/Router/editProfil'
// import auth from 'src/auth'
// const website = resolve => require(['src/Modules/Pages/Templates/website'], resolve)
export default [
  adminRoutes['admin'],
  {
    path: '',
    // name: 'website',
    component: require('src/Modules/Pages/Templates/website'),
    children: [
      {
        path: '*',
        component: require('src/Modules/Pages/Templates/home')
      },
      {
        name: 'home',
        path: '',
        component: require('src/Modules/Pages/Templates/home')
      },
      {
        name: 'search',
        path: 'search',
        component: require('src/Modules/Research/Transitions/searchTransition')
      },
      {
        path: '',
        component: require('src/Modules/Auth/Transitions/noLoggin'),
        children: [
          {
            name: 'signup',
            path: 'signup',
            component: require('src/Modules/Auth/Templates/signup')
          },
          {
            name: 'login',
            path: 'login',
            component: require('src/Modules/Auth/Templates/login')
          }
        ]
      },
      {
        name: 'revendeurs',
        path: 'revendeurs',
        component: require('src/Modules/Revendeurs/Transitions/revendeurTransition')
      },
      {
        name: 'revshow',
        path: 'region/:slug/:id',
        component: require('src/Modules/Revendeurs/Transitions/revendeurTransition')
      },
      {
        name: 'mentions',
        path: 'mentions-legales',
        component: require('src/Modules/Pages/Templates/mentions')
      },
      {
        name: 'cgv',
        path: 'conditions-generales-de-ventes',
        component: require('src/Modules/Pages/Templates/cgv')
      },
      {
        name: 'produits',
        path: 'produits',
        component: require('src/Modules/Produits/Transitions/productsTransition')
      },
      {
        name: 'produitshow',
        path: 'produit/:slug/:id',
        component: require('src/Modules/Produits/Transitions/productTransition')
      },
      {
        name: 'categorieshow',
        path: 'categorie/:slug/:id',
        component: require('src/Modules/Categories/Transitions/categorieTransition')
      },
      {
        name: 'marques',
        path: 'marques',
        component: require('src/Modules/Marques/Transitions/marquesTransition')
      },
      {
        name: 'marque',
        path: 'marque/:slug/:id',
        component: require('src/Modules/Marques/Transitions/marqueTransition')
      },
      {
        name: 'articles',
        path: 'articles',
        component: require('src/Modules/Articles/Transitions/articlesTransition')
      },
      {
        name: 'article',
        path: 'article/:slug/:id',
        component: require('src/Modules/Articles/Transitions/articleTransition')
      },
      {
        path: 'rev',
        component: require('src/Modules/Auth/Templates/revendeur'),
        children: [
          {
            name: 'editAll',
            path: 'edits',
            component: require('src/Modules/Auth/Transitions/editsTransition')
          },
          {
            name: 'edit',
            path: 'edit',
            component: require('src/Modules/Auth/Transitions/editTransition'),
            children: [
              {
                name: 'editSociety',
                path: 'company',
                component: require('src/Modules/Auth/Templates/editSociety')
              },
              {
                name: 'editPhoto',
                path: 'photo',
                component: require('src/Modules/Auth/Templates/editPhoto')
              },
              {
                name: 'editProfil',
                path: 'profil',
                component: require('src/Modules/Auth/Templates/editProfil')
              },
              {
                name: 'editUser',
                path: 'user',
                component: require('src/Modules/Auth/Templates/editUser')
              }
            ]
          }
        ]
      }
    ]
  }
]

