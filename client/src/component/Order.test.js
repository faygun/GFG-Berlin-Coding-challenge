import { shallow} from 'enzyme';
import React from 'react';
import Order from './Order';

const component = shallow(<Order />);

describe('Order component', ()=>{
    it('Component exist', () => {
        
        let count = component.find('h3').length
        expect(count).toBe(1);
    });

    it('Component has text', () => {
        expect(component.find('h3').text()).toEqual('Order Page');
    });
});


