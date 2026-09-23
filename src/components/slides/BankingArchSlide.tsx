import React, { useState } from 'react';
import { 
  User, 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  ArrowRight, 
  ShieldAlert, 
  ShieldCheck, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { SlideData } from '../../types';

interface SlideProps {
  slide: SlideData;
  currentStep: number;
}

export const BankingArchSlide: React.FC<SlideProps> = ({ slide, currentStep }) => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const isRevealed = currentStep >= 1;

  const nodes = [
    {
      id: 0,
      name: 'Client App',
      sub: 'Mobile / Browser Device',
      icon: Smartphone,
      threat: 'Phone Malware, Fake Clones, Insecure Cache Storage',
      defense: 'App Sandboxing, Root/Jailbreak Detection, Biometric Login'
    },
    {
      id: 1,
      name: 'Network Wire',
      sub: 'Encrypted Internet Transit',
      icon: Globe,
      threat: 'Man-in-the-Middle (MITM), Rogue Public Wi-Fi Sniffing',
      defense: 'TLS 1.3 Encryption, SSL Certificate Pinning'
    },
    {
      id: 2,
      name: 'Bank Server',
      sub: 'Backend API & Processing',
      icon: Server,
      threat: 'API Logic Abuse, Broken Object Level Auth (BOLA)',
      defense: 'Strict Server Input Validation, WAF, Least Privilege'
    },
    {
      id: 3,
      name: 'Database Vault',
      sub: 'Accounts & Ledger Vault',
      icon: Database,
      threat: 'SQL Injection, Data Exfiltration, Unauthorized Access',
      defense: 'Parameterized Queries, Encryption at Rest, Restricted Access'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 py-4">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-2">
          <span>4-TIER BANKING ARCHITECTURE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Banking Application Example
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          Customer thodra screen-la irundhu bank database varaikkum data epdi pogudhu?
        </p>
      </div>

      {/* Main Architecture Diagram */}
      <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-sm mb-4">
        {/* Nodes Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <div
                key={node.id}
                id={`banking-node-${node.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedNode(isSelected ? null : node.id)}
                className={`group relative p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col items-center text-center ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 ring-2 ring-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : isRevealed
                    ? 'bg-slate-950/80 border-red-500/30 hover:border-red-400/60'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Node Number */}
                <div className="absolute top-2 left-2 text-[10px] font-mono font-bold text-slate-500">
                  0{i + 1}
                </div>

                {/* Node Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950'
                    : isRevealed
                    ? 'bg-red-950/50 text-red-400 border border-red-500/30 group-hover:border-red-500/60'
                    : 'bg-slate-900 text-cyan-400 border border-slate-800'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {node.name}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mb-1.5">
                  {node.sub}
                </div>

                {isRevealed && (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-500/30 font-medium">
                    Attack Surface
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Connecting Flow Indicator below cards */}
        <div className="hidden lg:flex items-center justify-between px-6 mt-3 text-slate-600 text-xs font-mono">
          <span>01. Client Boundary</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-500/50" />
          <span>02. TLS 1.3 Wire</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-500/50" />
          <span>03. Backend Logic</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-500/50" />
          <span>04. Vault Storage</span>
        </div>
      </div>

      {/* Reveal Banner / Node Inspector */}
      <div className="min-h-[100px]">
        {selectedNode !== null ? (
          <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/40 animate-in fade-in flex items-start gap-4">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                Node Focus: {nodes[selectedNode].name} ({nodes[selectedNode].sub})
              </div>
              <div className="text-xs text-red-300 mb-1">
                <strong>Potential Threats:</strong> {nodes[selectedNode].threat}
              </div>
              <div className="text-xs text-emerald-300">
                <strong>Cyber Defense Countermeasure:</strong> {nodes[selectedNode].defense}
              </div>
            </div>
          </div>
        ) : !isRevealed ? (
          <div className="p-4 rounded-xl bg-slate-900/60 border border-dashed border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  Core Architectural Question:
                </h4>
                <p className="text-xs text-cyan-300">
                  “Idhula security enga varudhu?”
                </p>
              </div>
            </div>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              Click 'Step' to inspect security layers
            </span>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-slate-900 to-cyan-950/40 border border-red-500/40 flex items-start gap-3.5 animate-in fade-in">
            <div className="p-2 rounded-lg bg-red-950 text-red-400 border border-red-500/30 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                System Security Reality
              </div>
              <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                Security-nu sonna oru antivirus-o firewall-o mattum illa. <strong>Security ovvoru single layer-layum irukanum</strong>—user mind-la irundhu phone, public network, server code, kadaisiya database varaikkum ella idathulayum security thevai!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
