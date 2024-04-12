import { NextRequest, NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
export const POST = async(request:NextRequest) => {
    const body =  await request.json()
    console.log(body)
    const title:string = body.lang
    console.log(title)
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt =`List the top 5 websites offering free ${title} APIs, ranked in descending order based on their popularity and usage and give website link for api access`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return NextResponse.json({text})
  }