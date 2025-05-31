import ComingSoon from '@/components/comingSoon';

export default function History() {
    const historyFeatures = [
        { icon: "📚", label: "View Past Chats" },
        { icon: "🔍", label: "Search Messages" },
        { icon: "💾", label: "Export Conversations" }
    ];

    return (
        <ComingSoon
            title="Chat History"
            description="We're working on bringing you a comprehensive chat history feature"
            features={historyFeatures}
            mainIcon="📋"
            linkText="Meanwhile, start a new conversation in Chat"
            linkHref="/chat"
        />
    );
}