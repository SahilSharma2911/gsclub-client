import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// List all collections
const cols = await db.listCollections().toArray();
console.log('Collections:', cols.map(c => c.name));

// Search geek in products
const geek = await db.collection('products').find({ name: /geek/i })
  .project({ name: 1, slug: 1, puffCount: 1, status: 1 }).limit(20).toArray();
console.log('\nGeek products:', geek.map(p => `${p.name} | ${p.slug}`));

// Models collection?
const models = await db.collection('models').find({ name: /geek/i })
  .project({ name: 1, slug: 1 }).limit(10).toArray().catch(() => []);
console.log('\nGeek models:', models.map(m => `${m.name} | ${m.slug}`));

await client.close();
