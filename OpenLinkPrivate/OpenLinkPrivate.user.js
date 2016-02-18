// ==UserScript==
// @name          OpenLinkPrivate
// @namespace     http://qseo.ru
// @description   Open all links with non-empty private html attrubute in private tabs, using Private Tab https://addons.mozilla.org/ru/firefox/addon/private-tab/ Firefox extension.
// @icon          http://qseo.ru/logo/logo_q.svg
// @version       1.1
// @updateURL     https://github.com/Qseo/OpenLinkPrivate/raw/master/OpenLinkPrivate/OpenLinkPrivate.user.js
// @downloadURL   https://github.com/Qseo/OpenLinkPrivate/raw/master/OpenLinkPrivate/OpenLinkPrivate.user.js
// @include       *
// @grant         GM_openInTab
// ==/UserScript==

/**
First class function to call a method with given args on a future given object
*/
function callWith(method, ...args) {
  return function(o) {
    var func = o[method];
    if(typeof func !== "function") {
      message = method + " is not a function";
      console.error(message + " of ", o);
      throw new TypeError(message);
    }
    return func.apply(o, args);
  }
}

/**
Opens the link in a private tab
*/
function handler(event) {
  // Only left clicks and <a> with non-empty attribute 'privatetab'
  if(event.button === 0 && event.target.tagName === "A" && event.target.getAttribute('private')){
    var openInBackground = false;
    if(event.target.getAttribute('privatetabbackground'))
      openInBackground = true;
    GM_openInTab("private:" + event.target.href, openInBackground);
    event.preventDefault();
  }
}

document.addEventListener("click", handler, true);