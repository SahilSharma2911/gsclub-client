import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

const products = await db.collection('products').find({
  $or: [{ name: /pulse/i }, { slug: /pulse/i }]
}).project({ name: 1, slug: 1, status: 1, puffCount: 1 }).toArray();
console.log('Pulse products:');
products.forEach(p => console.log(`  ${p.name} | slug: ${p.slug} | ${p.puffCount} puffs`));

const brands = await db.collection('brands').find({ name: /geek/i }).project({ name: 1, slug: 1 }).toArray();
console.log('\nGeek brands:', brands);

await client.close();
