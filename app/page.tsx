import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4">
      <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-12 max-w-3xl w-full text-center border border-gray-200 space-y-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Personal Finance Visualizer
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
          Seamlessly track expenses, set category-wise budgets, and visualize your spending trends all in one beautiful dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-4">
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              className="w-52 text-base font-medium shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
            >
              Go to Dashboard
            </Button>
          </Link>

          <Link href="/manage-budget" passHref>
            <Button
              variant="outline"
              size="lg"
              className="w-52 text-base font-medium shadow hover:bg-white hover:scale-105 hover:shadow-md transition-transform duration-200"
            >
              Manage Budget
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
