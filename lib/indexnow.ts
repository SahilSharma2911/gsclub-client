/**
 * IndexNow — instant URL submission to Bing (and Yandex, Seznam, etc.)
 * Bing uses this to immediately crawl updated/new pages instead of waiting for scheduled crawl.
 * ChatGPT Search uses Bing index → faster AI visibility.
 *
 * Docs: https://www.indexnow.org/
 */

const INDEXNOW_KEY = "36c6f909f4d63d9e081581e021913d0a";
const SITE_URL = "https://getsmoke.com";

export async function submitToIndexNow(urls: string[]): Promise<boolean> {
  if (!urls.length) return false;

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "getsmoke.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls.slice(0, 10000), // max 10k per request
      }),
    });

    if (res.ok || res.status === 202) {
      console.log(`[IndexNow] Submitted ${urls.length} URLs. Status: ${res.status}`);
      return true;
    } else {
      console.error(`[IndexNow] Failed: ${res.status} ${await res.text()}`);
      return false;
    }
  } catch (err) {
    console.error("[IndexNow] Error:", err);
    return false;
  }
}

/** Submit a single URL (e.g. after product update) */
export async function notifyIndexNow(url: string): Promise<boolean> {
  return submitToIndexNow([url]);
}

/** Submit all key pages at once */
export async function submitKeyPages(): Promise<boolean> {
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/vapes`,
    `${SITE_URL}/brands`,
    `${SITE_URL}/best-disposable-vapes`,
    `${SITE_URL}/about-us`,
    `${SITE_URL}/vape-shop-florida`,
    `${SITE_URL}/vape-shop-texas`,
    `${SITE_URL}/vape-shop-illinois`,
    `${SITE_URL}/vape-shop-virginia`,
    `${SITE_URL}/vape-shop-tennessee`,
    `${SITE_URL}/vape-shop-wisconsin`,
    `${SITE_URL}/vape-shop-pennsylvania`,
    `${SITE_URL}/vape-delivery-atlanta`,
    `${SITE_URL}/blog/lost-mary-vs-geek-bar-2026`,
    `${SITE_URL}/blog/can-you-hit-a-geek-bar-while-its-charging`,
  ];
  return submitToIndexNow(urls);
}
