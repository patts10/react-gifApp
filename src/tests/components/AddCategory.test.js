
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";



describe('Tests on <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  
  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })
  
  test('should show it correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  // test('should change input text', () => {
    
  //   const value = 'patts';
  //   const input = wrapper.find('input');

  //   input.simulate('change', { target: { value } });
  // });
  
  test('should not post information when submit', () => {
    
    wrapper.find('form').simulate('submit',{ preventDefault(){} });
    
    expect( setCategories ).not.toHaveBeenCalled();

  });

  test('should call setCategories and clean input text', () => {
    
    const value = 'hello world'
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));

    const inputValue = wrapper.find('input');
    expect(inputValue.prop('value')).toBe('');
  });
  
  
});
