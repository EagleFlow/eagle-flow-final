import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BackgroundCells } from "@/components/ui/background-cells";

export function ChatbotServices() {
  return (
    <div className="w-full h-full bg-black text-white relative z-[70]">
      <BackgroundCells className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 sm:py-40">
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold">
              Trained AI Chatbots That Sell
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
              We develop AI-driven sales chatbots designed to optimize lead conversion. Using structured conversation flows and adaptive learning, they qualify prospects and close deals efficiently. Scalable and data-driven, our solutions reduce acquisition costs while increasing revenue.
            </p>
          </div>

          <div className="flex justify-center">
            <CardSpotlight className="w-full max-w-[400px] aspect-square">
              <div className="relative z-20">
                <h3 className="text-2xl font-bold mb-6">Chatbot Development</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-neutral-200">Customer Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-neutral-200">Lead Generation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-neutral-200">Lead Qualification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-neutral-200">Product Recommendation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-neutral-200">Voice Bots</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-neutral-200">Custom Solutions</span>
                  </li>
                </ul>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </BackgroundCells>
    </div>
  );
}