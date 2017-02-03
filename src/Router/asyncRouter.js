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

// import editProfilTransition from 'src/Modules/Auth/Transitions/editProfilTransition'
// import regionTransition from 'src/components/transitions/regionTransition'
// import modalTransition from 'src/components/transitions/modalTransition'
// import modal from 'src/Modules/Modal/Router/modal'
// import authRoutes from 'src/Modules/Auth/Router/editProfil'
// import auth from 'src/auth'
const website = resolve => require(['src/Modules/Pages/Templates/website'], resolve)
const home = resolve => require(['src/Modules/Pages/Templates/home'], resolve)
const search = resolve => require(['src/Modules/Research/Transitions/searchTransition'], resolve)
const signup = resolve => require(['src/Modules/Auth/Templates/signup'], resolve)
const login = resolve => require(['src/Modules/Auth/Templates/login'], resolve)
const revendeurTransition = resolve => require(['src/Modules/Revendeurs/Transitions/revendeurTransition'], resolve)
const mentions = resolve => require(['src/Modules/Pages/Templates/mentions'], resolve)
const cgv = resolve => require(['src/Modules/Pages/Templates/cgv'], resolve)
const productsTransition = resolve => require(['src/Modules/Produits/Transitions/productsTransition'], resolve)
const productTransition = resolve => require(['src/Modules/Produits/Transitions/productTransition'], resolve)
const categorieTransition = resolve => require(['src/Modules/Categories/Transitions/categorieTransition'], resolve)
const marquesTransition = resolve => require(['src/Modules/Marques/Transitions/marquesTransition'], resolve)
const marqueTransition = resolve => require(['src/Modules/Marques/Transitions/marqueTransition'], resolve)
const articlesTransition = resolve => require(['src/Modules/Articles/Transitions/articlesTransition'], resolve)
const articleTransition = resolve => require(['src/Modules/Articles/Transitions/articleTransition'], resolve)
const rev = resolve => require(['src/Modules/Auth/Templates/revendeur'], resolve)
const editAll = resolve => require(['src/Modules/Auth/Transitions/editsTransition'], resolve)
const edit = resolve => require(['src/Modules/Auth/Transitions/editTransition'], resolve)
const editSociety = resolve => require(['src/Modules/Auth/Templates/editSociety'], resolve)
const editPhoto = resolve => require(['src/Modules/Auth/Templates/editPhoto'], resolve)
const editProfil = resolve => require(['src/Modules/Auth/Templates/editProfil'], resolve)
const editUser = resolve => require(['src/Modules/Auth/Templates/editUser'], resolve)
const admin = resolve => require(['src/Modules/Auth/Templates/admin'], resolve)
const adminHome = resolve => require(['src/Modules/Pages/Admin/home'], resolve)

export default [
  {
    path: '',
    // name: 'website',
    component: website,
    children: [
      {
        name: 'home',
        path: '',
        component: home
      },
      {
        name: 'search',
        path: 'search',
        component: search
      },
      {
        name: 'signup',
        path: 'signup',
        component: signup
      },
      {
        name: 'login',
        path: 'login',
        component: login
      },
      {
        name: 'revendeurs',
        path: 'revendeurs',
        component: revendeurTransition
      },
      {
        name: 'revshow',
        path: 'region/:id',
        component: revendeurTransition
      },
      {
        name: 'mentions',
        path: 'mentions-legales',
        component: mentions
      },
      {
        name: 'cgv',
        path: 'conditions-generales-de-ventes',
        component: cgv
      },
      {
        name: 'produits',
        path: 'produits',
        component: productsTransition
      },
      {
        name: 'produitshow',
        path: 'produit/:slug/:id',
        component: productTransition
      },
      {
        name: 'categorieshow',
        path: 'categorie/:slug/:id',
        component: categorieTransition
      },
      {
        name: 'marques',
        path: 'marques',
        component: marquesTransition
      },
      {
        name: 'marque',
        path: 'marque/:slug/:id',
        component: marqueTransition
      },
      {
        name: 'articles',
        path: 'articles',
        component: articlesTransition
      },
      {
        name: 'article',
        path: 'article/:slug/:id',
        component: articleTransition
      },
      {
        path: 'rev',
        component: rev,
        children: [
          {
            name: 'editAll',
            path: 'edits',
            component: editAll
          },
          {
            name: 'edit',
            path: 'edit',
            component: edit,
            children: [
              {
                name: 'editSociety',
                path: 'company',
                component: editSociety
              },
              {
                name: 'editPhoto',
                path: 'photo',
                component: editPhoto
              },
              {
                name: 'editProfil',
                path: 'profil',
                component: editProfil
              },
              {
                name: 'editUser',
                path: 'user',
                component: editUser
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    component: admin,
    children: [
      {
        name: 'homeAdmin',
        path: '',
        component: adminHome
      }
    ]
  }
]

  // },
  // '/': {
  //   name: 'home',
  //   component: homeTransition,
  //   children: {
  //     '/popup': modal['/popup'],
  //     '': {
  //       name: 'acceuil',
  //       component: home,
  //       children: modal
  //     },
  //     '/signup': {
  //       name: 'signup',
  //       component: signup,
  //       children: modal
  //     },
  //     '/search': {
  //       name: 'search',
  //       component: searchTransition
  //     },
  //     'login': {
  //       name: 'login',
  //       component: login
  //     },
  //     '/revendeurs': {
  //       name: 'revendeurs',
  //       component: revendeurTransition,
  //       children: modal
  //     },
  //     '/region/:slug/:id': {
  //       name: 'revshow',
  //       component: revendeurTransition,
  //       children: modal
  //     },
  //     '/mentions-legales': {
  //       name: 'mentions',
  //       component: mentions,
  //       children: modal
  //     },
  //     '/conditions-generales-de-ventes': {
  //       name: 'cgv',
  //       component: cgv,
  //       children: modal
  //     },
  //     '/produits': {
  //       name: 'produits',
  //       component: productsTransition,
  //       children: modal
  //     },
  //     'produit/:slug/:id': {
  //       name: 'produitshow',
  //       component: productTransition,
  //       children: modal
  //     },
  //     'categorie/:slug/:id': {
  //       name: 'categorieshow',
  //       type: 'category',
  //       component: categorieTransition,
  //       children: modal
  //     },
  //     '/marques': {
  //       name: 'marques',
  //       component: marquesTransition,
  //       children: modal,
  //       auth: ['admin']
  //     },
  //     'marque/:slug/:id': {
  //       name: 'marque',
  //       type: 'marque',
  //       component: marqueTransition,
  //       children: modal
  //     },
  //     '/articles': {
  //       name: 'articles',
  //       component: articlesTransition,
  //       children: modal
  //     },
  //     '/article/:slug/:id': {
  //       name: 'article',
  //       component: articleTransition,
  //       children: modal
  //     },
  //     '/edit': authRoutes['/edit']
  //   }
  // }

// export default routes
