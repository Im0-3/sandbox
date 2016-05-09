function getBrowserType(ua){
    //IE
    if( ua.indexOf('msie') > 0 ||
        ua.indexOf('trident') > 0 ){
        return 'IE';
    }
    //Edge
    if( ua.indexOf('edge') > 0){
        return 'Edge';
    }
    //Opera
    if(ua.indexOf('opr') > 0){
        return 'Opera';
    }
    //Firefox
    if( ua.indexOf('firefox/') > 0){
        return 'Firefox';
    }
    console.log(ua.indexOf('chrome'));
    //Safari
    if( ua.indexOf('safari') > 0 &&
        ua.indexOf('chrome') < 1 ){
        return 'Safari';
    }
    //Chrome
    if( ua.indexOf('chrome') > 0 ){
        return 'Chrome';
    }
    return;
}

export default getBrowserType;