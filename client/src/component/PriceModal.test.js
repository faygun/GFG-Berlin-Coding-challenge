import { shallow} from 'enzyme';
import React from 'react';
import PriceModal from './PriceModal';


const component = shallow(<PriceModal row={{id:1, title:'Jeans', brand: 'Levis', image:'https://demo.png', stock:200, price:50, salePrice:60, saleStartDate:'2019-08-12', saleEndDate:'2019-09-23'}}/>);

describe('PriceModal component', ()=>{
    it('Component exist', () => {
        
        let count = component.find('div').length
        expect(count).toBe(1);
    });

    it('Start date can not be greater than end date', () => {
        
        let startDate = component.find('[name="saleEndDate"]')
        startDate.simulate('change', {currentTarget: {
            value: '2019-03-24',
            name :'saleEndtDate'
        }});
        
        expect(component.state('error')).toEqual('Start date should not be greater than end date');
    });

});


