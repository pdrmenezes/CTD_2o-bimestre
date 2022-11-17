*** settings ***
Library        SeleniumLibrary
Resource       ./Hurb.resource
Test Setup     Abrir o site do Hurb
Test Teardown  Close Browser

*** test cases ***
Processo de reserva de pacote de viagens
  Esperar o popup abrir, clicar em "Mostrar detalhes" e permitir apenas cookies essenciais
  Selecionar a opção "Pacotes"
  Buscar por alguma cidade turística (Ex: Buenos Aires, Florença, Orlando) e clicar em "Pesquisar"
  Selecionar um pacote de viagem e clicar em pesquisar
  Escolher um pacote
  Continuar na nova janela
  Escolher uma opção de viagem, clicar em "COMPRAR" e garantir oferta
  Validar as informações da "Configuração" da viagem
  Validar as informações do período da viagem
  Selecionar a opção "Boleto parcelado"
  Preencher os dados de pagamento
  Marcar o checkbox "Li e aceito as condições de termos de uso e política de privacidade"
  Validar a informação sobre cancelamento grátis