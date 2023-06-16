import { StatusCodes } from "http-status-codes";
import { Middleware } from "koa";
// import { VerifyOptions } from "jsonwebtoken";
// import { Middleware, Assert } from "../types";
// import { AuthorizationFormatInvalid, AuthorizationError, AuthorizationExpired } from "../constants";
// import { initializeVerify } from "../tools/jwt";

// import { sessionRepo } from "../setup/repos";
// import initializeVerifySession from "../usecases/verifySession";

// const { BAD_REQUEST, UNAUTHORIZED } = StatusCodes;
// const verifySession = initializeVerifySession(sessionRepo);

export default (): Middleware => {
  //   const verify = initializeVerify(options);

  return async (ctx, next) => {
    // console.log("authorize middleware");

    //     const assert: Assert = ctx.assert as Assert;
    //     const authorization = (ctx.header.authorization || "").split(" ");
    //     const [scheme, token] = authorization;

    //     assert(
    //       authorization.length === 2 && /^Bearer$/i.test(scheme),
    //       BAD_REQUEST,
    //       'Bad Authorization header format. Format is "Authorization: Bearer <token>"',
    //       { code: AuthorizationFormatInvalid }
    //     );

    // const { error: jwtError, payload } = await verify(token);

    //     assert(payload?.data, UNAUTHORIZED, "Invalid authorization.", {
    //       code: AuthorizationError,
    //       originalError: jwtError,
    //     });

    const data = { data: "payload" };
    //     const { value: validSession } = await verifySession(data);
    //     assert(validSession, UNAUTHORIZED, "Session is not valid.", {
    //       code: AuthorizationExpired,
    //     });

    ctx.state = { ...ctx.state, ...data };

    await next();
  };
};
