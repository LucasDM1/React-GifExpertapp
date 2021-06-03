import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

import '@testing-library/jest-dom'

describe('Pruebas de AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();//limpia todos las simulaciones
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();    
        
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change',{target:{value:value}})

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe postear en submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('Debe de llamar a setCategories y limpiar la caja de texto', () => {
         
        const value = 'Hola Mundo'
        wrapper.find('input').simulate('change',{target:{value:value}})

        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect(setCategories).toHaveBeenCalled()
        // expect(setCategories).toHaveBeenCalledTimes(2)//se llama n veces
        // expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //se llama con una funcion
        
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
        
})
