# Estratégia de Especialidades

## Core compartilhado

Toda especialidade reutiliza:

- identidade;
- paciente;
- agenda;
- financeiro;
- CRM;
- documentos;
- comunicação;
- automações;
- analytics.

## Pacotes verticais

### Medicina estética
- procedimentos;
- sessões;
- fotos;
- pacotes;
- avaliação;
- retorno;
- consentimentos;
- follow-up.

### Dermatologia
- mapa corporal futuro;
- fotos seriadas;
- lesões;
- tratamentos;
- evolução.

### Cirurgia plástica
- pré-operatório;
- exames;
- checklist;
- termos;
- cirurgia;
- pós-operatório;
- retornos;
- fotos de evolução.

### Odontologia — futuro
- odontograma;
- planos de tratamento;
- procedimentos;
- imagens;
- orçamento.

### Psicologia — futuro
- agenda;
- recorrência;
- notas protegidas;
- teleatendimento;
- cobrança recorrente.

### Fisioterapia — futuro
- planos terapêuticos;
- sessões;
- evolução funcional;
- exercícios.

## Regra arquitetural

Especialidades não devem gerar forks do sistema.

Preferir:

- schemas configuráveis;
- feature modules;
- templates;
- extensões;
- custom fields;
- regras por tenant.
