(() => {
  const email = `joel_${Date.now()}@example.com`;
  navigator.clipboard.writeText(email);
})();
