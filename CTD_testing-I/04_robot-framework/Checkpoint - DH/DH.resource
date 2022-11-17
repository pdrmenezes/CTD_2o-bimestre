*** variables ***
${SITE}                                           https://www.digitalhouse.com/br
${NAVEGADOR}                                      chrome 
${FRAME_COOKIES}                                  xpath=/html/body/iframe[2]
${BOTAO_PERMITIR_COOKIES}                         xpath=/html/body/div/div/div[1]/div[1]/div[2]/div[1]/div[2]
${BOTAO_CONHECA_NOSSOS_CURSOS}                    xpath=//*[@id="__next"]/div/main/section[1]/div/div/div[1]/div/div[2]/div/a

${CURSO_DATA_ANALYTICS}                           xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[1]/a/span
${DATA_ANALYTICS_SUBTITULO}                       xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[1]/p
${DATA_ANALYTICS_SUBTITULO_TEXTO}                 Transforme grandes quantidades de dados em insights.
${DATA_ANALYTICS_PAGINA_TEXTO}                    manipulação e análise de dados
${DATA_ANALYTICS_BOTAO_INSCREVER}                 xpath=//*[@id="0"]/div/a
${DATA_ANALYTICS_CAMPO_PRECO}                     xpath=//*[@id="__next"]/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span[1]
${DATA_ANALYTICS_TEXTO_PRECO}                     R$ 9.824,00

${CURSO_DATA_SCIENCE}                             xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[2]/a/span
${DATA_SCIENCE_SUBTITULO}                         xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[1]/p
${DATA_SCIENCE_SUBTITULO_TEXTO}                   Machine learning, inteligência artificial e tudo mais sobre a ciência de dados
${DATA_SCIENCE_PAGINA_TEXTO}                      processamento e análise de grandes quantidades de dados
${DATA_SCIENCE_BOTAO_INSCREVER}                   xpath=//*[@id="0"]/div/a
${DATA_SCIENCE_CAMPO_PRECO}                       xpath=//*[@id="__next"]/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span[1]
${DATA_SCIENCE_TEXTO_PRECO}                       R$ 11.312,00

${CURSO_DESENVOLVIMENTO_ANDROID}                  xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[3]/a/span
${DESENVOLVIMENTO_ANDROID_SUBTITULO}              xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[1]/p
${DESENVOLVIMENTO_ANDROID_SUBTITULO_TEXTO}        Crie seu próprio app do zero em até 5 meses
${DESENVOLVIMENTO_ANDROID_PAGINA_TEXTO}           desenvolver aplicações móveis como um programador profissional
${DESENVOLVIMENTO_ANDROID_BOTAO_INSCREVER}        xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[2]/div/a
${DESENVOLVIMENTO_ANDROID_BOTAO_TEXTO}            Turmas Esgotadas

${CURSO_DESENVOLVIMENTO_IOS}                      xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[4]/a/span
${DESENVOLVIMENTO_IOS_SUBTITULO}                  xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[1]/p
${DESENVOLVIMENTO_IOS_SUBTITULO_TEXTO}            Aprenda Swift e crie seu próprio app em até 5 meses
${DESENVOLVIMENTO_IOS_PAGINA_TEXTO}               criar apps estáveis, funcionais e atrativos
${DESENVOLVIMENTO_IOS_BOTAO_INSCREVER}            xpath=//*[@id="0"]/div/a
${DESENVOLVIMENTO_IOS_CAMPO_PRECO}                xpath=//*[@id="__next"]/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span[1]
${DESENVOLVIMENTO_IOS_TEXTO_PRECO}                R$ 8.269,00

${CURSO_DESENVOLVIMENTO_FS}                       xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[5]/a/span
${DESENVOLVIMENTO_FS_SUBTITULO}                   xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[1]/p
${DESENVOLVIMENTO_FS_SUBTITULO_TEXTO}             Aprenda a criar sites e aplicativos web, do começo ao fim.
${DESENVOLVIMENTO_FS_PAGINA_TEXTO}                integração do front-end com o back-end
${DESENVOLVIMENTO_FS_BOTAO_INSCREVER}             xpath=//*[@id="0"]/div/a
${DESENVOLVIMENTO_FS_CAMPO_PRECO}                 xpath=//*[@id="__next"]/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span[1]
${DESENVOLVIMENTO_FS_TEXTO_PRECO}                 R$ 9.824,00

${CURSO_CTD}                                      xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[10]/a/span/p[1]
${CTD_SUBTITULO}                                  css=#uJoXSc4pmpxQqCNPVe60oOnXzvTHiJXF > h1 > font > b
${CTD_SUBTITULO_TEXTO}                            Crie novas formas de viver o mundo
${CTD_PAGINA_TEXTO}                               Venha desenvolver uma carreira que pode mudar o mundo
${CTD_BOTAO_INSCREVER}                            css=#wIc9FaFLQtAaqfERX7toZ8vOupowTGkN
${CTD_CAMPO_NOME}                                 xpath=//*[@id="SPxdIrhGPqy1WTAe5qzVoB7MONOoSOZB"]
${CTD_TEXTO_NOME}                                 pedro
${CTD_CAMPO_SOBRENOME}                            xpath=//*[@id="DyESSyoTrg8EZUGtiPbmZmuL5y03FlCN"]
${CTD_TEXTO_SOBRENOME}                            menezes
${CTD_CAMPO_EMAIL}                                xpath=//*[@id="Lbqhh6B7SmT1OnakIxZ0TBmT2o2IxVNq"]
${CTD_TEXTO_EMAIL}                                pedromenezes212@gmail.com
${CTD_CAMPO_CELULAR}                              xpath=//*[@id="zVe3bzxdSNmVk5qFPuJgonal9LqQMlq8"]
${CTD_TEXTO_CELULAR}                              61998989898

*** keywords ***
Abrir o novo site da Digital House Brasil
  Open Browser                    ${SITE}               ${NAVEGADOR}
  Maximize Browser Window
  #Set Selenium Speed              0.75

#[Teste 1 - Validação das informações do curso de Data Analytics]
1.Clicar em “Aceitar Cookies”
  Sleep                           3
  Select frame                    ${FRAME_COOKIES}
  Click Element                   ${BOTAO_PERMITIR_COOKIES}
  Unselect frame
  
1.Clicar em “Conheça nossos cursos”
  Wait and Click                  ${BOTAO_CONHECA_NOSSOS_CURSOS}

1.Selecionar o curso “Data Analytics”
  Wait and Click                  ${CURSO_DATA_ANALYTICS}

1.Verificar se o subtitulo do curso corresponde a “Transforme grandes quantidades de dados em insights.”
  Element Should Contain          ${DATA_ANALYTICS_SUBTITULO}  ${DATA_ANALYTICS_SUBTITULO_TEXTO}


1.Verificar se a página contém o termo “manipulação e análise de dados”
  Page Should Contain             ${DATA_ANALYTICS_PAGINA_TEXTO}

1.Clicar em “Inscreva-se”
  Wait and Click                  ${DATA_ANALYTICS_BOTAO_INSCREVER}

1.Validar se o valor do curso é “R$ 9.824,00”
  Element Should Contain          ${DATA_ANALYTICS_CAMPO_PRECO}  ${DATA_ANALYTICS_TEXTO_PRECO}


#[Teste 2 - Validação das informações do curso de Data Science]
2.Clicar em “Aceitar Cookies”
  Sleep                           5
  Select frame                    ${FRAME_COOKIES}
  Click Element                   ${BOTAO_PERMITIR_COOKIES}
  Unselect frame

2.Clicar em “Conheça nossos cursos”
  Wait and Click                  ${BOTAO_CONHECA_NOSSOS_CURSOS}

2.Selecionar o curso “Data Science”
  Wait and Click                  ${CURSO_DATA_SCIENCE}

2.Verificar se o subtitulo do curso corresponde a “Machine learning, inteligência artificial e tudo mais sobre a ciência de dados.”
  Element Should Contain          ${DATA_SCIENCE_SUBTITULO}  ${DATA_SCIENCE_SUBTITULO_TEXTO}

2.Verificar se a página contém o termo “processamento e análise de grandes quantidades de dados”
  Page Should Contain             ${DATA_SCIENCE_PAGINA_TEXTO}

2.Clicar em “Inscreva-se”
  Wait and Click                  ${DATA_SCIENCE_BOTAO_INSCREVER}

2.Validar se o valor do curso é “R$ 11.312,00”
  Element Should Contain          ${DATA_SCIENCE_CAMPO_PRECO}  ${DATA_SCIENCE_TEXTO_PRECO}


#[Teste 3 - Validação das informações do curso de Desenvolvimento Mobile Android]
3.Clicar em “Aceitar Cookies”
  Sleep                           5
  Select frame                    ${FRAME_COOKIES}
  Click Element                   ${BOTAO_PERMITIR_COOKIES}
  Unselect frame

3.Clicar em “Conheça nossos cursos”
  Wait and Click                  ${BOTAO_CONHECA_NOSSOS_CURSOS}

3.Selecionar o curso “Desenvolvimento Mobile Android”
  Wait and Click                  ${CURSO_DESENVOLVIMENTO_ANDROID}

3.Verificar se o subtitulo do curso corresponde a “Crie seu próprio app do zero em até 5 meses”
  Element Should Contain          ${DESENVOLVIMENTO_ANDROID_SUBTITULO}  ${DESENVOLVIMENTO_ANDROID_SUBTITULO_TEXTO}

3.Verificar se a página contém o termo “desenvolver aplicações móveis como um programador profissional”
  Page Should Contain             ${DESENVOLVIMENTO_ANDROID_PAGINA_TEXTO}

3.Verificar se as turmas estão esgotadas
  Element Should Contain          ${DESENVOLVIMENTO_ANDROID_BOTAO_INSCREVER}  ${DESENVOLVIMENTO_ANDROID_BOTAO_TEXTO}


#[Teste 4 - Validação das informações do curso de Desenvolvimento Mobile IOS]
4.Clicar em “Aceitar Cookies”
  Sleep                           5
  Select frame                    ${FRAME_COOKIES}
  Click Element                   ${BOTAO_PERMITIR_COOKIES}
  Unselect frame

4.Clicar em “Conheça nossos cursos”
  Wait and Click                  ${BOTAO_CONHECA_NOSSOS_CURSOS}

4.Selecionar o curso “Desenvolvimento Mobile IOS”
  Wait and Click                  ${CURSO_DESENVOLVIMENTO_IOS}

4.Verificar se o subtitulo do curso corresponde a “Aprenda Swift e crie seu próprio app em até 5 meses”
  Element Should Contain          ${DESENVOLVIMENTO_IOS_SUBTITULO}  ${DESENVOLVIMENTO_IOS_SUBTITULO_TEXTO}

4.Verificar se a página contém o termo “criar apps estáveis, funcionais e atrativos”
  Page Should Contain             ${DESENVOLVIMENTO_IOS_PAGINA_TEXTO}

4.Clicar em “Inscreva-se”
  Wait and Click                  ${DESENVOLVIMENTO_IOS_BOTAO_INSCREVER}

4.Validar se o valor do curso é “R$ 8.269,00”
  Element Should Contain          ${DESENVOLVIMENTO_IOS_CAMPO_PRECO}  ${DESENVOLVIMENTO_IOS_TEXTO_PRECO}


#[Teste 5 - Validação das informações do curso de Desenvolvimento Web Full Stack]
5.Clicar em “Aceitar Cookies”
  Sleep                           5
  Select frame                    ${FRAME_COOKIES}
  Click Element                   ${BOTAO_PERMITIR_COOKIES}
  Unselect frame

5.Clicar em “Conheça nossos cursos”
  Wait and Click                  ${BOTAO_CONHECA_NOSSOS_CURSOS}

5.Selecionar o curso “Desenvolvimento Web Full Stack”
  Wait and Click                  ${CURSO_DESENVOLVIMENTO_FS}

5.Verificar se o subtitulo do curso corresponde a “Aprenda a criar sites e aplicativos web, do começo ao fim.”
  Element Should Contain          ${DESENVOLVIMENTO_FS_SUBTITULO}  ${DESENVOLVIMENTO_FS_SUBTITULO_TEXTO}

5.Verificar se a página contém o termo “integração do front-end com o back-end”
  Page Should Contain             ${DESENVOLVIMENTO_FS_PAGINA_TEXTO}

5.Clicar em “Inscreva-se” na turma de fev-set
  Wait and Click                  ${DESENVOLVIMENTO_FS_BOTAO_INSCREVER}

5.Validar se o valor do curso é “R$ 9.824,00”
  Element Should Contain          ${DESENVOLVIMENTO_FS_CAMPO_PRECO}  ${DESENVOLVIMENTO_FS_TEXTO_PRECO}

#[Teste 6 - Validação das informações do curso Certified Tech Developer]
6.Clicar em “Aceitar Cookies”
  Sleep                           5
  Select frame                    ${FRAME_COOKIES}
  Click Element                   ${BOTAO_PERMITIR_COOKIES}
  Unselect frame

6.Clicar em “Conheça nossos cursos”
  Wait and Click                  ${BOTAO_CONHECA_NOSSOS_CURSOS}

6.Selecionar o curso “Certified Tech Developer”
  Wait and Click                  ${CURSO_CTD}

6.Verificar se o subtitulo do curso corresponde a “Crie novas formas de viver o mundo”
  Element Should Contain          ${CTD_SUBTITULO}      ${CTD_SUBTITULO_TEXTO}

6.Verificar se a página contém o termo “Venha desenvolver uma carreira que pode mudar o mundo”
  Page Should Contain             ${CTD_PAGINA_TEXTO}

6.Clicar em “Inscreva-se”
  Wait and Click                  ${CTD_BOTAO_INSCREVER}

6.Preencher os campos do formulário “Faça parte do futuro digital”
  Wait and Input Text             ${CTD_CAMPO_NOME}       ${CTD_TEXTO_NOME}
  Wait and Input Text             ${CTD_CAMPO_SOBRENOME}  ${CTD_TEXTO_SOBRENOME}
  Wait and Input Text             ${CTD_CAMPO_EMAIL}      ${CTD_TEXTO_EMAIL}
  Wait and Input Text             ${CTD_CAMPO_CELULAR}    ${CTD_TEXTO_CELULAR}


# Comandos personalizados
Wait and Click
  [Arguments]                     ${ELEMENTO}
  Wait Until Element Is Visible   ${ELEMENTO}
  Wait Until Element Is Enabled   ${ELEMENTO}
  Scroll Element Into View        ${ELEMENTO}
  Click Element                   ${ELEMENTO}

Wait and Input Text
  [Arguments]                     ${ELEMENTO}       ${TEXTO}
  Wait Until Element Is Visible   ${ELEMENTO}
  Wait Until Element Is Enabled   ${ELEMENTO}
  Input Text                      ${ELEMENTO}       ${TEXTO}