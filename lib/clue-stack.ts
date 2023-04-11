import { Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class ClueStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, "api", {
      description: "example api gateway",
      deployOptions: {
        stageName: "dev",
      },
      // 👇 enable CORS
      defaultCorsPreflightOptions: {
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
        ],
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
        allowCredentials: true,
        allowOrigins: ["*"],
      },
    });

    const lambaFunction = new Function(this, "lambda-function", {
      functionName: "heyo-cdk",
      description: "testing out lambdas w/ cdk",
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset("lambda"),
      handler: "game-controller.handler",
    });

    const gameItems = api.root.addResource("gameItems");

    gameItems.addMethod(
      "GET",
      new apigateway.LambdaIntegration(lambaFunction, { proxy: true })
    );
  }
}
