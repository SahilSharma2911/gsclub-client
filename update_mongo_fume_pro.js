const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke?retryWrites=true&w=majority');

const FLAVORS = [
  { flavor: 'Black Ice', slug: 'black-ice' },
  { flavor: 'Dubai Chocolate', slug: 'dubai-chocolate' },
  { flavor: 'Freezer Ice', slug: 'freezer-ice' },
  { flavor: 'Lush Ice', slug: 'lush-ice' },
  { flavor: 'Mango Tango', slug: 'mango-tango' },
  { flavor: 'Peach Ice', slug: 'peach-ice' },
  { flavor: 'Strawberry Banana', slug: 'strawberry-banana' },
  { flavor: 'Strawberry Wind', slug: 'strawberry-wind' },
  { flavor: 'Texas Citrus Rush', slug: 'texas-citrus-rush' },
  { flavor: 'Triple Berry Ice', slug: 'triple-berry-ice' },
  { flavor: 'White Grape', slug: 'white-grape' },
  { flavor: 'Cinnamon Twist', slug: 'cinnamon-twist' },
  { flavor: 'Florida Tropical Breeze', slug: 'florida-tropical-breeze' },
  { flavor: 'Miami Mint', slug: 'miami-mint' },
  { flavor: 'Pineapple Paradise', slug: 'pineapple-paradise' },
  { flavor: 'Polar Ice', slug: 'polar-ice' },
  { flavor: 'Watermelon Wave', slug: 'watermelon-wave' },
];

async function main() {
  await client.connect();
  const db = client.db('getsmoke');
  
  const results = [];

  for (const { flavor, slug } of FLAVORS) {
    const productName = `${flavor} - Fume PRO 30000 Puffs`;
    const fullUrl = `https://pub-e2c8a53d84f146beb67cf9ee9a8f4961.r2.dev/wp-content/uploads/2026/08/fume-pro-${slug}.webp`;

    const product = await db.collection('Product').findOne({ name: productName, isArchived: false });
    if (!product) {
      console.error(`NOT FOUND: ${productName}`);
      results.push({ slug, status: 'product_not_found' });
      continue;
    }

    const existing = await db.collection('Image').findOne({ productId: product._id });
    if (existing) {
      await db.collection('Image').updateOne(
        { _id: existing._id },
        { $set: { url: fullUrl, updatedAt: new Date() } }
      );
      console.log(`Updated: ${productName}`);
    } else {
      await db.collection('Image').insertOne({
        url: fullUrl,
        position: 0,
        productId: product._id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`Created: ${productName}`);
    }

    // Verify
    const img = await db.collection('Image').findOne({ productId: product._id });
    const verified = img && img.url && img.url.startsWith('https://pub-e2c8a53d84f146beb67cf9ee9a8f4961.r2.dev/');
    console.log(`VERIFY [${slug}]: ${img ? img.url : 'NOT FOUND'} => ${verified ? 'OK' : 'FAIL'}`);
    results.push({ slug, status: verified ? 'ok' : 'verify_failed', url: img ? img.url : null });
  }

  await client.close();
  
  console.log('\n=== FINAL RESULTS ===');
  for (const r of results) {
    console.log(`${r.slug}: ${r.status}${r.url ? ' - ' + r.url : ''}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
