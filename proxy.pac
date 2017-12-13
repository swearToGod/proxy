function FindProxyForURL(url, host){
  var autoproxy = 'PROXY 127.0.0.1:8087';
  if (url.indexOf("bug.mvbox.com") != 0) return autoproxy;
  return "DIRECT";
}
