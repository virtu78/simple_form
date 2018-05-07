const InitialState = {
			headline: 0,
		
	}


export default function setHeadline(state = InitialState, action) {
	switch(action.type) {
		
		case 'ADD_HEADLINE':
			
		return	{...state,	headline:	action.headline}
		
		
		default: return state;
	}
}
