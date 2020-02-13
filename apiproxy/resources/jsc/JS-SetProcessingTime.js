var startTimestamp = context.getVariable("client.received.end.timestamp");
var currenTimestamp = context.getVariable("system.timestamp");
var processingTimestamp = currenTimestamp-startTimestamp;
context.setVariable("flow.error.processingTime", processingTimestamp);