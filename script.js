(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  b.addEventListener('click',function(){
    var o=b.getAttribute('aria-expanded')==='true';
    b.setAttribute('aria-expanded',String(!o));
    b.setAttribute('aria-label',o?'Open menu':'Close menu');
    m.classList.toggle('open',!o);
  });
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
    b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');m.classList.remove('open');
  });});
  document.getElementById('yr').textContent=new Date().getFullYear();
  // Forms: no Wix backend here. Until a form service is connected, open the
  // visitor's email app with the details filled in, addressed to sales@funpst.com.
  function mailForm(id,subject,build){
    var f=document.getElementById(id);if(!f)return;
    f.addEventListener('submit',function(ev){
      ev.preventDefault();
      if(!f.reportValidity())return;
      var body=build(f);
      window.location.href='mailto:sales@funpst.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      f.querySelector('.form-note').textContent='Opening your email app to send this message to sales@funpst.com.';
    });
  }
  mailForm('contact-form','Website enquiry',function(f){
    return 'First name: '+f['first-name'].value+'\nLast name: '+f['last-name'].value+'\nEmail: '+f.email.value+'\n\n'+f.message.value;
  });
  mailForm('news-form','Newsletter sign-up',function(f){
    return 'Please add '+f.email.value+' to the PowerServe newsletter.\nSubscribe: '+(f.subscribe.checked?'Yes':'No');
  });
})();
