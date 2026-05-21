# Formulário ACCTA + Google Sheets

Este formulário já está preparado para enviar respostas para um `Google Sheets` através de `Google Apps Script`.

## Como funciona

1. O associado preenche o formulário.
2. A página envia os dados para um endpoint do `Google Apps Script`.
3. O script grava uma nova linha numa folha chamada `Respostas`.
4. A consulta passa a ser feita diretamente no `Google Sheets`.

## Configuração rápida

### 1. Criar a folha

- Cria um novo `Google Sheets`
- Dá o nome `Respostas` à primeira folha
- Na primeira linha, cria estes cabeçalhos:

`Data de registo | Nome completo | Data de nascimento | Telefone | E-mail | LinkedIn | Facebook | Instagram | X/Twitter | Outra rede social | Observações | SubmittedAt`

### 2. Criar o Apps Script

- No Google Sheets, abre `Extensões > Apps Script`
- Apaga o conteúdo inicial
- Cola o conteúdo de [google-apps-script.js](/Users/kisoroliveira/Documents/Codex/2026-05-21/ok-lets-work-on-something-really/google-apps-script.js)
- Guarda o projeto

### 3. Publicar o endpoint

- Clica em `Implementar > Nova implementação`
- Escolhe `Aplicação Web`
- Em acesso, escolhe uma opção compatível com quem vai submeter o formulário
- Normalmente a opção mais prática é permitir acesso a `Qualquer pessoa`
- Faz a implementação e copia o URL gerado

### 4. Ligar o formulário

- Abre [index.html](/Users/kisoroliveira/Documents/Codex/2026-05-21/ok-lets-work-on-something-really/index.html)
- Procura esta constante:

```js
const GOOGLE_SCRIPT_URL = "";
```

- Cola o URL da tua aplicação web entre aspas

Exemplo:

```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec";
```

## Como consultar os dados

Depois disso, todas as respostas ficam visíveis diretamente no `Google Sheets`, uma por linha.

Podes:

- filtrar respostas
- ordenar por data
- exportar para Excel
- partilhar a folha com a direção

## Estado atual

Se `GOOGLE_SCRIPT_URL` estiver vazio, o formulário:

- não envia para o Google Sheets
- mostra um aviso visual
- guarda a última submissão apenas no navegador como fallback
