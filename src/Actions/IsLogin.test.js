
import { IS_LOGGED_IN, IS_LOGGED_OUT } from '../Constants/Redux_constants';
import { isLoggedIn, isLoggedOut } from './IsLogin';




describe("checking actions",()=>{
    test("checking isLoggedIn()",()=>{
        const action=isLoggedIn("rahul","token");
        expect(action.type).toEqual(IS_LOGGED_IN);
        expect(action.payload).toStrictEqual(["rahul","token"])

    })
    test("checking isLoggedOut()",()=>{
        expect(isLoggedOut().type).toEqual(IS_LOGGED_OUT);
    })
})