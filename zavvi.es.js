if ( (document.location.pathname.indexOf('mega-lunes') != -1 && document.location.pathname.indexOf('videojuegos') != -1) 
|| document.location.pathname.indexOf('bajada-de-precio') != -1 
|| (document.location.pathname.indexOf('liquidacion') != -1 && document.location.pathname.indexOf('videojuegos') != -1) ) {
	$('.item-games-platforms-ps3').hide();
	$('.item-games-games-accessories').hide();
	$('.item-games-platforms-pc').hide();
	$('.item-games-platforms-nintendo-wii').hide();
	$('.item-games-platforms-ps-vita').hide();
	$('.item-games-platforms-nintendo-ds').hide();
	$('.item-games-platforms-psp').hide();
	$('.item-games-platforms-nintendo-3ds').hide();
	$('.item-games-platforms-ps-vita-ps-vita-accessories').hide();
	$('.item-games-consoles').hide();
	$('.panel-content').prepend('<div style="font-size: 120%; width:95%; background: yellow; padding: 1em; text-align: center;">Ojo, ocultando via .js todo lo que no es xbox</div>');
}
