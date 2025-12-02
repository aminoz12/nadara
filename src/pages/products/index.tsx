import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { AnimatedProductCard, Filters } from '@/components';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { Product } from '@/types';
import productsData from '../../../data/products.json';

interface ProductsPageProps {
  products: Product[];
  categories: string[];
}

export default function ProductsPage({ products, categories }: ProductsPageProps) {
  const router = useRouter();
  const { category: queryCategory } = router.query;

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  useEffect(() => {
    if (queryCategory && typeof queryCategory === 'string') {
      setSelectedCategory(queryCategory);
    }
  }, [queryCategory]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Popular filter
    if (showPopularOnly) {
      filtered = filtered.filter((p) => p.popular);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order (featured)
        break;
    }

    return filtered;
  }, [products, selectedCategory, sortBy, priceRange, showPopularOnly]);

  return (
    <>
      <Head>
        <title>Shop All Products | Nadara</title>
        <meta
          name="description"
          content="Explore our collection of premium Moroccan skincare products. Natural oils, serums, and beauty essentials."
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-sans tracking-[0.3em] uppercase text-olive-600 mb-4 block"
            >
              Our Collection
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-charcoal-900 mb-6"
            >
              Shop <span className="italic">All Products</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="body-lg text-charcoal-600"
            >
              Discover our carefully curated selection of premium skincare,
              crafted from the finest Moroccan botanicals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <Filters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            showPopularOnly={showPopularOnly}
            setShowPopularOnly={setShowPopularOnly}
          />

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-charcoal-500 font-sans mt-8 mb-8"
          >
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? 's' : ''}
          </motion.p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredProducts.map((product, index) => (
                <AnimatedProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-xl font-serif text-charcoal-600 mb-4">
                No products found
              </p>
              <p className="text-charcoal-500">
                Try adjusting your filters to find what you&apos;re looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const products = productsData as Product[];
  const categories = [...new Set(products.map((p) => p.category))];

  return {
    props: {
      products,
      categories,
    },
  };
};

