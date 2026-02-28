import { useEffect, useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const mockData = [
  { name: 'Rahul', city: 'Delhi' },
  { name: 'Priya', city: 'Mumbai' },
  { name: 'Amit', city: 'Bangalore' },
  { name: 'Sneha', city: 'Chennai' },
  { name: 'Vikram', city: 'Hyderabad' },
  { name: 'Anjali', city: 'Pune' },
  { name: 'Rohit', city: 'Kolkata' },
  { name: 'Meera', city: 'Jaipur' },
  { name: 'Arjun', city: 'Ahmedabad' },
  { name: 'Kavya', city: 'Surat' },
];

const timeAgo = ['just now', '1 min ago', '2 mins ago', '3 mins ago', '5 mins ago'];

export default function RecentlyPurchasedToast() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(mockData[0]);
  const [time, setTime] = useState(timeAgo[0]);

  useEffect(() => {
    const showToast = () => {
      const randomPerson = mockData[Math.floor(Math.random() * mockData.length)];
      const randomTime = timeAgo[Math.floor(Math.random() * timeAgo.length)];
      setCurrent(randomPerson);
      setTime(randomTime);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 4000);
    };

    // First appearance after 5s
    const initialTimer = setTimeout(showToast, 5000);

    // Repeat every 30s
    const interval = setInterval(showToast, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex items-center gap-3 max-w-xs">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
          <ShoppingBag size={18} className="text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-brand-black">
            {current.name} from {current.city}
          </p>
          <p className="text-xs text-gray-500">just purchased this item · {time}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-600 shrink-0"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
