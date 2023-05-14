
// Disable the ESLint rule that disallows using callbacks in Promises
/* eslint-disable promise/no-callback-in-promise */

import { Request, Response, NextFunction } from 'express'

// Define a function called "catchAsync" that takes a function "getDataFromDB" as its argument
const catchAsync = (getDataFromDB: any) => (req: Request, res: Response, next: NextFunction) => {
  // Wrap the execution of "getDataFromDB" inside a Promise and catch any errors that may occur
  Promise.resolve(getDataFromDB(req, res, next)).catch((err) => next(err))
}

// Export the "catchAsync" function as the default export of this module
export default catchAsync

// Enable the ESLint rule that disallows using callbacks in Promises
/* eslint-enable promise/no-callback-in-promise */