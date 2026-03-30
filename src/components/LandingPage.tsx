import { motion } from "motion/react";
import { 
  TrendingDown, 
  EyeOff, 
  AlertTriangle, 
  GitBranch, 
  BarChart3, 
  CheckCircle2, 
  Lightbulb, 
  ShieldCheck, 
  Settings, 
  TrendingUp,
  ChevronDown,
  Mail,
  Share2,
  Quote
} from "lucide-react";
import { useState } from "react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container-highest/20">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div className="text-xl font-extrabold tracking-tighter text-primary font-manrope">
        THE EDITORIAL LEDGER
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#servicos" className="text-secondary font-semibold border-b-2 border-secondary transition-colors">Serviços</a>
        <a href="#sobre" className="text-on-surface-variant hover:text-secondary transition-colors">Sobre</a>
        <a href="#faq" className="text-on-surface-variant hover:text-secondary transition-colors">FAQ</a>
        <button className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-container transition-all">
          Falar com Especialista
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 hero-overlay z-10"></div>
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdcKDNXb6F956Ucb_nUSMpFutvToU7UwL9otFA3q8UIFrFdrBypUOJRdjQSKfIbhBUDNvbgIWK3-IGeiTM1oNqaJ7BaRwZp7Mci5jrGyUqQyJW1mHydzPbypwSYeFi6uxtnzXLSCxYvfQaid56T63F71CwA2oKF0ohJzvoRWXII1_EGB6K_-4jkXSgRGHQ6b2IaFRvA6LOakpkUfrOgndGnIMTMkJq7qsS5Ykjb6L38tOqRWVCN8ul0V7VmkBCPXrBVEWM0Zjn0Vo" 
        alt="Office" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-8 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Transforme seu financeiro em uma base sólida para crescer com segurança
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-inter leading-relaxed mb-10 max-w-2xl">
          Tenha clareza total sobre suas finanças, organize sua empresa e tome decisões com confiança — sem complicação e com o suporte de especialistas.
        </p>
        <button className="bg-secondary hover:opacity-90 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg">
          Quero falar com um especialista agora
        </button>
      </motion.div>
    </div>
  </section>
);

const Problems = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Você sente que seu financeiro poderia estar mais organizado?</h2>
        <div className="h-1 w-20 bg-secondary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { icon: TrendingDown, title: "Dificuldade para entender fluxos", desc: "Não saber exatamente para onde o dinheiro está indo ao final de cada mês." },
          { icon: EyeOff, title: "Falta de clareza", desc: "Incerteza sobre a real saúde financeira e sustentabilidade da sua operação." },
          { icon: AlertTriangle, title: "Insegurança estratégica", desc: "Medo de tomar decisões importantes por falta de dados confiáveis." },
          { icon: GitBranch, title: "Processos caóticos", desc: "Rotinas financeiras desorganizadas, manuais e sem nenhum padrão definido." },
          { icon: BarChart3, title: "Sem acompanhamento", desc: "Ausência de um olhar especialista para guiar o crescimento do negócio." }
        ].map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-surface-container-low p-8 rounded-xl transition-all"
          >
            <p.icon className="text-error mb-4 w-8 h-8" />
            <h3 className="font-bold text-xl mb-3 text-primary">{p.title}</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="servicos" className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0V4_qgj-nqaoWuCnyalY4KwYJ_Dtf1TT04sZuMfQ9tzYc4IPBVdMH0gSlujDu_M7S8RADzmEuuREZZ_xAx5CHozsxadNefIiUGjznJMb5WcMinOBXEKx2FfKD962gK0EhHnzKQlXgonlMoELhoaYMkYDDrjp6OI_htHsOm79StZqQjm8uj6EXbDp7YagpUQaDG-c9YdWsOhzDgadReFRjtxi4VZLLkQbUgO6K5zy46o2igWmV24HkyP9SKMu_RQKdWPWtLXBireQ" 
            alt="Analysis" 
            className="rounded-xl shadow-editorial relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-secondary-container p-6 rounded-xl shadow-editorial z-20">
            <div className="flex items-center gap-4">
              <BarChart3 className="text-on-secondary-container w-10 h-10" />
              <div>
                <p className="text-on-secondary-container font-bold text-xl">+45%</p>
                <p className="text-on-secondary-container text-sm">Eficiência Operacional</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">A solução: Contabilidade estratégica e gestão financeira inteligente</h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Nós ajudamos empresas a estruturarem seu financeiro de forma simples, clara e eficiente. Com um acompanhamento próximo e ferramentas modernas, você passa a ter:
          </p>
          <ul className="space-y-4">
            {[
              "Organização completa das suas finanças",
              "Visão clara de entradas e saídas",
              "Planejamento financeiro estruturado",
              "Suporte para decisões mais seguras",
              "Rotinas financeiras bem definidas"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                <span className="text-primary font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">O que você conquista com isso?</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
        {[
          { icon: CheckCircle2, text: "Mais organização no dia a dia" },
          { icon: Lightbulb, text: "Mais clareza sobre seu negócio" },
          { icon: ShieldCheck, text: "Mais segurança nas decisões" },
          { icon: Settings, text: "Mais controle sobre sua empresa" },
          { icon: TrendingUp, text: "Mais tranquilidade para crescer" }
        ].map((b, i) => (
          <div key={i} className="flex flex-col items-center p-6 bg-surface-container-lowest rounded-xl shadow-editorial border-b-4 border-secondary">
            <b.icon className="text-secondary w-10 h-10 mb-4" />
            <p className="font-bold text-primary text-sm md:text-base">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-16">Veja o que nossos clientes dizem</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "João Silva", role: "Empresário", initial: "JS", color: "bg-primary-container text-white", quote: "Hoje consigo entender exatamente como está minha empresa e tomar decisões com muito mais segurança." },
          { name: "Mariana Souza", role: "MEI", initial: "MS", color: "bg-secondary-container text-on-secondary-container", quote: "Antes era tudo bagunçado. Agora tenho controle total e consigo planejar melhor meus próximos passos." }
        ].map((t, i) => (
          <div key={i} className="bg-surface-container-lowest p-10 rounded-xl relative shadow-editorial">
            <Quote className="text-surface-container-highest absolute top-6 right-8 w-12 h-12 opacity-20" />
            <p className="text-xl text-on-surface-variant italic mb-8 relative z-10">“{t.quote}”</p>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${t.color}`}>{t.initial}</div>
              <div>
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-sm text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Como funciona</h2>
        <p className="text-on-surface-variant">Simples, direto e sem burocracia.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: 1, title: "Contato", desc: "Você entra em contato com a gente hoje mesmo." },
          { step: 2, title: "Análise", desc: "Fazemos uma análise profunda da sua situação atual." },
          { step: 3, title: "Estruturação", desc: "Organizamos e estruturamos todo o seu financeiro." },
          { step: 4, title: "Acompanhamento", desc: "Suporte contínuo para manter a saúde do seu negócio." }
        ].map((s, i) => (
          <div key={i} className="text-center group">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
              {s.step}
            </div>
            <h3 className="font-bold text-primary mb-2">{s.title}</h3>
            <p className="text-sm text-on-surface-variant">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DiagnosticCTA = () => (
  <section className="py-20 bg-secondary-container">
    <div className="max-w-5xl mx-auto px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Comece com um diagnóstico gratuito</h2>
      <p className="text-lg text-primary/70 mb-10 max-w-2xl mx-auto">
        Vamos analisar seu financeiro e mostrar exatamente como você pode organizar sua empresa e ter mais clareza nos seus números. Sem compromisso.
      </p>
      <button className="bg-primary text-white px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:bg-primary-container transition-all">
        Quero meu diagnóstico gratuito
      </button>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Preciso trocar de contador?", a: "Não necessariamente. Podemos avaliar sua situação e te orientar da melhor forma, trabalhando em conjunto ou assumindo a gestão completa." },
    { q: "Funciona para MEI?", a: "Sim, atendemos desde MEIs até pequenas e médias empresas que buscam profissionalizar sua gestão financeira." },
    { q: "É complicado implementar?", a: "Não. Nosso processo é desenhado para ser simples e não interromper sua operação. Acompanhamos você em cada etapa da transição." },
    { q: "Quanto tempo leva para ver resultados?", a: "Depende da situação atual, mas você já começa a sentir uma organização maior e ter dados claros logo nas primeiras semanas de implantação." }
  ];

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-16">Perguntas frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface-container-low rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center w-full p-6 text-left font-bold text-primary"
              >
                {faq.q}
                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-on-surface-variant">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-surface-container-low py-16 px-8 border-t border-surface-container-highest/30">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1">
        <div className="text-lg font-extrabold text-primary font-manrope mb-4">THE EDITORIAL LEDGER</div>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
          Strategic Accounting & Financial Consulting for businesses that value precision and growth.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-wider">Serviços</h4>
        <ul className="space-y-3">
          {["Consultoria Financeira", "Contabilidade Estratégica", "BPO Financeiro"].map((link, i) => (
            <li key={i}><a href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">{link}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-wider">Links Úteis</h4>
        <ul className="space-y-3">
          {["Sobre", "FAQ", "Privacy Policy", "Terms of Service"].map((link, i) => (
            <li key={i}><a href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">{link}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-wider">Contato</h4>
        <div className="flex items-center gap-3 mb-4 text-on-surface-variant text-sm">
          <Mail className="w-4 h-4 text-secondary" />
          <span>contato@editorialledger.com</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <Share2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-surface-container-highest/30 text-center text-xs text-on-surface-variant">
      © {new Date().getFullYear()} The Editorial Ledger. Strategic Accounting & Financial Consulting. Todos os direitos reservados.
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <DiagnosticCTA />
      <FAQ />
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Pronto para ter mais controle e segurança no seu financeiro?</h2>
          <p className="text-white/70 text-xl mb-12">Clique no botão abaixo e fale com um especialista agora mesmo.</p>
          <button className="bg-secondary text-white px-12 py-6 rounded-md font-bold text-xl hover:scale-105 transition-all shadow-2xl">
            Quero organizar meu financeiro agora
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
