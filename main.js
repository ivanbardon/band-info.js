var $artista = $('#artista'),
		$buscar = $('#buscar'),
		$resultado = $('#resultado');

function buscarArtista (){
	var artista = $artista.val(),
		api_key = 'a75bf0c5af9f24405c85f6036c04d797';

	$.ajax({

		data: {
			artist: artista,
			api_key: api_key,
			format: 'json',
			method: 'artist.getinfo',
		},
		url:'http://ws.audioscrobbler.com/2.0/'
	})
	.done( presentarArtista )
}

function presentarArtista( data ){
	var artista = data.artist,
		html = '';

	html += '<h2>' + artista.name + '</h2>';
	html += '<figure><img src="' + 
		artista.image[ artista.image.length - 2 ]['#text'] + 
		'" alt="caratula" class="img-thumbnail" /></figure>';
	html += '<br />';
	html += '<p>' + artista.bio.summary + '</p>';
	html += '<br />';
	
	html += '<h3>Artistas Relacionados</h3>'
	html += '<h4>' + artista.similar.artist[0].name + '</h4>';
	html += '<figure><img src="' + 
		artista.similar.artist[0].image[2]['#text'] + 
		'" alt="" class="img-rounded" /></figure>';
	html += '<br />';
	
	html += '<h4>' + artista.similar.artist[1].name + '</h4>';
	html += '<figure><img src="' + 
		artista.similar.artist[1].image[2]['#text'] + 
		'" alt="" class="img-rounded" /></figure>';
	html += '<br />';

	html += '<h4>' + artista.similar.artist[2].name + '</h4>';
	html += '<figure><img src="' + 
		artista.similar.artist[2].image[2]['#text'] + 
		'" alt="" class="img-rounded" /></figure>';
	html += '<br />';
	
	html += '<h4>' + artista.similar.artist[3].name + '</h4>';
	html += '<figure><img src="' + 
		artista.similar.artist[3].image[2]['#text'] + 
		'" alt="" class="img-rounded" /></figure>';
	html += '<br />';

	html += '<h4>' + artista.similar.artist[4].name + '</h4>';
	html += '<figure><img src="' + 
		artista.similar.artist[4].image[2]['#text'] + 
		'" alt="" class="img-rounded" /></figure>';
	html += '<br />';

	$resultado.html ( html );

}

	$buscar.on('click', buscarArtista);