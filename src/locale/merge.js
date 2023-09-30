const fs = require('fs');

/*
This script merges the new fr_FR translation file with the old en_US translation file
It result in the following :

- All existing translations whoose id haven't changed are preserved
- All outdated translations whoose id is no longer present are removed
- All text that does not have a translation yet is left as-is in French
 */

// Read the translation files
const json_en_US = fs.readFileSync('./src/locale/messages.en.json').toString();
const json_fr_FR = fs.readFileSync('./src/locale/messages.json').toString();

// Parse as JSON
const object_en_US = JSON.parse(json_en_US);
const object_fr_FR = JSON.parse(json_fr_FR);

// Extract translation object
const translations_en_US = object_en_US.translations;
const translations_fr_FR = object_fr_FR.translations;

// Merge the two by replacing all existing ids in the french file by the english version
const mergedTranslations = {...translations_fr_FR, ...translations_en_US};

// Remove all entries that exist in the english file but not the french one
for (let key in translations_en_US){
  if (!translations_fr_FR[key]){
    delete mergedTranslations[key]
  }
}

// Create the new translation file and output it to stdout
object_en_US.translations = mergedTranslations
console.log(JSON.stringify(object_en_US))
