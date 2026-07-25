function isValidJsBasicsIdentifier(str) {
    // 1. List of common JS reserved words that can't be used as identifiers
    const reservedWords = new Set([
        'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
        'default', 'delete', 'do', 'else', 'export', 'extends', 'finally',
        'for', 'function', 'if', 'import', 'in', 'instanceof', 'new',
        'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof',
        'var', 'void', 'while', 'with', 'yield', 'let'
    ]);

    // If it's a reserved word, it's automatically invalid
    if (reservedWords.has(str)) {
        return false;
    }

    // 2. Regex to check if it starts with a letter, $, or _, 
    // and is followed only by letters, numbers, $, or _
    const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    return identifierRegex.test(str);
}