# 🛠️ CarrApp - Backend

O **CarrApp Backend** é uma **API REST** desenvolvida em **Spring Boot** para gerenciamento de veículos.  
O sistema implementa um CRUD completo para **marcas, modelos e carros**, além de fornecer estatísticas via **dashboard**.  
Projeto criado para testes como parte do desafio técnico **WS Work**.

---

## 🚗 Principais Funcionalidades

- 🚘 **Gestão de Marcas** → cadastro, consulta, atualização e exclusão  
- 📋 **Gestão de Modelos** → controle completo de modelos associados às marcas  
- 🚙 **Gestão de Carros** → registro detalhado de veículos (ano, cor, etc.)  
- 📊 **Dashboard** → estatísticas gerais para acompanhamento dos dados  

---

## ⚙️ Características Técnicas

- Arquitetura **RESTful** seguindo padrões do **Spring Boot**  
- Relacionamentos entre entidades: **Marca → Modelo → Carro**  
- **Validação de dados** com *Bean Validation*  
- Persistência com **PostgreSQL** e **JPA/Hibernate**  
- Respostas padronizadas em **JSON**  

---

## 🚀 Tecnologias Utilizadas

- ☕ **Java 17+**  
- 🌱 **Spring Boot 3.x**  
- 🗄️ **PostgreSQL**  
- 🛠️ **Maven**  
- 🧩 **Spring Data JPA / Hibernate**  
- ✅ **Bean Validation (Jakarta Validation)**  
- ✨ **Lombok** (redução de boilerplate)  

---

## 📦 Pré-requisitos

- Java **17** ou superior  
- Maven **3.6+**  
- PostgreSQL **13+** configurado  
- IDE de sua escolha (**IntelliJ IDEA**, **Eclipse**, **VS Code**)  
- Git  

---

## 🗂️ Collections de Teste

Para facilitar os testes da API, na pasta /collections do projeto você encontrará arquivos de Collections (Postman/Insomnia) contendo todos os endpoints já configurados.

Basta importar a Collection na sua ferramenta favorita e começar a testar 🚀
---

# 📖 Documentação com Swagger

- O projeto utiliza o Swagger (via springdoc-openapi) para geração automática da documentação interativa da API.

- Swagger UI → http://localhost:8080/swagger-ui.html

# Crie o banco de dados:

CREATE DATABASE carsdb;


```bash
spring.application.name=cars
spring.datasource.url=jdbc:postgresql://localhost:5432/carsdb
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

server.port=8080
