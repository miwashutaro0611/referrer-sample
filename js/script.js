var pathName = location.pathname.split('/')
var pageName = pathName[2]
var referrerAry = document.referrer
var referrerHost = referrerAry.split('/')[2]
var referrerPage = referrerAry.split('/')[3]
if(
  (referrerHost != location.host || referrerPage === '') &&
  pageName != '' &&
  pageName != 'other2.html'
) {
  alert('実行される')
}