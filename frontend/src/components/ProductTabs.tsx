import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Truck, RotateCcw, FileText } from 'lucide-react';

interface ProductTabsProps {
  description: string;
}

export default function ProductTabs({ description }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="w-full grid grid-cols-3 h-auto bg-gray-100 p-1 rounded-lg">
        <TabsTrigger
          value="description"
          className="flex items-center gap-1.5 text-xs sm:text-sm py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
        >
          <FileText size={14} />
          <span className="hidden sm:inline">Description</span>
          <span className="sm:hidden">Details</span>
        </TabsTrigger>
        <TabsTrigger
          value="shipping"
          className="flex items-center gap-1.5 text-xs sm:text-sm py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
        >
          <Truck size={14} />
          <span className="hidden sm:inline">Shipping Info</span>
          <span className="sm:hidden">Shipping</span>
        </TabsTrigger>
        <TabsTrigger
          value="returns"
          className="flex items-center gap-1.5 text-xs sm:text-sm py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
        >
          <RotateCcw size={14} />
          <span className="hidden sm:inline">Return Policy</span>
          <span className="sm:hidden">Returns</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-5">
        <div className="prose prose-sm max-w-none text-gray-700">
          {description.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return <h4 key={i} className="font-bold text-brand-text mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="ml-4 text-sm">{line.slice(2)}</li>;
            }
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="text-sm leading-relaxed">{line}</p>;
          })}
        </div>
      </TabsContent>

      <TabsContent value="shipping" className="mt-5">
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <Truck size={18} className="text-brand-accent mt-0.5 shrink-0" />
            <div>
              <h4 className="font-bold text-brand-text mb-1">Free Standard Shipping</h4>
              <p>Orders over $50 qualify for free standard shipping (5–7 business days).</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Standard Shipping</span>
              <span>5–7 business days — $4.99</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Express Shipping</span>
              <span>2–3 business days — $9.99</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Overnight Shipping</span>
              <span>Next business day — $19.99</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium">International</span>
              <span>10–15 business days — $14.99</span>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Orders are processed within 1–2 business days. Tracking information will be emailed once your order ships.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="returns" className="mt-5">
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
            <RotateCcw size={18} className="text-green-600 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-bold text-brand-text mb-1">30-Day Free Returns</h4>
              <p>Not satisfied? Return any item within 30 days for a full refund — no questions asked.</p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-brand-text">How to Return:</h4>
            <ol className="list-decimal list-inside space-y-1.5 text-sm">
              <li>Contact our support team at support@synklix.com</li>
              <li>Receive your prepaid return label via email</li>
              <li>Pack the item securely in original packaging</li>
              <li>Drop off at any courier location</li>
              <li>Refund processed within 3–5 business days</li>
            </ol>
          </div>
          <p className="text-xs text-gray-500">
            Items must be in original, unused condition. Damaged or used items may not qualify for a full refund.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
