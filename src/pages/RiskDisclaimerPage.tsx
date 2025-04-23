
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, TrendingDown, BarChart } from "lucide-react";

const RiskDisclaimerPage = () => {
  return (
    <>
      <Helmet>
        <title>Risk Disclaimer | Bullish Whales Club</title>
        <meta name="description" content="Important information about the risks associated with trading and investment." />
        <link rel="canonical" href="https://bullishwhales.club/risk-disclaimer" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link to="/" className="inline-flex items-center text-gold hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                <AlertTriangle className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-4xl font-bold text-white">Risk Disclaimer</h1>
            </div>
            
            <div className="text-white/60 mb-8">
              <p>Last updated: April 23, 2025</p>
            </div>
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-xl p-8 space-y-8 shadow-lg mb-12">
              <section>
                <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Important Notice</h2>
                  </div>
                  <p className="text-white/80">
                    Trading and investing in financial markets involves significant risk of loss and is not suitable for every investor. The high degree of leverage can work against you as well as for you. Before deciding to trade or invest, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">General Risk Warning</h2>
                <p className="text-white/80 mb-4">
                  The content provided by Bullish Whales Club is for informational purposes only and should not be considered financial advice. We do not guarantee any particular results, and past performance is not indicative of future results.
                </p>
                <p className="text-white/80">
                  You should be aware of all the risks associated with trading and investing in financial markets and seek advice from an independent financial advisor if you have any doubts.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Specific Risks</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <TrendingDown className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-white">Market Risk</h3>
                      <p className="text-white/80">
                        Financial markets are volatile and can fluctuate significantly in response to company, industry, political, regulatory, market, or economic developments. Such volatility can adversely affect the value of your investments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <BarChart className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-white">Cryptocurrency-Specific Risks</h3>
                      <p className="text-white/80">
                        Cryptocurrency markets are highly volatile and unregulated in many jurisdictions. Cryptocurrencies may be subject to extreme price volatility, technological vulnerabilities, regulatory changes, and total loss of value. They are also subject to cybersecurity risks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-white">Leverage Risk</h3>
                      <p className="text-white/80">
                        Trading with leverage can lead to losses exceeding your initial investment. It amplifies both gains and losses, making it possible to lose more than you have invested.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Educational Content Disclaimer</h2>
                <p className="text-white/80 mb-4">
                  The educational content provided by Bullish Whales Club is for informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained.
                </p>
                <p className="text-white/80">
                  The strategies, techniques, and insights shared in our educational materials may not be suitable for all investors and traders. Results may vary based on individual circumstances, market conditions, and other factors.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">No Guarantee of Income</h2>
                <p className="text-white/80 mb-4">
                  Any income or earnings statements are only estimates of what we think you could earn. There is no guarantee that you will make these levels of income, and you accept the risk that the earnings and income statements differ by individual.
                </p>
                <p className="text-white/80">
                  Success in trading or investing requires hard work, dedication, experience, and expertise. As with any business endeavor, there is an inherent risk of loss of capital and there is no guarantee that you will earn any money.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">No Professional Advice</h2>
                <p className="text-white/80 mb-4">
                  Our Service does not constitute professional financial advice, legal advice, or tax advice. You should consult with a professional advisor before making any financial, legal, or tax-related decisions.
                </p>
                <p className="text-white/80">
                  Bullish Whales Club is not a registered investment advisor, broker-dealer, or financial planner. The information provided is general in nature and does not take into account your personal circumstances, financial situation, or needs.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                <p className="text-white/80">
                  By using our Service, you agree to indemnify and hold harmless Bullish Whales Club, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of this Risk Disclaimer.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Risk Disclaimer</h2>
                <p className="text-white/80">
                  We may update this Risk Disclaimer from time to time. We will notify you of any changes by posting the new Risk Disclaimer on this page and updating the "Last Updated" date. You are advised to review this Risk Disclaimer periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-white/80">
                  If you have any questions about this Risk Disclaimer, please contact us at:
                </p>
                <div className="bg-midnight/50 border border-gold/10 rounded-lg p-4 mt-4">
                  <p className="text-white">
                    Email: <a href="mailto:risk@bullishwhales.club" className="text-gold hover:underline">risk@bullishwhales.club</a>
                  </p>
                </div>
              </section>
            </div>
            
            <div className="flex justify-between items-center">
              <Link to="/" className="text-gold hover:underline flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex gap-4">
                <Button asChild variant="outline" className="border-gold text-gold">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold">
                  <Link to="/terms-of-service">Terms of Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RiskDisclaimerPage;
