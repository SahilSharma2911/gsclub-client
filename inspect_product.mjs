import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://breakforlife11_db_user:QquUd2ELnz3b7Rer@cluster0.if2afgb.mongodb.net/getsmoke';
const client = new MongoClient(uri);
await client.connect();
const db = client.db('getsmoke');

// Get full schema of a Pulse X product and a Pulse X2 product
const pxProduct = await db.collection('Product').findOne({ name: /pulse x/i, $nor: [{ name: /pulse x2/i }] });
console.log('Pulse X product keys:', Object.keys(pxProduct));
console.log('Pulse X sample:', JSON.stringify({
  name: pxProduct.name, slug: pxProduct.slug,
  category: pxProduct.category, model: pxProduct.model,
  modelSlug: pxProduct.modelSlug, modelName: pxProduct.modelName,
  tags: pxProduct.tags, brand: pxProduct.brand,
  puffCount: pxProduct.puffCount, price: pxProduct.price,
  status: pxProduct.status, isActive: pxProduct.isActive
}, null, 2));

const px2Product = await db.collection('Product').findOne({ name: /pulse x2/i });
console.log('\nPulse X2 product keys:', Object.keys(px2Product));
console.log('Pulse X2 sample:', JSON.stringify({
  name: px2Product.name, slug: px2Product.slug,
  category: px2Product.category, model: px2Product.model,
  modelSlug: px2Product.modelSlug, modelName: px2Product.modelName,
  tags: px2Product.tags, brand: px2Product.brand,
  puffCount: px2Product.puffCount, price: px2Product.price,
  status: px2Product.status, isActive: px2Product.isActive
}, null, 2));

await client.close();
