# Resend Setup Guide

## Quick Setup

1. **Get your Resend API Key:**
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account
   - Go to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

2. **Add to Environment Variables:**
   Create a `.env.local` file in your project root:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. **For Production (Vercel):**
   - Go to your Vercel project dashboard
   - Go to Settings → Environment Variables
   - Add `RESEND_API_KEY` with your key

## Email Configuration

The contact form is configured to:
- **From**: `onboarding@resend.dev` (Resend's default domain)
- **To**: `yeshuyeshwanth2005@gmail.com` (your email)
- **Subject**: `Portfolio Contact: [user's subject]`

## Custom Domain (Optional)

For production, you can:
1. Add your own domain in Resend dashboard
2. Update the `from` field in `/src/app/api/contact/route.ts`
3. Replace `onboarding@resend.dev` with `contact@yourdomain.com`

## Testing

1. Start your development server: `npm run dev`
2. Go to your portfolio contact section
3. Fill out the form and submit
4. Check your email inbox

## Troubleshooting

- **"Module not found" error**: Fixed by using Resend v2.0.0
- **"Invalid API key"**: Make sure your API key is correct
- **"Domain not verified"**: Use `onboarding@resend.dev` for testing

## Free Tier Limits

- 3,000 emails per month
- 100 emails per day
- Perfect for portfolio contact forms