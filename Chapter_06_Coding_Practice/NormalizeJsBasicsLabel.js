function normalizeJsBasicsLabel(label) {
   // 1. Convert to lowercase and replace all non-alphanumeric chunks with a single hyphen
   const cleaned = label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replaces spaces, punctuation, etc. with "-"
        .replace(/^-+|-+$/g, '');    // Trims any hyphens from the very start or end

    // 2. If we have a valid label left, join it with "js-basic". Otherwise, just return "js-basic".
    console.log(cleaned ? `js-basic-${cleaned}` : 'js-basic');
}

normalizeJsBasicsLabel("User Profile: Edit!");