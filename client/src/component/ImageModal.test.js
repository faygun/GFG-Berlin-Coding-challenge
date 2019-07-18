import { shallow} from 'enzyme';
import React from 'react';
import ImageModal from './ImageModal';
import Lightbox from 'react-image-lightbox';

const component = shallow(<ImageModal row={{id:1, title:'Jeans', brand: 'Levis', image:'https://demo.png', stock:200, price:50, salePrice:60}}/>);

describe('ImageModal component', ()=>{
    it('Component exist', () => {
        let count = component.find('.thumbnail').length
        expect(count).toBe(1);
    });

    it('Image click and show', () => {
        let img = component.find('.thumbnail');
        img.simulate('click');
        expect(component.state('isOpen')).toBeTruthy();
    });
});


