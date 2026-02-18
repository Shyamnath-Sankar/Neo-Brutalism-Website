import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { NeoButton } from '../components/NeoButton';

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-neo-yellow flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background Noise */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
            </div>

            <RevealCard className="max-w-3xl w-full bg-white border-8 border-black p-8 md:p-16 shadow-[16px_16px_0px_0px_#000] relative z-10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 md:text-xl font-mono font-bold rotate-2 border-2 border-white">
                    OPEN FREQUENCY
                </div>

                <h1 className="text-6xl md:text-8xl font-black uppercase text-center mb-8 leading-[0.9]">
                    Initialize <br /> <span className="text-neo-blue">Handshake</span>
                </h1>

                <p className="text-xl font-medium text-center mb-12 max-w-xl mx-auto">
                    Ready to build systems that handle reality? Initiating communication protocol. Response latency: {'<'} 24h.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <a href="mailto:hello@jaisamyukth.com" className="group">
                        <div className="bg-neo-white border-4 border-black p-6 flex flex-col items-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                            <Mail size={48} className="mb-4 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase">Email Transmission</span>
                            <span className="text-sm opacity-60">hello@jaisamyukth.com</span>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/jaisamyukth" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="bg-neo-white border-4 border-black p-6 flex flex-col items-center hover:bg-neo-blue hover:text-white transition-colors cursor-pointer">
                            <Linkedin size={48} className="mb-4 group-hover:animate-pulse" />
                            <span className="font-mono font-bold uppercase">Professional Link</span>
                            <span className="text-sm opacity-60">/in/jaisamyukth</span>
                        </div>
                    </a>
                </div>

                <div className="text-center">
                    <p className="font-mono font-bold mb-4 uppercase text-sm text-gray-500">Or find me in the code</p>
                    <a href="https://github.com/jaisamyukth" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-black uppercase text-2xl hover:underline decoration-4 decoration-neo-green">
                        <Github size={32} /> github.com/jaisamyukth
                    </a>
                </div>
            </RevealCard>

            <div className="mt-12 font-mono font-bold text-center opacity-40">
                // END OF TRANSMISSION
            </div>
        </div>
    );
};
