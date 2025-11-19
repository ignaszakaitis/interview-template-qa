import 'dotenv/config';

export const config = {
    BASE_API_URL: process.env.REQRES_BASE_URL,
    APP_URL: process.env.CALC_APP,
    API_KEY: process.env.AUTH_TOKEN || 'reqres-free-v1',
};

// Ensure trailing slash for proper relative path resolution in Playwright
if (!config.BASE_API_URL.endsWith('/')) {
    config.BASE_API_URL += '/';
}
