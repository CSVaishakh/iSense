import { NextRequest,NextResponse } from "next/server";
import { generateDescription,answerQuestion } from "@/lib/groq";

let imgDescription: string | null = null;

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const message = formData.get('message') as string;
        const file = formData.get('file') as File | null;

        let response: string = '';

        if(file !== null && file.type.startsWith('image/')){
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const base64 = buffer.toString('base64');
            const imgUrl = `data:${file.type};base64,${base64}`;
            imgDescription = await generateDescription(imgUrl);  
        }

        if(message && imgDescription === null) response = 'Please upload an image and ask questions';
        else if(message && imgDescription) response = await answerQuestion(imgDescription, message); 
        else if(!message && imgDescription) response = imgDescription;

        return NextResponse.json({message: response});
    }catch(error){
        console.error(error);
        return NextResponse.json(
            { message: 'Sorry, something went wrong. Please try again.' },
            { status: 500 }
        );
    }
};