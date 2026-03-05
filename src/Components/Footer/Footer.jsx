import React from 'react';
import { SiFacebook } from 'react-icons/si';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content p-10">
            {/* Main Footer Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                
                {/* Brand / About Section - Spans 2 columns on large screens for readability */}
                <aside className="lg:col-span-2">
                    <h2 className="footer-title text-xl font-bold mb-4">CS — Ticket System</h2>
                    <p className="max-w-xs opacity-80 leading-relaxed">
                        CS — Ticket System is a modern, high-performance customer support platform 
                        designed to elevate your business’s service standards.
                    </p>
                </aside>

                {/* Company Links */}
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title opacity-50 uppercase font-bold mb-2">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>

                {/* Services Links */}
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title opacity-50 uppercase font-bold mb-2">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>

                {/* Social Links */}
                <nav className="flex flex-col gap-3">
                    <h6 className="footer-title opacity-50 uppercase font-bold mb-2">Social Links</h6>
                    <a className="link link-hover flex items-center gap-3">
                        <SlSocialInstagram className="text-lg" /> @CSTicket
                    </a>
                    <a className="link link-hover flex items-center gap-3">
                        <SlSocialTwitter className="text-lg" /> @CSTicket
                    </a>
                    <a className="link link-hover flex items-center gap-3">
                        <SiFacebook className="text-lg" /> @CSTicket
                    </a>
                    <a className="link link-hover flex items-center gap-3">
                        <SlSocialLinkedin className="text-lg" /> @CSTicket
                    </a>
                </nav>
            </div>

          <hr className="mt-5"></hr>
            <div className="border-t border-base-content/10 mt-10 pt-6 text-center text-sm opacity-60">
                <p>© {new Date().getFullYear()} CS Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;