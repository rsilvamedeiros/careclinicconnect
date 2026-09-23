# Estratégia de IA

## Objetivo

Usar IA para reduzir tarefas operacionais e transformar dados em apoio prático aos usuários.

IA é uma camada transversal do produto.

## Casos iniciais

### Assistente de recepção
- responder FAQs;
- consultar horários;
- orientar preparo;
- resumir conversas;
- encaminhar casos.

### Copiloto de atendimento
- estruturar notas;
- resumir histórico;
- preparar rascunho.

Sempre sujeito à revisão do profissional.

### CRM
- classificar intenção;
- resumir lead;
- sugerir próxima ação;
- detectar lead sem follow-up.

### Gestão
- explicar indicadores;
- apontar anomalias;
- gerar resumo operacional.

## Restrições

IA não deve:

- diagnosticar autonomamente;
- alterar informação clínica sem revisão;
- prescrever autonomamente;
- agir fora de permissões.

## AI Gateway

Criar uma camada central para:

- seleção de modelo;
- prompts;
- redaction;
- rate limits;
- custos;
- fallback;
- observabilidade;
- políticas.

Evitar chamadas diretas a provedores espalhadas pelo código.
