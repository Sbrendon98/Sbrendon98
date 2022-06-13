const URL = "http://localhost:3001/"

export async function loginUser(dispatch, payload) {
    const request = {
        method: "POST",
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    }
    try {
        dispatch({ type: "LOGIN"})
        let response = await fetch(`${URL}`, requestOptions)
        let data = await response.json()

        if(data.user) {
            dispatch({type: "LOGIN_SUCCESS", payload: data})
            localStorage.setItem("User", JSON.stringify(data))
            return data
        }
        dispatch({type: 'LOGIN_ERROR', error: data.error})
        return
    } catch {
        dispatch({type: 'LOGIN_ERROR', error: data.error})
    }
}