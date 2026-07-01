const maineCities = [
  "Franklin", "Freeport", "Friendship", "Gardiner", "Garland",
  "Gorham", "Gouldsboro", "Gray", "Greene", "Greenville Junction",
  "Guilford", "Hallowell", "Hampden", "Hancock", "Harpswell",
  "Harrison", "Hebron", "Holden", "Hollis Center", "Hope",
  "Houlton", "Howland", "Island Falls", "Islesboro", "Jay",
  "Jefferson", "Jonesport", "Kennebunk", "Kennebunkport", "Kingfield",
  "Kittery", "Kittery Point", "Lebanon", "Levant", "Lewiston",
  "Liberty", "Limerick", "Limestone", "Limington", "Lincoln",
  "Lincolnville", "Lisbon", "Lisbon Falls", "Litchfield", "Livermore",
  "Machias", "Madawaska", "Madison", "Manchester", "Mapleton",
  "Mechanic Falls", "Milford", "Millinocket", "Minot", "Monmouth",
  "Morrill", "Mount Desert", "Mount Vernon", "Naples", "New Gloucester",
  "New Harbor", "New Sharon", "New Sweden", "Newcastle", "Newport",
  "Newry", "Norridgewock", "North Anson", "North Berwick", "North Monmouth",
  "North Turner", "North Vassalboro", "North Waterboro", "North Yarmouth", "Norway",
  "Oakland", "Ocean Park", "Ogunquit", "Old Orchard Beach", "Old Town",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < maineCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(maineCities[i]);
}

module.exports = { batches };
