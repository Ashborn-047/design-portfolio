import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ComponentExample {
  name: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

export default function DesignSystemShowcase() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const components: ComponentExample[] = [
    {
      name: 'New Member Spotlight Button',
      description: 'Call-to-action button for new members to join the community',
      code: `<button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
  ✨ Join the Community
</button>`,
      preview: (
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
          ✨ Join the Community
        </button>
      ),
    },
    {
      name: 'Channel Category Badge',
      description: 'Semantic channel category indicator',
      code: `<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
  <span className="text-lg">👋</span>
  <span className="text-xs font-mono text-blue-300 uppercase">WELCOME</span>
</div>`,
      preview: (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
          <span className="text-lg">👋</span>
          <span className="text-xs font-mono text-blue-300 uppercase">WELCOME</span>
        </div>
      ),
    },
    {
      name: 'Problem/Solution Callout',
      description: 'Highlighted problem and solution cards',
      code: `<div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
  <p className="text-xs font-mono text-red-300 uppercase mb-2">PROBLEM</p>
  <p className="text-sm text-red-200">Users land in chaos with no guidance</p>
</div>`,
      preview: (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-xs font-mono text-red-300 uppercase mb-2">PROBLEM</p>
          <p className="text-sm text-red-200">Users land in chaos with no guidance</p>
        </div>
      ),
    },
    {
      name: 'Solution Callout',
      description: 'Highlighted solution card',
      code: `<div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
  <p className="text-xs font-mono text-green-300 uppercase mb-2">SOLUTION</p>
  <p className="text-sm text-green-200">Progressive disclosure with guided flow</p>
</div>`,
      preview: (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <p className="text-xs font-mono text-green-300 uppercase mb-2">SOLUTION</p>
          <p className="text-sm text-green-200">Progressive disclosure with guided flow</p>
        </div>
      ),
    },
    {
      name: 'Metric Card',
      description: 'Impact metric display with improvement percentage',
      code: `<div className="bg-slate-800/30 border border-white/5 rounded-lg p-6 text-center">
  <p className="text-slate-400 text-sm mb-2">New Member Drop-off</p>
  <div className="flex items-baseline justify-center gap-2">
    <span className="text-3xl font-bold text-emerald-300">-67%</span>
    <span className="text-slate-500">from 68% to 22%</span>
  </div>
</div>`,
      preview: (
        <div className="bg-slate-800/30 border border-white/5 rounded-lg p-6 text-center">
          <p className="text-slate-400 text-sm mb-2">New Member Drop-off</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-3xl font-bold text-emerald-300">-67%</span>
            <span className="text-slate-500">from 68% to 22%</span>
          </div>
        </div>
      ),
    },
    {
      name: 'Role Selection Pill',
      description: 'Interactive role/interest selection component',
      code: `<button className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all">
  👨‍💼 Learning Design
</button>`,
      preview: (
        <button className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all">
          👨‍💼 Learning Design
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {components.map((component, idx) => (
          <div key={idx} className="bg-slate-800/30 border border-white/5 rounded-lg overflow-hidden">
            {/* Preview */}
            <div className="p-8 border-b border-white/5 bg-slate-900/50 flex items-center justify-center min-h-32">
              {component.preview}
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-1">{component.name}</h4>
                <p className="text-xs text-slate-400">{component.description}</p>
              </div>

              {/* Code Block */}
              <div className="bg-slate-900/80 rounded border border-white/5 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-white/5">
                  <span className="text-xs font-mono text-slate-400">JSX / Tailwind</span>
                  <button
                    onClick={() => copyToClipboard(component.code, `code-${idx}`)}
                    className="p-1 hover:bg-slate-700 rounded transition-colors"
                    title="Copy code"
                  >
                    {copiedCode === `code-${idx}` ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs text-slate-300 overflow-x-auto font-mono">
                  <code>{component.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
