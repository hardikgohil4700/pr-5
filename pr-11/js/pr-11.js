let sentence = 'Paragraphs are the building blocks of papers.';

let word = 'java';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);