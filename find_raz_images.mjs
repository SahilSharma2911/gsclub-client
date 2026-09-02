import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Find RAZ DC25000 products with images
const products = await db.collection('Product').find({ 
  name: /RAZ DC25000/i,
  isArchived: false
}).project({ name: 1, slug: 1, images: 1 }).limit(5).toArray();

for (const p of products) {
  console.log(`${p.name}`);
  if (p.images && p.images.length > 0) {
    for (const img of p.images.slice(0, 2)) {
      console.log(`  → ${img.url}`);
    }
  }
}

await client.close();
