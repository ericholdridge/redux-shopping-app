import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(process.env.NEXT_PUBLIC_COMMERCE_PUBLIC_KEY, true);
