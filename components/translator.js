const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {
  wrapHighlight(word) {
    return `<span class="highlight">${word}</span>`;
  }

  replacer(translation, regex, alt) {
    return translation.replace(regex, match => {
      return this.wrapHighlight(/^[A-Z]/.test(match)
        ? alt[0].toUpperCase() + alt.slice(1)
        : alt);
    });
  }

  translate(text, locale) {
    let translation = text;

    if (locale === 'american-to-british') {
      translation = translation.replace(/([01]?[0-9]|2[0-3]):[0-5][0-9]/g, match => {
        return this.wrapHighlight(match.replace(':', '.'));
      });

      for (const [american, british] of Object.entries(americanToBritishTitles)) {
        translation = this.replacer(translation, new RegExp(`\\b${british}\\.`, 'gi'), british);
      }

      for (const [american, british] of Object.entries(americanToBritishSpelling)) {
        translation = this.replacer(translation, new RegExp(`\\b${american}\\b`, 'gi'), british);
      }

      for (const [american, british] of Object.entries(americanOnly)) {
        translation = this.replacer(translation, new RegExp(`\\b${american}\\b`, 'gi'), british);
      }
    } else if (locale === 'british-to-american') {
      translation = translation.replace(/([01]?[0-9]|2[0-3]).[0-5][0-9]/g, match => {
        return this.wrapHighlight(match.replace('.', ':'));
      });

      for (const [american, british] of Object.entries(americanToBritishTitles)) {
        translation = this.replacer(translation, new RegExp(`\\b${british}\\b`, 'gi'), american);
      }

      for (const [american, british] of Object.entries(americanToBritishSpelling)) {
        translation = this.replacer(translation, new RegExp(`\\b${british}\\b`, 'gi'), american);
      }

      for (const [british, american] of Object.entries(britishOnly)) {
        translation = this.replacer(translation, new RegExp(`(?<!\-)\\b${british}\\b`, 'gi'), american);
      }
    }

    return translation;
  }
}

module.exports = Translator;