export class TinyURL {
    constructor() {
        this.isCreate = true;
        this.originalUrl = "";
    }

    originalUrl?: string;
    shortBaseUrl: string;
    urlCode: string;
    shortUrl: string;
    isCreate: boolean;
}