const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  const translator = new Translator();

  test('Translate "Mangoes are my favorite fruit." to British English', function () {
    const text = 'Mangoes are my favorite fruit.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });

  test('Translate "I ate yogurt for breakfast." to British English', function () {
    const text = 'I ate yogurt for breakfast.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
  });

  test('Translate "We had a party at my friend\'s condo." to British English', function () {
    const text = 'We had a party at my friend\'s condo.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', function () {
    const text = 'Can you toss this in the trashcan for me?';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'Can you toss this in the <span class="highlight">bin</span> for me?');
  });

  test('Translate "The parking lot was full." to British English', function () {
    const text = 'The parking lot was full.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'The <span class="highlight">car park</span> was full.');
  });

  test('Translate "Like a high tech Rube Goldberg machine." to British English', function () {
    const text = 'Like a high tech Rube Goldberg machine.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
  });

  test('Translate "To play hooky means to skip class or work." to British English', function () {
    const text = 'To play hooky means to skip class or work.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'To <span class="highlight">bunk off</span> means to skip class or work.');
  });

  test('Translate "No Mr. Bond, I expect you to die." to British English', function () {
    const text = 'No Mr. Bond, I expect you to die.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
  });

  test('Translate "Dr. Grosh will see you now." to British English', function () {
    const text = 'Dr. Grosh will see you now.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, '<span class="highlight">Dr</span> Grosh will see you now.');
  });

  test('Translate "Lunch is at 12:15 today." to British English', function () {
    const text = 'Lunch is at 12:15 today.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'Lunch is at <span class="highlight">12.15</span> today.');
  });

  test('Translate "We watched the footie match for a while." to British English', function () {
    const text = 'We watched the footie match for a while.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
  });

  test('Translate "Paracetamol takes up to an hour to work." to British English', function () {
    const text = 'Paracetamol takes up to an hour to work.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
  });

  test('Translate "First, caramelise the onions." to British English', function () {
    const text = 'First, caramelise the onions.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'First, <span class="highlight">caramelize</span> the onions.');
  });

  test('Translate "I spent the bank holiday at the funfair." to British English', function () {
    const text = 'I spent the bank holiday at the funfair.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
  });

  test('Translate "I had a bicky then went to the chippy." to British English', function () {
    const text = 'I had a bicky then went to the chippy.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
  });

  test('Translate "I\'ve just got bits and bobs in my bum bag." to British English', function () {
    const text = 'I\'ve just got bits and bobs in my bum bag.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
  });

  test('Translate "The car boot sale at Boxted Airfield was called off." to British English', function () {
    const text = 'The car boot sale at Boxted Airfield was called off.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
  });

  test('Translate "Have you met Mrs Kalyani?" to British English', function () {
    const text = 'Have you met Mrs Kalyani?';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
  });

  test('Translate "Prof Joyner of King\'s College, London." to British English', function () {
    const text = 'Prof Joyner of King\'s College, London.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
  });

  test('Translate "Tea time is usually around 4 or 4.30." to British English', function () {
    const text = 'Tea time is usually around 4 or 4.30.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
  });

  test('Highlight translation in "Mangoes are my favorite fruit."', function () {
    const text = 'Mangoes are my favorite fruit.';
    const translation = translator.translate(text, 'american-to-british');
    assert.match(translation, /<span class="highlight">.*<\/span>/);
  });

  test('Highlight translation in "I ate yogurt for breakfast."', function () {
    const text = 'I ate yogurt for breakfast.';
    const translation = translator.translate(text, 'american-to-british');
    assert.match(translation, /<span class="highlight">.*<\/span>/);
  });

  test('Highlight translation in "We watched the footie match for a while."', function () {
    const text = 'We watched the footie match for a while.';
    const translation = translator.translate(text, 'british-to-american');
    assert.match(translation, /<span class="highlight">.*<\/span>/);
  });

  test('Highlight translation in "Paracetamol takes up to an hour to work."', function () {
    const text = 'Paracetamol takes up to an hour to work.';
    const translation = translator.translate(text, 'british-to-american');
    assert.match(translation, /<span class="highlight">.*<\/span>/);
  });
});
