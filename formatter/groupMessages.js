const col = require('./console.colours');

/**
 * Run through the messages for a file result and group
 * each error by ruleId
 * Also format
 */
module.exports = messages => {
  const grouped = [];
  messages.forEach(message => {
    const report = `${severityColour(message)}Line ${message.line} : ${message.message}`;
    if (message.ruleId in grouped) {
      grouped[message.ruleId].push(report);
    } else {
      grouped[message.ruleId] = [report];
    }
  });
  return grouped;
};

const severityColour = message => `${message.severity === 1 ? col.yellow : col.red}`;
