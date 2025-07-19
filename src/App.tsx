import React, { useState } from 'react';
import { ChevronDown, DollarSign, Heart, TrendingUp, Clock, Mail, Phone, User, CheckCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-capture-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your information has been submitted successfully. Our team will contact you within 24 hours to discuss your journey to financial freedom and optimal health.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>What's Next?</strong><br />
              Check your email for exclusive resources while you wait for our call.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Are You <span className="text-yellow-400">Tired</span> of Being <span className="text-red-400">Poor?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              What if you could make <strong>millions in passive income</strong> while you sleep, 
              live a longer, healthier life, and become a <strong>millionaire before retirement?</strong>
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-300">
                Stop Asking "What If?" Start Asking "What's Next?"
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-lg">
                <div className="flex items-center justify-center space-x-3">
                  <DollarSign className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <span>Financial Freedom</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Heart className="w-8 h-8 text-red-400 flex-shrink-0" />
                  <span>Optimal Health</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <span>Passive Income</span>
                </div>
              </div>
            </div>
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Your Journey Now →
            </button>
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-yellow-400" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                The Harsh Reality Most People Face
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                While you're trading time for money, the wealthy are making money work for them. 
                Are you ready to break free from this cycle?
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3760063/pexels-photo-3760063.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Stressed person with financial problems"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-red-600">Are You Stuck in These Patterns?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Working harder but never getting ahead financially?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Watching your health decline while chasing money?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Worried you'll never retire comfortably?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Feeling like time is running out to build real wealth?</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                I'm Ready to Break Free →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What If You Could Generate <span className="text-yellow-300">Millions</span> While You Sleep?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100">
              Imagine waking up every morning to see your bank account growing, your health improving, 
              and your retirement dreams becoming reality—all through systems that work 24/7.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Successful person enjoying financial freedom"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="text-left space-y-6">
                <h3 className="text-3xl font-bold text-yellow-300">This Could Be Your Reality:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg">Multiple passive income streams generating $10K+ monthly</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg">Optimal health and energy that adds decades to your life</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg">Financial independence before traditional retirement age</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg">Time freedom to enjoy what matters most</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Show Me How →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Transform Every Area of Your Life
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive system addresses wealth building, health optimization, and passive income generation 
                in a way that works for people of all ages and backgrounds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border border-green-200 hover:shadow-xl transition-all duration-300">
                <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Financial Literacy Mastery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn the money principles that the top 1% use to build and maintain wealth. 
                  Simple strategies that compound over time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center border border-red-200 hover:shadow-xl transition-all duration-300">
                <Heart className="w-16 h-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Health & Longevity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover wellness secrets that add healthy years to your life. 
                  What good is wealth without the health to enjoy it?
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200 hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Passive Income Systems</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build income streams that work while you sleep. 
                  Scale your wealth without trading more time for money.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Clock className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Time Is Your Most Valuable Asset
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Every day you wait is a day of potential income lost. The wealthy understand that 
                    time plus compound interest creates extraordinary results. The question isn't 
                    whether you can afford to start—it's whether you can afford not to.
                  </p>
                  <p className="text-orange-700 font-semibold text-lg">
                    Are you ready to stop watching others succeed and start building your own empire?
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Time and money concept"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:from-green-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get My Strategy Session →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="lead-capture-form" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-yellow-300">Break Free</span> From Financial Mediocrity?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands who've already started their journey to financial freedom, optimal health, 
                and passive income mastery. Our team will contact you with a personalized roadmap.
              </p>
              <div className="bg-yellow-400 text-gray-800 rounded-lg p-4 inline-block mb-8">
                <p className="font-bold text-lg">⏰ Limited Time: FREE Strategy Session Worth $500</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 border border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all text-lg"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 border border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all text-lg"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 border border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all text-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'YES! Get My FREE Strategy Session'}
                </button>

                <p className="text-sm text-blue-200 text-center">
                  🔒 Your information is 100% secure and will never be shared. 
                  Our team will contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            The question isn't whether you <em>can</em> achieve financial freedom...
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The question is: <strong>How much longer will you wait?</strong>
          </p>
          <p className="text-lg text-yellow-400 font-semibold">
            Your future self is counting on the decision you make today. 📈
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;