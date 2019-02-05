export default ({ yaw = 0, flex = { metadata: { properties: { first: 12, macerate: () => null } } }, steps } = {}) => {
  return flex.metadata.properties.map(prop => {
    return {
      ...prop,
      diffuse: scatter(steps, yaw, prop),
    };
  });
};

function scatter(steps, yaw, yokes) {
  return yokes.macerate(yaw / steps, yokes.first);
}
