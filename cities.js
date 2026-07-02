const maineCities = [
  "Orient", "Orono", "Orrington", "Orrs Island", "Owls Head",
  "Oxford", "Palmyra", "Paris", "Patten", "Peaks Island",
  "Pemaquid", "Penobscot", "Peru", "Phippsburg", "Pittsfield",
  "Poland", "Portland", "Pownal", "Presque Isle", "Prospect Harbor",
  "Randolph", "Rangeley", "Raymond", "Readfield", "Richmond",
  "Rockland", "Rockport", "Rumford", "Sabattus", "Saco",
  "Saint David", "Saint Francis", "Salsbury Cove", "Sanford", "Scarborough",
  "Shapleigh", "Sinclair", "Skowhegan", "Sorrento", "South Berwick",
  "South China", "South Freeport", "South Portland", "South Thomaston", "Southport",
  "Southwest Harbor", "Springvale", "Standish", "Steep Falls", "Stetson",
  "Stillwater", "Stockton Springs", "Stratton", "Strong", "Sullivan",
  "Surry", "Tenants Harbor", "Topsham", "Turner", "Union",
  "Unity", "Vassalboro", "Waldoboro", "Walpole", "Warren",
  "Washington", "Waterboro", "Waterville", "Wayne", "Wells",
  "West Baldwin", "West Enfield", "West Kennebunk", "West Newfield", "West Poland",
  "West Rockport", "Westbrook", "Whitefield", "Wilton", "Windham",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < maineCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(maineCities[i]);
}

module.exports = { batches };
