import { Check } from "lucide-react";

interface ITrustItem {
  title: string;
}

function TrustItem({ title }: ITrustItem) {
  return (
    <div className="flex items-center gap-4">
      <span className="bg-secondary-bg border border-border rounded-full p-2 text-contrast">
        <Check width={20} height={20} />
      </span>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

export default TrustItem;
