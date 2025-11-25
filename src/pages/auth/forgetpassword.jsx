import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import Img from '../../../public/bg.jpg'

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    try {
      // Simulate API call
      await new Promise(r => setTimeout(r, 1200));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
          className="min-h-screen flex items-center justify-center p-6 
               bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${Img}')`
          }}
        >
      {/* Optional: overlay for better readability */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative w-full max-w-lg ">
        {/* Card */}
        <div className="bg-white/95 p-5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 ">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Forgot Password?</h1>
            <p className="text-sm text-gray-600 mt-2">
              No worries! Just enter your email and we’ll send you a reset link.
            </p>
          </div>

          {/* Success Message */}
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">Check your email!</p>
                <p className="text-xs text-green-700 mt-1">
                  If <span className="font-semibold">{email}</span> is registered, you’ll receive a password reset link shortly.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-800">Something went wrong. Please try again.</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl border transition-all
                  ${status === 'success' ? 'bg-gray-50 border-gray-300' : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'}
                  focus:outline-none text-sm`}
                disabled={status === 'success'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success' || !email.trim()}
              className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2
                ${status === 'success' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 active:scale-98 shadow-lg'
                }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>Sent!</>
              ) : (
                <>Send Reset Link</>
              )}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/auth/login')}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </button>
          </div>
        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Your email is safe with us. We never share it. 
          <a href="#" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>
        </p>
        </div>

      </div>
    </div>
  );
}