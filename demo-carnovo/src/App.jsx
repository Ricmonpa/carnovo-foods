import React, { useState, useEffect } from 'react';
import { Facebook, Cpu, MessageSquare, Phone, ArrowRight, CheckCircle2, Database } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  // Auto-advance scanning animation in Step 2
  useEffect(() => {
    if (step === 1) {
      setIsScanning(true);
      const timer = setTimeout(() => setIsScanning(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cpu className="text-emerald-400" size={28} />
          <h1 className="text-xl font-bold tracking-tight">Agente de Captación <span className="text-emerald-400">Carnovo</span></h1>
        </div>
        <div className="text-sm font-medium bg-slate-800 py-1 px-3 rounded-full border border-slate-700">
          Demo Interactiva para Salvador
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full p-4 md:p-8 gap-8">
        
        {/* Left Panel: Explanation / Presenter Notes */}
        <div className="w-full md:w-1/3 flex flex-col space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">El Flujo de Ventas</h2>
            <p className="text-slate-600 mb-6">Así es como convertimos el caos de las redes sociales en prospectos listos para tu equipo comercial.</p>
            
            {/* Stepper Navigation */}
            <div className="space-y-4">
              <div 
                className={`flex items-start p-3 rounded-lg border-2 transition-all cursor-pointer ${step === 0 ? 'border-blue-500 bg-blue-50' : 'border-transparent hover:bg-slate-100'}`}
                onClick={() => setStep(0)}
              >
                <div className={`p-2 rounded-full mr-3 ${step === 0 ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  <Facebook size={20} />
                </div>
                <div>
                  <h3 className={`font-semibold ${step === 0 ? 'text-blue-900' : 'text-slate-700'}`}>1. El Origen (El Caos)</h3>
                  <p className="text-sm text-slate-500">Un cliente potencial publica una necesidad en un grupo a cualquier hora.</p>
                </div>
              </div>

              <div 
                className={`flex items-start p-3 rounded-lg border-2 transition-all cursor-pointer ${step === 1 ? 'border-emerald-500 bg-emerald-50' : 'border-transparent hover:bg-slate-100'}`}
                onClick={() => setStep(1)}
              >
                <div className={`p-2 rounded-full mr-3 ${step === 1 ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className={`font-semibold ${step === 1 ? 'text-emerald-900' : 'text-slate-700'}`}>2. El Cerebro (La IA)</h3>
                  <p className="text-sm text-slate-500">Carnovo detecta, lee, extrae y categoriza los datos automáticamente.</p>
                </div>
              </div>

              <div 
                className={`flex items-start p-3 rounded-lg border-2 transition-all cursor-pointer ${step === 2 ? 'border-purple-500 bg-purple-50' : 'border-transparent hover:bg-slate-100'}`}
                onClick={() => setStep(2)}
              >
                <div className={`p-2 rounded-full mr-3 ${step === 2 ? 'bg-purple-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  <Database size={20} />
                </div>
                <div>
                  <h3 className={`font-semibold ${step === 2 ? 'text-purple-900' : 'text-slate-700'}`}>3. El Cierre (Kommo CRM)</h3>
                  <p className="text-sm text-slate-500">El prospecto aparece ordenado en tu embudo, listo para que un vendedor llame.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-auto bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <button 
              onClick={prevStep} 
              disabled={step === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${step === 0 ? 'text-slate-400 bg-slate-100 cursor-not-allowed' : 'text-slate-700 bg-slate-200 hover:bg-slate-300'}`}
            >
              Anterior
            </button>
            <button 
              onClick={nextStep} 
              disabled={step === 2}
              className={`px-6 py-2 rounded-lg font-medium flex items-center text-white transition-colors ${step === 2 ? 'bg-emerald-300 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 shadow-md'}`}
            >
              Siguiente <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Right Panel: Interactive Visualization */}
        <div className="w-full md:w-2/3 bg-slate-200 rounded-3xl p-4 md:p-8 flex items-center justify-center shadow-inner relative overflow-hidden h-[600px]">
          
          {/* STEP 1: FACEBOOK CAOS */}
          {step === 0 && (
            <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden animate-fade-in">
              <div className="bg-[#1877F2] text-white p-3 flex items-center justify-between">
                <div className="flex items-center font-bold">
                  <Facebook className="mr-2" size={24} /> Facebook
                </div>
              </div>
              <div className="p-4 bg-slate-100 h-96 overflow-y-auto">
                {/* Fake previous post */}
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4 opacity-50">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-bold text-sm">Juan Pérez</h4>
                      <p className="text-xs text-slate-500">Ayer a las 14:30</p>
                    </div>
                  </div>
                  <p className="text-sm">Alguien sabe a cómo está el kilo de pollo hoy?</p>
                </div>

                {/* TARGET POST */}
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 relative">
                  <div className="absolute -left-3 -top-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg">
                    ¡Oportunidad Perdida!
                  </div>
                  <div className="flex items-center mb-2 mt-2">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full mr-3 flex items-center justify-center text-white font-bold">AG</div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800">Alejandro Garcia</h4>
                      <p className="text-xs text-slate-500">Mercado de Carnes MONTERREY • Ayer a las 9:30 a. m.</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-800 font-medium">Busco proveedor de labio excel o nacional y pescuezo praderas o algo similar?</p>
                  <p className="text-sm text-blue-600 mt-2 font-semibold">📞 8123642003</p>
                  <div className="flex text-slate-500 mt-4 border-t pt-2 text-sm justify-between px-2">
                    <span className="flex items-center hover:bg-slate-100 p-1 rounded"><MessageSquare size={16} className="mr-1"/> Comentar</span>
                  </div>
                </div>

                {/* Fake next post */}
                <div className="bg-white p-4 rounded-lg shadow-sm mt-4 opacity-50">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-bold text-sm">Meme Carnicero</h4>
                    </div>
                  </div>
                  <p className="text-sm">😂 Cuando te piden fiado...</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SCRAPER DASHBOARD */}
          {step === 1 && (
            <div className="bg-[#0f172a] w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden text-slate-300 animate-fade-in font-mono border border-slate-700">
              <div className="border-b border-slate-800 p-4 flex items-center justify-between bg-[#1e293b]">
                <div className="flex items-center text-emerald-400 font-bold">
                  <Cpu className="mr-2" size={20} /> Carnovo IA Dashboard
                </div>
                <div className="flex items-center text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Sistema Activo
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white font-sans text-xl mb-4 font-semibold flex items-center">
                  Monitoreo de Solicitudes <span className="ml-3 text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full border border-amber-500/30">Nuevos Detectados</span>
                </h3>

                <div className="bg-[#1e293b] rounded-lg border border-slate-700 overflow-hidden">
                  {/* Table Header */}
                  <div className="grid grid-cols-5 text-xs font-semibold text-slate-400 p-3 border-b border-slate-700 bg-[#0f172a]">
                    <div>FECHA</div>
                    <div>CATEGORÍA</div>
                    <div className="col-span-2">EXTRACCIÓN IA</div>
                    <div>CONTACTO</div>
                  </div>
                  
                  {/* Table Body */}
                  <div className="divide-y divide-slate-800">
                    
                    {/* The Target Data Row */}
                    <div className={`grid grid-cols-5 p-3 items-center text-sm transition-all duration-500 ${isScanning ? 'bg-indigo-900/40' : 'bg-emerald-900/20'}`}>
                      <div className="text-slate-400 text-xs">Hoy, 06:03 p.m.</div>
                      <div>
                        {isScanning ? (
                          <span className="text-slate-500 italic animate-pulse">Analizando...</span>
                        ) : (
                          <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs border border-emerald-500/30 font-bold">Bovino</span>
                        )}
                      </div>
                      <div className="col-span-2 text-slate-300 pr-4">
                        {isScanning ? (
                          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                            <div className="bg-indigo-500 h-1.5 rounded-full w-full animate-scan origin-left"></div>
                          </div>
                        ) : (
                          <span>Busca proveedor de <strong className="text-white">labio excel</strong> o nacional y <strong className="text-white">pescuezo praderas</strong></span>
                        )}
                      </div>
                      <div className="flex items-center font-bold text-white">
                        {isScanning ? (
                          <span className="text-slate-600">---</span>
                        ) : (
                          <><Phone size={14} className="mr-1 text-slate-400"/> 8123642003</>
                        )}
                      </div>
                    </div>

                    {/* Previous Data Row */}
                    <div className="grid grid-cols-5 p-3 items-center text-sm bg-transparent opacity-60">
                      <div className="text-slate-500 text-xs">Ayer, 04:21 p.m.</div>
                      <div><span className="bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded text-xs border border-emerald-500/20">Bovino</span></div>
                      <div className="col-span-2 text-slate-400">Busca tripa de res o novillo por mayoreo</div>
                      <div className="text-slate-500 text-xs">Sin contacto</div>
                    </div>
                  </div>
                </div>

                {!isScanning && (
                  <div className="mt-6 flex justify-end animate-fade-in-up">
                    <div className="bg-indigo-600 text-white text-sm px-4 py-2 rounded shadow-lg flex items-center font-sans">
                      <CheckCircle2 size={16} className="mr-2"/> Datos inyectados a Kommo
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: KOMMO CRM */}
          {step === 2 && (
            <div className="bg-white w-full max-w-4xl h-full rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in border border-slate-200">
              <div className="border-b border-slate-200 p-3 flex items-center bg-slate-50">
                <div className="font-bold text-xl text-slate-800 flex items-center">
                  <span className="text-blue-600 mr-1 text-2xl font-black">K</span>ommo
                </div>
                <div className="ml-8 font-medium text-slate-600 border-b-2 border-blue-500 pb-1">Embudo de ventas</div>
              </div>
              
              <div className="flex-grow bg-[#f5f7fa] p-6 flex gap-4 overflow-x-auto">
                
                {/* Column 1: NUEVA CONSULTA */}
                <div className="w-80 flex-shrink-0">
                  <div className="border-t-4 border-blue-400 bg-white p-3 rounded-t-lg shadow-sm mb-2 flex justify-between items-center">
                    <span className="font-bold text-xs text-slate-700 tracking-wider">NUEVA CONSULTA</span>
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">1 lead: $0</span>
                  </div>
                  
                  {/* Lead Card */}
                  <div className="bg-white p-4 rounded-lg shadow border border-slate-200 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-blue-600 group-hover:underline">Alejandro Garcia</h4>
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">BOVINO</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-slate-700 flex items-start">
                        <MessageSquare size={14} className="mt-1 mr-2 text-slate-400 flex-shrink-0"/>
                        <p className="line-clamp-2 leading-tight">Busca proveedor de labio excel o nacional y pescuezo praderas o algo similar</p>
                      </div>
                      <div className="text-sm text-slate-600 flex items-center bg-slate-50 p-1 rounded border border-slate-100">
                        <Phone size={14} className="mr-2 text-blue-500"/>
                        <span className="font-medium">8123 642 003</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white text-[8px] flex items-center justify-center font-bold text-slate-600">RM</div>
                      </div>
                      <button className="text-xs bg-emerald-50 text-emerald-600 font-bold px-3 py-1 rounded hover:bg-emerald-100 transition-colors">
                        Llamar ahora
                      </button>
                    </div>
                  </div>
                </div>

                {/* Column 2: CUALIFICADO */}
                <div className="w-80 flex-shrink-0 opacity-50">
                  <div className="border-t-4 border-emerald-400 bg-white p-3 rounded-t-lg shadow-sm mb-2 flex justify-between items-center">
                    <span className="font-bold text-xs text-slate-700 tracking-wider">CUALIFICADO</span>
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">0 leads</span>
                  </div>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg h-24 flex items-center justify-center text-slate-400 text-sm">
                    Mover lead aquí
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0% { transform: scaleX(0); opacity: 1; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.4s ease-out forwards; }
        .animate-scan { animation: scan 1.5s ease-in-out infinite; }
      `}} />
    </div>
  );
}
