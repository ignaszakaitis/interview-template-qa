import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given(
    'user with name {string} and job {string} is created',
    async function (this: CustomWorld, name: string, job: string) {}
);

When('the user is updated with job {string}', async function (this: CustomWorld, job: string) {});

When('the user is deleted', async function (this: CustomWorld) {});

Then(
    'the response status should be {int}',
    async function (this: CustomWorld, expectedStatus: number) {}
);

Then('the response should contain an id', async function (this: CustomWorld) {});

Then('the response should contain createdAt', async function (this: CustomWorld) {});

Then('the response should contain updatedAt', async function (this: CustomWorld) {});
