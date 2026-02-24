# Hosting & Domain Cost Analysis

## Current Project Setup

### Website Hosting
- **Platform**: Vercel (Free Tier)
- **Cost**: €0/year
- **Features**:
  - Unlimited static sites
  - 100 GB bandwidth/month
  - Automatic HTTPS
  - CDN (global edge network)
  - Automatic deployments from GitHub
  - Preview deployments
  - Custom domains (unlimited)

### Tech Stack
- Next.js 16.1.6 with App Router
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui components
- All pages statically generated (SSG)

### Repository
- **GitHub**: https://github.com/gutisalex/it-service-lohfelden
- **Vercel Deployment**: Ready to deploy

---

## Domain & Email Options

### Option 1: Keep Everything at 1blu (Simplest)

**Advantages:**
- ✅ No transfer hassle
- ✅ Emails keep working unchanged
- ✅ No downtime
- ✅ Just update DNS to point to Vercel

**How to:**
1. Keep domain at 1blu
2. In 1blu DNS settings, update A/CNAME records to point to Vercel
3. Keep MX records unchanged (emails continue working)
4. Website runs on Vercel (fast & free)

**Cost:** Whatever you're currently paying at 1blu

---

### Option 2: Transfer to chilly.domains

#### Chilly.domains Pricing (incl. 19% German VAT)

**Domain Registration:**
- .de Domain: **€17.85/year** (first year and ongoing)
- Includes: Domain + Free homepage builder + Free SSL + 1 email address

**Email Hosting:**
- Email Only Package: **€0.99/month = €11.88/year**
  - 10 email accounts (enough for your 3 addresses)
  - 10 GB email storage
  - POP3, IMAP4 with SSL/TLS
  - Spam & virus protection
  - Webmail access
  - IMAP sync across devices
  - Daily backups (7 days retention)

**Total Annual Cost:**
- Domain: €17.85/year
- Email hosting (10 accounts): €11.88/year
- Website hosting: €0 (Vercel free)
- **Total: €29.73/year (~€2.48/month)**

**What You DON'T Need:**
- ❌ Web hosting (Vercel handles this for free)
- ❌ Homepage builder (website already built)

---

## Transfer Process (if choosing Option 2)

### Step 1: Prepare at 1blu
1. Get auth code (Transfer-Code) from 1blu
2. Unlock domain for transfer
3. Note down current MX records (for email)

### Step 2: Transfer Domain to chilly.domains
1. Create account at chilly.domains
2. Initiate domain transfer (costs €17.85)
3. Wait 5-10 days for transfer completion
4. Domain transfer includes 1 year extension

### Step 3: Set Up Email at chilly.domains
1. Order "Email Only" package (€0.99/month)
2. Create 3 email accounts
3. Configure email clients (IMAP settings)
4. Test email sending/receiving

### Step 4: Point Domain to Vercel
1. In chilly.domains DNS settings:
   - Add Vercel A/CNAME records (for website)
   - Configure MX records (for email)
2. Website goes live on Vercel
3. Emails work via chilly.domains

---

## Cost Comparison

### Current Situation (1blu)
- **Quarterly bill**: €89.97 every 3 months
- **Monthly cost**: €29.99/month
- **Annual cost**: €359.88/year
- Includes: Domain + Email + Web Hosting

### With chilly.domains + Vercel
- Domain: €17.85/year
- Email (3 addresses): €11.88/year
- Web Hosting: €0 (Vercel)
- **Total: €29.73/year (€2.48/month)**

### 💰 MASSIVE SAVINGS!
- **Current cost**: €359.88/year
- **New cost**: €29.73/year
- **Annual savings**: €330.15/year
- **Savings**: 92% reduction in hosting costs!

### Why So Much Cheaper?
- ✅ No web hosting needed (Vercel is free)
- ✅ Only pay for domain + email
- ✅ Modern infrastructure costs less
- ✅ You already built the website (no hosting fees)

---

## Recommendation

### 🚀 STRONGLY RECOMMEND: Transfer to chilly.domains!

With **€330/year in savings**, transferring is absolutely worth it!

### Recommended Plan:

**Phase 1: Deploy to Vercel (Immediate)**
1. Deploy website to Vercel with free subdomain
2. Test everything works
3. Keep 1blu running in parallel (no downtime)

**Phase 2: Set Up chilly.domains (This Month)**
1. Create account at chilly.domains
2. Order Email Only package (€0.99/month)
3. Set up 3 email addresses
4. Test email sending/receiving

**Phase 3: Transfer Domain (Next Month)**
1. Initiate domain transfer from 1blu to chilly.domains
2. During transfer: Everything keeps working at 1blu
3. Once transferred: Update DNS to point to Vercel
4. Cancel 1blu subscription

**Phase 4: Email Migration (Same Day as DNS Change)**
1. Update email clients to chilly.domains IMAP settings
2. All emails sync automatically via IMAP
3. Test thoroughly

### Benefits:
- ✅ **Save €330/year** (that's a lot for a small business!)
- ✅ Website runs faster on Vercel
- ✅ Modern infrastructure
- ✅ No downtime during transition

---

## Next Steps - Action Plan

### This Week:
1. ✅ **Deploy to Vercel**
   - Import GitHub repository
   - Test the free subdomain
   - Verify everything works

### Next Week:
2. ✅ **Set up chilly.domains account**
   - Create account
   - Order Email Only package (€0.99/month)
   - Create 3 email addresses
   - Test emails work

### In 2-3 Weeks:
3. ✅ **Initiate domain transfer**
   - Get auth code from 1blu
   - Transfer domain to chilly.domains (€17.85)
   - Wait 5-10 days for completion

### After Transfer Complete:
4. ✅ **Update DNS & migrate emails**
   - Point domain to Vercel
   - Update email clients to new IMAP settings
   - Test everything thoroughly
   - Cancel 1blu (save €330/year!)

### Timeline:
- **Week 1**: Website live on Vercel
- **Week 2-3**: Emails set up at chilly.domains
- **Week 3-4**: Domain transferred
- **Week 4**: Cancel 1blu
- **Total transition time**: ~1 month

---

## Important Notes

- **Email Migration**: If transferring, need to migrate 3 email accounts
- **Downtime**: Properly planned transfer should have minimal downtime
- **DNS Propagation**: Changes take 24-48 hours to propagate globally
- **Backup**: Export all emails before transfer (IMAP clients do this automatically)
- **Testing**: Test emails thoroughly after migration

---

## Vercel Free Tier Details

### What's Included:
- ✅ Unlimited static sites
- ✅ 100 GB bandwidth/month
- ✅ Commercial use allowed (for small business sites)
- ✅ Custom domains (unlimited)
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Automatic deployments from GitHub
- ✅ Preview deployments for pull requests

### Usage Estimate:
- Expected traffic: ~1,000 visitors/month
- Page size: ~500 KB per visit
- Bandwidth needed: ~500 MB/month
- **Only 0.5% of the 100 GB limit!**

### When to Upgrade (Pro Plan - €20/month):
- Traffic exceeds 100 GB/month
- Need team collaboration features
- Need priority support
- Need advanced analytics

**For a local IT service in Lohfelden:** Free tier is perfect!

---

## Contact Information

### chilly.domains Support
- Phone: +43 720 277 077
- Email: support@chilly.domains
- Hours: Mon-Thu 08:00-17:00, Fri 08:00-15:30

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Email: support@vercel.com (for paid plans)

---

*Last updated: February 2026*
