import { shallow} from 'enzyme';
import React from 'react';
import Setting from './Setting';

const component = shallow(<Setting />);

describe('Setting component', ()=>{
    it('Component exist', () => {
        
        let count = component.find('h3').length
        expect(count).toBe(1);
    });

    it('Component has text', () => {
        expect(component.find('h3').text()).toEqual('Setting Page');
    });
});


