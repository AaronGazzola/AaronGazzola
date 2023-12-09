import customInstructions from "@/data/customInstructions";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

const messageSchema = z.object({
  message: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY!;
    const { message } = messageSchema.parse(await req.json());
    const chatgpt = new OpenAI({
      apiKey,
    });

    const completion = await chatgpt.chat.completions.create({
      messages: [
        { role: "system", content: customInstructions },
        { role: "user", content: message },
      ],
      model: "gpt-3.5-turbo",
    });
    return NextResponse.json({
      message: completion.choices[0].message?.content ?? "",
    });
  } catch (err) {
    console.log(err);
  }
}
