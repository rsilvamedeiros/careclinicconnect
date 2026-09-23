# CI/CD

## Pull Request

Executar:

1. install;
2. lint;
3. typecheck;
4. unit tests;
5. integration tests relevantes;
6. build;
7. security checks.

## Merge

Deploy automático em ambiente de desenvolvimento ou staging.

## Produção

Preferir:

- aprovação;
- migrations controladas;
- health checks;
- rollback;
- feature flags.

## Estratégia

Evitar deploys gigantes.

Preferir mudanças pequenas e reversíveis.

## Database migrations

Migrations devem ser:

- backward compatible quando possível;
- executadas de forma controlada;
- observáveis;
- testadas.
