//
var PROXY_DIRECT="DIRECT";
var DIRECT="DIRECT";
var BLACK="PROXY 127.0.0.1:80";
var WHITE=PROXY_DIRECT;
function s(u,r){return shExpMatch(u,r);}
function d(h,r){return dnsDomainIs(h,r);}
function n(h,r,m){return isInNet(h,r,m);}
function e(u){var h;if(u.indexOf("://")>-1){h=u.split('/')[2];}else{h=u.split('/')[0];}h=h.split(':')[0];var s=h.split('.').reverse();return s;}
function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();var a=e(u);var b=a[0];var c=a[1];var f=c.length;var t=c[f-1];var z=c[f-2];
if(d(h,"buy.itunes.apple.com")){return BLACK;}
if(d(h,"mobile\u002dapi.adguard.com")){return BLACK;}
if(d(h,"ocsp.apple.com")){return BLACK;}
if(d(h,"logger.suibyuming.com")){return BLACK;}
if(d(h,"logger.adthor.com")){return BLACK;}
return PROXY_DIRECT;}