import Sanitizer from '../sanitizer.js';
import {getMenuItemForLocale, isSpecialMenuValue} from '../block-mapping/block-mapping.js';

export default class Menu {
    constructor (id, opcode, content) {
        this.id = id;
        // note: opcode is the opcode of the PARENT block.
        this.opcode = opcode;
        this.content = content;
        this.isSpecial = isSpecialMenuValue(opcode, content);
    }

    blockSyntax (locale) {
        return getMenuItemForLocale(locale, this.opcode, this.content);
    }

    toScratchblocks (locale) {
        if (!this.isSpecial) return `[${Sanitizer.sanitize(this.content)} v]`;
        return `[${Sanitizer.sanitize(this.blockSyntax(locale))} v]`;
    }
}
