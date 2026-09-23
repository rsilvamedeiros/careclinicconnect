# Critérios de Aceite do MVP

## Paciente

Dado um usuário autorizado,
quando cadastrar um paciente,
então o paciente deve:

- ficar associado ao tenant;
- aparecer em busca;
- gerar evento de auditoria;
- poder ser visualizado na timeline.

## Agendamento

Dado um profissional disponível,
quando um agendamento for criado,
então:

- o slot deve ser reservado;
- conflito deve ser impedido;
- evento deve ser gerado;
- automações configuradas devem poder reagir.

## Lead

Quando um lead for convertido,
então:

- deve ser possível associá-lo a um paciente;
- histórico comercial deve permanecer acessível;
- oportunidade deve ser marcada como ganha;
- conversão deve alimentar analytics.

## Segurança

Um usuário do tenant A nunca deve conseguir acessar dados do tenant B.

Esse requisito deve possuir teste automatizado.

## Auditoria

Mudanças em registros clínicos ou permissões devem gerar audit event com:

- ator;
- recurso;
- ação;
- horário.
