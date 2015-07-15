let React = require('react-native')
var {AsyncStorage, Text, View, TextInput} = React

/**
 * @example
 * var person = prop({name: 'Matt'})
 * person() --> {name: 'Matt'}
 * prop({name: 'Paul'}) --> {name: 'Paul'}
 * prop() --> {name: 'Paul'}
 */

// function clone(val){
// 	if(typeof val === 'undefined') return val
// 	return JSON.parse(JSON.stringify(val))
// }

function prop(key, initialData){
	if(typeof val !== "undefined"){
		AsyncStorage.set(key, initialData)	
	}
	return function(val){
		//If no argument is passed, set a new key-value in storage. If a valid argument is passed, get the key-value pair.
		if(typeof val !== "undefined") {
			// every value in val must be a string
			return AsyncStorage.setItem(key, JSON.stringify(val))
		}
		return AsyncStorage.getItem(key).then((data) => JSON.parse(data))
	}
}

const REMOTE = 'https://contacts-back-end.herokuapp.com'

function fetch_login(email, password) {
    return fetch(`${REMOTE}/login.json`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                email: email,
                password: password
            }
        })
    }).then((response) => {
        if (response.status > 400) throw 'That email/password combination does not exist. Try again!'
        return response.json()
    })
}

function login(email, password){
	return fetch_login(email, password).then((data) => {
		state.user(data)
		return data
	})
}

function fetch_register(name, email, password, password_confirmation){
	return fetch(`${REMOTE}/users.json`, {
		method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
		body: JSON.stringify({
	  		user: {
	    		password: password,
	    		password_confirmation: password_confirmation,
				email: email,
				name: name
			}
        })
    }).then((response) => {
    	if (response.status > 400) throw 'Sign up failed. Please enter valid parameters.'
        	return response.json() 
    })
}

function register(name, email, password, password_confirmation){
	return fetch_register(name, email, password, password_confirmation).then((data) => {
		state.user(data)
		return data
	})
}

// function x(...args){
// 	args// []
// }

function fetch_profile(){
	return state.user()
		.then((user) => user.id)
		.then((user_id) => {
			return fetch(`${REMOTE}/profile/${user_id}.json`).then((r) => r.json()).then((personalInfo) => {
				state.user_profile(personalInfo)
				return personalInfo
			})
		})
		.catch((...a) => console.log(...a))
}

function profile(){
	return fetch_profile()
}

function fetch_proximityList(data_source){
    return state.user()
    	.then((data) => data.id)
      	.then((user_id) => {
        	return fetch(`${REMOTE}/users/-58.000001/-68.000002/${user_id}`)
		    .then((response) => response.json())
		    .then((responseData) => {
		    	console.log(responseData)
             	return {
	             	dataSource: data_source.cloneWithRows(responseData),
	              	loaded: true
	             }
        	})
    	})
    	.catch((...a) => console.log(...a))
}

function proximityList(data_source){
	return fetch_proximityList(data_source)
}

const state = {
	user: prop('user'),
	user_profile: prop('user_profile'),
	login: login,
	register: register,
	profile: profile,
	proximityList: proximityList

}


module.exports = state