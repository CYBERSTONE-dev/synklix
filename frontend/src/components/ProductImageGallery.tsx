import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Duplicate images for gallery effect if only one image
  const galleryImages = images.length === 1
    ? [images[0], images[0], images[0], images[0]]
    : images;

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
        <img
          src={galleryImages[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover transition-opacity duration-200"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
              selectedIndex === idx
                ? 'border-brand-accent'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <img src={img} alt={`${productName} view ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
