import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} />)

    test('Debe mostrar GifGridItem correctamente', () => {
        expect(wrapper).toMatchSnapshot()
        
    })
    
    test('Debe tener un h3 con el texto ', () => {
        const h3 = wrapper.find('h3')
        expect( h3.text().trim()).toBe( title );
    })
    
    test('debe de tnere la imagen igual al url y alt al props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    test('debe tener animate__fadeIn', () => {
        const div =wrapper.find('div')
        const className = "animate__fadeIn"
        //console.log(div.prop("className"))
        expect(div.prop("className").includes(className) ).toBe(true);  
        // expect(div.prop("className")).toContain(className);
    })
    
    
})