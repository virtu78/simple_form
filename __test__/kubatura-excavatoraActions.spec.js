
import * as actions from '../src/Actions/headlineActions'
describe('>>>A C T I O N ---Test addHeadline',()=>{
    it('ADD_HEADLINE success', () => {
    	const headline = 50
		const add = {type:"ADD_HEADLINE",
		headline}
		expect(actions.addHeadline(headline)).toEqual(add)
		
    });
        

});
//*******************************************************************************************************
