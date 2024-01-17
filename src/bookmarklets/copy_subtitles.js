(() => {
  const SUBTITLE_INFO_SELECTOR = "[class^=DraftJsSubtitleRowstyled__Row]";
  const DEFAULT_TIMECODE = "000";
  const TIMECODE_SELECTOR = "span[data-subtitle-row-timing-text='true']";
  const SUBTITLE_SELECTOR = "span[data-text='true']";

  const subtitleInfoElements = Array.from(
    document.querySelectorAll(SUBTITLE_INFO_SELECTOR)
  );

  const transformTimeCode = (timeStamp) => {
    const [
      milliseconds = DEFAULT_TIMECODE,
      second = DEFAULT_TIMECODE,
      minute = DEFAULT_TIMECODE,
      hour = DEFAULT_TIMECODE
    ] = timeStamp
      .split(/:|\./)
      .map((timeUnit) =>
        parseInt(timeUnit).toLocaleString("en-US", {
          minimumIntegerDigits: 3
        })
      )
      .reverse();
    return `${hour}:${minute}:${second},${milliseconds}`;
  };

  try {
    const subtitles = subtitleInfoElements.reduce(
      (subtitleText, subtitleInfoElement, index) => {
        const timecodes = Array.from(
          subtitleInfoElement.querySelectorAll(TIMECODE_SELECTOR)
        ).map((timeElement) => transformTimeCode(timeElement.innerText));
        const subtitle = Array.from(
          subtitleInfoElement.querySelectorAll(SUBTITLE_SELECTOR)
        )
          .map((subtitleElement) => subtitleElement.innerText)
          .join("");
        return `${subtitleText}\n\n${index + 1}\n${timecodes[0]} --> ${timecodes[1]}\n${subtitle}`;
      },
      ""
    );
    navigator.clipboard.writeText(subtitles);
  } catch (error) {
    window.alert(error);
  }
})();
