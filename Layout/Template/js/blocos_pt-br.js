//IDIOMAS
carregarIdioma();

progressoTotal();

function progressoTotal() {
	// RENDERIZAÇÃO DOS BLOCOS	
	var totalExerciciosRealizados = 0;
	var totalExerciciosCorretos = 0;
	var totalExercicios = 0;
	var progressoGeral = 0;

	for (var i = 0; i < json.bloco.length; i++) {
		var html = '<div class="col-lg-3 col-sm-4 col-md-6 py-2"><div class="card mx-auto"><img src="' + json.bloco[i].imagem + '" alt="' + json.bloco[i].alt_imagem + '"><div class="card-img-overlay"><div class=" mx-auto  d-flex py-5 flex-column justify-content-center ">' + '</h4></div></div><div class="card-cover-z-body "><div class="row pt-4">';

		html += '<div class="text-center">' + json.bloco[i].nome_modulo + '<div class="text-center">' + json.bloco[i].titulo_modulo + '</div></div><div class="col-4"><p class="destaque-menu text-center">' + json.bloco[i].qtd_aula + '</p></div><div class="col-7"><p class="destaque-menu text-end">' + json.bloco[i].qtd_exercicios + '</p></div>';


		html += '</div><div class="row"><div class="collection"> ';

		var secoes = json.bloco[i].secao;
		for (var j = 0; j < secoes.length; j++) {
			qtdExerciciosRealizados = exerciciosRealizados(i, j);
			html += '<div class="py-2"><a href="Layout/Aula/' + (i + 1) + 'de' + (j + 1) + '_' + idioma + '.html" class="collection-item pulse rounded destaque-menu border py-3" title="'+ json.bloco[i].nome_modulo +' - '+ secoes[j].nome_aula +'" +>';
			if (qtdExerciciosRealizados.valor1 == 0) {
				//coluna de 12 para o titulo - antigamente usava-se 8
				html += '<div class="row"><div class="col-8"><span class="destaque-menu">';
			} else {
				html += '<div class="row"><div class="col-8"><span class="destaque-menu">';
			}
			//com exercicios
			html += secoes[j].nome_aula + '</span></div><div class="col-4"><span class="destaque-menu text-end">' + qtdExerciciosRealizados.valor1 + '/' + secoes[j].perguntas.length + '</span></div></div></div>'
			totalExerciciosRealizados += qtdExerciciosRealizados.valor1;
			totalExerciciosCorretos += qtdExerciciosRealizados.valor2;
			totalExercicios += secoes[j].perguntas.length;
		}

		html += '</div></div>';
		html += '</div></div>';

		$('#blocos').append(html);

	}

	// var encerramento = '';
	// $('#blocos').append(encerramento);

	progressoGeral = Math.round(((totalExerciciosRealizados / totalExercicios) * 100));
	$('.progress-circle').addClass('progress-' + progressoGeral);
	$('#progressoGeral').html(progressoGeral);
	$('#exerciciosCorretos').html(Math.round(((totalExerciciosCorretos / totalExercicios) * 100)));
	$('#exerciciosRealizados').html(totalExerciciosRealizados);
	$('#totalExercicios').html("/" + totalExercicios);

}
