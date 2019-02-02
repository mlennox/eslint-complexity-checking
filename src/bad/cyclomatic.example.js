export default (zap, zip, yoke) => {
  if (checker(zip)) {
    if (yoke.bowled) {
      return checker(zap);
    } else if (yoke.confused === 'maybe') {
      return zap.thing === 3 ? checker(yoke) : checker(zap);
    } else {
      return checker({ ...yoke, ...zip });
    }
  } else if (yoke.level * zip.step > zap.limit) {
    return checker(yoke);
  }
};

const checker = target => target.trusted;
