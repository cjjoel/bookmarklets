# Bookmarklets

Personal collection of bookmarklets

## Usage

Create bookmarks with the following code as URL,

- For wayback-machine
  ```js
  javascript:location.href="https://web.archive.org/web/*/"+location.href;
  ```
- For 1ft.io
  ```js
  javascript:location.href="https://1ft.io/"+location.href;
  ```
- For archive.today
  ```js
  javascript:location.href="https://archive.today/"+location.href;
  ```
- For hyperlink-copy
  ```js
<<<<<<< HEAD
  javascript:try{navigator.clipboard.writeText(`[${document.title}](${location.href})`)}catch(t){window.alert(t)}
=======
  javascript:navigator.clipboard.writeText(`[${document.title}](${location.href})`);
  ```
- For is-it-down?
  ```js
  javascript:location.href="https://downforeveryoneorjustme.com/"+location.hostname;
>>>>>>> d8a3259 (Add is-it-down? bookmarklet)
  ```