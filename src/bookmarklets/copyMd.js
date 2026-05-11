(async () => {
  const handleYoutubeTitleCopy = () => {
    const isShorts = location.href.includes("shorts");
    if (isShorts) {
      const titleElement = document.querySelector(
        ".ytShortsVideoTitleViewModelShortsVideoTitle"
      );
      const shortsTitle = titleElement.textContent.trim();
      const hasSeparator = shortsTitle.includes(" | ");
      const transformedtitle = hasSeparator
        ? shortsTitle.split(" | ")[0]
        : shortsTitle;
      const channelElement = document.querySelector(
        ".ytReelChannelBarViewModelChannelName"
      );
      const channelTitle = channelElement.textContent.trim();
      const cleanUrl = location.href.split("&")[0]; // clean URL
      return `[${channelTitle} - ${transformedtitle}](${cleanUrl})`;
    } else {
      const channelElement = document.querySelector("ytd-channel-name a");
      const channelTitle = channelElement.textContent.trim();
      const titleElement = document.querySelector(
        "h1.ytd-watch-metadata yt-formatted-string"
      );
      const videoTitle = titleElement.textContent.trim();
      const hasSeparator = videoTitle.includes(" | ");
      const transformedtitle = hasSeparator
        ? videoTitle.split(" | ")[0]
        : videoTitle;
      const url = location.href.split("&")[0]; // clean URL
      return `[${channelTitle} - ${transformedtitle}](${url})`;
    }
  };

  const handleTiktokTitleCopy = (url) => {
    const username = url.split("/")[3];
    const titleElement =
      document.querySelector('[data-e2e="v2t-title"]') ||
      document.querySelector('[data-e2e="video-desc"]');
    const title = titleElement.textContent.trim();
    return `[${username} - ${title}](${url})`;
  };

  const handlePinterestTitleCopy = (url) => {
    const userElement = document.querySelector(
      '[data-test-id="creator-profile-name"]'
    );
    const username = userElement.textContent.trim();
    const descriptionElement = document.querySelector(
      '[data-test-id="truncated-description"]'
    );
    const description = descriptionElement?.textContent?.trim();
    const markdown = description
      ? `[${username} - ${description}](${url})`
      : `[${username} - ](${url})`;
    return markdown;
  };

  const handleJiraTitleCopy = () => {
    const selectedIssue = new URLSearchParams(window.location.search).get(
      "selectedIssue"
    );

    if (selectedIssue) {
      const titleElement = document.querySelector(
        "[data-testid='issue.views.issue-base.foundation.summary.heading']"
      );
      const title = titleElement.textContent.trim();
      return `[[${selectedIssue} ${title}]]`;
    } else {
      const ticketIdElement = document.querySelector(
        "[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.tooltip--container']"
      );
      const ticketId = ticketIdElement.textContent.trim();
      const titleElement = document.querySelector(
        "[data-testid='issue.views.issue-base.foundation.summary.heading']"
      );
      const title = titleElement.textContent.trim();
      return `[[${ticketId} ${title}]]`;
    }
  };

  const copyMd = async () => {
    try {
      const url = location.href;
      let markdownLink;

      if (url.includes("youtube")) {
        markdownLink = handleYoutubeTitleCopy();
      } else if (url.includes("tiktok")) {
        markdownLink = handleTiktokTitleCopy(url);
      } else if (url.includes("pinterest")) {
        markdownLink = handlePinterestTitleCopy(url);
      } else if (url.includes("everbee.atlassian.net")) {
        markdownLink = handleJiraTitleCopy();
      } else {
        markdownLink = `[${document.title}](${url})`;
      }

      await navigator.clipboard.writeText(markdownLink);
      alert("Success");
    } catch (e) {
      alert("Failed to copy");
      console.error(e);
    }
  };

  await copyMd();
})();
