// Synchronization.h

const BINDINGS = require("bindings/hal_bindings.node");

exports = {
    // TODO

    /**
     * wpiutil WPI_CreateEvent
     * @param {number} manual_reset 
     * @param {number} initial_state 
     * @returns {number}
     */
    WPI_CreateEvent(manual_reset, initial_state) {
        return BINDINGS.WPI_CreateEvent(manual_reset, initial_state);
    },
    /**
     * wpiutil WPI_DestroyEvent
     * @param {number} handle 
     */
    WPI_DestroyEvent(handle) {
        BINDINGS.WPI_DestroyEvent(handle);
    },
    /**
     * wpiutil WPI_WaitForObjectTimeout
     * @param {number} handle
     * @param {number} timeout
     */
    WPI_WaitForObjectTimeout(handle, timeout) {
        BINDINGS.WPI_WaitForObjectTimeout(handle, timeout);
    }

}