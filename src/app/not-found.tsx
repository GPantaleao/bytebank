import Link from 'next/link';
import { Button } from '@/app/components/atoms/Button';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container p-12 flex flex-col items-center justify-center min-h-[80vh]">
      <main className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-soft border border-gray-100 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 text-red-700 rounded-full p-4">
            <AlertTriangle className="h-12 w-12" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ops! Página não encontrada</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Não conseguimos encontrar a transação ou a página que você está procurando, tente novamente mais tarde.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-12 justify-center">
          <Link href="/" className="flex-1">
            <Button 
              label="Ir para a Home" 
              iconLeft={Home}
              variant="primary"
              className="w-full"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
