import React, { useState } from 'react';
import { X, CreditCard, User, Mail, MapPin } from 'lucide-react';
import { CartState } from '../types/menu';

interface CheckoutFormProps {
  cart: CartState;
  isOpen: boolean;
  onClose: () => void;
  onOrderComplete: () => void;
}

interface FormData {
  fullName: string;
  classroomNumber: string;
  studentEmail: string;
  specialInstructions: string;
}

interface FormErrors {
  fullName?: string;
  classroomNumber?: string;
  studentEmail?: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ cart, isOpen, onClose, onOrderComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    classroomNumber: '',
    studentEmail: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (email: string): boolean => {
    const validDomains = ['@stu.irvingisd.net', '@irvingisd.net'];
    return validDomains.some(domain => email.toLowerCase().endsWith(domain));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.classroomNumber.trim()) {
      newErrors.classroomNumber = 'Classroom number is required';
    }

    if (!formData.studentEmail.trim()) {
      newErrors.studentEmail = 'Student email is required';
    } else if (!validateEmail(formData.studentEmail)) {
      newErrors.studentEmail = 'Email must end with @stu.irvingisd.net or @irvingisd.net';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setShowPayment(true);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with Stripe
      // const response = await processStripePayment(cart.total, formData);
      
      onOrderComplete();
      onClose();
      
      // Reset form
      setFormData({
        fullName: '',
        classroomNumber: '',
        studentEmail: '',
        specialInstructions: ''
      });
      setShowPayment(false);
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const tax = cart.total * 0.0825; // 8.25% tax
  const finalTotal = cart.total + tax;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-300" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-serif">Checkout - Pickup Order</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {!showPayment ? (
              /* Order Information Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    {cart.items.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${cart.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (8.25%):</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <User size={20} className="mr-2" />
                    Customer Information
                  </h3>

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Classroom Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Classroom Number *
                    </label>
                    <input
                      type="text"
                      value={formData.classroomNumber}
                      onChange={(e) => handleInputChange('classroomNumber', e.target.value)}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                        errors.classroomNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., A101, B205"
                    />
                    {errors.classroomNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.classroomNumber}</p>
                    )}
                  </div>

                  {/* Student Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail size={16} className="inline mr-1" />
                      Student Email *
                    </label>
                    <input
                      type="email"
                      value={formData.studentEmail}
                      onChange={(e) => handleInputChange('studentEmail', e.target.value)}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                        errors.studentEmail ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.name@stu.irvingisd.net"
                    />
                    {errors.studentEmail && (
                      <p className="text-red-500 text-sm mt-1">{errors.studentEmail}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                      Must end with @stu.irvingisd.net or @irvingisd.net
                    </p>
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      value={formData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none h-20 text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="Any special requests or dietary restrictions..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-medium tracking-wider hover:bg-gray-800 transition-all duration-300"
                >
                  PROCEED TO PAYMENT
                </button>
              </form>
            ) : (
              /* Payment Section */
              <div className="space-y-6">
                <h3 className="text-lg font-medium flex items-center">
                  <CreditCard size={20} className="mr-2" />
                  Payment Information
                </h3>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Amount:</span>
                    <span className="text-2xl font-bold">${finalTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Pickup for: {formData.fullName} - {formData.classroomNumber}
                  </p>
                </div>

                {/* Payment Form Placeholder */}
                <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg">
                  <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 mb-4">
                    Stripe Payment Integration
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    In a real implementation, this would contain the Stripe payment form
                  </p>
                  
                  {/* Mock Payment Button */}
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="bg-black text-white px-8 py-3 rounded-lg font-medium tracking-wider hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'PROCESSING...' : `PAY $${finalTotal.toFixed(2)}`}
                  </button>
                </div>

                {/* Back Button */}
                <button
                  onClick={() => setShowPayment(false)}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium tracking-wider hover:bg-gray-50 transition-all duration-300"
                >
                  BACK TO ORDER DETAILS
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;