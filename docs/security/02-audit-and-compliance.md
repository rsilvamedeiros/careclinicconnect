# Auditoria e Compliance

## Audit Trail

```text
AuditEvent
- id
- tenant_id
- actor_id
- actor_type
- action
- resource_type
- resource_id
- metadata
- ip
- user_agent
- occurred_at
```

## Eventos críticos

- alteração de prontuário;
- exportação de paciente;
- alteração de permissões;
- consentimento;
- exclusão;
- alteração financeira;
- autenticação suspeita.

## Histórico clínico

Evitar edição destrutiva sem rastreabilidade.

Usar:

- revisão;
- retificação;
- nova versão;
- autor;
- timestamp.

## Backups

- automáticos;
- criptografados;
- restore testado;
- retenção definida.

## Incidentes

Fluxo:

1. identificação;
2. contenção;
3. investigação;
4. recuperação;
5. registro;
6. comunicação quando aplicável.
