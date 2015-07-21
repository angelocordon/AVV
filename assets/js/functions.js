$( document ).ready(function() {
  // TypeForm
  var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
  if(!gi.call(d,id)){js=ce.call(d,'script');
  js.id=id;js.src=b+'share.js';
  q=gt.call(d,'script')[0];
  q.parentNode.insertBefore(js,q)}id=id+'_';
  if(!gi.call(d,id)){qs=ce.call(d,'link');
  qs.rel='stylesheet';
  qs.id=id;
  qs.href=b+'share-button.css';
  s=gt.call(d,'head')[0];s.appendChild(qs,s)}

});



// var slideout = new Slideout({
//     'panel': document.getElementById('panel'),
//     'menu': document.getElementById('menu'),
//     'padding': 256,
//     'tolerance': 70
//   });
// 
//   // Toggle button
//   document.querySelector('.toggle-button').addEventListener('click', function() {
//     slideout.toggle();
//   });
//
//   document.querySelector('.menu').addEventListener('click', function(eve) {
//   if (eve.target.nodeName === 'A') { slideout.close(); }
//   });
