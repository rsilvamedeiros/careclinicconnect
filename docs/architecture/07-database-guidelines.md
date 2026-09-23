# Banco de Dados

## Principal

PostgreSQL.

## IDs

Preferir UUID/UUIDv7 ou identificadores similares adequados a sistemas distribuídos.

## Timestamps

Padrão:

- created_at
- updated_at
- deleted_at quando houver soft delete

## Tenant

Entidades de negócio devem possuir `tenant_id` quando aplicável.

## Soft Delete

Usar apenas quando fizer sentido.

Não usar como substituto de histórico/auditoria.

## Índices

Criar índices para:

- tenant_id;
- foreign keys;
- campos de busca;
- status;
- datas operacionais.

## JSONB

Pode ser utilizado para:

- configurações;
- metadata;
- formulários dinâmicos.

Evitar transformar todo o domínio em JSONB.

## Migrations

Toda alteração de schema deve possuir migration versionada.

## Dados sensíveis

Avaliar criptografia em nível de coluna para casos específicos.
