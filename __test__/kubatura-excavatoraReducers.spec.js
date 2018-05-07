import React from 'react'


import setHeadline from '../src/reducers/headline_reducer'

describe('>>>R E D U C E R --- Test headline_reducer',()=>{
    it('+++ reducer for ADD_HEADLINE', () => {
        const state = {
		type: 'ADD_HEADLINE',
		headline: 50}
		const action = {
		type: 'ADD_HEADLINE',
		headline: 100}
        const result = setHeadline(state, action)
		expect(result)
		.toEqual({
		type: 'ADD_HEADLINE',
		headline: action.headline})
    });
    
});
//*******************************************************************************************************
