;(function (window, document, undefined)
{ 'use strict';

	// Polyfill (basic) addEventListener for IE
	if (typeof window.addEventListener === 'undefined' && typeof window.Element !== 'undefined')
	{
		console.log('Doing a basic polyfill for addEventListener...');
		
		window.Element.prototype.addEventListener = document.addEventListener = window.addEventListener = function (on, fn)
		{
			this.attachEvent('on' + on, fn);
		};
	}

	window.addEventListener('load', function ()
	{
		console.log('window loaded...');

		var toggle = document.getElementById('toggle-nav');

		toggle.addEventListener('click', function ()
		{
			console.log('nav clicked...');
			
			if (document.body.classList.contains('nav-active'))
			{
				document.body.classList.remove('nav-active');
			}
			else
			{
				document.body.classList.add('nav-active');
			}
		}, false);

		var navLinks = document.getElementById('nav').querySelectorAll('a');
		var hideNav = function ()
		{
			document.body.classList.remove('nav-active');
		};

		for (var i = 0; i < navLinks.length; ++i)
		{
			navLinks[i].addEventListener('click', hideNav, false);
		}
	}, false);
})(window, document);