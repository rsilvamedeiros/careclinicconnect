# Máquinas de Estado

## Appointment

```text
DRAFT
  -> SCHEDULED
  -> CONFIRMED
  -> CHECKED_IN
  -> IN_PROGRESS
  -> COMPLETED
```

Saídas alternativas:

```text
SCHEDULED -> CANCELLED
CONFIRMED -> CANCELLED
SCHEDULED -> NO_SHOW
CONFIRMED -> NO_SHOW
```

## Lead

```text
NEW
 -> CONTACTED
 -> QUALIFIED
 -> EVALUATION_SCHEDULED
 -> PROPOSAL
 -> WON
```

Alternativas:

```text
ANY_ACTIVE_STAGE -> LOST
ANY_ACTIVE_STAGE -> ON_HOLD
```

## Procedure Journey

```text
PLANNED
 -> SCHEDULED
 -> IN_PROGRESS
 -> COMPLETED
 -> FOLLOW_UP
 -> CLOSED
```

## Document

```text
DRAFT
 -> GENERATED
 -> SENT
 -> VIEWED
 -> SIGNED
```

Alternativas:

```text
DRAFT -> CANCELLED
SENT -> EXPIRED
```

## Regra

Transições devem ser validadas no domínio, não apenas na interface.
