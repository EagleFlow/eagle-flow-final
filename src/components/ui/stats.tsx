import { Zap } from "lucide-react";

function Stats() {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          <div className="flex gap-4 sm:gap-6 flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium">Results</span>
            </div>
            <div className="flex gap-3 sm:gap-4 flex-col">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold text-left">
                30+ meetings booked in the first 30 sending days
              </h2>
              <p className="text-base sm:text-lg leading-relaxed tracking-tight text-muted-foreground text-left max-w-xl">
                E-commerce is one of the toughest markets for cold outreach, but with AI-driven personalization and strategic targeting, we booked 30+ high-quality meetings for our client in just 30 days. Our approach cuts through the noise, delivering real conversations with decision-makers, fast.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 xs:grid-cols-2 w-full gap-3 sm:gap-4">
              <div className="flex gap-0 flex-col justify-between p-4 sm:p-6 md:p-8 border rounded-lg hover:border-black/20 transition-colors">
                <h2 className="text-3xl sm:text-4xl tracking-tighter text-left font-bold">
                  7,334
                </h2>
                <p className="text-sm sm:text-base leading-relaxed tracking-tight text-muted-foreground text-left mt-2">
                  Leads contacted
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-4 sm:p-6 md:p-8 border rounded-lg hover:border-black/20 transition-colors">
                <h2 className="text-3xl sm:text-4xl tracking-tighter text-left font-bold">
                  54
                </h2>
                <p className="text-sm sm:text-base leading-relaxed tracking-tight text-muted-foreground text-left mt-2">
                  Positive Replies
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-4 sm:p-6 md:p-8 border rounded-lg hover:border-black/20 transition-colors">
                <h2 className="text-3xl sm:text-4xl tracking-tighter text-left font-bold">
                  34
                </h2>
                <p className="text-sm sm:text-base leading-relaxed tracking-tight text-muted-foreground text-left mt-2">
                  Meetings booked
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-4 sm:p-6 md:p-8 border rounded-lg hover:border-black/20 transition-colors">
                <h2 className="text-3xl sm:text-4xl tracking-tighter text-left font-bold">
                  $128,000
                </h2>
                <p className="text-sm sm:text-base leading-relaxed tracking-tight text-muted-foreground text-left mt-2">
                  Opportunity value generated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };