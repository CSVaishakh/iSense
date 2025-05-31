import { NextRequest,NextResponse } from "next/server";
import { generateDescription,answerQuestion } from "@/lib/groq";

let imgDescription: string | null = null;
let currentSessionId: string | null = null;

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const message = formData.get('message') as string;
        const file = formData.get('file') as File | null;
        const sessionId = formData.get('sessionId') as string;

        // Reset imgDescription if session ID has changed
        if (sessionId !== currentSessionId) {
            imgDescription = null;
            currentSessionId = sessionId;
        }

        let response: string = '';

        if(file !== null && file.type.startsWith('image/')){
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const base64 = buffer.toString('base64');
            const imgUrl = `data:${file.type};base64,${base64}`;
            imgDescription = await generateDescription(imgUrl);  
        }

        if(message && imgDescription === null) response = 'Hi,Please upload an image and ask questions';
        else if(message && imgDescription) response = await answerQuestion(imgDescription, message); 
        else if(!message && imgDescription) response = imgDescription 
        else if(message && imgDescription) response = await answerQuestion(imgDescription, message); 

        return NextResponse.json({message: response});
    }catch(error){
        console.error(error);
        return NextResponse.json(
            { message: 'Sorry, something went wrong. Please try again.' },
            { status: 500 }
        );
    }
};