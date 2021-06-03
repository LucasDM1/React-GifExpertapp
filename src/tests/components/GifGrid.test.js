import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs')
describe('Purebas en GifGrid', () => {
    
    const category='Hola';

    test('Debe mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs=[{
            
            id: 'ABC',
            title: 'Cualquier cosa',
            url: 'https://local/cualquier/cosa.jpg'
            
        }];
        
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        })
    
        const wrapper = shallow(<GifGrid category={category}/>);   
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    })
    
    
})
