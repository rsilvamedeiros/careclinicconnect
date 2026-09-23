# Estratégia de Testes

## Unit

Testar:

- regras;
- transições;
- cálculos;
- policies;
- validações.

## Integration

Testar:

- repositories;
- banco;
- filas;
- integração entre módulos.

## Contract

Para integrações externas e APIs internas importantes.

## E2E

Fluxos prioritários:

1. login;
2. criação de paciente;
3. criação de agendamento;
4. confirmação;
5. lead -> paciente;
6. orçamento -> procedimento;
7. workflow.

## Security Tests

Obrigatórios:

- tenant isolation;
- permission denial;
- IDOR;
- export authorization.

## Regression

Toda correção de bug crítico deve adicionar teste.
