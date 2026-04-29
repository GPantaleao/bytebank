import { TransactionDetailCard } from "@/app/components/organisms/TransactionDetailCard";
import { notFound } from "next/navigation";
import { transactionService } from "@/services/transactionService";

export default async function TransactionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await transactionService.getById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="container p-12">
      <TransactionDetailCard 
        transaction={data}
      />
    </div>
  );
}