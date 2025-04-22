// DriverStation.h

const BINDINGS = require("bindings/hal_bindings.node");

exports = {

    /**
     * wpilibHAL HAL_GetControlWord
     * @returns {object}
     */
    HAL_GetControlWord() {
        return BINDINGS.HAL_GetControlWord()
    },

    // TODO: HAL_GetAllianceStation

    /**
     * wpilibHAL HAL_GetJoystickAxes
     * @param {number} stick 
     * @returns {object}
     */
    HAL_GetJoystickAxes(stick) {
        return BINDINGS.HAL_GetJoystickAxes(stick);
    },
    /**
     * wpilibHAL HAL_GetJoystickPOVs
     * @param {number} stick 
     * @returns {object}
     */
    HAL_GetJoystickPOVs(stick) {
        return BINDINGS.HAL_GetJoystickPOVs(stick);
    },
    /**
     * wpilibHAL HAL_GetJoystickButtons
     * @param {number} stick 
     * @returns {object}
     */
    HAL_GetJoystickButtons(stick) {
        return BINDINGS.HAL_GetJoystickButtons(stick);
    },

    // TODO: HAL_GetJoystickDescriptor
    // TODO: HAL_GetJoystickIsXbox
    // TODO: HAL_GetJoystickType
    // TODO: HAL_GetJoystickName
    // TODO: HAL_GetJoystickAxisType
    // TODO: HAL_SetJoystickOutputs
    // TODO: HAL_GetMatchTime
    // TODO: HAL_GetOutputsEnabled
    // TODO: HAL_GetMatchInfo

    /**
     * wpilibHAL HAL_RefreshDSData
     * @returns {boolean}
     */
    HAL_RefreshDSData() {
        return BINDINGS.HAL_RefreshDSData();
    },
    /**
     * wpilibHAL HAL_ProvideNewDataEventHandle
     * @param {number} handle 
     */
    HAL_ProvideNewDataEventHandle(handle) {
        BINDINGS.HAL_ProvideNewDataEventHandle(handle);
    },
    /**
     * wpilibHAL HAL_RemoveNewDataEventHandle
     * @param {number} handle 
     */
    HAL_RemoveNewDataEventHandle(handle) {
        BINDINGS.HAL_RemoveNewDataEventHandle(handle);
    },
    /**
     * wpilibHAL HAL_ObserveUserProgramStarting
     */
    HAL_ObserveUserProgramStarting() {
        BINDINGS.HAL_ObserveUserProgramStarting();
    },
    /**
     * wpilibHAL HAL_ObserveUserProgramDisabled
     */
    HAL_ObserveUserProgramDisabled() {
        BINDINGS.HAL_ObserveUserProgramDisabled();
    },
    /**
     * wpilibHAL HAL_ObserveUserProgramAutonomous
     */
    HAL_ObserveUserProgramAutonomous() {
        BINDINGS.HAL_ObserveUserProgramAutonomous();
    },
    /**
     * wpilibHAL HAL_ObserveUserProgramTeleop
     */
    HAL_ObserveUserProgramTeleop() {
        BINDINGS.HAL_ObserveUserProgramTeleop();
    },
    /**
     * wpilibHAL HAL_ObserveUserProgramTest
     */
    HAL_ObserveUserProgramTest() {
        BINDINGS.HAL_ObserveUserProgramTest();
    }

}