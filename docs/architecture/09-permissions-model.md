# Modelo de Permissões

## Papéis iniciais

### OWNER
Acesso administrativo total do tenant.

### ADMIN
Gerencia operação, usuários e configurações, conforme delegação.

### MANAGER
Acesso operacional amplo e dashboards.

### RECEPTIONIST
Agenda, pacientes, comunicação e tarefas operacionais.

### PROFESSIONAL
Agenda própria, pacientes autorizados e prontuário clínico.

### COMMERCIAL
CRM, oportunidades e dados comerciais permitidos.

### FINANCE
Cobrança, pagamentos, repasses e relatórios financeiros.

## Permission Keys

Exemplos:

```text
patient.read
patient.create
patient.update

appointment.read
appointment.create
appointment.cancel

clinical.read
clinical.write

crm.read
crm.manage

finance.read
finance.manage

users.manage
settings.manage
```

## Regra

Autorização deve ocorrer no backend.

Ocultar UI não é mecanismo de segurança.
