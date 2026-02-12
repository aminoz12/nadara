import Head from 'next/head';
import { motion } from 'framer-motion';
import { Truck, Package, RefreshCw, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/variants';

export default function ShippingReturnsPage() {
  return (
    <>
      <Head>
        <title> Infos de Livraison | Nadara</title>
        <meta
          name="description"
          content="Informations sur la livraison et les retours de vos produits Nadara."
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
              Informations
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-charcoal-900 mb-6"
            >
              Infos de Livraison
            </motion.h1>
            <motion.p variants={fadeInUp} className="body-lg text-charcoal-600">
              Tout ce que vous devez savoir sur la livraison et les retours de vos produits Nadara
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-olive-100 rounded-full flex items-center justify-center">
                  <Truck className="w-7 h-7 text-olive-600" />
                </div>
                <h2 className="font-serif text-3xl text-charcoal-900">
                  Livraison
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-olive-600" />
                    Délais de Livraison
                  </h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed mb-4">
                    Nous expédions vos commandes sous <strong>24-48 heures</strong> après confirmation de votre commande.
                  </p>
                  <ul className="space-y-2 text-charcoal-600 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-olive-600 mt-1">•</span>
                      <span><strong>Maroc :</strong> 24-48 heures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-600 mt-1">•</span>
                      <span><strong>International :</strong> 7-15 jours ouvrables selon la destination</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-olive-600" />
                    Zones et frais de Livraison
                  </h3>
                  
                  <p className="text-charcoal-600 font-sans leading-relaxed">
                    Nous livrons partout au Maroc et dans le monde entier.
                    <br />
                    Les frais de livraison sont calculés lors de la commande selon votre localisation.
                    <br />
                    La Livraison est gratuite à partir de 300 MAD.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5 text-olive-600" />
                    Emballage
                  </h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed">
                    Tous nos produits sont soigneusement emballés dans des matériaux écologiques pour garantir leur protection pendant le transport. Nous utilisons des emballages recyclables et respectueux de l'environnement.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-700 text-cream-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="heading-md text-cream-50 mb-6"
            >
              Des Questions ?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-md text-cream-200 mb-8"
            >
              Si vous avez des questions concernant la livraison, n'hésitez pas à nous contacter via WhatsApp. Notre équipe est là pour vous aider.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+212649327825'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-olive-700 font-medium rounded-full hover:bg-cream-100 transition-colors"
            >
              Nous Contacter
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}


