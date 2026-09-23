# CareClinicConnect

> Ecossistema inteligente para clínicas, profissionais de saúde, estética e operações de cuidado.

## Visão

O CareClinicConnect nasce para não ser apenas mais um SaaS de agenda, prontuário ou gestão administrativa.

A proposta é construir uma plataforma modular que conecte:

- cuidado;
- operação clínica;
- experiência do paciente;
- relacionamento;
- automação;
- inteligência artificial;
- dados;
- financeiro;
- crescimento;
- integrações.

O produto deve evoluir para diferentes segmentos de saúde sem perder consistência de arquitetura.

## Conceito do nome

- **Care**: cuidado, acompanhamento, experiência e relacionamento.
- **Clinic**: clínica, medicina, profissionais e operação assistencial.
- **Connect**: conexão entre paciente, profissional, clínica, dados, sistemas e processos.

## Posicionamento

**CareClinicConnect: a plataforma que conecta cuidado, operação e crescimento da clínica.**

A plataforma deve se posicionar como um **Clinical Experience & Operations Platform**, indo além de sistemas tradicionais de agenda e prontuário.

## Nicho inicial recomendado

O primeiro recorte de mercado deve priorizar negócios com:

- maior ticket;
- forte relacionamento com o paciente;
- procedimentos recorrentes;
- necessidade de acompanhamento pré e pós-procedimento;
- operação comercial;
- uso de fotos;
- consentimentos;
- orçamentos e pacotes.

Segmentos iniciais:

1. medicina estética;
2. clínicas de estética;
3. dermatologia;
4. cirurgia plástica;
5. clínicas multiprofissionais com procedimentos.

## Filosofia de produto

Toda funcionalidade deve responder pelo menos uma destas perguntas:

1. Reduz trabalho manual?
2. Melhora a experiência do paciente?
3. Aumenta a eficiência da clínica?
4. Reduz risco operacional?
5. Melhora conversão ou retenção?
6. Gera dados úteis para decisão?
7. Conecta processos antes fragmentados?
8. Permite automação segura?

Se uma funcionalidade não contribuir para nenhum desses objetivos, sua prioridade deve ser questionada.

## Estrutura da documentação

- `docs/product/` — visão, escopo, personas, módulos e regras.
- `docs/architecture/` — arquitetura técnica e modelo de domínio.
- `docs/security/` — segurança, privacidade, auditoria e LGPD.
- `docs/ai/` — arquitetura e casos de uso de IA.
- `docs/ux/` — princípios de experiência.
- `docs/business/` — estratégia, monetização e métricas.
- `docs/roadmap/` — MVP e evolução.
- `docs/engineering/` — padrões de desenvolvimento.
- `prompts/` — prompts para uso com Claude Code.

## Regra para desenvolvimento com IA

O Claude Code deve tratar os documentos deste repositório como fonte de verdade do produto.

Antes de implementar uma feature relevante:

1. identificar o domínio afetado;
2. revisar documentação relacionada;
3. propor impacto técnico;
4. evitar duplicidade;
5. preservar arquitetura multi-tenant;
6. considerar segurança e LGPD;
7. documentar decisões novas.

Não transformar o projeto em um CRUD genérico.
