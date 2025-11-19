module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        requireModule: ['ts-node/register', 'dotenv/config'],
        require: ['tests/steps/*.ts', 'tests/support/*.ts'],
        format: ['progress', 'html:cucumber-report.html'],
    },
};
