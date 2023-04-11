import { Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class ClueStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambaFunction = new Function(this, "lambda-function", {
      functionName: "heyo-cdk",
      description: "testing out lambdas w/ cdk",
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset("lambda"),
      handler: "game-controller.handler",
    });
  }
}
