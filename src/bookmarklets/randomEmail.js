(() => {
  const email = `joel_${Date.now()}@example.com`;
  navigator.clipboard.writeText(email);
  alert(`Successfully copied ${email}`);
})();
