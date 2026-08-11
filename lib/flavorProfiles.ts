/**
 * Flavor profile descriptions for product page enrichment.
 * Used to auto-generate rich content on product pages so AI (Copilot/ChatGPT) 
 * has enough context to cite flavor-specific queries like "hqd go black ice".
 *
 * Keys are lowercase flavor keywords matched against product name.
 */

export interface FlavorProfile {
  taste: string;        // What it tastes like
  notes: string[];      // Flavor notes (2-4 descriptors)
  bestFor: string;      // Who it's for
  mood: string;         // When/where to use it
  similar: string[];    // Similar flavor keywords
}

export const FLAVOR_PROFILES: Record<string, FlavorProfile> = {
  "black ice": {
    taste: "Black Ice delivers a bold combination of dark berry sweetness layered with a sharp menthol cooldown. The initial inhale brings out rich blackcurrant and blackberry notes, while the exhale hits with a frosty, icy finish that lingers on the palate.",
    notes: ["Blackcurrant", "Dark Berry", "Menthol", "Ice"],
    bestFor: "Vapers who enjoy strong menthol with a fruity twist. Perfect if you like cool, refreshing hits that are not overpowering.",
    mood: "Ideal for hot days, post-workout, or anytime you want a refreshing cool sensation.",
    similar: ["mint ice", "cool mint", "blueberry ice", "arctic mint"],
  },
  "miami breeze": {
    taste: "Miami Breeze captures the feel of a tropical cocktail - sweet, fruity, and light. Expect a blend of citrus, tropical fruit, and a gentle breeze of cool air on the exhale. Smooth from start to finish.",
    notes: ["Tropical Fruit", "Citrus", "Light Menthol", "Sweet"],
    bestFor: "Vapers who prefer light, tropical flavors without heavy menthol. Great for those switching from fruity cigarettes or candy.",
    mood: "Best enjoyed during warm weather, outdoor activities, or when you want a vacation vibe.",
    similar: ["tropical breeze", "summer breeze", "citrus mint", "fruity cool"],
  },
  "razz quake": {
    taste: "Razz Quake hits hard with intense raspberry tartness upfront, followed by a cooling ice wave on the exhale. The flavor is bold and unapologetic - sweet, slightly sour raspberry with a clean, icy finish.",
    notes: ["Raspberry", "Tart", "Ice", "Sweet-Sour"],
    bestFor: "Vapers who love bold, punchy fruit flavors with a strong ice kick. Great for ex-smokers who want big, satisfying hits.",
    mood: "Perfect for when you want a flavor that stands out. Works great as an all-day vape for fruit lovers.",
    similar: ["blue razz ice", "raspberry ice", "strawberry ice", "mixed berries ice"],
  },
  "blue razz": {
    taste: "Blue Razz is a classic sweet-tart blue raspberry candy flavor. Think blue raspberry slushie or gummy candy - intensely fruity, slightly sour, and consistently sweet all the way through.",
    notes: ["Blue Raspberry", "Candy", "Sweet-Tart", "Fruity"],
    bestFor: "Anyone who loves candy-style flavors. One of the most popular choices among new vapers and those who prefer sweeter options.",
    mood: "A go-to all-day vape. Works in any situation when you want a reliable, crowd-pleasing flavor.",
    similar: ["raspberry", "razz", "mixed berry", "grape ice"],
  },
  "watermelon ice": {
    taste: "Watermelon Ice pairs the juicy sweetness of fresh watermelon with a cold menthol finish. The watermelon flavor is authentic and sweet - not artificial. The ice component adds a clean, refreshing aftertaste.",
    notes: ["Fresh Watermelon", "Sweet", "Menthol", "Refreshing"],
    bestFor: "Vapers who want a light, refreshing fruit experience with a cool edge. Popular in summer and among those new to vaping.",
    mood: "Perfect for hot weather, beach days, or when you want a light fruity vape that does not overwhelm.",
    similar: ["strawberry watermelon", "melon ice", "fruit punch ice", "cantaloupe"],
  },
  "strawberry watermelon": {
    taste: "Strawberry Watermelon blends two summer staples into one smooth flavor. Ripe strawberry leads on the inhale, giving way to juicy watermelon sweetness on the exhale. No ice, no menthol - just pure sweet fruit.",
    notes: ["Ripe Strawberry", "Juicy Watermelon", "Sweet", "Fruity"],
    bestFor: "Fruit lovers who prefer warm, sweet flavors without any menthol. Great for all-day vaping.",
    mood: "Easy-going, always satisfying. A perfect companion for casual everyday use.",
    similar: ["watermelon ice", "strawberry ice", "mixed fruit", "peach watermelon"],
  },
  "mango ice": {
    taste: "Mango Ice features ripe tropical mango sweetness with a cool icy exhale. The mango flavor is rich and authentic, not artificial, with a refreshing menthol finish that keeps it from being too sweet.",
    notes: ["Tropical Mango", "Sweet", "Menthol", "Cool"],
    bestFor: "Tropical fruit fans who want a popular, globally loved flavor. One of the bestselling vape flavors worldwide.",
    mood: "Versatile all-day vape. Great for any occasion, especially outdoor activities.",
    similar: ["mango", "peach mango", "tropical ice", "passion fruit ice"],
  },
  "lychee ice": {
    taste: "Lychee Ice brings the exotic sweetness of lychee fruit with a clean, smooth menthol finish. The lychee flavor is delicate, floral, and subtly sweet - paired with ice for a truly refreshing experience.",
    notes: ["Lychee", "Floral", "Sweet", "Icy Cool"],
    bestFor: "Vapers looking for something exotic and unique. Popular among those who enjoy Asian-inspired flavors.",
    mood: "Sophisticated and refreshing. A great conversation-starter vape.",
    similar: ["kiwi ice", "passion fruit", "guava ice", "peach ice"],
  },
  "peach ice": {
    taste: "Peach Ice delivers the soft sweetness of ripe summer peaches with a refreshing menthol kick. The peach is juicy and natural-tasting, not overly sweet, with a clean icy exhale.",
    notes: ["Ripe Peach", "Juicy", "Sweet", "Menthol Ice"],
    bestFor: "Vapers who enjoy light, natural fruit flavors. One of the most consistently popular flavors across all vape brands.",
    mood: "Smooth and easygoing. Great as a daily driver for fruit menthol fans.",
    similar: ["peach mango", "peach lychee", "white peach", "apricot ice"],
  },
  "mint": {
    taste: "Classic cool mint - clean, refreshing, and straightforward. The mint flavor is crisp and sharp with a strong cooling sensation on every exhale. No sweetness, no fruit - just pure, icy mint.",
    notes: ["Peppermint", "Cool", "Fresh", "Clean"],
    bestFor: "Ex-cigarette smokers and menthol cigarette fans. Anyone who wants a no-nonsense, clean vaping experience.",
    mood: "Morning wake-up vape or after-meal refresh. The go-to choice for clean palate cleansing.",
    similar: ["cool mint", "spearmint", "arctic mint", "menthol"],
  },
  "menthol": {
    taste: "Pure menthol delivers a classic cigarette-style cooling effect. Less sweet than mint, with a clean, medicinal-cool sensation that closely mirrors menthol cigarettes. Smooth and consistent.",
    notes: ["Classic Menthol", "Cool", "Clean", "Tobacco-Adjacent"],
    bestFor: "Menthol cigarette smokers looking for the closest vaping equivalent. Clean, familiar, and satisfying.",
    mood: "All-day use, especially for those transitioning from menthol cigarettes.",
    similar: ["mint", "cool mint", "arctic blast", "ice"],
  },
  "tobacco": {
    taste: "Tobacco flavor recreates the rich, earthy taste of traditional cigarettes. Warm, slightly sweet, with subtle wood and smoke undertones. The closest vaping experience to smoking a regular cigarette.",
    notes: ["Classic Tobacco", "Earthy", "Warm", "Rich"],
    bestFor: "Ex-smokers who want the familiar tobacco taste without combustion. Ideal for those just making the switch.",
    mood: "Morning coffee companion. Classic all-day vape for traditional tastes.",
    similar: ["virginia tobacco", "cuban tobacco", "caramel tobacco"],
  },
  "strawberry ice": {
    taste: "Strawberry Ice pairs sweet, ripe strawberry with a refreshing menthol finish. The strawberry flavor is bright and candy-like, with a cool, clean exhale that keeps it refreshing and not too heavy.",
    notes: ["Sweet Strawberry", "Candy", "Cool Menthol", "Refreshing"],
    bestFor: "Sweet fruit fans who also want the refreshing kick of menthol. Popular across all demographics.",
    mood: "Great for any time of day. One of the most universally loved flavor combinations.",
    similar: ["strawberry watermelon", "strawberry kiwi", "mixed berries ice", "peach strawberry"],
  },
  "grape ice": {
    taste: "Grape Ice combines the bold sweetness of dark grape with an icy menthol exhale. The grape flavor is rich and full-bodied, like biting into a cold, sweet grape on a hot day.",
    notes: ["Dark Grape", "Sweet", "Bold", "Icy"],
    bestFor: "Those who enjoy bold, sweet flavors with a strong ice finish. Popular among experienced vapers.",
    mood: "Satisfying and bold. Great when you want a strong flavor statement.",
    similar: ["blue razz ice", "mixed berry ice", "black currant", "blackberry ice"],
  },
  "cotton candy": {
    taste: "Cotton candy flavor is sweet, airy, and nostalgic - like biting into spun sugar at a carnival. Light, sugary, and universally appealing. No menthol, all sweetness.",
    notes: ["Spun Sugar", "Sweet", "Candy", "Nostalgic"],
    bestFor: "Those with a serious sweet tooth. Popular among vapers who enjoy candy and dessert flavors.",
    mood: "Fun and lighthearted. A treat vape rather than an all-day vape.",
    similar: ["bubblegum", "candy", "vanilla", "caramel"],
  },
  "breezy nana": {
    taste: "Breezy Nana blends sweet, creamy banana with a light, refreshing breeze of cool air on the exhale. The banana flavor is ripe and natural - not artificial candy banana - with a smooth, gentle coolness that keeps it light and easygoing from start to finish.",
    notes: ["Ripe Banana", "Creamy", "Cool Breeze", "Sweet"],
    bestFor: "Vapers who enjoy smooth, sweet flavors with a touch of freshness. Great for those who want something unique without heavy menthol.",
    mood: "Relaxed and easygoing. A great morning or afternoon vape when you want something light.",
    similar: ["mango ice", "tropical mix", "peach ice", "lychee ice"],
  },
  "dubai chocolate": {
    taste: "Dubai Chocolate brings the luxury of rich, dark chocolate in vapor form. Smooth and indulgent with a deep cocoa flavor and a creamy, slightly sweet finish. Inspired by the viral Dubai chocolate trend - bold, exotic, and deeply satisfying.",
    notes: ["Dark Chocolate", "Rich", "Creamy", "Indulgent"],
    bestFor: "Dessert flavor lovers and chocolate enthusiasts. Perfect for those who want something truly unique and indulgent.",
    mood: "After dinner, evening relaxation, or anytime you want a luxurious treat.",
    similar: ["caramel tobacco", "vanilla custard", "tiramisu", "hazelnut"],
  },
  "fresh af": {
    taste: "Fresh AF delivers an intensely clean, cool mint blast that hits immediately and lingers. No sweetness, no fruit - just pure, arctic-level freshness that clears your palate with every puff. Exactly what the name promises.",
    notes: ["Arctic Mint", "Intense Cool", "Clean", "Crisp"],
    bestFor: "Menthol cigarette smokers and vapers who want the strongest possible cooling sensation. Not for the faint of heart.",
    mood: "Morning wake-up, after meals, or whenever you need a serious palate reset.",
    similar: ["cool mint", "menthol", "arctic mint", "spearmint ice"],
  },
  "lush ice": {
    taste: "Lush Ice is the definitive watermelon menthol combination. Juicy, sweet watermelon flavor hits first with a satisfying sweetness, then a wave of icy menthol cools everything down on the exhale. Refreshing, balanced, and endlessly satisfying.",
    notes: ["Watermelon", "Sweet", "Icy Menthol", "Refreshing"],
    bestFor: "One of the most universally loved flavors across all vape brands. Perfect for beginners and experienced vapers alike.",
    mood: "All-day vape, every season. Especially popular in summer but works year-round.",
    similar: ["watermelon ice", "strawberry watermelon", "melon ice", "fruit punch ice"],
  },
  "mango tropico": {
    taste: "Mango Tropico captures the essence of a tropical mango cocktail. Ripe, sun-sweet mango takes center stage with hints of other tropical fruits dancing in the background. Rich, vibrant, and genuinely tropical - like a vacation in every puff.",
    notes: ["Ripe Mango", "Tropical", "Sweet", "Fruity"],
    bestFor: "Tropical fruit fans and mango lovers. One of the bestselling flavor profiles worldwide.",
    mood: "Warm weather, outdoor activities, or anytime you need a tropical escape.",
    similar: ["mango ice", "tropical mix", "peach mango", "passion fruit"],
  },
  "purple drank": {
    taste: "Purple Drank nails the sweet, grape soda experience with a bold, candy-like grape flavor that hits hard and stays sweet throughout. Think purple grape Kool-Aid or grape soda - intensely sweet, slightly tart, and unmistakably grape.",
    notes: ["Grape Soda", "Candy", "Sweet", "Bold"],
    bestFor: "Sweet flavor enthusiasts and grape candy lovers. Popular among vapers who enjoy intense, dessert-style flavors.",
    mood: "Fun and nostalgic. A great flavor for when you want something bold and playful.",
    similar: ["grape ice", "blue razz", "cotton candy", "mixed berry"],
  },
  "strawmelon": {
    taste: "Strawmelon perfectly pairs ripe strawberry sweetness with juicy watermelon freshness. Each puff delivers both fruits simultaneously - the strawberry provides sweetness and depth while the watermelon keeps it light and refreshing. No ice, no menthol, just pure fruit.",
    notes: ["Ripe Strawberry", "Fresh Watermelon", "Sweet", "Fruity"],
    bestFor: "Fruit lovers who want a clean, pure flavor without menthol. One of the most crowd-pleasing combinations available.",
    mood: "Light and refreshing for any time of day. An excellent all-day vape.",
    similar: ["strawberry watermelon", "strawberry ice", "watermelon ice", "mixed fruit"],
  },
  "berry": {
    taste: "A rich blend of mixed berries - think ripe strawberries, sweet blueberries, and tangy raspberries combined into one smooth, naturally sweet flavor. No single berry dominates, giving you a balanced, fruity experience from first puff to last.",
    notes: ["Mixed Berries", "Sweet", "Fruity", "Natural"],
    bestFor: "Fruit lovers who want a well-rounded berry experience without any single flavor overpowering the others. Great for all-day vaping.",
    mood: "Relaxed and easygoing. Works in any setting from morning to evening.",
    similar: ["blue razz", "strawberry ice", "grape ice", "mixed fruit"],
  },
  "berry'd alive": {
    taste: "Berry'd Alive delivers an electrifying burst of mixed berries with a lively, candy-like sweetness. Bold and vibrant, this flavor combines multiple berry varieties for a complex, layered fruit experience that keeps you coming back.",
    notes: ["Mixed Berries", "Candy", "Bold", "Sweet"],
    bestFor: "Vapers who want a bold, full-flavored berry experience. Great for those who prefer sweet, candy-style vapes over menthol.",
    mood: "High energy and vibrant. Perfect when you want a flavor that matches your mood.",
    similar: ["blue razz", "strawberry ice", "grape ice", "cotton candy"],
  },
  "tropical": {
    taste: "A sunny blend of tropical fruits - mango, passion fruit, guava, and pineapple harmonize into one bright, exotic flavor. Sweet and refreshing with a naturally fruity finish that transports you to a tropical beach.",
    notes: ["Mango", "Passion Fruit", "Guava", "Pineapple"],
    bestFor: "Vapers who love exotic, tropical flavors. Perfect for those seeking something adventurous beyond standard fruit options.",
    mood: "Vacation vibes year-round. Great for outdoor activities and warm weather.",
    similar: ["mango ice", "lychee ice", "miami breeze", "guava ice"],
  },
  "kiwi": {
    taste: "Fresh kiwi flavor with a bright, tart-sweet profile. The kiwi comes through naturally - slightly tangy on the inhale with a clean, sweet finish. Refreshing and distinct without being overwhelming.",
    notes: ["Fresh Kiwi", "Tart-Sweet", "Refreshing", "Clean"],
    bestFor: "Vapers who enjoy unique, slightly tart fruit flavors. A great choice for those who find common flavors too sweet.",
    mood: "Light and refreshing. Ideal as a palate cleanser or all-day vape.",
    similar: ["strawberry kiwi", "lychee ice", "green apple", "peach ice"],
  },
  "pineapple": {
    taste: "Bright, tropical pineapple sweetness with a natural tartness that keeps it from being cloying. Juicy and refreshing - like biting into a fresh pineapple ring. Clean and smooth from start to finish.",
    notes: ["Fresh Pineapple", "Tropical", "Tart-Sweet", "Juicy"],
    bestFor: "Tropical fruit enthusiasts. Great for vapers who want a distinctive, memorable flavor.",
    mood: "Bright and uplifting. Perfect for daytime and outdoor use.",
    similar: ["mango ice", "tropical mix", "citrus", "miami breeze"],
  },
  "peach": {
    taste: "Ripe, juicy peach flavor with natural sweetness and a slightly floral note on the exhale. Unlike artificial peach candy, this captures the real essence of a sun-warmed peach - soft, sweet, and deeply satisfying.",
    notes: ["Ripe Peach", "Natural Sweet", "Floral", "Smooth"],
    bestFor: "Vapers who appreciate natural, authentic fruit flavors. One of the most consistently popular flavors across all brands.",
    mood: "Calm and satisfying. A perfect all-day vape for any occasion.",
    similar: ["peach ice", "peach mango", "white peach", "apricot"],
  },
  "lemon": {
    taste: "Zesty, bright lemon with a perfect balance of sweet and tart. The citrus hit is sharp and refreshing on the inhale, mellowing to a clean, slightly sweet finish. Like lemonade in vapor form.",
    notes: ["Fresh Lemon", "Citrus", "Sweet-Tart", "Zesty"],
    bestFor: "Vapers who enjoy refreshing, tangy flavors. Great for those who find sweet flavors too heavy.",
    mood: "Energizing and refreshing. Best enjoyed during the day or when you need a pick-me-up.",
    similar: ["lemon ice", "citrus mint", "orange", "grapefruit"],
  },
  "colombian coffee": {
    taste: "Colombian Coffee Ice delivers the rich, bold taste of freshly brewed Colombian coffee with a cool, refreshing finish. Deep roasted coffee notes on the inhale with a clean, icy exhale that makes it surprisingly refreshing.",
    notes: ["Roasted Coffee", "Rich", "Bold", "Cool Ice"],
    bestFor: "Coffee lovers who want their caffeine fix in vapor form. Perfect for morning vapers or those who miss coffee flavors.",
    mood: "Morning ritual replacement or after-meal indulgence. Unique and sophisticated.",
    similar: ["caramel coffee", "vanilla latte", "mocha", "tiramisu"],
  },
  "dragon melon": {
    taste: "Dragon Melon combines the exotic sweetness of dragon fruit with the juicy freshness of melon. The result is a light, tropical, and refreshing flavor that is sweet without being heavy. Smooth and easy to vape.",
    notes: ["Dragon Fruit", "Melon", "Tropical", "Light Sweet"],
    bestFor: "Vapers who enjoy light, exotic tropical flavors. Great for those bored with standard fruit flavors.",
    mood: "Refreshing and unique. Perfect for those exploring new flavor territory.",
    similar: ["passion fruit", "guava", "lychee", "tropical mix"],
  },
  "meta moon": {
    taste: "Meta Moon is a mysterious, out-of-this-world flavor that blends sweet fruit candy notes with a cool, ethereal finish. Think blue raspberry meets bubblegum meets ice - hard to describe, impossible to forget.",
    notes: ["Sweet Candy", "Mixed Fruit", "Cool", "Unique"],
    bestFor: "Adventurous vapers who want something truly unique. One of the most recognizable Geek Bar signature flavors.",
    mood: "Anytime you want to stand out. Conversation-starting and genuinely different.",
    similar: ["bubblegum ice", "candy ice", "blue razz", "cotton candy ice"],
  },
};

/**
 * Find the best matching flavor profile for a product name.
 * Returns null if no profile matches.
 */
export function getFlavorProfile(productName: string): FlavorProfile | null {
  const lower = productName.toLowerCase();

  // Exact/contains match (longest match wins)
  let bestKey = "";
  let bestScore = 0;

  for (const key of Object.keys(FLAVOR_PROFILES)) {
    if (lower.includes(key) && key.length > bestScore) {
      bestKey = key;
      bestScore = key.length;
    }
  }

  return bestScore > 0 ? FLAVOR_PROFILES[bestKey] : null;
}

/**
 * Generate flavor-specific FAQ items for a product.
 */
export function generateFlavorFAQs(
  productName: string,
  brandName: string,
  profile: FlavorProfile
): Array<{ q: string; a: string }> {
  const shortName = productName.split("-")[0]?.trim() || productName;
  return [
    {
      q: `What does ${productName} taste like?`,
      a: profile.taste,
    },
    {
      q: `Is ${brandName} ${shortName} good?`,
      a: `Yes - ${productName} is one of the more popular flavors in the ${brandName} lineup. ${profile.bestFor} It consistently delivers ${profile.notes.slice(0, 2).join(" and ")} flavor from start to finish.`,
    },
    {
      q: `Who is ${productName} best for?`,
      a: profile.bestFor,
    },
    {
      q: `When should I vape ${productName}?`,
      a: profile.mood,
    },
    {
      q: `What flavors are similar to ${productName}?`,
      a: `If you enjoy ${productName}, you might also like: ${profile.similar.join(", ")}. All are available at GetSmoke.com with free shipping on orders over $89.`,
    },
  ];
}
