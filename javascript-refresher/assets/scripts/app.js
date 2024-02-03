import { apiKey } from "./utils.js";

import logger from "./logger.js"; // no curly braces for default exports
import loggerAlias from "./logger.js"; // default exports can be used under differen name
import { logError } from "./logger.js"; // named exports require curly braces

import * as calc from "./math.js"; // using alias

import {
  getFirstName as firstName,
  getSurname as lastName,
  catchphrase as say,
} from "./user.js"; // using alias

// apiKey
console.log(apiKey);

// logger
logger();
loggerAlias();
logError();

// math
let addition = calc.add(1, 2);
let multiplication = calc.multiply(1, 2);
console.log(addition);
console.log(multiplication);

// user
let userName = firstName() + " " + lastName();
console.log(userName + " says: " + say);
