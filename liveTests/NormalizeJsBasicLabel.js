function normalizeJsBasicsLabel(label) {

  if (label == ' ') return 'js-basic';
  else {
      const cleaned = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  console.log('js-basic-' + cleaned);
  return 'js-basic-' + cleaned;
  }

}

normalizeJsBasicsLabel("---Search@@Box---")