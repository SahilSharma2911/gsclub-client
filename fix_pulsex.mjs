import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Find the model/listing page for Pulse X to understand its structure
const seoPage = await db.collection('seo_pages').findOne({ slug: /pulse-x/i });
console.log('Pulse X SEO page:', JSON.stringify(seoPage, null, 2));

// Find all products that have "Pulse X2" in the name
const pulseX2 = await db.collection('Product').find({ name: /pulse x2/i })
  .project({ name: 1, slug: 1, _id: 1 }).toArray();
console.log('\nPulse X2 products:', pulseX2.map(p => `${p._id} | ${p.name}`));

// Find all products labeled Pulse X (not X2)
const pulseX = await db.collection('Product').find({ name: /pulse x/i, $nor: [{ name: /pulse x2/i }] })
  .project({ name: 1, slug: 1, _id: 1 }).toArray();
console.log('\nPulse X products (not X2):', pulseX.map(p => `${p.name}`));

await client.close();
