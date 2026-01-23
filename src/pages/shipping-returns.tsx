import Head from 'next/head';
import { motion } from 'framer-motion';
import { Truck, Package, RefreshCw, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/variants';

export default function ShippingReturnsPage() {
  return (
    <>
      <Head>
        <title>Infos de Livraison & Retours | Nadara</title>
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
              Infos de Livraison & <span className="italic">Retours</span>
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
                      <span><strong>Maroc :</strong> 2-5 jours ouvrables</span>
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
                    Zones de Livraison
                  </h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed">
                    Nous livrons partout au Maroc et dans le monde entier. Les frais de livraison sont calculés lors de la commande selon votre localisation.
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

            {/* Returns Info */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-terracotta-100 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-7 h-7 text-terracotta-600" />
                </div>
                <h2 className="font-serif text-3xl text-charcoal-900">
                  Retours
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-terracotta-600" />
                    Politique de Retour
                  </h3>
                  <p className="text-charcoal-600 font-sans leading-relaxed mb-4">
                    Nous acceptons les retours sous <strong>14 jours</strong> après réception de votre commande, à condition que :
                  </p>
                  <ul className="space-y-2 text-charcoal-600 font-sans mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-600 mt-1">•</span>
                      <span>Les produits sont non utilisés et dans leur emballage d'origine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-600 mt-1">•</span>
                      <span>Les produits n'ont pas été ouverts ou endommagés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-600 mt-1">•</span>
                      <span>La demande de retour est effectuée dans les délais</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                    Processus de Retour
                  </h3>
                  <ol className="space-y-3 text-charcoal-600 font-sans">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-terracotta-100 text-terracotta-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>Contactez-nous via WhatsApp ou email pour initier le retour</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-terracotta-100 text-terracotta-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>Nous vous fournirons les instructions et l'adresse de retour</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-terracotta-100 text-terracotta-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>Expédiez le colis avec le numéro de suivi fourni</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-terracotta-100 text-terracotta-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span>Une fois reçu et vérifié, nous procéderons au remboursement sous 5-7 jours ouvrables</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-cream-100 p-6 rounded-lg">
                  <p className="text-charcoal-700 font-sans leading-relaxed">
                    <strong>Note :</strong> Les frais de retour sont à la charge du client, sauf en cas de produit défectueux ou d'erreur de notre part. Dans ce cas, nous couvrons tous les frais.
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
              Si vous avez des questions concernant la livraison ou les retours, n'hésitez pas à nous contacter via WhatsApp. Notre équipe est là pour vous aider.
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

