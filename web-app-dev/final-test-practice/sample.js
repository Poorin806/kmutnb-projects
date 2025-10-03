const product = [
  { id: 1, name: "PA", price: "25", CatID: 1 },
  { id: 2, name: "PB", price: "50", CatID: 2 },
];
const Catagory = [
  { CatID: 1, name: "Electronic" },
  { CatID: 2, name: "Book" },
];
const cat = JSON.parse(Catagory);
const prod = JSON.parse(product);
const catMap = {};
cat.forEach((c) => {
  catMap[c.CatID] = c.name;
});
const pMap = p.map((pd) => ({ ...pd, CatName: catMap[pd.CatID] }));
