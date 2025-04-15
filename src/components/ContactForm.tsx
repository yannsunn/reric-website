'use client';

import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

    try {
      // ここに実際のフォーム送信処理を実装
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        name: '',
        email: '',
        message: '',
      }));
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        error: '送信に失敗しました。もう一度お試しください。',
      }));
    }
  };

  if (formState.isSubmitted) {
    return (
      <div className="text-center py-8">
        <p className="text-green-600 font-medium text-lg">
          お問い合わせありがとうございます。<br />
          内容を確認次第、担当者よりご連絡させていただきます。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          value={formState.name}
          onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          value={formState.email}
          onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formState.message}
          onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
          className="input-field"
        />
      </div>

      {formState.error && (
        <p className="text-red-500 text-sm">{formState.error}</p>
      )}

      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
      >
        {formState.isSubmitting ? '送信中...' : '送信する'}
      </button>
    </form>
  );
} 