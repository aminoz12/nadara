import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { AnimatedProductCard, Filters } from '@/components';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { Product, getLocalizedProduct } from '@/types';
import productsData from '../../../data/products.json';

interface ProductsPageProps {
  products: Product[];
  categories: string[];
}

export default function ProductsPage({ products, categories }: ProductsPageProps) {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale() as 'fr' | 'en' | 'ar';
  const { category: queryCategory } = router.query;

  const localizedCategories = useMemo(
    () => [...new Set(products.map((p) => getLocalizedProduct(p, locale).category))],
    [products, locale]
  );

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  useEffect(() => {
    if (queryCategory && typeof queryCategory === 'string') {
      setSelectedCategory(queryCategory);
    }
  }, [queryCategory]);

  useEffect(() => {
    if (selectedCategory !== 'All' && !localizedCategories.includes(selectedCategory)) {
      setSelectedCategory('All');
    }
  }, [locale, localizedCategories, selectedCategory]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter (by localized category)
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (p) => getLocalizedProduct(p, locale).category === selectedCategory
      );
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Popular filter
    if (showPopularOnly) {
      filtered = filtered.filter((p) => p.popular);
    }

    // Sorting (by localized name when alphabetical)
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) =>
          getLocalizedProduct(a, locale).name.localeCompare(
            getLocalizedProduct(b, locale).name
          )
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [products, selectedCategory, sortBy, priceRange, showPopularOnly, locale]);

  return (
    <>
      <Head>
        <title>{t('productsPage.title')} | Nadara</title>
        <meta
          name="description"
          content={t('productsPage.description')}
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-6 md:pt-40 md:pb-8 bg-cream-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-sans tracking-[0.3em] uppercase text-olive-600 mb-3 block"
            >
              {t('productsPage.subtitle')}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-charcoal-900 mb-3"
            >
              {t('productsPage.title')}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="body-lg text-charcoal-600"
            >
              {t('productsPage.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-24 lg:pb-32 bg-cream-50">
        <div className="container-custom">
          <Filters
            categories={localizedCategories}
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
            {t('products.showing')} {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? t('products.product') : t('products.products')}
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
                {t('products.noProducts')}
              </p>
              <p className="text-charcoal-500">
                {t('products.adjustFilters')}
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

