import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
  // tout doit être placé dans le BrowserRouter
  // le switch permet de changer de route dynamiquement
  // la route est le chemin du component ainsi que le component à générer
  // si on connait exactement le chemin on met " exact path"
  // si on est pas sur on met juste path, :pseudo est la variable qu'on cherche
  // si on veut faire une page de 404 not found, 
  // -> il suffit de ne pas mentioner de path et de donner le component à renvoyer dans ce cas
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/pseudo/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
