# Qualidade de Software

## Unit
Foco em regras de negócio.

## Integration
- banco;
- repositories;
- APIs;
- filas.

## E2E
Fluxos críticos:

- login;
- paciente;
- agendamento;
- lead;
- conversão;
- procedimento.

## Definition of Done

Uma feature crítica deve possuir:

- validação;
- tratamento de erro;
- autorização;
- testes;
- observabilidade;
- documentação;
- audit trail quando necessário.

## CI

1. install;
2. lint;
3. typecheck;
4. unit;
5. integration;
6. build;
7. security checks;
8. deploy preview/staging.

## Feature flags

Recursos de maior risco devem ser liberados progressivamente.
