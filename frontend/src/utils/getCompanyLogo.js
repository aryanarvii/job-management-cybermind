export const getCompanyLogo = (companyName = '') => {
  if (!companyName) return '/logos/default.svg';


  const normalized = companyName.trim().toLowerCase();

  const known = ['amazon', 'google', 'flipkart', 'tesla', 'paytm'];

  if (known.includes(normalized)) {
    return `/logos/${normalized}.png`;
  }

  return '/logos/default.svg';
};
