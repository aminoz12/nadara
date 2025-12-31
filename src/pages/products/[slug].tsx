import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Leaf, Info } from 'lucide-react';
import { ProductGallery, AnimatedProductCard, ProductActions } from '@/components';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/components/variants';
import { Product } from '@/types';
import productsData from '../../../data/products.json';

interface ProductPageProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductPage({
  product,
  relatedProducts,
}: ProductPageProps) {
  return (
    <>
      <Head>
        <title>{product.name} | Nadara</title>
        <meta name="description" content={product.shortDescription} />
      </Head>

      {/* Breadcrumb */}
      <div className="pt-28 md:pt-32 bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-sans text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Gallery */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="lg:pt-8"
            >
              <span className="text-sm font-sans tracking-[0.2em] uppercase text-olive-600 mb-3 block">
                {product.category}
              </span>

              <h1 className="heading-lg text-charcoal-900 mb-4">
                {product.name}
              </h1>

              <p className="font-serif text-3xl text-charcoal-900 mb-6">
                {product.price} MAD
              </p>

              <p className="body-md text-charcoal-600 mb-8">
                {product.shortDescription}
              </p>

              {/* Add to Cart & WhatsApp Buttons */}
              <ProductActions product={product} />

              {/* Benefits */}
              <div className="border-t border-beige-200 pt-8 mb-8">
                <h3 className="font-serif text-lg text-charcoal-900 mb-4">
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700 font-sans">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div className="border-t border-beige-200 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="w-5 h-5 text-olive-600" />
                  <h3 className="font-serif text-lg text-charcoal-900">
                    Ingredients
                  </h3>
                </div>
                <p className="text-charcoal-600 font-sans leading-relaxed">
                  {product.ingredients}
                </p>
              </div>

              {/* Usage Instructions */}
              {product.usageInstructions && product.usageInstructions.length > 0 && (
                <div className="border-t border-beige-200 pt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="w-5 h-5 text-olive-600" />
                    <h3 className="font-serif text-lg text-charcoal-900">
                      Conseils d'utilisation
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {product.usageInstructions.map((instruction, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-700 font-sans">
                          {instruction}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 p-6 bg-olive-50 rounded-sm"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="block font-serif text-lg text-olive-700">
                      100%
                    </span>
                    <span className="text-xs font-sans text-olive-600 uppercase tracking-wide">
                      Natural
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-lg text-olive-700">
                      Cruelty
                    </span>
                    <span className="text-xs font-sans text-olive-600 uppercase tracking-wide">
                      Free
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-lg text-olive-700">
                      Eco
                    </span>
                    <span className="text-xs font-sans text-olive-600 uppercase tracking-wide">
                      Packaging
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-cream-100">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="heading-md text-charcoal-900"
              >
                You May Also Like
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedProducts.map((product, index) => (
                <AnimatedProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = productsData as Product[];
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  const products = productsData as Product[];
  const product = products.find((p) => p.slug === params?.slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  // Get related products (same category, max 3)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};

