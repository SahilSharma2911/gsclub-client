import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Check Brand collection
const brands = await db.collection('Brand').find({ name: /geek/i }).project({ name: 1, slug: 1 }).toArray();
console.log('Geek brands:', brands.map(b => `${b.name} | ${b.slug}`));

// Check all brands
const allBrands = await db.collection('Brand').find({}).project({ name: 1, slug: 1 }).toArray();
console.log('\nAll brands:', allBrands.map(b => `${b.name} | ${b.slug}`));

// Check Product for pulse / geek
const pulseProd = await db.collection('Product').find({ name: /pulse|geek/i })
  .project({ name: 1, slug: 1, puffCount: 1 }).limit(20).toArray();
console.log('\nPulse/Geek products:', pulseProd.map(p => `${p.name} | ${p.slug}`));

await client.close();
