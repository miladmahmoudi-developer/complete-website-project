import { getMe } from "./auth.js";
import { isLogin } from "./utils.js";



const showUserNameInNavber = () => {

    const navbarProfileBox = document.querySelector('.main-header__profile')

    const isUserLogin = isLogin()

    if (isUserLogin) {

        const userInfos = getMe().then(data => {

            navbarProfileBox.setAttribute('href', './index.html')
            navbarProfileBox.innerHTML = `<span class="main-header__profile-text" >${data.name}</span>`

        })

    } else {

        navbarProfileBox.setAttribute('href', './login.html')
        navbarProfileBox.innerHTML = '<span class="main-header__profile-text" >ثبت نام / ورود</span>'

    }


};

export { showUserNameInNavber };







const renderTopbarMenus = async () => {

    const topbarList = document.querySelector('.top-bar__menu');

    const res = await fetch(`http://localhost:4000/v1/menus/topbar`);

    const topbarMenus = await res.json();

    console.log(topbarMenus);



    topbarList.innerHTML ='';
    [...topbarMenus].splice(0, 6).map(menu => {
        topbarList.innerHTML += `
        <li class="top-bar__item">

            <a href="${menu.href}" class="top-bar__link">${menu.title}</a>

        </li>`
    })

};

export { renderTopbarMenus };