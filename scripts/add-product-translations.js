const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const translations = {
  1: {
    name_en: "Cold Process Soap - Activated Charcoal",
    name_ar: "صابون سابونيفييه بارد - فحم نشط",
    shortDescription_en: "Purifying face and body. No dye, no preservative, no palm oil. 115g",
    shortDescription_ar: "منقي للوجه والجسم. بدون صبغة أو مواد حافظة أو زيت نخل. 115 غرام",
    category_en: "Cold Process Soaps",
    category_ar: "صابون بارد",
    bienfaits_en: ["Purifying face and body", "No dye, no preservative", "No palm oil", "Weight: 115g", "Store away from light and moisture"],
    bienfaits_ar: ["منقي للوجه والجسم", "بدون صبغة أو مواد حافظة", "بدون زيت نخل", "الوزن: 115 غ", "يحفظ بعيداً عن الضوء والرطوبة"],
    ingredients_en: "Olive oil, Rapeseed oil, Shea butter, Coconut oil, Castor oil, Activated charcoal, Water, Lye, Glycerin (naturally produced during saponification)",
    ingredients_ar: "زيت الزيتون، زيت الكانولا، زبدة الشيا، زيت جوز الهند، زيت الخروع، فحم نشط، ماء، صودا، غليسيرين",
    usageInstructions_en: ["Store away from light and moisture", "Wet soap under water, lather on skin and rinse", "Let dry after each use to last longer", "Rinse thoroughly if contact with eyes", "Do not ingest; do not use if allergic to any ingredient"]
  },
  2: {
    name_en: "Cold Process Soap - Honey & Oat",
    name_ar: "صابون بارد - عسل وشوفان",
    shortDescription_en: "Extra gentle face and body. No dye, no preservative, no palm oil. 115g",
    shortDescription_ar: "لطيف جداً للوجه والجسم. بدون صبغة أو مواد حافظة أو زيت نخل. 115 غرام",
    category_en: "Cold Process Soaps",
    category_ar: "صابون بارد",
    bienfaits_en: ["Extra gentle face and body", "No dye, no preservative", "No palm oil", "Weight: 115g", "Store away from light and moisture"],
    bienfaits_ar: ["لطيف جداً للوجه والجسم", "بدون صبغة أو مواد حافظة", "بدون زيت نخل", "الوزن: 115 غ", "يحفظ بعيداً عن الضوء والرطوبة"],
    ingredients_en: "Olive oil, Rapeseed oil, Shea butter, Coconut oil, Castor oil, Honey, Oat, Water, Lye, Glycerin (naturally produced during saponification)",
    ingredients_ar: "زيت الزيتون، زيت الكانولا، زبدة الشيا، زيت جوز الهند، زيت الخروع، عسل، شوفان، ماء، صودا، غليسيرين",
    usageInstructions_en: ["Store away from light and moisture", "Wet soap under water, lather on skin and rinse", "Let dry after each use to last longer", "Rinse thoroughly if contact with eyes", "Do not ingest; do not use if allergic to any ingredient"]
  },
  3: {
    name_en: "Solid Shampoo - Fine Hair & Oily Dandruff",
    name_ar: "شامبو صلب - شعر رقيق وقشرة دهنية",
    shortDescription_en: "0% sulfate / 100% biodegradable / Essential Oils. This anti-dandruff shampoo purifies the scalp, regulates sebum and strengthens hair. 100g",
    shortDescription_ar: "0% كبريتات / 100% قابل للتحلل / زيوت عطرية. ينقي فروة الرأس وينظم الدهون ويقوي الشعر. 100 غرام",
    category_en: "Solid Shampoos",
    category_ar: "شامبو صلب",
    bienfaits_en: ["0% sulfate", "100% biodegradable", "Essential oils", "Anti-dandruff", "Purifies scalp", "Regulates sebum", "Strengthens hair", "Economical and easy to use", "Weight: 100g", "Store in a dry place"],
    bienfaits_ar: ["0% كبريتات", "100% قابل للتحلل", "زيوت عطرية", "مضاد للقشرة", "ينقي فروة الرأس", "ينظم الدهون", "يقوي الشعر", "اقتصادي وسهل الاستخدام", "الوزن: 100 غ", "يحفظ جافاً"],
    ingredients_en: "SCI surfactant, Aqua, Reetha, Neem, Black seed oil, Honey, Vitamin E, Rosemary essential oil, Tea tree essential oil",
    ingredients_ar: "عامل فعال SCI، ماء، ريثا، نيم، زيت الحبة السوداء، عسل، فيتامين E، زيت إكليل الجبل، زيت شجرة الشاي",
    usageInstructions_en: ["Lather the product", "Apply to scalp", "Shampoo and rinse", "Store in a dry place"],
    usageInstructions_ar: ["أَرغِ المنتج", "وزّع على فروة الرأس", "اشطف بالماء", "احفظ جافاً"]
  },
  4: {
    name_en: "Cold Process Soap - Black Seed & Pink Clay",
    name_ar: "صابون بارد - حبة سوداء وطين وردي",
    shortDescription_en: "Purifying face and body. No dye, no preservative, no palm oil. 115g",
    shortDescription_ar: "منقي للوجه والجسم. بدون صبغة أو مواد حافظة أو زيت نخل. 115 غرام",
    category_en: "Cold Process Soaps",
    category_ar: "صابون بارد",
    bienfaits_en: ["Purifying face and body", "No dye, no preservative", "No palm oil", "Weight: 115g", "Store away from light and moisture"],
    bienfaits_ar: ["منقي للوجه والجسم", "بدون صبغة أو مواد حافظة", "بدون زيت نخل", "الوزن: 115 غ", "يحفظ بعيداً عن الضوء والرطوبة"],
    ingredients_en: "Olive oil, Rapeseed oil, Shea butter, Coconut oil, Castor oil, Black seed, Pink clay, Water, Lye, Glycerin (naturally produced during saponification)",
    ingredients_ar: "زيت الزيتون، زيت الكانولا، زبدة الشيا، زيت جوز الهند، زيت الخروع، حبة سوداء، طين وردي، ماء، صودا، غليسيرين",
    usageInstructions_en: ["Store away from light and moisture", "Wet soap under water, lather on skin and rinse", "Let dry after each use to last longer", "Rinse thoroughly if contact with eyes", "Do not ingest; do not use if allergic to any ingredient"]
  },
  5: {
    name_en: "Cold Process Soap - Coffee",
    name_ar: "صابون بارد - قهوة",
    shortDescription_en: "Exfoliating face and body. No dye, no preservative, no palm oil. 115g",
    shortDescription_ar: "مقشر للوجه والجسم. بدون صبغة أو مواد حافظة أو زيت نخل. 115 غرام",
    category_en: "Cold Process Soaps",
    category_ar: "صابون بارد",
    bienfaits_en: ["Exfoliating face and body", "No dye, no preservative", "No palm oil", "Weight: 115g", "Store away from light and moisture"],
    bienfaits_ar: ["مقشر للوجه والجسم", "بدون صبغة أو مواد حافظة", "بدون زيت نخل", "الوزن: 115 غ", "يحفظ بعيداً عن الضوء والرطوبة"],
    ingredients_en: "Olive oil, Rapeseed oil, Shea butter, Coconut oil, Castor oil, Coffee, Water, Lye, Glycerin (naturally produced during saponification)",
    ingredients_ar: "زيت الزيتون، زيت الكانولا، زبدة الشيا، زيت جوز الهند، زيت الخروع، قهوة، ماء، صودا، غليسيرين",
    usageInstructions_en: ["Store away from light and moisture", "Wet soap under water, lather on skin and rinse", "Let dry after each use to last longer", "Rinse thoroughly if contact with eyes", "Do not ingest; do not use if allergic to any ingredient"]
  },
  6: {
    name_en: "Solid Shampoo - Strengthening & Stimulating",
    name_ar: "شامبو صلب - مقوٍ ومنشط",
    shortDescription_en: "0% sulfate / 100% biodegradable / Essential Oils. This shampoo detangles, stimulates growth and adds volume. 100g",
    shortDescription_ar: "0% كبريتات / 100% قابل للتحلل / زيوت عطرية. يسهل التمشيط ويحفز النمو ويعطي حجم. 100 غرام",
    category_en: "Solid Shampoos",
    category_ar: "شامبو صلب",
    bienfaits_en: ["0% sulfate", "100% biodegradable", "Essential oils", "Detangles hair", "Stimulates growth", "Adds volume", "Economical and easy to use", "Weight: 100g", "Store in a dry place"],
    bienfaits_ar: ["0% كبريتات", "100% قابل للتحلل", "زيوت عطرية", "يسهل التمشيط", "يحفز النمو", "يعطي حجم", "اقتصادي وسهل الاستخدام", "الوزن: 100 غ", "يحفظ جافاً"],
    ingredients_en: "SCI surfactant, Aqua, Shikakai, Kapoor Kachli, Shea butter, Coconut oil, Honey, Vitamin E, Hydrolyzed wheat protein WLM, Peppermint essential oil, Tea tree essential oil",
    ingredients_ar: "عامل فعال SCI، ماء، شيكاكاي، كابور كاشلي، زبدة الشيا، زيت جوز الهند، عسل، فيتامين E، بروتين قمح مهدرج، زيت النعناع، زيت شجرة الشاي",
    usageInstructions_en: ["Lather the product", "Apply to scalp", "Shampoo and rinse", "Store in a dry place"],
    usageInstructions_ar: ["أَرغِ المنتج", "وزّع على فروة الرأس", "اشطف بالماء", "احفظ جافاً"],
    equivalence_en: "1 solid shampoo = 2 bottles of 250 ml shampoo",
    equivalence_ar: "شامبو صلب واحد = زجاجتان 250 مل"
  },
  7: {
    name_en: "Solid Shampoo - Normal/Mixed Hair",
    name_ar: "شامبو صلب - شعر عادي/مختلط",
    shortDescription_en: "0% sulfate / 100% biodegradable / Essential Oils. Cleanses and absorbs sebum; adds volume and shine. 100g",
    shortDescription_ar: "0% كبريتات / 100% قابل للتحلل / زيوت عطرية. ينظف ويمتص الدهون ويعطي حجم ولمعان. 100 غرام",
    category_en: "Solid Shampoos",
    category_ar: "شامبو صلب",
    bienfaits_en: ["0% sulfate", "100% biodegradable", "Essential oils", "Cleanses and absorbs sebum", "Adds volume", "Adds shine", "Economical and easy to use", "Weight: 100g", "Store in a dry place"],
    bienfaits_ar: ["0% كبريتات", "100% قابل للتحلل", "زيوت عطرية", "ينظف ويمتص الدهون", "يعطي حجم", "يعطي لمعان", "اقتصادي وسهل الاستخدام", "الوزن: 100 غ", "يحفظ جافاً"],
    ingredients_en: "SCI surfactant, Aqua, Ghassoul, Pink clay, Sidr (Jujube), Black seed oil, Coconut oil, Honey, Vitamin E, Rosemary essential oil",
    ingredients_ar: "عامل فعال SCI، ماء، غاسول، طين وردي، سدر، زيت الحبة السوداء، زيت جوز الهند، عسل، فيتامين E، زيت إكليل الجبل",
    usageInstructions_en: ["Lather the product", "Apply to scalp", "Shampoo and rinse", "Store in a dry place"],
    usageInstructions_ar: ["أَرغِ المنتج", "وزّع على فروة الرأس", "اشطف بالماء", "احفظ جافاً"],
    equivalence_en: "1 solid shampoo = 2 bottles of 250 ml shampoo",
    equivalence_ar: "شامبو صلب واحد = زجاجتان 250 مل"
  },
  8: {
    name_en: "Solid Shampoo - Dry Hair",
    name_ar: "شامبو صلب - شعر جاف",
    shortDescription_en: "0% sulfate / 100% biodegradable / Essential Oils. Detangles, adds shine, stimulates growth and prevents split ends. 100g",
    shortDescription_ar: "0% كبريتات / 100% قابل للتحلل / زيوت عطرية. يسهل التمشيط ويعطي لمعان ويحفز النمو ويمنع التقصف. 100 غرام",
    category_en: "Solid Shampoos",
    category_ar: "شامبو صلب",
    bienfaits_en: ["0% sulfate", "100% biodegradable", "Essential oils", "Detangles hair", "Adds shine", "Stimulates growth", "Prevents split ends", "Economical and easy to use", "Weight: 100g", "Store in a dry place"],
    bienfaits_ar: ["0% كبريتات", "100% قابل للتحلل", "زيوت عطرية", "يسهل التمشيط", "يعطي لمعان", "يحفز النمو", "يمنع التقصف", "اقتصادي وسهل الاستخدام", "الوزن: 100 غ", "يحفظ جافاً"],
    ingredients_en: "SCI surfactant, Aqua, Hibiscus powder, Sweet almond oil, Coconut oil, Hydrolyzed wheat protein WLM, Glycerin, Tea tree essential oil, Rosemary essential oil",
    ingredients_ar: "عامل فعال SCI، ماء، مسحوق الكركديه، زيت اللوز الحلو، زيت جوز الهند، بروتين قمح مهدرج، غليسيرين، زيت شجرة الشاي، زيت إكليل الجبل",
    usageInstructions_en: ["Lather the product", "Apply to scalp", "Shampoo and rinse", "Store in a dry place", "For hard-to-detangle hair, use a conditioner after shampoo"],
    usageInstructions_ar: ["أَرغِ المنتج", "وزّع على فروة الرأس", "اشطف بالماء", "احفظ جافاً", "لشعر صعب التمشيط استخدمي بلسم بعد الشامبو"],
    equivalence_en: "1 solid shampoo = 2 bottles of 250 ml shampoo",
    equivalence_ar: "شامبو صلب واحد = زجاجتان 250 مل"
  },
  9: {
    name_en: "Brightening Powder",
    name_ar: "مسحوق مضيء",
    shortDescription_en: "Natural brightening mask for all skin types. Gently illuminates and evens skin tone. 100g",
    shortDescription_ar: "قناع تفتيح طبيعي لجميع أنواع البشرة. ينير وينظم اللون بلطف. 100 غرام",
    category_en: "Powder",
    category_ar: "مسحوق",
    bienfaits_en: ["Brightens and illuminates skin", "Evens skin tone naturally", "Suited to all skin types", "100% natural", "Weight: 100g"],
    bienfaits_ar: ["يضيء وينير البشرة", "ينظم لون البشرة طبيعياً", "يناسب جميع أنواع البشرة", "100% طبيعي", "الوزن: 100 غ"],
    ingredients_en: "Rice powder, Powdered milk, Oat powder, Chickpea powder, Licorice powder, Coconut powder",
    ingredients_ar: "مسحوق الأرز، حليب بودرة، مسحوق الشوفان، مسحوق الحمص، مسحوق عرق السوس، جوز هند بودرة",
    usageInstructions_en: ["Put 1 tsp powder in a small bowl", "Add 1–2 tsp water (or potato juice / natural yogurt)", "Mix until smooth", "Apply to face avoiding lips and eye area", "Leave on 10 minutes", "Rinse thoroughly"],
    usageInstructions_ar: ["ضعي ملعقة صغيرة من المسحوق في وعاء", "أضيفي 1–2 ملعقة ماء (أو عصير بطاطا / لبن طبيعي)", "امزجي حتى يصبح متجانساً", "طبقي على الوجه مع تجنب الشفاه ومنطقة العين", "اتركيه 10 دقائق", "اشطفي جيداً"]
  },
  10: {
    name_en: "Precious Balm 3-in-1 - After Sun Care",
    name_ar: "بلسم ثمين 3 في 1 - عناية ما بعد الشمس",
    shortDescription_en: "Soothing after-sun care for parched skin. Deep body balm with cold-pressed oils and vegetable butters. NO PRESERVATIVES",
    shortDescription_ar: "عناية مهدئة ما بعد الشمس للبشرة الجافة. بلسم عميق للجسم بزيوت باردة وزبد نباتية. بدون مواد حافظة",
    category_en: "Creams",
    category_ar: "كريمات",
    bienfaits_en: ["Soothing after-sun care", "Nourishes and repairs skin deeply", "Rich texture, quick absorption", "Suited to all skins (young to mature)", "Use alone or with another product", "NO PRESERVATIVES"],
    bienfaits_ar: ["عناية مهدئة ما بعد الشمس", "يغذي ويصلح البشرة بعمق", "قوام غني وامتصاص سريع", "يناسب جميع البشرة", "يُستخدم وحده أو مع منتج آخر", "بدون مواد حافظة"],
    ingredients_en: "Shea butter, Cocoa butter, Black seed oil, Sweet almond oil, Coconut oil, Beeswax, Lanette O, IPM, Vitamin E",
    ingredients_ar: "زبدة الشيا، زبدة الكاكاو، زيت الحبة السوداء، زيت اللوز الحلو، زيت جوز الهند، شمع العسل، لانيت O، IPM، فيتامين E",
    usageInstructions_en: ["Apply to body after bath", "Use morning and evening if desired", "Massage well to penetrate", "Use alone or with another product"],
    usageInstructions_ar: ["طبقي على الجسم بعد الاستحمام", "استخدمي صباحاً ومساءً إن رغبت", "دلّكي جيداً للامتصاص", "استخدمي وحده أو مع منتج آخر"]
  },
  11: {
    name_en: "Leave In Coconut - Hair Conditioner",
    name_ar: "ليف إن جوز الهند - بلسم شعر",
    shortDescription_en: "No-rinse hydrating conditioner for dry or porous hair. 100% Virgin Coconut Oil + Panthenol. 200ml",
    shortDescription_ar: "بلسم ترطيب بدون شطف للشعر الجاف أو المسامي. 100% زيت جوز هند بكر + بانثينول. 200 مل",
    category_en: "Creams",
    category_ar: "كريمات",
    bienfaits_en: ["No-rinse hydrating", "Eases detangling", "Keeps hair hydrated and nourished", "Adds softness", "Fights dryness", "Shiny, tangle-free hair", "100% Virgin Coconut Oil", "Enriched with Panthenol", "Suited to all hair types", "Size: 200ml"],
    bienfaits_ar: ["ترطيب بدون شطف", "يسهل التمشيط", "يحافظ على ترطيب الشعر وتغذيته", "يعطي نعومة", "يحارب الجفاف", "شعر لامع وسهل التمشيط", "100% زيت جوز هند بكر", "مُغنى بالبانثينول", "يناسب جميع أنواع الشعر", "الحجم: 200 مل"],
    ingredients_en: "Aqua, Glycerin, Cocos Nucifera Oil, Ricinus Communis Seed Oil, Isopropyl Myristate, Behentrimonium Methosulfate and Cetearyl Alcohol, Cetearyl Olivate, Sorbitan Olivate, Tocopherol, Panthenol, Benzyl Alcohol, Dehydroacetic Acid, Fragrance",
    ingredients_ar: "ماء، غليسيرين، زيت جوز الهند، زيت الخروع، إيزوبروبيل ميريستات، بيهنتريمونيوم ميثوسلفات وسيتياريل كحول، سيتياريل أوليفات، سوربيتان أوليفات، توكوفيرول، بانثينول، بنزيل كحول، حمض دهيدروأسيتيك، عطر",
    usageInstructions_en: ["Apply to clean, damp hair", "Do not rinse", "Detangle gently with fingers or comb", "Can be used daily", "Suited to all hair types"],
    usageInstructions_ar: ["طبقي على شعر نظيف ورطب", "لا تشطفي", "مشطي برفق بالأصابع أو مشط", "يمكن استخدامه يومياً", "يناسب جميع أنواع الشعر"]
  },
  12: {
    name_en: "Collagen 2% & Hyaluronic Acid 2% + B5 Serum",
    name_ar: "مصل كولاجين 2% وحمض هيالورونيك 2% + B5",
    shortDescription_en: "Anti-ageing, hydrating serum with Collagen 2% and Hyaluronic Acid 2% + B5. Suited to all skin types. 30ml",
    shortDescription_ar: "مصل مضاد للشيخوخة ومرطب بالكولاجين 2% وحمض الهيالورونيك 2% + B5. يناسب جميع أنواع البشرة. 30 مل",
    category_en: "Serum",
    category_ar: "مصل",
    bienfaits_en: ["Powerful anti-ageing", "Intense hydration", "2% Collagen for firmness", "2% Hyaluronic Acid for hydration", "Soothing Vitamin B5 (Panthenol)", "Suited to all skin types", "Size: 30ml"],
    bienfaits_ar: ["مضاد قوي للشيخوخة", "ترطيب مكثف", "كولاجين 2% للتماسك", "حمض هيالورونيك 2% للترطيب", "فيتامين B5 (بانثينول) مهدئ", "يناسب جميع أنواع البشرة", "الحجم: 30 مل"],
    ingredients_en: "Aloe Barbadensis Leaf Water, Boswellia Carterii Water, Glycerin, Panthenol, Hydrolyzed Elastin, Sodium Hyaluronate, Benzyl Alcohol, Dehydroacetic Acid",
    ingredients_ar: "ماء أوراق الألوفيرا، ماء البوسويلا، غليسيرين، بانثينول، إيلاستين مهدرج، هيالورونات الصوديوم، بنزيل كحول، حمض دهيدروأسيتيك",
    usageInstructions_en: ["Cleanse and/or tone your face", "Do not dry face after cleansing or toning", "Apply a few drops of serum to damp face", "Massage gently to absorb", "Use morning and evening for best results"],
    usageInstructions_ar: ["نظفي و/أو عطري وجهك", "لا تجففي الوجه بعد التنظيف أو التونر", "طبقي بضع قطرات من المصل على الوجه الرطب", "دلّكي برفق للامتصاص", "استخدمي صباحاً ومساءً لأفضل النتائج"]
  }
};

products.forEach((p) => {
  const t = translations[p.id];
  if (t) {
    Object.assign(p, t);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('Product translations added.');
