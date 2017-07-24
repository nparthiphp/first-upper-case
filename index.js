'use strict';
String.prototype.toFirstUpperCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = toFirstUpperCase;
