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
  
    const prompt =`Suggest the best top 5 only AI tools for generating ${title}, ordered by user popularity, and provide a main description in one line along with the website link to main page .`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return NextResponse.json({text})
  }
