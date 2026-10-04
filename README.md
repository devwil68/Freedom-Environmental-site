# Freedom Environmental Starter Website

This is a static starter website for `freedom-enviro.com` and the Freedom Dumpsters service line.

## Files
- `index.html` — homepage
- `styles.css` — site styling
- `script.js` — navigation and a non-production booking-form demo

## Important before publishing
1. Replace the placeholder phone number `+18175550100`.
2. Replace the stock hero image with an owned/licensed photo of the F-450 and containers.
3. Connect the booking form to an approved booking, CRM, or email system. It does **not** save customer submissions yet.
4. Confirm pricing, service areas, terms, tax treatment, disposal policy, insurance language, and SMS consent language.
5. Add privacy policy, rental terms, and prohibited materials pages before taking live bookings.

## Publish with GitHub Pages
1. Create a public repository, such as `freedom-enviro-site`.
2. Upload these three files to the repository root.
3. Go to **Settings → Pages**.
4. Set Source to **Deploy from a branch**, Branch to `main`, Folder to `/ (root)`, and save.
5. GitHub will give you a `github.io` preview URL.
6. Under Pages, add `freedom-enviro.com` as the custom domain and then update the domain DNS records exactly as GitHub instructs.

## Better production deployment
For a commercial website with forms, payments, server-side integrations, and a future Liberty AI assistant, deploy the repository to Vercel after importing it from GitHub. Add the custom domain in Vercel and follow its DNS instructions.
