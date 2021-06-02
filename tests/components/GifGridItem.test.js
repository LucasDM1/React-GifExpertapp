import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas eb <GifGridItem />', () => {

    

    test('Debe mostrar GifGridItem correctamente', () => {
        
        const wrapper = shallow( <GifGridItem />)
        expect(wrapper).toMatchSnapshot()
        
    })
    
})