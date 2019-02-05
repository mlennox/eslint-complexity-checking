module.exports = (a, b) => {
  const weights = {
    a: findWeights(a),
    b: findWeights(b),
  };

  const errorComparison = compare(weights.a.errorWeight, weights.b.errorWeight);
  const warningComparison = compare(weights.a.warningWeight, weights.b.warningWeight);

  return errorComparison !== 0 ? errorComparison : warningComparison;
};

const compare = (aWeight, bWeight) => {
  if (aWeight === bWeight) {
    return 0;
  }
  return aWeight > bWeight ? -1 : 1;
};

/**
 * As we consider cyclomatic complexity to be the most damaging
 * to code readability, we use the cyclomatic score to boost the
 * relative weight of the issues found in the file under check
 * @param {array} messages - list of messages from eslint
 * @param {int} severity - indicates warning: 1, or error: 2
 */
const calculateComplexity = (messages, severity) =>
  messages
    .filter(message => message.severity === severity && message.ruleId === 'complexity')
    .map(message => parseComplexityScoreFromMessage(message))
    .reduce((total, currentComplexity) => total + Math.ceil(currentComplexity / 4), 0);

/**
 * For ruleId 'complexity' the message is something like
 *
 *    Method 'doIt' has a complexity of 9
 *
 * We parse the number to get the cyclomatic complexity figure
 * which we use to weight the severity of the file's complexity
 * @param {string} message - the eslint error message
 */
const parseComplexityScoreFromMessage = message => parseInt(message.message.replace(/\D/gi, ''));

/**
 *
 * @param {object} result - a given result
 */
const findWeights = result => {
  const details = {
    errors: result.errorCount,
    warnings: result.warningCount,
  };
  const complexity = {
    errors: calculateComplexity(result.messages, 2),
    warnings: calculateComplexity(result.messages, 1),
  };
  return {
    errorWeight: details.errors + complexity.errors,
    warningWeight: details.warnings + complexity.warnings,
  };
};
