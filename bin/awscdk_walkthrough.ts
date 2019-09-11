#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { AwscdkWalkthroughStack } from '../lib/awscdk_walkthrough-stack';

const app = new cdk.App();
new AwscdkWalkthroughStack(app, 'AwscdkWalkthroughStack');