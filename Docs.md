# Code Documentation

## Contents
- [Tools Discussion](#tools-used)
- [High Level Overview](#overview)
- [Calculating a metric](#metric-calculations-explained)
- [Contributing to the project](#contribute)
  - [Adding a metric](#add-a-new-metric)
  - [Testing](#testing)



### Tools Used

The two libraries primarily used are [xpath.js](https://www.npmjs.com/package/xpath.js) to extract data from the xml document
and [@xmldom/xmldom](https://www.npmjs.com/package/@xmldom/xmldom) is used to parse the file string into a Document object. 
Compiled with tsc version 4.9.3(for more compilation related information check the tsconfig). Can be executed with [ts-node](https://www.npmjs.com/package/ts-node)
as mentioned in the README(requires --esm flag), which when adding a new metric is not needed(TDD only). Jest is used for testing.


---
### Overview
In each file in src/metrics an object of type Metric is exported. In src/all.ts the default export includes all the metrics in an array and
there are named exports for all metrics for convenience purposes. 

---
### Metric Calculations Explained
BPMN diagrams are represented by xml files. By analysing these files using xpath.js we can calculate the metrics.
A useful site for testing out ideas fast is [XPather](http://xpather.com/) (makes development significantly faster,thanks to the author). 
Also sometimes it is useful to utilise other metrics if it makes sense(e.g. NOAJS = NOA + gateways).

---
### Contribute
Contributions also involve finding bugs,outdated documentation, API usability issues, edge cases where a metric doesn't match the expected outcome,
such contributions are greatly appreciated.

**NOTE:**</u> Due to issues with tsc and esm, all imports and exports include the .js extension(yes even though they are .ts files this is possible).

Now let's discuss contributing code directly in the project.
#### Add a new metric
Steps to successfully add a new metric in the project:

1. Create the .ts file in the src/metrics folder(when the project grows this might change and metrics will be grouped appropriately) using all caps and the name of the metric
3. Add your file to both the default and the named exports in src/all 
4. Write the appropriate unit test for the calculating function 
5. Follow the code style in existing metrics(writing the function and creating the object)
6. Having finished with the red green refactor cycle, provide resources for the metric you implemented(a brief explanation and the paper mentioning it).
7. If it is needed due to the existing xml files not being appropriate, provide one that follows the code style in other xml files.

#### Testing

---
