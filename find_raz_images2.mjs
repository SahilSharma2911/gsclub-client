import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Check Image collection for RAZ
const images = await db.collection('Image').find({ 
  $or: [
    { name: /raz/i },
    { url: /raz/i },
    { productId: { $exists: true } }
  ]
}).project({ url: 1, name: 1, productId: 1 }).limit(10).toArray();

console.log('Images:', images.slice(0, 5).map(i => i.url || i.name));

// Also check product with full populate
const p = await db.collection('Product').findOne({ name: /RAZ DC25000/i });
console.log('\nProduct images field:', JSON.stringify(p?.images?.slice?.(0,3)));

await client.close();
