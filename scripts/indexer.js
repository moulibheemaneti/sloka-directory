// Importing all the required modules from Node.js standard library
import { readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

/**
 * Toggle between flat approach or group by lord approach.
 * 
 * true => Flat list of slokas
 * 
 * false => grouped by lord
 */
const IS_FLAT_APPROACH = false;

/** Meta URL, gives you this files URL */
const __filename = fileURLToPath(import.meta.url);

/** This will get to the `scripts` directory */
const __dirname = path.dirname(__filename);

/** This will get to the `slokas` directory that is base for all the data. */
const basePath = path.join(__dirname, '..', 'slokas');

/** `sloka-inde.js` file should be either generated or update depending on its existence. */
const outputPath = path.join(__dirname, '..', 'sloka-index.json');

// --- APROACH 1 ---

/*
OUTPUT STRUCTURE:
==================
[
  {
    "lord": "ramachandra",
    "name": "mangalam",
    "languages": [
      "en",
      "te"
    ]
  },
  {
    "lord": "ramachandra",
    "name": "ramethi",
    "languages": [
      "en",
      "te"
    ]
  },
  {
    "lord": "shiva",
    "name": "lingashtakam",
    "languages": [
      "en",
      "te"
    ]
  }
]
*/

/** Utility function to extract languages available for a given sloka */
const extractLanguages = (files, slokaName) => {
  return files
    .filter(f => f.endsWith('.txt') && f.startsWith(slokaName))
    .map(f => f.split('-').pop().replace('.txt', ''))
    .filter(Boolean); // Remove empty strings if any.
}

const generateFlatList = () => {
  const result = [];

  readdirSync(basePath).forEach(lord => {
    const lordPath = path.join(basePath, lord);

    const slokas = readdirSync(lordPath);

    slokas.forEach(slokaName => {
      const slokaPath = path.join(lordPath, slokaName);

      const files = readdirSync(slokaPath);

      result.push({
        lord,
        name: slokaName,
        languages: extractLanguages(files, slokaName),
      });
    });
  });

  return result;
}


// --- END of APROACH 1 ---


// --- APROACH 2 ---

/* 
OUTPUT STRUCTURE:
==================
[
  {
    "lord": "ramachandra",
    "slokas": [
      {
        "name": "mangalam",
        "languages": [
          "en",
          "te"
        ]
      },
      {
        "name": "ramethi",
        "languages": [
          "en",
          "te"
        ]
      }
    ]
  },
  {
    "lord": "shiva",
    "slokas": [
      {
        "name": "lingashtakam",
        "languages": [
          "en",
          "te"
        ]
      }
    ]
  }
]
 */

const generateGroupedByLord = () => {
  const result = [];

  readdirSync(basePath).forEach(lord => {
    const lordPath = path.join(basePath, lord);

    const slokaDirs = readdirSync(lordPath);

    const slokas = slokaDirs.map(slokaName => {
      const slokaPath = path.join(lordPath, slokaName);

      const files = readdirSync(slokaPath);

      const languages = files
        .filter(file => file.startsWith(slokaName) && file.endsWith('.txt'))
        .map(file => file.split('-').pop().replace('.txt', ''));

      return {
        name: slokaName,
        languages: [...new Set(languages)]
      };
    });

    result.push({ lord, slokas });
  });

  return result;
}

// --- END of APROACH 2 ---

/** This is the output variable. */
const data = IS_FLAT_APPROACH ? generateFlatList() : generateGroupedByLord();

writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log('Successfully generated sloka-index.json')
