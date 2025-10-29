# NuclearPayX – Fintech Infrastructure-as-a-Service

## Overview

**NuclearPayX** is a modular, cloud-ready **Fintech Infrastructure-as-a-Service (IaaS)** platform built to power secure payment processing, digital wallets, and transaction management.
It follows a **microservices architecture**, ensuring scalability, observability, and flexibility to integrate with AI, blockchain, or third-party financial systems in the future.

This repository serves as the **monorepo** for all backend microservices, starting with the **Gateway service**.

---

## Core Microservices (Planned)

| Service                  | Description                                                  | Status                  |
| ------------------------ | ------------------------------------------------------------ | ----------------------- |
| **Gateway**              | API Gateway for routing, validation, and unified entry point | Completed – v0.1 Stable |
| **User Service**         | Handles user registration, authentication, and KYC profiles  | Planned                 |
| **Wallet Service**       | Manages balances, fund transfers, and payment accounts       | Planned                 |
| **Transaction Service**  | Handles transaction creation, tracking, and reconciliation   | Planned                 |
| **Notification Service** | Sends email, SMS, and in-app notifications                   | Planned                 |
| **Analytics Service**    | Provides insights, reports, and anomaly detection            | Planned                 |

---

## Tech Stack

**Backend:** Node.js, Express.js, TypeScript
**Build Tools:** ts-node-dev, TypeScript
**Quality:** ESLint, Prettier, Husky, Lint-Staged
**Config Validation:** Zod
**Logging:** Winston
**Environment:** dotenv
**Future Integrations:** Docker, Redis, PostgreSQL, Kafka, OpenTelemetry

---

## Current Progress

### Gateway Service – v0.1 Stable

The gateway acts as the **entry point** for all client and service requests.
It provides health endpoints, global error handling, and validated environment configuration.

---

## Architecture Vision

```
┌─────────────────────────────┐
│         API Gateway          │
│     (Request validation)     │
└──────────────┬──────────────┘
               │
 ┌─────────────┼──────────────┐
 │             │              │
▼              ▼              ▼
User Service   Wallet Service  Transaction Service
(Authentication,  (Balance,     (Payments,
KYC, RBAC)        Transfers)     Reconciliation)

   ▼ Notifications & Events via Kafka/Redis
   ▼ Centralized Logging + Monitoring (ELK / OpenTelemetry)
```

---

## Developer Setup

```bash
# 1. Clone the repository
 git clone https://github.com/kandilidinesh/nuclearpayx.git
 cd nuclearpayx

# 2. Install dependencies
 npm install

# 3. Navigate to a microservice (e.g., Gateway)
 cd gateway
 npm install

# 4. Run in dev mode
 npm run dev
```

Lint and format automatically run on every commit via Husky.

---

## License

This project is licensed under the **ISC License**.

---

## Last Updated

**October 30, 2025**
