function FindProxyForURL(url, host){
  var autoproxy = 'PROXY https://github.com/swearToGod/proxy/blob/master/';
  if (url.indexOf("bug.mvbox.com") != 0) return autoproxy;
  return "DIRECT";
}
