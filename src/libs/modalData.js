export const populateDays = (i) => {
  const days = [];
  for (let index = 1; index <= i; index++) {
    days.push({ label: index, value: index });
  }
  return days;
};

export const months = [
  { label: "Jan", value: 1, days: 31 },
  { label: "Feb", value: 2, days: 28 },
  { label: "Mar", value: 3, days: 31 },
  { label: "Apr", value: 4, days: 30 },
  { label: "May", value: 5, days: 31 },
  { label: "Jun", value: 6, days: 30 },
  { label: "Jul", value: 7, days: 31 },
  { label: "Aug", value: 8, days: 31 },
  { label: "Sep", value: 9, days: 30 },
  { label: "Oct", value: 10, days: 31 },
  { label: "Nov", value: 11, days: 30 },
  { label: "Dec", value: 12, days: 31 },
];

export const years = [
  { label: 2020, value: 2020 },
  { label: 2021, value: 2021 },
  { label: 2022, value: 2022 },
  { label: 2023, value: 2023 },
  { label: 2024, value: 2024 },
  { label: 2025, value: 2025 },
  { label: 2026, value: 2026 },
  { label: 2027, value: 2027 },
  { label: 2028, value: 2028 },
  { label: 2029, value: 2029 },
];

export const types = [
  { label: "Data Subscriptions", value: 0 },
  { label: "Airtime Purchases", value: 1 },
];

export const sizes = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "100", value: 100 },
];

export const networks = [
  { label: "MTN", value: "MTN" },
  { label: "GLO", value: "GLO" },
  { label: "AIRTEL", value: "AIRTEL" },
  { label: "ETISALAT", value: "ETISALAT" },
];

export const paymentMethods = [
  { label: "ATM", value: 0 },
  { label: "Wallet", value: 1 },
];
