# Microwalk JavaScript GitHub Workflow Example

This repository features a simple example for running the Microwalk GitHub analysis workflow with JavaScript code.

It makes use of the [microwalk-jalangi2-action](https://github.com/microwalk-project/microwalk-jalangi2-action) to analyze the targets in in `microwalk/target-*.js` and generate a leakage report.

The target scripts call functions from <functions.js>. In the `master` branch, those are empty and thus constant-time. In the pull request #1 (for branch `add-leakage`), the functions are filled with leaking code, that is subsequently detected by the Microwalk analysis. The SARIF-formatted leakage report is sent back to GitHub and displayed both in the pull request UI (for everyone) and in the repository's "Security" tab (for users with write access only).
