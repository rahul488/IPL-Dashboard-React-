
import React from 'react';
import  ReactDOM  from 'react-dom';
import { mount, shallow} from 'enzyme'
import { MemoryRouter} from 'react-router';
import HomePage from '../../Pages/HomePage';
import { Provider,useSelector } from 'react-redux';
import store from '../../Store/Store';
import Login from '../../Pages/Login';
import Signup from '../../Pages/SignUp'
import routeSetup from '../../_testUtill_/RouteTest'
import Header from '../Header';
import findByTestId from '../../_testUtill_/FindBytestId';
import * as redux from 'react-redux'





jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useHistory:()=>({
        push:jest.fn()
    }),
}))


let spyOnuseSelector;
const setup=()=>{
    return mount(<Provider store={store}><MemoryRouter><Header /></MemoryRouter></Provider>)
}
beforeEach(()=>{
     spyOnuseSelector=jest.spyOn(redux,'useSelector').mockImplementation(()=>{return {isLoggedin:true}});
})
afterEach(()=>{
    useSelector.mockClear();
})


describe('testing navbar links',()=>{
    test('/ routes to Home Component',()=>{
       let wrapper=routeSetup(<HomePage />,'/');
        expect(wrapper.find(HomePage)).toHaveLength(1);
    })
    test('/login should route to login page',()=>{
       let wrapper=routeSetup(<Login />,'/login');
        expect(wrapper.find(Login)).toHaveLength(1);
        expect(wrapper.find(HomePage)).toHaveLength(0);
    })
    test('/signup should route to signup page',()=>{
       let wrapper=routeSetup(<Signup />,'/signup');
        expect(wrapper.find(Signup)).toHaveLength(1);
        expect(wrapper.find(HomePage)).toHaveLength(0);
        expect(wrapper.find(Login)).toHaveLength(0);
    })
    test('should route to home page after logout',()=>{
        let wrapper=shallow(<Header/>)
        let component=findByTestId(wrapper,'logout');
        expect(component)
       
    })
})