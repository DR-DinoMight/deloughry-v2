// src/lucia.d.ts
/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("./lib/lucia.server.ts").Auth;
  type UserAttributes = {
    name?: string;
    email: string;
  };
}
