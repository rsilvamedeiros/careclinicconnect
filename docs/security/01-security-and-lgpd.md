# Segurança e LGPD

> Documento de arquitetura e produto. Não substitui parecer jurídico.

## Princípios

Dados de saúde exigem proteção elevada.

O sistema deve considerar:

- minimização;
- finalidade;
- necessidade;
- controle de acesso;
- rastreabilidade;
- retenção;
- segurança.

## Requisitos

### Criptografia
- TLS em trânsito;
- criptografia de storage;
- proteção de backups;
- gestão segura de secrets.

### Controle de acesso
RBAC inicial, com possível evolução para ABAC.

Perfis possíveis:

- ADMIN
- MANAGER
- RECEPTIONIST
- PROFESSIONAL
- FINANCE
- COMMERCIAL

## Auditoria

Registrar ações críticas como:

- alteração de prontuário;
- exportação;
- alteração de permissão;
- assinatura;
- ações financeiras;
- acessos administrativos.

## Logs

Evitar registrar:

- prontuários completos;
- tokens;
- senhas;
- dados pessoais desnecessários.

## Consentimentos

Separar:

- termos contratuais;
- consentimentos clínicos;
- comunicação;
- uso de imagem.

Tudo deve ser versionável.

## Privacy by design

Toda feature deve responder:

1. quais dados coleta?
2. por quê?
3. quem acessa?
4. por quanto tempo?
5. é necessário?
6. precisa aparecer em logs?
7. pode ser exportado?
8. como será auditado?
