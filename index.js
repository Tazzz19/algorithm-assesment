function sentenceAnalysis() {
    // Variables
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // User input
    let sentence = "I love me.";

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment sentence length for every character
        sentenceLength++;

        // Check if the character is a letter
        if (/[a-zA-Z]/.test(sentence[i])) {
            // Increment word count for every letter
            wordCount++;

            // Check if the letter is a vowel
            if (/[aeiouAEIOU]/.test(sentence[i])) {
                // Increment vowel count for every vowel
                vowelCount++;
            }
        }
    }

    // Display results
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
}

// Call the function
sentenceAnalysis();
