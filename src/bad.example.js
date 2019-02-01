export default (torque, squeal, yaw, albedo, steps, flex) => {
  let final = null;
  const result = wiggleIt() ? true : squiggleIt() ? true : shuffleIt() ? true : false;
  if (result === true) {
    const checked = checkIt(torque, squeal, flex);
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
};

const wiggleIt = () => {};

const squiggleIt = () => {};

const shuffleIt = () => {};

const checkIt = () => {};
