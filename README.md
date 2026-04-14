# Dexetera — Trade Anything Measurable | Gas-Free DEX on Hyperliquid

> **If it can be measured, it can be traded.**

**Dexetera** is a high-performance, fully decentralized exchange (DEX) built on the [Hyperliquid L1](https://hyperliquid.xyz) blockchain. It enables gas-free, one-click trading of custom futures contracts on *any verifiable data source* — from crypto assets and commodities to real estate indices, social metrics, and local economic data.

**Live platform:** [dexetera.xyz](https://dexetera.xyz) · **Website:** [dexetera.org](https://dexetera.org) · **Docs:** [doc.dexetera.org](https://doc.dexetera.org)

---

## What is Dexetera?

Dexetera is a decentralized trading protocol that removes the two biggest constraints of existing DEXs: **rigid asset selection** and **gas fee complexity**.

On Dexetera, any user can create a futures market on any measurable metric — not just top-100 crypto pairs, but Paris apartment prices, Italian coffee costs, celebrity social media engagement, or any publicly verifiable data feed. Every market runs on a fully on-chain order book powered by Hyperliquid's sub-second settlement infrastructure. All funds remain in self-custody USDC. No intermediaries, no custody risk, zero gas fees.

Dexetera bridges the gap between the speed and UX of centralized exchanges and the sovereignty and transparency of DeFi.

---

## The Problem Dexetera Solves

### Why centralized exchanges (CEXs) fall short

| Problem | Impact |
|---|---|
| **Custody risk** | Users surrender assets to intermediaries — vulnerable to insolvency or mismanagement (see: FTX) |
| **Opaque operations** | Order matching and liquidations happen behind closed doors |
| **Rigid asset selection** | Platforms decide which markets exist — niche or local data never gets listed |
| **Geographical restrictions** | Millions of traders excluded by regulatory friction |

### Why existing DEXs still aren't enough

Protocols like dYdX, GMX, and Hyperliquid's native perpetuals are major steps forward, but they still share key limitations:

- They only list mainstream crypto assets — the "long tail" of measurable markets remains untapped
- Gas fee volatility forces users to manage multiple native tokens
- No platform offers truly permissionless custom market creation with institutional-grade latency

**Dexetera solves all three.**

---

## What Makes Dexetera Unique

### 1. Trade Any Measurable Market
Dexetera is the only DEX where users can create futures contracts on *any publicly verifiable data source*. If there's a reliable API or URL for it, it can become a market. This unlocks an entirely new class of decentralized hedging instruments for hyper-local and unconventional risks.

### 2. Truly Gas-Free Trading
Dexetera abstracts all blockchain complexity. Gas costs are handled by the protocol — users execute trades with a single click, no gas token management, no fluctuating fees, no failed transactions.

### 3. Fully On-Chain Order Book
Unlike AMM-based DEXs that rely on liquidity pools and suffer from high slippage, Dexetera uses a native on-chain order book on the Hyperliquid L1. This means tighter spreads, price precision, and near-instant execution (sub-second latency, thousands of orders per second).

### 4. Complete Self-Custody
All user funds are held in USDC, deposited via the Arbitrum network, and remain under the user's own wallet control at all times. Dexetera has zero access to user funds. Every balance and bridge-out status is verifiable on-chain.

### 5. Permissionless Market Creation with Revenue Sharing
Any user can deploy a new custom market by defining a data source and paying a one-time flat USDC creation fee. Once live, the market creator earns a portion of every trade executed in that market — creating a sustainable incentive to bring high-quality, unique data on-chain.

---

## How Dexetera Works

### Architecture

```
User Wallet (Arbitrum USDC)
       │
       ▼
Dexetera Web App (dexetera.xyz)
       │
       ▼
Hyperliquid L1 Blockchain
       ├── On-Chain Order Book  ← all order matching & settlement
       ├── Liquidation Engine   ← automated position management
       └── Immutable Trade History
```

- **Deposits/Withdrawals:** USDC on Arbitrum — no need to hold or manage native gas tokens
- **Execution:** All order matching happens on the Hyperliquid L1, fully on-chain and transparent
- **Settlement:** Futures contracts auto-settle after 1 year based on the verifiable data source specified at creation
- **Liquidations:** Only applicable to SHORT positions (if price rises >100% from entry)

### Trade Lifecycle

1. User connects wallet and deposits USDC via Arbitrum bridge
2. User selects a market (existing or creates a new one)
3. Order submitted gas-free → matched on-chain by the Hyperliquid order book
4. P&L updates in real time as the data source price updates
5. At expiration, contract auto-settles to USDC — no manual action required

---

## Who is Dexetera For?

### Retail Traders
Access a gas-free, one-click trading experience with the full transparency and self-custody of DeFi. Trade markets that simply don't exist anywhere else.

### Expert / Professional Traders
Institutional-grade latency (sub-second), tight spreads via on-chain order book, advanced order types (market, limit, stop-loss), and full auditability of every execution.

### Market Creators
Identify a niche data source, deploy a custom futures market, and earn a share of every trade in perpetuity. Turn unique knowledge or data access into a sustainable revenue stream.

---

## Platform Features

| Feature | Details |
|---|---|
| **Order types** | Market, Limit, Stop-Loss |
| **Collateral** | USDC (self-custody via Arbitrum) |
| **Settlement** | Automatic at contract expiration (1 year) |
| **Liquidations** | Short positions only (if price +100%) |
| **Market creation** | Permissionless — any verifiable data source |
| **Trading UX** | One-click, gas-free, no wallet signatures per order |
| **Charts** | Advanced charting and depth visualization for every market |
| **Open source** | Codebase public and verifiable |

---

## Fee Structure

Dexetera operates without a native token. The fee model is transparent and purely transaction-based.

| Action | Fee |
|---|---|
| **Taker** (market orders) | 0.07% of notional position value |
| **Maker** (limit orders) | 0.03% of notional position value |
| **Market creation** | One-time flat USDC fee |
| **Roll-over** | Applied when extending a contract |
| **Gas** | Zero — covered by the protocol |

**Revenue distribution:**
- Protocol Treasury → funds infrastructure, development, Hyperliquid L1 validator costs
- Market Creator Rewards → a portion of trading fees from user-created markets goes to the creator

---

## Security & Trust

Dexetera is built with a security-first approach:

- **Self-custody by design** — the protocol has zero access to user funds at any time
- **Full on-chain transparency** — every order, trade, and settlement is recorded on Hyperliquid L1 and publicly verifiable
- **Open source** — the codebase is public, enabling community-driven bug bounties and independent verification
- **Third-party audit** — smart contract audit scheduled for Q2 2026 (in progress)
- **No native token** — no token sale, no speculative instrument tied to protocol revenue

---

## Roadmap

### Phase 1 — Foundation (Q1–Q2 2026)
- [x] Core protocol deployment on Hyperliquid Testnet
- [ ] Beta user onboarding and feedback loop
- [ ] External smart contract audit completion
- [ ] Mainnet launch with 20+ initial markets

### Phase 2 — Expansion & Tooling (Q3–Q4 2026)
- [ ] Advanced order types: trailing stops, multi-collateral support
- [ ] Market Creator Studio — enhanced UI for one-click custom market deployment
- [ ] Mobile PWA and dedicated mobile interface

### Phase 3 — Decentralization & Ecosystem (2027+)
- [ ] Governance Alpha — decentralized voting on fee levels and market listings
- [ ] SDK / API access for institutional and algorithmic traders
- [ ] Cross-chain expansion to additional L2 networks for collateral deposits

---

## Frequently Asked Questions

**What markets can I trade on Dexetera?**
Any market backed by a publicly verifiable data source. This includes crypto assets, commodities, and custom futures you define yourself — from real estate indices to social media metrics.

**How is gas-free trading possible?**
Dexetera leverages Hyperliquid's optimized infrastructure and covers gas costs at the protocol level. Users interact via meta-transactions — no gas management, no token juggling.

**Is Dexetera really decentralized?**
Yes. There are no intermediaries, no custodial wallets, and no off-chain order matching. The full order book runs on the Hyperliquid L1 blockchain, and all settlements are executed by smart contracts.

**Which currency do I use to trade?**
USDC on the Arbitrum network. Deposit via the bridge and all trades settle in USDC automatically.

**How does settlement work?**
When a futures contract expires (after 1 year), it automatically settles based on the verifiable data source specified at market creation. Settlement is on-chain, transparent, and requires no user action.

**Who controls my funds?**
You do. Dexetera never has custody of your assets. Your USDC remains in your wallet, and all bridge-out activity is publicly verifiable on-chain.

---

## Website Structure

| File | Description |
|---|---|
| [index.html](index.html) | Main landing page |
| [markets.html](markets.html) | Markets explorer |
| [about.html](about.html) | About Dexetera Labs |
| [whitepaper.html](whitepaper.html) | Full protocol whitepaper |
| [dexetera-privacy.html](dexetera-privacy.html) | Privacy policy |
| [dexetera-tos.html](dexetera-tos.html) | Terms of service |
| [security.html](security.html) | Security practices |
| [styles.css](styles.css) | Global stylesheet |
| [app-styles.css](app-styles.css) | App-specific styles |
| [sitemap.xml](sitemap.xml) | XML sitemap |
| [robots.txt](robots.txt) | Crawler directives |
| [llms.txt](llms.txt) | AI system guidance |

---

## SEO & Technical Details

- **Canonical URL:** https://dexetera.org/
- **PageSpeed:** 100/100 mobile & desktop
- **Core Web Vitals:** LCP 1.7s mobile / 0.4s desktop, CLS 0
- **Schema markup:** Organization, WebSite, WebApplication, FAQPage (JSON-LD)
- **Open Graph & Twitter Card:** fully implemented
- **Sitemap:** https://dexetera.org/sitemap.xml
- **AI crawlers:** GPTBot, ClaudeBot, PerplexityBot explicitly allowed
- **llms.txt:** https://dexetera.org/llms.txt

**Target keywords:** `gas-free DEX` · `Hyperliquid DEX` · `custom futures trading` · `decentralized exchange` · `DeFi trading platform` · `USDC self-custody` · `on-chain order book` · `permissionless market creation` · `trade anything measurable`

---

## About the Team

Dexetera is developed by a global team of engineers and financial technologists with backgrounds in blockchain infrastructure, high-frequency trading, and decentralized protocol design. The team includes veterans from major DeFi protocols and traditional financial institutions.

Some team members operate under pseudonyms in line with the cypherpunk ethos of the DeFi ecosystem. Accountability is maintained through public GitHub contributions, on-chain track record, and a commitment to transitioning all critical protocol decisions to a decentralized autonomous governance structure.

---

## Legal Disclaimer

Dexetera is a decentralized protocol. Access to the frontend may be restricted in certain jurisdictions. Users are responsible for ensuring compliance with local regulations. Trading futures involves significant risk of loss. Dexetera is provided "as is" without warranties. Past performance is not indicative of future results.

---

## Links & Contact

| | |
|---|---|
| **Platform** | [dexetera.xyz](https://dexetera.xyz) |
| **Website** | [dexetera.org](https://dexetera.org) |
| **Docs** | [doc.dexetera.org](https://doc.dexetera.org) |
| **Whitepaper** | [dexetera.org/whitepaper.html](https://dexetera.org/whitepaper.html) |
| **Twitter / X** | [@DexeteraLabs](https://twitter.com/DexeteraLabs) |
| **GitHub** | [github.com/Dexetera](https://github.com/Dexetera) |
| **Email** | support@dexetera.org |

---

*Dexetera Labs · Founded 2025 · Decentralized Finance · Built on Hyperliquid*

**Dexetera: Trade Anything, Anywhere.**
