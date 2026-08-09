// Placeholder contact/social values. Update these once real numbers and
// links are available, then wire the contact form to a backend via CLI.

export const WHATSAPP_NUMBER = ''; // e.g. '919876543210' (country code, no +)
export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : 'https://wa.me/'; // TODO: add number

export const PHONE_DISPLAY = '+91 XXXXX XXXXX'; // TODO: add phone number
export const PHONE_HREF = 'tel:+91XXXXXXXXXX'; // TODO: add phone number
export const EMAIL = 'support@varaaheiventures.in';

export const ADDRESS = {
  line1: 'Varaahei Ventures',
  line2: 'Coimbatore, Tamil Nadu, India',
};

export const SOCIAL_LINKS = {
  instagram: '#', // TODO
  x: '#', // TODO
  facebook: '#', // TODO
  youtube: '#', // TODO
};
