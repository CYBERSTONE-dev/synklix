import { Star, ThumbsUp } from 'lucide-react';

const mockReviews = [
  {
    id: 1,
    name: 'Alex T.',
    rating: 5,
    date: 'January 15, 2026',
    title: 'Exceeded my expectations!',
    text: 'This product is absolutely amazing. The quality is top-notch and it arrived faster than expected. Would definitely recommend to anyone looking for a reliable product.',
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    name: 'Maria S.',
    rating: 4,
    date: 'February 3, 2026',
    title: 'Great value for money',
    text: 'Really happy with this purchase. Works exactly as described and the build quality feels premium. Took off one star only because the packaging could be better, but the product itself is excellent.',
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    name: 'David L.',
    rating: 5,
    date: 'February 10, 2026',
    title: 'Perfect gift!',
    text: 'Bought this as a gift and the recipient loved it. Fast shipping, great packaging, and the product quality is outstanding. Will definitely shop here again.',
    helpful: 31,
    verified: true,
  },
];

interface CustomerReviewsProps {
  rating: number;
  reviewCount: number;
}

export default function CustomerReviews({ rating, reviewCount }: CustomerReviewsProps) {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-brand-text">Customer Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
                size={16}
                className={star <= Math.round(rating) ? 'star-filled fill-current' : 'star-empty'}
              />
            ))}
          </div>
          <span className="font-bold text-brand-text">{rating}</span>
          <span className="text-sm text-gray-400">({reviewCount} reviews)</span>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-brand-text">{rating}</div>
            <div className="flex justify-center mt-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  size={12}
                  className={star <= Math.round(rating) ? 'star-filled fill-current' : 'star-empty'}
                />
              ))}
            </div>
            <div className="text-xs text-gray-400 mt-1">{reviewCount} reviews</div>
          </div>
          <div className="flex-1 space-y-1.5">
            {[5, 4, 3, 2, 1].map(stars => {
              const pct = stars === 5 ? 72 : stars === 4 ? 18 : stars === 3 ? 6 : stars === 2 ? 3 : 1;
              return (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-4">{stars}</span>
                  <Star size={10} className="star-filled fill-current shrink-0" />
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-brand-accent h-1.5 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-5">
        {mockReviews.map(review => (
          <div key={review.id} className="border-b border-gray-100 pb-5 last:border-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-brand-text">{review.name}</span>
                  {review.verified && (
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-1.5 py-0.5 rounded">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        size={12}
                        className={star <= review.rating ? 'star-filled fill-current' : 'star-empty'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
            <h4 className="font-semibold text-sm text-brand-text mb-1">{review.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
            <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-brand-accent transition-colors mt-3">
              <ThumbsUp size={12} />
              Helpful ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
