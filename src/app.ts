import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();


(async () => {

  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await model.invoke("Hello");

  console.log(response);
})();