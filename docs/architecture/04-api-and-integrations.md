# APIs e Integrações

## API

- REST;
- JSON;
- versionamento;
- OpenAPI.

Exemplo:

```text
/api/v1/patients
/api/v1/appointments
/api/v1/leads
/api/v1/procedures
```

## Webhooks

Possíveis eventos:

- appointment.created
- appointment.updated
- patient.created
- patient.updated
- opportunity.won
- payment.received
- document.signed

## Boas práticas

- assinatura HMAC;
- timestamp;
- retry;
- idempotency key;
- dead letter;
- logs;
- rate limits;
- versionamento.

## Integrações prioritárias

1. WhatsApp;
2. pagamentos;
3. assinatura digital;
4. calendário externo;
5. e-mail;
6. SMS.

## Futuras

- laboratórios;
- ERPs;
- contabilidade;
- operadoras;
- marketing;
- interoperabilidade em saúde.
