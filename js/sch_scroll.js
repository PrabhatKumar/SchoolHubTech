var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 5;

$('#sidebar').affix({
      offset: {
        top: 260,
        bottom: navHeight
      }
});


 $body.scrollspy({
	target: '#leftCol',
	offset: navHeight
}); 
