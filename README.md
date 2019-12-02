# Joi-with-Jest

[![npm (scoped)](https://img.shields.io/npm/v/npm?color=blue)](https://www.npmjs.com/package/joi-with-jest)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/joi-with-jest?color=green)](https://www.npmjs.com/package/joi-with-jest)

This is a matchers that can be used with Jest testing framework to test any Json/Javascript schema with Joi

## Install

```
$ npm install joi-with-jest
```

## Usage

```js
const matchers = require("joi-with-jest");
expect.extend(matchers);
```

and to validate your JSON or Javascript schema you can do

```js

//Joi schema definition

let customer = Joi.object().keys({
    ascUser: Joi.object().keys({
        userName: Joi.string().email().required(),
        password: Joi.string().required(),
        firstName: Joi.string().max(40).required(),
        lastName: Joi.string().max(40).required(),
        cspKey: Joi.string(),
        cspUID: Joi.string(),
        status: Joi.string().valid("A", "B", "IA", "NF", "S").required(),
        orgID: Joi.string(),
        roles: Joi.array().items(
            Joi.object().keys({
                roleID: Joi.string().required(),
                status: Joi.string().valid("A", "B", "IA", "NF", "S").required()
            })
        ),
        audit: Joi.object().keys({
            createdOn: Joi.date().iso(),
            createdBy: Joi.string(),
            updatedBy: Joi.string(),
            updatedOn: Joi.date().iso()
        })

    }).required()
});

let options = { abortEarly: false, stripUnknown: false }
expect(object).toMatchSchema(customer, options);

```

And if any test fails, it will throw errors like

```js
[{"message":"\"firstName\" is required","path":["ascUser","firstName"],"validationFailed":"required"}]
```
