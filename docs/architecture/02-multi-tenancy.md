# Multi-Tenancy

## Conceito

Cada organização é um tenant.

Um tenant pode possuir:

- uma ou várias clínicas;
- uma ou várias unidades;
- diversos profissionais;
- diversos usuários.

## Estratégia MVP

Shared Database / Shared Schema com `tenant_id`.

## Regras obrigatórias

- tenant nunca é confiado apenas pelo frontend;
- tenant é resolvido pelo contexto autenticado;
- queries filtradas por tenant;
- testes de isolamento;
- logs contendo contexto de tenant;
- jobs carregam tenant;
- caches incluem tenant na chave;
- storage isolado logicamente.

## Futuro

Clientes enterprise podem demandar:

- banco dedicado;
- storage dedicado;
- região dedicada;
- políticas específicas.
