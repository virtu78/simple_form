
//*******************************************************************************************************
import { ValidationInput } from '../src/Components/validationInput';
import { shallow } from 'enzyme'
// и напишем наш тест для компонента

//*********************************
describe('>>>H O M E --- Shallow Render ValidationInput',()=>{
    let wrapper
     const headline = 50

    beforeEach(()=>{
        wrapper = shallow(<ValidationInput headline={headline}/>)
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
      
    it('+++ contains headline', () => {
        expect(wrapper.find('input').prop('value')).toEqual(headline)
    });
    
});