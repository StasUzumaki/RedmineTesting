const defaultTimeout = 15000; // 15sec

class Page {

    async getElement(element) {
        return await $(element);
    }

    async waitUntilDisplayed(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }

    async waitUntilClickable(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isClickable();
        }, {timeout: timeout});
    }

    async click(element) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).click();
    }

    async setValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }

    async addValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).addValue(value);
    }

    async getElementText(element) {
        await this.waitUntilDisplayed(element);
        return (await this.getElement(element)).getText();
    }

    async isElementDisplayed(element) {
        return (await this.getElement(element)).isDisplayed();
    }

    async scrollElementIntoView(element) {
        await (await this.getElement(element)).scrollIntoView();
    }

    async clickDropdownItemByText(element, text) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).selectByVisibleText(text);
    }

    async clickDropdownItemByIndex(element, index) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).selectByIndex(index);
    }
}

module.exports = new Page();