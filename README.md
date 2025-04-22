# @javascriptfirst/hal
JavascriptFIRST HAL are bindings for the C portions of WPILib's wpilibHAL and wpiutil libraries.

## Usage
```js

const HAL = require("hal_bindings");

/* DSMode enum */
class DSMode {
    constructor(v){this.v=v;}
    static Disabled = new DSMode(0);
    static Auto = new DSMode(1);
    static Teleop = new DSMode(2);
    static Test = new DSMode(3);
}

// get current driver station mode
function get_ds_mode() {
    // fetch control word
    let cw = HAL.HAL_GetControlWord();

    if(!cw.enabled) {
        HAL.HAL_ObserveUserProgramDisabled();
        return DSMode.Disabled;
    } else {
        if(cw.autonomous) {
            HAL.HAL_ObserveUserProgramAutonomous();
            return DSMode.Auto;
        } else if(cw.test) {
            HAL.HAL_ObserveUserProgramTest();
            return DSMode.Test;
        } else {
            HAL.HAL_ObserveUserProgramTeleop();
            return DSMode.Teleop;
        }
    }
}

// initialize HAL
let initialized = HAL.HAL_Initialize(500, 0);
if(!initialized) {
    throw "Failed to initialize HAL";
}

// tell DS that the program is valid
HAL.HAL_ObserveUserProgramStarting();

// create data event handle
let event_handle = HAL.WPI_CreateEvent(0, 0);
HAL.HAL_ProvideNewDataEventHandle(event_handle);

while(1) {

    // wait for driver station packet (timed out at 1 second)
    let object_timeout = HAL.WPI_WaitForObjectTimeout(event_handle, 1.0);
    if(!object_timeout.signaled) {
        // no packet
        continue;
    }

    // refresh driver station data
    HAL.HAL_RefreshDSData();

    // get current driver station mode
    let ds_mode = get_ds_mode();
    switch(ds_mode) {
        case DSMode.Disabled:
            console.log("Disabled!");
            break;
        case DSMode.Auto:
            console.log("Autonomous!");
            break;
        case DSMode.Teleop:
            console.log("Teleoperated!");
            break;
        case DSMode.Test:
            console.log("Testing!");
            break;
    }
}

HAL.HAL_RemoveNewDataEventHandle(event_handle);
HAL.WPI_DestroyEvent(event_handle);
```