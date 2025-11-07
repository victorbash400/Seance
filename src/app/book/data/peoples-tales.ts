import { Question } from "../types";

/**
 * HAUNTED HISTORIES & SPOOKY FOLKLORE
 * ===================================
 * A collection of chilling questions about dark history, terrifying myths,
 * haunted legends, and folkloric monsters from around the world.
 *
 * Countries Included:
 * United States, Canada, Brazil, United Kingdom, France, Germany, Russia, China,
 * India, Australia, Japan, Egypt, South Africa, Mexico, Argentina, Nigeria,
 * Saudi Arabia, Indonesia, Kenya
 */

export const hauntedHistories: Record<string, Question[]> = {
  "United States": [
    {
      question: "In Salem, Massachusetts, what was 'spectral evidence' in the 1692 witch trials?",
      options: [
        "A poppet (doll) with pins in it",
        "Testimony that a spirit, not the person, attacked a victim",
        "The discovery of a 'witch's mark' on the body",
        "Confessing to witchcraft under torture"
      ],
      correctAnswer: 1,
      explanation: "Spectral evidence was the testimony of victims who claimed to see the accused's spirit—or 'specter'—tormenting them, even if the accused was elsewhere. It was a key driver of the hysteria."
    },
    {
      question: "The 'Legend of Sleepy Hollow' features what terrifying phantom?",
      options: [
        "The Headless Horseman",
        "The ghost of Ichabod Crane",
        "A vengeful wailing woman",
        "A Hessian soldier's poltergeist"
      ],
      correctAnswer: 0,
      explanation: "The story by Washington Irving follows schoolmaster Ichabod Crane and his encounter with the Headless Horseman, the ghost of a Hessian soldier 'whose head had been carried away by a cannon-ball.'"
    },
    {
      question: "In Navajo folklore, what is a 'skin-walker'?",
      options: [
        "A protective ancestral spirit",
        "A person who has gained supernatural power by killing a relative",
        "A ghost that steals the skins of animals",
        "A trickster god who appears as a coyote"
      ],
      correctAnswer: 1,
      explanation: "A skin-walker ('yee naaldlooshii') is a 'naagloshii,' or a human witch who has gained the power to shape-shift into animals by committing the ultimate taboo, such as killing a close family member."
    },
    {
      question: "What real-life hotel inspired Stephen King's 'The Shining'?",
      options: [
        "The Cecil Hotel in Los Angeles",
        "The Stanley Hotel in Colorado",
        "The Hotel del Coronado in San Diego",
        "The Amityville House in New York"
      ],
      correctAnswer: 1,
      explanation: "Stephen King and his wife stayed at The Stanley Hotel in 1974. They were the only guests as the hotel was closing for the winter, inspiring the novel's setting."
    },
    {
      question: "The 'Jersey Devil' is a cryptid said to inhabit the Pine Barrens of New Jersey. What is its supposed origin?",
      options: [
        "A mutated bear from industrial pollution",
        "A Native American spirit protecting the land",
        "The cursed 13th child of a woman named Mother Leeds",
        "An escaped circus animal that interbred with local wildlife"
      ],
      correctAnswer: 2,
      explanation: "Legend states that 'Mother Leeds' had 12 children and, upon learning she was pregnant with a 13th, cursed it, saying she'd rather it be a devil. The monstrous child was born and flew up the chimney."
    },
    {
      question: "Who was H.H. Holmes?",
      options: [
        "A famous 19th-century exorcist",
        "America's first documented serial killer, who built a 'Murder Castle'",
        "A fictional detective who hunted vampires",
        "The grave-robber who inspired 'Psycho'"
      ],
      correctAnswer: 1,
      explanation: "H.H. Holmes built a hotel in Chicago for the 1893 World's Fair, which was later dubbed the 'Murder Castle.' It was a labyrinth of windowless rooms, secret passages, and traps for his victims."
    },
    {
      question: "The Bell Witch haunting in 19th-century Tennessee is unique because it's one of the few hauntings...?",
      options: [
        "That was investigated by a future U.S. President",
        "Where the spirit was given land rights",
        "That resulted in the spirit being put on trial",
        "That was proven to be a hoax by Harry Houdini"
      ],
      correctAnswer: 0,
      explanation: "The case is famous because General Andrew Jackson (before his presidency) visited the farm to investigate. His party was supposedly so terrified by the entity that they fled in the morning."
    },
    {
      question: "In the infamous Amityville Horror case, what horrifying discovery was allegedly made in the 'Red Room'?",
      options: [
        "A portal to the underworld",
        "The source of the house's 'bleeding' walls",
        "A secret well hidden under the floorboards",
        "A swarm of demonic flies that would not die"
      ],
      correctAnswer: 2,
      explanation: "The Lutz family claimed to find a small, red-painted room in the basement that the house's previous owner (a reverend) said was a 'secret well to Hell' or a passage to the underworld."
    }
  ],
  "Canada": [
    {
      question: "What monstrous creature is said to haunt the wilderness of Quebec and Northern Ontario, born from a human who resorted to cannibalism?",
      options: [
        "Sasquatch",
        "Ogopogo",
        "Wendigo",
        "Mishipeshu"
      ],
      correctAnswer: 2,
      explanation: "The Wendigo is a creature from Algonquian folklore. It is a malevolent, cannibalistic spirit that can possess humans or be a creature itself, forever hungry for human flesh."
    },
    {
      question: "The legend of 'La Chasse-Galerie' (The Flying Canoe) involves a pact with whom?",
      options: [
        "The Devil",
        "A powerful river spirit",
        "The ghost of a lumberjack",
        "A banished Fae creature"
      ],
      correctAnswer: 0,
      explanation: "In this French-Canadian folktale, desperate lumberjacks make a deal with the Devil to fly them in their canoe back to their loved ones, but they must not speak God's name or touch a cross."
    },
    {
      question: "The 'curse' of Nova Scotia's Oak Island is said to doom anyone searching for its treasure. What is the prophecy?",
      options: [
        "The island will sink if the treasure is found",
        "Seven men must die before the treasure is revealed",
        "The treasure can only be found by a child",
        "The searcher will be haunted by pirates' ghosts"
      ],
      correctAnswer: 1,
      explanation: "The long-standing legend says that seven men must die in the quest for the 'Money Pit' before its secrets will be revealed. To date, six men have died in search-related accidents."
    },
    {
      question: "What is the 'Ogopogo'?",
      options: [
        "A ghostly train that runs on phantom tracks",
        "A lake monster in British Columbia's Lake Okanagan",
        "A spectral 'woman in white' who haunts a waterfall",
        "A large, hairy ape-man, also known as Sasquatch"
      ],
      correctAnswer: 1,
      explanation: "The Ogopogo is a creature from First Nations legend, described as a large, serpent-like monster living in Lake Okanagan. It's often considered Canada's version of the Loch Ness Monster."
    },
    {
      question: "The Fairmont Le Château Frontenac hotel in Quebec City is said to be haunted by whom?",
      options: [
        "A group of ghostly soldiers",
        "A 17th-century governor who died of a broken heart",
        "A chambermaid who hung herself",
        "A child who drowned in the hotel fountain"
      ],
      correctAnswer: 1,
      explanation: "The most famous ghost is Louis de Buade, Comte de Frontenac, the 17th-century governor of New France. He is said to wander the halls, searching for his fiancée who was overseas when he died."
    },
    {
      question: "In Inuit folklore, the Qalupalik is a creature used to scare children. What does it do?",
      options: [
        "It steals the warmth from campfires",
        "It mimics human voices to lure people into blizzards",
        "It kidnaps children who wander too close to the ice's edge",
        "It eats the memories of elders"
      ],
      correctAnswer: 2,
      explanation: "The Qalupalik is a human-like creature with green skin and long hair that lives under the sea ice. It taps on the ice to lure children and stuffs them into its 'amauti' (a parka hood) to take them."
    }
  ],
  "Brazil": [
    {
      question: "Who is the 'Cuca', a terrifying figure from Brazilian folklore?",
      options: [
        "A beautiful river dolphin who drowns young men",
        "An alligator-headed witch who kidnaps naughty children",
        "A one-legged boy who plays tricks in the forest",
        "A headless mule with fire on its neck"
      ],
      correctAnswer: 1,
      explanation: "The Cuca is a crone-like witch, often depicted as an alligator-headed woman. She sleeps only one night every seven years and is said to snatch and eat children who disobey their parents."
    },
    {
      question: "What is the 'Corpo-Seco' (Dried Corpse)?",
      options: [
        "A type of protective mummy",
        "The reanimated, malevolent corpse of a very evil person",
        "A forest spirit that drains moisture from plants",
        "A vampire that feeds on livestock"
      ],
      correctAnswer: 1,
      explanation: "The Corpo-Seco is the body of a person so wicked that the earth itself rejects them, refusing to let them decompose. The corpse rises from its grave to haunt the living."
    },
    {
      question: "The 'Mapinguari' is a fearsome monster from the Amazon rainforest. What is its most terrifying feature?",
      options: [
        "It has one eye and a giant mouth on its stomach",
        "It can turn invisible and mimics bird calls",
        "It is made of living fire",
        "It has backward-facing feet to confuse trackers"
      ],
      correctAnswer: 0,
      explanation: "This giant, sloth-like creature is said to have one eye, long claws, and a gaping mouth on its abdomen. Its foul stench alone can disorient and knock out hunters."
    },
    {
      question: "The 'Mula Sem Cabeça' (Headless Mule) is the cursed form of what person?",
      options: [
        "A priest who broke his vows of celibacy",
        "A woman who has a romantic relationship with a priest",
        "A person who commits murder during a full moon",
        "A farmer who abuses their working animals"
      ],
      correctAnswer: 1,
      explanation: "According to the legend, any woman who has a forbidden love affair with a Catholic priest is cursed to transform into a headless mule that spews fire from its neck."
    },
    {
      question: "What is the 'Saci Pererê', a famous, and sometimes spooky, trickster in Brazilian folklore?",
      options: [
        "A giant snake that protects the Amazon",
        "A one-legged boy with a red cap who controls whirlwinds",
        "A ghost pirate who guards a buried treasure",
        "A pale, white-eyed zombie"
      ],
      correctAnswer: 1,
      explanation: "Saci is a mischievous one-legged youth who smokes a pipe and wears a magical red cap. While mostly a prankster (hiding toys, souring milk), he can also be malevolent, and his pranks can be dangerous."
    }
  ],
  "United Kingdom": [
    {
      question: "What was 'Spring-heeled Jack', who terrorized Victorian London?",
      options: [
        "A grave-robber who sold corpses to medical schools",
        "A phantom in a top hat who could leap over tall walls",
        "A popular and terrifying penny dreadful character",
        "The ghost of a man who died in a factory explosion"
      ],
      correctAnswer: 1,
      explanation: "Spring-heeled Jack was an 'urban legend' of the 1830s. Witnesses described a man with a terrifying appearance, claws, and eyes that 'resembled red balls of fire,' who could leap incredible heights."
    },
    {
      question: "The Tower of London is said to be haunted by many ghosts, but who is perhaps its most famous spectral resident?",
      options: [
        "King Henry VIII",
        "Queen Anne Boleyn",
        "Guy Fawkes",
        "Jack the Ripper"
      ],
      correctAnswer: 1,
      explanation: "Anne Boleyn, the second wife of Henry VIII, was beheaded in the Tower in 1536. Her ghost is said to haunt the Tower Green, where she was executed, sometimes carrying her head under her arm."
    },
    {
      question: "What is a 'Black Dog' in British folklore?",
      options: [
        "A witch's familiar that can transform into a human",
        "A spectral hound that is an omen of death",
        "A type of goblin that guards bridges",
        "A protective spirit that guides lost travelers"
      ],
      correctAnswer: 1,
      explanation: "Apparitions of giant, ghostly black dogs (like the 'Black Shuck' or 'Barghest') are common across the UK. Seeing one is almost always considered a portent of death or great misfortune."
    },
    {
      question: "Who was Jack the Ripper?",
      options: [
        "A known royal physician who was covered up by the crown",
        "A supernatural entity that stalked Whitechapel",
        "An unidentified serial killer who murdered women in 1888",
        "A character created by Sir Arthur Conan Doyle"
      ],
      correctAnswer: 2,
      explanation: "Jack the Ripper is the name given to the unidentified serial killer who terrorized the Whitechapel district of London in 1888. The gruesome nature of the murders and the killer's ability to vanish created a lasting, terrifying legend."
    },
    {
      question: "What is the 'Highgate Vampire'?",
      options: [
        "A character from the novel 'Dracula'",
        "A mass hysteria event in the 1970s involving a London cemetery",
        "The nickname for a 19th-century serial killer",
        "An ancient vampire believed to be buried in Highgate"
      ],
      correctAnswer: 1,
      explanation: "In the 1970s, a media-fueled panic erupted over a 'vampire' supposedly haunting Highgate Cemetery. Two magicians, Sean Manchester and David Farrant, fanned the flames, leading to vampire hunts and amateur exorcisms."
    },
    {
      question: "According to legend, what happens if the ravens leave the Tower of London?",
      options: [
        "The resident ghosts will be set free",
        "The Crown will fall and Britain with it",
        "The River Thames will flood the city",
        "The Beefeaters will lose their power"
      ],
      correctAnswer: 1,
      explanation: "The superstition, likely from the 19th century, holds that 'if the Tower of London ravens are lost or fly away, the Crown will fall and Britain with it.' At least six ravens are kept at the Tower at all times."
    },
    {
      question: "What is a 'Bean-Nighe' in Scottish folklore?",
      options: [
        "A spirit that bakes bread for families it protects",
        "A type of house-elf that cleans at night",
        "A fairy woman (Banshee) who washes the clothes of those about to die",
        "A monster that lives in bean fields"
      ],
      correctAnswer: 2,
      explanation: "The 'Washerwoman at the Ford' is a type of Banshee. She is seen washing the bloodstained clothes or armor of a person who is fated to die in battle or by violence. Seeing her is a terrible omen."
    },
    {
      question: "What is the 'Corpse-Candle' in Welsh folklore?",
      options: [
        "A candle made from human fat, used in dark rituals",
        "A spectral light that foretells an approaching death",
        "A will-o'-the-wisp that lures travelers into marshes",
        "The soul of an unbaptized child"
      ],
      correctAnswer: 1,
      explanation: "The 'canwyll gorff' is a mysterious light seen floating at night, often moving from the home of a sick person towards the churchyard, tracing the path their funeral procession will take."
    }
  ],
  "France": [
    {
      question: "What was the 'Beast of Gévaudan', which terrorized France in the 1760s?",
      options: [
        "A pack of rabid wolves",
        "A supernatural wolf-like creature or hybrid",
        "A serial killer disguised as an animal",
        "Mass hysteria caused by political instability"
      ],
      correctAnswer: 1,
      explanation: "From 1764-1767, a creature killed over 100 people. Witnesses described it as a massive, wolf-like beast, but it was never definitively identified. Theories range from a wolf-hybrid to a sadist who trained dogs to kill."
    },
    {
      question: "The Catacombs of Paris hold the skeletal remains of how many people?",
      options: [
        "About 100,000",
        "About 1 million",
        "Over 6 million",
        "The exact number is unknown"
      ],
      correctAnswer: 2,
      explanation: "The Catacombs are an ossuary for over six million people, whose bones were moved from overflowing cemeteries in the late 18th century. It is a vast, dark labyrinth of femurs and skulls."
    },
    {
      question: "What is 'L'Ankou', a figure from Breton folklore in northwest France?",
      options: [
        "A werewolf that only hunts on full moons",
        "A spectral figure who collects the souls of the dead",
        "A sea monster that sinks fishing boats",
        "A ghost who protects ancient standing stones"
      ],
      correctAnswer: 1,
      explanation: "L'Ankou is the personification of Death. He is not Death itself, but a servant who drives a cart (often heard creaking in the night) to collect the souls of the recently deceased."
    },
    {
      question: "What is the 'Dames Blanches' (White Ladies) in French folklore?",
      options: [
        "Protective spirits of rivers and springs",
        "Ghosts of noblewomen who haunt their castles",
        "Fae-like spirits who haunt bridges and demand tolls",
        "Nuns who were executed during the Revolution"
      ],
      correctAnswer: 2,
      explanation: "While 'White Ladies' can be many things, a common legend involves them haunting bridges. They ask travelers to dance or pay a toll (like a kiss); if refused, they may throw the person off the bridge."
    },
    {
      question: "The Place de la Concorde in Paris, site of the guillotine, is said to be haunted by...?",
      options: [
        "The ghosts of King Louis XVI and Marie Antoinette",
        "The phantom sound of a cheering mob",
        "A 'phantom-smell' of blood on hot days",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "Over 1,300 people were executed here. Legends claim you can see the ghosts of Louis XVI and Marie Antoinette, hear phantom crowds, and even smell the scent of blood on hot summer days."
    },
    {
      question: "What is a 'Loup-Garou'?",
      options: [
        "A French vampire",
        "A type of goblin",
        "A French werewolf",
        "A gargoyle that comes to life"
      ],
      correctAnswer: 2,
      explanation: "Loup-Garou is the French term for a werewolf. In many legends, the curse was tied to the Church; a person could be cursed for not attending confession for seven years."
    }
  ],
  "Germany": [
    {
      question: "Who is 'Krampus', the dark companion of Saint Nicholas?",
      options: [
        "A demon who steals naughty children in a sack",
        "A friendly troll who brings coal",
        "A ghost of winter who freezes crops",
        "A forest spirit who tests children's courage"
      ],
      correctAnswer: 0,
      explanation: "In Alpine folklore, Krampus is a horned, demonic figure who, on 'Krampusnacht,' punishes children who have misbehaved, lashing them with reeds or carrying them off to his lair."
    },
    {
      question: "What is 'Walpurgisnacht' (Walpurgis Night)?",
      options: [
        "A night of feasting to ward off evil",
        "A night when witches gather on the Brocken mountain",
        "Germany's version of 'Day of the Dead'",
        "The longest night of the year"
      ],
      correctAnswer: 1,
      explanation: "Celebrated on April 30th, it's the night when witches are said to fly to Brocken peak in the Harz Mountains to convene with the Devil, a legend famously depicted in Goethe's 'Faust.'"
    },
    {
      question: "What is the 'Lorelei', a legend of the Rhine River?",
      options: [
        "A ghost ship filled with plague victims",
        "A beautiful siren who lures sailors to their death",
        "A dragon that lives in a cave beneath the river",
        "A cursed treasure that brings misfortune"
      ],
      correctAnswer: 1,
      explanation: "The Lorelei is a beautiful maiden who sits on a rock overlooking the Rhine. She sings a mesmerizing song that distracts sailors, causing them to crash their ships on the rocks and drown."
    },
    {
      question: "In the original dark tale of 'The Pied Piper of Hamelin', what happens to the children?",
      options: [
        "He leads them to a cave where they are sealed inside",
        "He gives them back for a higher fee",
        "They are turned into rats",
        "He leads them to a river where they all drown"
      ],
      correctAnswer: 0,
      explanation: "After the townsfolk refuse to pay him for luring away their rats, the Pied Piper returns. He plays his pipe and leads all the town's children away, into a cave in a mountain, never to be seen again."
    },
    {
      question: "What is a 'Nachtkrapp' (Night Raven)?",
      options: [
        "A symbol of good luck",
        "A giant, monstrous bird that steals children from their beds",
        "A spirit that guides the dead to the afterlife",
        "A vampire that can turn into a raven"
      ],
      correctAnswer: 1,
      explanation: "A boogeyman figure from South German folklore, the Nachtkrapp is a massive black bird. In some tales, it simply 'caws' as an omen of death; in others, it actively kidnaps children who are out after dark."
    },
    {
      question: "What is a 'Nachtkrapp' (Night Raven)?",
      options: [
        "A symbol of good luck",
        "A giant, monstrous bird that steals children from their beds",
        "A spirit that guides the dead to the afterlife",
        "A vampire that can turn into a raven"
      ],
      correctAnswer: 1,
      explanation: "A boogeyman figure from South German folklore, the Nachtkrapp is a massive black bird. In some tales, it simply 'caws' as an omen of death; in others, it actively kidnaps children who are out after dark."
    },
    {
      question: "Hinterkaifeck is the site of what disturbing, unsolved German crime from 1922?",
      options: [
        "A vampire-like killing of a noble family",
        "The mass-murder of a family and their maid with a pickaxe",
        "A poltergeist haunting that ended in a mysterious fire",
        "The disappearance of an entire village"
      ],
      correctAnswer: 1,
      explanation: "All six inhabitants of the Hinterkaifeck farm were killed with a pickaxe. The killer (or killers) lived on the farm with the bodies for days, feeding the livestock. The case was never solved."
    }
  ],
  "Russia": [
    {
      question: "Who is 'Baba Yaga' in Slavic folklore?",
      options: [
        "A kind forest spirit who helps lost children",
        "A beautiful snow queen",
        "A ferocious witch who lives in a hut on chicken legs",
        "A gentle river goddess"
      ],
      correctAnswer: 2,
      explanation: "Baba Yaga is a powerful and ambiguous witch. She lives in a hut that stands on chicken legs, flies in a mortar, and is known to either help or eat those who cross her path."
    },
    {
      question: "What is a 'Rusalka'?",
      options: [
        "A water spirit, often the ghost of a drowned woman, who lures men to their deaths",
        "A forest goblin that braids the manes of horses",
        "A house spirit that protects a family's hearth",
        "A three-headed dragon"
      ],
      correctAnswer: 0,
      explanation: "Rusalki are the restless souls of women who died a violent or untimely death, often by drowning. They haunt rivers and lakes, using their beauty and songs to lure men into the water to drown them."
    },
    {
      question: "Who is 'Koschei the Deathless'?",
      options: [
        "A benevolent immortal monk",
        "A vampire who rules over the undead",
        "A powerful sorcerer who hides his soul to remain immortal",
        "A god of death"
      ],
      correctAnswer: 2,
      explanation: "Koschei is an evil sorcerer who cannot be killed by conventional means. His soul is hidden 'on the point of a needle, which is in an egg, which is in a duck, which is in a hare, which is in a chest...'"
    },
    {
      question: "What is the 'Dyatlov Pass incident'?",
      options: [
        "A famous 19th-century werewolf sighting",
        "The mysterious 1959 deaths of nine hikers in the Ural Mountains",
        "A folk tale about a cursed mountain pass",
        "The site of a mass grave from the time of Ivan the Terrible"
      ],
      correctAnswer: 1,
      explanation: "In 1959, nine experienced hikers died in mysterious circumstances. They had cut their way out of their tent and fled into the freezing night, some with bizarre, massive internal injuries."
    },
    {
      question: "In Nikolai Gogol's story 'Viy', what is the titular Viy?",
      options: [
        "A deadly plague",
        "A vampire count",
        "A terrifying entity whose eyelids must be lifted by others to see",
        "The main character's demonic doppelgänger"
      ],
      correctAnswer: 2,
      explanation: "Viy is a fearsome, gnome-like creature of the underworld. His eyelids are so long and heavy they must be lifted by other demons. If he looks at you, you die, as his gaze kills."
    }
  ],
  "China": [
    {
      question: "What is a 'Jiangshi' in Chinese folklore?",
      options: [
        "A reanimated corpse that hops, with a paper talisman on its head",
        "A dragon that causes floods",
        "A ghost that lives in a lantern",
        "A protective lion-dog spirit"
      ],
      correctAnswer: 0,
      explanation: "A Jiangshi is a 'hopping vampire' or zombie. Its limbs are stiff from rigor mortis, so it hops. It's often depicted in a Qing dynasty robe, with a paper talisman on its head to control it."
    },
    {
      question: "What is 'Diyu'?",
      options: [
        "The Chinese concept of the underworld or 'hell'",
        "A festival to honor ancestors",
        "A type of powerful, evil ghost",
        "A cursed sword"
      ],
      correctAnswer: 0,
      explanation: "Diyu is the 'earthly prison,' a maze-like underworld where souls are judged by the Ten Kings of Hell and are punished for their sins before being reincarnated. It is not a place of eternal damnation, but one of brutal torture."
    },
    {
      question: "During the 'Hungry Ghost Festival', what are people NOT supposed to do at night?",
      options: [
        "Eat food, as it attracts the ghosts",
        "Look at their reflection in water",
        "Swim, as spirits are said to pull people under",
        "Sing or whistle"
      ],
      correctAnswer: 2,
      explanation: "During the 7th lunar month, the gates of hell open and ghosts roam the earth. It's said that the spirits of those who drowned will try to pull swimmers underwater to be their 'replacement' and allow them to reincarnate."
    },
    {
      question: "What is a 'Huli Jing' or 'Jiuweihu'?",
      options: [
        "A demon that possesses statues",
        "A nine-tailed fox spirit that often takes the form of a beautiful woman",
        "A flying monster with the head of a man and the body of a bird",
        "A ghost that cries tears of blood"
      ],
      correctAnswer: 1,
      explanation: "These are fox spirits. While some can be benevolent, many are depicted as dangerous seductresses who take the form of beautiful women to feed on men's life force or souls."
    },
    {
      question: "The 'Mogwai' (as in 'gremlins') comes from Chinese folklore. What does 'Mogwai' actually mean?",
      options: [
        "Water monster",
        "Devil or demon",
        "Little brother",
        "Hungry ghost"
      ],
      correctAnswer: 1,
      explanation: "Mogwai (魔鬼) is a Cantonese term that literally means 'devil' or 'evil spirit.' In folklore, they are demons that often cause harm to humans, a far cry from the movie's 'Gizmo'."
    }
  ],
  "India": [
    {
      question: "What is a 'Vetaal' (or 'Vetala') in Hindu folklore?",
      options: [
        "A ghost or spirit that possesses and reanimates corpses",
        "A sacred cow that gives cursed milk",
        "A multi-headed snake that guards treasure",
        "A demon that eats dreams"
      ],
      correctAnswer: 0,
      explanation: "A Vetaal is a spirit (often of an evil person) that inhabits a corpse. It hangs upside down from trees in cremation grounds and is known for its chilling intelligence and love of riddles."
    },
    {
      question: "What is a 'Rakshasa'?",
      options: [
        "A holy man with magic powers",
        "A powerful, shape-shifting demon or ogre, often depicted with fangs",
        "A gentle forest spirit",
        "A god of the harvest"
      ],
      correctAnswer: 1,
      explanation: "Rakshasas are malevolent, shape-shifting beings. They are known for disrupting sacrifices, desecrating graves, and preying on humans, particularly as illusion-casting man-eaters."
    },
    {
      question: "Who are the 'Aghori' ascetics, who are often feared?",
      options: [
        "A hidden society of assassins",
        "Monks who meditate on 'unclean' things, such as corpses, to achieve enlightenment",
        "Priests who can curse entire villages",
        "A mythical tribe of cannibals"
      ],
      correctAnswer: 1,
      explanation: "The Aghori are real-life Hindu ascetics. They are known for their post-mortem rituals, which can include meditating on cremation grounds, and using human skulls as bowls, as a way to transcend taboos and achieve spiritual liberation."
    },
    {
      question: "What is a 'Bhuta'?",
      options: [
        "A type of spicy curry",
        "A ghost, typically of someone who died an untimely or violent death",
        "A benevolent house spirit",
        "A holy festival"
      ],
      correctAnswer: 1,
      explanation: "A 'Bhuta' (or 'Bhoot') is a ghost or restless spirit. They are trapped in the earthly realm due to their violent death, unfulfilled desires, or lack of proper funeral rites, and are generally feared."
    },
    {
      question: "The Bhangarh Fort in Rajasthan is famous for what spooky reason?",
      options: [
        "It is said to be the most haunted place in India, with entry forbidden after dark",
        "It is a 'gateway' for Jinn (genies)",
        "It is where a famous vampire was supposedly slain",
        "It is a temple dedicated to Kali, the goddess of death"
      ],
      correctAnswer: 0,
      explanation: "The fort is infamous due to a curse from a sorcerer. The Archaeological Survey of India has legally prohibited entry between sunset and sunrise, and locals have many stories of paranormal activity."
    },
    {
      question: "What is a 'Churel' (or 'Pichal Peri') in the folklore of India and Pakistan?",
      options: [
        "A beautiful spirit who protects children",
        "A type of Jinn made from fire",
        "The ghost of a woman who died in childbirth, who has backward-facing feet",
        "A monster that guards crossroads"
      ],
      correctAnswer: 2,
      explanation: "A Churel is a vengeful female spirit, often with her feet turned backwards. She returns to prey on the men in her family or to lure other men to their deaths."
    }
  ],
  "Australia": [
    {
      question: "What is the 'Bunyip', a creature from Aboriginal Australian mythology?",
      options: [
        "A large, hairy man-like creature (a 'Yowie')",
        "A spirit that lives in the 'Dreamtime'",
        "A monster that lurks in swamps, billabongs, and waterholes",
        "A giant bird that can carry away people"
      ],
      correctAnswer: 2,
      explanation: "The Bunyip is a dreaded monster that lives in water sources. Descriptions vary, but it's universally feared for pulling people (especially women and children) into the water to devour them."
    },
    {
      question: "What are the 'Min Min Lights'?",
      options: [
        "A type of glowing, edible fungus",
        "A mysterious, floating light phenomenon that follows people in the Outback",
        "The eyes of the Yowie monster",
        "Ghostly lanterns from a lost party of explorers"
      ],
      correctAnswer: 1,
      explanation: "The Min Min Lights are a strange light phenomenon reported in the Outback. They are said to be spectral, fuzzy lights that follow or approach people, but disappear if you try to get close."
    },
    {
      question: "The 'Yowie' is the Australian equivalent of what North American cryptid?",
      options: [
        "The Jersey Devil",
        "The Chupacabra",
        "Bigfoot / Sasquatch",
        "The Wendigo"
      ],
      correctAnswer: 2,
      explanation: "The Yowie, from both Aboriginal legend and cryptozoology, is described as a tall, hairy, ape-like hominid that roams the Australian wilderness, much like Bigfoot in North America."
    },
    {
      question: "What is 'Namarrkon' (or the Lightning Man) in the mythology of the Kakadu people?",
      options: [
        "A god who brings rain",
        "A malevolent spirit who uses lightning to strike and kill people",
        "A hero who stole fire for mankind",
        "A spirit that controls bushfires"
      ],
      correctAnswer: 1,
      explanation: "Namarrkon is a powerful and dangerous being. He creates lightning by striking the clouds with axes tied to his elbows and knees. He is a 'killer' and his lightning is used to punish those who break the law."
    },
    {
      question: "The Picton 'Mushroom Tunnel' in New South Wales is famous for its haunting. What is it?",
      options: [
        "A tunnel where a woman was hit by a train and now haunts it",
        "A tunnel used as a mustard gas storage during WWII, haunted by soldiers",
        "A tunnel that was part of a failed gold mine",
        "A tunnel where a cult performed rituals"
      ],
      correctAnswer: 0,
      explanation: "The Picton Tunnel (an old, disused railway tunnel) is said to be haunted by Emily, a woman who was struck and killed by a train inside it in 1916. Visitors report cold spots, strange lights, and seeing her apparition."
    }
  ],
  "Japan": [
    {
      question: "What is an 'Onryō', a major category of 'Yūrei' (ghost)?",
      options: [
        "A protective ancestral spirit",
        "A powerful, vengeful ghost that seeks to harm the living",
        "A mischievous spirit that plays pranks",
        "A ghost that is bound to a single object"
      ],
      correctAnswer: 1,
      explanation: "An Onryō is a ghost (often female) who died in a fit of rage, jealousy, or with a burning desire for revenge. They are the most dangerous Yūrei, as their curse can harm anyone, not just their tormentors."
    },
    {
      question: "What does the 'Kuchisake-onna' (Slit-mouthed woman) ask her victims?",
      options: [
        "'Do you have the time?'",
        "'Am I pretty?'",
        "'Where are you going?'",
        "'Have you seen my child?'"
      ],
      correctAnswer: 1,
      explanation: "She is a spirit who wears a surgical mask. She asks, 'Watashi, kirei?' ('Am I pretty?'). If you say no, she kills you. If you say yes, she removes her mask to reveal her slit mouth and asks again. You are doomed either way."
    },
    {
      question: "What is 'Aokigahara', also known as the 'Suicide Forest'?",
      options: [
        "A forest where ancient samurai spirits are said to battle",
        "A dense forest at the base of Mt. Fuji, infamous as a site for suicides",
        "A mythical forest where Yōkai (monsters) hold their meetings",
        "A protected nature preserve, rumored to be haunted by poachers"
      ],
      correctAnswer: 1,
      explanation: "Aokigahara is a dense, quiet forest where compasses are easily confused by magnetic iron deposits. It has a tragic reputation as one of the world's most common suicide sites, and is said to be haunted by the 'yūrei' of those who died there."
    },
    {
      question: "In the 'Yotsuya Kaidan' ghost story, Oiwa returns as an Onryō. What is her most famous haunting?",
      options: [
        "She possesses her husband's new wife",
        "Her disfigured face appears to her husband in a paper lantern",
        "She causes a plague to sweep the city",
        "She burns down her husband's home"
      ],
      correctAnswer: 1,
      explanation: "After being poisoned and disfigured, Oiwa dies. Her vengeful spirit haunts her murderous husband, Tamiya Iemon. In the most famous scene, her terrifying face appears in a paper lantern he is trying to light."
    },
    {
      question: "What is a 'Kappa', a well-known Yōkai?",
      options: [
        "A child-like river monster that drowns people and loves cucumbers",
        "A cat that can reanimate the dead",
        "A one-eyed mountain goblin",
        "A beautiful snow woman who freezes travelers"
      ],
      correctAnswer: 0,
      explanation: "A Kappa is a water monster with a 'dish' on its head that holds water. If the water spills, it loses its power. While they love cucumbers, they are also infamous for pulling children and animals into the water to drown them."
    },
    {
      question: "What is 'Teke Teke'?",
      options: [
        "A type of possessed doll",
        "The ghost of a girl cut in half by a train, who drags her torso with her hands",
        "A monster made of shadows that mimics you",
        "A whistling sound in the woods that leads you astray"
      ],
      correctAnswer: 1,
      explanation: "Teke Teke is the onomatopoeia for the sound the spirit makes dragging itself. She is the ghost of a girl who fell on a railway line and was severed. She is incredibly fast and cuts her victims in half with a scythe."
    },
    {
      question: "What is a 'Gashadokuro'?",
      options: [
        "A cursed samurai sword that thirsts for blood",
        "A giant skeleton, 15 times normal size, made from the bones of starved people",
        "A spider-like monster that drains your blood",
        "A 'hungry ghost' that can never be satisfied"
      ],
      correctAnswer: 1,
      explanation: "The Gashadokuro is a giant skeleton formed from the collective bones of people who died of starvation or in battle, without proper burial. It roams the countryside at night, grinding its teeth, and will crush and bite the heads off any human it finds."
    },
    {
      question: "The 'Aka Manto' (Red Cape) is a spirit that haunts what specific location?",
      options: [
        "School crossings",
        "Hospital basements",
        "The last stall in a women's bathroom",
        "Elevators"
      ],
      correctAnswer: 2,
      explanation: "When you are in the stall, a voice asks, 'Red paper or blue paper?' (or 'Red cape or blue cape?'). If you choose red, you are sliced apart. If you choose blue, you are strangled to death. Choosing a third color or saying nothing can also lead to being dragged to hell."
    }
  ],
  "Egypt": [
    {
      question: "What is 'Ammit', the 'Devourer of the Dead'?",
      options: [
        "A god who guided souls to the underworld",
        "A demon who created plagues",
        "A female beast who ate the hearts of the wicked",
        "The first mummy"
      ],
      correctAnswer: 2,
      explanation: "During the 'Weighing of the Heart' ceremony, a soul's heart was weighed against a feather. If it was heavy with sin, it was thrown to Ammit—a monster with the head of a crocodile, body of a lion, and hindquarters of a hippo—to be devoured."
    },
    {
      question: "What is the 'Curse of the Pharaohs' (or 'Mummy's Curse')?",
      options: [
        "A real curse written on tomb walls that kills intruders",
        "A media-fueled frenzy after the mysterious death of Lord Carnarvon",
        "A bacterial infection from ancient tomb air",
        "A spell that reanimates the mummy"
      ],
      correctAnswer: 1,
      explanation: "After Lord Carnarvon, the financier of Tutankhamun's tomb discovery, died suddenly in 1923, newspapers created the story of a 'mummy's curse.' There is no historical basis for an ancient Egyptian curse on tombs."
    },
    {
      question: "Who was 'Apep' (or 'Apophis') in Egyptian mythology?",
      options: [
        "The god of mummification",
        "The divine serpent of chaos and darkness",
        "The protector of tombs",
        "The first ghoul"
      ],
      correctAnswer: 1,
      explanation: "Apep was the ultimate evil, an enormous serpent who personified chaos. Every night, he would try to swallow the sun-god Ra's boat as it traveled through the underworld, and every night he had to be defeated."
    },
    {
      question: "The 'Book of the Dead' is not a single book, but...",
      options: [
        "A collection of spells to help the deceased navigate the afterlife",
        "A record of all the people a pharaoh had killed",
        "A manual for how to reanimate a mummy",
        "A list of prophecies about the end of the world"
      ],
      correctAnswer: 0,
      explanation: "It was a set of funerary texts and 'spells' customized for a deceased person, intended to be a guide to overcoming the challenges and monsters of the Duat (underworld) to reach the paradise of Aaru."
    },
    {
      question: "What is a 'Ghūl' (Ghoul) in Middle Eastern folklore, including Egypt?",
      options: [
        "A type of sandstorm",
        "A desert-dwelling Jinn or demon that preys on travelers",
        "The ghost of a pharaoh",
        "A sacred animal"
      ],
      correctAnswer: 1,
      explanation: "The Ghoul is a monstrous creature (a type of Jinn) that is said to inhabit desolate places like deserts and graveyards. It can shapeshift, often into a hyena, to lure travelers away and devour them."
    }
  ],
  "South Africa": [
    {
      question: "What is a 'Tokoloshe'?",
      options: [
        "A powerful and respected sangoma (traditional healer)",
        "A mischievous or malevolent goblin-like spirit",
        "A type of sacred ancestral mask",
        "A large, hairy cryptid"
      ],
      correctAnswer: 1,
      explanation: "The Tokoloshe is a small, humanoid spirit from Zulu folklore. It can be mischievous, but is often malevolent, sent by a witch to harm someone. It is said you can put your bed on bricks to avoid it, as it is very short."
    },
    {
      question: "What is the 'Grootslang' ('Great Snake')?",
      options: [
        "A giant snake that is said to be as old as the world, guarding a cave of diamonds",
        "A river spirit that demands sacrifices",
        "A mythical creature that is part elephant, part snake",
        "Both A and C"
      ],
      correctAnswer: 3,
      explanation: "Legend says the Grootslang is a primordial creature (part snake, part elephant) that was a mistake of the gods. It is said to live in a cave known as the 'Wonder Hole' and guards a hoard of diamonds."
    },
    {
      question: "In some Xhosa and Zulu traditions, what is an 'impundulu' or 'lightning bird'?",
      options: [
        "A good omen that brings rain",
        "A familiar of a witch that attacks people with lightning",
        "A spirit that can be captured in a bottle",
        "A bird that guides the souls of the dead"
      ],
      correctAnswer: 1,
      explanation: "The impundulu is a supernatural bird, often the size of a human, that serves a witch. It is said to be able to summon lightning and storms, and its fat is a component in dark 'muti' (medicine)."
    },
    {
      question: "What is the 'Pinky Pinky' urban legend?",
      options: [
        "A creature that haunts girl's bathrooms, targeting those wearing pink",
        "A type of cursed jewelry",
        "A ghostly pink car that runs people off the road",
        "A disease that turns your skin pink"
      ],
      correctAnswer: 0,
      explanation: "Pinky Pinky is a modern South African boogeyman, a monster (sometimes male, sometimes female, sometimes half-and-half) that is said to haunt school bathrooms and attack girls, especially those wearing pink underwear."
    },
    {
      question: "What is the 'Spook of the Uniondale'?",
      options: [
        "The ghost of a soldier from the Boer War",
        "The ghostly hitchhiker of a young woman who died in a car crash",
        "A phantom train that runs on old tracks",
        "A spectral lion that haunts a battlefield"
      ],
      correctAnswer: 1,
      explanation: "This is South Africa's most famous 'woman in white' story. It is the ghost of Maria Charlotte Roux, who died in a car crash on the Uniondale road in 1968. She is often 'picked up' by drivers, only to vanish from the car."
    }
  ],
  "Mexico": [
    {
      question: "Who is 'La Llorona' (The Weeping Woman)?",
      options: [
        "A gentle spirit who protects children",
        "The ghost of a woman who drowned her children and now weeps for them",
        "A witch who lives in the desert",
        "A folk saint who grants miracles"
      ],
      correctAnswer: 1,
      explanation: "La Llorona is the spirit of Maria, a woman who drowned her children in a fit of rage or despair. She is now cursed to wander the earth, weeping '¡Ay, mis hijos!' ('Oh, my children!'), and is said to snatch any living children she finds."
    },
    {
      question: "What is 'El Cucuy' (or 'El Coco')?",
      options: [
        "A Mexican version of the 'Boogeyman', used to scare children",
        "A dish eaten on the Day of the Dead",
        "A werewolf",
        "A vampire bat monster"
      ],
      correctAnswer: 0,
      explanation: "El Cucuy is a boogeyman figure, a shapeless monster that hides in closets or under beds and kidnaps or eats children who misbehave or refuse to sleep."
    },
    {
      question: "What is the 'Chupacabra' ('Goat-sucker')?",
      options: [
        "An ancient vampire from Aztec mythology",
        "A modern cryptid, first reported in the 1990s, that attacks livestock",
        "A curse put on farmers by witches",
        "A type of large, rabid bat"
      ],
      correctAnswer: 1,
      explanation: "The Chupacabra is a modern legend, first appearing in Puerto Rico and Mexico. It is blamed for killing livestock (especially goats) and draining them of their blood, often leaving strange puncture wounds."
    },
    {
      question: "The 'Isla de las Muñecas' (Island of the Dolls) near Mexico City is a real place. What is its spooky story?",
      options: [
        "It's a theme park based on haunted dolls",
        "It was a prison for women",
        "It's covered in dolls, hung by a man to appease the spirit of a drowned girl",
        "It's where a toymaker murdered his family"
      ],
      correctAnswer: 2,
      explanation: "The island's former caretaker, Don Julián Santana Barrera, found a drowned girl. He began hanging dolls all over the island to protect himself from her spirit, creating a deeply unsettling and now-famous tourist spot."
    },
    {
      question: "Who is 'Santa Muerte' (Saint Death or Holy Death)?",
      options: [
        "A traditional Catholic saint of funerals",
        "A folk saint, personified as a female grim reaper, who is rejected by the Church",
        "A character from the Day of the Dead parade",
        "A mythical queen of the underworld"
      ],
      correctAnswer: 1,
      explanation: "Santa Muerte is a female deity and folk saint, often depicted as a skeleton in a robe. She is worshipped by many, especially those who live on the margins of society, but her cult is condemned by the Catholic Church as satanic."
    },
    {
      question: "What is a 'Nahual' in Mesoamerican folklore?",
      options: [
        "A type of corn spirit",
        "A human sorcerer who can transform into an animal",
        "A ghost from the Aztec underworld, Mictlan",
        "A specific type of undead"
      ],
      correctAnswer: 1,
      explanation: "A Nahual (or Nagual) is a shaman or witch who has the power to shape-shift into an animal, often a jaguar, coyote, or turkey. They use this power for good or, more often in spooky stories, for evil."
    }
  ],
  "Argentina": [
    {
      question: "What is the 'Lobizón' (or 'Lobizomen')?",
      options: [
        "A type of vampire",
        "The Argentinian name for the werewolf",
        "A goblin that lives in the Pampas",
        "A ghostly gaucho (cowboy)"
      ],
      correctAnswer: 1,
      explanation: "The Lobizón is the South American version of the werewolf. The curse is said to fall on the seventh son in a family, who will transform into a beast on the first full moon of his 13th birthday."
    },
    {
      question: "Who is 'La Viuda' (The Widow)?",
      options: [
        "A ghost of a woman in black who lures and attacks men at night",
        "A spider-monster that lives in attics",
        "A famous witch who lived in Buenos Aires",
        "A protective spirit who guards graves"
      ],
      correctAnswer: 0,
      explanation: "Also known as the 'Black Widow,' she is the ghost of a spurned woman. She appears to men traveling alone at night, often on horseback, and when they get close, she reveals a terrifying, skeletal face."
    },
    {
      question: "What is 'El Pombero', a creature from Guaraní mythology (northern Argentina)?",
      options: [
        "A giant anaconda that speaks",
        "A small, goblin-like spirit that can be a friend or a dangerous foe",
        "A creature that is half-man, half-goat",
        "The ghost of a child who drowned"
      ],
      correctAnswer: 1,
      explanation: "El Pombero is a dwarf-like forest spirit. If you leave him offerings (like tobacco or honey), he'll protect your property. But if you insult him or forget, he becomes a terrifying enemy, causing accidents and sickness."
    },
    {
      question: "What is 'Nahuelito'?",
      options: [
        "A famous haunted house in Buenos Aires",
        "A lake monster, Argentina's 'Loch Ness Monster', in Nahuel Huapi Lake",
        "The ghost of a famous tango dancer",
        "A cryptid that is a cross between a dog and a pig"
      ],
      correctAnswer: 1,
      explanation: "Nahuelito is a lake monster, described as a plesiosaur-like creature, said to inhabit Nahuel Huapi Lake in Patagonia. Sightings have been reported since the early 20th century."
    },
    {
      question: "La Recoleta Cemetery in Buenos Aires is famous for its ghosts. What is the story of Rufina Cambaceres?",
      options: [
        "She was a 19-year-old girl who was accidentally buried alive",
        "She was a witch who was buried at a crossroads",
        "She was a vampire, and her crypt is sealed with silver",
        "She is a 'woman in white' who guides lost souls"
      ],
      correctAnswer: 0,
      explanation: "In 1902, Rufina collapsed and was pronounced dead. She was buried, but days later, a worker found her coffin lid displaced. She had woken up inside, and the scratches on her face and the coffin's interior proved her terrifying, failed attempt to escape."
    }
  ],
  "Nigeria": [
    {
      question: "What is an 'Abiku' in Yoruba belief?",
      options: [
        "A spirit child who is fated to die young, only to be reborn to the same mother",
        "A powerful witch who can control the weather",
        "A two-headed snake that brings misfortune",
        "A sacred spirit that protects the village"
      ],
      correctAnswer: 0,
      explanation: "An Abiku is a child who belongs to a spirit-world 'company' and is cursed to die in childhood. This spirit will then be reborn to the same mother, only to die again, causing immense grief."
    },
    {
      question: "What is 'Mami Wata' (Mother Water)?",
      options: [
        "A monster that causes floods",
        "A water spirit, often depicted as a mermaid, who can bring wealth or destruction",
        "A type of sacred crocodile",
        "A ghost ship"
      ],
      correctAnswer: 1,
      explanation: "Mami Wata is a powerful and complex water deity. She is beautiful and seductive, and can bless her followers with riches, but she is also jealous and can cause madness, sickness, or drown those who displease her."
    },
    {
      question: "What are 'Egungun'?",
      options: [
        "Masked dancers who represent the spirits of the ancestors",
        "A secret society of 'leopard-men' assassins",
        "Evil spirits that possess the living",
        "Fairy-like spirits of the forest"
      ],
      correctAnswer: 0,
      explanation: "Egungun are masked, costumed figures who appear during festivals. They are not just representations; they are the living embodiment of the ancestors returning to the community. They are powerful, revered, and can be dangerous to the uninitiated."
    },
    {
      question: "In Igbo folklore, what is an 'Ogbunabali' ('Kills in the Night')?",
      options: [
        "A type of bogeyman to scare children",
        "A deity or spirit associated with instant death and dark magic",
        "A night-blooming flower that is poisonous",
        "A nocturnal, man-eating animal"
      ],
      correctAnswer: 1,
      explanation: "Ogbunabali is a spirit of death, a 'night-killer.' He is often invoked in 'juju' (dark magic) to kill an enemy swiftly and mysteriously, and is greatly feared."
    },
    {
      question: "What is the 'Bush Soul' in some West African beliefs?",
      options: [
        "The soul of a person that lives in a wild animal",
        "A monster made of vines and leaves",
        "A ghost that gets lost in the wilderness",
        "A cursed area of the forest"
      ],
      correctAnswer: 0,
      explanation: "This is the belief in a 'spirit double' or 'bush soul' that resides in an animal (like a leopard or snake). The human and the animal are linked; whatever happens to one, happens to the other. If a hunter kills the animal, the human dies."
    }
  ],
  "Saudi Arabia": [
    {
      question: "What are 'Jinn' (or 'Genies') in Islamic and Arabian belief?",
      options: [
        "Benevolent spirits who always grant wishes",
        "A race of beings created from 'smokeless fire', who have free will like humans",
        "The souls of dead warriors",
        "A type of desert mirage"
      ],
      correctAnswer: 1,
      explanation: "Jinn are a race of creatures parallel to humans. They can be good, evil, or neutral. They can possess humans, cause misfortune, and are known to haunt desolate places. They are not the 'wish-granters' of Disney."
    },
    {
      question: "What is a 'Ghūl' (Ghoul), a monster from which the English word originates?",
      options: [
        "A type of oasis spirit",
        "A desert-dwelling Jinn that shapeshifts to lure and devour travelers",
        "A mythical king who was cursed",
        "A sand-worm monster"
      ],
      correctAnswer: 1,
      explanation: "The Ghūl is a terrifying desert demon (often a type of Jinn) that preys on travelers, robs graves, and eats human flesh. It can often appear as a beautiful woman or a hyena to lure its victims."
    },
    {
      question: "What is a 'Hinn'?",
      options: [
        "A type of sacred rock",
        "A creature that is 'between' a Jinn and an animal, often living in the desert",
        "A holy man who can speak to Jinn",
        "A mirage that leads to a Jinn's lair"
      ],
      correctAnswer: 1,
      explanation: "In Arabian folklore, Hinn are a weaker class of Jinn, or a separate race that existed before them. They are more animal-like and are said to be the 'Jinn of the dogs' or other desert animals."
    },
    {
      question: "What is the 'Qareen' ('Qarin' in Arabic)?",
      options: [
        "A shadow-monster that attacks at noon",
        "A personal 'companion' Jinn or demon that is assigned to every human at birth",
        "A magic spell of protection",
        "The ghost of a camel"
      ],
      correctAnswer: 1,
      explanation: "The Qareen (or Qareenah for a female) is a spirit that is attached to a human. A 'bad' Qareen constantly whispers evil thoughts and tries to lead the person astray, acting as their personal demon."
    },
    {
      question: "Where are Jinn most famously said to be found?",
      options: [
        "In crowded marketplaces",
        "On mountaintops",
        "In desolate, 'unclean' places like deserts, ruins, and bathrooms",
        "In the ocean"
      ],
      correctAnswer: 2,
      explanation: "Jinn are strongly associated with wild, untamed, or abandoned places. This includes deserts, ruins, graveyards, and even bathrooms/latrines, which are considered ritually 'unclean' and thus places where one is vulnerable."
    }
  ],
  "Indonesia": [
    {
      question: "What is a 'Kuntilanak' (or 'Pontianak')?",
      options: [
        "A type of zombie",
        "The vampiric ghost of a woman who died while pregnant",
        "A goblin that steals babies",
        "A sea monster"
      ],
      correctAnswer: 1,
      explanation: "The Kuntilanak is one of the most feared ghosts. She appears as a beautiful woman with long black hair (or in a white dress) and preys on men or pregnant women, using her long fingernails to disembowel them."
    },
    {
      question: "What is a 'Pocong'?",
      options: [
        "A ghost that is trapped in its 'kafan' (burial shroud)",
        "A monster that is half-man, half-pig",
        "A creature that mimics the sound of a baby crying",
        "A witch who can detach her head"
      ],
      correctAnswer: 0,
      explanation: "A Pocong is a soul trapped in its burial shroud, which is tied at the head, feet, and neck. Because its legs are bound, the ghost is said to hop. It is a terrifying, physical apparition of a corpse."
    },
    {
      question: "What is a 'Leak' ('Leyak') in Balinese folklore?",
      options: [
        "A powerful witch who can detach her head and fly",
        "A sacred monkey spirit",
        "A ghost that protects temples",
        "A demon that lives in volcanoes"
      ],
      correctAnswer: 0,
      explanation: "A Leak is a witch who studies black magic. At night, her head and entrails are said to detach from her body and fly, looking for a pregnant woman or a newborn baby to feed on their blood."
    },
    {
      question: "What is a 'Jenglot'?",
      options: [
        "A cursed doll that comes to life",
        "A type of 'vampire' said to be a mummified, doll-sized humanoid creature",
        "A ghost pirate",
        "A monster that lives in the sewer"
      ],
      correctAnswer: 1,
      explanation: "Jenglot are strange, small, mummified creatures that look like tiny humans. They are 'found' (never 'caught') and are said to be alive, but dormant. Their owners must 'feed' them drops of blood to gain supernatural protection."
    },
    {
      question:"What is the 'Wewe Gombel'?",
      options: [
        "A monster that eats shadows",
        "A spirit who kidnaps children, but does not harm them",
        "A woman who was killed by her husband and returns as a beautiful ghost",
        "A demon made of fire"
      ],
      correctAnswer: 1,
      explanation: "The Wewe Gombel is the ghost of a woman who, unable to have children, committed suicide. She kidnaps children (especially those who are neglected by their parents), but she cares for them like a mother and does not harm them before returning them."
    },
    {
      question: "What is the 'Suster Ngesot' (Sliding Nun)?",
      options: [
        "A friendly ghost who cleans hospital floors",
        "A modern urban legend of a nun's ghost who slides along the floor",
        "A demon disguised as a nun",
        "A protector of churches"
      ],
      correctAnswer: 1,
      explanation: "This is a popular Indonesian ghost story, often set in a hospital. She is the ghost of a nun who was murdered, and whose legs were broken or cut off. She 'slides' or 'drags' herself along the floor, making a 'ngesot' sound."
    }
  ],
  "Kenya": [
    {
      question: "What is the 'Nandi Bear'?",
      options: [
        "A sacred bear that is worshipped",
        "A ferocious cryptid, described as a bear-like or hyena-like creature",
        "A gentle spirit that protects children",
        "A type of boogeyman"
      ],
      correctAnswer: 1,
      explanation: "The Nandi Bear (or 'Chemosit') is a cryptid from the Nandi region. It's a large, bear-like or giant-hyena-like predator, blamed for attacks on both livestock and humans, and is greatly feared."
    },
    {
      question: "What is the 'Ngoloko', a monster from Kamba folklore?",
      options: [
        "A giant, man-eating ogre that lives in a cave",
        "A river spirit that floods villages",
        "A small, hairy creature that steals food",
        "A ghost-snake"
      ],
      correctAnswer: 0,
      explanation: "The Ngoloko is a terrifying, giant ogre, often described as hairy and one-eyed. It lives in a cave and preys on humans, capturing them and taking them back to its lair to be eaten."
    },
    {
      question: "What is a 'shetani' (or 'jini') in Swahili coastal belief?",
      options: [
        "A type of sacred ancestor",
        "A spirit, often malevolent, that can possess people",
        "A 'bush-baby' or small primate",
        "A type of holy man"
      ],
      correctAnswer: 1,
      explanation: "Influenced by Arabian 'Jinn', a 'shetani' is a spirit that can be good or (more often) evil. They are blamed for causing sickness, madness, and misfortune, and can possess people, requiring an exorcism."
    },
    {
      question: "What is the 'Popobawa'?",
      options: [
        "A type of sacred bird",
        "A bat-winged demon, famous in nearby Zanzibar, that attacks people in their beds",
        "A protective house spirit",
        "A monster that lives on Mt. Kenya"
      ],
      correctAnswer: 1,
      explanation: "While most famous in Zanzibar/Tanzania, the 'Popobawa' (bat-wing) legend is known in coastal Kenya. It's a one-eyed, bat-winged demon and shapeshifter that assaults men (and sometimes women) in their homes at night."
    },
    {
      question: "What is the 'Kichwa-cha-Muzuka' ('Ghost-Head')?",
      options: [
        "A disembodied, ghostly head that flies at night",
        "A leader of a 'ghost-cult'",
        "A cursed skull that brings misfortune",
        "A type of mask used in rituals"
      ],
      correctAnswer: 0,
      explanation: "This is a fearsome spirit from coastal folklore. It's a disembodied, flaming head that flies through the night, often seen as a terrible omen or a direct threat."
    }
  ]
};