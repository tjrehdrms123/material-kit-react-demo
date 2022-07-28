function saveAuthToCookie(value) {
    document.cookie = `til_auth=${value}`;
  }
  
  function saveUserToCookie(value) {
    document.cookie = `til_user=${value}`;
  }
  
  //   function saveDarkModeToCookie(value) {
  //     // 지금으로부터 1주일 동안 쿠키 저장
  //     let date = new Date(Date.now() + 604800);
  //     document.cookie = `til_mode=${value}; expires=${date}`;
  //   }
  
  function getAuthFromCookie() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/, "$1");
  }
  
  function getUserFromCookie() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/, "$1");
  }
  
  //   function getDarkModeFromCookie() {
  //     return document.cookie.replace(
  //       /(?:(?:^|.*;\s*)til_mode\s*=\s*([^;]*).*$)|^.*$/,
  //       '$1',
  //     );
  //   }
  
  function deleteCookie(value) {
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
  
  export {
    saveAuthToCookie,
    saveUserToCookie,
    // saveDarkModeToCookie,
    getAuthFromCookie,
    getUserFromCookie,
    // getDarkModeFromCookie,
    deleteCookie,
  };
  