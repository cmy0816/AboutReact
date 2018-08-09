const initState = {
    user:window.localStorage.getItem('user'),
    info:{}
};
const user = (state = initState,action) =>{
        switch (action.type) {
            case 'SET_USER_INFO':
                state = Object.assign({},state,{info:action.text})
                return state;
            default:
                return state;
        }
}
export default user;