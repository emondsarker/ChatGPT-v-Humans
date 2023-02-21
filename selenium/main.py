from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# Start a webdriver instance and open ChatGPT
driver = webdriver.Chrome()
driver.get('https://chat.openai.com/chat')
driver.implicitly_wait(200)

input_field = driver.find_element('xpath', '//*[@id="__next"]/div[1]/div[1]/main/div[2]/form/div/div[2]/textarea')
input_field.send_keys('Hello, I have a question.')

input_field.send_keys(Keys.ENTER)

driver.implicitly_wait(10)

response = driver.find_element_by_xpath('//div[@class="message last"]//div[@class="message-text"]')
print(response.text)
