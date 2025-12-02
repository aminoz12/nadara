'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  showPopularOnly: boolean;
  setShowPopularOnly: (show: boolean) => void;
}

export default function Filters({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  showPopularOnly,
  setShowPopularOnly,
}: FiltersProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sortOptions = [
    { value: 'default', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Alphabetical' },
  ];

  const priceRanges = [
    { value: [0, 200] as [number, number], label: 'All Prices' },
    { value: [0, 50] as [number, number], label: 'Under $50' },
    { value: [50, 100] as [number, number], label: '$50 - $100' },
    { value: [100, 200] as [number, number], label: 'Over $100' },
  ];

  const FilterDropdown = ({
    label,
    value,
    options,
    onChange,
    id,
  }: {
    label: string;
    value: string;
    options: { value: any; label: string }[];
    onChange: (value: any) => void;
    id: string;
  }) => (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-sans text-charcoal-700 hover:text-charcoal-900 transition-colors"
      >
        <span>{label}: {options.find(o => JSON.stringify(o.value) === JSON.stringify(value))?.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            openDropdown === id ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {openDropdown === id && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-sm border border-beige-200 z-50"
          >
            {options.map((option) => (
              <button
                key={option.label}
                onClick={() => {
                  onChange(option.value);
                  setOpenDropdown(null);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-sans transition-colors ${
                  JSON.stringify(option.value) === JSON.stringify(value)
                    ? 'bg-olive-50 text-olive-700'
                    : 'text-charcoal-700 hover:bg-cream-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const activeFiltersCount = [
    selectedCategory !== 'All',
    sortBy !== 'default',
    priceRange[0] !== 0 || priceRange[1] !== 200,
    showPopularOnly,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('All');
    setSortBy('default');
    setPriceRange([0, 200]);
    setShowPopularOnly(false);
  };

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:flex items-center justify-between py-6 border-b border-beige-200">
        <div className="flex items-center gap-6">
          {/* Categories */}
          <div className="flex items-center gap-2">
            {['All', ...categories].map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-sans tracking-wide transition-colors ${
                  selectedCategory === category
                    ? 'bg-olive-700 text-cream-50'
                    : 'text-charcoal-700 hover:bg-cream-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Popular Toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showPopularOnly}
              onChange={(e) => setShowPopularOnly(e.target.checked)}
              className="w-4 h-4 accent-olive-600"
            />
            <span className="text-sm font-sans text-charcoal-700">
              Bestsellers Only
            </span>
          </label>
        </div>

        <div className="flex items-center gap-4">
          <FilterDropdown
            label="Price"
            value={JSON.stringify(priceRange)}
            options={priceRanges.map((r) => ({
              value: r.value,
              label: r.label,
            }))}
            onChange={(v) => setPriceRange(v)}
            id="price"
          />
          <FilterDropdown
            label="Sort"
            value={sortBy}
            options={sortOptions}
            onChange={setSortBy}
            id="sort"
          />
          {activeFiltersCount > 0 && (
            <motion.button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-terracotta-600 hover:text-terracotta-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <X className="w-4 h-4" />
              Clear ({activeFiltersCount})
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="flex items-center gap-2 px-4 py-3 w-full border border-beige-200 rounded-sm"
        >
          <SlidersHorizontal className="w-5 h-5 text-charcoal-600" />
          <span className="font-sans text-charcoal-700">Filters & Sort</span>
          {activeFiltersCount > 0 && (
            <span className="ml-auto bg-olive-600 text-white text-xs px-2 py-1 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </button>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal-950/50 z-50"
              onClick={() => setIsMobileOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-cream-50 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-xl">Filters</h3>
                  <button onClick={() => setIsMobileOpen(false)}>
                    <X className="w-6 h-6 text-charcoal-600" />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h4 className="font-sans text-sm tracking-wider uppercase text-charcoal-500 mb-3">
                      Category
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['All', ...categories].map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 text-sm font-sans transition-colors ${
                            selectedCategory === category
                              ? 'bg-olive-700 text-cream-50'
                              : 'bg-white text-charcoal-700 border border-beige-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-sans text-sm tracking-wider uppercase text-charcoal-500 mb-3">
                      Price Range
                    </h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => setPriceRange(range.value)}
                          className={`block w-full text-left px-4 py-2 text-sm font-sans transition-colors ${
                            JSON.stringify(priceRange) ===
                            JSON.stringify(range.value)
                              ? 'bg-olive-50 text-olive-700'
                              : 'text-charcoal-700 hover:bg-cream-100'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <h4 className="font-sans text-sm tracking-wider uppercase text-charcoal-500 mb-3">
                      Sort By
                    </h4>
                    <div className="space-y-2">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSortBy(option.value)}
                          className={`block w-full text-left px-4 py-2 text-sm font-sans transition-colors ${
                            sortBy === option.value
                              ? 'bg-olive-50 text-olive-700'
                              : 'text-charcoal-700 hover:bg-cream-100'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Only */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showPopularOnly}
                      onChange={(e) => setShowPopularOnly(e.target.checked)}
                      className="w-5 h-5 accent-olive-600"
                    />
                    <span className="font-sans text-charcoal-700">
                      Show Bestsellers Only
                    </span>
                  </label>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-cream-50 border-t border-beige-200">
                  <div className="flex gap-4">
                    <button
                      onClick={clearFilters}
                      className="flex-1 py-3 text-sm font-sans uppercase tracking-wide border border-charcoal-300"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="flex-1 py-3 text-sm font-sans uppercase tracking-wide bg-olive-700 text-white"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

