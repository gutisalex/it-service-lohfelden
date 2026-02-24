# Setup Guide for Business Owner

## 💰 Bottom Line First

**You're currently paying €360/year to 1blu.**  
**After this migration, you'll pay €30/year.**  
**Savings: €330/year** 🎉

---

## What You Need to Do (Checklist)

### ☐ Step 1: Create GitHub Account (15 min)
- Go to: https://github.com/signup
- Use your business email
- Choose username (e.g., "reinhold-jodeit")
- Free plan is fine

### ☐ Step 2: Create Vercel Account (10 min)
- Go to: https://vercel.com/signup
- Click "Continue with GitHub"
- Use the GitHub account from Step 1
- Choose "Hobby" (free) plan

### ☐ Step 3: Create chilly.domains Account (10 min)
- Go to: https://chilly.domains
- Create account with business email
- Verify email

### ☐ Step 4: Order Email Hosting (10 min)
- Go to: https://chilly.domains/e-mail-server/
- Order "E-Mail Only" package
- Cost: €0.99/month (€11.88/year)
- Payment: Credit card or bank transfer

### ☐ Step 5: Set Up 3 Email Addresses (15 min)
- Log into chilly.domains control panel
- Create your 3 email addresses
- Set passwords
- Test webmail login

### ☐ Step 6: Get Transfer Code from 1blu (20 min)
- Log into 1blu account
- Find "it-service-lohfelden.de" domain
- Request "Auth-Code" or "Transfer-Code"
- Unlock domain for transfer
- **Don't cancel 1blu yet!**

### ☐ Step 7: Transfer Domain to chilly.domains (10 min)
- Log into chilly.domains
- Go to "Domain Transfer"
- Enter: it-service-lohfelden.de
- Enter auth code from 1blu
- Pay €17.85
- Wait 5-10 days (automatic)

### ☐ Step 8: After Transfer Completes (1 hour - **coordinate with developer!**)
- Add domain to Vercel
- Update DNS at chilly.domains
- Update email client settings
- Test website and emails
- **After 24-48 hours:** Cancel 1blu!

---

## Account Credentials to Save

Keep these in a safe place (e.g., password manager):

### GitHub
- URL: https://github.com
- Username: ________________
- Email: ________________
- Password: ________________

### Vercel
- URL: https://vercel.com
- Login: via GitHub
- Project: it-service-lohfelden

### chilly.domains
- URL: https://chilly.domains
- Email: ________________
- Password: ________________
- Control Panel: ________________

### Email Addresses at chilly.domains
1. ________________@it-service-lohfelden.de (Password: ________)
2. ________________@it-service-lohfelden.de (Password: ________)
3. ________________@it-service-lohfelden.de (Password: ________)

---

## Payment Summary

### One-time Costs:
- Domain transfer to chilly.domains: **€17.85** (includes 1 year)

### Annual Recurring Costs:
- Domain renewal: **€17.85/year**
- Email hosting (10 addresses): **€11.88/year** (€0.99/month)
- Website hosting: **€0/year** (Vercel free tier)

### Total Annual Cost: **€29.73/year**

Compare to 1blu: €359.88/year → **€330 savings per year!**

---

## Timeline

| Day | Task | Time | Cost |
|-----|------|------|------|
| **Day 1** | Create GitHub account | 15 min | Free |
| **Day 1** | Create Vercel account | 10 min | Free |
| **Day 1** | Create chilly.domains account | 10 min | Free |
| **Day 2** | Order email hosting | 10 min | €11.88/year |
| **Day 2** | Set up 3 email addresses | 15 min | - |
| **Day 3** | Get 1blu transfer code | 20 min | - |
| **Day 3** | Initiate domain transfer | 10 min | €17.85 |
| **Day 4-14** | Wait for transfer (automatic) | 0 min | - |
| **Day 14** | Update DNS (with developer) | 1 hour | - |
| **Day 15** | Test everything | 30 min | - |
| **Day 16** | Cancel 1blu | 10 min | **Save €330/year!** |

**Total active time: ~3 hours**  
**Total elapsed time: ~2 weeks**

---

## Important Notes

### ✅ What Will Keep Working:
- Your website (moves to Vercel - faster!)
- Your 3 email addresses (move to chilly.domains)
- Your domain name (stays the same)

### ⚠️ What Changes:
- Website hosting: 1blu → Vercel
- Email hosting: 1blu → chilly.domains
- Domain registrar: 1blu → chilly.domains
- **Cost: €360/year → €30/year**

### 🚫 What WON'T Change:
- Your domain: it-service-lohfelden.de (stays the same!)
- Your email addresses (same addresses, different server)
- Your website content (looks the same, just faster)

---

## During Transfer (5-10 Days)

### What Happens:
- 1blu releases the domain
- chilly.domains receives the domain
- You get email updates
- **Everything keeps working at 1blu**
- **No downtime!**

### What You Should Do:
- Check your email for transfer updates
- Keep 1blu subscription active
- Don't make changes to DNS at 1blu
- Wait for "transfer complete" confirmation

---

## After Transfer (Day 1)

### Critical: Do This With Developer!

**Don't do this alone - coordinate with your developer!**

1. **Add domain to Vercel** (developer helps)
2. **Update DNS at chilly.domains** (developer provides exact records)
3. **Update email clients** (use chilly.domains IMAP settings)
4. **Test everything:**
   - Visit www.it-service-lohfelden.de
   - Send test email from each address
   - Receive test email to each address

5. **Wait 24-48 hours** (make sure everything works)
6. **Cancel 1blu subscription** 🎉

---

## Email Client Setup (After Transfer)

### IMAP Settings (from chilly.domains):
You'll find these in your chilly.domains control panel after transfer.

**Incoming (IMAP):**
- Server: ____________ (from chilly.domains)
- Port: 993
- Security: SSL/TLS
- Username: your-email@it-service-lohfelden.de
- Password: (set in chilly.domains)

**Outgoing (SMTP):**
- Server: ____________ (from chilly.domains)
- Port: 465 or 587
- Security: SSL/TLS
- Username: your-email@it-service-lohfelden.de
- Password: (same as above)

**Common Email Clients:**
- Outlook: Settings → Accounts → Email
- Thunderbird: Account Settings → Server Settings
- iPhone: Settings → Mail → Accounts
- Android: Gmail app → Settings → Add account

---

## Questions?

### For Account Setup:
Contact your developer

### For chilly.domains:
- Phone: +43 720 277 077
- Email: support@chilly.domains
- Hours: Mon-Thu 08:00-17:00, Fri 08:00-15:30

### For Vercel:
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions

---

## Troubleshooting

### "I can't access the transfer code at 1blu"
- Contact 1blu support: support@1blu.de
- Ask for: "Auth-Code für Domain-Transfer"

### "Domain transfer is taking too long"
- Normal: 5-10 days
- Check spam folder for confirmation emails
- Contact chilly.domains if > 10 days

### "Emails stopped working after DNS change"
- Double-check IMAP/SMTP settings
- Verify MX records at chilly.domains
- Contact chilly.domains support
- Old emails are safe in IMAP!

### "Website not loading after DNS change"
- DNS changes take 24-48 hours to propagate
- Try incognito/private browsing
- Check Vercel domain settings
- Contact developer

---

## Success Checklist

After everything is done, verify:

- [ ] Website loads at www.it-service-lohfelden.de
- [ ] Can send emails from all 3 addresses
- [ ] Can receive emails to all 3 addresses
- [ ] Old emails visible in email client
- [ ] Website auto-deploys when code changes
- [ ] 1blu subscription cancelled
- [ ] Saving €330/year confirmed!

---

## Congratulations! 🎉

You've successfully:
- ✅ Moved to modern infrastructure
- ✅ Reduced costs by 92%
- ✅ Made website faster (Vercel CDN)
- ✅ Kept all emails and domain
- ✅ Enabled automatic deployments

**Annual savings: €330** - that's money better spent on your business!

---

*Questions? Contact your developer for technical help.*
