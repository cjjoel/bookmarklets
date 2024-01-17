(() => {
  try {
    navigator.clipboard.writeText(`[${document.title}](${location.href})`);
  } catch (error) {
    window.alert(error);
  }
})();
