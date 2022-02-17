
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests on <GifGridItem />', () => {
  
  const title = 'tittle';
  const url = 'https://localhost/something.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  
  test('should show component correctly', () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  test('should exist a paragraph with the title', () => {
    
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });
  
  test('should exist an image with its url and alt that they are similar to props', () => {
    
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  
  test('should have animate__fadeIn class', () => {
    
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  });
  
});
