# bpmn-metrics

A nodejs library written with Typescript to calculate metrics of BPMN diagrams.

Disclaimer: This is a work in progress not meant for production yet.
## Documentation

### Install
With npm:  ```npm install bpmn-metrics```

Also available with yarn: ```yarn add bpmn-metrics```

---
### Usage
There is a default export that includes all implemented metrics in an array.
There are also separate named exports for all implemented metrics
``` 
    import bpmn_metrics from "bpmn-metrics"
    bpmn_metrics.default
    bpmn_metrics.NOA
```
---
### Metrics Supported
More on metrics in Metrics.md.

AGD, CFC, CLA, CNC, DENSITY, GH, GM, MGD, NMF, NOA, NOAJS, NSFA, NSFE, NSFG, TNG, TS

---
### Contribute to the library
- Create issues in github for any bugs or unsupported things found.
- Read the code documentation in docs.md
- To run the project: ```ts-node --esm index.ts```. If ts-node not installed: ```npm i -g ts-node```.
- To run tests(testing done with Jest): ```npm test```
- TDD is necessary. More details in the Testing section of docs.md.

