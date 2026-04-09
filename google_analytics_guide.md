# Google Analytics Setup Guide for 3DScanBoston

## What is Google Analytics?
Google Analytics is a free service that tracks and reports website traffic. It helps you understand:
*   **Audience:** Who is visiting your site?
*   **Acquisition:** How did they find you (Google Search, Social Media, etc.)?
*   **Behavior:** Which sections of your site are they most interested in?
*   **Conversions:** How many people are filling out the "Get a Quote" form?

## Is it easy to install?
**Yes.** Once you have your **Measurement ID**, the installation only takes a few seconds. I just need to add a small snippet of code to the `<head>` of your website pages.

## How to set it up (Step-by-Step)

> [!IMPORTANT]
> **Make sure you are on the right website.**
> Go to: **[https://analytics.google.com](https://analytics.google.com)**
> 
> *Note: If you see "Google for Developers" (like in your screenshot), you are on the wrong page! That is for developer news. You need the **Analytics Dashboard** at the link above.*

1.  **Sign In:** Open **[analytics.google.com](https://analytics.google.com)** and sign in with your business Gmail.
2.  **Create Account/Property:**
    *   Click the **Admin** gear icon (bottom left).
    *   Click **Create Property**.
    *   Name it `3DScanBoston Website`.
3.  **Create a Data Stream:**
    *   Select **Web** as the platform.
    *   Enter `3dscanboston.com` as the Website URL.
4.  **Get the Measurement ID:**
    *   Once created, you will see a **Measurement ID** (e.g., `G-XXXXXXXXXX`).
5.  **Share the Code:**
    *   Google will provide a section called **"View tag instructions"**.
    *   Copy the script they provide and share it here. It looks like this:
    ```html
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
    ```

## What to do next?
Simply share your **Measurement ID** or the full script here, and I will handle the code changes for you!
