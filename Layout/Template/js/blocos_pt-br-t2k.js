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
								"<strong>1.</strong> Qual das seguintes afirmações sobre a biomassa lignocelulósica está correta?",
							tipo: "checkbox",
							questao: [
								{
									alternativa:
										"<strong>A)</strong> A biomassa lignocelulósica é composta principalmente por lignina, amido e proteínas.",
									resposta: false,
									feedbacknegativo:
										"Você não selecionou a alternativa correta.",
								},
								{
									alternativa:
										"<strong>B)</strong> A principal aplicação da biomassa lignocelulósica é na produção de materiais plásticos.",
									resposta: false,
									feedbacknegativo:
										"Você não selecionou a alternativa correta.",
								},
								{
									alternativa:
										"<strong>C)</strong> A biomassa lignocelulósica é uma fonte renovável de energia derivada principalmente de plantas, rica em celulose, hemicelulose e lignina.",
									resposta: true,

									feedbackpositivo:
										"Você selecionou a alternativa correta.",
								},
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns",
							feedbackIncorreto1: "Tente Novamente",
							feedbackIncorreto2: "Resposta Incorreta",
						},
						// PERGUNTA 2
						{
							titulo: "<strong>2.</strong> Faça as associações corretas entre as colunas no que diz respeito aos pré-tratamentos realizados na biomassa lignocelulósica.",
							tipo: "combobox",
							opcoes: "Pré-tratamento físico,Pré-tratamento químico,Pré-tratamento biológico",
							questao: [
								{
									alternativa: "<strong>A) </strong> utiliza moagem, ultrassom ou explosão de vapor para quebrar a estrutura da biomassa.",
									resposta: "Pré-tratamento físico",
									feedbacknegativo: "Você não selecionou a opção correta. A resposta é: Pré-tratamento físico.",
									feedbackpositivo: "Parabéns, resposta correta!"
								},
								{
									alternativa: "<strong>B) </strong> envolve o uso de ácidos para solubilizar componentes da biomassa.",
									resposta: "Pré-tratamento químico",
									feedbacknegativo: "Você não selecionou a opção correta. A resposta é: Pré-tratamento químico.",
									feedbackpositivo: "Parabéns, resposta correta!"
								},
								{
									alternativa: "<strong>C) </strong> usa microrganismos para degradar a biomassa e facilitar a conversão dela em biocombustíveis.",
									resposta: "Pré-tratamento biológico",
									feedbacknegativo: "Você não selecionou a opção correta. A resposta é: Pré-tratamento biológico.",
									feedbackpositivo: "Parabéns, resposta correta!"
								},
								{
									alternativa: "<strong>D) </strong> consiste em tratamentos térmicos ou mecânicos para reduzir o tamanho da biomassa e aumentar a sua superfície de contato.",
									resposta: "Pré-tratamento físico",
									feedbacknegativo: "Você não selecionou a opção correta. A resposta é: Pré-tratamento físico.",
									feedbackpositivo: "Parabéns, resposta correta!"
								},
								{
									alternativa: "<strong>E) </strong> pode incluir o uso de ácido sulfúrico ou hidróxido de sódio para alterar a composição química da biomassa.",
									resposta: "Pré-tratamento químico",
									feedbacknegativo: "Você não selecionou a opção correta. A resposta é: Pré-tratamento químico.",
									feedbackpositivo: "Parabéns, resposta correta!"
								},
								{
									alternativa: "<strong>F) </strong> utiliza enzimas para quebrar os polímeros de celulose e hemicelulose em açúcares fermentáveis.",
									resposta: "Pré-tratamento biológico",
									feedbacknegativo: "Você não selecionou a opção correta. A resposta é: Pré-tratamento biológico.",
									feedbackpositivo: "Parabéns, resposta correta!"
								}
							],
							tentativas: 0,
							feedbackCorreto: "Isso mesmo! Você fez a correspondência de maneira correta.",
							feedbackIncorreto1: "Você não fez a correspondência de maneira correta.",
							feedbackIncorreto2: "Você não fez a correspondência de maneira correta."
						},
						// PERGUNTA 3
						{
							titulo: "<strong>3.</strong> A aplicação da biomassa lignocelulósica na produção de biocombustíveis é limitada apenas ao etanol celulósico e ao biodiesel lignocelulósico.",
							tipo: "trueorfalse",
							questao: [
								{
									alternativa: "Essa afirmação é verdadeira ou falsa?",
									resposta: false,
									feedbacknegativo: "Resposta incorreta. A afirmação é falsa, pois a utilização da biomassa lignocelulósica se estende além da produção de biocombustíveis e produtos químicos, abrangendo também a fabricação de materiais avançados, bioplásticos e nanomateriais.",
									feedbackpositivo: "Parabéns! Resposta correta. A afirmação é falsa, pois a utilização da biomassa lignocelulósica se estende além da produção de biocombustíveis e produtos químicos, abrangendo também a fabricação de materiais avançados, bioplásticos e nanomateriais."
								},
							],
							feedbackCorreto: "Parabéns! Resposta correta. A afirmação é falsa, pois a utilização da biomassa lignocelulósica se estende além da produção de biocombustíveis e produtos químicos, abrangendo também a fabricação de materiais avançados, bioplásticos e nanomateriais.",
							feedbackIncorreto1: "Resposta incorreta. A afirmação é falsa, pois a utilização da biomassa lignocelulósica se estende além da produção de biocombustíveis e produtos químicos, abrangendo também a fabricação de materiais avançados, bioplásticos e nanomateriais.",
							feedbackIncorreto2: "Resposta incorreta. A afirmação é falsa, pois a utilização da biomassa lignocelulósica se estende além da produção de biocombustíveis e produtos químicos, abrangendo também a fabricação de materiais avançados, bioplásticos e nanomateriais."
						}
					],
				},
				{
					nome_aula: "AULA 2",
					//PERGUNTAS SEÇÃO
					perguntas: [
						// PERGUNTA 1
						{
							titulo: "<strong>1.</strong> Podemos dizer que a biomassa residual orgânica se refere a:",
							tipo: "checkbox",
							questao: [
								{
									alternativa: "<strong>A)</strong> qualquer material orgânico classificado como resíduo ou subproduto de processos naturais ou atividades humanas e que pode ser convertido em energia.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B)</strong> produtoras de combustíveis fósseis residuais e orgânicos constituídos de carboidratos, lignina e proteínas, em uma abordagem de biorrefinaria.",
									resposta: false,
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C)</strong> a produção de biocombustíveis por meio de combustíveis fósseis sendo uma área em constante desenvolvimento e tem sido explorada como uma alternativa promissora em substituição aos combustíveis sustentáveis.",
									resposta: false,
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Você selecionou a alternativa correta.",
							feedbackIncorreto1: "Você não selecionou a alternativa correta.",
							feedbackIncorreto2: "Você não selecionou a alternativa correta."
						},
						// PERGUNTA 2
						{
							titulo: "<strong>2.</strong> Em relação aos insumos utilizados na produção de biocombustíveis, relacione as duas colunas corretamente.",
							tipo: "combobox",
							opcoes: "HVO, SAF, Bio-hidrogênio, Biogás", // Opções para associação
							questao: [
								{
									alternativa: "<strong>A)</strong> Hydrotreated vegetable oil (óleo vegetal hidrotratado) ou diesel renovável produzido a partir de óleos vegetais e gorduras animais residuais, por meio de um processo chamado de hidrotratamento.",
									resposta: "HVO",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente. A resposta é: HVO."
								},
								{
									alternativa: "<strong>B)</strong> Sustainable aviation fuels (combustíveis de aviação sustentáveis) produzidos a partir de biomassa residual, como óleos vegetais não comestíveis, gorduras animais, resíduos agrícolas, resíduos de madeira e até mesmo resíduos sólidos urbanos.",
									resposta: "SAF",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente. A resposta é: SAF."
								},
								{
									alternativa: "<strong>C)</strong> Produzido a partir de biomassa residual orgânica, por meio de várias rotas tecnológicas, sendo processos de fermentação anaeróbica e a gasificação as rotas mais comuns.",
									resposta: "Bio-hidrogênio",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente. A resposta é: Bio-hidrogênio."
								},
								{
									alternativa: "<strong>D)</strong> É produzido pela decomposição anaeróbica (sem oxigênio) de matéria orgânica.",
									resposta: "Biogás",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente. A resposta é: Biogás."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Você relacionou as colunas corretamente.",
							feedbackIncorreto1: "Você não relacionou as colunas corretamente. Tente outra vez.",
							feedbackIncorreto2: "Você não relacionou as colunas corretamente. Tente outra vez."
						},
						// PERGUNTA 3
						{
							titulo: "<strong>3.</strong> Indique se as afirmações a seguir são verdadeiras ou falsas.",
							tipo: "trueorfalse",
							questao: [
								{
									alternativa: "<strong>A)</strong> Ao utilizar biomassa residual para a produção de biocombustíveis ou energia elétrica, é possível reduzirmos a necessidade dos combustíveis derivados de matriz fóssil, o que resulta em menores emissões de gases de efeito estufa.",
									resposta: true,
									feedbackpositivo: "Parabéns! Resposta correta.",
									feedbacknegativo: "Resposta incorreta. Tente novamente."
								},
								{
									alternativa: "<strong>B)</strong> O uso de resíduos orgânicos, como esterco animal ou resíduos de alimentos, na geração de biogás ou na produção de fertilizantes orgânicos, contribui para a reciclagem de nutrientes e promove uma maior fertilidade do solo, reduzindo a necessidade do uso fertilizantes sintéticos nitrogenados.",
									resposta: true,
									feedbackpositivo: "Parabéns! Resposta correta.",
									feedbacknegativo: "Resposta incorreta. Tente novamente."
								},
								{
									alternativa: "<strong>C)</strong> Ao utilizar resíduos orgânicos como fonte de energia, evita-se a extração excessiva de recursos naturais não renováveis, como petróleo, carvão e gás natural.",
									resposta: true,
									feedbackpositivo: "Parabéns! Resposta correta.",
									feedbacknegativo: "Resposta incorreta. Tente novamente."
								},
								{
									alternativa: "<strong>D)</strong> Com o uso de biomassa residual orgânica para produção de energia sustentável podemos diversificar nossa matriz energética, reduzindo a dependência de combustíveis fósseis aumentando a segurança energética e pode contribuir para o cumprimento das metas estabelecidas no Acordo de Paris, especialmente no caso do Brasil, que se comprometeu a reduzir suas emissões de gases de efeito estufa em 37% até 2025 e em 43% até 2030, com base nos níveis de 2005.",
									resposta: true,
									feedbackpositivo: "Parabéns! Resposta correta.",
									feedbacknegativo: "Resposta incorreta. Tente novamente."
								}
							],
							feedbackCorreto: "Todas as afirmações são verdadeiras.",
							feedbackIncorreto1: "Uma ou mais respostas estão incorretas. Verifique novamente.",
							feedbackIncorreto2: "Revise as afirmações e tente responder novamente."
						}
					],
				},
				{
					nome_aula: "AULA 3",
					//PERGUNTAS SEÇÃO
					perguntas: [
						// PERGUNTA 1
						{
							titulo: "<strong>1.</strong> Qual das seguintes afirmações melhor descreve uma das vantagens do uso de algas como fonte de biocombustíveis?",
							tipo: "checkbox",
							questao: [
								{
									alternativa: "<strong>A)</strong> As algas têm uma taxa de crescimento mais lenta do que outras plantas usadas na produção de biocombustíveis.",
									resposta: false,
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B)</strong> O cultivo de algas requer grandes extensões de terra, tornando-o impraticável em muitas regiões.",
									resposta: false,
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C)</strong> As algas têm uma alta produtividade e podem ser cultivadas em diferentes ambientes, incluindo água salgada e água doce.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Você selecionou a alternativa correta.",
							feedbackIncorreto1: "Você não selecionou a alternativa correta. Tente outra vez.",
							feedbackIncorreto2: "Você não selecionou a alternativa correta. Tente outra vez."
						},
						// PERGUNTA 2
						{
							titulo: "<strong>2.</strong> Relacione as colunas corretamente no que diz respeito aos pré-tratamentos realizados na biomassa algal.",
							tipo: "combobox",
							opcoes: "Fermentação de biomassa, Transesterificação, Hidrogenação catalítica, Pirólise, Gasificação",
							questao: [
								{
									alternativa: "<strong>A) </strong>Conversão de biomassa em etanol ou biodiesel usando microrganismos fermentativos.",
									resposta: "Fermentação de biomassa",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>B) </strong>Transformação de óleos vegetais em biodiesel através da reação com álcool.",
									resposta: "Transesterificação",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>C) </strong>Processo de transformação de óleos vegetais em diesel sintético usando hidrogênio.",
									resposta: "Hidrogenação catalítica",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>D) </strong>Processo de transformação de matéria orgânica em biocombustíveis líquidos ou gasosos através do calor na ausência de oxigênio.",
									resposta: "Pirólise",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>E) </strong>Conversão de materiais orgânicos em gases sintéticos (syngas) usando calor e um agente oxidante, como vapor de água.",
									resposta: "Gasificação",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Você relacionou as colunas corretamente.",
							feedbackIncorreto1: "Você não relacionou as colunas corretamente. Tente outra vez.",
							feedbackIncorreto2: "Você não relacionou as colunas corretamente. Tente outra vez."
						},
						// PERGUNTA 3
						{
							titulo: "<strong>3.</strong> A utilização de microalgas na produção de biocombustíveis apresenta vantagens significativas em relação aos biocombustíveis tradicionais, como a maior eficiência na absorção de CO2; no entanto, precisam de áreas utilizadas para a agricultura convencional.",
							tipo: "trueorfalse",
							questao: [
								{
									alternativa: "Essa afirmação é verdadeira ou falsa?",
									resposta: false,
									feedbackpositivo: "Parabéns! Resposta correta.",
									feedbacknegativo: "Resposta incorreta. A afirmação é falsa, as microalgas na produção de biocombustíveis têm a vantagem de não precisarem de áreas utilizadas para a agricultura convencional."
								}
							],
							feedbackCorreto: "Parabéns! Resposta correta.",
							feedbackIncorreto1: "Resposta incorreta. A afirmação é falsa.",
							feedbackIncorreto2: "Resposta incorreta. A afirmação é falsa."
						}
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
							titulo: "<strong>1.</strong> A produção do etanol de segunda geração é vantajosa porque:",
							tipo: "checkbox",
							questao: [
								{
									alternativa: "<strong>A)</strong> utiliza principalmente culturas não alimentares e é produzido a partir de biomassa lignocelulósica, como resíduos agrícolas (palha, bagaço de cana-de-açúcar), resíduos florestais, resíduos de alimentos, entre outros.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B)</strong> é a forma mais simples e conhecida para ser obtido e isso ocorre por meio de um processo de fermentação de moléculas de açúcar, encontradas em vegetais como cana-de-açúcar, milho, beterraba, batata, trigo e mandioca, ou seja, de matérias-primas que servem como alimento.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C)</strong> sua produção a partir de algas é uma das mais promissoras vias para a produção desse tipo de biocombustível, pois as algas têm um alto potencial de crescimento e podem ser cultivadas em diversos tipos de água, incluindo água salgada, água do mar ou água doce.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns! Você selecionou a alternativa correta.",
							feedbackIncorreto1: "Tente novamente.",
							feedbackIncorreto2: "Resposta incorreta."
						},
						// PERGUNTA 2
						{
							titulo: "<strong>2.</strong> Em relação às vias de produção do etanol de primeira, segunda e terceira geração, relacione as colunas corretamente.",
							tipo: "combobox",
							opcoes: "Etanol de primeira geração,Etanol de 1,5 geração,Etanol de segunda geração,Etanol de terceira geração",
							questao: [
								{
									alternativa: "<strong>A) </strong> É produzido de forma simples e conhecida e isso ocorre por meio de um processo de fermentação de moléculas de açúcares simples.",
									resposta: "Etanol de primeira geração",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>B) </strong> É um biocombustível produzido por um processo intermediário de produção que ocupa um lugar entre a primeira e a segunda geração de produção de etanol.",
									resposta: "Etanol de 1,5 geração",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>C) </strong> Seu pré-tratamento consiste no uso de enzimas específicas sobre a biomassa para “cortar” as cadeias longas de celulose e hemicelulose transformando-as em açúcares simples, “menores” como glicose e xilose.",
									resposta: "Etanol de segunda geração",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>D) </strong> O processo começa com o cultivo das algas, que pode ser feito em lagoas abertas, fotobiorreatores ou sistemas de cultivo fechados, dependendo das condições locais e dos tipos de algas a serem utilizadas.",
									resposta: "Etanol de terceira geração",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns! Você relacionou as colunas corretamente.",
							feedbackIncorreto1: "Tente novamente.",
							feedbackIncorreto2: "Resposta incorreta."
						},
						// PERGUNTA 3
						{
							titulo: "<strong>3.</strong> Indique verdadeiro ou falso para as afirmações a seguir.",
							tipo: "trueorfalse",
							questao: [
								{
									alternativa: "<strong>A) </strong>O etanol pode ser misturado à gasolina em diferentes proporções, reduzindo a dependência de combustíveis fósseis puros e ajudando a diminuir as emissões totais de carbono.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B) </strong>Testes com microrganismos, como fungos e bactérias, têm sido realizados com o intuito de produzir enzimas mais eficazes na quebra de componentes da parede celular das plantas, convertendo esse tipo de material em açúcares simples, como glicose e xilose.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C) </strong>Ainda não existem regulamentações rigorosas necessárias para garantir que microrganismos modificados não representem riscos para o meio ambiente ou para a saúde humana.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>D) </strong>A utilização da biomassa residual da produção de etanol na geração de eletricidade pode ajudar a diversificar a matriz energética de um país, reduzindo a dependência de fontes de energia não renováveis.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							feedbackCorreto: "Parabéns! Alternativas A, B e D são verdadeiras. A alternativa C é falsa.",
							feedbackIncorreto1: "Resposta incorreta. Alternativas A, B e D são verdadeiras. A alternativa C é falsa.",
							feedbackIncorreto2: "Resposta incorreta. Alternativas A, B e D são verdadeiras. A alternativa C é falsa."
						}

					],
				},
				{
					nome_aula: "AULA 2",
					//PERGUNTAS SEÇÃO
					perguntas: [
						// PERGUNTA 1
						{
							titulo: "<strong>1.</strong> Qual das seguintes afirmações sobre o processo de produção de biometano está correta?",
							tipo: "checkbox",
							questao: [
								{
									alternativa: "<strong>A)</strong> O biometano é produzido exclusivamente a partir de resíduos alimentares.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B)</strong> A gaseificação térmica é a única metodologia utilizada na produção de biometano.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C)</strong> O processo de purificação do biogás para produzir biometano não envolve a remoção de impurezas como CO2 e H2S.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>D)</strong> O biometano, uma vez produzido, pode ser diretamente injetado na rede de gás natural após passar por um processo de purificação e condicionamento.",
									resposta: true,
									feedbackpositivo: "Isso mesmo! Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>E)</strong> O Brasil não possui potencial para a produção de biometano devido à falta de matérias-primas adequadas.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns! Você selecionou a alternativa correta.",
							feedbackIncorreto1: "Tente novamente.",
							feedbackIncorreto2: "Resposta incorreta."
						}
						,
						// PERGUNTA 2
						{
							titulo: "<strong>2.</strong> A respeito dos processos relacionados à produção de biogás e biometano, relacione as colunas corretamente.",
							tipo: "combobox",
							opcoes: "Biogás,Biometano,Digestão anaeróbia,Microrganismos anaeróbios,Purificação do biogás",
							questao: [
								{
									alternativa: "<strong>A) </strong>Gás composto principalmente por metano e dióxido de carbono, gerado durante a digestão anaeróbia.",
									resposta: "Biogás",
									feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta.",
									feedbacknegativo: "Você não fez a correspondência de maneira correta."
								},
								{
									alternativa: "<strong>B) </strong>Forma refinada de biogás, com alta concentração de metano.",
									resposta: "Biometano",
									feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta.",
									feedbacknegativo: "Você não fez a correspondência de maneira correta."
								},
								{
									alternativa: "<strong>C) </strong>Processo de decomposição de matéria orgânica sem a presença de oxigênio.",
									resposta: "Digestão anaeróbia",
									feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta.",
									feedbacknegativo: "Você não fez a correspondência de maneira correta."
								},
								{
									alternativa: "<strong>D) </strong>Responsáveis pela decomposição da matéria orgânica.",
									resposta: "Microrganismos anaeróbios",
									feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta.",
									feedbacknegativo: "Você não fez a correspondência de maneira correta."
								},
								{
									alternativa: "<strong>E) </strong>Método para remover impurezas do biogás, como CO2 e H2S.",
									resposta: "Purificação do biogás",
									feedbackpositivo: "Isso mesmo! Você fez a correspondência de maneira correta.",
									feedbacknegativo: "Você não fez a correspondência de maneira correta."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Isso mesmo! Você fez a correspondência de maneira correta.",
							feedbackIncorreto1: "Você não fez a correspondência de maneira correta.",
							feedbackIncorreto2: "Você não fez a correspondência de maneira correta."
						},
						// PERGUNTA3
						{
							titulo: "<strong>3.</strong> Biogás e biometano são ambos produzidos a partir da decomposição anaeróbia de matéria orgânica, mas o biogás passa por etapas adicionais de purificação para remover impurezas, resultando em um produto mais puro e concentrado, enquanto o biometano não.",
							tipo: "trueorfalse",
							questao: [
								{
									alternativa: "<strong>A) </strong>Verdadeiro",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B) </strong>Falso",
									resposta: true,
									feedbackpositivo: "Isso mesmo! A afirmação é falsa. O biometano, assim como o biogás, é produzido a partir da decomposição anaeróbia de matéria orgânica. No entanto, ao contrário do que foi afirmado, o biometano passa por etapas adicionais de purificação para remover impurezas, resultando em um produto mais puro e concentrado, enquanto o biogás não necessariamente passa por essas etapas de purificação.",
									feedbacknegativo: "Você não selecionou a alternativa correta. A afirmação é falsa. O biometano, assim como o biogás, é produzido a partir da decomposição anaeróbia de matéria orgânica. No entanto, ao contrário do que foi afirmado, o biometano passa por etapas adicionais de purificação para remover impurezas, resultando em um produto mais puro e concentrado, enquanto o biogás não necessariamente passa por essas etapas de purificação."
								}
							],
							feedbackCorreto: "Parabéns! A afirmação é falsa. O biometano, assim como o biogás, é produzido a partir da decomposição anaeróbia de matéria orgânica. No entanto, ao contrário do que foi afirmado, o biometano passa por etapas adicionais de purificação para remover impurezas, resultando em um produto mais puro e concentrado, enquanto o biogás não necessariamente passa por essas etapas de purificação.",
							feedbackIncorreto1: "Resposta incorreta. A afirmação é falsa. O biometano, assim como o biogás, é produzido a partir da decomposição anaeróbia de matéria orgânica. No entanto, ao contrário do que foi afirmado, o biometano passa por etapas adicionais de purificação para remover impurezas, resultando em um produto mais puro e concentrado, enquanto o biogás não necessariamente passa por essas etapas de purificação.",
							feedbackIncorreto2: "Resposta incorreta. A afirmação é falsa. O biometano, assim como o biogás, é produzido a partir da decomposição anaeróbia de matéria orgânica. No entanto, ao contrário do que foi afirmado, o biometano passa por etapas adicionais de purificação para remover impurezas, resultando em um produto mais puro e concentrado, enquanto o biogás não necessariamente passa por essas etapas de purificação."
						}
					],
				},
				{
					nome_aula: "AULA 3",
					//PERGUNTAS SEÇÃO
					perguntas: [
						// PERGUNTA 1 - Escolha Única
						{
							titulo: "<strong>1.</strong> As principais matérias-primas utilizadas na produção do biodiesel são:",
							tipo: "checkbox",
							questao: [
								{
									alternativa: "<strong>A)</strong> os hidrocarbonetos produzidos a partir do petróleo.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B)</strong> os ésteres produzidos a partir de combustíveis fósseis.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C)</strong> fontes renováveis, como os óleos vegetais de soja, canola, girassol, palma, e outros, as gorduras animais, óleos residuais de cozinha e até mesmo algas e resíduos agrícolas.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns, você selecionou a alternativa correta.",
							feedbackIncorreto1: "Você não selecionou a alternativa correta. Tente novamente.",
							feedbackIncorreto2: "Você não selecionou a alternativa correta."
						}, {
							titulo: "<strong>2.</strong> Em relação aos biocombustíveis, biodiesel, HVO, SAF e H-Bio, relacione as colunas corretamente.",
							tipo: "combobox",
							opcoes: "Biodiesel,HVO (diesel verde sustentável),SAF (combustível sustentável de aviação),H-BIO",
							questao: [
								{
									alternativa: "<strong>A) </strong> Pode ser misturado ao diesel convencional e utilizado no abastecimento de veículos pesados, como ônibus, caminhões e máquinas agrícolas. Essa mistura pode reduzir significativamente as emissões de gases de efeito estufa e poluentes locais, como material particulado e óxidos de nitrogênio.",
									resposta: "Biodiesel",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>B) </strong> Pode ser misturado em qualquer proporção com diesel convencional de petróleo, já que suas moléculas são idênticas às do diesel produzido a partir de matriz fóssil e é considerado uma alternativa mais sustentável ao diesel convencional, podendo ajudar a reduzir as emissões de gases de efeito estufa.",
									resposta: "HVO (diesel verde sustentável)",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>C) </strong> Pode ser usado como uma alternativa sustentável ao querosene de aviação em aeronaves comerciais e militares. Ao contrário do combustível de aviação convencional, é produzido a partir de fontes renováveis, como óleos vegetais, gorduras animais, resíduos orgânicos ou biomassa.",
									resposta: "SAF (combustível sustentável de aviação)",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>D) </strong> É uma tecnologia que tem como objetivo a produção de diesel renovável a partir de uma mistura de óleo vegetal ou gordura animal com óleo diesel convencional.",
									resposta: "H-BIO",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns! Você relacionou as colunas corretamente.",
							feedbackIncorreto1: "Tente novamente.",
							feedbackIncorreto2: "Resposta incorreta."
						}, {
							titulo: "<strong>3.</strong> Indique verdadeiro ou falso para as afirmações a seguir.",
							tipo: "trueorfalse",
							questao: [
								{
									alternativa: "<strong>A) </strong>As preocupações ambientais, regulamentações governamentais e avanços tecnológicos impulsionam o uso do biodiesel e do combustível sustentável de aviação (SAF) como alternativas ao uso de combustíveis não renováveis.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B) </strong>O biodiesel e o SAF podem ser integrados com outros setores de energia renovável, como energia solar e eólica, para criar sistemas energéticos mais sustentáveis e resilientes.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C) </strong>Existe uma responsabilidade ambiental em todo o mundo que está relacionada à implementação de políticas de incentivos para promover o uso de biocombustíveis, incluindo metas de mistura, subsídios fiscais, créditos de carbono e investimentos em pesquisa e desenvolvimento.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>D) </strong>Espera-se que os avanços contínuos na tecnologia de produção de biocombustíveis levem a processos mais eficientes e econômicos para a produção de biodiesel e SAF. Isso pode incluir o desenvolvimento de novas rotas de produção, catalisadores mais eficientes e métodos de processamento mais sustentáveis.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							feedbackCorreto: "Parabéns! Todas as afirmações são verdadeiras.",
							feedbackIncorreto1: "Resposta incorreta. Todas as afirmações são verdadeiras.",
							feedbackIncorreto2: "Resposta incorreta. Todas as afirmações são verdadeiras."
						}
					],
				},
				{
					nome_aula: "AULA 4",
					//PERGUNTAS SEÇÃO
					perguntas: [
						// PERGUNTA 1 - Escolha Única
						{
							titulo: "<strong>1.</strong> Qual é o principal benefício da produção de bio-hidrogênio a partir de fontes renováveis em comparação com métodos tradicionais de produção de hidrogênio?",
							tipo: "checkbox",
							questao: [
								{
									alternativa: "<strong>A)</strong> Maior dependência de combustíveis fósseis para a produção de energia.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>B)</strong> Menor eficiência energética devido à necessidade de altas temperatura e pressão.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>C)</strong> Produção de hidrogênio com menor pureza e maior quantidade de poluentes.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>D)</strong> Maior impacto ambiental devido à emissão de gases de efeito estufa.",
									resposta: false,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								},
								{
									alternativa: "<strong>E)</strong> Redução da poluição e da dependência de recursos não renováveis.",
									resposta: true,
									feedbackpositivo: "Você selecionou a alternativa correta.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns! Você selecionou a alternativa correta.",
							feedbackIncorreto1: "Tente novamente.",
							feedbackIncorreto2: "Resposta incorreta."
						},
						{
							titulo: "<strong>2.</strong> A respeito da produção de bio-hidrogênio, relacione as colunas corretamente.",
							tipo: "combobox",
							opcoes: "Fermentação escura,Fotofermentação,Biofotólise,Eletrólise microbiana",
							questao: [
								{
									alternativa: "<strong>A) </strong> Produção de hidrogênio por bactérias anaeróbias a partir de substratos ricos em carboidratos sem dependência de luz.",
									resposta: "Fermentação escura",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>B) </strong> Produção de hidrogênio por bactérias fotossintéticas em ambientes deficientes em nitrogênio, utilizando energia luminosa.",
									resposta: "Fotofermentação",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>C) </strong> Processo que imita a fotossíntese, realizado por algas, para converter água em hidrogênio usando energia luminosa.",
									resposta: "Biofotólise",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								},
								{
									alternativa: "<strong>D) </strong> Utiliza microrganismos eletroativos que catalisam reações eletroquímicas para converter matéria orgânica em hidrogênio.",
									resposta: "Eletrólise microbiana",
									feedbackpositivo: "Você relacionou as colunas corretamente.",
									feedbacknegativo: "Você não relacionou as colunas corretamente."
								}
							],
							tentativas: 0,
							feedbackCorreto: "Parabéns! Você relacionou as colunas corretamente.",
							feedbackIncorreto1: "Tente novamente.",
							feedbackIncorreto2: "Resposta incorreta."
						},
						{
							titulo: "<strong>3.</strong> A integração de diferentes tecnologias de produção de bio-hidrogênio com sistemas de tratamento de resíduos e energias renováveis pode aumentar a eficiência e a viabilidade econômica do processo.",
							tipo: "trueorfalse",
							questao: [
								{
									alternativa: "Essa afirmação é verdadeira ou falsa?",
									resposta: true,
									feedbackpositivo: "A afirmação é verdadeira. A integração de diferentes tecnologias de produção de bio-hidrogênio com sistemas de tratamento de resíduos e energias renováveis cria sinergias que aumentam a eficiência e a viabilidade econômica. Isso se dá pela redução dos custos de matéria-prima ao utilizar resíduos como substratos e pela utilização de fontes de energia renovável, tornando o processo mais econômico e ambientalmente sustentável.",
									feedbacknegativo: "Você não selecionou a alternativa correta."
								}
							],
							feedbackCorreto: "Parabéns! A afirmação é verdadeira. A integração de diferentes tecnologias de produção de bio-hidrogênio com sistemas de tratamento de resíduos e energias renováveis cria sinergias que aumentam a eficiência e a viabilidade econômica. Isso se dá pela redução dos custos de matéria-prima ao utilizar resíduos como substratos e pela utilização de fontes de energia renovável, tornando o processo mais econômico e ambientalmente sustentável.",
							feedbackIncorreto1: "Resposta incorreta. A afirmação é verdadeira. A integração de diferentes tecnologias de produção de bio-hidrogênio com sistemas de tratamento de resíduos e energias renováveis cria sinergias que aumentam a eficiência e a viabilidade econômica. Isso se dá pela redução dos custos de matéria-prima ao utilizar resíduos como substratos e pela utilização de fontes de energia renovável, tornando o processo mais econômico e ambientalmente sustentável.",
							feedbackIncorreto2: "Resposta incorreta. A afirmação é verdadeira. A integração de diferentes tecnologias de produção de bio-hidrogênio com sistemas de tratamento de resíduos e energias renováveis cria sinergias que aumentam a eficiência e a viabilidade econômica. Isso se dá pela redução dos custos de matéria-prima ao utilizar resíduos como substratos e pela utilização de fontes de energia renovável, tornando o processo mais econômico e ambientalmente sustentável."
						}
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
