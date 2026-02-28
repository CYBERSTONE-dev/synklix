import { Zap, Package } from "lucide-react";

interface DeliveryTimeWidgetProps {
  compact?: boolean;
}

export default function DeliveryTimeWidget({ compact = false }: DeliveryTimeWidgetProps) {
  if (compact) {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center gap-2 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-lg px-3 py-2 flex-1">
          <Zap className="w-4 h-4 text-[#4DA6FF] shrink-0" />
          <div>
            <p className="text-xs font-semibold text-[#4DA6FF]">Prepaid Orders</p>
            <p className="text-xs text-gray-600">Delivery in 3–5 Days</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1">
          <Package className="w-4 h-4 text-gray-500 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-700">COD Orders</p>
            <p className="text-xs text-gray-500">Delivery in 5–8 Days</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center gap-3 bg-[#4DA6FF]/10 border-2 border-[#4DA6FF]/40 rounded-xl px-5 py-4 flex-1">
        <div className="w-10 h-10 bg-[#4DA6FF] rounded-full flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#4DA6FF]">🚀 Prepaid Orders</p>
          <p className="text-lg font-bold text-[#111111]">Delivery in 3–5 Days</p>
          <p className="text-xs text-gray-500">Faster processing + Free Shipping</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 flex-1">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
          <Package className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-600">📦 COD Orders</p>
          <p className="text-lg font-bold text-[#111111]">Delivery in 5–8 Days</p>
          <p className="text-xs text-gray-500">Confirmation call required</p>
        </div>
      </div>
    </div>
  );
}
