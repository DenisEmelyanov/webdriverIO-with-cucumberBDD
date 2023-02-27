import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

class Translate extends Page {
    
    public get inputField() {
        // class: er8xn, aria-label: Source text
        return $('.er8xn');
    }

    public get translationField() {
        return $('.ryNqvb');
    }

    public get translateToDropDown() {
        return $('.VfPpkd-Bz112c-RLmnJb');
    }

    public get languagesFilter() {
        return $('.yFQBKb')
    }

    public selectLanguage(language) {
        // return $('.Llmcnf').$('*=' + language).click();
        return $('div.Llmcnf*=' + language).click();
    }
}
export default new Translate();

