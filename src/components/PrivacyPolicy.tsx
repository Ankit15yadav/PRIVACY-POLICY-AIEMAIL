'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Cookie, User, Share2, Baby, Lock, Globe, RefreshCw, Phone } from 'lucide-react'

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
        className="inline-block mr-2 text-blue-500 dark:text-blue-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
)

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <motion.section
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <IconWrapper>{icon}</IconWrapper>
            {title}
        </h2>
        {children}
    </motion.section>
)

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mt-5 mx-auto p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
            <motion.h1
                className="text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Privacy Policy
            </motion.h1>
            <p className="mb-4 text-center">Last Updated: October 27, 2024</p>

            <Section title="Introduction" icon={<Shield size={24} />}>
                <p>Welcome to Email AI Assistant. We are committed to protecting and respecting your privacy. This policy explains how we collect, use, disclose, and protect your information when you use our AI-powered email management service.</p>
            </Section>

            <Section title="Information We Collect" icon={<Mail size={24} />}>
                <ul className="list-disc pl-6 mb-2 space-y-2">
                    <li><strong>Personal Information:</strong> We collect information such as your name, email address, and payment details when you sign up for our service.</li>
                    <li><strong>Email Data:</strong> Through our integration with aurinko.io, we access and process your email data to provide our AI-assisted email management services.</li>
                    <li><strong>Non-Personal Information:</strong> We may collect data such as IP addresses, device information, and usage statistics.</li>
                    <li><strong>Cookies:</strong> We use cookies to improve user experience and analyze our website traffic.</li>
                </ul>
            </Section>

            <Section title="How We Use the Information" icon={<User size={24} />}>
                <p>We use the information to:</p>
                <ul className="list-disc pl-6 mb-2 space-y-2">
                    <li>Provide and maintain our AI-powered email management services.</li>
                    <li>Process transactions and manage your account.</li>
                    <li>Analyze and improve your email composition and responses using AI.</li>
                    <li>Communicate with you about our services, updates, and support.</li>
                    <li>Enhance and personalize your user experience.</li>
                    <li>Comply with legal obligations.</li>
                </ul>
            </Section>

            <Section title="How We Share the Information" icon={<Share2 size={24} />}>
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 mb-2 space-y-2">
                    <li>With aurinko.io to facilitate email access and management.</li>
                    <li>With service providers who assist us in delivering our services (e.g., cloud storage providers, payment processors).</li>
                    <li>If required by law or to protect our rights or the rights of others.</li>
                </ul>
            </Section>

            <Section title="How We Protect the Information" icon={<Lock size={24} />}>
                <p>We implement industry-standard security measures to protect your data, including encryption, access controls, and regular security audits. We retain your data only as long as necessary to provide our services or as required by law.</p>
            </Section>

            <Section title="Your Rights" icon={<User size={24} />}>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mb-2 space-y-2">
                    <li>Access, update, or delete your personal information.</li>
                    <li>Opt-out of marketing communications.</li>
                    <li>Request a copy of your data.</li>
                    <li>Revoke access to your email account through aurinko.io at any time.</li>
                </ul>
            </Section>

            <Section title="AI and Data Processing" icon={<Cookie size={24} />}>
                <p>Our service uses artificial intelligence to analyze and process your emails. This includes:</p>
                <ul className="list-disc pl-6 mb-2 space-y-2">
                    <li>Automated email composition and suggestions.</li>
                    <li>AI-powered email analysis and categorization.</li>
                    <li>Smart reply generation.</li>
                </ul>
                <p>While we strive for accuracy, please be aware that AI-generated content may not always be perfect and should be reviewed before sending.</p>
            </Section>

            <Section title="Children's Privacy" icon={<Baby size={24} />}>
                <p>Our service is not intended for children under 13. We do not knowingly collect or maintain information from children under 13.</p>
            </Section>

            <Section title="International Data Transfers" icon={<Globe size={24} />}>
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in compliance with applicable laws.</p>
            </Section>

            <Section title="Changes to This Policy" icon={<RefreshCw size={24} />}>
                <p>We may update this policy to reflect changes in our practices or for legal reasons. We will notify you of any significant changes.</p>
            </Section>

            <Section title="Contact Information" icon={<Phone size={24} />}>
                <p>For questions or concerns about this privacy policy or our data practices, please contact us at:</p>
                <p className="font-semibold">yadavankit97620@gmail.com</p>
            </Section>
        </div>
    )
}

export default PrivacyPolicy