const fs = require('fs');

// Adatok létrehozása
const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

// JSON objektum átalakítása szöveges formába
const jsonData = JSON.stringify(data, null, 2); 
// A null és a 2 paraméterek formázási célokra szolgálnak (2: behúzás két szóközzel)

// JSON adatok írása fájlba
fs.writeFile('data.json', jsonData, (err) => {
  if (err) {
    console.error('Hiba a fájl írása közben:', err);
    return;
  }
  console.log('A fájl sikeresen íródott!');
});
