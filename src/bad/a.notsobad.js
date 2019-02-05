export default things => {
  return things.map(thing => {
    return thing.metadata.map(meta => {
      return meta.props.map(property => dash(property.fix, property.tip, thing.spike, thing.plant, things.brush));
    });
  });
};

const dash = (fix, tip, spike, plant, brush) => fix * tip + spike - plant / brush;
