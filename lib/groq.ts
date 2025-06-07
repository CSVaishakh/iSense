import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function generateDescription(imgUrl: string) {
    const completion = await groq.chat.completions.create({
        messages: [{
            role: 'user',
            content:[
                {
                    type: 'text',
                    text: 'Describe the image, in not less than 50 words'
                },
                {
                    type: 'image_url',
                    image_url: {url: imgUrl}
                }
            ]
            }],
    "model": "meta-llama/llama-4-scout-17b-16e-instruct",
    "temperature": 1,
    "max_completion_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "stop": null
    });
    return completion.choices[0]?.message?.content || "error generating response!";
};

export async function answerQuestion(imgDescription: string, question: string){
    const completion = await groq.chat.completions.create({
        messages: [{
            role: 'user',
            content:   `Context: ${imgDescription}, Question: ${question}`
        }],
    "model": "meta-llama/llama-4-scout-17b-16e-instruct",
    "temperature": 1,
    "max_completion_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "stop": null
    });
    return completion.choices[0]?.message?.content || "error generating response!";
}