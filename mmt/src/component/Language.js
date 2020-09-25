import React from 'react';
import LocalizedStrings from 'react-native-localization';

const string = new LocalizedStrings({
    en: {
        first: "How are You ?",
        second: "I am fine ",
    },
    hi: {
        first: "क्या हाल है ?",
        second: "मैं ठीक हूँ ?",
    },
});

export default string;