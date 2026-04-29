import { TransactionDetailCard } from "@/app/components/organisms/TransactionDetailCard";

export default function LoadingTransactionDetailPage() {
  return (
    <div className="container p-12">
      <TransactionDetailCard isLoading />
    </div>
  );
}
