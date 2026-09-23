# Catálogo de Eventos

## Patients

### patient.created
Payload mínimo:
- patient_id
- tenant_id
- occurred_at

### patient.updated

## Scheduling

### appointment.created
### appointment.confirmed
### appointment.cancelled
### appointment.completed
### appointment.no_show

## CRM

### lead.created
### lead.assigned
### lead.converted
### opportunity.won
### opportunity.lost

## Procedures

### procedure.scheduled
### procedure.completed

## Documents

### document.generated
### document.sent
### document.signed

## Finance

### payment.created
### payment.confirmed
### payment.failed

## Automation

### workflow.triggered
### workflow.completed
### workflow.failed

## Regras

- payload mínimo;
- evitar PHI desnecessária;
- eventos versionados;
- consumers idempotentes;
- correlation_id obrigatório.
