import { NextRequest, NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export const POST = async(request:NextRequest) => {
    const body:any =  await request.json()
    console.log(body)
    const title:string = body.tech
    console.log(title)
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt =` display  information about ${title} technology in simple way and understandable way in 5-6 lines.and last give any website references to know about ${title} in 2-3 references`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return NextResponse.json({text})
  }