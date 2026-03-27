# Playtest

> View the status and test results of playtests run by the AI.

![Playtest — Playtest status and test history](../../assets/screenshots/dashboard/dashboard_playtest.png)

## Overview

The Playtest page shows the status and test results of playtests run by the AI. It is accessible only when the plugin is connected (L2).

## Playtest Status

Displays the current playtest state:

| Status | Meaning |
|--------|---------|
| **NotRunning** | Playtest not running |
| **Running** | Playtest in progress |
| **Paused** | Playtest paused (Run mode) |

## Test History

Lists the results of tests executed by the AI via the `run_test` action in chronological order:

| Field | Description |
|-------|-------------|
| Timestamp | Test execution time |
| Test Report | Link to the test report |
| Mode | Execution mode (play/run) |
| Duration | Test duration |
| Status | Result (Passed/Failed) |

Click a test report to view the detailed report in markdown format along with logs.

## Use Cases

### Analyzing Test Failures

```
"I want to find out why the automated test I just ran failed"
```

Find the test with a Failed status in Test History and click the Test Report to view detailed logs and the failure cause.

### Reviewing Test History

```
"I want to see the pass/fail results of today's tests"
```

Check the timestamps and Status in Test History to track test result trends.

## Related Documents

- [WROX Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Playtest & Automated Tests (Tools)](../tools/playtest.md)
