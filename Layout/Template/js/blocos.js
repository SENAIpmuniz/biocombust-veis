// 
var totalExerciciosRealizados = 0;	
var totalExerciciosCorretos = 0;	
var totalExercicios = 0; 
var progressoGeral = 0;
	
for(var i=0;i< json.bloco.length; i++){

	var html = '<div class="col l6 m6 s12"><div class="card">';
	html +='<div class="card-image waves-effect waves-block waves-light hoverable"><img class="activator contraste-imgpb" src="'+json.bloco[i].imagem+'"></div>';

	html += '<div class="card-content"><span class="activator">'+json.bloco[i].fase+'</span><span class="card-title activator grey-text text-darken-4">'+json.bloco[i].titulo.toUpperCase()+'<i class="material-icons right">more_vert</i></span>';

	html += '<div class="collection"><p class="collection-item"><span class="badge">Exerc&iacute;cios</span>Aulas</p>';

	var secoes = json.bloco[i].secao;
	for (var j = 0; j < secoes.length; j++) {
	   qtdExerciciosRealizados = exerciciosRealizados(i,j);
	   html+= '<a href="'+ (i+1) +'de'+ (j+1) +'.html" class="collection-item '+json.bloco[i].classecss+'">';
	   if(qtdExerciciosRealizados.valor1 == 0){
		  html += '<span class="badge">';
	   }else if(qtdExerciciosRealizados.valor1 == secoes[j].perguntas.length){
		   html += '<span class="new badge blue" data-badge-caption="">';
	   }else{
		   html += '<span class="new badge red" data-badge-caption="">';
	   }
		
	   html+= qtdExerciciosRealizados.valor1 + '/' + secoes[j].perguntas.length + '</span>' + (j+1) +'. ' + secoes[j].subtitulo + '</a>';

	   totalExerciciosRealizados += qtdExerciciosRealizados.valor1;
	   totalExerciciosCorretos += qtdExerciciosRealizados.valor2;
	   totalExercicios += secoes[j].perguntas.length;

	}


	html +='</div></div>';

	html +='<div class="card-reveal"><span class="card-title grey-text text-darken-4">'+json.bloco[i].fase+'<i class="material-icons right">close</i></span>'+json.bloco[i].descricao+'</div>';

	html +='</div></div>';

	$('#blocos').append(html);

	progressoGeral = Math.round(((totalExerciciosRealizados / totalExercicios) * 100));
	$('.progress-circle').addClass('progress-'+progressoGeral);
	$('#progressoGeral').html(progressoGeral);
	$('#exerciciosCorretos').html(Math.round(((totalExerciciosCorretos / totalExercicios) * 100)));
	$('#exerciciosRealizados').html(totalExerciciosRealizados);
	$('#totalExercicios').html("/"+totalExercicios);

}