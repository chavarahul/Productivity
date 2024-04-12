import { NextRequest, NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export const GET = async() => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt =`Generate data representing the top five technologies utilized in software feild development, excluding programming languages, along with their some description of one line.  `

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return NextResponse.json({text})
}
export const POST = async(request:NextRequest) => {
    const body:number =  await request.json()
    console.log(body)
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt =`Generate more data representing the top  technologies utilized in software feild development, excluding programming languages, along with their some description of one line.  `
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return NextResponse.json({text})
  }
