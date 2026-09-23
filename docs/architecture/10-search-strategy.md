# Estratégia de Busca

## MVP

PostgreSQL com:

- indexes;
- ILIKE controlado;
- full-text search quando útil.

## Busca global

Entidades:

- pacientes;
- leads;
- profissionais;
- agendamentos;
- documentos por metadata.

## Futuro

Adicionar mecanismo dedicado somente quando volume justificar.

Possibilidades:

- OpenSearch;
- Elasticsearch;
- Meilisearch.

## Segurança

Resultados sempre filtrados por:

- tenant;
- permissões;
- escopo do usuário.
