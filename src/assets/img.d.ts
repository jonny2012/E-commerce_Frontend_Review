
declare module "*.svg" {
  import React from "react";
  const value: React.FC<React.SVGProps<SVGSVGElement>>;
  export default value;
}
  declare module '*.png' {
    const value: any;
    export = value;
  }

  declare module '*.jpg' {
    const value: any;
    export = value;
  }