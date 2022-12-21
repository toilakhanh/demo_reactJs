import React from "react";

export type MRoute = {
  path: string;
  component: any;
  guard?: any;
  layout?: any;
};
