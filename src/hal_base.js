// HALBase.h

const BINDINGS = require("bindings/hal_bindings.node");

exports = {
    // TODO

    /**
     * wpilibHAL HAL_Initialize
     * @param {number} timeout 
     * @param {number} mode
     * @returns {boolean} 
     */
    HAL_Initialize(timeout, mode) {
        return BINDINGS.HAL_Initialize(timeout, mode);
    }
}