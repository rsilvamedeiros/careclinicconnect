# Coding Standards

## TypeScript

- strict mode;
- evitar `any`;
- DTOs explícitos;
- enums ou unions bem definidos;
- schemas para boundaries.

## Naming

- nomes orientados ao domínio;
- evitar nomes genéricos como `utils2`, `data`, `manager`.

## Functions

- pequenas;
- responsabilidade única;
- efeitos colaterais claros.

## Errors

Criar erros de domínio específicos.

Exemplo:

- AppointmentConflictError
- PatientNotFoundError
- PermissionDeniedError

## Comments

Comentar o motivo, não repetir o código.

## Dependency Rule

Camadas internas não dependem de infraestrutura.
