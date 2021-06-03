import react from 'react'
import { shallow } from 'enzyme'
import {GifExpertApp} from '../GifExpertApp'


describe('Pruebas de gifExpertApp', () => {

    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />)   
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar una lista de categorias', () => {
        
        const categories =['Berserk', 'Goku'];

        const wrapper =shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
