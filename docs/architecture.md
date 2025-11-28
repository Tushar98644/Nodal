# Nodal Architecture Document

This document provides a detailed overview of the Nodal application's architecture, data flow, and core components.

## 1. High-Level Overview

Nodal is a modern web application built on the **Next.js** framework (using the App Router). It leverages the **Vercel AI SDK** to interact with a generative AI model (such as Google's Gemini) to create brand assets based on user input. The frontend is built with **React** and styled with **Tailwind CSS**.

The core functionality revolves around taking a user's description of a brand and generating a structured JSON object containing a company name, tagline, color palette, logo SVG, and website HTML.

![Architecture Diagram](/public/images/architecture-diagram.png)

---

## 2. Directory Structure

The project follows a feature-centric structure to keep the codebase organized and maintainable.

```
/src
├── app/                # Next.js App Router: Pages and API routes
│   ├── api/generate/   # API route for handling AI generation
│   └── dashboard/      # The main application page/view
├── components/         # Reusable, general-purpose UI components
├── features/           # Larger, feature-specific components (e.g., code editor, previewer)
├── lib/                # Core logic, schemas, and utilities
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

---

## 3. Core Technologies & Concepts

### 3.1. Frontend

-   **Framework**: **Next.js 14+** (App Router) is used for its server-side rendering, routing, and API route capabilities.
-   **UI Library**: **React** is used for building the user interface.
-   **Styling**: **Tailwind CSS** is used for utility-first styling, along with `clsx` and `tailwind-merge` for conditional and conflict-free class names.
-   **Components**:
    -   `components/`: Contains generic, reusable components like buttons, icons, and layout elements (`Header`).
    -   `features/`: Holds components that encapsulate a specific piece of application functionality, like `preview/` or `dashboard/`.
-   **State Management**:
    -   Local component state is managed with React Hooks (`useState`, `useMemo`).
    -   The primary application state (the generated brand object) is managed by the **`useObject`** hook from the Vercel AI SDK.

### 3.2. Backend (API Route)

-   **Endpoint**: The sole API endpoint is `/api/generate/route.ts`.
-   **Functionality**: This serverless function receives the user's prompt from the frontend. It then uses the Vercel AI SDK to stream a structured, typed object from the AI model.
-   **Schema Enforcement**: It uses a **Zod** schema (`lib/schema.ts`) to define the exact JSON structure required from the AI. This ensures that the data sent back to the client is predictable, type-safe, and matches the frontend's expectations.

### 3.3. AI Integration

-   **Vercel AI SDK**: This is the key library connecting the application to the generative AI.
    -   **`@ai-sdk/react`**: Provides the `useObject` hook for the client-side.
    -   **`@ai-sdk/google`**: Provides the server-side adapter to communicate with the Google Gemini models.
-   **`useObject` Hook**: This hook simplifies handling streaming data. It takes the API endpoint and a Zod schema, and it manages the loading state, final object, and errors automatically. It provides a seamless way to render AI-generated UI elements as they are streamed from the backend.

---

## 4. Data Flow

The primary user workflow follows this data flow:

1.  **User Input**: The user interacts with the `InfoForm` component on the `dashboard/page.tsx`.
2.  **Form Submission**: Upon submission, the `handleFormComplete` function is triggered. It constructs a detailed prompt using the form data.
3.  **API Request**: The `submit` function (from `useObject`) is called with the prompt. This sends a POST request to the `/api/generate` endpoint.
4.  **AI Generation**:
    -   The API route receives the request.
    -   It invokes the AI model via the Vercel AI SDK, providing the prompt and the `brandSchema`.
    -   The AI model begins generating a JSON object that conforms to the schema.
5.  **Streaming Response**: The API route streams the generated JSON object back to the client as it's being created.
6.  **UI Update**:
    -   The `useObject` hook on the client receives the streaming data.
    -   It updates its internal state (`object`, `isLoading`).
    -   React re-renders the components, so the user sees the `LoadingScreen` and then the `Preview` component, which is populated with the generated brand data.
7.  **Refinement (Chat)**: The user can send follow-up messages via the `ChatComponent`. This triggers the same `submit` function but with additional context, causing the AI to regenerate the object based on the new request.
