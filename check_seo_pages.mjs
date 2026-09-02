import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Check seo_pages
const seoPages = await db.collection('seo_pages').find({ slug: /geek|pulse/i })
  .project({ title: 1, slug: 1, type: 1 }).toArray();
console.log('SEO pages (geek/pulse):');
seoPages.forEach(p => console.log(`  ${p.type} | ${p.title} | /${p.slug}`));

// Check Category collection 
const cats = await db.collection('Category').find({ name: /geek|pulse/i })
  .project({ name: 1, slug: 1 }).toArray();
console.log('\nCategories:', cats);

// Check Puffs collection (model pages)
const puffs = await db.collection('Puffs').find({}).project({ name: 1, slug: 1, brand: 1 }).limit(20).toArray();
console.log('\nPuffs (model pages?):', puffs.map(p => `${p.name} | ${p.slug}`));

await client.close();
