import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas eb <GifGridItem />', () => {
    
    const wrapper = shallow(<GifGridItem />)

    test('Debe mostrar GifGridItem correctamente', () => {

        expect(wrapper).toMatchSnapshot()
        
    })
    
})