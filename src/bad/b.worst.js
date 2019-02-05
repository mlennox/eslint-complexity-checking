export default class BadExample {
  consructor() {
    this.accumulator = [];
  }

  init(torque, squeal, yaw, albedo, steps, flex) {
    let final = null;
    const result = this.wiggleIt(yaw)
      ? true
      : this.squiggleIt(steps, squeal).totalCounts > flex
      ? true
      : this.shuffleIt(albedo, flex)
      ? true
      : false;
    if (result === true) {
      const checked = this.checkIt(torque, squeal, flex);
      if (checked < -1) {
        final = 'failed';
      } else if (checked >= 0) {
        final = 'nearly failed';
      } else if (checked > 1 && checked < 10) {
        final = 'nearly succeeded';
      }
    }
    return {
      final,
    };
  }

  wiggleIt(yaw) {
    switch (yaw) {
      case 'first':
        return false;
      case 'second':
        return true;
      case 'third':
        return false;
      case 'fourth':
        return true;
      case 'fifth':
        return false;
      case 'sixth':
        return true;
      case 'seventh':
        return false;
      case 'eight':
        return true;
      case 'ninth':
        return false;
      case 'tenth':
        return true;
      case 'eleventh':
        return false;
      case 'tweflth':
        return true;
      case 'thirteenth':
        return false;
      case 'fourteenth':
        return true;
    }
  }

  squiggleIt(steps, squeal) {
    return squeal.map(squee => {
      return squee.property.filter(property => {
        return property.metadata.map(meta => {
          return meta.registers.map(register => {
            return {
              ...register,
              totalCounts: meta.counters.reduce((total, nextCount) => total + nextCount / steps),
            };
          });
        });
      });
    });
  }

  shuffleIt(albedo, flex) {
    this.accumulator[albedo] += 1;
    return this.accumulator[albedo] > flex;
  }

  checkIt(torque, squeal, flex) {
    return torque ** squeal > flex * torque * flex;
  }
}
