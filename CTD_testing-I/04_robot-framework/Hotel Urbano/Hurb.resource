*** variables ***
${SITE}                               http://hurb.com/br
${NAVEGADOR}                          chrome 
${BOTAO_DETALHES}                     css=#c-accordion-icon
${BOTAO_PERMITIR_SELECAO}             css=#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection
${BOTAO_PACOTES}                      css=#__next > div.Header_Header__1jiZz > div.hrc-2LOsj > div > div > div.h-rwgu8t > div > div > button:nth-child(2) > span
${CAMPO_BUSCA}                        css=#destination-input
${BUSCA_SANANDRES}                    san andres
${SELECIONAR_PACOTE}                  css=#downshift-1-item-3 > div.hrc-2rGYR > div
${BOTAO_PESQUISAR}                    css=#__next > div.Header_Header__1jiZz > div.hrc-2LOsj > div > div > div.h-rr9hdz > button > span
${SELECIONAR_RESULTADO_DA_BUSCA}      css=#__next > div > main > div.ResultsCardsContainer_ResultsCardContainer__1jtiB > a > div.h-1psltl0 > img
${SELECIONAR_PRIMEIRO_RESULTADO}      css=#offer-options > div.offer-options--items > div:nth-child(4) > div.row.flex > div.col-xs-12.col-sm-4.col-md-4.offer-options--box-right.main-package > div > div.col-xs-12.col-sm-7.col-md-7.offer-options--box.offer-options--box-price.flex > div:nth-child(2) > div:nth-child(4) > a
${BOTAO_GARANTIR_OFERTA}              css=#dont-leave-banner > div > div > div > div.banner-package_button.dismiss.button > span
${CAMPO_CONFIGURACAO}                 css=body > div.container > div > div.col-md-4.col-sm-4.hidden-xs > div.summary > div:nth-child(7) > div > div > div:nth-child(2) > div.col-xs-8.col-sm-8.col-md-8.text-right
${TEXTO_CONFIGURACAO}                 5 Noites\n1 pessoa por pacote
${CAMPO_PERIODO_DA_VIAGEM}            css=body > div.container > div > div.col-md-4.col-sm-4.hidden-xs > div.summary > div:nth-child(9) > div > div
${TEXTO_PERIODO_DA_VIAGEM_INICIO}     01 Ago 2022
${TEXTO_PERIODO_DA_VIAGEM_FIM}        30 Nov 2022
${FORMA_PAGAMENTO_BOLETO}             css=#ui-id-1
${CAMPO_NOME}                         css=#paymentMethods__bill > section > div:nth-child(2) > div:nth-child(1) > div > input
${NOME}                               tiago gomes
${CAMPO_CPF}                          css=#paymentMethods__bill > section > div:nth-child(2) > div:nth-child(2) > div > input
${CPF}                                70512767009
${CAMPO_CELULAR}                      css=#paymentMethods__bill > section > div:nth-child(2) > div:nth-child(3) > div > input
${CELULAR}                            11990000000
${CHECKBOX_ACEITAR_CONDICOES}         css=#cancellation-policy
${CAMPO_CANCELAMENTO_GRATIS}          css=#purchase-confirmation > div:nth-child(1) > div > div > div.free-cancellation-policy__message
${TEXTO_CANCELAMENTO_GRATIS}          Cancelamento Grátis! 


*** keyword ***
Abrir o site do Hurb
  Open Browser                    ${SITE}               ${NAVEGADOR}
  Maximize Browser Window
  #Set Selenium Speed              0.75

Esperar o popup abrir, clicar em "Mostrar detalhes" e permitir apenas cookies essenciais
  Sleep                           3
  Wait and Click                  ${BOTAO_DETALHES}
  Wait and Click                  ${BOTAO_PERMITIR_SELECAO}
  
Selecionar a opção "Pacotes"
  Wait and Click                  ${BOTAO_PACOTES}

Buscar por alguma cidade turística (Ex: Buenos Aires, Florença, Orlando) e clicar em "Pesquisar"
  Wait and Input Text             ${CAMPO_BUSCA}        ${BUSCA_SANANDRES}

Selecionar um pacote de viagem e clicar em pesquisar
  Wait and Click                  ${SELECIONAR_PACOTE}
  Wait and Click                  ${BOTAO_PESQUISAR}

Escolher um pacote
  Wait and Click                  ${SELECIONAR_RESULTADO_DA_BUSCA}

Continuar na nova janela
  Switch Window                   NEW

Escolher uma opção de viagem, clicar em "COMPRAR" e garantir oferta
  Wait and Click                  ${SELECIONAR_PRIMEIRO_RESULTADO}
  #Sleep                           10
  #Wait and Click                  ${BOTAO_GARANTIR_OFERTA}

Validar as informações da "Configuração" da viagem
  Element Should Contain          ${CAMPO_CONFIGURACAO}  ${TEXTO_CONFIGURACAO}

Validar as informações do período da viagem
  Element Should Contain          ${CAMPO_PERIODO_DA_VIAGEM}  ${TEXTO_PERIODO_DA_VIAGEM_INICIO}
  Element Should Contain          ${CAMPO_PERIODO_DA_VIAGEM}  ${TEXTO_PERIODO_DA_VIAGEM_FIM}

Selecionar a opção "Boleto parcelado"
  Wait and Click                  ${FORMA_PAGAMENTO_BOLETO}

Preencher os dados de pagamento
  Wait and Input Text             ${CAMPO_NOME}            ${NOME}
  Wait and Input Text             ${CAMPO_CPF}             ${CPF}
  Wait and Input Text             ${CAMPO_CELULAR}         ${CELULAR}

Marcar o checkbox "Li e aceito as condições de termos de uso e política de privacidade"
  Select Checkbox                 ${CHECKBOX_ACEITAR_CONDICOES}

Validar a informação sobre cancelamento grátis
  Element Should Contain          ${CAMPO_CANCELAMENTO_GRATIS}  ${TEXTO_CANCELAMENTO_GRATIS}




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
  Scroll Element Into View        ${ELEMENTO}
  Input Text                      ${ELEMENTO}       ${TEXTO}