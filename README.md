# iSense 🧠

**Decoding Vision, Delivering Insight**

iSense is an AI-powered image analysis platform that combines advanced computer vision with natural language processing to provide intelligent insights about your images. Upload any image, ask questions, and get detailed, contextual responses powered by cutting-edge AI technology.

## ✨ Features

- **🧠 AI-Powered Image Understanding**: Advanced image analysis using Groq AI with LLaMA models
- **💬 Intelligent Q&A**: Ask natural language questions about your uploaded images
- **📸 Image Upload**: Support for various image formats with real-time preview
- **🔐 Secure Authentication**: User management powered by Clerk
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile
- **🎨 Modern UI**: Beautiful, animated interface with Tailwind CSS
- **📜 Chat History**: Keep track of your conversations (coming soon)

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **Lucide React** - Modern icon library
- **Custom animations** - Smooth, engaging user experience

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Groq SDK** - AI-powered image analysis
- **LLaMA 4 Scout** - Advanced language model for image understanding

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **tw-animate-css** - Enhanced Tailwind animations

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd isesnse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Groq AI
   GROQ_API_KEY=your_groq_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Getting Started
1. **Sign Up/Sign In**: Create an account or sign in using Clerk authentication
2. **Navigate to Chat**: Click on "Chat" in the navigation or "Start Analyzing" on the home page
3. **Upload an Image**: Click the "+" button to upload an image (supports JPG, PNG, WebP, etc.)
4. **Ask Questions**: Type questions about your image in natural language
5. **Get Insights**: Receive detailed AI-generated responses about your image

### Example Interactions
- "What objects can you see in this image?"
- "Describe the mood and atmosphere of this photo"
- "What colors are dominant in this image?"
- "Can you identify any text in this image?"
- "What's happening in the background?"

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── chat/          # Chat API endpoint
│   ├── about/             # About page
│   ├── chat/              # Chat interface
│   ├── history/           # Chat history (coming soon)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── chatBox.tsx        # Chat interface component
│   ├── InputBox.tsx       # Message input component
│   └── comingSoon.tsx     # Coming soon placeholder
├── lib/                   # Utility libraries
│   ├── groq.ts           # Groq AI integration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── middleware.ts         # Clerk authentication middleware
└── package.json          # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality


## 🔐 Authentication

iSense uses [Clerk](https://clerk.dev) for authentication, providing:
- Email/password authentication
- Social login options
- Secure user sessions
- Profile management

## 🤖 AI Integration

The platform integrates with [Groq](https://groq.com) using the LLaMA 4 Scout model for:
- **Image Description**: Automatic caption generation for uploaded images
- **Question Answering**: Contextual responses based on image content
- **Natural Language Processing**: Understanding user queries in conversational format

## 🎯 Roadmap

- [ ] **Chat History**: Save and retrieve previous conversations
- [ ] **Export Functionality**: Download chat transcripts
- [ ] **Advanced Filters**: Search through chat history
- [ ] **Profile Customization**: Personalized AI preferences
- [ ] **Batch Processing**: Upload and analyze multiple images
- [ ] **API Access**: Public API for developers

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to [Vercel](https://vercel.com)
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Other Platforms
The application can be deployed on any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

- 🐛 **Bug Reports**: Open an issue on GitHub
- 💡 **Feature Requests**: Submit an issue with the enhancement label
- 📧 **Contact**: Reach out via social media links in the footer

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework for production
- [Groq](https://groq.com) - AI inference platform
- [Clerk](https://clerk.dev) - Authentication made simple
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Lucide](https://lucide.dev) - Beautiful & consistent icons

---

<div align="center">
  <strong>iSense - Decoding Vision, Delivering Insight</strong>
  <br>
  ©iSense 2025
</div>
