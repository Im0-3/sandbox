function getOsType(ua){
    //Windows Phone
    if( ua.indexOf('windows phone') > 0){
        return 'Windows Phone';
    }
    //FirefoxOS
    if( ua.indexOf('mobile') > 0 &&
        ua.indexOf('gecko') > 0 &&
        ua.indexOf('firefox') > 0 &&
        ua.indexOf('android') < 1 ){
        return 'FirefoxOS';
    }
    //BlackBerry
    if( ua.indexOf('BB10') > 0 &&
        ua.indexOf('Mobile') > 0 ){
        return 'BlackBerry';
    }
    //iOS
    if( ua.indexOf('iphone') > 0 ||
        ua.indexOf('ipod') > 0 ||
        ua.indexOf('ipad') > 0){
        return 'iOS';
    }
    //Android
    if(ua.indexOf('android') > 0){
        return 'Android';
    }
    //MacOS
    if(ua.indexOf('mac os x') > 0){
        return 'MacOS';
    }
    //MacOS
    if(ua.indexOf('windows nt') > 0){
        return 'Windows';
    }
    return;
}

export default getOsType;