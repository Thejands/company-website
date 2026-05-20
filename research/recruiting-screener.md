# Thejands — Contact Form Submission & Sales Demo Flow

> This document covers two things:
>
> 1. **Confirmation email** sent after a prospect submits the contact form
> 2. **Sales demo structure** for the discovery/demo call that follows

---

## 1. Contact Form Confirmation Email

> Sent automatically on form submission. Goal: acknowledge receipt, set expectations, and make the prospect feel they've reached an organisation that takes them seriously.

---

**Subject:** We've received your enquiry — Thejands

**Body:**

Hi [First name],

Thank you for reaching out to Thejands.

We've received your message and one of our founders — Linga or Somu — will review it personally and respond within one business day.

**What happens next:**

1. We'll review the details of your requirement
2. We'll reply with an honest read on how we can help (or whether we're the right fit)
3. If there's a clear match, we'll suggest a 30-minute discovery call to go deeper

If your project is time-sensitive or you'd prefer to speak sooner, you can reach us directly at hello@thejands.in or call [phone number].

We look forward to understanding your requirement.

Linga & Somu  
Co-founders, Thejands  
hello@thejands.in

---

> **Note for devs:** Trigger this via Resend on `POST /api/contact` success. Personalise `[First name]` from the form field. Keep the tone professional — no emojis, no exclamation marks, no "We're excited to hear from you."

---

## 2. Sales Discovery Call — Structure

> **Duration:** 30–45 minutes
> **Participants:** Linga or Somu (Thejands) + prospect
> **Goal:** Understand the requirement well enough to propose a fit or decline clearly

---

### Opening (5 min)

Introduce yourself briefly. Ask the prospect to describe their organisation and role in two sentences. Don't pitch yet.

> "Before we get into what we do — can you tell me a bit about your organisation and what you're trying to solve? I want to make sure we're spending this call on what actually matters to you."

---

### Requirement deep-dive (15 min)

Go through the following — in conversation, not as a checklist:

**About the mandate:**

- What are you trying to build, implement, or solve?
- What have you tried already? What's worked, what hasn't?
- What does success look like in 6 months?

**About the organisation:**

- Who are the internal stakeholders? Who owns the budget?
- Do you have an internal technical team? What's their capacity?
- Have you worked with external technology partners before? What was that experience like?

**About constraints:**

- What's the timeline — is there a hard deadline?
- Do you have a budget range in mind?
- Are there compliance, security, or procurement requirements we should know about upfront?

---

### Fit assessment (5 min)

Be honest. If it's a clear fit, say so. If it's not, say that too.

**Strong fit signals:**

- Enterprise or mid-market organisation with a defined mandate
- Needs software build, LMS consulting, or embedded resource
- Decision-maker is on the call
- Timeline and budget are realistic

**Not a fit (be direct and refer elsewhere):**

- Early-stage idea with no defined requirement
- Budget below threshold for enterprise-grade delivery
- Expects hourly freelance pricing

---

### Solution outline (10 min)

If there's a clear fit, describe how Thejands would approach it:

- Which of our three delivery models applies (build / consult / partner)
- What a realistic scope and timeline looks like
- What the commercial structure would be (milestone / retainer)
- What we need from them to prepare a proposal

---

### Close (5 min)

Agree a clear next step. One of:

- **Proposal:** "We'll send a written proposal within [X] business days based on what you've shared. It'll cover scope, timeline, cost, and what we need from your side."
- **More info needed:** "We need [X] before we can propose accurately — can you send that over by [date]?"
- **Not a fit:** "Honestly, this isn't a mandate we're best placed to deliver. I'd recommend [alternative approach / referral]."

Never leave the call without a specific next action and a named owner.

---

## 3. Incentive Model

> Thejands does not pay referral fees, gift cards, or flat commissions. Incentives are outcome-based and structured per engagement.

---

### For partner organisations (resource / white-label engagements)

| Incentive trigger                | Structure                                               |
| -------------------------------- | ------------------------------------------------------- |
| Signed engagement referral       | Revenue share % agreed per engagement (typically 5–10%) |
| Long-term partnership (retainer) | Tiered revenue share based on annual volume             |
| Joint go-to-market win           | Negotiated case by case before proposal submission      |

### For candidate consulting engagements

| Outcome              | Incentive                                                           |
| -------------------- | ------------------------------------------------------------------- |
| Successful placement | Fee agreed upfront as % of first-year salary or fixed placement fee |
| Retained search      | Monthly advisory fee + placement fee on success                     |

### Principles

- All incentives are agreed **in writing before work begins** — no verbal arrangements
- Incentives are tied to **signed outcomes**, not introductions or conversations
- We do not pay for access to decision-makers — relationships must be earned
- Commercial terms are revisited annually for long-term partners based on performance

---

> **Note:** This is internal guidance for Linga and Somu. Not for sharing with prospects directly.
