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
