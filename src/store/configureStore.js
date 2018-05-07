import	{	createStore, combineReducers, applyMiddleware	}	from	'redux'
import	headline_reducer	from	'../reducers'

const logger = store => next => action => {
let result
console.groupCollapsed('dispatching', action.type)
console.log('prev state', store.getState())
console.log('action', action)
result = next(action)
console.log('next state', store.getState())

console.groupEnd()
return result
}
const saver = store => next => action => {
	let result = next(action)
localStorage['redux-store'] = JSON.stringify(store.getState())
return result
}
	const	storyFactory = (initialState)	=>
applyMiddleware(logger, saver)(createStore)(
	combineReducers({headline_reducer}),
	(localStorage['redux-store']) ?
	JSON.parse(localStorage['redux-store']):
	initialState
	)
	export	default storyFactory
