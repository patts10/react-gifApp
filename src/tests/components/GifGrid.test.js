import { shallow } from 'enzyme'
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('tests on <GifGrid />', () => { 

  const category = 'pokemon';

  test('should show component correctly', () => { 

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    
    const wrapper = shallow(<GifGrid category={ category } />);
    expect(wrapper).toMatchSnapshot();
    
  });
  
  test('should show items when load useFetchGifs images', () => { 

    const gifs = [{
      id:'abc',
      url: 'https//:blabñabña.jpg',
      title: 'something'
    },
    {
      id:'123',
      url: 'https//:blabñabña.jpg',
      title: 'something'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    
    const wrapper = shallow(<GifGrid category={ category } />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })


 })