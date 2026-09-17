/** Swap this file (and /public/profile.jpg) to personalize the invitation. */

declare global {
  interface Window {
    __INVITE_PHOTO?: string
  }
}

export const invitation = {
  photoUrl:
    (typeof window !== 'undefined' && window.__INVITE_PHOTO) ||
    `${import.meta.env.BASE_URL}profile.jpg`,
  photoAlt: 'a very serious date prospect',
  headline: 'Will you go on a date with me?',
  yesLabel: 'YES ♥',
  noLabel: 'no 🐾',
  yayTitle: 'WAIT YOU ACTUALLY SAID YES?? 😭',
  yaySub: 'I was so ready for you to say no 😅',
  yayCta: 'okay okay! →',
  dateTitle: 'So... when are you free?',
  dateCta: 'set the date! ♥',
  foodTitle: 'What are we feeling? 🍽✨',
  foodSub: 'pick your vibe',
  letterTitle: "glad you didn't say no. be ready by 6, I'm coming to get you 🚗",
  letterPs:
    'P.S. normal people text. I made a website during lunch, for you. no big deal.',
  letterCta: 'ok I accept 💝',
  paywallTitle: 'one small fee',
  paywallBody:
    'to confirm your acceptance of this date, please complete the following transaction. totally normal. everyone does this.',
  productName: 'Date Agreement™',
  productPrice: 499,
  productFinePrint: 'one-time fee • non-refundable • absolutely worth it',
  payCta: 'pay $499 & confirm 💝',
  goBack: 'go back',
  paidTitle: 'payment received!',
  paidBody: 'the date is officially confirmed. see you at 6. 🚗',
  paidJoke: 'jk — no card was charged. obviously.',
} as const

export const foods = [
  { emoji: '🍕', label: 'Pizza' },
  { emoji: '🍣', label: 'Sushi' },
  { emoji: '🍔', label: 'Burgers' },
  { emoji: '🍝', label: 'Pasta' },
  { emoji: '🌮', label: 'Tacos' },
  { emoji: '🍜', label: 'Ramen' },
] as const

export type FoodLabel = (typeof foods)[number]['label']

function formatTime(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const period = hours >= 12 ? 'PM' : 'AM'
  const hour12 = hours % 12 || 12
  return `${hour12}:${String(mins).padStart(2, '0')} ${period}`
}

/** 12:00 PM through 9:00 PM, every 30 minutes. */
export const timeSlots: string[] = Array.from({ length: 19 }, (_, i) =>
  formatTime(12 * 60 + i * 30),
)
