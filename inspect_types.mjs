import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Check productType for Pulse X and X2
const px = await db.collection('Product').findOne({ name: /pulse x/i, $nor: [{ name: /pulse x2/i }] });
const px2 = await db.collection('Product').findOne({ name: /pulse x2/i });
console.log('Pulse X productType:', px.productType);
console.log('Pulse X2 productType:', px2.productType);

// Get all distinct productTypes for Geek Bar products
const pxProducts = await db.collection('Product').find({ name: /pulse x/i, $nor: [{ name: /pulse x2/i }] })
  .project({ name: 1, productType: 1, currentPrice: 1 }).limit(5).toArray();
const px2Products = await db.collection('Product').find({ name: /pulse x2/i })
  .project({ name: 1, productType: 1, currentPrice: 1 }).limit(5).toArray();

console.log('\nPulse X productTypes:');
pxProducts.forEach(p => console.log(`  ${p.productType} | $${p.currentPrice} | ${p.name}`));
console.log('\nPulse X2 productTypes:');
px2Products.forEach(p => console.log(`  ${p.productType} | $${p.currentPrice} | ${p.name}`));

// How does the model page work? Check Category collection for Pulse X
const cats = await db.collection('Category').find({}).project({ name: 1, slug: 1, productType: 1 }).limit(20).toArray();
console.log('\nCategories:', cats.map(c => `${c.name} | ${c.slug} | ${c.productType}`));

await client.close();
