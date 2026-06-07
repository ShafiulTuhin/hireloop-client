import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PRICE_PLAN_ID = {
  seeker_pro: "price_1TfmlYFj0iy4Yi9ahszPzOOV",
  seeker_premium: "price_1TfnAMFj0iy4Yi9aVtdRI4FX",
  recruiter_growth: "price_1TfnBhFj0iy4Yi9aqGydl437",
  recruiter_enterprise: "price_1TfnCDFj0iy4Yi9aywpW5lB6",
};
