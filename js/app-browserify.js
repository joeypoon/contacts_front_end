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

var remote = 'http://water-bear-contacts.herokuapp.com'

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
  },
  url: function() {
    return `/users/${this.id}`
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
      <UsersView data={this.props.data} />
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
      {this.props.data.map((model) => <a href={`#users/${model.id}`}><UserView data={model} /></a>)}
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
    'users/:id': 'showUser',
    '*default': 'showHome'
  },

  showHome: function() {
    u.fetch()
    React.render(<App data={u} />, document.querySelector('.container'))
  },

  showUser: function(id) {
    var model = new User({ id: id })
    model.fetch().then(() => {
      React.render(<UserView data={model} />, document.querySelector('.container'))
    })
  },

  initialize: function(){
    Backbone.history.start()
  }
})

var r = new Router();
