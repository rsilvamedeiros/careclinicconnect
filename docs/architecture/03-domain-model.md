# Modelo de Domínio Inicial

## Entidades

### Tenant
- id
- name
- status
- plan

### Unit
- id
- tenant_id
- name
- timezone
- address

### User
- id
- tenant_id
- identity
- status

### Professional
- id
- tenant_id
- user_id
- specialty
- registration

### Patient
- id
- tenant_id
- profile
- contacts
- metadata

### Appointment
- id
- tenant_id
- patient_id
- professional_id
- unit_id
- start_at
- end_at
- status

### ClinicalEncounter
- id
- appointment_id
- patient_id
- professional_id
- status

### ClinicalRecordEntry
- encounter_id
- type
- payload
- author
- timestamp

### Procedure
- id
- tenant_id
- name
- category

### Lead
- id
- tenant_id
- source
- status
- owner

### Opportunity
- lead_id
- patient_id
- amount
- stage

### Workflow
- trigger
- conditions
- actions

### AuditEvent
- tenant_id
- actor
- action
- resource
- timestamp

## Eventos de domínio

- PatientCreated
- AppointmentCreated
- AppointmentConfirmed
- AppointmentCancelled
- AppointmentCompleted
- LeadCreated
- OpportunityWon
- ProcedureScheduled
- ConsentSigned
- PaymentReceived
- PatientInactiveDetected

Eventos não devem carregar dados sensíveis desnecessários.
