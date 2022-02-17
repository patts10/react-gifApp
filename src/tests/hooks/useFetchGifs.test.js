import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"


describe('test on hook useFetchGifs', () => { 
  
  test('should return initial state', () => { 
    
    const { result } = renderHook( () => useFetchGifs('pokemon') );
    const { data, loading } = result.current;
    
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  
  test('should return an array of images and loading equals to false', async() => { 
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('pokemon') );
    await waitForNextUpdate();

    const { data, loading } = result.current;
    
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
    

    })
 })