'use client';

import { useState } from 'react';

const PaymentFlowVisualization = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const flow = [
    {
      id: 1,
      actor: 'User',
      action: 'Clicks Magic Link',
      detail: 'User arrives at /payment?token=xxx from email',
      color: '#60a5fa',
    },
    {
      id: 2,
      actor: 'Frontend',
      action: 'GET /api/fetch-onboarded-user-by-magic-link on payment page load',
      detail: 'Fetches: tenantId, paymentStatus, fullName, email, annualBilling',
      color: '#a78bfa',
    },
    {
      id: 3,
      actor: 'Frontend',
      action: 'Check: paymentStatus?',
      detail: 'null → show checkout | pending → show waiting | success → redirect | failed → show retry',
      color: '#f59e0b',
      branch: true,
    },
    {
      id: 4,
      actor: 'User',
      action: 'Completes payment in Whop embed',
      detail: 'Whop returns payId after successful payment',
      color: '#ec4899',
    },
    {
      id: 5,
      actor: 'Frontend',
      action: 'POST /api/onboarding/payment',
      detail: 'Sends: { payId, tenantId (if exists) }',
      color: '#a78bfa',
      important: true,
    },
    {
      id: 6,
      actor: 'Server',
      action: 'Update records',
      detail: 'user_invitation.paymentStatus = "pending" | tenant.whopPayId = payId',
      color: '#a78bfa',
    },
    {
      id: 7,
      actor: 'Whop',
      action: 'Sends webhook',
      detail: 'Contains payId + success/failed status',
      color: '#ec4899',
    },
    {
      id: 8,
      actor: 'Server',
      action: 'Find by whopPayId (with retry)',
      detail: 'Retry 3x with 1s delay if not found (handles race condition)',
      color: '#a78bfa',
      important: true,
    },
    {
      id: 9,
      actor: 'Server',
      action: 'On SUCCESS webhook',
      detail: 'user_invitation.paymentStatus = "success" | Allocate credits to tenant.tenantCreditBalance',
      color: '#10b981',
      important: true,
    },
    {
      id: 10,
      actor: 'Server',
      action: 'On FAILED webhook',
      detail: 'user_invitation.paymentStatus = "failed"',
      color: '#ef4444',
    },
    {
      id: 11,
      actor: 'Frontend',
      action: 'Polling detects status change',
      detail: 'success | failed → show retry button',
      color: '#60a5fa',
    },
  ];

  const retryFlow = [
    {
      id: 'R1',
      actor: 'User',
      action: 'Clicks "Retry Payment"',
      detail: 'paymentStatus was "failed", user wants to try again',
      color: '#f59e0b',
    },
    {
      id: 'R2',
      actor: 'User',
      action: 'Completes payment in Whop embed (again)',
      detail: 'Gets NEW payId from Whop',
      color: '#ec4899',
    },
    {
      id: 'R3',
      actor: 'Frontend',
      action: 'POST /api/onboarding/payment',
      detail: 'Sends: { newPayId, tenantId } - same tenant, new payId',
      color: '#a78bfa',
    },
    {
      id: 'R4',
      actor: 'Server',
      action: 'Update tenant.whopPayId with new payId',
      detail: 'On success webhook, allocate credits (no duplicates)',
      color: '#10b981',
    },
  ];

  const safeguards = [
    { icon: '🎫', title: 'tenantId from Invitation', desc: 'No email lookup - tenantId stored in user_invitation' },
    { icon: '🔄', title: 'Retry Handling', desc: 'Same tenantId, new whopPayId on retry' },
    { icon: '⚡', title: 'Race Condition', desc: 'Webhook retries finding record 3x with delay' },
    { icon: '💰', title: 'Credits on Success', desc: 'Credits allocated only after webhook confirms success' },
  ];

  const statusStates = [
    { status: 'null', color: '#60a5fa', action: 'Show Whop Embeddedcheckout' },
    { status: 'pending', color: '#f59e0b', action: 'Show "Processing..."' },
    { status: 'success', color: '#10b981', action: 'Show success' },
    { status: 'failed', color: '#ef4444', action: 'Show error + "Retry Payment" button' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0f',
      fontFamily: '"SF Mono", "Fira Code", monospace',
      color: '#e2e8f0',
      padding: '40px 20px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .step:hover {
          transform: translateX(4px);
          background: rgba(255,255,255,0.05) !important;
        }
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '8px',
          }}>
            Payment Flow (via user_invitation)
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Whop payId + tenantId → /api/onboarding/payment • Credits on webhook success
          </p>
        </div>

        {/* Payment Status States */}
        <div style={{
          marginBottom: '30px',
          padding: '20px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '16px', fontWeight: 600 }}>
            paymentStatus States
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {statusStates.map((s) => (
              <div key={s.status} style={{
                padding: '12px',
                borderRadius: '8px',
                background: `${s.color}15`,
                border: `1px solid ${s.color}40`,
              }}>
                <div style={{
                  color: s.color,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  marginBottom: '4px',
                }}>
                  {s.status}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>
                  {s.action}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Flow */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '30px',
        }}>
          <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 600 }}>
            Main Flow
          </h3>
          {flow.map((step, index) => (
            <div
              key={step.id}
              className="step"
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              style={{
                display: 'flex',
                gap: '16px',
                padding: '14px',
                marginBottom: index < flow.length - 1 ? '6px' : 0,
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                background: step.important ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
                border: step.important ? '1px dashed rgba(245, 158, 11, 0.3)' : '1px solid transparent',
              }}
            >
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '8px',
                background: `${step.color}20`,
                border: `2px solid ${step.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: step.color,
                flexShrink: 0,
              }}>
                {step.id}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '2px 6px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '4px',
                  }}>
                    {step.actor}
                  </span>
                  {step.important && (
                    <span style={{ fontSize: '0.6rem', color: '#f59e0b', fontWeight: 600 }}>
                      KEY STEP
                    </span>
                  )}
                </div>
                <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>
                  {step.action}
                </div>
                {activeStep === step.id && (
                  <div style={{
                    marginTop: '8px',
                    padding: '10px 12px',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    animation: 'fadeIn 0.2s ease',
                  }}>
                    {step.detail}
                  </div>
                )}
              </div>

              {index < flow.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '35px',
                  bottom: '-6px',
                  width: '2px',
                  height: '6px',
                  background: 'rgba(255,255,255,0.1)',
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Retry Flow */}
        <div style={{
          background: 'rgba(239, 68, 68, 0.05)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          marginBottom: '30px',
        }}>
          <h3 style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 600 }}>
            Retry Flow (when paymentStatus = "failed")
          </h3>
          {retryFlow.map((step, index) => (
            <div
              key={step.id}
              style={{
                display: 'flex',
                gap: '16px',
                padding: '12px',
                marginBottom: index < retryFlow.length - 1 ? '6px' : 0,
              }}
            >
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '8px',
                background: `${step.color}20`,
                border: `2px solid ${step.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: step.color,
                flexShrink: 0,
              }}>
                {step.id}
              </div>
              <div>
                <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>
                  {step.action}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.7rem', marginTop: '2px' }}>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safeguards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginBottom: '30px',
        }}>
          {safeguards.map((item, i) => (
            <div key={i} style={{
              padding: '16px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>
                  {item.title}
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div style={{
          padding: '16px',
          borderRadius: '10px',
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
        }}>
          <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, marginBottom: '8px' }}>
            Key Insight
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
            After Whop payment completes, send
            <code style={{ color: '#ec4899', background: 'rgba(236,72,153,0.1)', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px' }}>payId</code> +
            <code style={{ color: '#60a5fa', background: 'rgba(96,165,250,0.1)', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px' }}>tenantId</code> to
            <code style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.1)', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px' }}>/api/onboarding/payment</code>.
            Credits allocated only after webhook confirms success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFlowVisualization;
