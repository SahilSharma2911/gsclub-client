import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Search Image collection for RAZ
const razImages = await db.collection('Image').find({ 
  url: /raz/i
}).project({ url: 1 }).limit(5).toArray();
console.log('RAZ images:', razImages.map(i => i.url));

// Also search by partial text
const razImages2 = await db.collection('Image').find({ 
  url: /RAZ|raz-dc|raz-tn/i
}).project({ url: 1 }).limit(5).toArray();
console.log('RAZ images2:', razImages2.map(i => i.url));

// Check total images in collection
const total = await db.collection('Image').countDocuments();
console.log('Total images in DB:', total);

// Get a sample to understand URL pattern
const sample = await db.collection('Image').find({}).project({ url: 1 }).limit(3).toArray();
console.log('Sample URLs:', sample.map(i => i.url));

await client.close();
