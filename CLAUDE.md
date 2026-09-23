# CLAUDE.md — CareClinicConnect

Este arquivo contém as instruções principais para desenvolvimento do projeto com Claude Code.

## Objetivo

Construir o CareClinicConnect como uma plataforma moderna, modular e escalável para operações clínicas, experiência do paciente e crescimento.

Não desenvolver apenas um SaaS tradicional de:

- agenda;
- prontuário;
- cadastro;
- financeiro.

Esses recursos são parte do core, mas o diferencial deve estar na conexão entre dados, processos, automações, CRM, experiência do paciente e inteligência.

## Fonte de verdade

Leia primeiro:

1. `README.md`
2. `docs/product/01-product-vision.md`
3. `docs/product/02-product-principles.md`
4. `docs/product/05-modules.md`
5. `docs/architecture/01-system-architecture.md`
6. `docs/security/01-security-and-lgpd.md`
7. `docs/roadmap/01-mvp.md`

## Princípios técnicos

- TypeScript end-to-end quando possível.
- Arquitetura modular.
- Separação clara de domínios.
- Multi-tenancy como requisito estrutural.
- Segurança por padrão.
- Auditoria para operações sensíveis.
- APIs versionáveis.
- Evitar acoplamento direto entre módulos.
- Eventos de domínio para integrações internas relevantes.
- Feature flags para funcionalidades experimentais.
- Observabilidade desde o início.
- Testes focados em regras de negócio críticas.

## Princípios de produto

Antes de codificar uma feature, verificar:

- qual dor real resolve;
- quem é o usuário;
- como afeta a jornada;
- se já existe em outro módulo;
- quais dados sensíveis manipula;
- quais permissões são necessárias;
- quais eventos precisam ser auditados;
- quais métricas devem ser coletadas.

## Regras de IA

IA nunca deve:

- substituir decisão médica;
- gerar diagnóstico autônomo;
- prescrever autonomamente;
- alterar prontuário sem confirmação;
- ocultar incerteza;
- agir fora das permissões do usuário.

IA pode:

- resumir;
- estruturar;
- sugerir;
- classificar;
- auxiliar documentação;
- identificar padrões;
- automatizar rotinas administrativas;
- apoiar busca de informação.

Toda ação clínica relevante sugerida por IA deve exigir revisão humana.

## Convenções de implementação

Preferir:

- módulos pequenos;
- nomes explícitos;
- services com responsabilidade clara;
- validação de entrada;
- schemas versionados;
- migrations controladas;
- idempotência em integrações;
- filas para processamento assíncrono;
- logs estruturados;
- correlation IDs;
- testes de unidade para domínio;
- testes de integração para persistência e APIs;
- E2E para fluxos críticos.

## Regra de documentação

Quando uma decisão arquitetural importante for tomada, criar ou atualizar um ADR em:

`docs/architecture/adr/`

Formato:

- contexto;
- decisão;
- alternativas;
- consequências;
- data;
- status.

## Convenções de Git & Commits

- **Mensagens de commit em inglês** — manter padronização internacional
- **Sem commits automáticos** — Claude Code sempre aguarda revisão do usuário antes de fazer commit
- **Workflow**: Mudanças são apresentadas via `git diff`, usuário revisa e aprova, depois Claude faz o commit
- **Uma mudança = um commit** — manter histórico limpo e rastreável

## Antes de executar grandes mudanças

Apresente:

1. objetivo;
2. arquivos afetados;
3. alteração de domínio;
4. riscos;
5. plano de implementação;
6. testes esperados.

Depois implemente em pequenos passos.
