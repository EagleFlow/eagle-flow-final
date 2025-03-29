import { Zap, Search, MessageSquare, Users } from 'lucide-react';

export function LeadGenerationSection() {
  return (
    <section className="px-4 md:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">Wasting Time On This?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Here's How Most Companies<br />Get Their Leads:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-8 rounded-xl bg-black/5">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-lg mb-6">
              <Search className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Inbound Tactics (like ranking on Google or building your personal brand)</h3>
          </div>

          <div className="text-center p-8 rounded-xl bg-black/5">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-lg mb-6">
              <MessageSquare className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Manually Sending Outbound Messages</h3>
          </div>

          <div className="text-center p-8 rounded-xl bg-black/5">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-lg mb-6">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Hoping Your Network Spreads the Word</h3>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            Visibility drives sales. But SEO's a long game, manual outreach is a ton of work, and referrals only get you so far.
          </p>
        </div>
      </div>
    </section>
  );
}