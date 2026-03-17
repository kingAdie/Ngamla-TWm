# Netlify Environment Variables — Gmail Setup

## Step 1 — Create a Gmail App Password

Gmail does NOT allow your normal password for third-party apps.
You must create a special 16-character App Password:

1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google", click **2-Step Verification**
   - If it's OFF, turn it ON first (required for App Passwords)
4. Scroll to the bottom and click **App passwords**
5. Under "App name" type: `Netlify Contact Form`
6. Click **Create**
7. Google shows you a **16-character password** like: `abcd efgh ijkl mnop`
   - Copy it (without spaces): `abcdefghijklmnop`
   - You only see this ONCE — save it now

---

## Step 2 — Add Variables in Netlify

1. Go to your Netlify site dashboard
2. Click **Site configuration** → **Environment variables**
3. Delete any old GoDaddy variables (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
4. Add these new ones:

| Variable        | Value                                        |
|-----------------|----------------------------------------------|
| `SMTP_USERNAME` | `ratshimolo112@gmail.com`                    |
| `SMTP_PASSWORD` | The 16-character App Password from Step 1    |
| `TO_EMAIL`      | `ratshimolo112@gmail.com`                    |

---

## Step 3 — Redeploy

Click **Deploys** → **Trigger deploy** → **Deploy site**

---

## Testing

Submit the contact form. You should receive an email at ratshimolo112@gmail.com
within a few seconds. Check your Spam folder the first time.

## Troubleshooting

- "Invalid login" error → App Password was copied wrong (no spaces, all lowercase)
- No email received → Check Gmail Spam folder
- Check Netlify **Functions** tab for detailed error logs
