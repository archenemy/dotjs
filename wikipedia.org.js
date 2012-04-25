// si existe un enlace a la wiki en inglés, nos vamos directamente a ella

if ($('li.interwiki-en a') !== null) {
	console.log('cambiando!');
	document.location = $('.interwiki-en a').attr('href');
}
