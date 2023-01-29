import { default as allBlocks, allMenus } from './all-blocks.js';

import Sanitizer from '../sanitizer.js';
import localeOptions from './options.js';
import { specialMessageMap } from './special-messages.js';
import translations from './translations.js';

const _translationKeyToOpcode = {};
Object.keys(allBlocks).forEach(opcode => {
    const entry = allBlocks[opcode];
    if (entry.noTranslation) return;
    const translationKey = entry.translationKey || opcode.toUpperCase();
    if (Object.prototype.hasOwnProperty.call(_translationKeyToOpcode, translationKey)) return;
    _translationKeyToOpcode[translationKey] = opcode;
});

const getOpcodeFromTranslationKey = translationKey => _translationKeyToOpcode[translationKey];

const getTranslationKeyFromValue = (locale, value) => {
    const localeTranslation = translations[locale];
    let candidates = [];
    if (localeTranslation) {
        candidates = Object.keys(localeTranslation).filter(key => localeTranslation[key] === value);
    } else {
        candidates = Object.values(allBlocks).filter(item => item.defaultMessage === value);
    }
    return candidates.length ? candidates[0] : null;
};

const getMessageForLocale = (locale, opcode) => {
    const translationKey = allBlocks[opcode].translationKey || opcode.toUpperCase();
    if (translations[locale] && translations[locale][translationKey]) {
        return Sanitizer.labelSanitize(translations[locale][translationKey]);
    }
    return Sanitizer.labelSanitize(allBlocks[opcode].defaultMessage);
};

const getOptsForLocale = (locale, opcode) => {
    const translationKey = allBlocks[opcode].translationKey || opcode.toUpperCase();
    if (translations[locale] && translations[locale][translationKey]) {
        if (localeOptions[locale] && localeOptions[locale][translationKey]) {
            return {
                category: localeOptions[locale][translationKey],
            };
        }
        return {};
    }
    return allBlocks[opcode].defaultOptions || {};
};

const getSpecialMessage = (locale, key) => {
    if (Object.prototype.hasOwnProperty.call(specialMessageMap, key))
        return getMessageForLocale(locale, specialMessageMap[key]);
};

const isSpecialMenuValue = (opcode, value) =>
    Object.prototype.hasOwnProperty.call(allMenus[opcode] || {}, value);

// const isBrackety = (opcode, value) => !!allMenus[opcode]?.[value]?.isBrackety;

const isBrackety = (id, opcode, value) => {
    if (!id) return true;
    const a = allMenus[opcode];
    console.log('a: ', a);
    const b = a?.[value];
    console.log('b: ', b);
    return !!b?.isBrackety;
};

const getMenuItemForLocale = (locale, opcode, value) => {
    const translationKey = allMenus[opcode][value].translationKey;
    if (translations[locale] && translations[locale][translationKey]) {
        return Sanitizer.sanitize(translations[locale][translationKey]);
    }
    return Sanitizer.sanitize(allMenus[opcode][value].defaultMessage);
};

export {
    getMessageForLocale,
    getOptsForLocale,
    getSpecialMessage,
    isSpecialMenuValue,
    getMenuItemForLocale,
    getOpcodeFromTranslationKey,
    getTranslationKeyFromValue,
    isBrackety,
};
