# Find the most complex code using eslint

This repo accompanies a small article on my blog at https://www.webpusher.ie/2019/02/01/eslint-complexity/

## Intention

The example project highlights eslint config that warns the coder of complexity issues such as:

- cyclomatic complexity
- too many statements per function
- too many statements per line
- excessive params in functions
- number of nested callbacks
- nesting in code blocks
- file length

Code that has any of these issues can be harder to maintain and understand, so it is worthwhile taking a little time to refactor, reduce and remove unwanted complexity. You need to recognise it first!

## Pre-requisites

The project uses node 8.11.2

## Getting started

You should be able to get started simply by running:

```javascript
npm install
npm run lint:sorted
```

This will generate an output as below

![](./eslint.sorted.png)

Compare this to the standard output that sorts the files alphabetically and outputs the rule violations in the order they occur in each file.

![](./eslint.standard.png)


## What does it all mean?

The output has sorted the files, placing those that contain the most errors and/or warnings at the top of the list. In addition it has grouped the issues by the eslint rule they break, and also colour-highlighted the output in a familiar scheme - red for errors and yellow for warnings.

## Cyclomatic weighting

The cyclomatic complexity is a measure of the independent paths through a piece of code. The measure is divided by four and added to the error or warning count before being evaluated when sorting the list of problematic files.

This is why, in the example, the file `c.cyclomatic.js` with only a single cyclomatic error is listed above the file `a.notsobad.js` which has 1 error and 1 warning. None of the rule violations in `a.notsobad.js` are due to cyclomatic complexity so they are relatively less important.

For the example above, the file `b.worst.js` has two instances of excessive cyclomatic complexity.

```
complexity
Line 6 : Method 'init' has a complexity of 9.
Line 30 : Method 'wiggleIt' has a complexity of 15.
```

They both will contribute extra weighting to the file - `9 / 4 = 3` and `15 / 4 = 4` for a total of 7 added to the warning count - ensuring it will appear at the top of the list of problem files.

## Why aren't all the files listed

The code in the `good/good.example.js` exhibits no complexity issues and therefore will not appear in the list of problem files.

# eslint config

This is the default configuration used in this repo. Ideally all the rule violations should be errors and the linting should be used to gate your commits.

```javascript
  "rules": {
    "complexity": [
      "error",
      5
    ],
    "max-params": ["warn", 4],
    "max-statements": [
      "warn",
      7
    ],
    "max-statements-per-line": [
      "warn",
      {
        "max": 1
      }
    ],
    "max-nested-callbacks": [
      "error",
      2
    ],
    "max-depth": [
      "warn",
      {
        "max": 2
      }
    ],
    "max-lines": [
      "warn",
      80
    ],
  },
```