"use client";

import { useState } from "react";
import { contactData } from "@/data/portfolio";

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.target);

        try {
            await fetch(contactData.contactForm.action, {
                method: "POST",
                mode: "no-cors",
                body: formData,
            });
            setStatus("success");
            e.target.reset();
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className="py-24 px-8 lg:px-20 bg-forest text-cream" id="contact">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-7xl lg:text-9xl font-serif font-bold uppercase tracking-tighter mb-8 leading-none">
                    Get in <br /> touch
                </h2>

                <p className="text-xl lg:text-2xl font-sans opacity-60 max-w-2xl mb-16 leading-relaxed">
                    Let&apos;s build something beautiful together. Reach out for collabs or just a chat!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-start">
                    {/* Contact Info & Socials */}
                    <div className="space-y-12 text-left">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-serif font-bold text-mustard uppercase italic">Email</h3>
                            <a href={`mailto:${contactData.email}`} className="text-4xl lg:text-5xl font-serif font-medium hover:text-mustard transition-colors break-all">
                                {contactData.email}
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-3xl font-serif font-bold text-mustard uppercase italic">Socials</h3>
                            <div className="flex flex-wrap gap-8">
                                {contactData.socials.map((social, index) => (
                                    <a
                                        key={index}
                                        className="text-2xl font-sans font-bold hover:text-mustard transition-colors border-b-2 border-transparent hover:border-mustard pb-1"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            {/* Hidden Fields for Google Form */}
                            {contactData.contactForm.hiddenFields && Object.entries(contactData.contactForm.hiddenFields).map(([name, value]) => (
                                <input key={name} type="hidden" name={name} value={value} />
                            ))}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 text-left relative group">
                                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest opacity-60 group-focus-within:text-mustard transition-colors duration-300">Name</label>
                                    <input
                                        id="name"
                                        name={contactData.contactForm.fieldIds.name}
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b border-cream/20 py-4 focus:outline-none text-xl font-serif text-cream placeholder-cream/20"
                                        placeholder="Your Name"
                                    />
                                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mustard group-focus-within:w-full transition-all duration-500"></span>
                                </div>
                                <div className="space-y-2 text-left relative group">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest opacity-60 group-focus-within:text-mustard transition-colors duration-300">Email</label>
                                    <input
                                        id="email"
                                        name={contactData.contactForm.fieldIds.email}
                                        type="email"
                                        required
                                        className="w-full bg-transparent border-b border-cream/20 py-4 focus:outline-none text-xl font-serif text-cream placeholder-cream/20"
                                        placeholder="your@email.com"
                                    />
                                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mustard group-focus-within:w-full transition-all duration-500"></span>
                                </div>
                            </div>
                            <div className="space-y-2 text-left relative group">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest opacity-60 group-focus-within:text-mustard transition-colors duration-300">Message</label>
                                <textarea
                                    id="message"
                                    name={contactData.contactForm.fieldIds.message}
                                    rows="1"
                                    required
                                    className="w-full bg-transparent border-b border-cream/20 py-4 focus:outline-none text-xl font-serif text-cream resize-none overflow-hidden placeholder-cream/20"
                                    placeholder="Write something nice..."
                                    onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }}
                                ></textarea>
                                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mustard group-focus-within:w-full transition-all duration-500"></span>
                            </div>
                            <div aria-live="polite">
                                <button
                                    className="w-full lg:w-max bg-mustard text-black font-bold py-6 px-16 rounded-badge text-lg hover:opacity-90 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={status === "submitting" || status === "success"}
                                >
                                    {status === "submitting" ? "Sending..." :
                                     status === "success" ? "Sent Successfully!" :
                                     status === "error" ? "Error Sending" : "Send Message"}
                                    <span className="material-icons" aria-hidden="true">
                                        {status === "success" ? "check" :
                                         status === "error" ? "error_outline" : "east"}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
