import { NextRequest, NextResponse } from "next/server";

if (!process.env.NEXT_PUBLIC_OPENAI_KEY) {
  throw new Error("Missing OpenAI API key");
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        stream: false,
        n: 1,
      }),
    });
    const resJson = await res.json();
    console.log(resJson, process.env.NEXT_PUBLIC_OPENAI_KEY)
    return NextResponse.json({
      description: resJson?.choices[0]?.message?.content,
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
