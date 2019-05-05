const col = require('./console.colours');
const errorSorter = require('./errorSorter');
const groupMessages = require('./groupMessages');
const checkRules = require('./checkRules');

module.exports = (results, { rulesMeta }) => {
  if (!checkRules(rulesMeta)) {
    return "not matched"
  }
  const sorted = results.sort(errorSorter);

  const renderHeadline = result => {
    const trimmedFilePath = result.filePath.replace(process.env.PWD || '', '');
    return `${col.boldBlack}${trimmedFilePath}
${col.boldBlack}${'='.repeat(trimmedFilePath.length)}
${col.boldRed}errors: ${col.red}${result.errorCount}
${col.boldYellow}warnings: ${col.yellow}${result.warningCount}\n\n`;
  }

  const renderMessage = (errorLabel, messages) => `${col.boldBlack}${errorLabel}
${messages.join('\n')}
${col.reset}\n`;

  let report = '';
  sorted
    // remove any results that reported no issues
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
