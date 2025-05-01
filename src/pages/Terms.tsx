
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Conditions d'utilisation</h1>
        <div className="prose dark:prose-invert max-w-none">
          {/* Contenu des conditions d'utilisation */}
          <p>Les conditions d'utilisation d'ASC Dream League Arena...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
