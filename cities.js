const maineCities = [
  "Abbot", "Acton", "Alfred", "Alna", "Athens",
  "Auburn", "Augusta", "Baileyville", "Bangor", "Bar Harbor",
  "Bass Harbor", "Bath", "Belfast", "Belgrade", "Bernard",
  "Berwick", "Bethel", "Biddeford", "Blue Hill", "Boothbay",
  "Boothbay Harbor", "Bowdoin", "Bowdoinham", "Bradley", "Bremen",
  "Brewer", "Bridgewater", "Bridgton", "Bristol", "Brooksville",
  "Brownfield", "Brownville", "Brunswick", "Bryant Pond", "Bucksport",
  "Buxton", "Camden", "Canaan", "Canton", "Cape Elizabeth",
  "Cape Neddick", "Caribou", "Carmel", "Casco", "Castine",
  "Charleston", "Cherryfield", "Clinton", "Columbia Falls", "Corea",
  "Corinth", "Cornish", "Crouseville", "Cumberland Center", "Cumberland Foreside",
  "Damariscotta", "Deer Isle", "Dexter", "Dover Foxcroft", "Dresden",
  "Durham", "East Baldwin", "East Boothbay", "East Machias", "East Waterboro",
  "East Wilton", "East Winthrop", "Easton", "Eastport", "Eddington",
  "Edgecomb", "Eliot", "Ellsworth", "Exeter", "Fairfield",
  "Falmouth", "Farmingdale", "Farmington", "Fort Fairfield", "Fort Kent",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < maineCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(maineCities[i]);
}

module.exports = { batches };
