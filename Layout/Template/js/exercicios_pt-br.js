var url = window.location.href;
var pagina = url.split("/")[url.split("/").length - 1].split(".")[0];
var paginaeidioma = pagina.split("_");
var blocoesecao = paginaeidioma[0].split("de");
var bloco = blocoesecao[0];
var secao = blocoesecao[1];

var suspendData = doLMSGetValue("cmi.suspend_data");

// FUNÇÃO SE SUSPENDDATA FOR VAZIO
$(function () {
  if (suspendData == "") {
    var suspendBlocos = "";
    var suspendPerguntas = "";
    var suspendSecoes = "";

    for (a = 0; a < json.bloco.length; a++) {
      for (b = 0; b < json.bloco[a].secao.length; b++) {
        for (c = 0; c < json.bloco[a].secao[b].perguntas.length; c++) {
          if (c == 0) {
            suspendPerguntas += "0";
          } else {
            suspendPerguntas += ",0";
          }
        }

        if (b == 0) {
          suspendSecoes += "{" + suspendPerguntas + "}";
        } else {
          suspendSecoes += "/{" + suspendPerguntas + "}";
        }

        suspendPerguntas = "";
      }

      if (a == 0) {
        suspendBlocos += "(" + suspendSecoes + ")";
      } else {
        suspendBlocos += ";(" + suspendSecoes + ")";
      }

      suspendSecoes = "";

      suspendData += suspendBlocos;

      suspendBlocos = "";
    }

    doLMSSetValue("cmi.suspend_data", suspendData);
    doLMSCommit();
  }
});

var progressoSecao = 0;
var totalAcertosSecao = 0;

function calcularProgressoSecao() {
  var sB = suspendData.split(";"); // SEPARAR BLOCOS
  var sS = sB[bloco - 1].split("/"); // PEGAR SEÇÃO
  var sP = sS[secao - 1]; // PEGAR EXERCÍCIOS
  //if(sP == undefined){sP = ""};
  var sE = sP.replace(/[()]/g, "").replace(/[{}]/g, "").split(","); //EXERCÍCIOS

  var contador = 0;
  var acertos = 0;
  for (i = 0; i < sE.length; i++) {
    if (sE[i] != "0" && sE[i] != "") {
      contador++;
      // $("[data-pergunta=p" + i + "] *").attr("disabled").off('click');
      $("[data-pergunta=p" + i + "] *")
        .attr("disabled", "disabled")
        .off("click");
    }

    if (sE[i] == "1") {
      acertos++;
    }
  }

  progressoSecao = Math.round((contador / sE.length) * 100);
  totalAcertosSecao = Math.round((acertos / sE.length) * 100);

  $("#progresso-exercicios").html(progressoSecao + "%");
  $("#progresso-acertos").html(totalAcertosSecao + "%");

  calcularProgressoGeral();
}

function calcularProgressoGeral() {
  var contadorGeral = 0;
  var sD = suspendData
    .replace(/[()]/g, "")
    .replace(/[{}]/g, "")
    .replace(/[/;]/g, ",")
    .split(",");

  for (s = 0; s < sD.length; s++) {
    if (sD[s] != 0) {
      contadorGeral++;
    }
  }

  var totalGeral = Math.round((contadorGeral / sD.length) * 100);

  //STATUS "COMPLETED" SCORM
  var status = doLMSGetValue("cmi.core.lesson_status");

  if (status != "completed" && totalGeral >= 100) {
    doLMSSetValue("cmi.core.lesson_status", "completed");
    doQuit();
  }
}

//carregarExercicios();

// FUNÇÃO RENDERIZAR QUESTIONÁRIO NA PÁGINA
//function carregarExercicios(){

var vB = bloco - 1;
var vS = secao - 1;

var html = "";
for (var i = 0; i < json.bloco[vB].secao[vS].perguntas.length; i++) {
  html +=
    "<h4>" +
    json.bloco[vB].secao[vS].perguntas[i].titulo +
    "</h4>";

  html +=
    '<div class="collection" style="overflow:unset; border: none;" data-pergunta=p' +
    i +
    ">";

  // Para cada questão, renderiza as alternativas de acordo com o tipo da questão setada no blocos_pt-br-t2k.js
  for (var j = 0; j < json.bloco[vB].secao[vS].perguntas[i].questao.length;
    j++) {
    let typeOfQuestion = json.bloco[vB].secao[vS].perguntas[i].tipo
    console.log(typeOfQuestion)
    switch (typeOfQuestion) {
      case "trueorfalse":
        html += `
                              <div class="py-2">
                                <div class="mx-3">
                                <div class="row border align-items-center rounded">
                                    <div class="col-lg-8 ">
                                        <p class="pt-3">${json.bloco[vB].secao[vS].perguntas[i].questao[j].alternativa}</p>
                                    </div>
                                    <div class="col-lg-4 align-items-center">
                                    <div class="row">
                                        <div class="col-lg-6 ">
                                            <div class="list-group list-group-radio d-grid gap-2">
                                                <div class="position-relative ">
                                                  <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" name="grupo${i + 1}_${j + 1}" type="radio" data-questionario="${i + 1}" data-alternativa="a${j + 1}" id="alt${j + 1}" value="true" />
                                                    <label class="list-group-item py-3 pe-5" for="alt${j + 1}">
                                                        <strong class="fw-semibold">Verdadeira</strong>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="col-lg-6 pb-5">
                                        <div class="list-group list-group-radio d-grid gap-2 pb-2">
                                            <div class="position-relative">
                                                 <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" name="grupo${i + 1}_${j + 1}" type="radio" data-questionario="${i + 1}" data-alternativa="a${j + 1}" id="alt${j + 10}" value="false" />
                                                  <label class="list-group-item py-3 pe-5" for="alt${j + 10}">
                                                    <strong class="fw-semibold">Falsa</strong>
                                                  </label>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                       
                                <div class="mx-auto py-2">
                                <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="erro" class="fbk-resposta fbk-box-1 mt-3">
                                  <p class="pt-3"><i class="bi bi-x-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbacknegativo}</p>
                                </div>
                                <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="acerto" class="fbk-resposta fbk-box-2 mt-3">
                                  <p class="pt-3"><i class="bi bi-check-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbackpositivo}</p>
                                </div>
                             </div>
                              </div>
                               </div>
                            

                  
                  `;
        // <button class="collection-item border rounded py-3 uk-button-default">
        // <div class="row">
        //   <div class="col-lg-7 d-flex justify-content-start">
        //     <p class="pt-3">${json.bloco[vB].secao[vS].perguntas[i].questao[j].alternativa}</p>
        //   </div>
        //   <div class="col-lg-5 d-flex justify-content-center gap-4">
        //     <div class="col-6">
        //       <label class="d-flex border rounded p-2 justify-content-center gap-3" for"alt${j + 1}">
        //         <input name="grupo${i + 1}_${j + 1}" type="radio" data-questionario="${i + 1}" data-alternativa="a${j + 1}" id="alt${j + 1}" value="true" />
        //         <span style=""><strong>Verdadeira</strong></span>
        //       </label>
        //     </div>
        //     <div class="col-6">
        //       <label class="d-flex border rounded p-2 justify-content-center gap-3" for"alt${j + 1}">
        //         <input name="grupo${i + 1}_${j + 1}" type="radio" data-questionario="${i + 1}" data-alternativa="a${j + 1}" id="alt${j + 1}" value="false" />
        //         <span style=""><strong>Falsa</strong></span>
        //       </label>
        //     </div>
        //   </div>
        //   <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="erro" class="fbk-resposta fbk-box-1 mt-3">
        //     <p class="pt-3"><i class="bi bi-x-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbacknegativo}</p>
        //   </div>
        //   <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="acerto" class="fbk-resposta fbk-box-2 mt-3">
        //     <p class="pt-3"><i class="bi bi-check-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbackpositivo}</p>
        //   </div>
        //   </div >
        // </button >
        break;
      case "multiple":
        html += `
                  <button class="collection-item uk-button-default border rounded p-3 my-2">
                     <p class="pt-3"><label class="d-flex gap-4 w-100 h-100"for="alt${j + 1}">
                      <input class="checkmark" type="checkbox" data-questionario="${i + 1}" data-alternativa="a${j + 1}" id="alt${j + 1}">
                      <span>${String.fromCharCode(j + 1 + 8)}${json.bloco[vB].secao[vS].perguntas[i].questao[j].alternativa}</span>
                    </label></p>
                    <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="erro" class="fbk-resposta fbk-box-1">
                      <p class="pt-3"><i class="bi bi-x-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbacknegativo}</p>
                    </div>
                    <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="acerto" class="fbk-resposta fbk-box-2">
                      <p class="pt-3"><i class="bi bi-check-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbackpositivo}</p>
                    </div>
                  </button>`;
        break;
      case "checkbox":
        let enunciado = String.fromCharCode(j + 1 + 8);
        console.log(enunciado);
        html += `
          <button class="collection-item border rounded py-3 my-2 uk-button-default">
            <label>
             <p class="pt-3"><input name="grupo${i + 1}" type="radio" data-questionario="${i + 1}" data-alternativa="a${j + 1}">
              ${json.bloco[vB].secao[vS].perguntas[i].questao[j].alternativa}</p>
            </label>
            <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="erro" class="mt-4 fbk-resposta fbk-box-1">
              <p class="pt-3"><i class="bi bi-x-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbacknegativo}</p>
            </div>
            <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="acerto" class="mt-4 fbk-resposta fbk-box-2">
              <p class="pt-3"><i class="bi bi-check-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbackpositivo}</p>
            </div>
          </button>
          `;
        break;
      case "combobox":
        // CLASSE PARA MOBILE
        if (screen.width < 1025) {
          classe_css = "browser-default";
        } else {
          classe_css = "";
        }
        // Insere as alternativas com os selects.
        html += `
        <div class="collection-item border rounded p-3 my-2 uk-button-default">
          <div class="row">
            <div class="col-md-10 col-sm-10 col-lg-10 px-3">
              <p class="pt-3">${json.bloco[vB].secao[vS].perguntas[i].questao[j].alternativa}</p>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-2 p-2">
              <select data-questionario="${i + 1}" data-alternativa="a${j + 1}" class="form-select">
                <option class="uk-text-secondary" value="" disabled selected>Selecione</option>`;

        // For que faz o split das opções e insere os valores dentro do select.
        for (let l = 0; l < json.bloco[vB].secao[vS].perguntas[i].opcoes.split(",").length; l++) {
          html += `
        <option class="uk-text-secondary" value="${json.bloco[vB].secao[vS].perguntas[i].opcoes.split(",")[l]}">
          ${json.bloco[vB].secao[vS].perguntas[i].opcoes.split(",")[l]}
        </option>`;
        }

        // Continua a inserção das alternativas após o for que inplementa as options do select.
        html += `
            </select>
            </div>
            </div>
            <div class="d-flex justify-content-between  col-lg-12">
            <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="erro" class="mt-4 ms-2 fbk-resposta fbk-box-1">
              <p class="pt-3"><i class="bi bi-x-circle"></i> ${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbacknegativo}</p>
            </div>
            <div data-questionario="${i + 1}" data-alternativa="a${j + 1}" data-feedback="acerto" class="mt-4 fbk-resposta fbk-box-2">
               <p class="pt-3"><i class="bi bi-check-circle"></i>${json.bloco[vB].secao[vS].perguntas[i].questao[j].feedbackpositivo}</p>
            </div>
          </div>
        </div>`;
        break;
      default:
        console.log("there is an error in the exercises.")
    }
  }

  html += `
    <div class="d-grid gap-2 col-md-2 mx-auto rounded-2">
      <button class="py-3 rounded-2 uk-button-default my-5 border" type="button" onclick="validarQuestionario('${json.bloco[vB].secao[vS].perguntas[i].tipo}', ${vB}, ${vS}, ${i})">Verificar Resposta</button>
    </div>
  `;

  html += `</div>`;
}

$(".exercicios .row").append(html);

calcularProgressoSecao();

//FUNÇÃO VALIDAR EXERCÍCIOS

function validarQuestionario(tipo, vBloco, vSecao, questionario) {
  if (
    tipo == "multiple" &&
    $("[data-questionario=" + (questionario + 1) + "]:checked").length == 0
  ) {
    Alert.render(
      "Selecione ao menos uma alternativa para verificar a sua resposta."
    );
    return false;
  }

  if (
    tipo == "checkbox" &&
    $("[data-questionario=" + (questionario + 1) + "]:checked").length == 0
  ) {
    Alert.render(
      "Selecione ao menos uma alternativa para verificar a sua resposta."
    );
    return false;
  }

  if (tipo == "combobox") {
    for (
      a = 0;
      a <
      json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao.length;
      a++
    ) {
      validarAlternativa = $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa=a" +
        (a + 1) +
        "]"
      ).val();
      if (validarAlternativa === undefined || validarAlternativa === null) {
        Alert.render(
          "Selecione as alternativas para verificar a sua resposta."
        );
        return false;
      }
    }
  }

  if (tipo == "trueorfalse") {
    if (
      $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa]:checked"
      ).length !=
      json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao.length
    ) {
      Alert.render("Selecione as alternativas para verificar a sua resposta.");
      return false;
    }
  }

  var contagem = 0;

  for (
    i = 0;
    i < json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao.length;
    i++
  ) {
    if (tipo == "combobox") {
      respostaAluno = $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa=a" +
        (i + 1) +
        "]"
      ).val();
    } else {
      respostaAluno = $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa=a" +
        (i + 1) +
        "]"
      ).is(":checked");
    }

    if (tipo == "combobox") {
      respostaExercicio =
        json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao[i]
          .resposta;

      // LIMPAR FEEDBACKS
      $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa=a" +
        (i + 1) +
        "][data-feedback=erro]"
      ).css("display", "none");
      $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa=a" +
        (i + 1) +
        "][data-feedback=acerto]"
      ).css("display", "none");

      if (respostaAluno == respostaExercicio) {
        contagem++;
        $(
          "[data-questionario=" +
          (questionario + 1) +
          "][data-alternativa=a" +
          (i + 1) +
          "][data-feedback=erro]"
        ).css("display", "none");
        $(
          "[data-questionario=" +
          (questionario + 1) +
          "][data-alternativa=a" +
          (i + 1) +
          "][data-feedback=acerto]"
        ).css("display", "block");
      } else {
        $(
          "[data-questionario=" +
          (questionario + 1) +
          "][data-alternativa=a" +
          (i + 1) +
          "][data-feedback=erro]"
        ).css("display", "block");
      }

      calculo = Math.round(
        (contagem /
          json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao
            .length) *
        100
      );
    }
  }

  if (tipo == "multiple") {
    $.each(
      json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao,
      function (index, value) {
        if (
          $(
            "[data-questionario=" +
            (questionario + 1) +
            "][data-alternativa=a" +
            (index + 1) +
            "]"
          ).is(":checked") == value.resposta
        ) {
          contagem++;
          $(
            "[data-questionario=" +
            (questionario + 1) +
            "][data-alternativa=a" +
            (index + 1) +
            "][data-feedback=acerto]"
          ).css("display", "block");
        } else {
          $(
            "[data-questionario=" +
            (questionario + 1) +
            "][data-alternativa=a" +
            (index + 1) +
            "][data-feedback=erro]"
          ).css("display", "block");
        }
      }
    );

    calculo = Math.round(
      (contagem /
        json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao
          .length) *
      100
    );
  }

  if (tipo == "checkbox") {
    $(
      "[data-questionario=" + (questionario + 1) + "][data-feedback=acerto]"
    ).css("display", "none");
    $("[data-questionario=" + (questionario + 1) + "][data-feedback=erro]").css(
      "display",
      "block"
    );

    respostaAluno = $("[data-questionario=" + (questionario + 1) + "]:checked")
      .data("alternativa")
      .replace("a", "");

    if (
      json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao[
        respostaAluno - 1
      ].resposta == true
    ) {
      calculo = 100;
      $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa=a" +
        respostaAluno +
        "][data-feedback=erro]"
      ).css("display", "none");
      $(
        "[data-questionario=" +
        (questionario + 1) +
        "][data-alternativa=a" +
        respostaAluno +
        "][data-feedback=acerto]"
      ).css("display", "block");
    } else {
      $.each(
        json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao,
        function (index, value) {
          calculo = 0;
          if (value.resposta == true) {
            $(
              "[data-questionario=" +
              (questionario + 1) +
              "][data-alternativa=a" +
              (index + 1) +
              "][data-feedback=erro]"
            ).css("display", "none");
            $(
              "[data-questionario=" +
              (questionario + 1) +
              "][data-alternativa=a" +
              (index + 1) +
              "][data-feedback=acerto]"
            ).css("display", "block");
          }
        }
      );
    }
  }

  if (tipo == "trueorfalse") {
    $(
      "[data-questionario=" + (questionario + 1) + "][data-feedback=acerto]"
    ).css("display", "none");
    $("[data-questionario=" + (questionario + 1) + "][data-feedback=erro]").css(
      "display",
      "block"
    );

    $.each(
      json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao,
      function (index, value) {
        respostaExercicio = value.resposta.toString();
        respostaAluno = $(
          "[data-questionario=" +
          (questionario + 1) +
          "][data-alternativa=a" +
          (index + 1) +
          "]:checked"
        ).val();

        if (respostaExercicio == respostaAluno) {
          contagem++;
          $(
            "[data-questionario=" +
            (questionario + 1) +
            "][data-alternativa=a" +
            (index + 1) +
            "][data-feedback=erro]"
          ).css("display", "none");
          $(
            "[data-questionario=" +
            (questionario + 1) +
            "][data-alternativa=a" +
            (index + 1) +
            "][data-feedback=acerto]"
          ).css("display", "block");
        }
      }
    );

    calculo = Math.round(
      (contagem /
        json.bloco[vBloco].secao[vSecao].perguntas[questionario].questao
          .length) *
      100
    );
  }

  if (calculo == 100) {
    atualizarSuspendData(questionario, 1);
  } else {
    atualizarSuspendData(questionario, 2);
  }

  calcularProgressoSecao();

  progressoTotal();
  //REMOVER
  //atualizarSuspendData(questionario, 0);
}

function atualizarSuspendData(questionario, valor) {
  // varáivel valor 1 = acerto e 2 = erro
  var sDB = bloco - 1;
  var sDS = secao - 1;
  var sDP = questionario;

  var sDQtdB = suspendData.split(";").length - 1;
  var sDQtdS = suspendData.split(";")[sDB].split("/").length - 1;
  var sDQtdP =
    suspendData.split(";")[sDB].split("/")[sDS].split(",").length - 1;

  sbloco = suspendData.split(";")[sDB].split("/")[sDS];
  questoes = sbloco.replace(/[()]/g, "").replace(/[{}]/g, "");
  valorQuestao = questoes.split(",")[questionario];

  totalQuestoes = questoes.split(",").length;

  var novoBloco = "";

  if (valorQuestao != valor) {
    //INÍCIO DO NOVO BLOCO
    if (sDS == 0) {
      novoBloco += "({";
    } else {
      novoBloco += "{";
    }

    //CONSTRUÇÃO RESPOSTAS DO BLOCO
    for (i = 0; i <= sDQtdP; i++) {
      if (i == questionario) {
        novoValor = valor;
      } else {
        novoValor = questoes.split(",")[i];
      }

      if (i == 0) {
        novoBloco += novoValor;
      } else {
        novoBloco += "," + novoValor;
      }
    }

    //FIM DO NOVO BLOCO
    if (sDS == sDQtdS) {
      novoBloco += "})";
    } else {
      novoBloco += "}";
    }

    var novosuspendData = "";
    for (z = 0; z <= sDQtdB; z++) {
      if (z > 0) {
        novosuspendData += ";";
      }

      for (w = 0; w <= suspendData.split(";")[z].split("/").length - 1; w++) {
        if (w == sDS && z == sDB) {
          novosuspendData += novoBloco;
        } else {
          novosuspendData += suspendData.split(";")[z].split("/")[w];
        }

        if (w != suspendData.split(";")[z].split("/").length - 1) {
          novosuspendData += "/";
        }
      }
      //alert(novosuspendData);
    }
    suspendData = novosuspendData;

    doLMSSetValue("cmi.suspend_data", suspendData);
    doLMSCommit();
    //alert(suspendData);
  }
}

//VERTIFICAR RESPOSTAS
function validarEtapa2() {
  if ($("#etapa2 input").is(":checked")) {
    $("#resposta_teste").modal("open");
  } else {
    $("#modal-warning").modal("open");
  }
}

function validarEtapa3() {
  if ($("#etapa3 input").is(":checked")) {
    $("#resposta2_teste").modal("open");
  } else {
    $("#modal-warning2").modal("open");
  }
}
