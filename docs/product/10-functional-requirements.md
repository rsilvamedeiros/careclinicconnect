# Requisitos Funcionais

## FR-001 — Tenant

O sistema deve permitir criação e configuração de organizações.

### Critérios
- organização possui identificador único;
- usuários pertencem a uma organização;
- dados devem ser isolados por tenant.

## FR-002 — Usuários e permissões

O sistema deve permitir:

- convite;
- ativação;
- bloqueio;
- papéis;
- permissões.

## FR-003 — Pacientes

Deve ser possível:

- cadastrar;
- editar;
- pesquisar;
- adicionar contatos;
- registrar responsáveis;
- adicionar tags;
- visualizar timeline.

## FR-004 — Agenda

Deve permitir:

- criação de agenda por profissional;
- bloqueios;
- agendamento;
- cancelamento;
- remarcação;
- confirmação;
- no-show;
- lista de espera.

## FR-005 — CRM

Deve permitir:

- criação de lead;
- origem;
- responsável;
- pipeline;
- oportunidade;
- follow-up;
- conversão lead -> paciente.

## FR-006 — Procedimentos

Deve permitir:

- catálogo;
- preço;
- duração;
- sessões;
- pacotes;
- orçamento;
- status do tratamento.

## FR-007 — Documentos

Deve permitir:

- upload;
- templates;
- versionamento;
- associação ao paciente;
- consentimentos.

## FR-008 — Fotos clínicas

Deve permitir:

- upload;
- categorização;
- data;
- procedimento relacionado;
- comparação temporal;
- controle de acesso.

## FR-009 — Comunicação

Deve permitir:

- templates;
- histórico;
- disparos transacionais;
- vínculo com paciente ou lead.

## FR-010 — Automação

Usuário autorizado deve poder configurar:

- trigger;
- condição;
- delay;
- ação.

## FR-011 — Dashboard

Deve apresentar indicadores por período, unidade e profissional.

## FR-012 — Auditoria

Operações críticas devem gerar eventos imutáveis de auditoria.
