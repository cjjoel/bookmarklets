(() => {
  try {
    const timeoutInSeconds = Number(prompt("Timeout in seconds:", "0")) || 0;
    setTimeout(() => {
      debugger; // eslint-disable-line no-debugger
    }, timeoutInSeconds * 1000);
  } catch (error) {
    window.alert(error);
  }
})();
