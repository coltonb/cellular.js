function CoordinatesOutOfBoundError() {
  throw new Error('Coordinates out of bounds');
}

CoordinatesOutOfBoundError.prototype = Error.prototype;

// eslint-disable-next-line import/prefer-default-export
export { CoordinatesOutOfBoundError };
