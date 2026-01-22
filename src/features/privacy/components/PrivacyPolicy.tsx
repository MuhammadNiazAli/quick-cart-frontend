import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 mt-10 -mb-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p>
        At <strong>QuickCart</strong>, your privacy is important to us. This Privacy Policy
        explains how we collect, use, and protect your personal information when you use
        our website and services.
      </p>

      <h2 className="text-2xl font-semibold">Information We Collect</h2>
      <ul className="list-disc list-inside">
        <li>Personal information such as your name, email address, phone number, and shipping address.</li>
        <li>Account information when you sign up, including login credentials.</li>
        <li>Payment information processed securely through third-party providers.</li>
        <li>Usage data such as pages visited, products viewed, and browsing patterns.</li>
      </ul>

      <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
      <ul className="list-disc list-inside">
        <li>To process and fulfill your orders efficiently.</li>
        <li>To improve and personalize your shopping experience.</li>
        <li>To communicate with you regarding updates, offers, or support.</li>
        <li>To comply with legal obligations and prevent fraudulent activities.</li>
      </ul>

      <h2 className="text-2xl font-semibold">Data Sharing & Security</h2>
      <p>
        We do not sell or rent your personal information to third parties. We may share
        data with trusted service providers who assist in operating our website, processing
        payments, or delivering products, all under strict confidentiality agreements.
      </p>
      <p>
        We implement appropriate security measures to protect your data from unauthorized
        access, alteration, or disclosure. However, no method of transmission over the
        Internet is completely secure.
      </p>

      <h2 className="text-2xl font-semibold">Cookies & Tracking</h2>
      <p>
        QuickCart uses cookies and similar technologies to enhance user experience,
        analyze traffic, and provide personalized content. You can manage cookies through
        your browser settings.
      </p>

      <h2 className="text-2xl font-semibold">Your Rights</h2>
      <p>
        You have the right to access, update, or request deletion of your personal
        information. To exercise these rights, please contact us at{' '}
        <a href="mailto:mrniazali132@gmail.com" className="text-blue-600 underline">
          mrniazali132@gmail.com
        </a>.
      </p>

      <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Changes will be posted on this
        page with an updated effective date.
      </p>

      <p className="text-sm text-gray-500">
        Effective Date: January 21, 2026
      </p>
    </div>
  )
}

export default PrivacyPolicy
