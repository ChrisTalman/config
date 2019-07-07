'use strict';

// External Modules
const Joi = require('joi');
const { default: Config } = require('../../index.js');

// Schema
const SCHEMA =
{
	a: Joi.string().required(),
	b: Joi.number().optional()
};

// Config
const config = new Config({schema: SCHEMA});
const data = config.data;

log();
function log()
{
	console.log(data);
	console.log(data.a);
	console.log(data.b);
	setTimeout(log, 2000);
};