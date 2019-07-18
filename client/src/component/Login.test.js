import { shallow, mount, render } from 'enzyme';
import AppNavbar from './AppNavbar';
import React from 'react';
import Login from './Login';
import {getJwt} from '../helper/jwt';

const component = shallow(<Login />);

describe('Login component', ()=>{
    it('Component exist', () => {
        
        let count = component.find('.wrapper').length
        expect(count).toBe(1);
    });

    it('Login button click', () => {
        component.setState({loadingType:'cubes'})
        let count = component.find('[type="submit"]').length;
        expect(count).toBe(0);
    });

    it('Login page without token', () => {
        let token = getJwt();
        expect(token).toEqual(null);
    });

    it('Login page with error', () => {
        component.setState({email:'', password:'', loadingType:'', error:'Please insert email or password'});
        let button = component.find('[type="submit"]');
        let lblError = component.find('.lblerror');
        button.simulate('click', {
            preventDefault: () => {
            }
        });
        expect(lblError.text()).toEqual('Please insert email or password');
    });
      
});


