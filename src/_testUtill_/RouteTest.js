import React from 'react';
import { mount} from 'enzyme'
import { MemoryRouter} from 'react-router';
import { Provider } from 'react-redux';
import store from '../Store/Store';

let wrapper;
const routeSetup=(component,routePath)=>{
    wrapper=mount(
        <Provider store={store}><MemoryRouter initialEntries={[`${routePath}`]}>
        {component}
    </MemoryRouter></Provider>
    )
    return wrapper;
}

export default routeSetup;