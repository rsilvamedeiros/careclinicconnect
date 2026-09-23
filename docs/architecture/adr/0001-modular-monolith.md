# ADR 0001 — Modular Monolith

## Status
Proposto.

## Contexto

O CareClinicConnect possuirá vários domínios e poderá crescer para arquitetura distribuída.

Microserviços desde o início aumentariam custo e complexidade sem validação de escala.

## Decisão

Iniciar como Modular Monolith com:

- módulos de domínio;
- contratos explícitos;
- eventos;
- filas;
- boundaries.

## Consequências

### Positivas
- velocidade;
- menor infraestrutura;
- debugging simples;
- transações mais fáceis.

### Negativas
- exige disciplina;
- risco de acoplamento se boundaries forem ignorados.

## Evolução

Extrair serviços apenas quando houver motivação concreta.
