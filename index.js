import Joi from 'joi'
const toMatchSchema = (data, schema,options) => {
    const { error } = Joi.validate(data, schema, options);
    const valid = error == null;

    if (valid) {
        return {
            message: () => 'Success',
            pass: true,
        };
    } else {
        return {
            message: () => {
                const { details } = error;
                const message = details.map((i) => ({message : i.message, path : i.path, validationFailed : i.type.split(".").pop()}));
                return JSON.stringify(message)
                
            },
            pass: false,
        };
    }
};

exports.matchers = {
    toMatchSchema,
};