# Bookmarklets

Personal collection of bookmarklets

## Usage

Create bookmarks with the following code as URL,

- For wayback-machine
  ```js
  javascript:location.href="https://web.archive.org/web/*/"+location.href;
  ```
- For copy-subtitles
  ```js
  javascript:(()=>{const t="000",e=Array.from(document.querySelectorAll("[class^=DraftJsSubtitleRowstyled__Row]"));try{const r=e.reduce(((e,r,n)=>{const a=Array.from(r.querySelectorAll("span[data-subtitle-row-timing-text='true']")).map((e=>(e=>{const[r=t,n=t,a=t,o=t]=e.split(/:|\./).map((t=>parseInt(t).toLocaleString("en-US",{minimumIntegerDigits:3}))).reverse();return`${o}:${a}:${n},${r}`})(e.innerText))),o=Array.from(r.querySelectorAll("span[data-text='true']")).map((t=>t.innerText)).join("");return`${e}\n\n${n+1}\n${a[0]} --\x3e ${a[1]}\n${o}`}),"");navigator.clipboard.writeText(r)}catch(t){window.alert(t)}})();
  ```
- For 1ft.io
  ```js
  javascript:location.href="https://1ft.io/"+location.href;
  ```
- For archive.today
  ```js
  javascript:location.href="https://archive.today/"+location.href;
  ```
- For copy-link
  ```js
  javascript:(()=>{try{navigator.clipboard.writeText(`[${document.title}](${location.href})`)}catch(t){window.alert(t)}})();
  ```
- For is-it-down?
  ```js
  javascript:location.href="https://downforeveryoneorjustme.com/"+location.hostname;
  ```