# Arquitetura Backend

## Organização

```text
src/
├── modules/
│   ├── identity/
│   ├── tenancy/
│   ├── patients/
│   ├── scheduling/
│   ├── crm/
│   ├── clinical/
│   ├── procedures/
│   ├── documents/
│   ├── automation/
│   └── finance/
├── shared/
├── infrastructure/
└── bootstrap/
```

## Por módulo

```text
patients/
├── domain/
├── application/
├── infrastructure/
└── presentation/
```

## Domain

Contém:

- entidades;
- value objects;
- regras;
- domain events;
- interfaces.

## Application

Contém:

- use cases;
- commands;
- queries;
- DTOs.

## Infrastructure

Contém:

- banco;
- repositories;
- filas;
- integrações.

## Presentation

Contém:

- controllers;
- request validation;
- response mapping.

## Regra

O domínio não deve depender de framework HTTP ou ORM.
