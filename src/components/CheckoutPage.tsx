import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Lock, CreditCard, MapPin, Mail, User, AlertTriangle, CheckCircle } from 'lucide-react';
import { CartState } from '../types/menu';

interface CheckoutPageProps {
  cart: CartState;
  onBack: () => void;
  onOrderComplete: () => void;
}

interface FormData {
  fullName: string;
  classroomNumber: string;
  studentEmail: string;
  specialInstructions: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  classroomNumber?: string;
  studentEmail?: string;
  agreeToTerms?: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, onBack, onOrderComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    classroomNumber: '',
    studentEmail: '',
    specialInstructions: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Email validation for school domains
  const validateEmail = (email: string): boolean => {
    const validDomains = ['@stu.irvingisd.net', '@irvingisd.net'];
    return validDomains.some(domain => email.toLowerCase().endsWith(domain));
  };

  // Classroom number validation (format: Letter + Numbers)
  const validateClassroom = (classroom: string): boolean => {
    const classroomRegex = /^[A-Z]\d{2,3}$/i;
    return classroomRegex.test(classroom.trim());
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    // Classroom validation
    if (!formData.classroomNumber.trim()) {
      newErrors.classroomNumber = 'Classroom number is required';
    } else if (!validateClassroom(formData.classroomNumber)) {
      newErrors.classroomNumber = 'Format: Letter + Numbers (e.g., A231, B105)';
    }

    // Email validation
    if (!formData.studentEmail.trim()) {
      newErrors.studentEmail = 'Student email is required';
    } else if (!validateEmail(formData.studentEmail)) {
      newErrors.studentEmail = 'Must use @stu.irvingisd.net or @irvingisd.net email';
    }

    // Terms agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear specific field error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('.border-red-500');
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setCurrentStep(2);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setShowSuccess(true);
      
      // Complete order after showing success
      setTimeout(() => {
        onOrderComplete();
      }, 2000);
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
      setCurrentStep(1);
    } finally {
      setIsProcessing(false);
    }
  };

  // Calculate totals
  const subtotal = cart.total;
  const tax = subtotal * 0.0825; // 8.25% Texas sales tax
  const finalTotal = subtotal + tax;

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600">Your order has been successfully placed.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Order Total</p>
            <p className="text-2xl font-bold text-gray-900">${finalTotal.toFixed(2)}</p>
          </div>
          
          <div className="text-left space-y-2 text-sm text-gray-600 mb-6">
            <p><strong>Pickup Location:</strong> Firebird Café</p>
            <p><strong>Student:</strong> {formData.fullName}</p>
            <p><strong>Classroom:</strong> {formData.classroomNumber}</p>
            <p><strong>Estimated Time:</strong> 15-20 minutes</p>
          </div>
          
          <p className="text-xs text-gray-500">
            You will receive a confirmation email shortly with pickup instructions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Back to Menu</span>
            </button>
            
            <h1 className="text-2xl font-serif text-gray-900">Secure Checkout</h1>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Shield size={16} />
              <span>SSL Secured</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 ? (
              /* Step 1: Order Information */
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-2">Order Information</h2>
                  <p className="text-gray-600">Please provide your details for order pickup</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Security Notice */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-red-900 mb-1">Important Security Notice</h4>
                        <p className="text-sm text-red-800">
                          Violating terms and conditions will result in your account being suspended and loss of café service privileges. 
                          All orders are monitored and verified through school systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Enter your full name as registered in school"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertTriangle size={14} className="mr-1" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Classroom Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-2" />
                      Classroom Number *
                    </label>
                    <input
                      type="text"
                      value={formData.classroomNumber}
                      onChange={(e) => handleInputChange('classroomNumber', e.target.value.toUpperCase())}
                      className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 ${
                        errors.classroomNumber ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="e.g., A231, B105, C342"
                      maxLength={4}
                    />
                    {errors.classroomNumber && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertTriangle size={14} className="mr-1" />
                        {errors.classroomNumber}
                      </p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                      Format: Building letter followed by room number
                    </p>
                  </div>

                  {/* Student Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      School Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.studentEmail}
                      onChange={(e) => handleInputChange('studentEmail', e.target.value.toLowerCase())}
                      className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 ${
                        errors.studentEmail ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="your.name@stu.irvingisd.net"
                    />
                    {errors.studentEmail && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertTriangle size={14} className="mr-1" />
                        {errors.studentEmail}
                      </p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                      Must end with @stu.irvingisd.net or @irvingisd.net
                    </p>
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      value={formData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl resize-none h-24 focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Any dietary restrictions, allergies, or special requests..."
                      maxLength={200}
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      {formData.specialInstructions.length}/200 characters
                    </p>
                  </div>

                  {/* Terms Agreement */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        className="mt-1 h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                      />
                      <div className="text-sm">
                        <p className="text-gray-700">
                          I agree to the <span className="text-gold font-medium">Terms and Conditions</span> and confirm that:
                        </p>
                        <ul className="mt-2 space-y-1 text-gray-600 text-xs">
                          <li>• All information provided is accurate and verifiable</li>
                          <li>• I am a current student or staff member at Jack E. Singley Academy</li>
                          <li>• I understand that misuse may result in loss of café privileges</li>
                          <li>• Orders are for personal pickup only during designated hours</li>
                        </ul>
                      </div>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertTriangle size={14} className="mr-1" />
                        {errors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 rounded-xl font-medium tracking-wider hover:from-black hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    PROCEED TO PAYMENT
                  </button>
                </form>
              </div>
            ) : (
              /* Step 2: Payment */
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-2">Secure Payment</h2>
                  <p className="text-gray-600">Complete your order with secure payment processing</p>
                </div>

                {/* Payment Security Indicators */}
                <div className="flex items-center justify-center space-x-6 mb-8 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center space-x-2 text-green-700">
                    <Shield size={20} />
                    <span className="text-sm font-medium">256-bit SSL</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-700">
                    <Lock size={20} />
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-700">
                    <CreditCard size={20} />
                    <span className="text-sm font-medium">PCI Compliant</span>
                  </div>
                </div>

                {/* Order Confirmation */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-medium text-gray-900 mb-4">Order Confirmation</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Student:</span>
                      <span className="font-medium">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Classroom:</span>
                      <span className="font-medium">{formData.classroomNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{formData.studentEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pickup Method:</span>
                      <span className="font-medium">In-Person at Café</span>
                    </div>
                  </div>
                </div>

                {/* Payment Interface Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center mb-8">
                  <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Secure Payment Processing</h3>
                  <p className="text-gray-500 mb-6">
                    In production, this would integrate with Stripe or similar payment processor
                  </p>
                  
                  <div className="max-w-sm mx-auto space-y-4">
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                      <div className="p-3 border border-gray-300 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <CreditCard size={20} className="text-gray-500" />
                          <span className="text-sm">Credit/Debit Card</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Processing Type</label>
                      <div className="p-3 border border-gray-300 rounded-lg bg-white">
                        <span className="text-sm">Online In-Person Payment</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 border border-gray-300 text-gray-700 py-4 rounded-xl font-medium tracking-wider hover:bg-gray-50 transition-all duration-300"
                  >
                    BACK TO DETAILS
                  </button>
                  
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="flex-1 bg-gradient-to-r from-gold to-yellow-500 text-white py-4 rounded-xl font-medium tracking-wider hover:from-yellow-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING...</span>
                      </div>
                    ) : (
                      `PAY $${finalTotal.toFixed(2)}`
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-serif text-gray-900 mb-6">Order Summary</h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex space-x-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (8.25%):</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Pickup Info */}
              <div className="mt-6 p-4 bg-gold bg-opacity-10 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Pickup Information</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📍 Firebird Café</p>
                  <p>⏰ Ready in 15-20 minutes</p>
                  <p>🎓 Student ID required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;