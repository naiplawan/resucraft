'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FileText,
  Palette,
  Download,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
  MousePointerClick,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-canva-gradient flex items-center justify-center">
              <FileText className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold">ResuCraft</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          </nav>
          <Link href="/builder">
            <Button>
              Create Resume
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00c4cc]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
              <Sparkles size={16} className="text-primary" />
              Free & No signup required
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Create stunning resumes
              <span className="text-canva-gradient block mt-2">in minutes</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Design professional resumes with beautiful templates.
              No design skills needed. Just fill in your details and download.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/builder">
                <Button size="xl" className="w-full sm:w-auto shadow-canva-purple">
                  Start creating for free
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Button size="xl" variant="outline" className="w-full sm:w-auto">
                <MousePointerClick size={20} />
                See templates
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#01c38d]" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#01c38d]" />
                <span>No account needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#01c38d]" />
                <span>Download as PDF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to land your dream job
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional tools that make resume building simple, fast, and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <Card className="group hover-lift border-0 shadow-canva-md">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Beautiful Templates</h3>
                <p className="text-muted-foreground">
                  Choose from professionally designed templates. Modern, classic, minimal, or creative styles.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="group hover-lift border-0 shadow-canva-md">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00c4cc]/20 to-[#00c4cc]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="text-[#00c4cc]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Create a professional resume in under 10 minutes. Real-time preview as you type.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="group hover-lift border-0 shadow-canva-md">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff6b6b]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Download className="text-[#ff6b6b]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Export Anywhere</h3>
                <p className="text-muted-foreground">
                  Download your resume as PDF or PNG. Perfect for job applications and LinkedIn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three simple steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From blank page to job-ready resume in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-canva-gradient text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-canva-purple">
                  1
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick a template</h3>
              <p className="text-muted-foreground">
                Choose from our curated collection of professional templates
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-canva-gradient text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-canva-purple">
                  2
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fill your details</h3>
              <p className="text-muted-foreground">
                Add your experience, education, skills and more
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-canva-gradient text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-canva-purple">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download & apply</h3>
              <p className="text-muted-foreground">
                Export as PDF and start landing interviews
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link href="/builder">
              <Button size="xl" className="shadow-canva-purple">
                Create your resume now
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed by professionals, loved by hiring managers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Modern', 'Classic', 'Minimal', 'Creative'].map((template, index) => (
              <div key={template} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-2xl bg-white border-2 border-border shadow-canva overflow-hidden transition-all duration-300 group-hover:shadow-canva-lg group-hover:border-primary/50 group-hover:-translate-y-2">
                  <div className="h-full p-4 flex flex-col">
                    <div className={`h-3 w-16 rounded-full mb-3 ${
                      index === 0 ? 'bg-primary' :
                      index === 1 ? 'bg-[#00c4cc]' :
                      index === 2 ? 'bg-foreground' :
                      'bg-gradient-to-r from-primary to-[#00c4cc]'
                    }`} />
                    <div className="space-y-2 flex-1">
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted rounded" />
                      <div className="h-2 w-5/6 bg-muted rounded" />
                      <div className="h-2 w-2/3 bg-muted rounded" />
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 font-medium">{template}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} className="fill-[#ffc233] text-[#ffc233]" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-6">
              &ldquo;I created my resume in less than 15 minutes and got called for 3 interviews the same week!&rdquo;
            </blockquote>
            <p className="text-muted-foreground">— Happy ResuCraft user</p>
          </div>
        </div>
      </section>

      {/* Privacy Banner */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
              <Shield className="text-[#01c38d]" size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Your privacy matters</h3>
              <p className="text-muted-foreground">
                All your data stays in your browser. We never store your personal information on our servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-canva-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to land your dream job?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who created stunning resumes with ResuCraft
          </p>
          <Link href="/builder">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              Start creating for free
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-canva-gradient flex items-center justify-center">
                <FileText className="text-white" size={16} />
              </div>
              <span className="font-semibold">ResuCraft</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
