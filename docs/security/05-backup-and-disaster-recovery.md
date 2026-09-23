# Backup e Disaster Recovery

## Backup

- banco automático;
- storage versionado quando aplicável;
- criptografia;
- retenção definida;
- testes periódicos de restore.

## RPO / RTO

Definir formalmente antes de produção.

Sugestão inicial de meta:

- RPO: até algumas horas no estágio inicial;
- RTO: algumas horas.

Esses números devem ser ajustados conforme contratos e maturidade.

## Runbook

Em desastre:

1. declarar incidente;
2. congelar mudanças;
3. identificar impacto;
4. restaurar serviços;
5. validar integridade;
6. comunicar;
7. documentar post-mortem.
