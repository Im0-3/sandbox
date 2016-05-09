import getOsType from './getOsType';
import getBrowserType from './getBrowserType';

let DATA = {
    ua: null,
    device: null,
    os: {
        type: null,
        version: null
    },
    browser: {
        type: null,
        version: null
    }
};

function getDeviceData(){
    let userAgent = window.navigator.userAgent.toLowerCase();
    let data = DATA;
    data.ua = userAgent;
    data.os.type = getOsType(userAgent);
    data.browser.type = getBrowserType(userAgent);
    return data;
}

export default getDeviceData;