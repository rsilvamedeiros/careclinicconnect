# Requisitos Não Funcionais

## Segurança

- TLS obrigatório;
- secrets fora do código;
- senhas nunca armazenadas em texto;
- RBAC;
- isolamento por tenant;
- audit logs;
- rate limiting;
- proteção contra ataques comuns.

## Performance

Metas iniciais:

- P95 de APIs comuns abaixo de 500ms, excluindo integrações externas;
- páginas principais com carregamento percebido rápido;
- operações pesadas assíncronas;
- paginação obrigatória em listas grandes.

## Disponibilidade

MVP:

- objetivo operacional de 99,5% ou superior;
- health checks;
- monitoração;
- backups.

## Escalabilidade

- aplicações stateless;
- workers horizontalmente escaláveis;
- cache desacoplado;
- storage externo.

## Manutenibilidade

- módulos isolados;
- tipagem;
- testes;
- documentação;
- migrations;
- ADRs.

## Observabilidade

- logs estruturados;
- métricas;
- tracing progressivo;
- alertas.

## Internacionalização

Arquitetura preparada para i18n, apesar do MVP ser pt-BR.

## Timezone

Datas armazenadas em UTC e apresentadas conforme unidade/usuário.
