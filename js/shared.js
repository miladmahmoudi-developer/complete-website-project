import { getMe } from "./funcs/auth.js";
import { showUserNameInNavber , renderTopbarMenus } from "./funcs/shared.js";

window.addEventListener('load' , () =>{

    showUserNameInNavber()
    renderTopbarMenus()

})