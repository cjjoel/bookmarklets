import { Glob } from "bun";
import Mustache from "mustache";
import { minify } from "terser";

const BOOKMARKLETS_DIR = "src/bookmarklets";
const BOOKMARKLETS_TEMPLATE_PATH = "src/templates/bookmarklet.mustache";
const README_TEMPLATE_PATH = "src/templates/README.mustache";
const README_PATH = "README.md";

const bookmarkletName = (fileName) => {
  const name = fileName.replaceAll("_", "-");
  return name.slice(0, -3);
};

const generateReadme = async () => {
  const glob = new Glob("*");
  const bookmarkletFileNames = Array.from(glob.scanSync(BOOKMARKLETS_DIR));
  const bookmarkletTemplateFile = Bun.file(BOOKMARKLETS_TEMPLATE_PATH);
  const bookmarkletTemplate = await bookmarkletTemplateFile.text();

  const bookmarkletUsageSection = await bookmarkletFileNames.reduce(
    async (textPromise, fileName) => {
      const text = await textPromise;
      const bookmarkletFile = Bun.file(`${BOOKMARKLETS_DIR}/${fileName}`);
      const bookmarklet = await bookmarkletFile.text();
      const minifiedBookmarklet = await minify(bookmarklet);
      const view = {
        name: bookmarkletName(fileName),
        bookmarklet: minifiedBookmarklet.code
      };
      return `${text}\n${Mustache.render(bookmarkletTemplate, view)}`;
    },
    Promise.resolve("")
  );

  const readmeTemplateFile = Bun.file(README_TEMPLATE_PATH);
  const readmeTemplate = await readmeTemplateFile.text();
  const newReadme = Mustache.render(readmeTemplate, {
    bookmarkletUsageSection
  });
  await Bun.write(README_PATH, newReadme);
};

generateReadme();
