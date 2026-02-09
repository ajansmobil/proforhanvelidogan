/**
 * text-translations.json icerigini ilgili page/[id]/index.json dosyalarindaki
 * text.en, text.de, text.ru alanlarina yazar. Calistirma: node fill-lang-text.js (web/page dizininden)
 */
const fs = require('fs');
const path = require('path');

const base = __dirname;
const translationsPath = path.join(base, 'text-translations.json');
if (!fs.existsSync(translationsPath)) {
  console.log('text-translations.json bulunamadi.');
  process.exit(1);
}

const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));

Object.keys(translations).forEach(id => {
  const jsonPath = path.join(base, id, 'index.json');
  if (!fs.existsSync(jsonPath)) {
    console.log('Atla (dosya yok):', id);
    return;
  }
  const j = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  if (!j.text || typeof j.text !== 'object') {
    j.text = { tr: '', en: '', de: '', ru: '' };
  }
  const tr = translations[id];
  if (tr.en) j.text.en = tr.en;
  if (tr.de) j.text.de = tr.de;
  if (tr.ru) j.text.ru = tr.ru;
  fs.writeFileSync(jsonPath, JSON.stringify(j));
  console.log('OK', id);
});

console.log('Text cevirileri uygulandi.');
