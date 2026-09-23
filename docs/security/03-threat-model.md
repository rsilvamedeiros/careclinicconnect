# Threat Model Inicial

## Ativos críticos

- prontuários;
- dados pessoais;
- documentos;
- fotos clínicas;
- credenciais;
- informações financeiras;
- audit logs.

## Ameaças

### Cross-tenant access
Risco crítico.

Mitigação:
- tenant context no backend;
- filtros obrigatórios;
- testes automatizados.

### Broken Access Control
Mitigação:
- autorização centralizada;
- permission checks;
- denial by default.

### Credential Theft
Mitigação:
- MFA futuro;
- sessões seguras;
- rate limit;
- alertas.

### Sensitive Data Leakage
Mitigação:
- logs sanitizados;
- criptografia;
- política de exportação.

### Malicious Upload
Mitigação:
- validação de tipo;
- tamanho;
- malware scanning quando aplicável;
- storage isolado.

### Webhook Forgery
Mitigação:
- HMAC;
- timestamps;
- replay protection.

### Prompt Injection
Para IA:
- tool permissions;
- contexto limitado;
- sanitização;
- aprovação humana.
