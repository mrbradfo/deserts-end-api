import dotenv from "dotenv";
import db from "../src/config/devolunteersDB";

dotenv.config({ path: ".env" });

export default async ({ nonFlagArgs }: any) => {
  // const integrationUtils = {
  //   db,
  // };
  // (global as any).teardown = true;
  // (global as any).integrationUtils = integrationUtils;
};
