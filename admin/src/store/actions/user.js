const login = () => {

    const isLogin = window.localStorage.getItem('user')

    return (dispatch) => {
        if (isLogin) {
            dispatch({
                type: 'SET_USER_INFO',
                data: {
                    name: 'cmy'
                }
            })
        }
    }
}

const login_out = () => {

    const isLogin = window.localStorage.getItem('user')

    return (dispatch) => {
        if (isLogin) {
            dispatch({
                type: 'SET_USER_INFO',
                data: {}
            })
        }

        return Promise.resolve()
    }
}

export {
    login,
    login_out
}