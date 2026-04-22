"use client";

import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, RefreshCcw } from "lucide-react";
import { Button } from "@/app/components/atoms/Button";
import { useEffect } from "react";

interface TransactionDetailErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void
}

export default function TransactionDetailError({
  error,
  unstable_retry,
}: TransactionDetailErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container p-12">
      <main className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-soft border border-red-100">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 text-red-700 rounded-full p-2">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Não foi possível carregar a transação</h1>
            <p className="mt-2 text-gray-600">
              Parece que houve um problema de conexão com o servidor. Tente novamente em instantes.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-12">
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => unstable_retry()}
            label="Tentar novamente"
            iconLeft={RefreshCcw}
          />
          <Button
            variant="default"
            outline
            className="flex-1"
            onClick={() => router.push("/extrato")}
            label="Voltar para extrato"
            iconLeft={ArrowLeft}
          />
        </div>
      </main>
    </div>
  );
}
