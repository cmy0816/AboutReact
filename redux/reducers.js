import {GET_DATA,SET_USER} from './action';
let initState = {
    data:{},
    user:{}
};
let getData=(state,action)=>{
    switch (action.type) {
        case GET_DATA:
                return action.text
        default:
                return state.data
    }
};
let getUser = (state, action) => {
    switch (action.type) {
        case SET_USER:
            return action.text
        default:
            return state.user
    }
}
export default (state=initState,action)=>{
    return {
        data:getData(state,action),
        user:getUser(state,action)
    }
}