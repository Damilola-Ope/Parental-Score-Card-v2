//function to set a cookie
function setCookie(name, value, timeToLive){
  const date = new Date();
  date.setTime(date.getTime() + (timeToLive * 24 * 60 * 60 * 1000))

  expires = "expires=" + date.toUTCString()
  document.cookie =`${name}=${value}; ${expires}; path=/`
}

//function to manually delete a cookie
function deleteCookie(name){
  setCookie(name, null, null);
}

//function to fetch a cookie value
let result = null;
function getCookieValue(name){
  cDecode = decodeURIComponent(document.cookie);
  cArray= cDecode.split("; ")
  cArray.forEach(element =>{
    
    if(element.indexOf(name)== 0){
      result = element.substring(name.length + 1);
    }
  })
  return result;
}

//function to check if cookie exsist
function doesCookieExist() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('TES-First-Name=')) {
      return true;
    }
  }
  return false;
}
