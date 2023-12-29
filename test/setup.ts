import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

process.env.ENV_TYPE = "testing";

const { PORT } = process.env;

(global as any).axiosInstance = axios.create({
  baseURL: `http://localhost${PORT ? `:${PORT}` : ""}`,
  validateStatus: (status: number) => status <= 500,
});
