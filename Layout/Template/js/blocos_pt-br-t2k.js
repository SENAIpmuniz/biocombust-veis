var json = {
  /* BLOCOS */
  bloco: [
    //INÍCIO BLOCO 1
    {
      imagem: "Layout/Template/img/imagem-modulo1.jpg",
      nome_modulo: "MÓDULO 1",
      titulo_modulo: "",
      qtd_exercicios: "",
      qtd_aula: "",
      alt_imagem: "Biocombustivel imagem modulo 1",
      // SEÇÕES
      secao: [
        //MOD 1 - AULA 1
        {
          nome_aula: "AULA 1",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1 ESCOLHA UNICA
            {
              titulo:
                "<strong>1.</strong> A matriz energética tem um importante papel na sociedade e no desenvolvimento econômico de um país. Dessa forma, podemos dizer que ela é:",
              tipo: "checkbox",
              questao: [
                {
                  alternativa:
                    "<strong>A)</strong> um somatório de todas as fontes de energia utilizadas para suprir as necessidades de uma região, um país e até de alguns setores específicos da economia.",
                  resposta: true,
                  feedbackpositivo:
                    "Isso mesmo! Você selecionou a alternativa correta.",
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>B)</strong> a quantidade de energia elétrica disponível em uma região ou país.",
                  resposta: false,
                  feedbackpositivo:
                    "Isso mesmo! Você selecionou a alternativa correta.",
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>C)</strong> a quantidade de combustíveis disponíveis em uma região ou país.",
                  resposta: false,
                  feedbackpositivo:
                    "Isso mesmo! Você selecionou a alternativa correta.",
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
              ],
              tentativas: 0,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
            // PERGUNTA 2 COMBOBOX
            {
              titulo:
                "<strong>2.</strong> Os programas de incentivo ao uso de energias renováveis são muito importantes para a transição da matriz energética brasileira. Diante do exposto, relacione os programas de incentivo a seguir com suas respectivas definições.",
              tipo: "combobox",
              opcoes:
                "Lei do Bem,Lei n° 9.991/2000,Programa de Incentivo às Fontes Alternativas de Energia (Proinfa),Regime Especial de Incentivos para o Desenvolvimento da Infraestrutura (Reidi)",
              questao: [
                {
                  alternativa:
                    "<strong>A) </strong> Promove o uso de fontes renováveis, como eólica, solar e biomassa. ",
                  resposta: "Programa de Incentivo às Fontes Alternativas de Energia (Proinfa)",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:# ",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },

                {
                  alternativa:
                    "<strong>B) </strong> Oferece incentivos fiscais a empresas que investem em P&D de energias renováveis.",
                  resposta: "Lei do Bem",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:#",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
                {
                  alternativa:
                    "<strong>C) </strong> Estabelece que as distribuidoras de energia destinem um percentual da sua receita para programas de eficiência energética. ",
                  resposta: "Lei n° 9.991/2000",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é: Ipsom.",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
                {
                  alternativa:
                    "<strong>D) </strong> Oferece isenção de PIS/PASEP e COFINS na aquisição de bens e serviços para projetos de infraestrutura envolvendo energias renováveis.",
                  resposta: "Regime Especial de Incentivos para o Desenvolvimento da Infraestrutura (Reidi)",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:#",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
              ],
              tentativas: 0,
              feedbackCorreto:
                "Isso mesmo! Você fez a correspondência de maneira correta.",
              feedbackIncorreto1:
                "Você não fez a correspondência de maneira correta. ",
              feedbackIncorreto2:
                "Você não fez a correspondência de maneira correta.",
            },
            // PERGUNTA 3 VERDADEIRO OU FALSO
            {
              titulo:
                "<strong>3.</strong> 	Indique verdadeiro ou falso para as afirmações a seguir. (Vadadeira ou falsa)",
              tipo: "trueorfalse",
              questao: [
                {
                  alternativa:
                    "<strong>A) </strong>Após a Segunda Revolução Industrial, passamos a utilizar mais combustíveis fósseis como recurso energético.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas A, C e D são verdadeiras.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a B.",
                },
                {
                  alternativa:
                    "<strong>B) </strong>Podemos dizer que combustíveis como a gasolina e o óleo diesel são formas de energia limpa, pois são produzidas por recursos renováveis.",
                  resposta: false,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas A, C e D são verdadeiras.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a B.",
                },
                {
                  alternativa:
                    "<strong>C) </strong>O programa Proálcool teve como objetivo promover o uso do etanol como combustível, visando reduzir a dependência de combustíveis fósseis e enfrentar a crise energética relacionada ao petróleo.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas A, C e D são verdadeiras.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a B.",
                },
                {
                  alternativa:
                    "<strong>D) </strong>Os  benefícios promovidos pelas mudanças em nossa matriz energética são: crescimento econômico em setores relacionados à geração de energias renováveis, energia mais “limpa” e novos postos de trabalho.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas A, C e D são verdadeiras.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a B.",
                },
              ],
              // tentativas: 1,
              // feedbackCorreto:
              //   "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental",
              // feedbackIncorreto1:
              //   "Tente Novamente",
              // feedbackIncorreto2:
              //   "Resposta incorreta. As respostas corretas são: #",
            },
          ],
        },
        //MOD 1 - AULA 2
        {
          nome_aula: "AULA 2",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Assinale a alternativa correta a respeito das tecnologias emergentes em biocombustíveis.",
              tipo: "checkbox",
              questao: [
                {
                  alternativa:
                    "<strong>A)</strong> As tecnologias emergentes não visam melhorar a eficiência da produção de biocombustíveis.",
                  resposta: false,
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>B)</strong> A pirólise é um exemplo de tecnologia emergente que envolve a conversão da biomassa na presença de oxigênio.",
                  resposta: false,
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>C)</strong> As biorrefinarias integradas são exemplos de tecnologias emergentes que permitem a produção de uma variedade de produtos de alto valor, incluindo biocombustíveis, produtos químicos e materiais.",
                  resposta: true,

                  feedbackpositivo:
                    "Isso mesmo! Você selecionou a alternativa correta.",
                },
              ],
              tentativas: 0,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Relacione as tecnologias emergentes no contexto dos biocombustíveis às suas respectivas definições.",
              tipo: "combobox",
              opcoes: "Captura e armazenamento de carbono (CAC),Gaseificação, Hidrólise,Liquefação,Pirólise,Reaproveitamento de resíduos em biocombustíveis,Reciclagem de nutrientes",
              questao: [
                {
                  alternativa:
                    "<strong>A) </strong> Ferramenta crucial na redução das emissões de dióxido de carbono na atmosfera, envolvendo três etapas: captura, armazenamento e transporte do CO2. ",
                  resposta: "Captura e armazenamento de carbono (CAC)",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:# ",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },

                {
                  alternativa:
                    "<strong>B) </strong> Desempenha um papel crucial na produção sustentável de biocombustíveis, transformando resíduos orgânicos em fontes de energia renovável.",
                  resposta: "Reaproveitamento de resíduos em biocombustíveis",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:#",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
                {
                  alternativa:
                    "<strong>C) </strong> Contribui para a produção sustentável de biocombustíveis, reutilizando nutrientes retirados do solo durante o cultivo de biomassa.",
                  resposta: "Reciclagem de nutrientes",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é: Ipsom.",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
                {
                  alternativa:
                    "<strong>D) </strong> Conversão térmica da biomassa na ausência de oxigênio ou com uma quantidade limitada de oxigênio, resultando na formação de bio-óleo, biocarvão e gás de síntese.",
                  resposta: "Pirólise",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:#",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
                {
                  alternativa:
                    "<strong>E) </strong> Conversão da biomassa em gás de síntese a temperaturas elevadas, podendo ser transformado em biocombustíveis como hidrogênio.",
                  resposta: "Gaseificação",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:#",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
                {
                  alternativa:
                    "<strong>F) </strong> Processo de transformação de biomassa em líquidos combustíveis, como biocombustíveis sintéticos, líquidos ou biodiesel.",
                  resposta: "Liquefação",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:#",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
                {
                  alternativa:
                    "<strong>G) </strong> Utilização de enzimas ou ácidos para quebrar a biomassa em açúcares fermentáveis, posteriormente fermentados para produzir biocombustíveis como o etanol.",
                  resposta: "Hidrólise",
                  feedbacknegativo:
                    "Você não selecionou a opção correta. A resposta é:#",
                  feedbackpositivo: "Parabéns, resposta correta!",
                },
              ],
              tentativas: 0,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
            // PERGUNTA 3 VERDADEIRO OU FALSO
            {
              titulo:
                "<strong>3.</strong> 	Na cadeia de valor dos biocombustíveis, todos os resíduos gerados durante o processo de produção são completamente eliminados, sem nenhum reaproveitamento. Esta afirmação é: ",
              tipo: "trueorfalse",
              questao: [
                {
                  alternativa:
                    "<strong>A) </strong>Após a Segunda Revolução Industrial, passamos a utilizar mais combustíveis fósseis como recurso energético.",
                  resposta: false,
                  feedbacknegativo:
                    "Resposta incorreta. A afirmação é falsa, pois, na cadeia de valor dos biocombustíveis, os resíduos gerados durante o processo de produção são frequentemente reaproveitados para diferentes fins, como a geração de energia adicional, a produção de fertilizantes orgânicos ou até mesmo a fabricação de outros produtos.0",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. Isso mesmo! A afirmação é falsa, pois, na cadeia de valor dos biocombustíveis, os resíduos gerados durante o processo de produção são frequentemente reaproveitados para diferentes fins, como a geração de energia adicional, a produção de fertilizantes orgânicos ou até mesmo a fabricação de outros produtos.",
                },
              ],
            },
          ],
        },
        //MOD 1 - AULA 3
        {
          nome_aula: "AULA 3",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Por qual motivo o dióxido de carbono (CO2) é considerado um dos geradores do efeito estufa?",
              tipo: "checkbox",
              questao: [
                {
                  alternativa:
                    "<strong>A)</strong> Por reagir com outros compostos poluentes e formar o gás CO<sub>2</sub>.",
                  resposta: false,
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>B)</strong> Por reter os raios solares refletidos pelas nuvens, pelo gelo e por superfícies brilhantes.",
                  resposta: true,
                  feedbackpositivo:
                    "Isso mesmo! Você selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>C)</strong> Por participar do processo de formação de biocombustíveis ",
                  resposta: false,
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
              ],
              tentativas: 0,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Os gases do efeito estufa têm associados a eles suas respectivas fórmulas. Com base no que você aprendeu nesta aula, relacione as colunas a seguir, associado os gases às suas respectivas definições.",
              tipo: "combobox",
              opcoes: "Metano (CH4),Vapor de água (H2O),Óxido Nitroso (N2O),Dióxido de Carbono (CO2)",
              questao: [
                {
                  alternativa:
                    "<strong>A) </strong> Emitido pela decomposição de matéria orgânica em condições anaeróbicas, como em pântanos, aterros sanitários e digestão animal, e pela produção de combustíveis fósseis.",
                  resposta: "Metano (CH4)",
                  feedbacknegativo:
                    "Você não fez a correspondência de maneira correta. ",
                  feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta. ",
                },

                {
                  alternativa:
                    "<strong>B) </strong> Emitido principalmente pela queima de combustíveis fósseis (carvão, petróleo, gás natural).",
                  resposta: "Dióxido de Carbono (CO2)",
                  feedbacknegativo:
                    "Você não fez a correspondência de maneira correta. ",
                  feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta. ",
                },
                {
                  alternativa:
                    "<strong>C) </strong> Suas emissões não estão diretamente ligadas à atividade humana, mas sim a processos naturais do ciclo da água (evaporação e condensação).",
                  resposta: "Vapor de água (H2O)",
                  feedbacknegativo:
                    "Você não fez a correspondência de maneira correta. ",
                  feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta. ",
                },
                {
                  alternativa:
                    "<strong>D) </strong> Emitido principalmente por agriculturas que utilizam os chamados fertilizantes nitrogenados e de processos industriais.",
                  resposta: "Óxido Nitroso (N2O)",
                  feedbacknegativo:
                    "Você não fez a correspondência de maneira correta. ",
                  feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta. ",
                },
              ],
              tentativas: 0,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
            // PERGUNTA 3 VERDADEIRO OU FALSO
            {
              titulo:
                "<strong>3.</strong> 	Na cadeia de valor dos biocombustíveis, todos os resíduos gerados durante o processo de produção são completamente eliminados, sem nenhum reaproveitamento. Esta afirmação é: ",
              tipo: "trueorfalse",
              questao: [
                {
                  alternativa:
                    "<strong>A) </strong>O efeito estufa acontece naturalmente e contribui para as condições de vida na Terra.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas. ",
                },
                {
                  alternativa:
                    "<strong>B) </strong>Os CFCs são gases utilizados na gaseificação de bebidas e, quando chegam na atmosfera, se transformam em vapor de água.",
                  resposta: false,
                  feedbacknegativo:
                    "Resposta incorreta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas. ",
                },
                {
                  alternativa:
                    "<strong>C) </strong>O gás dióxido de carbono está entre os principais gases causadores do efeito estufa.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas. ",
                },
                {
                  alternativa:
                    "<strong>D) </strong>Para que não ocorra o efeito estufa, os raios solares devem ficar 100% retidos na atmosfera.",
                  resposta: false,
                  feedbacknegativo:
                    "Resposta incorreta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas.",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. Alternativas A e C são verdadeiras. Alternativas B e D são falsas. ",
                },
              ],
            },
          ],
        },
      ],
    },
    //INÍCIO BLOCO 2
    {
      imagem: "Layout/Template/img/imagem-modulo2.jpg",
      nome_modulo: "MÓDULO 2",
      titulo_modulo: "",
      qtd_exercicios: "",
      qtd_aula: "",
      alt_imagem: "Biocombustivel imagem modulo 2",
      // SEÇÕES
      secao: [
        // INÍCIO SEÇÃO 2
        {
          nome_aula: "AULA 1",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Assinale a alternativa correta a respeito das tecnologias emergentes em biocombustíveis.",
              tipo: "checkbox",
              questao: [
                {
                  alternativa:
                    "<strong>A)</strong> As tecnologias emergentes não visam melhorar a eficiência da produção de biocombustíveis.",
                  resposta: false,
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>B)</strong> A pirólise é um exemplo de tecnologia emergente que envolve a conversão da biomassa na presença de oxigênio.",
                  resposta: false,
                  feedbacknegativo:
                    "Você não selecionou a alternativa correta.",
                },
                {
                  alternativa:
                    "<strong>C)</strong> As biorrefinarias integradas são exemplos de tecnologias emergentes que permitem a produção de uma variedade de produtos de alto valor, incluindo biocombustíveis, produtos químicos e materiais.",
                  resposta: true,

                  feedbackpositivo:
                    "Isso mesmo! Você selecionou a alternativa correta.",
                },
              ],
              tentativas: 0,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
        {
          nome_aula: "AULA 2",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Aspectos ambientais são elementos que interagem ou podem interagir com o meio ambiente. Os impactos ambientais ocorrem quando aspectos ambientais provocam mudanças integrais ou parciais e positivas ou negativas no meio ambiente. Associe as definições corretamente, indicando se a opção corresponde a um aspecto ambiental ou a um impacto ambiental.",
              tipo: "combobox",
              opcoes: "Impacto ambiental,Aspecto ambiental",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>Escassez de recursos naturais não renováveis.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>B. </strong>Emissão de gases de efeito estufa.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>C. </strong>Intensificação do aquecimento global.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa: "<strong>D. </strong>Uso de papel reciclado.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
        {
          nome_aula: "AULA 3",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Aspectos ambientais são elementos que interagem ou podem interagir com o meio ambiente. Os impactos ambientais ocorrem quando aspectos ambientais provocam mudanças integrais ou parciais e positivas ou negativas no meio ambiente. Associe as definições corretamente, indicando se a opção corresponde a um aspecto ambiental ou a um impacto ambiental.",
              tipo: "combobox",
              opcoes: "Impacto ambiental,Aspecto ambiental",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>Escassez de recursos naturais não renováveis.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>B. </strong>Emissão de gases de efeito estufa.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>C. </strong>Intensificação do aquecimento global.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa: "<strong>D. </strong>Uso de papel reciclado.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
      ],
    },
    //INÍCIO BLOCO 3
    {
      imagem: "Layout/Template/img/imagem-modulo3.jpg",
      nome_modulo: "MÓDULO 3",
      titulo_modulo: "",
      qtd_exercicios: "",
      qtd_aula: "",
      alt_imagem: "Biocombustivel imagem modulo 3",
      // SEÇÕES
      secao: [
        // INÍCIO SEÇÃO 2
        {
          nome_aula: "AULA 1",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Aspectos ambientais são elementos que interagem ou podem interagir com o meio ambiente. Os impactos ambientais ocorrem quando aspectos ambientais provocam mudanças integrais ou parciais e positivas ou negativas no meio ambiente. Associe as definições corretamente, indicando se a opção corresponde a um aspecto ambiental ou a um impacto ambiental.",
              tipo: "combobox",
              opcoes: "Impacto ambiental,Aspecto ambiental",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>Escassez de recursos naturais não renováveis.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>B. </strong>Emissão de gases de efeito estufa.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>C. </strong>Intensificação do aquecimento global.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa: "<strong>D. </strong>Uso de papel reciclado.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
        {
          nome_aula: "AULA 2",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Aspectos ambientais são elementos que interagem ou podem interagir com o meio ambiente. Os impactos ambientais ocorrem quando aspectos ambientais provocam mudanças integrais ou parciais e positivas ou negativas no meio ambiente. Associe as definições corretamente, indicando se a opção corresponde a um aspecto ambiental ou a um impacto ambiental.",
              tipo: "combobox",
              opcoes: "Impacto ambiental,Aspecto ambiental",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>Escassez de recursos naturais não renováveis.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>B. </strong>Emissão de gases de efeito estufa.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>C. </strong>Intensificação do aquecimento global.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa: "<strong>D. </strong>Uso de papel reciclado.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
        {
          nome_aula: "AULA 3",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Aspectos ambientais são elementos que interagem ou podem interagir com o meio ambiente. Os impactos ambientais ocorrem quando aspectos ambientais provocam mudanças integrais ou parciais e positivas ou negativas no meio ambiente. Associe as definições corretamente, indicando se a opção corresponde a um aspecto ambiental ou a um impacto ambiental.",
              tipo: "combobox",
              opcoes: "Impacto ambiental,Aspecto ambiental",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>Escassez de recursos naturais não renováveis.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>B. </strong>Emissão de gases de efeito estufa.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>C. </strong>Intensificação do aquecimento global.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa: "<strong>D. </strong>Uso de papel reciclado.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
      ],
    },
    //INÍCIO BLOCO 4
    {
      imagem: "Layout/Template/img/imagem-modulo4.jpg",
      nome_modulo: "MÓDULO 4",
      titulo_modulo: "",
      qtd_exercicios: "",
      qtd_aula: "",
      alt_imagem: "Biocombustivel imagem modulo 4",
      // SEÇÕES
      secao: [
        // INÍCIO SEÇÃO 2
        {
          nome_aula: "AULA 1",
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Marque verdadeiro ou falso para as afirmações a seguir sobre o sistema de produção linear.",
              tipo: "trueorfalse",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>É baseado na lógica de produção extrair-produzir-usar-descartar, ou seja, da matéria-prima para a produção, seguindo para o uso até o descarte.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a c. ",
                },

                {
                  alternativa:
                    "<strong>B. </strong>A necessidade de extração de novas matérias-primas é constante, gerando muitos impactos negativos, como o acúmulo de resíduos sem destinação correta.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns!Resposta correta. A única alternativa falsa é a c. ",
                },

                {
                  alternativa:
                    "<strong>C. </strong>É baseado na lógica de produção extrair-produzir-usar-consertar-reutilizar-reciclar-retornar.",
                  resposta: false,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a c. ",
                },

                {
                  alternativa:
                    "<strong>D. </strong>Promove externalidades ambientais negativas.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns!Resposta correta. A única alternativa falsa é a c. ",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Dentro das externalidades ambientais, temos externalidades positivas e negativas. Externalidades ambientais positivas são benefícios gerados a terceiros por meio da produção ou do uso de um produto ou serviço, e externalidades ambientais negativas são malefícios gerados a terceiros por meio da produção ou do uso de um produto ou serviço, e que não são internalizadas por meio da incorporação nos custos ou por outra forma de compensação. Associe as opções corretamente, indicando se correspondem a uma externalidade ambiental positiva ou negativa.",
              tipo: "combobox",
              opcoes:
                "Externalidade ambiental positiva,Externalidade ambiental negativa",
              questao: [
                {
                  alternativa:
                    "<strong>A.</strong> <strong>Ação</strong>: Uso de automóvel a combustão interna movido a gasolina. <br><strong>Efeito</strong>: Emissão de material particulado que gera impactos à saúde.",
                  resposta: "Externalidade ambiental negativa",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
                {
                  alternativa:
                    "<strong>B.</strong> <strong>Ação</strong>: Estudar e aprender sobre descarbonização. <br><strong>Efeito</strong>: Orienta tomada de decisão para o enfrentamento dos efeitos das mudanças climáticas.",
                  resposta: "Externalidade ambiental positiva",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> <strong>Ação</strong>: Produzir vegetais e frutas utilizando agrotóxicos.<br><strong>Efeito</strong>: Liberação de substâncias adversas que geram alterações nos sistemas do solo e da água.",
                  resposta: "Externalidade ambiental negativa",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
                {
                  alternativa:
                    "<strong>D.</strong> <strong>Ação</strong>: Criação de gado na Amazônia.<br><strong>Efeito</strong>: Desmatamento de florestas nativas da Amazônia, levando a alterações nos regimes de chuva, efeitos na biodiversidade e no aquecimento global.",
                  resposta: "Externalidade ambiental negativa",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
        {
          nome_aula: "AULA 2",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Aspectos ambientais são elementos que interagem ou podem interagir com o meio ambiente. Os impactos ambientais ocorrem quando aspectos ambientais provocam mudanças integrais ou parciais e positivas ou negativas no meio ambiente. Associe as definições corretamente, indicando se a opção corresponde a um aspecto ambiental ou a um impacto ambiental.",
              tipo: "combobox",
              opcoes: "Impacto ambiental,Aspecto ambiental",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>Escassez de recursos naturais não renováveis.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>B. </strong>Emissão de gases de efeito estufa.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>C. </strong>Intensificação do aquecimento global.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa: "<strong>D. </strong>Uso de papel reciclado.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
        {
          nome_aula: "AULA 3",
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Marque verdadeiro ou falso para as afirmações a seguir sobre o sistema de produção linear.",
              tipo: "trueorfalse",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>É baseado na lógica de produção extrair-produzir-usar-descartar, ou seja, da matéria-prima para a produção, seguindo para o uso até o descarte.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a c. ",
                },

                {
                  alternativa:
                    "<strong>B. </strong>A necessidade de extração de novas matérias-primas é constante, gerando muitos impactos negativos, como o acúmulo de resíduos sem destinação correta.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns!Resposta correta. A única alternativa falsa é a c. ",
                },

                {
                  alternativa:
                    "<strong>C. </strong>É baseado na lógica de produção extrair-produzir-usar-consertar-reutilizar-reciclar-retornar.",
                  resposta: false,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns! Resposta correta. A única alternativa falsa é a c. ",
                },

                {
                  alternativa:
                    "<strong>D. </strong>Promove externalidades ambientais negativas.",
                  resposta: true,
                  feedbacknegativo:
                    "Resposta incorreta. As alternativas a, b e d são verdadeiras e a alternativa c é falsa. ",
                  feedbackpositivo:
                    "Parabéns!Resposta correta. A única alternativa falsa é a c. ",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Dentro das externalidades ambientais, temos externalidades positivas e negativas. Externalidades ambientais positivas são benefícios gerados a terceiros por meio da produção ou do uso de um produto ou serviço, e externalidades ambientais negativas são malefícios gerados a terceiros por meio da produção ou do uso de um produto ou serviço, e que não são internalizadas por meio da incorporação nos custos ou por outra forma de compensação. Associe as opções corretamente, indicando se correspondem a uma externalidade ambiental positiva ou negativa.",
              tipo: "combobox",
              opcoes:
                "Externalidade ambiental positiva,Externalidade ambiental negativa",
              questao: [
                {
                  alternativa:
                    "<strong>A.</strong> <strong>Ação</strong>: Uso de automóvel a combustão interna movido a gasolina. <br><strong>Efeito</strong>: Emissão de material particulado que gera impactos à saúde.",
                  resposta: "Externalidade ambiental negativa",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
                {
                  alternativa:
                    "<strong>B.</strong> <strong>Ação</strong>: Estudar e aprender sobre descarbonização. <br><strong>Efeito</strong>: Orienta tomada de decisão para o enfrentamento dos efeitos das mudanças climáticas.",
                  resposta: "Externalidade ambiental positiva",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> <strong>Ação</strong>: Produzir vegetais e frutas utilizando agrotóxicos.<br><strong>Efeito</strong>: Liberação de substâncias adversas que geram alterações nos sistemas do solo e da água.",
                  resposta: "Externalidade ambiental negativa",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
                {
                  alternativa:
                    "<strong>D.</strong> <strong>Ação</strong>: Criação de gado na Amazônia.<br><strong>Efeito</strong>: Desmatamento de florestas nativas da Amazônia, levando a alterações nos regimes de chuva, efeitos na biodiversidade e no aquecimento global.",
                  resposta: "Externalidade ambiental negativa",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: A. Externalidade ambiental negativa / B. Externalidade ambiental positiva / C. Externalidade ambiental negativa / D. Externalidade ambiental negativa.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente a opção a uma externalidade ambiental negativa ou positiva.",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
        {
          nome_aula: "AULA 4",
          //PERGUNTAS SEÇÃO
          perguntas: [
            // PERGUNTA 1
            {
              titulo:
                "<strong>1.</strong> Aspectos ambientais são elementos que interagem ou podem interagir com o meio ambiente. Os impactos ambientais ocorrem quando aspectos ambientais provocam mudanças integrais ou parciais e positivas ou negativas no meio ambiente. Associe as definições corretamente, indicando se a opção corresponde a um aspecto ambiental ou a um impacto ambiental.",
              tipo: "combobox",
              opcoes: "Impacto ambiental,Aspecto ambiental",
              questao: [
                {
                  alternativa:
                    "<strong>A. </strong>Escassez de recursos naturais não renováveis.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>B. </strong>Emissão de gases de efeito estufa.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa:
                    "<strong>C. </strong>Intensificação do aquecimento global.",
                  resposta: "Impacto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },

                {
                  alternativa: "<strong>D. </strong>Uso de papel reciclado.",
                  resposta: "Aspecto ambiental",
                  feedbacknegativo:
                    "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
                  feedbackpositivo:
                    "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
                },
              ],
              tentativas: 1,
              feedbackCorreto:
                "Parabéns! Você associou corretamente cada opção a um aspecto ambiental ou a um impacto ambiental.",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2:
                "Resposta incorreta. As respostas corretas são: escassez de recursos naturais não renováveis – impacto ambiental; emissão de gases de efeito estufa – aspecto ambiental; intensificação do aquecimento global – impacto ambiental; uso de papel reciclado – aspecto ambiental.",
            },
            // PERGUNTA 2
            {
              titulo:
                "<strong>2.</strong> Indique as alternativas corretas que contêm as principais atividades antrópicas relacionadas à emissão de gases de efeito estufa (GEE) e ao aumento da temperatura global.",
              tipo: "multiple",
              questao: [
                {
                  alternativa: "<strong>A.</strong> Desmatamento de florestas.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta.",
                  feedbackpositivo: "A alternativa está correta.",
                },
                {
                  alternativa: "<strong>B.</strong> Produção de etanol.",
                  resposta: false,
                  feedbacknegativo: "A alternativa está incorreta.",
                  feedbackpositivo: "A alternativa está incorreta.",
                },
                {
                  alternativa:
                    "<strong>C.</strong> Geração e utilização de energia.",
                  resposta: true,
                  feedbacknegativo: "Alternativa correta. ",
                  feedbackpositivo: "Alternativa correta. ",
                },
                {
                  alternativa:
                    "<strong>D.</strong> Produção de cimento, aço e ferro.",
                  resposta: true,
                  feedbacknegativo: "A alternativa está correta. ",
                  feedbackpositivo: "A alternativa está correta. ",
                },
              ],
              tentativas: 2,
              feedbackCorreto: "Parabéns",
              feedbackIncorreto1: "Tente Novamente",
              feedbackIncorreto2: "Resposta Incorreta",
            },
          ],
        },
      ],
    },
  ],
};
