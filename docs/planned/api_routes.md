# API Routes Specification

## Overview
Base URL: `/api/v1`
Authentication: Bearer Token (JWT)

## 1. Tenant & Onboarding Session

### Start Onboarding
Initializes the onboarding process for a newly signed tenant.
- **POST** `/onboarding/initialize`
- **Body:** `{ "contract_id": "string" }`
- **Response:** `{ "tenant_id": "uuid", "onboarding_status": "started" }`

### Get Progress
- **GET** `/onboarding/{tenant_id}/progress`
- **Response:**
```json
{
  "current_step": 1,
  "steps": {
    "naming": "pending",
    "branding": "pending",
    "website": "pending",
    "google_workspace": "pending",
    "twilio": "pending",
    "whop": "pending"
  }
}
```

### Save Progress
- **PUT** `/onboarding/{tenant_id}/step/{step_name}`
- **Body:** `{ "data": { ... }, "status": "in_progress|completed" }`

---

## 2. Naming & Domain (Step 1)

### Check Business Name (ASIC)
- **POST** `/onboarding/naming/check-availability`
- **Body:** `{ "name": "string" }`
- **Response:** `{ "available": boolean, "conflicts": [ ... ] }`

### Generate AI Name Suggestions
- **POST** `/onboarding/naming/suggest`
- **Body:** `{ "description": "string", "keywords": ["string"] }`
- **Response:** `{ "suggestions": ["string"] }`

### Search Domains
- **GET** `/onboarding/domains/search?query=name`
- **Response:** `[{ "domain": "example.com", "price": 12.99, "available": true }]`

### Purchase Domain
- **POST** `/onboarding/domains/purchase`
- **Body:** `{ "domain": "string", "tenant_id": "uuid" }`
- **Response:** `{ "status": "processing", "order_id": "string" }`

---

## 3. Branding (Step 2)

### Submit Branding Brief
- **POST** `/branding/{tenant_id}/brief`
- **Body:**
```json
{
  "inspiration_images": ["url1", "url2"],
  "competitor_urls": ["url1"],
  "industry": "string",
  "style_keywords": ["modern", "minimalist"],
  "target_audience": "string"
}
```

### Generate Logo Options
- **POST** `/branding/{tenant_id}/logo/generate`
- **Response:** `{ "job_id": "uuid", "status": "queued" }`

### Get Logo Results (Polling)
- **GET** `/branding/{tenant_id}/logo/results/{job_id}`
- **Response:** `{ "status": "completed", "logos": ["url1", "url2", "url3"] }`

### Confirm Branding
- **POST** `/branding/{tenant_id}/confirm`
- **Body:**
```json
{
  "selected_logo_url": "string",
  "colors": { "primary": "#hex", "secondary": "#hex" },
  "typography": { "heading": "font-family", "body": "font-family" }
}
```

---

## 4. Website (Step 3)

### Create Website
- **POST** `/websites/{tenant_id}/create`
- **Body:** `{ "template_id": "string", "content": { ... } }`
- **Response:** `{ "website_id": "uuid", "deployment_status": "pending" }`

---

## 5. Integrations (Steps 4-6)

### Setup Google Workspace
- **POST** `/integrations/google/provision`
- **Body:** `{ "tenant_id": "uuid", "domain": "string", "admin_email": "string" }`

### Search Phone Numbers (Twilio)
- **GET** `/integrations/twilio/search?country=AU&type=local&area_code=02`
- **Response:** `[{ "phoneNumber": "+612...", "friendlyName": "(02) ..." }]`

### Provision Phone Number
- **POST** `/integrations/twilio/provision`
- **Body:** `{ "tenant_id": "uuid", "phone_number": "string" }`

### Create Whop Sub-Company
- **POST** `/integrations/whop/create-sub-company`
- **Body:** `{ "tenant_id": "uuid" }`
- **Response:** `{ "whop_company_id": "string", "onboarding_url": "string" }`

