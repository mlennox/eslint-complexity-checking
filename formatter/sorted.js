const col = require('./console.colours');
const errorSorter = require('./errorSorter');
const groupMessages = require('./groupMessages');

module.exports = results => {
  const sorted = results.sort(errorSorter);

  const renderHeadline = result => `${col.boldBlack}${result.filePath}
${col.boldBlack}${'='.repeat(result.filePath.length)}
${col.boldRed}errors: ${col.red}${result.errorCount}
${col.boldYellow}warnings: ${col.yellow}${result.warningCount}\n\n`;

  const renderMessage = (errorLabel, messages) => `${col.boldBlack}${errorLabel}
${messages.join('\n')}
${col.reset}\n`;

  let report = '';
  sorted
    // remove any results tat reported no issues
    .filter(result => result.errorCount > 0 || result.warningCount > 0)
    .forEach(result => {
      report += renderHeadline(result);
      const groupedMessages = groupMessages(result.messages);
      Object.keys(groupedMessages).forEach(key => {
        report += renderMessage(key, groupedMessages[key]);
      });
    });

  return report;
};
