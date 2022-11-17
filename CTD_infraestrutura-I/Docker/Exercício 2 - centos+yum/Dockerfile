# define a imagem base
FROM centos:latest
# define o mantenedor da imagem
LABEL maintainer="florianoneto"
# Atualiza a imagem com os pacotes
RUN yum update -y && yum upgrade -y
# Instala o APACHE2 para testar
RUN yum install httpd -y
# Expoe a porta 81
EXPOSE 81
# Comando para iniciar o APACHE2 no Container
CMD ["httpd", "-g", "daemon off;"]