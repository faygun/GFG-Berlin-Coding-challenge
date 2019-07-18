import { shallow} from 'enzyme';
import React from 'react';
import Product from './Product';

const component = shallow(<Product />);

describe('Product component', ()=>{
    it('Component exist', () => {
        
        let count = component.find('BootstrapTable').length
        expect(count).toBe(1);
    });

    it('Component without data', () => {
        
        component.setState({products:[]});
        var itemCount = component.find('BootstrapTable').prop('data').length;
        expect(itemCount).toBe(0);
    });

    it('Component with data', () => {
        component.setState({products:[{id:1, title:'Jeans', brand: 'Levis', stock:200, price:50, salePrice:60}]});
        var itemCount = component.find('BootstrapTable').prop('data').length;
        expect(itemCount).toBe(1);
    });
});


