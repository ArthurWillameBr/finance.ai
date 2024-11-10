import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summary-card";
interface SummaryCardsProps {
    month: string
    balance: number
    investmentsTotal: number
    depositsTotal: number
    expensesTotal: number
}

export async function SummaryCards({ balance, depositsTotal, expensesTotal, investmentsTotal }: SummaryCardsProps) {
 
  return (
    <main className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        amount={balance}
        title="Saldo"
        size="large"
      />
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          amount={investmentsTotal}
          title="Investido"
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          amount={depositsTotal}
          title="receita"
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          amount={expensesTotal}
          title="Despesas"
        />
      </div>
    </main>
  );
}