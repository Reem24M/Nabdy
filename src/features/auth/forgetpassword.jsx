import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

// Simple email regex schema
const emailSchema = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!regex.test(email)) return "Please enter a valid email address";
  return null;
};

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = emailSchema(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
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
      className="min-h-screen flex items-center justify-center p-3 relative overflow-hidden"
      style={{ backgroundColor: '#0A1A3A' }}
    >
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6' }}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1.5s' }}></div>
      </div> */}

      <div className="relative w-full max-w-lg z-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="inline-flex p-4 rounded-2xl mb-4" style={{ backgroundColor: 'rgba(22, 156, 246, 0.1)' }}>
              <Mail className="w-8 h-8" style={{ color: '#169CF6' }} />
            </div>
            <h1 className="text-xl font-bold mb-1" style={{ color: '#0A1A3A' }}>Forgot Password?</h1>
            <p className="text-lg" style={{ color: '#0A1A3A' }}>
              No worries! Just enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* Success Message */}
          {status === 'success' && (
            <div className="mb-6 p-4 border rounded-xl flex items-start gap-3" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
              <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#16A34A' }} />
              <div>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>Check your email!</p>
                <p className="text-xs mt-1" style={{ color: '#166534' }}>
                  If <span className="font-semibold">{email}</span> is registered, you'll receive a password reset link shortly.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {(status === 'error' || error) && (
            <div className="mb-6 p-4 border rounded-xl flex items-start gap-3" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#DC2626' }} />
              <p className="text-sm" style={{ color: '#991B1B' }}>{error || "Something went wrong. Please try again."}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-medium mb-2" style={{ color: '#0A1A3A' }}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                  status === 'success' 
                    ? 'bg-gray-50 border-gray-300' 
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-100'
                }`}
                style={{ 
                  borderColor: status === 'success' ? '#D1D5DB' : status === 'error' || error ? '#EF4444' : '#D1D5DB'
                }}
                disabled={status === 'success'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success' || !email.trim()}
              className={`w-full py-3.5 cursor-pointer !rounded-lg font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 ${
                status === 'success' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'hover:shadow-xl'
              }`}
              style={{ 
                backgroundColor: status === 'success' ? '#9CA3AF' : '#169CF6'
              }}
              onMouseEnter={(e) => {
                if (!(status === 'loading' || status === 'success' || !email.trim())) {
                  e.target.style.backgroundColor = '#1285D6';
                }
              }}
              onMouseLeave={(e) => {
                if (!(status === 'loading' || status === 'success' || !email.trim())) {
                  e.target.style.backgroundColor = '#169CF6';
                }
              }}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white !rounded-full animate-spin" />
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
              className="inline-flex items-center gap-2 transition-all duration-300 hover:underline"
              style={{ color: '#169CF6' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm mt-6" style={{ color: '#0A1A3A' }}>
            Your email is safe with us. We never share it.{' '}
            <a href="#" className="font-semibold hover:underline transition-all duration-300" style={{ color: '#169CF6' }}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
