var pathName = location.pathname.split('/')
console.log(pathName)
var pageName = pathName[2]
console.log(pageName)
var referrerAry = document.referrer.split('/')
console.log(referrerAry)
var referrerHost = referrerAry[2]
console.log(referrerHost)
if(
  (referrerHost != location.host || referrerHost === '') &&
  pageName != '' &&
  pageName != 'other2.html'
) {
  alert('実行される')
}