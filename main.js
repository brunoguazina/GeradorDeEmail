
//
$("#gerarEmail").on("click", function(){
	
	var conteudoDoPost = {
		"titulo": post.Titulo(),
		"descricao": post.Descricao(),
		"link": post.Endereco(),
	}
	enviar(conteudoDoPost);
});


function enviar(conteudo) {
		$.post('data.php', conteudo, function(data){
 			console.log(data);
 		}).done(function() {
    		console.log( "Enviado!" );
  		});
}  