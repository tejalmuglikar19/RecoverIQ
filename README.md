# RecoverIQ — AI-Powered Revenue Recovery Platform

> **Aesthetic, production-grade fintech SaaS control center for modern merchants.**

RecoverIQ continuously audits failed customer payment attempts (UPI e-mandates, cards, netbanking, wallets) and utilizes predictive machine learning to orchestrate automated, high-probability recovery actions.

---

## The Core Product Narrative

RecoverIQ guides merchants through an intuitive 5-stage financial story:

```
[ ₹ Revenue at Risk ]
        ↓
[ AI Opportunity Identification ]
        ↓
[ Adaptive Recovery Action ]
        ↓
[ Verified Outcome ]
        ↓
[ ₹ Revenue Recovered ]
```

---

## Key Dashboard Capabilities

### 1. Left Sidebar Navigation
- **Branding**: RecoverIQ geometric logomark with dark mode slate styling.
- **Platform Navigation**:
  - `Overview` — High-level revenue recovery control center.
  - `Recovery Queue` — Searchable and filterable queue with real-time AI confidence scores.
  - `Analytics` — Failure taxonomy breakdown and recovery channel efficacy.
  - `Policies` — Configurable AI smart backoff curves and risk thresholds.
  - `Audit Trail` — Immutable chronological ledger of automated recovery events.
- **Footer**:
  - `Settings` — Connected gateways (Razorpay, Cashfree, PayU) and webhook status.
  - `Demo Merchant` Profile — Enterprise MID-8492 credential preview.

### 2. Header & Quick Controls
- **Page Context**: Dynamic title & subtitle that updates based on active section.
- **Demo Mode Pill**: Explicit `DEMO MODE • Synthetic Data` indicator.
- **Interactive Date Selector**: `Last 30 Days ▾` dropdown (7D, 30D, 90D, YTD).
- **Primary Action**: Prominent `Run AI Recovery →` button with emerald accent.

### 3. KPI Section (4 Metric Cards)
- **Revenue at Risk**: `₹12.8L` (`↓ 8.4% vs previous period`)
- **Revenue Recovered**: `₹8.4L` (`↑ 14.2% vs previous period`)
- **Recovery Rate**: `65.6%` (`+6.8% improvement`)
- **Recovery ROI**: `2.8×` (`Above 1.5× target`)

### 4. Main Recovery Chart
- High-precision dual-area smoothed SVG chart displaying 30 days of synthetic data.
- Hover crosshairs with floating tooltips rendering exact date, revenue at risk, and revenue recovered in Indian Rupees (`₹`).

### 5. Recovery Status Breakdown
- Distribution bar & compact counter for:
  - **Ready for Recovery**: `24`
  - **In Progress**: `8`
  - **Recovered**: `42`
  - **Escalated**: `5`
  - **Stopped**: `11`

### 6. AI Recovery Insight
- Restrained card highlighting actionable intelligence:
  > *"Temporary failures represent the largest recovery opportunity. 68% of current revenue at risk is associated with temporary payment failures. 14 payments have a high probability of successful recovery through a single retry."*
- `View Recovery Queue →` quick link.

### 7. Recent Recovery Activity & AI Decision Drawer
- Synthetic transaction table featuring:
  - `#pay_48291` (₹24,500, Insufficient funds, Retry, Recovered)
  - `#pay_39182` (₹8,200, Timeout, Retry, Recovered)
  - `#pay_71293` (₹52,000, Repeated failure, Escalate, Review)
  - `#pay_63821` (₹14,600, Payment declined, Reminder, Recovered)
  - `#pay_92173` (₹31,200, Unknown, STOP, Stopped)
- Clicking any payment opens the **AI Decision Modal** detailing:
  - AI confidence score meter (e.g. 94%)
  - Machine learning reasoning rationale
  - Bank decline diagnostics
  - Step-by-step recovery timeline

### 8. Interactive AI Simulation Engine
- Clicking `Run AI Recovery →` executes an animated multi-phase analysis simulation:
  - Progress bar scanning 24 at-risk transactions.
  - Log stream evaluating bank decline codes and issuer telemetry.
  - Final results summary (+₹1,42,000 instantly captured across 6 transactions).
  - Live metric update with pulse-flash animation across the dashboard.

---

## Technical Architecture

- **Stack**: Pure HTML5, CSS3 Custom Properties, Vanilla JavaScript (ES6+).
- **Dependencies**: Zero external build dependencies or npm packages required.
- **Portability**: Opens directly in any browser (`index.html`) or served via any standard static HTTP server.
- **Responsiveness**: Desktop-first layout with smooth adaptive breakpoints for tablet and mobile screens.

---

## How to View the Project

Simply open `index.html` in Google Chrome, Microsoft Edge, Firefox, or Safari:

```powershell
Start-Process "C:\Users\admin\Desktop\project\RecoverIQ\index.html"
```

