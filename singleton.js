'use strict';

const Single = (function () {
    var instance;
    return function () {
        if (instance === undefined) {
            instance = {};
        }
        return instance;
    }
})()

var classic = function () {
    this. a = 1;
    this.b = 3;
}

classic.prototype = Single;

var a = new classic;
var b = new classic;
 console.log(a === b);
