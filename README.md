# Testecodex

Este repositório contém um projeto de exemplo utilizando [Django](https://www.djangoproject.com/).

## Configuração do ambiente

1. Crie um ambiente virtual e ative-o:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
3. Execute as migrações e inicie o servidor de desenvolvimento:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

Após a inicialização, acesse `http://127.0.0.1:8000/` para verificar o projeto padrão do Django.
