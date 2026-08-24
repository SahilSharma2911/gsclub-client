const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke?retryWrites=true&w=majority';

const IMAGE_URL = 'https://pub-e2c8a53d84f146beb67cf9ee9a8f4961.r2.dev/models/geek-bar-pulse-x2/blackberry-blueberry.webp';

const articles = [
  {
    title: 'Where to Buy Disposable Vapes Online in the USA (2026 Guide)',
    slug: 'where-to-buy-disposable-vapes-online-usa-2026',
    description: 'Looking for the best place to buy disposable vapes online in the USA? This guide covers the top sites, what to look for, and how to get fast delivery to your door.',
    tags: ['where to buy vapes', 'buy vapes online', 'disposable vapes usa', 'online vape store'],
    authorName: 'GetSmoke Team',
    isPublished: true,
    content: `
<h1>Where to Buy Disposable Vapes Online in the USA (2026 Guide)</h1>

<p>The US online vape market has grown dramatically over the past few years, and for good reason. More vapers than ever are choosing to shop online instead of heading to the nearest convenience store or gas station. Whether you are looking for the latest high-puff-count devices or specific flavors that are hard to find locally, the internet gives you access to a far wider selection at better prices - delivered straight to your door.</p>

<p>In this guide, we break down everything you need to know about buying disposable vapes online in the USA, including what to look for in a reputable online vape store, the top brands to consider, and how to get your order fast.</p>

<h2>Why Buying Vapes Online Beats Local Stores</h2>

<p>Walking into a local shop and buying whatever is on the shelf is convenient, but it comes with real drawbacks. Local retailers carry limited stock, often at inflated prices, and rarely have the newest models. Here is why shopping online wins:</p>

<ul>
  <li><strong>Wider selection:</strong> Online stores carry hundreds of devices, flavors, and brands that no brick-and-mortar shop could stock.</li>
  <li><strong>Better prices:</strong> Online retailers operate with lower overhead and can offer competitive pricing, especially on multi-packs.</li>
  <li><strong>Convenience:</strong> Shop any time, from anywhere. Your order arrives at your door within days.</li>
  <li><strong>Product information:</strong> Online listings include full specs, puff counts, nicotine levels, and flavor descriptions so you can make an informed choice.</li>
  <li><strong>Stock availability:</strong> No more showing up to find your favorite device sold out. Online inventory is updated in real time.</li>
</ul>

<h2>What to Look for in an Online Vape Store</h2>

<p>Not all online vape retailers are created equal. Before placing an order, check for these key qualities:</p>

<h3>Age Verification Compliance</h3>
<p>Any legitimate US-based online vape store must verify that buyers are 21 or older before completing a sale. This is required by federal law under the Prevent All Cigarette Trafficking (PACT) Act. Look for stores that use a recognized age verification system and require a valid government-issued ID at checkout or delivery.</p>

<h3>US-Based Operations</h3>
<p>Choose a store that operates within the United States and ships from domestic warehouses. This means faster delivery, no customs delays, and a store that is subject to US consumer protection laws.</p>

<h3>Wide Brand and Flavor Variety</h3>
<p>A quality online vape store should carry all the major brands and a full range of flavors and nicotine strengths. If a store only stocks a handful of products, you may be dealing with a reseller with limited buying power.</p>

<h3>Fast and Reliable Shipping</h3>
<p>Look for stores that offer multiple shipping options, including expedited delivery. Standard delivery to most US addresses should take no more than 3 to 5 business days.</p>

<h3>Customer Support</h3>
<p>A store that stands behind its products will have accessible customer service via email, chat, or phone. Check for a clear return and exchange policy as well.</p>

<h2>GetSmoke.com - Our Top Recommendation</h2>

<p><a href="https://getsmoke.com">GetSmoke.com</a> is a US-based online retailer specializing in disposable vapes with nationwide shipping. It stocks a broad catalog of the most popular brands and models, from entry-level devices to premium high-puff-count vapes. Age verification is handled at checkout in full compliance with US federal requirements, and orders ship from within the US for fast delivery.</p>

<p>GetSmoke.com is designed specifically for disposable vape buyers, which means the product selection, pricing, and site experience are all tailored to this category. You won't have to sift through unrelated products to find what you're looking for.</p>

<h2>Top Brands Available at GetSmoke.com</h2>

<h3>Geek Bar</h3>
<p>Geek Bar is one of the most recognized names in disposable vapes. Known for bold flavors, reliable performance, and high puff counts, Geek Bar devices are a top choice for vapers who want a dependable daily driver. Browse the full <a href="https://getsmoke.com/brands/geek-bar">Geek Bar collection at GetSmoke.com</a>.</p>

<h3>Fume</h3>
<p>Fume has built a loyal following with its consistent flavor delivery and long-lasting battery life. Their lineup covers a wide range of flavor profiles and puff counts, making it easy to find the right fit. Check out the <a href="https://getsmoke.com/brands/fume">Fume collection at GetSmoke.com</a>.</p>

<h3>RAZ</h3>
<p>RAZ is a newer brand that has quickly earned respect for its premium build quality and unique flavor options. It's a great choice for vapers looking for something a little different from the mainstream options. Explore the <a href="https://getsmoke.com/brands/raz">RAZ collection at GetSmoke.com</a>.</p>

<h2>Top Models to Consider</h2>

<h3>Geek Bar Pulse X2 - 50,000 Puffs</h3>
<p>The <a href="https://getsmoke.com/models/geek-bar-pulse-x2-50000-puffs">Geek Bar Pulse X2 50,000 puffs</a> is currently one of the highest puff count disposables on the market. It features a dual-mode operation so you can switch between regular and boost mode depending on your preference. The built-in display shows battery and e-liquid levels so you are never caught off guard. For vapers who want a device that lasts weeks, this is a top pick.</p>

<h3>Fume PRO - 30,000 Puffs</h3>
<p>The <a href="https://getsmoke.com/models/fume-pro-30000-puffs">Fume PRO 30,000 puffs</a> combines an impressive puff count with Fume's signature smooth draw. It comes in a variety of flavors and delivers consistent performance from first puff to last. This model offers strong value for the price and is one of the most popular Fume devices available.</p>

<h2>Shipping and Age Verification</h2>

<p>When ordering from GetSmoke.com, here is what to expect:</p>

<ul>
  <li><strong>Age verification:</strong> You will be required to verify your age (21+) at checkout. This is done via a secure digital verification process.</li>
  <li><strong>Shipping timeframe:</strong> Most orders ship within 1 business day. Standard delivery typically arrives in 3 to 5 business days. Expedited options are available at checkout.</li>
  <li><strong>Signature on delivery:</strong> Adult signature may be required at delivery per federal PACT Act compliance rules.</li>
  <li><strong>Nationwide shipping:</strong> GetSmoke.com ships to all eligible US states and territories.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>Is it legal to buy vapes online in the USA?</h3>
<p>Yes, it is legal to purchase disposable vapes online in the USA for adults aged 21 and older. Online retailers must comply with the PACT Act, which requires age verification and regulated shipping through compliant carriers.</p>

<h3>How old do you have to be to buy vapes online?</h3>
<p>You must be at least 21 years old to purchase vaping products in the United States. This applies to both in-store and online purchases. Online stores are required to verify your age before processing your order.</p>

<h3>How fast is shipping for online vape orders?</h3>
<p>Shipping speed varies by retailer and your location. GetSmoke.com typically ships orders within 1 business day, with standard delivery arriving in 3 to 5 business days. Expedited options are available for faster delivery.</p>

<h3>Can I return a vape I bought online?</h3>
<p>Return policies vary by retailer. Check the store's policy before ordering. Most reputable stores will handle defective or damaged items but do not accept returns on used products.</p>

<h2>Ready to Shop?</h2>

<p>Skip the local store and shop smarter. Browse the full selection of disposable vapes at <a href="https://getsmoke.com/vapes">GetSmoke.com/vapes</a> and find your next favorite device. Fast shipping, age-verified checkout, and a huge catalog of top brands and models make GetSmoke.com the best place to buy disposable vapes online in the USA.</p>
    `.trim()
  },
  {
    title: 'Best Disposable Vapes to Buy Online in 2026 - Top 5 Picks',
    slug: 'best-disposable-vapes-to-buy-online-2026',
    description: 'Our top 5 disposable vapes available for purchase online in 2026, ranked by puff count, flavor quality, and value. All ship fast across the USA.',
    tags: ['best disposable vapes', 'buy vapes online', 'top vapes 2026', 'disposable vape review'],
    authorName: 'GetSmoke Team',
    isPublished: true,
    content: `
<h1>Best Disposable Vapes to Buy Online in 2026 - Top 5 Picks</h1>

<p>Disposable vapes have become the go-to choice for millions of adults in the USA. They are easy to use, require no maintenance, and come in an enormous variety of flavors and nicotine strengths. Unlike traditional mods or pod systems, there's no filling, no coil changes, and no settings to adjust. You pick it up, you vape, and when it's done, you're done.</p>

<p>But with hundreds of models available online, how do you know which ones are actually worth buying? We have reviewed the top options available in 2026 and ranked our top 5 based on puff count, flavor consistency, battery reliability, and overall value. All of these models are available online with fast US shipping.</p>

<h2>What Makes a Great Disposable Vape?</h2>

<p>Before diving into the list, here is what separates a great disposable vape from an average one:</p>

<ul>
  <li><strong>Puff count accuracy:</strong> The advertised puff count should be close to what you actually get. Cheap devices often fall well short.</li>
  <li><strong>Flavor quality:</strong> Consistent, true-to-name flavor from start to finish. Not just strong at first and faded by the end.</li>
  <li><strong>Battery performance:</strong> The battery should last as long as the e-liquid. Nothing is worse than running out of charge before you run out of juice.</li>
  <li><strong>Build quality:</strong> Solid construction with no leaking or misfires.</li>
  <li><strong>Value:</strong> Good performance per dollar, especially when buying in multi-packs.</li>
</ul>

<h2>Top 5 Disposable Vapes to Buy Online in 2026</h2>

<h3>#1 - Geek Bar Pulse X2 (50,000 Puffs)</h3>

<p>The <a href="https://getsmoke.com/models/geek-bar-pulse-x2-50000-puffs">Geek Bar Pulse X2 50,000 puffs</a> is the standout disposable of 2026. With a claimed 50,000 puffs and dual-mode operation, this device is built for serious vapers who want something that lasts. Switch between regular mode for steady, smooth hits and boost mode for stronger vapor production and more intense flavor.</p>

<p>The integrated display screen shows real-time battery level and e-liquid remaining, which eliminates the guesswork. Geek Bar has done an excellent job with flavor accuracy across the Pulse X2 lineup - each flavor delivers from first puff to last without noticeable drop-off.</p>

<p><strong>Key specs:</strong></p>
<ul>
  <li>50,000 puffs (dual mode)</li>
  <li>Built-in LED display</li>
  <li>USB-C rechargeable</li>
  <li>Wide flavor selection</li>
  <li>5% nicotine</li>
</ul>

<p><strong>Verdict:</strong> Best overall for high puff count and consistent performance. A top pick for anyone who wants a premium vaping experience without constantly buying replacements.</p>

<h3>#2 - Geek Bar Pulse 2 (25,000 Puffs)</h3>

<p>The <a href="https://getsmoke.com/models/geek-bar-pulse-2-25000-puffs">Geek Bar Pulse 2 25,000 puffs</a> is the mid-range option from the Geek Bar Pulse family. It delivers the same reliable flavor performance as the X2 at a lower price point and with a more compact form factor. If you don't need 50,000 puffs, the Pulse 2 hits the sweet spot between longevity and cost.</p>

<p>The Pulse 2 also features a display screen, dual-mode operation, and USB-C charging. The ergonomic design makes it comfortable to hold, and it's easy to carry in a pocket or bag.</p>

<p><strong>Key specs:</strong></p>
<ul>
  <li>25,000 puffs</li>
  <li>Display screen</li>
  <li>Dual-mode operation</li>
  <li>USB-C rechargeable</li>
  <li>5% nicotine</li>
</ul>

<p><strong>Verdict:</strong> Best for vapers who want premium Geek Bar quality without committing to the full X2 puff count. Great value in the mid-tier range.</p>

<h3>#3 - Fume PRO (30,000 Puffs)</h3>

<p>The <a href="https://getsmoke.com/models/fume-pro-30000-puffs">Fume PRO 30,000 puffs</a> is one of the most popular devices in the Fume lineup - and for good reason. Fume has always been known for smooth, consistent draws, and the PRO model takes that reputation up a notch with a 30,000 puff capacity and a wide variety of well-balanced flavors.</p>

<p>The Fume PRO is particularly popular among vapers who prefer a slightly cooler, smoother draw over intense vapor production. It's a strong performer for everyday use and the puff count makes it a cost-effective choice, especially in multi-pack deals.</p>

<p><strong>Key specs:</strong></p>
<ul>
  <li>30,000 puffs</li>
  <li>Smooth airflow design</li>
  <li>USB-C rechargeable</li>
  <li>Wide flavor range</li>
  <li>Available in 5% nicotine</li>
</ul>

<p><strong>Verdict:</strong> Best for vapers who prioritize smooth, consistent flavor delivery. One of the best value options in the 30K puff range.</p>

<h3>#4 - RAZ DC25000 (25,000 Puffs)</h3>

<p>The <a href="https://getsmoke.com/models/raz-dc25000">RAZ DC25000</a> is the flagship model from RAZ and has earned strong reviews since its release. RAZ has positioned itself as a premium brand, and the DC25000 lives up to that reputation with its solid build, impressive flavor lineup, and reliable 25,000 puff performance.</p>

<p>What sets the RAZ DC25000 apart is its unique flavor profiles - RAZ tends to lean toward complex, layered blends rather than single-note flavors. If you are tired of the same basic fruit flavors offered by other brands, the RAZ lineup is worth exploring.</p>

<p><strong>Key specs:</strong></p>
<ul>
  <li>25,000 puffs</li>
  <li>Dual display</li>
  <li>USB-C rechargeable</li>
  <li>Unique flavor blends</li>
  <li>5% nicotine</li>
</ul>

<p><strong>Verdict:</strong> Best for vapers who want premium build quality and distinctive flavors. A strong competitor in the 25K puff category.</p>

<h3>#5 - HQD Cuvie (Various Puff Counts)</h3>

<p>The HQD Cuvie series has been a staple of the disposable vape market for years. HQD offers the Cuvie in multiple configurations - from smaller options for casual use to larger devices with higher puff counts. The brand is known for producing reliable, no-frills devices that deliver consistent performance at accessible prices.</p>

<p>The Cuvie is a solid option for vapers who are new to disposables or who want a low-cost backup device. It won't match the puff counts or feature sets of the Geek Bar or RAZ options above, but it delivers reliable performance at a budget-friendly price.</p>

<p><strong>Verdict:</strong> Best entry-level or backup option. Great for first-time disposable vapers or those looking for an affordable everyday device.</p>

<h2>Where to Buy These Vapes Online</h2>

<p>All of the top-rated vapes listed above are available at <a href="https://getsmoke.com">GetSmoke.com</a>. GetSmoke.com is a US-based online retailer with nationwide shipping and a full catalog of the best brands and models. Orders ship fast, age verification is handled at checkout, and the product selection is updated regularly to include the newest releases.</p>

<h2>What to Consider When Buying Disposable Vapes Online</h2>

<h3>Nicotine Strength</h3>
<p>Most high-puff-count disposables are available at 5% (50mg) nicotine salt. If you are a lighter smoker or prefer a less intense hit, look for devices that offer lower nicotine options such as 3% or 2%.</p>

<h3>Puff Count</h3>
<p>Higher puff counts mean longer-lasting devices but also higher upfront cost. Calculate cost per puff to compare value across different price points. Multi-pack purchases often bring the per-puff cost down significantly.</p>

<h3>Flavor Profile</h3>
<p>Think about whether you prefer fruit, menthol, dessert, or tobacco-based flavors. Most brands offer 20 or more flavor options per model. Read product descriptions carefully and check reviews to find flavors that match your preferences.</p>

<h2>Ready to Buy?</h2>

<p>Browse the full catalog of top-rated disposable vapes at <a href="https://getsmoke.com/vapes">GetSmoke.com/vapes</a> or check out our curated list of <a href="https://getsmoke.com/best-disposable-vapes">best disposable vapes</a> for more recommendations. Fast US shipping, age-verified checkout, and a wide selection of the top brands and models make GetSmoke.com the best place to shop online.</p>
    `.trim()
  },
  {
    title: 'Cheapest Place to Buy Disposable Vapes Online USA 2026',
    slug: 'cheapest-place-to-buy-disposable-vapes-online-2026',
    description: 'Find the cheapest prices on disposable vapes online in the USA. Compare pricing, pack deals, and get the best value per puff without sacrificing quality.',
    tags: ['cheap disposable vapes', 'affordable vapes online', 'best value vapes', 'discount vapes usa'],
    authorName: 'GetSmoke Team',
    isPublished: true,
    content: `
<h1>Cheapest Place to Buy Disposable Vapes Online USA 2026</h1>

<p>Price matters. Whether you are a daily vaper going through multiple devices a month or someone who just wants to find a great deal, knowing where to buy disposable vapes at the best price can save you serious money over time. This guide breaks down how to calculate real value, why online stores consistently beat local retailers on price, and how to get the best deals on the most popular disposable vapes in 2026.</p>

<h2>Why Price Per Puff Is the Metric That Actually Matters</h2>

<p>Looking at the sticker price of a disposable vape tells you only part of the story. A $15 device with 5,000 puffs costs $0.003 per puff. A $36 device with 50,000 puffs costs $0.00072 per puff - less than a quarter of the cost per use. When comparing devices across different puff counts and price points, always calculate the price per puff:</p>

<p><strong>Price per puff = Device price / Puff count</strong></p>

<p>High-puff-count devices from reputable brands consistently offer the lowest cost per puff, especially when purchased in multi-packs from online retailers.</p>

<h2>Online Stores vs. Local Shops - Why Online Always Wins on Price</h2>

<p>Gas stations, convenience stores, and smoke shops all carry disposable vapes - but they charge a premium for the convenience of being nearby. Here's why online stores offer better prices:</p>

<ul>
  <li><strong>Lower overhead:</strong> Online retailers don't pay for prime retail real estate, large staff, or physical storefront costs. Those savings are passed to the buyer.</li>
  <li><strong>Direct-to-consumer supply chain:</strong> Many online stores buy directly from distributors in larger quantities, reducing per-unit cost.</li>
  <li><strong>Competition:</strong> Online shoppers can compare prices instantly, which keeps retailers honest and prices competitive.</li>
  <li><strong>Volume pricing:</strong> Online stores offer multi-pack deals that local shops simply cannot match.</li>
  <li><strong>No impulse tax:</strong> Local stores know they have a captive audience. Online, you buy on your terms.</li>
</ul>

<p>In most cases, buying online saves 20-40% compared to local retail prices - even before factoring in multi-pack discounts.</p>

<h2>Pack Deals - The Biggest Way to Save</h2>

<p>One of the most effective ways to reduce your per-device cost is to buy in packs. GetSmoke.com offers pack pricing on popular models including packs of 3, 5, and 10 units. The savings per device increase significantly as pack size goes up.</p>

<p>For example, the <a href="https://getsmoke.com/models/fume-pro-30000-puffs">Fume PRO 30,000 puffs</a> is available as a single unit or in multi-packs at GetSmoke.com. Buying a pack of 10 drops the per-unit price substantially compared to buying one at a time - which means you're getting the same high-quality device for a fraction of the single-unit cost.</p>

<p>If you have a preferred device that you know you'll keep buying, stocking up in a larger pack is almost always the smartest financial move.</p>

<h2>Price Comparison - Single vs. Multi-Pack Value</h2>

<p>Here's a breakdown of how pack pricing works and the kind of savings you can expect:</p>

<table>
  <thead>
    <tr>
      <th>Pack Size</th>
      <th>Per-Unit Price (approx)</th>
      <th>Total Puffs</th>
      <th>Savings vs. Single</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Single</td>
      <td>$29.99</td>
      <td>30,000</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Pack of 3</td>
      <td>~$25.99 each</td>
      <td>90,000</td>
      <td>~13% savings</td>
    </tr>
    <tr>
      <td>Pack of 5</td>
      <td>~$22.99 each</td>
      <td>150,000</td>
      <td>~23% savings</td>
    </tr>
    <tr>
      <td>Pack of 10</td>
      <td>~$18.99 each</td>
      <td>300,000</td>
      <td>~37% savings</td>
    </tr>
  </tbody>
</table>

<p>These figures are based on approximate Fume PRO 30K pack pricing. Exact prices vary by model and availability - check the product pages at GetSmoke.com for current pricing.</p>

<h2>GetSmoke.com Pricing - What You Can Expect</h2>

<p>GetSmoke.com is one of the most competitively priced online vape stores in the USA. Here are current approximate prices on some of the most popular models:</p>

<ul>
  <li><strong>Geek Bar Pulse X2 50,000 puffs</strong> - approximately $35.99 per unit. At 50,000 puffs, this works out to just $0.00072 per puff - outstanding value for a premium device.</li>
  <li><strong>Fume PRO 30,000 puffs</strong> - approximately $29.99 per unit single, or approximately $18.99 per unit in a pack of 10. The pack of 10 saves you around $110 compared to buying 10 singles individually.</li>
</ul>

<p>Prices are subject to change and may vary by flavor and availability. Visit <a href="https://getsmoke.com">GetSmoke.com</a> for current pricing on all models.</p>

<h2>Free Shipping - How to Qualify</h2>

<p>Shipping costs can eat into your savings if you're not careful. GetSmoke.com offers free shipping on orders over $89. If you are already planning to buy a multi-pack or a couple of individual devices, you will likely hit that threshold easily.</p>

<p>Here's how to maximize savings with free shipping:</p>

<ul>
  <li>Order enough to cross the $89 threshold and eliminate shipping fees entirely.</li>
  <li>Combine a large pack purchase with a single unit from a different brand to hit the minimum without over-ordering.</li>
  <li>Stock up on your favorites in larger packs - you'll use them and you'll save on shipping at the same time.</li>
</ul>

<p>Free shipping at <a href="https://getsmoke.com">GetSmoke.com</a> applies nationwide, so whether you're in Florida, California, or anywhere in between, you can take advantage of the offer.</p>

<h2>Tips to Save the Most Money on Disposable Vapes</h2>

<ul>
  <li><strong>Buy in packs:</strong> The more you buy at once, the less you pay per unit. If you have a model you love, buy a pack of 5 or 10.</li>
  <li><strong>Hit the free shipping threshold:</strong> Orders over $89 at GetSmoke.com ship free. Time your orders to qualify.</li>
  <li><strong>Check for new arrivals:</strong> Newer models sometimes launch at introductory prices. Bookmark the <a href="https://getsmoke.com/brands">brands section</a> at GetSmoke.com and check regularly for new releases and promotions.</li>
  <li><strong>Compare price per puff:</strong> Don't be distracted by a low sticker price. Always divide price by puff count to find the real value.</li>
  <li><strong>Stick to trusted brands:</strong> Cheap, off-brand devices may seem like a deal but often underdeliver on puff count and flavor quality. Trusted brands like Geek Bar and Fume offer the best balance of price and performance.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>Is cheap always worse quality?</h3>
<p>Not necessarily. The cheapest option per puff is often a high-end device bought in a large multi-pack from a trusted brand. Cheap in terms of price-per-puff is different from cheap in terms of build quality. Stick to well-known brands purchased from reputable retailers, and buying in bulk will give you high quality at a low cost per use.</p>

<h3>What is the best value disposable vape in 2026?</h3>
<p>For sheer value per puff, the Geek Bar Pulse X2 at 50,000 puffs and the Fume PRO 30,000 puffs (especially in a pack of 10) are top contenders. Both offer premium performance at a cost-per-puff that no local store can match. Both are available at GetSmoke.com with competitive pricing and free shipping on qualifying orders.</p>

<h3>How do I know if an online vape store is legit?</h3>
<p>Look for US-based operations, a clear age verification process, transparent pricing with no hidden fees, and responsive customer support. GetSmoke.com checks all of these boxes and has a track record of reliable delivery across the USA.</p>

<h2>Start Saving Today</h2>

<p>Stop overpaying at the gas station or convenience store. Shop smarter and save more by buying your disposable vapes online. Browse the full catalog and current pricing at <a href="https://getsmoke.com/vapes">GetSmoke.com/vapes</a> and take advantage of multi-pack deals, free shipping on orders over $89, and one of the widest selections of disposable vapes in the USA.</p>
    `.trim()
  }
];

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log('Connected to MongoDB');

  const db = client.db('getsmoke');
  const now = new Date();

  const results = [];

  for (const article of articles) {
    const doc = {
      ...article,
      publishedAt: now,
      createdAt: now,
      updatedAt: now
    };

    const articleResult = await db.collection('BlogArticle').insertOne(doc);
    const articleId = articleResult.insertedId.toString();
    console.log(`Inserted article: "${article.title}" -> ID: ${articleId}`);

    const imageResult = await db.collection('Image').insertOne({
      url: IMAGE_URL,
      blogArticleId: new ObjectId(articleId),
      position: 0,
      alt: article.title,
      createdAt: now,
      updatedAt: now
    });
    const imageId = imageResult.insertedId.toString();
    console.log(`Inserted image for article ${articleId} -> Image ID: ${imageId}`);

    results.push({ title: article.title, slug: article.slug, articleId, imageId });
  }

  await client.close();

  console.log('\n=== RESULTS ===');
  for (const r of results) {
    console.log(`Title: ${r.title}`);
    console.log(`  Slug: ${r.slug}`);
    console.log(`  Article ID: ${r.articleId}`);
    console.log(`  Image ID: ${r.imageId}`);
    console.log('');
  }

  return results;
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
