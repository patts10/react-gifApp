import { GifExpertApp } from "../GifExpertApp"
import  { shallow } from 'enzyme'


describe('tests on <GifExpertApp />', () => { 
  
  test('should return component correctly', () => { 
    
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
   })

   test('should show a category list', () => { 
     
    const categories = ['squartle', 'pokemon' ];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
 })