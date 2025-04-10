'use client';

import { useState } from 'react';
import { AnimatedButton } from '@/components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name.replace('contact-', '')]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: '送信中...'
    });
    
    try {
      // TODO: 実際のフォーム送信処理を実装
      // 例: await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // });
      
      // デモ用の遅延
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。'
      });
      
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('送信エラー:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: '送信に失敗しました。時間をおいて再度お試しください。'
      });
    }
  };

  return (
    <>
      {formStatus.isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-bold text-green-800 mb-2">送信完了</h3>
          <p className="text-green-700">{formStatus.message}</p>
          <button 
            onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
            className="mt-4 bg-white text-primary border border-primary px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            新しいお問い合わせ
          </button>
        </div>
      ) : (
        <form className="space-y-6" id="contact-form" name="contact-form" onSubmit={handleSubmit}>
          {formStatus.isError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700">{formStatus.message}</p>
            </div>
          )}
          
          <div>
            <label htmlFor="contact-name" className="block text-base font-medium text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="contact-name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full px-4 py-3 text-base border border-mediumGray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="例：山田 太郎"
              disabled={formStatus.isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="contact-email" className="block text-base font-medium text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="contact-email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full px-4 py-3 text-base border border-mediumGray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="例：example@example.com"
              disabled={formStatus.isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="contact-phone" className="block text-base font-medium text-gray-700 mb-2">
              電話番号
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="contact-phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              className="w-full px-4 py-3 text-base border border-mediumGray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="例：090-1234-5678"
              disabled={formStatus.isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="contact-subject" className="block text-base font-medium text-gray-700 mb-2">
              件名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contact-subject"
              name="contact-subject"
              value={formData.subject}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full px-4 py-3 text-base border border-mediumGray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="例：商品について"
              disabled={formStatus.isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="contact-message" className="block text-base font-medium text-gray-700 mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="contact-message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              autoComplete="off"
              className="w-full px-4 py-3 text-base border border-mediumGray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="お問い合わせ内容を入力してください"
              disabled={formStatus.isSubmitting}
            ></textarea>
          </div>
          
          <div className="text-center pt-4">
            <AnimatedButton
              type="submit"
              id="contact-submit"
              name="contact-submit"
              className="btn-primary w-full sm:w-auto px-8 py-3 text-lg font-semibold"
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? '送信中...' : '送信する'}
            </AnimatedButton>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm; 