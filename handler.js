"use strict";
import { app } from "./src/index";
import * as serverless from "serverless-http";

exports.main = serverless(app);
