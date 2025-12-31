import Head from 'next/head';
import { GetStaticProps } from 'next';
import { 
  Hero, 
  Collections, 
  ProductCarousel, 
  Values, 
  Testimonials,
  Ingredients,
  ProductionProcess,
  FAQ,
  Stats,
  Packs
} from '@/components';
import { Product, Collection, Testimonial } from '@/types';
import productsData from '../../data/products.json';
import collectionsData from '../../data/collections.json';
import testimonialsData from '../../data/testimonials.json';

interface HomePageProps {
  popularProducts: Product[];
  collections: Collection[];
  testimonials: Testimonial[];
}

export default function HomePage({
  popularProducts,
  collections,
  testimonials,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>Nadara | Premium Moroccan Skincare</title>
        <meta
          name="description"
          content="Discover the transformative power of Moroccan botanicals. Pure, potent, and precious skincare rituals for the modern soul."
        />
      </Head>

      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Product Categories */}
      <Collections collections={collections} />
      
      {/* 3. Bestsellers Carousel */}
      <ProductCarousel
        title="products.bestsellers"
        subtitle="products.mostLoved"
        products={popularProducts}
      />
      
      {/* 4. Découvrir Nos Packs */}
      <Packs />
      
      {/* 5. Ingredients & Benefits */}
      <Ingredients />
      
      {/* 6. Stats Counter */}
      <Stats />
      
      {/* 7. Our Values */}
      <Values />
      
      {/* 8. Production Process */}
      <ProductionProcess />
      
      {/* 9. Testimonials */}
      <Testimonials testimonials={testimonials} />
      
      {/* 10. FAQ */}
      <FAQ />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = productsData as Product[];
  const collections = collectionsData as Collection[];
  const testimonials = testimonialsData as Testimonial[];

  const popularProducts = products.filter((p) => p.popular);

  return {
    props: {
      popularProducts,
      collections,
      testimonials,
    },
  };
};
