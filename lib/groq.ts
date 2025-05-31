import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function generateCaption(imgUrl: string) {
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: 'user',
                content:[
                    {
                        type: 'text',
                        text: 'Describe the image, in 12 to 18 words'
                    },
                    {
                        type: 'image_url',
                        image_url: {url: imgUrl}
                    }
                ]
            }
        ],
        model: 'meta-llama/llama-4-scout-17b-16e-instruct'
    });
    return completion.choices[0]?.message?.content || "error generating response!";
};

const imgDescription: string = await generateCaption(imgUrl);

export async function answerQuestion(imgDescription: string, question: string){
    const completion = await groq.chat.completions.create({
        messages: [{
            role: 'user',
            content:   `Context: ${imgDescription}, Question: ${question}`
        }],
        model: 'meta-llama/llama-4-scout-17b-16e-instruct'
    });
    return completion.choices[0]?.message?.content || "error generating response!";
}