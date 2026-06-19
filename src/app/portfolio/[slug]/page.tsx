import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  // স্লাগকে হেডলাইন টেক্সটে রূপান্তর করার ফর্মুলা
  const projectTitle = slug.split('-').map(word => word.toUpperCase()).join(' ');

  // 📸 মাল্টিপল ইমেজ লোড করার ডামি গ্যালারি অ্যারে (পরবর্তীতে এটি Sanity CMS থেকে ডাইনামিকালি আসবে)
  const uploadedWorkSamples = [
    { id: 1, label: "Main Concept Asset" },
    { id: 2, label: "Alternative Layout Design" },
    { id: 3, label: "Mobile Responsive Blueprint" },
    { id: 4, label: "Typography & Color System" },
    { id: 5, label: "High-Fidelity Wireframe" },
    { id: 6, label: "Final Production Deliverable" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ব্যাক বাটন */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-neon transition mb-10 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* ক্যাটাগরি হেডার */}
        <div className="mb-14 border-b border-white/5 pb-8">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase">CreativeEdge Production Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-2 uppercase">{projectTitle}</h1>
          <p className="text-gray-400 mt-3 text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Welcome to the official workspace vault for <span className="text-white font-medium">{projectTitle}</span>. Below are the design outputs, assets, and project results delivered to our clients.
          </p>
        </div>

        {/* 🖼️ মাল্টিপল পিকচার ডিসপ্লে করার আপলোডেড গ্যালারি গ্রিড */}
        <div className="mb-16">
          <h3 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-6">Uploaded Work Samples & Deliverables</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploadedWorkSamples.map((sample) => (
              <div 
                key={sample.id} 
                className="group bg-[#12121A] rounded-xl border border-white/5 p-3 overflow-hidden transition hover:border-brand-purple/30 shadow-md"
              >
                {/* ইমেজ ফ্রেম বক্স কন্টেইনার */}
                <div className="w-full aspect-[4/3] bg-[#0B0B0F] rounded-lg border border-white/5 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                  
                  {/* স্যানিটি থেকে লুপ হয়ে আসা ইমেজগুলো এখানে <img src={sample.imageUrl} /> হিসেবে রেন্ডার হবে */}
                  <svg className="w-10 h-10 text-brand-purple/40 mb-3 group-hover:scale-110 transition duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H2.25A1.5 1.5 0 00.75 6v12.25a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  
                  <span className="text-[11px] text-gray-500 font-medium tracking-wide uppercase">{sample.label}</span>
                  <span className="text-[9px] text-gray-600 mt-1">Asset #{sample.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* প্রজেক্ট বিবরণী সেকশন */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-white/5 pt-12">
          <div className="lg:col-span-2 space-y-6 text-left">
            <h3 className="text-xl font-bold tracking-wide uppercase">Project Scope & Specifications</h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              This field renders the dynamic rich text or descriptions mapped directly from your database. When uploading a package of images, you can outline the strategic workflow, production timeline, software tools utilized, and optimization methodologies applied.
            </p>
          </div>

          {/* প্রজেক্ট মেটা প্যানেল */}
          <div className="bg-[#12121A] p-6 rounded-xl border border-white/5 h-fit space-y-5 text-left">
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Expertise Domain</h4>
              <p className="text-sm font-semibold mt-1 text-brand-neon uppercase tracking-wide">{slug.replace('-', ' ')}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">System Integration</h4>
              <p className="text-sm font-medium mt-1">Next.js 15 & Sanity Engine</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}