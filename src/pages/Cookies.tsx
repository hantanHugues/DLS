
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Politique des cookies</h1>
        <div className="prose dark:prose-invert max-w-none">
          {/* Contenu de la politique des cookies */}
          <p>Notre utilisation des cookies...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
