# Planned Architecture: Tenant Onboarding Flow

This directory contains the detailed planning documentation for the new Tenant Onboarding & Branding workflow.

## Documentation Index

### [00. Activity Overview](./images/activity.puml)
High-level visual representation of the user journey and system interactions (PlantUML).

### [01. Data Models & Schemas](./01_data_models.md)
Detailed breakdown of the database schema, including:
- Entity Relationship Diagram (ERD)
- Field-level definitions for Tenants, Branding, Websites, and Integrations.
- **[View ERD Source](./images/schema_erd.puml)**

### [02. System Architecture & Modules](./02_architecture_and_modules.md)
Technical architecture overview, covering:
- Frontend/Backend separation
- Background worker strategies for AI generation
- External API integration patterns (Sync vs Async)
- **[View Architecture Diagram Source](./images/system_architecture.puml)**

---

## Flow Summary

The onboarding process is designed to be a seamless, guided experience for new tenants.

1.  **Naming & Domain**: Real-time validation against ASIC registry and Cloudflare.
2.  **Branding Generation**: AI-driven creation of logos, colors, and assets.
3.  **Website Creation**: Auto-generated marketing site based on branding (Deferrable).
4.  **Google Workspace**: Automated email provisioning.
5.  **Twilio Setup**: Phone number selection and regulatory compliance.
6.  **Payments**: Embedded Whop setup for white-labeled processing.

## Key Principles

-   **Voice + Text**: Multimodal input throughout the flow.
-   **Async by Default**: Long-running tasks (generation, provisioning) shouldn't block the UI.
-   **Resumable**: State is saved at every step (`OnboardingProgress`).