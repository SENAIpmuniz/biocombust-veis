loadPage();

var idioma = "";

function carregarIdioma(){

	var language = doLMSGetValue("cmi.core.lesson_location");

	switch(language){		
		default: 
			idioma = "pt-br"; 
			url  = window.location.href;
			pagina = url.split("/")[url.split("/").length -1].split('.')[0]; 
			paginaeidioma = pagina.split("_");
			idioma = paginaeidioma[1]; 
			break;
	}

}

var suspendData = doLMSGetValue("cmi.suspend_data");

var suspendBlocos = "";
var suspendPerguntas = "";
var suspendSecoes = "";

if(suspendData == ""){
	
	for(a=0; a<json.bloco.length; a++){
		
		for(b=0; b<json.bloco[a].secao.length; b++){

			for(c=0; c<json.bloco[a].secao[b].perguntas.length; c++){
				if(c==0){
					suspendPerguntas += "0";
				}else{
					suspendPerguntas += ",0";
				}
			}

			if(b==0){
				suspendSecoes += "{" + suspendPerguntas + "}";
			}else{
				suspendSecoes += "/{" + suspendPerguntas + "}";
			}

			suspendPerguntas = "";
		}

		if(a==0){
			suspendBlocos += "(" + suspendSecoes + ")";
		}else{
			suspendBlocos += ";(" + suspendSecoes + ")";
		}

		suspendSecoes = "";

		suspendData += suspendBlocos;

		suspendBlocos = "";
		
		
		doLMSSetValue("cmi.interactions."+ a + ".id", "modulo_" + (a+1));
		doLMSSetValue("cmi.objectives."+ a + ".status", "incomplete");
		doLMSSetValue("cmi.interactions."+ a + ".student_response", " ");
		doLMSSetValue("cmi.interactions."+ a + ".result", " ");

	}
	
	doLMSSetValue("cmi.suspend_data", suspendData);
    doLMSCommit();

}

//alert(suspendData);


function exerciciosRealizados(blocoAtual, secaoAtual){
	
	var valorExerciciosRealizados = 0;
	var valorExerciciosAcertos = 0;

	sB = suspendData.split(';'); // SEPARAR BLOCOS
	sS = sB[(blocoAtual)].split('/'); // PEGAR SE��O
	sP = sS[(secaoAtual)]; // PEGAR EXERC�CIOS
	sE = sP.replace(/[()]/g,"").replace(/[{}]/g,"").split(','); //EXERC�CIOS

	for(z=0; z<sE.length; z++){

		if(sE[z] != 0){
			valorExerciciosRealizados++;
		}
		
		if(sE[z] == "1"){
			valorExerciciosAcertos++;
		}
	}
	
	valor1 = valorExerciciosRealizados;
	valor2 = valorExerciciosAcertos;

	return {valor1,valor2};

}

function redirecionar(){ 
	
	if(suspendData !== ""){
		
		carregarIdioma();
		
		document.location.href="modulos_" + idioma + ".html";
	}
	
}

// POPUP EXTERNO

// function popup(url,params) {
//   if(typeof params=='undefined') params={};
//   if(typeof params['win_name']=='undefined') params['win_name']='jan_pop';
//   if(typeof params['w']=='undefined') params['w']=810;
//   if(typeof params['h']=='undefined') params['h']=screen.height-55;
//   if(typeof params['scroll']=='undefined') params['scroll']='yes';
//   if(typeof params['resizable']=='undefined') params['resizable']='yes';
//   params['win']=window.open(url,params['win_name'],'scrollbars='+params['scroll']
//    +',resizable='+params['resizable']+',toolbar=no,location=no,directories=no,'
//    +'menubar=no,status=yes,top=0,left='
//    +((screen.width-params['w'])/2)+',width='+params['w']+',height='+params['h']);
//   params['win'].focus();
// }


// TOOGLEBOX

// function toogleBox(id){

// 	if($("#cont-"+id).is(":hidden")) {
// 		$("#cont-"+id).slideDown( "slow" );
// 	}else {
// 	    $("#cont-"+id).slideUp( "slow", function() {
//     		 $("#cont-"+id).css("display","");
//   		});
// 	}

// }

/*Bloquear download video-*/
// $(document).ready(function(){
// $('#video').bind('contextmenu',function() { return false; });
// });
// $(document).ready(function(){
// $('#video2').bind('contextmenu',function() { return false; });
// });

// FullOverlay

function on() {
    document.getElementById("fulloverlay").style.display = "block";
}

function off() {
    document.getElementById("fulloverlay").style.display = "none";
}

// Overlay

function overlayn() {
    document.getElementById("fulloverlay").style.display = "block";
}

function overlay(id){
	
	//BLOQUEAR ROLAGEM DA P�GINA
	var current = $(window).scrollTop();
	bloquearRolagem = true;
	$(window).scroll(function(event) {
		if(bloquearRolagem == true){
			$(window).scrollTop(current);
		}
	});
	
	$("#overlay-"+id).css('display', 'block');

}

function closeoverlay(id){
	
	//RETORNAR ROLAGEM DA P�GINA
	bloquearRolagem=false;
	
	$("#overlay-"+id).css('display', '');
}