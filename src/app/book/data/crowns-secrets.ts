import { shadow } from "three/tsl";
import { Question } from "../types";

/**
 * CROWN'S SECRETS: THE SHADOW CABINET
 * ===================================
 * Delve into the chilling whispers, unsolved mysteries, and dark pacts
 * that haunt the corridors of power. These are the spectral tales
 * and bloody secrets hidden behind the throne and the presidential seal.
 *
 * AVAILABLE COUNTRIES:
 * United States, Canada, Brazil, United Kingdom, France, Germany, Russia, China,
 * India, Australia, Japan, Egypt, South Africa, Mexico, Argentina, Nigeria,
 * Saudi Arabia, Indonesia, Kenya
 *
 * Each question unearths a darker piece of political history.
 */

export const crownsSecrets: Record<string, Question[]> = {
  "United States": [
    {
      question:
        "Which president's ghost is rumored to haunt the White House, often appearing before national tragedies?",
      options: [
        "Andrew Jackson",
        "Abraham Lincoln",
        "Theodore Roosevelt",
        "Richard Nixon",
      ],
      correctAnswer: 1,
      explanation:
        "Abraham Lincoln's ghost is the most famous, allegedly seen by figures like Winston Churchill and Queen Wilhelmina, often as an omen.",
    },
    {
      question:
        "What was the codename for the CIA's secret program in the 1950s-70s that involved mind-control experiments, often using LSD on unwitting subjects?",
      options: [
        "Operation Paperclip",
        "Project MOCKINGBIRD",
        "Project MKULTRA",
        "Operation COINTELPRO",
      ],
      correctAnswer: 2,
      explanation:
        "Project MKULTRA was a clandestine CIA operation involving hundreds of secret experiments, some of which led to psychosis, permanent injury, and death.",
    },
    {
      question:
        "The mysterious 1849 death of which famous writer is surrounded by conspiracy theories, including 'cooping' (a form of electoral fraud where victims were drugged and forced to vote)?",
      options: [
        "Herman Melville",
        "Nathaniel Hawthorne",
        "Edgar Allan Poe",
        "Walt Whitman",
      ],
      correctAnswer: 2,
      explanation:
        "Edgar Allan Poe was found delirious in Baltimore in clothes that weren't his. 'Cooping' is one of many dark theories about his unexplained death.",
    },
    {
      question:
        "The 'Business Plot' of 1933 was an alleged political conspiracy by wealthy businessmen to overthrow which president in a fascist coup?",
      options: [
        "Herbert Hoover",
        "Franklin D. Roosevelt",
        "Harry S. Truman",
        "Woodrow Wilson",
      ],
      correctAnswer: 1,
      explanation:
        "Marine Corps Major General Smedley Butler testified to Congress about an alleged plot by a cabal of plutocrats to install a fascist dictator, though the plot was never fully proven.",
    },
    {
      question:
        "What 19th-century political movement was fueled by a conspiracy theory that the government was secretly infiltrated by a 'deep state' cabal?",
      options: [
        "The Know-Nothing Party",
        "The Anti-Masonic Party",
        "The Free Soil Party",
        "The Populist Party",
      ],
      correctAnswer: 1,
      explanation:
        "The Anti-Masonic Party (1820s-30s) was founded on the fear that the Freemasons were a secret society plotting to control the nation, a precursor to modern 'deep state' fears.",
    },
    {
      question:
        "The haunting disappearance of the entire Roanoke Colony in 1590 left behind what single, cryptic word carved into a post?",
      options: ["GONE", "CROATOAN", "LOST", "BEWARE"],
      correctAnswer: 1,
      explanation:
        "The word 'CROATOAN' was the only clue left by the 115 colonists, leading to centuries of speculation about their spectral or tragic fate.",
    },
    {
      question: "What was the 'COINTELPRO' program run by the FBI?",
      options: [
        "A project to decode Soviet messages",
        "A secret operation to survey, infiltrate, and discredit political organizations",
        "A plan to build underground bunkers for Congress",
        "An economic stimulus package",
      ],
      correctAnswer: 1,
      explanation:
        "COINTELPRO (Counterintelligence Program) was a series of covert and often illegal projects by the FBI, targeting groups like the Black Panther Party and anti-Vietnam War activists.",
    },
    {
      question:
        "The 1943 'Philadelphia Experiment' is a conspiracy theory alleging the U.S. Navy secretly made a ship invisible, with horrific consequences for the crew, including...",
      options: [
        "Being fused into the ship's bulkhead",
        "Gaining supernatural powers",
        "Being transported to Mars",
        "Speaking in dead languages",
      ],
      correctAnswer: 0,
      explanation:
        "The legend, thoroughly debunked but persistent, claims the USS Eldridge's crew suffered grisly fates, including going mad or being physically merged with the ship's metal.",
    },
    {
      question:
        "Who was the first U.S. President to be the victim of an assassination attempt (though the pistols misfired)?",
      options: [
        "George Washington",
        "Thomas Jefferson",
        "Andrew Jackson",
        "Abraham Lincoln",
      ],
      correctAnswer: 2,
      explanation:
        "In 1835, Richard Lawrence attempted to shoot Andrew Jackson. Both his pistols misfired, an event Jackson attributed to divine providence (or spectral protection).",
    },
  ],
  Canada: [
    {
      question:
        "What dark chapter of Quebec's history in the 1940s and 50s saw thousands of orphans falsely certified as mentally ill and confined to psychiatric institutions?",
      options: [
        "The October Crisis",
        "The Great Darkness",
        "The Conscription Crisis",
        "The Duplessis Orphans",
      ],
      correctAnswer: 3,
      explanation:
        "The Duplessis Orphans scandal involved the provincial government and Catholic Church conspiring to re-classify orphanages as hospitals to get federal funds, condemning thousands to horrific conditions.",
    },
    {
      question:
        "What was the 'FLQ Crisis' in 1970, which led to the only peacetime use of the War Measures Act?",
      options: [
        "A stock market crash",
        "A separatist group's kidnapping and murder of a politician",
        "A massive flu outbreak",
        "A dispute over fishing rights",
      ],
      correctAnswer: 1,
      explanation:
        "The Front de libération du Québec (FLQ) kidnapped a British diplomat and murdered Quebec's Vice-Premier, Pierre Laporte, plunging the nation into a dark crisis.",
    },
    {
      question:
        "The 'Komagata Maru' incident of 1914 involved a ship of mostly Sikh immigrants being turned away from Vancouver due to what spectral policy?",
      options: [
        "A quarantine for a 'ghost plague'",
        "The 'Continuous Journey' regulation",
        "A tax on non-Christians",
        "Fear of 'foreign magic'",
      ],
      correctAnswer: 1,
      explanation:
        "Canada used the racist 'Continuous Journey' regulation to deny entry, effectively barring immigrants from India. The ship was forced to return, where many passengers were later killed or arrested.",
    },
    {
      question:
        "The execution of which Métis leader in 1885 is seen as a haunting national tragedy and a symbol of Western alienation?",
      options: ["Gabriel Dumont", "Big Bear", "Louis Riel", "Poundmaker"],
      correctAnswer: 2,
      explanation:
        "Louis Riel was tried and hanged for treason. His execution remains a deeply divisive and spectral event in Canadian history, seen by many as the martyrdom of a people.",
    },
    {
      question: "What was the 'Fruit Machine'?",
      options: [
        "A secret Cold War code-breaking device",
        "A slang term for the federal budget",
        "A homophobic device used to 'detect' gay men in the civil service",
        "An agricultural program that bankrupted farmers",
      ],
      correctAnswer: 2,
      explanation:
        "In the 1950s-60s, the Canadian government developed a 'Fruit Machine' in a paranoid attempt to identify and purge homosexuals from the public service, believing they were susceptible to Soviet blackmail.",
    },
    {
      question:
        "Which Prime Minister was known for his deep interest in spiritualism, séances, and communicating with the 'other side' (including his dead mother and dogs)?",
      options: [
        "Sir John A. Macdonald",
        "William Lyon Mackenzie King",
        "Pierre Trudeau",
        "John Diefenbaker",
      ],
      correctAnswer: 1,
      explanation:
        "Mackenzie King, Canada's longest-serving PM, kept detailed diaries of his secret séances and attempts to contact the spirit world to guide his political decisions.",
    },
    {
      question:
        "The 'St. Roch,' a famous RCMP arctic patrol vessel, is rumored to be one of Canada's most haunted locations. What dark event is linked to its ghosts?",
      options: [
        "A mutiny and secret execution",
        "The drowning of its entire original crew",
        "A mysterious Inuit curse",
        "The desperate, frozen death of a crewman",
      ],
      correctAnswer: 3,
      explanation:
        "The ghost of a crewman, 'Salty' Bill, is said to haunt the ship (now in a museum) after he died a grim death, frozen while on watch.",
    },
    {
      question:
        "The 'Black Donnellys' were a family notoriously murdered by a vigilante mob in 1880, an event that haunts Ontario's history. What was the political failure?",
      options: [
        "The family were political refugees",
        "They were government spies",
        "The local constabulary was involved in the mob",
        "They had bribed the wrong politician",
      ],
      correctAnswer: 2,
      explanation:
        "The massacre was a complete breakdown of law and order, with local authorities and neighbors forming a 'Vigilance Committee' that brutally murdered the family. No one was ever convicted.",
    },
  ],
  Brazil: [
    {
      question:
        "The 1954 suicide of President Getúlio Vargas, a dark turning point, was described in his suicide note as a sacrifice against what?",
      options: [
        "'The shadow of the Church'",
        "'Ghosts of the monarchy'",
        "'International and national groups' plotting against him",
        "'A personal curse on his family'",
      ],
      correctAnswer: 2,
      explanation:
        "His dramatic note, the 'Testament Letter,' claimed 'occult forces' and foreign interests were crushing him, turning his death into a political martyrdom that haunted his enemies for decades.",
    },
    {
      question:
        "What was 'Operation Condor,' a dark pact Brazil's military dictatorship joined in the 1970s?",
      options: [
        "An anti-malaria campaign",
        "A secret alliance of South American dictatorships to hunt down and 'disappear' political opponents",
        "A project to build a secret jungle capital",
        "An economic treaty with the US",
      ],
      correctAnswer: 1,
      explanation:
        "Operation Condor was a clandestine terror network that allowed member states (like Brazil, Argentina, and Chile) to operate on each other's soil to kidnap, torture, and murder dissidents.",
    },
    {
      question:
        "The 'Candelária Massacre' of 1993 involved the killing of eight street children by whom?",
      options: [
        "A rival gang",
        "A religious cult",
        "A foreign death squad",
        "Off-duty police officers",
      ],
      correctAnswer: 3,
      explanation:
        "The massacre, where police officers executed sleeping children in front of the Candelária Church, became a haunting symbol of state brutality and its war on the poor.",
    },
    {
      question:
        "What was the 'War of Canudos' (1896-97), a conflict where the new Brazilian Republic brutally crushed a settlement of thousands of religious mystics?",
      options: [
        "A war against Portuguese loyalists",
        "A peasant uprising for land reform",
        "A brutal military campaign against a messianic community",
        "A border dispute with Bolivia",
      ],
      correctAnswer: 2,
      explanation:
        "The government saw Antônio Conselheiro's settlement as a monarchist, fanatical threat. The army was sent four times, culminating in a massacre that cleansed the heretical town.",
    },
    {
      question:
        "Who was the 'Vampire of Niterói,' a figure who highlighted the darkest failings of the political and justice system in the 1970s?",
      options: [
        "A serial killer who drank his victims' blood",
        "A corrupt politician who 'bled' the treasury",
        "A police officer who led a death squad",
        "A political dissident who used a 'vampire' persona",
      ],
      correctAnswer: 0,
      explanation:
        "While a real (and gruesome) serial killer, his case became a dark political symbol. His 'supernatural' moniker was used to create a media frenzy that distracted from the dictatorship's own brutalities.",
    },
    {
      question:
        "The 'Revolta da Chibata' (Revolt of the Lash) in 1910 was a naval mutiny led by black sailors protesting what spectral practice?",
      options: [
        "Ghostly apparitions on their ships",
        "The routine use of brutal floggings",
        "Being forced to sail on 'cursed' routes",
        "Unequal pay for 'spirit-cleansing' duties",
      ],
      correctAnswer: 1,
      explanation:
        "Led by João Cândido Felizardo, sailors (many descended from slaves) seized warships in Rio's harbor, threatening to bomb the city unless the 'ghost' of slavery—brutal corporal punishment—was abolished.",
    },
    {
      question:
        "What dark conspiracy surrounds the 1976 death of President Juscelino Kubitschek, who died in a 'car accident'?",
      options: [
        "He was fleeing the country with stolen gold",
        "He faked his death",
        "He was assassinated as part of Operation Condor",
        "He was killed by a rival's family curse",
      ],
      correctAnswer: 2,
      explanation:
        "Kubitschek was a major political opponent of the ruling dictatorship. A 2013 truth commission concluded his death was highly suspicious and likely a political assassination disguised as an accident.",
    },
  ],
  "United Kingdom": [
    {
      question:
        "The 'Princes in the Tower,' Edward V and his brother, disappeared in 1483. Who is the primary suspect in their rumored murder, a dark secret of the crown?",
      options: [
        "Henry VII",
        "Their uncle, Richard III",
        "A French spy",
        "The Archbishop of Canterbury",
      ],
      correctAnswer: 1,
      explanation:
        "Richard III had them declared illegitimate and seized the throne. The boys were never seen again, and their supposed murder in the Tower of London remains one of history's greatest royal mysteries.",
    },
    {
      question: "What was the 'Gunpowder Plot' of 1605?",
      options: [
        "A plan to assassinate the king with a cursed musket",
        "A conspiracy by Catholic nobles to blow up Parliament with the King inside",
        "A military strategy involving explosive decoys",
        "A public health initiative to burn diseased corpses",
      ],
      correctAnswer: 1,
      explanation:
        "Guy Fawkes and his co-conspirators planned to use 36 barrels of gunpowder to annihilate the Protestant aristocracy in a single, fiery blast.",
    },
    {
      question:
        "The 'Profumo Affair' in 1963, a dark scandal, threatened to bring down the government because the Secretary of State for War was sharing a mistress with...",
      options: [
        "The leader of the opposition",
        "A member of the royal family",
        "A Soviet naval attaché and spy",
        "A notorious London gangster",
      ],
      correctAnswer: 2,
      explanation:
        "John Profumo's affair with Christine Keeler, who was also involved with Soviet spy Yevgeny Ivanov, created a massive national security (and moral) panic during the Cold War.",
    },
    {
      question:
        "Which English monarch is known as 'Bloody Mary' for her brutal, burning persecution of hundreds of religious dissenters?",
      options: [
        "Elizabeth I",
        "Mary, Queen of Scots",
        "Queen Victoria",
        "Mary I",
      ],
      correctAnswer: 3,
      explanation:
        "Queen Mary I, a fervent Catholic, had over 280 Protestants burned at the stake during her short, dark reign in a failed attempt to reverse the English Reformation.",
    },
    {
      question:
        "Conspiracy theories about 'Jack the Ripper' in 1888 often implicate which powerful figure or institution in a cover-up?",
      options: [
        "A member of the Royal Family",
        "The Prime Minister himself",
        "A cabal of bankers",
        "A group of rogue police officers",
      ],
      correctAnswer: 0,
      explanation:
        "The 'royal conspiracy' theory, though baseless, alleges Prince Albert Victor was the killer and that the police (and government) covered it up, a rumor that haunts the case to this day.",
    },
    {
      question:
        "What was the 'Harrowing of the North,' a brutal campaign by William the Conqueror that left a spectral scar on England?",
      options: [
        "The first census (Domesday Book)",
        "A campaign of burning, salting, and mass killing in Northern England",
        "A forced conversion of pagans",
        "The construction of the Tower of London",
      ],
      correctAnswer: 1,
      explanation:
        "To suppress a rebellion in 1069-70, William ordered a scorched-earth policy so brutal that it caused mass famine, depopulated the region for decades, and was spoken of in horror for generations.",
    },
    {
      question:
        "The 'South Sea Bubble' of 1720 was a financial crash so devastating it's 'haunted' British finance for centuries. What was the political scandal?",
      options: [
        "The company was a front for French spies",
        "It was a pyramid scheme based on ghost ships",
        "Company insiders and politicians used bribery to inflate the stock",
        "The company's founder claimed to be immortal",
      ],
      correctAnswer: 2,
      explanation:
        "The South Sea Company, which was supposedly trading in South American slaves, was a massive speculative bubble built on insider trading and government corruption that ruined thousands.",
    },
  ],
  France: [
    {
      question:
        "What was the 'Reign of Terror,' the darkest phase of the French Revolution?",
      options: [
        "A period of plague",
        "A foreign invasion",
        "A state-sanctioned period of mass executions by guillotine",
        "A series of spectral hauntings in Paris",
      ],
      correctAnswer: 2,
      explanation:
        "Led by Robespierre's Committee of Public Safety, the 'Terror' (1793-94) saw thousands, including the King and Queen, publicly beheaded as 'enemies of the revolution'.",
    },
    {
      question:
        "The 'St. Bartholomew's Day Massacre' in 1572 was a targeted mass assassination of whom, staining the streets of Paris with blood?",
      options: [
        "Royalist nobles",
        "Huguenots (French Protestants)",
        "Suspected witches",
        "Tax collectors",
      ],
      correctAnswer: 1,
      explanation:
        "Instigated by Catherine de' Medici, the massacre began as targeted assassinations but devolved into a week of mob violence that killed thousands of Protestants, a dark wedding gift for a royal marriage.",
    },
    {
      question:
        "What was the 'Affair of the Poisons' (l'affaire des poisons) during the reign of Louis XIV?",
      options: [
        "A food shortage that led to mass poisoning",
        "A political scandal involving accusations of witchcraft, assassination, and black magic at court",
        "A failed attempt to poison the King's wine",
        "A medical crisis due to lead pipes",
      ],
      correctAnswer: 1,
      explanation:
        "This dark scandal (1677-1682) implicated high-ranking members of the aristocracy in satanic rituals, poisonings, and plots, revealing a horrifying, superstitious underbelly to the 'Sun King's' court.",
    },
    {
      question:
        "The 'Dreyfus Affair' (1894-1906) was a spectral political scandal that tore France apart, centered on what injustice?",
      options: [
        "A haunted military prison",
        "The wrongful conviction of a Jewish army officer for treason",
        "A corrupt deal to sell the Eiffel Tower",
        "A plot to restore the monarchy",
      ],
      correctAnswer: 1,
      explanation:
        "Captain Alfred Dreyfus was framed as a German spy, a case built on antisemitism, forged documents, and a military cover-up that divided the nation for over a decade.",
    },
    {
      question:
        "The 'Beast of Gévaudan' terrorized a French province from 1764-67, killing over 100 people. What dark political rumor surrounded the attacks?",
      options: [
        "It was a demon summoned by a heretic",
        "It was a werewolf, protected by local nobles",
        "It was a secret weapon from Britain",
        "It was a ghost avenging a past massacre",
      ],
      correctAnswer: 1,
      explanation:
        "While likely a wolf (or wolves), the failure of the King's armies to stop it, and its supposed supernatural abilities, led to dark rumors that it was a man-beast, or a creature trained and protected by a sinister, perhaps noble, human master.",
    },
    {
      question:
        "Which French King, known as the 'Mad,' was plagued by 'spectral' delusions, such as believing he was made of glass and might shatter?",
      options: [
        "Louis XIV",
        "Charles VI",
        "Louis IX (Saint Louis)",
        "Philip IV",
      ],
      correctAnswer: 1,
      explanation:
        "Charles VI 'the Mad' (reigned 1380-1422) suffered bouts of psychosis, including the 'glass delusion,' where he refused to be touched. His erratic rule fueled the dark chaos of the Hundred Years' War.",
    },
    {
      question:
        "What was the 'Code Noir' (Black Code), a royal decree that institutionalized a particularly grim form of political and social control in 1685?",
      options: [
        "A dress code for funerals",
        "A secret set of laws for spies",
        "A decree defining the brutal conditions of slavery in the colonies",
        "A set of rules for the 'Black Masses' in the Poison Affair",
      ],
      correctAnswer: 2,
      explanation:
        "Issued by Louis XIV, the 'Code Noir' was a chillingly bureaucratic document that legalized and regulated the brutal dehumanization, torture, and ownership of enslaved people in the French empire.",
    },
  ],
  Germany: [
    {
      question: "What was the 'Night of the Long Knives' in 1934?",
      options: [
        "A medieval battle",
        "A brutal purge where Hitler had his own political and paramilitary rivals assassinated",
        "A failed assassination attempt on Hitler",
        "A night of mass book-burning",
      ],
      correctAnswer: 1,
      explanation:
        "In this bloody purge, Hitler used the SS to murder Ernst Röhm and other leaders of the SA (Stormtroopers), consolidating his power through brutal, extrajudicial killings.",
    },
    {
      question:
        "The 'Reichstag Fire' in 1933, which burned the German parliament, was a dark turning point. Who was blamed, allowing Hitler to seize emergency powers?",
      options: [
        "A lone Dutch communist",
        "The ghost of the Kaiser",
        "A secret Jewish cabal",
        "British spies",
      ],
      correctAnswer: 0,
      explanation:
        "Marinus van der Lubbe was arrested, but the Nazis immediately used the fire as proof of a 'communist plot,' terrifying the public and passing the Reichstag Fire Decree, which eviscerated civil liberties.",
    },
    {
      question:
        "What was the Stasi, the ghostly secret police of East Germany?",
      options: [
        "A royal guard",
        "An economic ministry",
        "A vast domestic surveillance and terror apparatus",
        "A historical society",
      ],
      correctAnswer: 2,
      explanation:
        "The Stasi (Ministry for State Security) was one of the most pervasive secret police forces in history, using a massive network of civilian informants to create a spectral atmosphere of paranoia and betrayal.",
    },
    {
      question:
        "The 'Baader-Meinhof Gang,' or Red Army Faction (RAF), was a far-left militant group that terrorized West Germany. What dark event happened on 'Death Night' 1977?",
      options: [
        "They successfully assassinated the Chancellor",
        "The group's leaders were found dead in their high-security prison cells",
        "They detonated a nuclear device",
        "They made a pact with the Stasi",
      ],
      correctAnswer: 1,
      explanation:
        "On October 18, 1977, three RAF leaders were found dead in their cells, officially ruled suicides. This has been haunted by persistent conspiracy theories of state-sanctioned murder.",
    },
    {
      question:
        "What was 'Aktion T4,' the Nazi program that preceded the Holocaust?",
      options: [
        "A plan to invade Switzerland",
        "A secret 'euthanasia' program to murder disabled German citizens",
        "A project to develop jet aircraft",
        "A propaganda film initiative",
      ],
      correctAnswer: 1,
      explanation:
        "Aktion T4 was a secret program of mercy killing where doctors and nurses murdered over 70,000 mentally ill and disabled people, often in gas chambers—a chilling rehearsal for the Final Solution.",
    },
    {
      question:
        "The 1923 'Beer Hall Putsch' was Hitler's failed first attempt to seize power. What occult-leaning society was a key spiritual influence on early Nazi leaders?",
      options: [
        "The Freemasons",
        "The Rosicrucians",
        "The Thule Society",
        "The Bavarian Illuminati",
      ],
      correctAnswer: 2,
      explanation:
        "The Thule Society was a racist, nationalist, and occultist group in Munich. Key figures like Rudolf Hess and Alfred Rosenberg were members, and it was a dark spiritual precursor to Nazi ideology.",
    },
    {
      question:
        "Who was the 'Spirit-Seer' (Geisterseher) whose prophecies of doom and spectral court intrusions terrified the Prussian court in the late 18th century?",
      options: [
        "Cagliostro",
        "Johann Christoph von Woellner",
        "Baron von Münchhausen",
        "Goethe",
      ],
      correctAnswer: 1,
      explanation:
        "Woellner, a mystical fraud, gained immense political power over the superstitious King Frederick William II, pushing reactionary policies and creating a spectral 'shadow government' of Rosicrucians.",
    },
  ],
  Russia: [
    {
      question:
        "What was the 'Oprichnina,' the black-clad, spectral police force created by Ivan the Terrible?",
      options: [
        "His personal bodyguard",
        "A religious order of monks",
        "A state-sanctioned organization of thugs who terrorized and murdered the nobility",
        "The first Russian explorers",
      ],
      correctAnswer: 2,
      explanation:
        "The Oprichniki (1565-1572) rode black horses, used a dog's head and a broom as their emblem (to 'sniff out treason and sweep it away'), and unleashed a dark reign of terror, torture, and mass execution.",
    },
    {
      question:
        "The death of Grigori Rasputin, the 'mad monk' who haunted the final days of the Tsars, was famously difficult. How did he *not* supposedly die?",
      options: [
        "Poisoned with cyanide",
        "Shot multiple times",
        "Beaten and bound",
        "Burned at the stake",
      ],
      correctAnswer: 3,
      explanation:
        "The legend of his murder by nobles is that he survived poisoned cakes, poisoned wine, and multiple gunshots before finally being drowned in a frozen river. His 'spectral' influence outlived him.",
    },
    {
      question: "What was the 'Great Purge' or 'Great Terror' of 1936-1938?",
      options: [
        "A program to burn 'Western' books",
        "A severe winter",
        "A campaign of political repression and mass execution by Joseph Stalin",
        "An outbreak of the plague",
      ],
      correctAnswer: 2,
      explanation:
        "Stalin's paranoia fueled a dark period of show trials, secret police (NKVD) terror, and mass graves, where millions were executed or sent to the Gulag as 'enemies of the people'.",
    },
    {
      question:
        "The 'Dyatlov Pass incident' involves the mysterious, grisly deaths of nine hikers in 1959. What political/military conspiracy theory 'haunts' the case?",
      options: [
        "They were killed by a mythical Yeti",
        "They were assassinated by foreign spies",
        "They stumbled upon a secret Soviet weapons test (or 'ghost' rocket)",
        "They were sacrificed by a local tribe",
      ],
      correctAnswer: 2,
      explanation:
        "The bizarre injuries (including high radiation) and the military's secrecy have led to persistent theories that the hikers were killed, perhaps accidentally, by a secret military experiment.",
    },
    {
      question:
        "What happened to the Romanov family (Tsar Nicholas II and his children) after they were deposed?",
      options: [
        "They fled to England",
        "They were executed by a Bolshevik firing squad in a cellar",
        "They became monks and nuns",
        "They died of disease in captivity",
      ],
      correctAnswer: 1,
      explanation:
        "The entire family, including the children, was brutally executed and their bodies hidden, a dark act to ensure the 'ghost' of the monarchy could never return to haunt the new regime.",
    },
    {
      question: "What was the 'Decembrist' revolt of 1825?",
      options: [
        "A peasant uprising over grain prices",
        "A failed, almost 'spectral' palace coup by liberal army officers",
        "A religious schism",
        "A Cossack rebellion",
      ],
      correctAnswer: 1,
      explanation:
        "After the death of Tsar Alexander I, a small group of nobles tried to seize power to install a constitutional monarchy. The revolt was disorganized, 'ghostly' in its lack of popular support, and brutally crushed.",
    },
    {
      question:
        "The 'Time of Troubles' (1598-1613) was a dark interregnum haunted by civil war, famine, and... what else?",
      options: [
        "A series of 'False Dmitrys' claiming to be the murdered Tsarevich",
        "A plague of werewolves",
        "An alien invasion",
        "A pact with the Ottoman Empire",
      ],
      correctAnswer: 0,
      explanation:
        "The period was haunted by multiple impostors (the 'False Dmitrys') who claimed to be the 'ghost' of Ivan the Terrible's son, who had died mysteriously years earlier.",
    },
  ],
  China: [
    {
      question:
        "What was the 'Cultural Revolution' (1966-1976), a dark period initiated by Mao Zedong?",
      options: [
        "A national arts festival",
        "A violent sociopolitical movement to purge 'impure' elements and re-impose Maoist thought",
        "An attempt to modernize the economy",
        "A war with the Soviet Union",
      ],
      correctAnswer: 1,
      explanation:
        "Mao unleashed the 'Red Guards' to destroy the 'Four Olds,' leading to a decade of chaos, public humiliation, torture, mass killings, and the destruction of countless cultural artifacts.",
    },
    {
      question:
        "The 'Taiping Rebellion' (1850-1864) was one of the bloodiest conflicts in human history. Its leader, Hong Xiuquan, claimed to be what?",
      options: [
        "The reincarnation of Genghis Khan",
        "A living Buddha",
        "The younger brother of Jesus Christ",
        "A 500-year-old vampire",
      ],
      correctAnswer: 2,
      explanation:
        "Hong Xiuquan's divine, spectral 'vision' led him to establish a 'Heavenly Kingdom' and wage a war against the Qing dynasty that resulted in the deaths of 20-30 million people.",
    },
    {
      question: "What was the 'Hundred Flowers Campaign' of 1956?",
      options: [
        "A successful agricultural reform",
        "A brief period of encouraging free speech, which was actually a trap",
        "A traditional spring festival",
        "A campaign against opium",
      ],
      correctAnswer: 1,
      explanation:
        "Mao invited intellectuals to 'let a hundred flowers bloom' by criticizing the government. It was a dark political trap; those who spoke out were soon identified and persecuted in the subsequent 'Anti-Rightist Campaign'.",
    },
    {
      question:
        "The first Emperor, Qin Shi Huang, was obsessed with immortality. What 'spectral' army did he have built for his tomb to protect him in the afterlife?",
      options: [
        "A legion of sacrificed concubines",
        "A massive fortress of human bones",
        "The Terracotta Army",
        "An 'army' of enchanted scrolls",
      ],
      correctAnswer: 2,
      explanation:
        "He was buried with a massive, 'undead' army of thousands of life-sized terracotta warriors, chariots, and horses, a dark monument to his power and his fear of death.",
    },
    {
      question:
        "The 1989 'Tiananmen Square' incident is famously 'erased' from Chinese political history. What iconic, 'ghostly' image defines the protest?",
      options: [
        "A student setting himself on fire",
        "The 'Goddess of Democracy' statue",
        "A lone man standing in front of a column of tanks",
        "A massive book-burning",
      ],
      correctAnswer: 2,
      explanation:
        "The image of 'Tank Man,' whose identity and fate remain a mystery, has become a spectral symbol of the protest and the subsequent bloody crackdown, which is heavily censored by the state.",
    },
    {
      question:
        "The 'Boxer Rebellion' (1899-1901) was an anti-foreign, anti-colonial uprising. What 'spectral' belief did the 'Boxers' hold?",
      options: [
        "They believed they were all ghosts",
        "They could channel the spirits of dead heroes",
        "They were invulnerable to foreign bullets",
        "They could control the weather",
      ],
      correctAnswer: 2,
      explanation:
        "The 'Boxers' (Yihetuan) practiced rituals and magic they believed made them immune to bullets, a dark delusion that led to their brutal slaughter by a modern international army.",
    },
    {
      question:
        "What was the 'Great Leap Forward' (1958-1962), a dark political campaign that resulted in the 'Great Famine'?",
      options: [
        "A successful space program",
        "Mao's attempt to rapidly industrialize China, which led to mass starvation",
        "A cultural exchange with the West",
        "A massive expansion of the Great Wall",
      ],
      correctAnswer: 1,
      explanation:
        "The policy of forcing peasants into communes and diverting labor to 'backyard steel furnaces' led to a catastrophic famine, a 'ghost' in modern Chinese history, that killed tens of millions of people.",
    },
  ],
  India: [
    {
      question:
        "What was 'The Emergency' (1975-1977), a dark 21-month period in India's political history?",
      options: [
        "A war with Pakistan",
        "A severe famine",
        "A period where Prime Minister Indira Gandhi suspended democracy and ruled by decree",
        "An outbreak of a mysterious plague",
      ],
      correctAnswer: 2,
      explanation:
        "Citing 'internal disturbances,' Indira Gandhi suspended civil liberties, jailed political opponents, and imposed press censorship, a 'spectral' haunting of India's democratic foundations.",
    },
    {
      question:
        "The 'Thuggee' were a notorious 'death cult' suppressed by the British. What was their dark political and religious practice?",
      options: [
        "They were government-hired assassins",
        "They ritualistically strangled travelers as a sacrifice to the goddess Kali",
        "They were a political party that used poison",
        "They were cannibals who haunted trade routes",
      ],
      correctAnswer: 1,
      explanation:
        "For centuries, this secret fraternity of 'deceivers' would befriend travelers only to murder them, a dark, spectral threat that the British used to justify their 'civilizing' rule and police state.",
    },
    {
      question:
        "The 1947 'Partition of India' created India and Pakistan. It was also a dark political event that unleashed what?",
      options: [
        "A decade of prosperity",
        "A 'ghost train' epidemic",
        "One of the largest and most violent mass migrations and sectarian massacres in human history",
        "A nuclear arms race",
      ],
      correctAnswer: 2,
      explanation:
        "The hurried and chaotic political division led to communal riots and 'rivers of blood,' as 10-20 million people were displaced and up to 2 million were killed in brutal, spectral violence.",
    },
    {
      question:
        "What dark mystery surrounds the 1966 death of Homi Bhabha, the 'father' of India's nuclear program?",
      options: [
        "He was killed by a rival's curse",
        "He died in a mysterious plane crash, with rumors of a CIA 'shadow' plot",
        "He was devoured by a tiger",
        "He spontaneously combusted",
      ],
      correctAnswer: 1,
      explanation:
        "His plane, 'Kanchenjunga,' crashed into Mont Blanc. Theories persist that it was an act of sabotage by the CIA (or other 'shadow' agencies) to halt India's nuclear ambitions.",
    },
    {
      question:
        "The 'Nithari Killings' (2005-06) exposed a dark political failure. The serial killings of children were ignored by police because...",
      options: [
        "They believed a 'ghost' was responsible",
        "The victims were from poor, powerless families",
        "The killer was a high-ranking politician",
        "They were ordered to cover it up by a 'shadow' agency",
      ],
      correctAnswer: 1,
      explanation:
        "The case became a horrific symbol of how the political and police system can utterly fail the poor, allowing the 'vampire-like' killers to operate for years just yards from a police post.",
    },
    {
      question:
        "What dark legend haunts 'Bhangarh Fort,' a site so 'cursed' that the government's Archaeological Survey of India legally prohibits entry after sunset?",
      options: [
        "It was the site of a British massacre",
        "A 'shadow-eater' demon lives there",
        "A magician's dying curse doomed the town to be 'ghostly' and uninhabited",
        "It is built on a 'hellmouth'",
      ],
      correctAnswer: 2,
      explanation:
        "Legend says a sorcerer, scorned by a princess, cursed the fort with desolation. This political act (by a government agency) of recognizing the 'haunting' makes it unique.",
    },
    {
      question:
        "What was the 'Jallianwala Bagh' Massacre of 1919, a 'spectral' turning point in the independence movement?",
      options: [
        "A stampede at a religious festival",
        "British troops firing into a peaceful crowd, trapping them in a walled garden",
        "A 'ghost' attack on a British fort",
        "A mass suicide pact by protesters",
      ],
      correctAnswer: 1,
      explanation:
        "Brigadier-General Dyer ordered his troops to fire on unarmed men, women, and children, killing hundreds (or thousands). The 'ghosts' of this brutal act galvanized the entire nation against British rule.",
    },
  ],
  Australia: [
    {
      question:
        "What was the 'Stolen Generations,' a dark political policy that haunted Australia for much of the 20th century?",
      options: [
        "A policy of forcibly removing Aboriginal and Torres Strait Islander children from their families",
        "A generation of soldiers lost in WWI",
        "A group of politicians who stole an election",
        "A failed eugenics program",
      ],
      correctAnswer: 0,
      explanation:
        "This racist government policy was based on the idea of 'breeding out' Indigenous heritage, creating a 'spectral' generation of people disconnected from their land, families, and culture.",
    },
    {
      question:
        "The 1975 'Dismissal' of Prime Minister Gough Whitlam is a dark political crisis. What 'spectral' figure is rumored to have pulled the strings?",
      options: [
        "The ghost of Captain Cook",
        "The CIA and/or MI6",
        "The Australian Mafia",
        "A cabal of bankers",
      ],
      correctAnswer: 1,
      explanation:
        "The Queen's representative, the Governor-General, sacked the elected PM. Persistent 'shadow' theories, known as 'The Freeth-Rowley Letters,' suggest US/UK intelligence agencies orchestrated the 'constitutional coup' over fears Whitlam would close US bases.",
    },
    {
      question:
        "What was the 'Rum Rebellion' of 1808, the only successful armed takeover of a government in Australia's history?",
      options: [
        "A sailors' mutiny over 'ghostly' rum rations",
        "A military coup by the 'New South Wales Corps' against Governor William Bligh",
        "A tax revolt by rum brewers",
        "A temperance movement that turned violent",
      ],
      correctAnswer: 1,
      explanation:
        "The military, which had a corrupt monopoly on the rum trade, deposed Bligh (the infamous 'Mutiny on the Bounty' captain), a dark example of the colony's lawless, 'shadow' economy.",
    },
    {
      question:
        "The 1978 'Sydney Hilton bombing' was Australia's first major act of domestic terrorism. What dark conspiracy haunts the official narrative?",
      options: [
        "It was a 'shadow' operation by Australian intelligence (ASIO) to justify their existence",
        "It was carried out by a ghost",
        "The bomb was planted by the Prime Minister",
        "It was a warning from aliens",
      ],
      correctAnswer: 0,
      explanation:
        "The bomb, which killed three, was targeting a Commonwealth summit. Theories persist that it was a 'false flag' operation by security services to gain more power and funding, a 'ghost' in the system.",
    },
    {
      question:
        "The 'Azaria Chamberlain' case (a 'dingo took my baby') became a dark media frenzy. How did it expose a 'spectral' flaw in the political/justice system?",
      options: [
        "The dingo was a 'spirit' animal",
        "The legal system was manipulated by faulty 'forensic science' and public hysteria",
        "The Prime Minister declared her guilty before the trial",
        "The family was part of a 'shadow' religious cult",
      ],
      correctAnswer: 1,
      explanation:
        "Lindy Chamberlain was wrongly convicted of murder based on flawed science and a media-fueled 'trial by public.' It became a dark symbol of how justice can be 'haunted' by prejudice and hysteria.",
    },
    {
      question:
        "What was the 'Myall Creek Massacre' of 1838, a dark event for which white settlers were actually (and uniquely) hanged?",
      options: [
        "A battle with French soldiers",
        "A 'spectral' stampede of cattle",
        "The brutal, unprovoked murder of 28 Aboriginal people by stockmen",
        "A 'shadow' cult ritual",
      ],
      correctAnswer: 2,
      explanation:
        "The massacre itself was horrific, but the subsequent trial and execution of seven perpetrators was a 'spectral' event because it was the first time the colonial legal system had held settlers accountable for such atrocities (though it did not stop them).",
    },
  ],
  Japan: [
    {
      question:
        "What was 'Unit 731,' a dark political and military secret from WWII?",
      options: [
        "A kamikaze squadron",
        "A naval code-breaking team",
        "A covert biological and chemical warfare research unit that performed horrific human experiments",
        "The Emperor's 'shadow' guard",
      ],
      correctAnswer: 2,
      explanation:
        "Based in Manchuria, Unit 731 conducted live vivisections, plague-bombing tests, and frostbite experiments on thousands of prisoners. Its leaders were secretly given immunity by the U.S. in exchange for their 'spectral' data.",
    },
    {
      question:
        "The '2-26 Incident' (Ni Ni Roku Jiken) of 1936 was a failed coup by young military officers. What dark political 'ghost' did they want to restore?",
      options: [
        "A feudal samurai 'shadow' government (Shogunate)",
        "Direct imperial rule and 'spiritual' purity",
        "A communist state",
        "An alliance with Nazi Germany",
      ],
      correctAnswer: 1,
      explanation:
        "The 'Imperial Way' faction wanted to 'cleanse' the government of corrupt politicians and restore the Emperor's divine, spectral authority, a dark turn towards extreme militarism.",
    },
    {
      question:
        "What is 'Aokigahara,' the 'Sea of Trees' at the base of Mt. Fuji, which has a dark political/social 'haunting'?",
      options: [
        "The site of a famous 'ghost' battle",
        "A forest infamous as one of the world's most-used suicide locations",
        "A 'shadow' ninja training ground",
        "A forest cursed by an ancient emperor",
      ],
      correctAnswer: 1,
      explanation:
        "While a natural place, its reputation and the government's struggle to manage the 'spectral' social crisis of suicide have made it a dark political and cultural symbol.",
    },
    {
      question:
        "The 1995 'Sarin Gas Attack' on the Tokyo subway was carried out by what apocalyptic 'shadow' cult?",
      options: [
        "Aum Shinrikyo",
        "Yakuza",
        "A 'ghost' cell of North Korean spies",
        "The 'Red Army'",
      ],
      correctAnswer: 0,
      explanation:
        "Aum Shinrikyo, led by Shoko Asahara, was a 'doomsday' cult that had infiltrated politics and science, attempting to start a 'shadow' apocalypse.",
    },
    {
      question:
        "What dark political practice was officially renounced by Emperor Hirohito in his 1946 'Humanity Declaration'?",
      options: [
        "The practice of seppuku",
        "His own 'spectral' status as a living god",
        "The 'shadow' rule of the Shoguns",
        "The use of 'ghost' armies",
      ],
      correctAnswer: 1,
      explanation:
        "As part of the post-war occupation, the Emperor was forced to publicly renounce the 'spectral' state Shinto ideology that he was a divine, god-like descendant of the sun goddess.",
    },
    {
      question:
        "Who was 'Tokyo Rose,' a 'spectral' voice who haunted Allied soldiers during WWII?",
      options: [
        "A Japanese spy who married a US general",
        "A mythical 'ghost' who warned of air raids",
        "The name given to female English-speaking propagandists on Japanese radio",
        "A famous geisha who entertained politicians",
      ],
      correctAnswer: 2,
      explanation:
        "'Tokyo Rose' was a 'composite' 'shadow' figure (though one woman, Iva Toguri, was wrongly convicted) whose broadcasts were a form of psychological warfare, a 'ghostly' voice of demoralization.",
    },
  ],
  Egypt: [
    {
      question:
        "What was the 'Harem Conspiracy,' a dark plot to assassinate Pharaoh Ramesses III in 1155 BC?",
      options: [
        "A 'shadow' plot by one of his wives, Tiye, to place her son on the throne",
        "A plan to poison the Nile",
        "A 'curse' laid by a high priest",
        "A military coup by his 'ghost' guard",
      ],
      correctAnswer: 0,
      explanation:
        "Judicial papyri (the 'spectral' records) reveal a 'shadow' court conspiracy involving magic, poison, and a brutal struggle for succession that ended in the Pharaoh's (likely) slit throat.",
    },
    {
      question:
        "The 'Great Library of Alexandria' was a beacon of knowledge. Its destruction is a dark 'spectral' event, often blamed on whom?",
      options: [
        "A single, catastrophic fire",
        "A 'shadow' curse by angry Egyptian gods",
        "A slow decline and repeated acts of destruction (e.g., by Julius Caesar, Aurelian, and later religious fanatics)",
        "An alien attack",
      ],
      correctAnswer: 2,
      explanation:
        "The 'ghost' of the library is more complex than one event. Its 'shadowy' demise involves centuries of political neglect, warfare (Caesar's fire), and the 'dark' fanaticism of Christian mobs.",
    },
    {
      question:
        "The 1952 'Cairo Fire' (or 'Black Saturday') was a mysterious day of rioting that 'haunted' the monarchy. What was the political outcome?",
      options: [
        "It 'spectrally' preceded the 1952 Revolution that overthrew the King",
        "It led to a British re-occupation",
        "It brought the Muslim Brotherhood to 'shadow' power",
        "It was blamed on a 'ghostly' curse",
      ],
      correctAnswer: 0,
      explanation:
        "The unexplained, coordinated burning of 750 buildings (bars, cinemas, hotels) was a 'shadowy' event that exposed the King's weakness and directly led to the military coup just six months later.",
    },
    {
      question:
        "The death of Cleopatra VII, the last active pharaoh, is famously romanticized. What is the darker, more 'political' theory of her death?",
      options: [
        "She was 'spectrally' bitten by a magic asp",
        "She was secretly murdered by Octavian (Augustus)",
        "She faked her death and fled to India",
        "She died in a 'shadow' magic ritual",
      ],
      correctAnswer: 1,
      explanation:
        "While suicide by asp is the legend, some historians argue it's a 'shadow' propaganda story. They suggest Octavian may have had her quietly assassinated, as her living 'ghost' would be a potent political threat.",
    },
    {
      question:
        "The 'Damnatio memoriae' was a dark political tool in ancient Egypt. What did it mean?",
      options: [
        "A 'shadow' curse to make crops fail",
        "The official state policy of erasing a 'spectral' ruler from history (chiseling names, defacing statues)",
        "A tax on 'ghost' property",
        "A law against 'dark' magic",
      ],
      correctAnswer: 1,
      explanation:
        "This was a political 'haunting' in reverse: rulers like Akhenaten and Hatshepsut were 'murdered' from history, their monuments defaced to deny their 'spectral' existence and legitimize a new regime.",
    },
  ],
  "South Africa": [
    {
      question:
        "What was 'Vlakplaas,' the 'spectral' headquarters of Apartheid's C-1 (Counter-Insurgency) unit?",
      options: [
        "A political prison on an island",
        "A 'shadow' farm used as a secret base for a state-sponsored death squad",
        "The 'haunted' parliament building",
        "A gold mine where 'ghosts' were seen",
      ],
      correctAnswer: 1,
      explanation:
        "Vlakplaas was a 'shadow' location where police (led by Eugene de Kock, 'Prime Evil') tortured and murdered anti-apartheid activists, then disposed of their 'ghosts' with fire or explosives.",
    },
    {
      question:
        "The 1976 'Soweto Uprising' was a dark turning point. What 'spectral' event sparked this massive protest by black students?",
      options: [
        "The 'ghost' of Steve Biko appeared",
        "A government decree forcing them to learn in Afrikaans",
        "A 'shadow' tax on non-white schools",
        "The assassination of a 'spectral' student leader",
      ],
      correctAnswer: 1,
      explanation:
        "The decree that Afrikaans (seen as the 'language of the oppressor') be used in schools sparked a peaceful march. The police opened fire, killing hundreds of children, whose 'ghosts' ignited a new phase of the struggle.",
    },
    {
      question:
        "What dark mystery 'haunts' the 1986 plane crash that killed Samora Machel, the President of Mozambique?",
      options: [
        "It was hit by a 'ghost' rocket",
        "The plane was 'spectrally' lured off course by a 'false beacon' set up by Apartheid's 'shadow' military",
        "Machel was a 'vampire' who couldn't fly over holy ground",
        "It was a 'shadow' suicide pact",
      ],
      correctAnswer: 1,
      explanation:
        "Machel was a key foe of Apartheid. Theories persist that South African 'shadow' agents used a powerful, portable beacon to 'haunt' the plane's navigation, causing it to crash just inside South Africa.",
    },
    {
      question:
        "Who was 'Grootkrokodil' (Great Crocodile), the 'spectral' and feared Prime Minister who was the 'architect of Apartheid'?",
      options: ["Nelson Mandela", "Jan Smuts", "P.W. Botha", "Eugene de Kock"],
      correctAnswer: 2,
      explanation:
        "P.W. Botha was the 'shadowy,' uncompromising, and reptilian-like leader who oversaw the most brutal 'shadow' state repression (and the 'Vlakplaas' era) to defend Apartheid at all costs.",
    },
    {
      question:
        "The 'Bulhoek Massacre' of 1921 involved the slaughter of 163 'Israelites,' a religious sect. Why were they a 'spectral' political threat?",
      options: [
        "They claimed their leader was a 'ghost' king",
        "They were 'shadow' communists",
        "They refused to leave 'haunted' land, which the government saw as a 'dark' challenge to white authority",
        "They were 'vampires'",
      ],
      correctAnswer: 2,
      explanation:
        "The sect's passive refusal to move from land they considered holy was seen as an intolerable 'shadow' of defiance. 800 police and troops were sent, mowing them down with machine guns in a 'dark' show of force.",
    },
  ],
  Mexico: [
    {
      question:
        "What was 'La Noche Triste' (The Sad Night) in 1520, a 'spectral' and bloody night for Hernán Cortés?",
      options: [
        "The 'ghosts' of Aztecs attacked his fort",
        "A dark political 'shadow' pact he made with a demon",
        "The night the Aztecs rose up and drove the Conquistadors out of Tenochtitlan, killing hundreds",
        "A 'haunted' festival of human sacrifice",
      ],
      correctAnswer: 2,
      explanation:
        "After seizing the city, the Conquistadors were 'haunted' by an uprising. They were forced to flee, suffering devastating losses, a 'dark' turning point that ensured a more brutal reconquest.",
    },
    {
      question:
        "The 1968 'Tlatelolco Massacre' was a 'dark' political event occurring just before the Olympics. What happened?",
      options: [
        "A 'ghost' earthquake destroyed the stadium",
        "Government forces opened fire on a 'shadow' protest of unarmed students, killing hundreds",
        "A 'vampire' was found in the Olympic village",
        "A 'shadow' coup by the military",
      ],
      correctAnswer: 1,
      explanation:
        "In the 'Plaza of Three Cultures,' the military 'spectrally' surrounded and massacred student protesters, a 'dark' secret the government tried to 'ghost' from history for decades.",
    },
    {
      question:
        "What is 'Santa Muerte' (Holy Death), a 'spectral' folk saint whose cult has 'shadowy' political connections?",
      options: [
        "An ancient Aztec 'ghost' goddess",
        "A 'shadow' figure from the Catholic church",
        "A 'skeleton saint' venerated by police, cartels, and politicians for 'dark' miracles and protection",
        "A 'haunted' political party",
      ],
      correctAnswer: 2,
      explanation:
        "Her 'spectral' image is a 'shadow' mirror to the state, offering 'dark' protection to those who operate outside the law (like cartels) and the politicians and police who are 'haunted' by them.",
    },
    {
      question:
        "The 'Cristero War' (1926-29) was a 'dark,' bloody uprising against the government's 'spectral' anti-clerical policies. What was the rebels' 'haunting' battle cry?",
      options: [
        "'¡Viva el Rey!' (Long live the King!)",
        "'¡Viva Cristo Rey!' (Long live Christ the King!)",
        "'¡Tierra y Libertad!' (Land and Liberty!)",
        "'¡Muerte al 'fantasma'!' (Death to the 'ghost'!)",
      ],
      correctAnswer: 1,
      explanation:
        "The government's brutal 'haunting' of Catholicism (e.g., executing priests) led to a 'dark' rebellion of 'Cristeros' who fought a 'holy war' under this 'spectral' banner.",
    },
    {
      question:
        "The '43 Ayotzinapa students' who 'disappeared' in 2014 are a 'spectral' wound. What is the 'dark' political narrative?",
      options: [
        "They were 'ghosted' by a cartel",
        "They were 'spectrally' abducted by aliens",
        "They were 'shadow' spies",
        "They were arrested by local police and 'spectrally' handed over to a cartel, likely with 'shadow' state/military involvement",
      ],
      correctAnswer: 3,
      explanation:
        "The 'spectral' disappearance and likely murder of 43 students exposed a 'dark,' 'haunting' level of collusion between 'shadow' cartels, local police, and the 'ghost' of a corrupt political/military structure.",
    },
  ],
  Argentina: [
    {
      question: "What was the 'Dirty War' (Guerra Sucia) from 1976-1983?",
      options: [
        "A border conflict with Chile",
        "A 'shadow' civil war",
        "A period of 'spectral' state terrorism where the military junta 'disappeared' 30,000 political opponents",
        "A 'dark' war against 'ghosts'",
      ],
      correctAnswer: 2,
      explanation:
        "The military 'haunted' the nation, using 'shadow' death squads, 'ghost' flights (dropping people from planes), and 'dark' torture centers to 'cleanse' the country of 'spectral' subversives.",
    },
    {
      question:
        "What was 'Operation Condor,' which Argentina's 'shadow' junta enthusiastically joined?",
      options: [
        "A 'dark' plan to invade Antarctica",
        "A 'spectral' alliance of South American 'shadow' dictatorships to hunt and 'disappear' dissidents across borders",
        "A 'haunted' economic program",
        "A 'ghost' project to build a nuclear bomb",
      ],
      correctAnswer: 1,
      explanation:
        "This 'shadow' network allowed 'spectral' agents from Argentina, Chile, Brazil, etc., to 'haunt' and murder political 'ghosts' (exiles) in each other's countries, a 'dark' pact of terror.",
    },
    {
      question:
        "The 'Mothers of the Plaza de Mayo' are a 'spectral' political force. What 'haunting' act of protest did they begin in 1977?",
      options: [
        "A 'shadow' hunger strike to the death",
        "Holding 'spectral' séances in public",
        "Silently 'haunting' the main square, wearing white headscarves and carrying photos of their 'disappeared' (desaparecido) children",
        "A 'dark' campaign of 'shadow' bombings",
      ],
      correctAnswer: 2,
      explanation:
        "They turned their 'spectral' grief into a 'haunting' political weapon, becoming the 'ghostly' conscience of the nation and the most 'darkly' potent symbol of resistance to the 'shadow' junta.",
    },
    {
      question:
        "What was the 'spectral' 17-year journey of Eva Perón's (Evita's) corpse after her 1952 death?",
      options: [
        "It was 'spectrally' launched into space",
        "It was 'haunted' and came back to life",
        "The 'shadow' military stole her 'ghostly' embalmed body, hiding it in Italy under a 'dark' false name for 16 years",
        "It was 'spectrally' cloned",
      ],
      correctAnswer: 2,
      explanation:
        "The 'shadow' junta that overthrew her husband was so 'haunted' by her 'spectral' political power (even in death) that they embarked on a 'dark,' 'spectral' odyssey to hide her 'ghost' from the Argentine people.",
    },
    {
      question:
        "What was the 'Night of the Pencils' (La Noche de los Lápices) in 1976?",
      options: [
        "A 'spectral' artists' protest",
        "The 'dark' abduction, 'shadowy' torture, and 'spectral' 'disappearance' of several high school student activists",
        "A 'haunted' exam night",
        "A 'shadow' plot to rig an election",
      ],
      correctAnswer: 1,
      explanation:
        "Part of the 'Dirty War,' this 'dark' operation targeted teenage students for 'haunting' a protest for cheaper bus fare, a 'spectral' symbol of the junta's 'shadowy' paranoia and brutality.",
    },
  ],
  Nigeria: [
    {
      question:
        "The 'Biafran War' (1967-70) was a dark civil war. What brutal tactic did the Nigerian government use?",
      options: [
        "Chemical weapons",
        "A blockade that caused mass starvation (1-2 million dead)",
        "Hiring foreign mercenaries",
        "Nuclear threats",
      ],
      correctAnswer: 1,
      explanation:
        "The haunting images of starving Biafran children shocked the world. The Nigerian government's use of blockade and starvation as a weapon was a deliberate political policy.",
    },
    {
      question:
        "Who were the 'Ogoni Nine,' including writer Ken Saro-Wiwa, who were executed in 1995?",
      options: [
        "Spies for Biafra",
        "A religious cult",
        "Environmental activists protesting oil companies like Shell and government corruption",
        "Military deserters",
      ],
      correctAnswer: 2,
      explanation:
        "Their show trial and execution by Sani Abacha's brutal regime was a warning to activists who challenged the oil-political complex. Their deaths sparked international outrage.",
    },
    {
      question:
        "What was the 'Otokoto' incident in 1996 that sparked massive riots?",
      options: [
        "A haunted road",
        "A political assassination",
        "A stock market crash",
        "The discovery of ritual murders at a hotel, exposing corruption",
      ],
      correctAnswer: 3,
      explanation:
        "The Otokoto riots were sparked by the discovery of ritual killings at a hotel. It exposed dark collusion between elites, police, and politicians, revealing systemic corruption.",
    },
    {
      question:
        "Sani Abacha, a brutal military dictator, died mysteriously in 1998. What is the dark rumor about his death?",
      options: [
        "He choked on food",
        "He was poisoned by rivals",
        "He was cursed by activists",
        "He died of a heart attack with prostitutes, possibly poisoned",
      ],
      correctAnswer: 3,
      explanation:
        "While officially a heart attack, rumors persist that he died in compromising circumstances, possibly poisoned. His sudden death ended one of Nigeria's darkest dictatorships.",
    },
    {
      question:
        "What was the 'June 12' crisis of 1993, a dark turning point in Nigerian democracy?",
      options: [
        "A military coup",
        "The annulment of a democratic election by the military",
        "A terrorist attack",
        "An economic collapse",
      ],
      correctAnswer: 1,
      explanation:
        "General Babangida annulled the June 12 presidential election, widely considered Nigeria's freest and fairest. This betrayal plunged the nation into political crisis and led to years of brutal military rule.",
    },
  ],
  "Saudi Arabia": [
    {
      question:
        "The 1979 'Grand Mosque seizure' was a dark crisis. Who took over Islam's holiest site?",
      options: [
        "Foreign terrorists",
        "An apocalyptic cult led by Juhayman al-Otaybi, who declared his brother-in-law the Mahdi (messiah)",
        "Israeli commandos",
        "Iranian revolutionaries",
      ],
      correctAnswer: 1,
      explanation:
        "Juhayman al-Otaybi and hundreds of armed followers seized the Grand Mosque in Mecca, holding it for two weeks. The siege ended in a bloody battle that killed hundreds and shook the kingdom.",
    },
    {
      question:
        "What was the dark secret behind the 2018 murder of journalist Jamal Khashoggi?",
      options: [
        "He was a spy",
        "He was killed by a rival newspaper",
        "He was assassinated inside the Saudi consulate in Istanbul, allegedly on orders from the highest levels",
        "He faked his death",
      ],
      correctAnswer: 2,
      explanation:
        "Khashoggi, a critic of the Saudi government, was murdered and dismembered inside the Saudi consulate. The case exposed the brutal lengths the regime would go to silence dissent.",
    },
    {
      question:
        "What is the 'Committee for the Promotion of Virtue and Prevention of Vice,' the feared religious police?",
      options: [
        "A charity organization",
        "A morality enforcement agency with powers to arrest and punish",
        "A historical society",
        "A tourism board",
      ],
      correctAnswer: 1,
      explanation:
        "Known as the Mutaween, this religious police force enforced strict Islamic law, with powers to arrest people for 'moral crimes.' Their brutal methods have been somewhat curtailed in recent years.",
    },
    {
      question:
        "The execution of 'Nimr al-Nimr' in 2016 sparked regional tensions. Who was he?",
      options: [
        "A foreign spy",
        "A Shia cleric and political activist",
        "A terrorist leader",
        "A royal family member",
      ],
      correctAnswer: 1,
      explanation:
        "Sheikh Nimr was a prominent Shia cleric who criticized the Sunni monarchy. His execution, along with 46 others, was seen as sectarian persecution and sparked protests across the region.",
    },
    {
      question:
        "What dark practice did Saudi Arabia only officially abolish in 1962?",
      options: ["Public executions", "Slavery", "Witch trials", "Torture"],
      correctAnswer: 1,
      explanation:
        "Saudi Arabia was one of the last countries to abolish slavery, doing so only under international pressure in 1962. However, reports of modern slavery and exploitation of migrant workers persist.",
    },
  ],
  Indonesia: [
    {
      question:
        "What were the '1965-66 mass killings,' one of the darkest purges of the 20th century?",
      options: [
        "A war with Malaysia",
        "A famine",
        "The genocidal killing of 500,000 to 1 million communists and sympathizers by the military and militias",
        "A plague",
      ],
      correctAnswer: 2,
      explanation:
        "This massacre effectively destroyed the communist party (PKI) and ushered in General Suharto's 'New Order' dictatorship.",
    },
    {
      question:
        "The 1969 'Act of Free Choice' was a vote on West Papua. What conspiracy haunts its legitimacy?",
      options: [
        "It was haunted by ghosts",
        "The vote was cast by 1,026 hand-picked leaders coerced by the Indonesian military at gunpoint",
        "It was decided by magic",
        "It was rigged by Dutch ghosts",
      ],
      correctAnswer: 1,
      explanation:
        "The vote is widely known as the 'Act of No Choice,' a political sham that solidified Indonesian control over the region.",
    },
  ],
  Kenya: [
    {
      question:
        "What was the 'Mau Mau' Uprising (1952-60), a conflict that haunted British colonial rule?",
      options: [
        "A war between tribes",
        "A peasant revolt by Kikuyu fighters (demonized as 'savages') against British rule and settlers",
        "A religious crusade",
        "A drought",
      ],
      correctAnswer: 1,
      explanation:
        "The British response was brutal, creating concentration camps and using systemic torture, a dark history that was officially acknowledged in 2011.",
    },
    {
      question:
        "The assassination of politician Tom Mboya in 1969 haunted Kenya. What political division did his death expose?",
      options: [
        "Capitalist vs. Communist ghosts",
        "The ethnic tensions between the Kikuyu and Luo communities",
        "A feud over land",
        "A war with Tanzania",
      ],
      correctAnswer: 1,
      explanation:
        "Mboya's death exacerbated the deep ethnic rifts in post-colonial politics, with suspicions falling on President Jomo Kenyatta's inner circle.",
    },
    {
      question: "What were the 'Nyayo House' torture chambers?",
      options: [
        "Ancient ruins",
        "A basement in a Nairobi skyscraper used by Daniel arap Moi's regime to torture dissenters with water and darkness",
        "A haunted house",
        "A British colonial prison",
      ],
      correctAnswer: 1,
      explanation:
        "The Nyayo House cells are a haunting symbol of state brutality during Moi's authoritarian rule.",
    },
    {
      question:
        "The 1990 murder of Foreign Minister Robert Ouko haunted the nation. What conspiracy surrounds his death?",
      options: [
        "He committed suicide",
        "He was killed by foreign spies",
        "He was killed by a lion",
        "His death (officially a suicide) was a political assassination linked to high-level government corruption he was about to expose",
      ],
      correctAnswer: 3,
      explanation:
        "Ouko's charred body was found miles from his home. The official suicide theory was widely seen as an absurd cover-up for a high-level assassination within Moi's regime.",
    },
  ],
};
