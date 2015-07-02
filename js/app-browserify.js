"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

import Backbone from 'backbone'
import React, {Component} from 'react'
import $ from 'jquery'

var User = Backbone.Model.extend({
  defaults: {
    name: '',
    email: ''
  }
})

var Users = Backbone.Collection.extend({
  model: User,
  url: '/home'
})

var u = new Users();

class App extends Component {
  render() {
    return(<div>
      <UsersView />
    </div>)
  }
}

class UsersView extends Component {
  render() {
    return (<div>
      Wut
    </div>
    )
  }
}

var Router = Backbone.Router.extend({
  routes: {
    '*default': 'showHome'
  },

  showHome: function() {
    u.fetch()
    React.render(<App />, document.querySelector('.container'))
  }
})

var r = new Router();
