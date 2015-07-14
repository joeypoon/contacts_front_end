let React = require('react-native')
var {AsyncStorage, Text, View, TextInput} = React

/**
 * @example
 * var person = prop({name: 'Matt'})
 * person() --> {name: 'Matt'}
 * prop({name: 'Paul'}) --> {name: 'Paul'}
 * prop() --> {name: 'Paul'}
 */

function clone(val){
	if(typeof val === 'undefined') return val
	return JSON.parse(JSON.stringify(val))
}

function prop(name, initialData){
	if(typeof val !== "undefined"){
		AsyncStorage.set(name, initialData)	
	}
	return function(val){
		if(typeof val !== "undefined") {
			// every value in val must be a string
			return AsyncStorage.setItem(name, JSON.stringify(val))
		}
		return AsyncStorage.getItem(name).then((data) => JSON.parse(data))
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

const state = {
	user: prop('user'),
	login
}


module.exports = state