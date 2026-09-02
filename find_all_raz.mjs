import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

const razImages = await db.collection('Image').find({ 
  url: /Raz-DC25000|Raz-TN|RAZ-DC|RAZ-TN/i
}).project({ url: 1 }).toArray();
console.log('RAZ product images:');
razImages.forEach(i => console.log(i.url));

await client.close();
