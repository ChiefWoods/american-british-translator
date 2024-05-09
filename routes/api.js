'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;

      if (text === undefined || !locale) {
        return res.json({ error: 'Required field(s) missing' });
      } else if (text === '') {
        return res.json({ error: 'No text to translate' });
      } else if (!['american-to-british', 'british-to-american'].includes(locale)) {
        return res.json({ error: 'Invalid value for locale field' });
      }

      const translation = translator.translate(text, locale);

      return res.json({
        text,
        translation: translation === text
          ? 'Everything looks good to me!'
          : translation
      });
    });
};
