/**
 * Gets an environment variable from process.env
 *
 * @param key name of environment variable
 */
const get = (key: string): string | undefined => process.env[key];

/**
 * Gets an environment variable from process.env if not found
 * or there is no default it returns an error
 *
 * @param key name of environment variable
 * @param defaultValue value to use if the variable is not found
 */
export const getAsString = (key: string, defaultValue?: string): string => {
  const value = get(key) || defaultValue;

  if (value === undefined) {
    throw Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

const stringToNumber = (string: string = ""): number => parseInt(string, 10);

/**
 * Gets the environment variable from process.env and checks if the
 * string can be converted to a Number if not the default value is
 * used if set.
 *
 * @param key name of environment variable
 * @param defaultValue value to use if the variable is not found
 */
export const getAsNumber = (key: string, defaultValue?: number): number => {
  const value = stringToNumber(get(key)) || defaultValue;

  if (Number.isNaN(value) || value === undefined) {
    throw Error(`Missing a numeric environment variable for ${key}`);
  }

  return value;
};

/**
 * Gets an environment variable from process.env checks if the string
 * returned is TRUE or FALSE (case insensitive) and converts it to
 * a boolean value
 *
 * @param key name of environment variable
 * @param defaultValue value to use if the variable is not found
 */
export const getAsBoolean = (key: string, defaultValue?: boolean): boolean => {
  const value = get(key)?.toLowerCase();
  let result = defaultValue;

  if (value === "true") {
    result = true;
  }
  if (value === "false") {
    result = false;
  }

  if (result !== true && result !== false) {
    throw Error(`Missing a Boolean ("TRUE","FALSE") environment variable for ${key}`);
  }

  return result;
};
