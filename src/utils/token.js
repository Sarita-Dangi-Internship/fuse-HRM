export const setToken =(token) =>{
    window.localStorage.setItem("accessToken", token);
}

export const getToken =() =>{
   return window.localStorage.getItem("accessToken");
}

export const removeToken =() =>{
    window.localStorage.removeItem("accessToken");
}

// export const clientId =()=>{
//     REACT_APP_GOOGLE_CLIENT_ID='1058823769266-758kalf90cmirensqppf8qt6rfebpvjs.apps.googleusercontent.com';
// }