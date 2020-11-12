"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = void 0;
function getCookie(cookie, key) {
    var name = key + '=';
    var ca = cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return '';
}
exports.getCookie = getCookie;
