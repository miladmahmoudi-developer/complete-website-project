const showSwal = (title, icon, buttons, callback) => {

    swal({

        title,
        icon,
        buttons

    }).then(result => callback(result))

};

const saveIntoLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
};

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const getToken = () => {
    return JSON.parse(localStorage.getItem('user'))?.token || null
}

const isLogin = () =>{
    const userInfos = localStorage.getItem('user')
    return userInfos ? true : false
}

export { showSwal, saveIntoLocalStorage, getFromLocalStorage, getToken , isLogin };