from selenium import webdriver

driver = webdriver.Chrome()
driver.get('http://saucedemo.com')

CAMPO_USUARIO = driver.find_element_by_css_selector('#user-name').send_keys('standard_user')
CAMPO_SENHA = driver.find_element_by_css_selector('#password').send_keys('secret_sauce')
BOTAO_LOGIN = driver.find_element_by_css_selector('#login-button').click()
PRODUTO = driver.find_element_by_css_selector('#item_4_title_link > div').click()
ADICIONAR = driver.find_element_by_css_selector('#add-to-cart-sauce-labs-backpack').click()
CARRINHO = driver.find_element_by_css_selector('#shopping_cart_container > a').click()
CHECKOUT = driver.find_element_by_css_selector('#checkout').click()
CAMPO_NOME = driver.find_element_by_css_selector('#first-name').send_keys('Tiago')
CAMPO_SOBRENOME = driver.find_element_by_css_selector('#last-name').send_keys('Gomes')
CAMPO_CEP = driver.find_element_by_css_selector('#postal-code').send_keys('00000')
BOTAO_CONTINUE = driver.find_element_by_css_selector('#continue').click()
BOTAO_FINISH = driver.find_element_by_css_selector('#finish').click()