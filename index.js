'use strict';
function toFirstUpperCase() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.toFirstUpperCase = toFirstUpperCase;

module.exports = toFirstUpperCase;
