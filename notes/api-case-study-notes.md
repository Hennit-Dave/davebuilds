# Freelance Marketplace API: case study notes

## Summary
A public REST API with five resources (freelancers, clients, gigs, orders, reviews), validation,
rate limiting and a live consumer page. I wrote the brief and data model, directed an AI agent to
build it slice by slice, tested every slice against real services, and fixed the live deployment.
Next step: authentication on the write endpoints.

Live: https://freelancemarketplaceapi.vercel.app (consumer page at /consumer)
Repo: https://github.com/Hennit-Dave/freelancemarketplace-API
Screenshot: /projects/api-consumer.png (seeded sample data)

## Problem
This was Task 1 of the Product Engineering Bootcamp: build a public API, deploy it, and prove it
works from outside its own codebase. I wanted to practise what a real public API has to get right:
versioned paths, pagination, honest error codes, rate limiting, and docs that a stranger can follow.

It's a public, read-only REST API for a freelance marketplace (freelancers, clients, gigs, orders,
reviews) plus order creation. A /consumer page lists gigs with a category filter.

## My role
I chose the market and the five resources and how they connect. I drafted the brief, AGENTS.md,
Prisma schema and seed script with Claude, then directed Antigravity (a coding agent) to build the
API one slice at a time. I set up Neon, Upstash and Vercel myself, tested each slice against the
real services, and debugged the live deployment.

## Process
- Stack: Next.js 14 (App Router), strict TypeScript, Prisma, PostgreSQL on Neon, Zod, Upstash
  Redis, Vercel.
- Data: seeded with 150 freelancers, 200 clients, 372 gigs, 400 orders, 65 reviews. Running the
  seed a second time skipped existing data.
- Verification: unit tests, plus manual checks against live Neon and Upstash, recorded in the README.
- Slices I gave the agent, in order:
  1. Scaffold, validation, pagination, filters, sorting, response envelopes
  2. Neon migration and seed
  3. Rate limiting with Upstash
  4. Bad-input checks
  5. README
  6. Vercel deploy
  7. Consumer page
- What I reviewed: I didn't accept "done" from the agent. I checked real responses. For example,
  both database URLs pointed at the pooled Neon endpoint, so I replaced DIRECT_URL with the
  unpooled one.
- What I didn't apply: I suggested setting `timeout: 0` in the rate limiter.
  I passed it to the agent, which read the library source and showed the change would have been
  wrong, so I left it alone.
- Problems I hit:
  - The Upstash URL had stray whitespace, then wasn't a valid URL at all, so the limiter failed
    closed with 503s.
  - My own network rotated IP addresses on every request, so the limiter looked broken when it
    wasn't. I proved it by testing from a stable connection.

## Key decisions
1. **cuid IDs.** Sequential numbers let anyone walk the whole dataset by counting. Random IDs don't.
2. **Offset pagination, `limit` capped at 100.** It's simple, and this data doesn't change fast.
   A request for 5000 gets clamped to 100 instead of rejected, so a careless request still works
   and the server never builds a huge response. The cost is that offset can skip or repeat rows if
   data changes between pages.
3. **`{ data, meta }` envelope and `{ error: { code, message } }`.** Clients learn one shape and
   never have to guess. Errors always use an honest status code, never a 200 with an error inside.
4. **Rate limiting: 100 requests per minute per IP, fail-closed with a 503.** An open,
   unauthenticated API gets abused quickly. Failing closed means a Redis outage doesn't leave the
   API unmetered. The cost is that a Redis outage takes the API down with it.
5. **Order prices snapshotted at creation.** A freelancer changing their price later must not
   rewrite what past orders cost. It works like a receipt.

## Result
- Live at https://freelancemarketplaceapi.vercel.app, with the consumer page at /consumer.
- Five bad-input checks returned the right codes with no 500s:
  1. [check 1]: `limit=5000` clamped to 100
  2. [check 2]: 400
  3. [check 3]: 400
  4. [check 4]: 400
  5. [check 5]: 422
- From a stable connection, 100 requests succeeded and the rest got 429 with a Retry-After header
  and the standard error body.
- 7 tests pass on main.

## What I'd do differently
- Write endpoints are unauthenticated: anyone can create an order for any clientId.
- No idempotency key on POST: repeating a valid request creates duplicate orders.
- Rate limiting is per IP, so rotating IPs can get around it.
- Offset pagination can skip or duplicate rows when data changes.
- No CORS headers, no CI, no LICENSE.

First fix: authentication on the write endpoints. It's the only item on the list where a stranger
can alter data today. The idempotency key comes second, and it's cheap because I already built
that pattern in Order Confirmation Jobs: https://github.com/Hennit-Dave/orderconfirmationjobs