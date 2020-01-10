import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import SetList from './pages/setlistStuff/SetList'
import Trey from './pages/Trey.js'
import Page from './pages/Page.js'
import Mike from './pages/Mike.js'
import Fishman from './pages/Fishman.js'
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch} from 'react-router-dom'



function App(){
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/SetList" component={SetList}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Trey" component={Trey}/>
                <Route exact path="/Page" component={Page}/>
                <Route exact path="/Mike" component={Mike}/>
                <Route exact path="/Fishman" component={Fishman}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
