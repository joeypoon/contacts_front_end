"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?// require('whatwg-fetch') //--> not a typo, don't store as a va

//other syff that we don't really use in our own code
// var Pace  require(../bower_components/pace/pace.js")
// require yourown libraries, too!
// var Router =require('./app.js')
// window.addEvntListener('load', app)
// function app() {
  // star app
  // new Rouer()

import Backbone from 'backbone'
import React, {Component} from 'react'
import $ from 'jquery'

var User = Backbone.Model.extend({
  defaults: {
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    state: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    github: "",
    instagram: ""
  }
})

var Users = Backbone.Collection.extend({
  model: User,
  url: '/home'
})

var u = new Users();

class App extends Component {
  constructor(...p){
    super(...p)
    this.rerender = () => this.forceUpdate()
  }
  componentDidMount(){
      u.on('sync', this.rerender)
  }
  componentDidUnmount(){
      u.off('sync', this.rerender)
  }
  render() {
    return(<div>
      <UsersView data={u} />
    </div>)
  }
}

class UsersView extends Component {
  constructor(...p){
    super(...p)
    this.rerender = () => this.forceUpdate()
  }
  componentDidMount(){
      this.props.data.on('sync', this.rerender)
  }
  componentDidUnmount(){
      this.props.data.off('sync', this.rerender)
  }
  render() {
    return (<div>
      {this.props.data.map((model) => <UserView data={model} />)}
    </div>
    )
  }
}

class UserView extends Component {
  constructor(...p){
    super(...p)
    this.rerender = () => this.forceUpdate()
  }
  componentDidMount(){
      this.props.data.on('sync', this.rerender)
  }
  componentDidUnmount(){
      this.props.data.off('sync', this.rerender)
  }
  render() {
    return (<div>
      {this.props.data.toJSON().name}
    </div>)
  }
}

var Router = Backbone.Router.extend({
  routes: {
    '*default': 'showHome'
  },

  showHome: function() {
    u.fetch()
    React.render(<App />, document.querySelector('.container'))
  },

  initialize: function(){
    Backbone.history.start()
  }
})

var r = new Router();
