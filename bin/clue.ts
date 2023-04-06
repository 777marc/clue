#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ClueStack } from "../lib/clue-stack";

const app = new cdk.App();
new ClueStack(app, "ClueStack", {
  env: { account: "388414971737", region: "us-east-1" },
});
