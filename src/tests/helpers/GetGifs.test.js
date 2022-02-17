import { getGifs } from "../../helpers/getGifs";


describe('Tests on GetGifs fetch', () => {

  test('should return 10 elements', async() => {
    
    const gifs = await getGifs('pokemon');

    expect(gifs.length).toBe(10);
  });

  test('should return 0 elements', async() => {
    
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
    
});
