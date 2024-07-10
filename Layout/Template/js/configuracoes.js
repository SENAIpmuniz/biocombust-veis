// IDIOMA (PÁGINAS)
function languagePages(obj) {
  	selectedLanguage = obj.options[obj.selectedIndex].getAttribute('data-idioma');
	currentLanguage = doLMSGetValue("cmi.core.lesson_location"); 
	
	//PAGES
	if(currentLanguage != selectedLanguage){
		
		doLMSSetValue("cmi.core.lesson_location", selectedLanguage);
		doLMSCommit();
		
		url  = window.location.href; 
		paginaIdioma = url.split("/")[url.split("/").length -1].split('.')[0]; 
		pagina = paginaIdioma.split("_")[0];
		

		if(pagina == "index"){

			switch(selectedLanguage){
				case "1": document.location.href = "index_pt-br.html"; break;
				case "2": document.location.href = "index_pt-br.html"; break;
				//case "3": document.location.href = "index_en.html"; break;
				default: document.location.href = "index_pt-br.html"; break;
			}
			
		}else if(pagina == "modulos"){

			switch(selectedLanguage){
				case "1": document.location.href = pagina + "_pt-br.html"; break;
				case "2": document.location.href = pagina + "_es.html"; break;
				default: document.location.href = pagina + "_pt-br.html"; break;
			}
			
		}else{
		
			switch(selectedLanguage){
				case "1": document.location.href = bloco + "de" + secao + "_pt-br.html"; break;
				case "2": document.location.href = bloco + "de" + secao + "_es.html"; break;
				default: document.location.href = bloco + "de" + secao + "_pt-br.html"; break;
			}
			
		}
		
	}

}

// AVALIAÇAO MÓDULOS

$("label.star").hover(
	function() {
		
		if(!$(".stars").is('[disabled=disabled]')){
			$(".descricao").hide();
			$(this).next(".descricao").show();
		}
  	},
	function() {
		
		
    	$(".descricao").hide();
		
		if($(".star").hasClass("checked")){
			$("#descricao-"+$(".checked").val()).show();
		}
	}
).click(function(){
	if($(".stars").is('[disabled=disabled]')){ 
		return false;
	}else{
		$(this).next(".descricao").show(); 
		$("input.star").removeClass("checked");
		$("input#star-"+$(this).data("descricao")).addClass("checked");
	}
	
});
	
$('textarea').keyup(function() {
	
	$(this).val( $(this).val().replace( /\r?\n/gi, '' ) );
    
	var characterCount = $(this).val().length;
	
	var maxCharacter = $(this).attr('maxLength');

	if (characterCount >= 200) {
		$('.character-counter').css('color', '#F00');
		$('.character-counter').css('font-weight','bold');
	}else {
		$('.character-counter').css('color', '#000');
		$('.character-counter').css('font-weight','normal');
	}
	
	if(characterCount >= maxCharacter) {
		$("#textLimit").show();
	}else{
		$("#textLimit").hide();
	}
      
});

function avaliacaoModulo(modulo){
	
	if(!$("input.star").hasClass("checked")){
		alert("Obrigada por responder!");
	}else{
		
		$(".stars, stars *").attr("disabled", " ");
		$("textarea").attr("disabled", " ");
		$("#enviarResposta").attr("disabled", " ");
		
		modulo = modulo - 1;
		
		doLMSSetValue("cmi.objectives."+ modulo + ".status", "completed");
		doLMSSetValue("cmi.interactions." + modulo + ".student_response", $("textarea").val());
		doLMSSetValue("cmi.interactions." + modulo + ".result", $("input.star.checked").val());
		doLMSCommit();
		
		alert("Obrigado por realizar a Avaliação!");
		
	}

}

//BLOQUEAR AVALIAÇAO	
bloquearAvaliacao(bloco);

function bloquearAvaliacao(modulo){

	if(doLMSGetValue("cmi.objectives." + (modulo - 1) + ".status") == "completed"){
		$(".stars, stars *").attr("disabled", " ");
		$("textarea").attr("disabled", " ");
		$("#enviarResposta").attr("disabled", " ");
	}
	
}

// FECHAR SCORM
$("#btnFecharScorm").click(function(){
//STATUS "COMPLETED" SCORM
	var status = doLMSGetValue("cmi.core.lesson_status");
	
	if(status != "completed"){ alert(1)
		window.parent.close();
	}
});
