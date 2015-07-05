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

var remote = 'https://contacts-back-end.herokuapp.com'
// var remote = 'http://localhost:3000'

var User = Backbone.Model.extend({
  defaults: {
    user: {
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
  },

  url: function() {
    return `/users/${this.id}`
  },
  urlRoot: function(){
    return `${remote}users`
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

class NewUserForm extends Component {
  constructor(...p){
    super(...p)
  }

  _create(e) {
    e.preventDefault()
    var name = React.findDOMNode(this.refs.name).value
    var email = React.findDOMNode(this.refs.email).value
    var password = React.findDOMNode(this.refs.password).value
    var password_confirmation = React.findDOMNode(this.refs.password_confirmation).value

    var model = new User({
      user: {
        name: name,
        email: email.toLowerCase(),
        password: password,
        password_confirmation: password_confirmation
      }
    })

    $.post(`${remote}users`, model.toJSON())
  }

  render() {
    return (<div>
      <form onSubmit={(e) => this._create(e)}>
        <label for="name">Name</label>
        <input type="text" ref="name" name="name" />
        <label for="email">Email</label>
        <input type="email" ref="email" name="email" />
        <label for="password">Password</label>
        <input type="password" ref="password" name="password" />
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" ref="password_confirmation" name="password_confirmation" />
        <button>Create</button>
      </form>
    </div>)
  }
}

var Router = Backbone.Router.extend({
  routes: {
    'users/new': 'newUser',
    'users/:id': 'showUser',
    '*default': 'showHome'
  },

  newUser: function() {
    React.render(<NewUserForm />, document.querySelector('.container'))
  },

  showUser: function(id) {
    var model = new User({ id: id })
    model.fetch().then(() => {
      React.render(<UserView data={model} />, document.querySelector('.container'))
    })
  },

  showHome: function() {
    u.fetch()
    React.render(<App data={u} />, document.querySelector('.container'))
  },

  initialize: function(){
    Backbone.history.start()
  }
})

var r = new Router();
