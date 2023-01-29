import {
    getMenuItemForLocale,
    isBrackety,
    isSpecialMenuValue,
} from '../block-mapping/block-mapping.js';

import Sanitizer from '../sanitizer.js';

export default class Menu {
    constructor(id, opcode, content) {
        this.id = id;
        // note: opcode is the opcode of the PARENT block.
        this.opcode = opcode;
        this.content = content;
        this.isBrackety = isBrackety(opcode);
        this.isSpecial = isSpecialMenuValue(opcode, content);
    }

    blockSyntax(locale) {
        return getMenuItemForLocale(locale, this.opcode, this.content);
    }

    toScratchblocks(locale) {
        const a = this.isSpecial ? this.blockSyntax(locale) : this.content;
        if (this.isBrackety) return `(${Sanitizer.sanitize(a)} v)`;
        return `[${Sanitizer.sanitize(a)} v]`;
    }
}
