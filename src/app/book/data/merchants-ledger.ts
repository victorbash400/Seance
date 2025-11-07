import { Question } from "../types";

/**
 * MERCHANT'S LEDGER
 * =================
 * Economic history, trade, industry, commerce, and financial systems.
 * Focus on major industries, trade routes, economic booms/busts, and business practices.
 *
 * HALLOWEEN EDITION:
 * This ledger contains spooky, cursed, and unsettling questions about
 * economic history. Ghost towns, phantom assets, bloody industries,
 * and economic curses abound.
 *
 * AVAILABLE COUNTRIES:
 * United States, Canada, Brazil, United Kingdom, France, Germany, Russia, China,
 * India, Australia, Japan, Egypt, South Africa, Mexico, Argentina, Nigeria,
 * Saudi Arabia, Indonesia, Kenya
 */

export const merchantsLedger: Record<string, Question[]> = {
  "United States": [
    {
      question:
        "What term describes the abandoned settlements, 'ghost towns', left behind after 19th-century mining booms, like the Gold Rush, went bust?",
      options: [
        "Boomtowns",
        "Bust towns",
        "Hellorados",
        "Spectral Settlements",
      ],
      correctAnswer: 1,
      explanation:
        "They were 'boomtowns' when active, but 'ghost towns' after the resources dried up, leaving behind eerie shells of economic hope.",
    },
    {
      question:
        "The 'Panic of 1837' was a financial crisis that led to a severe depression. Which U.S. President's war on the 'monster' Second Bank of the United States is often blamed for contributing to it?",
      options: [
        "Andrew Jackson",
        "Martin Van Buren",
        "William Henry Harrison",
        "Abraham Lincoln",
      ],
      correctAnswer: 0,
      explanation:
        "Andrew Jackson's campaign against the 'monster' bank and his Specie Circular, which required land payments in gold or silver, destabilized the financial system.",
    },
    {
      question:
        "What grim nickname was given to the 1930s ecological and economic disaster that forced mass migration from the Great Plains, creating 'ghosts' of fertile farms?",
      options: [
        "The Great Blight",
        "The Dust Bowl",
        "The Black Blizzard",
        "Hoover's Curse",
      ],
      correctAnswer: 1,
      explanation:
        "The Dust Bowl was a period of severe dust storms that greatly damaged the ecology and agriculture, displacing hundreds of thousands of people.",
    },
    {
      question:
        "What was the 'vampiric' nickname given to the investment bank Goldman Sachs in a famous 2010 Rolling Stone article, describing it as 'wrapped around the face of humanity'?",
      options: [
        "The Great Ghoul",
        "The Wall Street Wendigo",
        "The Vampire Squid",
        "The Financial Parasite",
      ],
      correctAnswer: 2,
      explanation:
        "Matt Taibbi famously described the firm as 'a great vampire squid wrapped around the face of humanity, relentlessly jamming its blood funnel into anything that smells like money.'",
    },
    {
      question:
        "What was the 'South Sea Bubble' in 1720, a 'phantom' wealth scheme that ruined many British investors, including Sir Isaac Newton?",
      options: [
        "A literal bubble in the ocean",
        "A speculative stock market crash",
        "A failed colonization project",
        "A run on banks",
      ],
      correctAnswer: 1,
      explanation:
        "The South Sea Company's stock value was massively inflated based on 'phantom' profits from trade with South America, leading to one of history's most infamous financial crashes.",
    },
    {
      question:
        "The 'curse' of the first U.S. Treasury Secretary, Alexander Hamilton, led to his death in what infamous event, sparked in part by political and economic rivalry?",
      options: [
        "A duel with Aaron Burr",
        "A carriage accident",
        "The Whiskey Rebellion",
        "Yellow Fever epidemic",
      ],
      correctAnswer: 0,
      explanation:
        "Years of political and economic disagreements between Hamilton and Vice President Aaron Burr culminated in a fatal duel in 1804.",
    },
    {
      question:
        "The 'spectral' nature of modern U.S. currency, not backed by any physical commodity, is known as what?",
      options: [
        "Gold Standard",
        "Silver Standard",
        "Fiat Money",
        "Crypto Currency",
      ],
      correctAnswer: 2,
      explanation:
        "Fiat money has no intrinsic value; its value is 'phantom,' derived entirely from government decree and public trust, ever since the U.S. fully abandoned the gold standard in 1971.",
    },
  ],
  Canada: [
    {
      question:
        "What 'ghostly' event of the late 19th century saw thousands rush to a remote Canadian territory, only for most to find financial ruin and leave 'ghost towns' behind?",
      options: [
        "The Klondike Gold Rush",
        "The Fraser Canyon War",
        "The Red River Rebellion",
        "The Cariboo Gold Rush",
      ],
      correctAnswer: 0,
      explanation:
        "The Klondike Gold Rush (1896-1899) in the Yukon led to the rapid rise and fall of towns like Dawson City, as prospectors (called 'stampeders') arrived too late.",
    },
    {
      question:
        "The 'curse' of the cod fishery collapse in the 1990s created what eerie sight on the waters of Newfoundland?",
      options: [
        "Red tides",
        "'Ghost fleets' of idle boats",
        "Whale infestations",
        "Oil slicks",
      ],
      correctAnswer: 1,
      explanation:
        "The 1992 moratorium on Northern Cod fishing put 30,000 people out of work and left entire fishing fleets to rot, becoming 'ghost fleets' in their harbors.",
    },
    {
      question:
        "What phantom good formed the economic backbone of the Hudson's Bay Company for centuries, its value determined by fickle fashions thousands of miles away in Europe?",
      options: ["Beaver pelts", "Maple syrup", "Lumber", "Seal oil"],
      correctAnswer: 0,
      explanation:
        "Beaver pelts were the prime commodity, driven by the European demand for felt hats. When silk hats became fashionable in the 1830s, the 'phantom' value of the pelts plummeted.",
    },
    {
      question:
        "The 'spectral' cancellation of what advanced Canadian interceptor aircraft in 1959 is considered an economic and industrial 'curse' by many?",
      options: [
        "Avro Arrow",
        "Canadair Sabre",
        "De Havilland Beaver",
        "Bombardier Global Express",
      ],
      correctAnswer: 0,
      explanation:
        "The cancellation of the Avro CF-105 Arrow led to the immediate loss of 30,000 jobs and a 'brain drain' of engineers to the U.S., a 'ghost' of Canada's aerospace ambitions.",
    },
    {
      question:
        "What was the 'bloody' and exploitative name for the system where some Indigenous peoples were trapped in a cycle of debt to the Hudson's Bay Company?",
      options: [
        "The Fur Curse",
        "The Debt Peonage System",
        "The Company's Grasp",
        "The Long Haul",
      ],
      correctAnswer: 1,
      explanation:
        "This system, also called debt-bondage, ensured trappers remained perpetually indebted to the company store for supplies, guaranteeing their labor. A 'vampiric' economic relationship.",
    },
  ],
  Brazil: [
    {
      question:
        "The 'bloody' Amazon Rubber Boom (1879-1912) brought immense wealth but was built on the brutal exploitation and enslavement of what group?",
      options: [
        "Portuguese colonists",
        "Indigenous populations",
        "African slaves",
        "Rival companies",
      ],
      correctAnswer: 1,
      explanation:
        "The boom was infamous for the horrific atrocities committed against indigenous workers by 'rubber barons' like Julio César Arana, a truly 'vampiric' extraction of wealth.",
    },
    {
      question:
        "What 'economic horror' plagued Brazil in the 1980s and early 90s, where prices could rise 80% in a single month, making money feel 'phantom' and worthless?",
      options: ["Hyperinflation", "Deflation", "Stagflation", "Recession"],
      correctAnswer: 0,
      explanation:
        "Brazil's hyperinflation was a nightmare, with citizens rushing to spend their paychecks before the money 'died' in their hands. It was only slayed by the 'Plano Real' in 1994.",
    },
    {
      question:
        "What are the 'ghosts' of Brazil's 'Economic Miracle' (1968-1973), which had high growth but left behind massive debt and ill-conceived projects?",
      options: [
        "Empty favelas",
        "Abandoned factories in São Paulo",
        "The Trans-Amazonian Highway",
        "The statue of Christ the Redeemer",
      ],
      correctAnswer: 2,
      explanation:
        "The Trans-Amazonian Highway is a 'ghost' of that era's ambition, a massive, largely unfinished, and ecologically disastrous project that cuts through the jungle.",
    },
    {
      question:
        "The 'curse' of the sugar plantations in colonial Brazil was so profound that it led to the importation of over 4 million of what 'human commodity'?",
      options: [
        "Indigenous laborers",
        "European indentured servants",
        "Enslaved Africans",
        "Cattle",
      ],
      correctAnswer: 2,
      explanation:
        "Brazil was the largest single destination for the transatlantic slave trade. The sugar economy was 'blooded' by and built entirely upon enslaved African labor.",
    },
    {
      question:
        "What 'phantom' agricultural product, whose price collapsed in 1929, led to a 'ghostly' glut where it was infamously burned in locomotives instead of coal?",
      options: ["Sugar", "Rubber", "Tobacco", "Coffee"],
      correctAnswer: 3,
      explanation:
        "Brazil was so dependent on coffee that the 1929 crash created a massive surplus. The 'ghost' of this lost wealth was burned as fuel or dumped in the sea.",
    },
  ],
  "United Kingdom": [
    {
      question:
        "What 'ghastly' economic institutions, codified by the 'Poor Law' of 1834, forced the destitute into brutal labor in exchange for food and shelter?",
      options: ["Factories", "Prisons", "Workhouses", "Asylums"],
      correctAnswer: 2,
      explanation:
        "Workhouses were designed to be as unpleasant as possible to deter 'idleness'. They are a 'haunting' feature of the Victorian economy, splitting up families.",
    },
    {
      question:
        "The 'vampiric' British East India Company was infamously implicated in worsening what 1770 'horror' that killed an estimated 10 million people?",
      options: [
        "The Great Fire of London",
        "The Bengal Famine",
        "The Irish Potato Famine",
        "The War of 1812",
      ],
      correctAnswer: 1,
      explanation:
        "The company's exploitative land tax policies and hoarding of grain are blamed for turning a drought into a catastrophic famine that wiped out a third of Bengal's population.",
    },
    {
      question:
        "What was the 'South Sea Bubble' in 1720, a 'phantom' wealth scheme that ruined many British investors, including Sir Isaac Newton?",
      options: [
        "A literal bubble in the ocean",
        "A speculative stock market crash",
        "A failed colonization project",
        "A run on banks",
      ],
      correctAnswer: 1,
      explanation:
        "The South Sea Company's stock value was massively inflated based on 'phantom' profits from trade with South America, leading to one of history's most infamous financial crashes.",
    },
    {
      question:
        "What was the 'curse' of the 'Winter of Discontent' in 1978-79, which saw widespread strikes that left the dead unburied and garbage piling in the streets?",
      options: [
        "A plague",
        "A war",
        "Economic stagnation and inflation",
        "A royal scandal",
      ],
      correctAnswer: 2,
      explanation:
        "This period of stagflation and union disputes caused a breakdown of public services, a 'ghastly' economic moment that led to the election of Margaret Thatcher.",
    },
    {
      question:
        "The 'Luddites' were 19th-century textile workers who smashed what 'monstrous' new technology, fearing it would create a 'graveyard' for their jobs?",
      options: [
        "Steam engines",
        "Mechanical looms and stocking frames",
        "Cotton gins",
        "Railroads",
      ],
      correctAnswer: 1,
      explanation:
        "The Luddites weren't just anti-technology; they were protesting the 'vampiric' use of machines in a 'fraudulent and deceitful manner' to get around labor practices and de-skill workers.",
    },
    {
      question:
        "What 'bloody' tax policy, which extracted grain and resources, is seen as a major factor in the 'spectral' depopulation of Ireland during the Great Famine (1845-1849)?",
      options: [
        "The Window Tax",
        "Continued food exports",
        "The Corn Laws",
        "The Salt Tax",
      ],
      correctAnswer: 1,
      explanation:
        "Despite the potato blight, Ireland remained a net exporter of food. The 'vampiric' insistence on exporting grain, beef, and butter to England, while millions starved, is a haunting part of its economic history.",
    },
  ],
  France: [
    {
      question:
        "What 'phantom' investment scheme, linked to French territories in North America, collapsed in 1720, bankrupting the French government and countless citizens?",
      options: [
        "The South Sea Bubble",
        "The Mississippi Bubble",
        "The Tulip Mania",
        "The Louisiana Curse",
      ],
      correctAnswer: 1,
      explanation:
        "Economist John Law created the Mississippi Company, which absorbed the French national debt. Its stock bubble was based on 'phantom' wealth from Louisiana, and its collapse was catastrophic.",
    },
    {
      question:
        "What 'bloody' and deeply unpopular tax on a vital preservative, a state monopoly, was a major grievance that 'haunted' the monarchy before the French Revolution?",
      options: [
        "The 'Taille' (Land Tax)",
        "The 'Gabelle' (Salt Tax)",
        "The 'Corvée' (Labor Tax)",
        "The 'Vingtième' (Income Tax)",
      ],
      correctAnswer: 1,
      explanation:
        "The 'Gabelle' was hated. The price of salt was artificially high and varied by region, forcing people to buy from the state. Salt smugglers could be 'broken on the wheel.'",
    },
    {
      question:
        "The 'guillotine' of the French Revolution had an 'economic shadow.' What happened to the vast lands and wealth of the 'decapitated' aristocracy and the Church?",
      options: [
        "They were returned to their heirs",
        "They were destroyed by mobs",
        "They were seized and auctioned by the state",
        "They were given to the poor",
      ],
      correctAnswer: 2,
      explanation:
        "The state seized these assets, called 'biens nationaux' (national property), and auctioned them to fund the revolutionary government, creating a new class of property owners.",
    },
    {
      question:
        "What 'ghostly' line of fortifications, an immense economic bet that ultimately failed, 'haunted' France's military strategy before WWII?",
      options: [
        "The Hindenburg Line",
        "The Siegfried Line",
        "The Maginot Line",
        "The Atlantic Wall",
      ],
      correctAnswer: 2,
      explanation:
        "The Maginot Line was a massive, costly, and technologically advanced defensive line that the Germans simply... went around. It represents a 'phantom' of failed economic and military calculation.",
    },
    {
      question:
        "The 'spectral' flight of what group, following the revocation of the Edict of Nantes in 1685, is considered a 'vampiric' drain on the French economy?",
      options: [
        "The Jesuits",
        "The Huguenots (Protestants)",
        "The Aristocracy",
        "The Jews",
      ],
      correctAnswer: 1,
      explanation:
        "The Huguenots were a highly skilled group of artisans, merchants, and bankers. Their expulsion to countries like England, Germany, and the Netherlands was a self-inflicted 'brain drain' that crippled French industry.",
    },
  ],
  Germany: [
    {
      question:
        "What 'economic nightmare' of the Weimar Republic in 1923 saw citizens using wheelbarrows of 'phantom' money, made worthless by the minute, to buy bread?",
      options: [
        "Hyperinflation",
        "Stagflation",
        "The Great Depression",
        "The Bank Run",
      ],
      correctAnswer: 0,
      explanation:
        "The 1923 hyperinflation is the stuff of economic horror stories. The currency became so worthless that it was cheaper to burn as fuel than to use to buy fuel.",
    },
    {
      question:
        "What 'shadow' economy emerged in post-WWII Germany, where cigarettes, coffee, and chocolate were more valuable than the 'ghost' Reichsmark currency?",
      options: [
        "The 'Schwarzmarkt' (Black Market)",
        "The 'Tauschhandel' (Barter Trade)",
        "The 'Zigarettenwährung' (Cigarette Currency)",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "All these terms apply. The official currency was a 'ghost.' Real trade happened on the black market, where Allied cigarettes became a 'phantom' currency (Zigarettenwährung) until the 1948 reform.",
    },
    {
      question:
        "What 'ghastly' state-owned agency, the *Treuhandanstalt*, was responsible for the 'economic burial' of thousands of East German companies after reunification in 1990?",
      options: [
        "The Stasi",
        "The Bundesbank",
        "The Treuhandanstalt",
        "The Volkswagen Group",
      ],
      correctAnswer: 2,
      explanation:
        "The 'Treuhand' was tasked with privatizing 8,000 East German state-owned enterprises. It led to massive unemployment and de-industrialization, leaving 'ghost' factories across the East.",
    },
    {
      question:
        "The 'curse' of the *Kombinate* (state combines) in East Germany was their focus on what, creating a 'phantom' of industrial success while goods were shoddy and scarce?",
      options: [
        "Consumer satisfaction",
        "Meeting arbitrary production quotas",
        "Profitability",
        "Exporting to the West",
      ],
      correctAnswer: 1,
      explanation:
        "The entire economy was a 'ghost,' focused on meeting 5-year plan quotas, not on demand or quality. This led to chronic shortages and environmental disasters.",
    },
  ],
  Russia: [
    {
      question:
        "What was the 'phantom' asset given to Russian citizens in the 1990s to buy shares in formerly state-owned companies, most of which were snatched up by future 'oligarchs'?",
      options: ["Rubles", "Stock certificates", "Vouchers", "Gold coins"],
      correctAnswer: 2,
      explanation:
        "Each citizen received a 'voucher' with a nominal value. In the chaotic 'Wild 90s,' most people sold them for cash, allowing a few well-connected men to 'haunt' the economy by consolidating immense wealth.",
    },
    {
      question:
        "The 'ghosts' of what brutal Soviet forced-labor camp system formed a massive, 'bloody' economic empire under Stalin?",
      options: [
        "The Gulag",
        "The Kremlin",
        "The KGB",
        "The Kolkhoz (Collective Farms)",
      ],
      correctAnswer: 0,
      explanation:
        "The Gulag system was not just for political prisoners; it was a vast, 'vampiric' economic enterprise that built canals, mined gold, and logged Siberia, all with the blood and starvation of its inmates.",
    },
    {
      question:
        "What is the 'curse' of natural resources, which Russia suffers from, where a country's over-reliance on oil and gas 'devours' other sectors of its economy?",
      options: [
        "Dutch Disease",
        "Russian Plague",
        "Siberian Syndrome",
        "The Oligarch's Curse",
      ],
      correctAnswer: 0,
      explanation:
        "'Dutch Disease' is the economic term for this 'curse.' A strong resource-backed currency makes manufacturing and other exports too expensive to compete, 'hollowing out' the economy.",
    },
    {
      question:
        "The 'spectre' of *Prodrazvyorstka* (food requisition) during the Russian Civil War was a 'vampiric' policy that led to what devastating 1921-22 event?",
      options: [
        "The Povolzhye Famine",
        "The Decembrist Revolt",
        "The Crimean War",
        "The 1905 Revolution",
      ],
      correctAnswer: 0,
      explanation:
        "The Bolsheviks' policy of forcibly seizing grain from peasants (prodrazvyorstka) to feed the Red Army and cities directly led to a catastrophic famine that killed 5-10 million people.",
    },
  ],
  China: [
    {
      question:
        "What is the 'eerie' modern phenomenon of 'ghost cities' in China, vast urban developments that stand nearly empty?",
      options: [
        "Ancient ruins",
        "Tourist attractions",
        "Over-speculation in real estate",
        "Military zones",
      ],
      correctAnswer: 2,
      explanation:
        "These 'ghost cities' (e.g., Ordos Kangbashi) are the 'phantom' result of a construction boom fueled by debt and real estate speculation, building for 'ghost' residents.",
    },
    {
      question:
        "What 'bloody' economic campaign by Mao Zedong (1958-1962) involved backyard steel furnaces and led to the 'Great Famine,' killing tens of millions?",
      options: [
        "The Cultural Revolution",
        "The Great Leap Forward",
        "The Long March",
        "The Hundred Flowers Campaign",
      ],
      correctAnswer: 1,
      explanation:
        "The Great Leap Forward was an economic horror show. Forcing peasants to make 'phantom' steel in backyard furnaces, combined with collectivization, led to the deadliest famine in human history.",
    },
    {
      question:
        "What 'shadowy' financial system in China operates outside of official state banking, creating 'phantom' risks of a debt crisis?",
      options: [
        "'Guanxi' Networks",
        "Shadow Banking",
        "The Silk Road Fund",
        "The Black Market",
      ],
      correctAnswer: 1,
      explanation:
        "China's 'shadow banking' system consists of trusts, wealth management products, and underground lenders, holding trillions in 'spooky' off-balance-sheet debt.",
    },
    {
      question:
        "The 'shattering' of what Mao-era economic 'curse' (or promise) in the 1980s and 90s meant workers no longer had guaranteed lifetime employment?",
      options: [
        "The 'Great Wall'",
        "The 'Iron Rice Bowl'",
        "The 'Mandate of Heaven'",
        "The 'Red Book'",
      ],
      correctAnswer: 1,
      explanation:
        "The 'Iron Rice Bowl' was the promise of a job for life, with housing and healthcare, from the state. 'Shattering' it during Deng Xiaoping's reforms created the 'anxiety' of a market economy.",
    },
    {
      question:
        "The 'First Opium War' (1839-1842) was a 'vampiric' conflict where Britain forced China to accept imports of what 'cursed' commodity?",
      options: ["Cotton", "Tea", "Opium", "Silver"],
      correctAnswer: 2,
      explanation:
        "Britain fought a war to 'curse' China with drug addiction, all to fix a trade imbalance. The 'vampiric' trade drained silver from China and 'blooded' the path for the 'Century of Humiliation.'",
    },
  ],
  India: [
    {
      question:
        "The 'vampiric' drain of wealth from India to Britain during the colonial period was named the 'Drain Theory' by what early Indian nationalist?",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Dadabhai Naoroji",
        "B. R. Ambedkar",
      ],
      correctAnswer: 2,
      explanation:
        "Dadabhai Naoroji argued that Britain was 'bleeding' India dry by extracting resources, imposing salaries for British officials, and crippling its industries. A 'vampiric' economic relationship.",
    },
    {
      question:
        "The 'ghost' of what bureaucratic system, which 'haunted' the Indian economy from 1947 to 1991, required complex licenses for a company to do almost anything?",
      options: [
        "The 'License Raj'",
        "The 'Permit Curse'",
        "The 'Red Tape Nightmare'",
        "The 'Babudom'",
      ],
      correctAnswer: 0,
      explanation:
        "The 'License Raj' was a 'spectral' web of bureaucracy that 'strangled' economic growth, creating massive corruption and inefficiency until the 1991 reforms 'exorcised' it.",
    },
    {
      question:
        "The 'haunting' legacy of the Bengal Famine of 1770, which killed 10 million, is often blamed on the 'vampiric' policies of what corporation?",
      options: [
        "The British Government",
        "The Mughal Empire",
        "The British East India Company",
        "The Dutch East India Company",
      ],
      correctAnswer: 2,
      explanation:
        "The Company's brutal land tax policies, which it increased during the drought, and its hoarding of grain 'blooded' the region and turned a bad harvest into a 'spectral' catastrophe.",
    },
    {
      question:
        "What is the 'curse' of 'black money' in India, a 'phantom' economy that operates in cash to evade what?",
      options: [
        "Taxes",
        "Religious law",
        "Foreign exchange",
        "The caste system",
      ],
      correctAnswer: 0,
      explanation:
        "This 'shadow' economy, worth hundreds of billions, is a 'curse' on development. The 2016 'demonetization' was a 'shock therapy' attempt to 'exorcise' these 'phantom' assets.",
    },
  ],
  Australia: [
    {
      question:
        "Like the U.S., Australia is home to 'ghost towns' left from what 19th-century 'madness' that began in places like Ballarat and Bendigo?",
      options: [
        "The Gold Rushes",
        "The Opal Rushes",
        "The Uranium Boom",
        "The Emu War",
      ],
      correctAnswer: 0,
      explanation:
        "The Victorian gold rush of the 1850s was one of the largest in history, creating 'boomtowns' that died just as quickly, leaving 'ghosts' behind in the bush.",
    },
    {
      question:
        "What 'cursed' invasive species, introduced in 1859 for hunting, 'devoured' the landscape and became an economic 'plague' for farmers?",
      options: ["Cane Toads", "Rabbits", "Sheep", "Foxes"],
      correctAnswer: 1,
      explanation:
        "The European rabbit. 24 rabbits multiplied into hundreds of millions, a 'grey tide' that 'consumed' crops and pasture, a true economic 'curse' that haunts the continent.",
    },
    {
      question:
        "What 'bloody' 19th-century industry, based in places like Hobart, involved hunting massive sea creatures and often ended in 'ghastly' death for the hunters?",
      options: ["Sealing", "Whaling", "Shark fishing", "Crocodile hunting"],
      correctAnswer: 1,
      explanation:
        "The whaling industry was a 'bloody' and brutal business, a cornerstone of the early colonial economy. The 'tryworks' on ships, boiling blubber, were 'hellish' sights.",
    },
    {
      question:
        "The 'spectre' of the 'tyranny of distance' has 'haunted' Australia's economy, referring to its 'cursed' isolation from what?",
      options: [
        "Fresh water",
        "Its own population centers",
        "Major world markets",
        "The British crown",
      ],
      correctAnswer: 2,
      explanation:
        "This 'tyranny' refers to the high cost and time of trading with its main partners in Europe and North America, a 'ghost' that has shaped its entire economic history.",
    },
  ],
  Japan: [
    {
      question:
        "What 'spectral' name is given to Japanese companies that are only kept alive by 'vampiric' bank loans, 'haunting' the economy since the 'Lost Decade' of the 1990s?",
      options: [
        "'Zaibatsu'",
        "'Keiretsu'",
        "'Zombie Companies'",
        "'Salarymen'",
      ],
      correctAnswer: 2,
      explanation:
        "'Zombie companies' are firms that are unprofitable and deep in debt but are kept 'undead' by banks, 'sucking the blood' from the economy and preventing growth.",
    },
    {
      question:
        "What 'ghastly' Japanese term means 'death from overwork,' a 'curse' of its post-war economic 'miracle'?",
      options: [
        "'Karoshi'",
        "'Harakiri'",
        "'Arigato'",
        "'Kodokushi' (Lonely Death)",
      ],
      correctAnswer: 0,
      explanation:
        "'Karoshi' is a recognized social and economic phenomenon where extreme working hours lead to fatal strokes, heart attacks, or suicide.",
    },
    {
      question:
        "The 'curse' of the 'Lost Decade' (and more) in the 1990s was the 'phantasmagorical' bursting of what two economic 'bubbles'?",
      options: [
        "The Dot-com and Housing Bubble",
        "The Stock Market and Real Estate Bubble",
        "The Tulip and South Sea Bubble",
        "The Anime and Tech Bubble",
      ],
      correctAnswer: 1,
      explanation:
        "In 1989, the land under the Imperial Palace in Tokyo was 'phantomly' valued at more than all of California. The bursting of this and the stock bubble 'cursed' Japan with decades of stagnation.",
    },
    {
      question:
        "What 'monstrous' pre-WWII industrial and financial conglomerates, like Mitsubishi, were 'slain' (broken up) by the Allies to 'exorcise' Japan's military-industrial complex?",
      options: ["'Zaibatsu'", "'Shoguns'", "'Daimyo'", "'Yakuza'"],
      correctAnswer: 0,
      explanation:
        "The 'Zaibatsu' ('financial cliques') were 'monstrous' family-controlled monopolies that dominated the Japanese economy. They were later 'reborn' as the less-fearsome 'Keiretsu.'",
    },
  ],
  Egypt: [
    {
      question:
        "The 'curse' of building the Pyramids was the immense economic cost, which was not paid in 'phantom' currency but in what 'bloody' resource?",
      options: [
        "Slave labor (traditional view)",
        "Gold",
        "A rotating levy of paid, fed laborers",
        "Foreign mercenaries",
      ],
      correctAnswer: 2,
      explanation:
        "While not 'slaves' in the chattel sense, the 'corvée' system was a 'bloody' state levy, forcing tens of thousands of peasants to leave their farms to labor and die for the 'ghost' of their Pharaoh's afterlife.",
    },
    {
      question:
        "Control of what 'phantom' asset, a 'golden' shortcut for global trade, was 'vampirically' seized from Egypt by Britain in 1882, despite being built on Egyptian land?",
      options: [
        "The Nile River",
        "The Suez Canal",
        "The Port of Alexandria",
        "The Aswan Dam",
      ],
      correctAnswer: 1,
      explanation:
        "The Suez Canal. Egypt's leader, Isma'il Pasha, went bankrupt, 'bleeding' shares to Britain. The subsequent British 'protection' was a 'vampiric' occupation that lasted decades.",
    },
    {
      question:
        "What single crop 'cursed' Egypt's economy in the 19th century, making it 'vampirically' dependent on British textile mills and foreign markets?",
      options: ["Wheat", "Dates", "Long-staple cotton", "Sugar cane"],
      correctAnswer: 2,
      explanation:
        "Under Muhammad Ali, Egypt was forced into a cotton monoculture. This 'curse' enriched a few but made the entire economy 'spectral,' subject to the 'whims' of global prices and British industry.",
    },
    {
      question:
        "The 'ghosts' of what community were 'exorcised' from their ancestral lands by the building of the Aswan High Dam in the 1960s, 'drowning' their history?",
      options: [
        "The Bedouins",
        "The Copts",
        "The Nubians",
        "The Greeks of Alexandria",
      ],
      correctAnswer: 2,
      explanation:
        "The creation of Lake Nasser, an economic necessity for power and irrigation, 'drowned' the ancestral homeland of the Nubian people, displacing over 100,000 'ghosts' of a lost culture.",
    },
  ],
  "South Africa": [
    {
      question:
        "What 'cursed' gemstones, mined in war-torn zones and sold to fund conflicts, 'haunted' South Africa's neighbors and stained the global diamond trade?",
      options: [
        "'Blood Diamonds' (Conflict Diamonds)",
        "'Apartheid Gems'",
        "'Cursed Ice'",
        "'Randlord Rocks'",
      ],
      correctAnswer: 0,
      explanation:
        "South Africa, as a diamond hub, was central to the 'blood diamond' trade from Angola and Sierra Leone. The Kimberley Process was created to 'exorcise' these 'bloody' stones from the market.",
    },
    {
      question:
        "The 'spectre' of Apartheid's economy was built on reserving skilled jobs for whites and forcing black populations onto what 'phantom' homelands?",
      options: ["'Townships'", "'Bantustans'", "'Reservations'", "'Slums'"],
      correctAnswer: 1,
      explanation:
        "'Bantustans' were 'phantom' independent states created to strip Black South Africans of citizenship. They were overcrowded, economically 'dead' reservoirs of cheap labor.",
    },
    {
      question:
        "What 'ghastly' nickname was given to the powerful, often ruthless European magnates who 'vampirically' controlled the 19th-century gold and diamond mines?",
      options: [
        "The 'Boers'",
        "The 'Randlords'",
        "The 'Afrikaners'",
        "The 'Mine Barons'",
      ],
      correctAnswer: 1,
      explanation:
        "The 'Randlords' (from the Witwatersrand gold reef) were men like Cecil Rhodes and Barney Barnato who made 'blood' fortunes from the deep-level mines, built on a 'spectral' system of migrant labor.",
    },
    {
      question:
        "The 'curse' of 'State Capture' refers to a recent 'vampiric' form of corruption where private interests 'possessed' what state-owned enterprises (SOEs)?",
      options: [
        "Mining companies",
        "Eskom (power) and Transnet (transport)",
        "The banks",
        "The farms",
      ],
      correctAnswer: 1,
      explanation:
        "The Gupta family, through their ties to President Zuma, 'vampirically' drained SOEs like Eskom (power utility), 'haunting' the country with rolling blackouts (loadshedding).",
    },
  ],
  Mexico: [
    {
      question:
        "What 'phantom' metal, 'vampirically' extracted from mines like Potosí (in Bolivia, but part of the same system) and Zacatecas, 'blooded' the Spanish Empire's economy?",
      options: ["Gold", "Silver", "Copper", "Jade"],
      correctAnswer: 1,
      explanation:
        "Vast quantities of 'phantom' silver were mined using the 'bloody' *mita* (forced labor) system, 'haunting' the world economy and creating 'ghost towns' when the veins ran dry.",
    },
    {
      question:
        "The 'bloody' *encomienda* system, established by the Spanish conquistadors, was a 'phantom' grant of what?",
      options: [
        "Land",
        "Gold mines",
        "The forced labor of indigenous people",
        "Titles of nobility",
      ],
      correctAnswer: 2,
      explanation:
        "It was a 'vampiric' system. A Spaniard was granted 'care' over a group of indigenous people in exchange for 'protecting' them; in reality, it was a 'spectral' justification for slavery.",
    },
    {
      question:
        "What 'curse' of a single commodity has 'haunted' the Mexican economy, with the 'ghostly' decline of the giant Cantarell oil field causing a national crisis?",
      options: [
        "The 'Corn Curse'",
        "The 'Silver Curse'",
        "The 'Oil Curse' (Dutch Disease)",
        "The 'Tequila Curse'",
      ],
      correctAnswer: 2,
      explanation:
        "Mexico became 'cursed' by its dependence on oil from the Cantarell 'monster' field. Its 'ghostly' and rapid decline since 2004 has put immense, 'spooky' pressure on state finances.",
    },
    {
      question:
        "What 'shadow' economy, a 'monstrous' parallel state, 'vampirically' drains billions from the formal economy and 'bleeds' the population through violence and extortion?",
      options: [
        "The 'Maquiladora' sector",
        "The 'Hacienda' system",
        "The drug cartels",
        "The 'Telenovela' industry",
      ],
      correctAnswer: 2,
      explanation:
        "The drug cartels are a 'shadow' state. They don't just traffic drugs; they 'bleed' legitimate businesses through extortion, 'haunting' entire regions and creating 'ghosts' of failed enterprises.",
    },
  ],
  Argentina: [
    {
      question:
        "Argentina suffers from a 're-animating' economic 'horror' that it can't seem to 'slay,' making its currency a 'phantom' and savings 'turn to dust.' What is it?",
      options: [
        "Deflation",
        "Chronic Hyperinflation",
        "Stagflation",
        "The Gold Standard",
      ],
      correctAnswer: 1,
      explanation:
        "Argentina is 'cursed' with a cycle of hyperinflation. It's a 'zombie' problem that 'devours' governments and the life savings of its citizens, a true economic 'horror story.'",
    },
    {
      question:
        "What 'ghastly' name is given to the 'phantom' investors who buy a country's 'dead' (defaulted) debt for pennies and then 'vampirically' sue for the full amount?",
      options: [
        "'Vulture Funds'",
        "'Zombie Banks'",
        "'Shadow Lenders'",
        "'Grave Robbers'",
      ],
      correctAnswer: 0,
      explanation:
        "'Vulture funds' are a 'horror' for defaulted nations. They 'haunted' Argentina for years, blocking it from global finance until they were paid billions for 'dead' bonds.",
    },
    {
      question:
        "The 'ghosts' of what 'bloody' period (1976-1983) 'haunt' Argentina, when 30,000 people were 'disappeared' by a military junta, often for economic or union-related reasons?",
      options: [
        "The 'Tango Wars'",
        "The 'Falklands War'",
        "The 'Dirty War'",
        "The 'Peronist Plague'",
      ],
      correctAnswer: 2,
      explanation:
        "The 'Dirty War' was political, but also 'vampirically' economic. The junta 'disappeared' thousands of union organizers and leftists to 'exorcise' 'subversion' from the factories.",
    },
    {
      question:
        "Argentina is the 'ghost' of what economic 'phantom,' being one of the only countries to 'de-develop' from a rich, first-world economy into a developing one?",
      options: [
        "The 'Great Reversal'",
        "The 'Argentine Paradox'",
        "The 'Pampas Curse'",
        "The 'Evita Effect'",
      ],
      correctAnswer: 1,
      explanation:
        "The 'Argentine Paradox' 'haunts' economists. In the early 20th century, it was richer than France or Germany. Decades of political and economic 'curses' turned it into a 'ghost' of its former self.",
    },
  ],
  Nigeria: [
    {
      question:
        "Nigeria is the classic example of the 'Resource Curse,' where 'vampiric' wealth from what commodity has 'poisoned' its politics and 'strangled' other industries?",
      options: ["Oil", "Diamonds", "Coltan", "Cocoa"],
      correctAnswer: 0,
      explanation:
        "The 'curse' of oil ('Dutch Disease') has 'haunted' Nigeria, fostering massive corruption and 'hollowing out' its once-strong agricultural and manufacturing sectors.",
    },
    {
      question:
        "What 'phantom' fraud, named after a section of the Nigerian criminal code, promises 'spectral' fortunes from a 'cursed' prince in your inbox?",
      options: [
        "The 'Lagos Lottery'",
        "The 'Biafran Curse'",
        "The '419 Scam' (Advance-fee fraud)",
        "The 'Juju Money'",
      ],
      correctAnswer: 2,
      explanation:
        "The '419 scam' is a 'phantom' economy in itself, where tricksters promise a 'ghost' of a fortune in exchange for a small 'blood' offering (an advance fee).",
    },
    {
      question:
        "The 'bloody' Biafran War (1967-1970) was 'haunted' by an economic 'curse' used by the Nigerian government to 'starve' the secessionist state. What was it?",
      options: [
        "An oil embargo",
        "A food and currency blockade",
        "Hyperinflation",
        "Seizure of foreign assets",
      ],
      correctAnswer: 1,
      explanation:
        "The blockade was a 'vampiric' policy that 'starved' Biafra. The Nigerian government also 'exorcised' the Biafran currency, making all their money 'phantom' and worthless overnight.",
    },
    {
      question:
        "What 'spectral' term is used for the 'ghost' projects, often funded by oil money, that litter Nigeria: steel mills that never open, refineries that don't refine?",
      options: [
        "'White Elephant' Projects",
        "'Phantom' Infrastructure",
        "'Ghost' Constructions",
        "'Cursed' Investments",
      ],
      correctAnswer: 0,
      explanation:
        "Nigeria is 'haunted' by 'white elephants,' 'ghost' projects that 'devoured' billions. The Ajaokuta Steel Mill is a famous 'zombie' example, built but never fully operational.",
    },
  ],
  "Saudi Arabia": [
    {
      question:
        "Like Nigeria, Saudi Arabia is 'haunted' by the 'curse' of what commodity, which has created 'phantom' wealth while 'possessing' its entire economic and social structure?",
      options: ["Dates", "Camels", "Oil", "Water"],
      correctAnswer: 2,
      explanation:
        "The 'curse' of oil (resource curse) is 'monstrous.' It means the state's wealth comes from 'phantom' holes in the ground, not from a 'living' economy of taxed citizens, shaping its entire political contract.",
    },
    {
      question:
        "What 'vampiric' system 'binds' millions of expatriate workers to their employers, creating a 'shadow' workforce with few rights?",
      options: [
        "The 'Jizya' system",
        "The 'Kafala' (sponsorship) system",
        "The 'Iqta' system",
        "The 'Wasta' system",
      ],
      correctAnswer: 1,
      explanation:
        "The 'Kafala' system is a 'curse' for many low-wage workers. It 'vampirically' ties a worker's legal status to their sponsor (kafeel), creating 'ghosts' in the system who can't leave or change jobs.",
    },
    {
      question:
        "What 'spectral' phenomenon refers to the millions of foreign workers who form the 'living dead' of the Saudi economy, while official citizen unemployment remains high?",
      options: [
        "'Ghost' workers",
        "'Phantom' labor",
        "The 'Expat Curse'",
        "'Shadow' population",
      ],
      correctAnswer: 0,
      explanation:
        "The economy is 'haunted' by a 'spectral' divide: 'ghost' workers (expats) who do most of the labor, and a citizen population the state is trying to 'animate' into work via 'Saudization.'",
    },
    {
      question:
        "The 'bloody' price of rapid, oil-fueled modernization has been the 'death' of what, creating 'spectral' cities of concrete and glass?",
      options: [
        "Traditional mud-brick architecture (e.g., Diriyah)",
        "The pearling industry",
        "The nomadic Bedouin lifestyle",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "The 'vampiric' speed of oil wealth 'devoured' the 'ghosts' of the past. The 'bloody' price of modern Riyadh was the 'death' of the old ways of life, trade, and architecture.",
    },
  ],
  Indonesia: [
    {
      question:
        "What 'monstrous' corporation, the world's first multinational, held a 'vampiric' monopoly on the spice trade and 'blooded' the islands with its private army?",
      options: [
        "The British East India Company",
        "The Dutch East India Company (VOC)",
        "The Portuguese Empire",
        "The Spanish Empire",
      ],
      correctAnswer: 1,
      explanation:
        "The VOC (Vereenigde Oostindische Compagnie) was an economic 'monster.' It could wage war, sign treaties, and mint coins. It 'bled' the Banda Islands, committing genocide for a 'phantom' monopoly on nutmeg.",
    },
    {
      question:
        "The 'ghosts' of what 19th-century Dutch colonial policy 'haunt' Java, forcing peasants to use 20% of their land to grow 'cursed' commodity crops for the state?",
      options: [
        "The 'Forced Labor' System",
        "The 'Spice Curse'",
        "The 'Cultivation System' (Cultuurstelsel)",
        "The 'Plantation' System",
      ],
      correctAnswer: 2,
      explanation:
        "The 'Cultuurstelsel' was a 'vampiric' system. It 'forced' Javanese farmers to grow 'bloody' cash crops like indigo and sugar, often leading to famine as they couldn't grow rice.",
    },
    {
      question:
        "The 'bloody' economic collapse during what 1997 'nightmare' led to the 'death' of the Suharto regime, as the currency became 'phantom' and riots 'devoured' the cities?",
      options: [
        "The Asian Financial Crisis",
        "The OPEC Oil Crisis",
        "The Dot-com Bubble",
        "The Global Financial Crisis",
      ],
      correctAnswer: 0,
      explanation:
        "The 1997 Asian Financial Crisis 'slaughtered' the Indonesian Rupiah. The 'economic horror' and 'spectral' poverty led to the 'bloody' May 1998 riots and the 'exorcism' of President Suharto.",
    },
    {
      question:
        "The 'curse' of what modern agricultural product is 'devouring' Indonesia's rainforests, creating a 'hellish' haze and 'exterminating' orangutans for profit?",
      options: ["Coffee", "Rubber", "Palm oil", "Timber"],
      correctAnswer: 2,
      explanation:
        "Palm oil is a 'monstrous' industry. The 'curse' is that it's highly profitable, but the 'slash-and-burn' clearing of 'spectral' rainforests 'bleeds' the planet and 'chokes' the region in smoke.",
    },
  ],
  Kenya: [
    {
      question:
        "What 'bloody' nickname was given to the British-built Uganda Railway, a 'cursed' project that 'devoured' the lives of thousands of imported Indian laborers?",
      options: [
        "The 'Lunatic Express'",
        "The 'Iron Snake'",
        "The 'Hell Train'",
        "The 'Colonial Curse'",
      ],
      correctAnswer: 0,
      explanation:
        "It was called the 'Lunatic Express' because of the 'insane' cost and the 'ghastly' dangers, including the 'man-eaters of Tsavo' (two lions) that 'devoured' dozens of workers, 'bleeding' the project.",
    },
    {
      question:
        "The 'spectre' of 'land-grabbing' 'haunts' Kenya, where 'vampiric' political elites 'exorcise' communities from their land to build what?",
      options: [
        "National parks",
        "Luxury golf courses and developments",
        "Public schools",
        "Factories",
      ],
      correctAnswer: 1,
      explanation:
        "This 'nefarious' economic practice 'bleeds' poor communities, 'devouring' public land for 'phantom' private profit, a 'curse' that 'haunts' post-colonial Kenya.",
    },
    {
      question:
        "The 'curse' of what 'bloody' trade 'haunts' Kenya's economy, where 'vampiric' poachers 'slaughter' wildlife for 'phantom' medicinal beliefs in Asia?",
      options: [
        "The 'Ivory Trade'",
        "The 'Coffee Trade'",
        "The 'Tea Trade'",
        "The 'Flower Trade'",
      ],
      correctAnswer: 0,
      explanation:
        "The 'bloody' ivory and rhino horn trade is a 'shadow' economy. It 'curses' Kenya's greatest natural asset (its wildlife) and 'bleeds' its future tourism potential.",
    },
    {
      question:
        "The 'ghosts' of what 'phantom' assets 'haunted' the 'Nyayo' era of President Daniel arap Moi, representing massive, 'vampiric' corruption?",
      options: [
        "The Goldenberg Scandal",
        "The Anglo-Leasing Scandal",
        "The 'Kazi kwa Vijana' fund",
        "Both A and B",
      ],
      correctAnswer: 0,
      explanation:
        "The Goldenberg scandal was a 'phantom' export scheme for gold and diamonds that 'bled' billions from the state, a 'vampiric' act of 'haunting' corruption.",
    },
  ],
};
