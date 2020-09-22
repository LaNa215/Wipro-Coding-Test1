'use strict';

const fs = require('fs');

exports.input = JSON.parse(fs.readFileSync('./test/test_data/input.json','utf-8'));
exports.fieldMismatch = JSON.parse(fs.readFileSync('./test/test_data/fieldMismatch.json','utf-8'));