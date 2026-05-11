# Bookmarklets

Personal collection of bookmarklets

## Usage

Create bookmarks with the following code as URL,

- For isItDown
  ```js
  javascript:location.href="https://downforeveryoneorjustme.com/"+location.hostname;
  ```
- For randomEmail
  ```js
  javascript:(()=>{const e=`joel_${Date.now()}@example.com`;navigator.clipboard.writeText(e),alert(`Successfully copied ${e}`)})();
  ```
- For archive.today
  ```js
  javascript:location.href="https://archive.today/"+location.href;
  ```
- For 1ft
  ```js
  javascript:location.href="https://1ft.io/"+location.href;
  ```
- For copyLink
  ```js
  javascript:(()=>{try{navigator.clipboard.writeText(`[${document.title}](${location.href})`)}catch(t){window.alert(t)}})();
  ```
- For copyMd
  ```js
  javascript:(async()=>{await(async()=>{try{const t=location.href;let e;e=t.includes("youtube")?(()=>{if(location.href.includes("shorts")){const t=document.querySelector(".ytShortsVideoTitleViewModelShortsVideoTitle").textContent.trim(),e=t.includes(" | ")?t.split(" | ")[0]:t;return`[${document.querySelector(".ytReelChannelBarViewModelChannelName").textContent.trim()} - ${e}](${location.href.split("&")[0]})`}{const t=document.querySelector("ytd-channel-name a").textContent.trim(),e=document.querySelector("h1.ytd-watch-metadata yt-formatted-string").textContent.trim();return`[${t} - ${e.includes(" | ")?e.split(" | ")[0]:e}](${location.href.split("&")[0]})`}})():t.includes("tiktok")?(t=>`[${t.split("/")[3]} - ${(document.querySelector('[data-e2e="v2t-title"]')||document.querySelector('[data-e2e="video-desc"]')).textContent.trim()}](${t})`)(t):t.includes("pinterest")?(t=>{const e=document.querySelector('[data-test-id="creator-profile-name"]').textContent.trim(),n=document.querySelector('[data-test-id="truncated-description"]'),o=n?.textContent?.trim();return o?`[${e} - ${o}](${t})`:`[${e} - ](${t})`})(t):t.includes("everbee.atlassian.net")?(()=>{const t=new URLSearchParams(window.location.search).get("selectedIssue");if(t)return`[[${t} ${document.querySelector("[data-testid='issue.views.issue-base.foundation.summary.heading']").textContent.trim()}]]`;return`[[${document.querySelector("[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.tooltip--container']").textContent.trim()} ${document.querySelector("[data-testid='issue.views.issue-base.foundation.summary.heading']").textContent.trim()}]]`})():`[${document.title}](${t})`,await navigator.clipboard.writeText(e),alert("Success")}catch(t){alert("Failed to copy"),console.error(t)}})()})();
  ```
- For copySubtitles
  ```js
  javascript:(()=>{const t="000",e=Array.from(document.querySelectorAll("[class^=DraftJsSubtitleRowstyled__Row]"));try{const r=e.reduce(((e,r,n)=>{const a=Array.from(r.querySelectorAll("span[data-subtitle-row-timing-text='true']")).map((e=>(e=>{const[r=t,n=t,a=t,o=t]=e.split(/:|\./).map((t=>parseInt(t).toLocaleString("en-US",{minimumIntegerDigits:3}))).reverse();return`${o}:${a}:${n},${r}`})(e.innerText))),o=Array.from(r.querySelectorAll("span[data-text='true']")).map((t=>t.innerText)).join("");return`${e}\n\n${n+1}\n${a[0]} --\x3e ${a[1]}\n${o}`}),"");navigator.clipboard.writeText(r)}catch(t){window.alert(t)}})();
  ```
- For debugger
  ```js
  javascript:(()=>{try{const e=Number(prompt("Timeout in seconds:","0"))||0;setTimeout((()=>{debugger}),1e3*e)}catch(e){window.alert(e)}})();
  ```
- For waybackMachine
  ```js
  javascript:location.href="https://web.archive.org/web/*/"+location.href;
  ```

## Development

### Setup docker shell
```bash
docker build -t bookmarklets-image .

docker run -it --rm -v ${PWD}:/app bookmarklets-image /bin/ash
```

### Linting and README generation
```bash
bun run lint:fix

bun run generate-readme
```

## References

* [GitHub - draktr/paywall_bypass_bookmarklets](https://github.com/draktr/paywall_bypass_bookmarklets)
* [GitHub - ThomasOrlita/awesome-bookmarklets](https://github.com/ThomasOrlita/awesome-bookmarklets)
* [GitHub - hariprasd/cool-bookmarklets](https://github.com/hariprasd/cool-bookmarklets)
* [Bookmarklets](https://isqua.github.io/bookmarklets/)