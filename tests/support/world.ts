import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import {
    Browser,
    BrowserContext,
    Page,
    APIRequestContext,
    APIResponse,
    chromium,
    request,
} from '@playwright/test';
import { config } from '../config';

export class CustomWorld extends World {
    browser?: Browser;
    context?: BrowserContext;
    page?: Page;
    api?: APIRequestContext;
    response?: APIResponse;
    createdUserId?: string;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async initBrowser() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async initAPI() {
        this.api = await request.newContext({
            baseURL: config.BASE_API_URL,
            extraHTTPHeaders: {
                'x-api-key': config.API_KEY,
            },
        });
    }

    async closeBrowser() {
        await this.page?.close();
        await this.context?.close();
        await this.browser?.close();
    }
}

setWorldConstructor(CustomWorld);
