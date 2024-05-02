const data = {
    "rules":[
        // ================ NAME ==================
        {
            "before": "#NAME#",
            "after": [
                "The #ADJN# #FIRSTN#",
                "The #FIRSTN#",
                "The #FIRSTN# From The #BIOME#"
            ]
        },
        {
            "before": "#FIRSTN#",
            "after": [
                "#ANIMAL#",
                "#ANIMAL#-#ANIMAL# Hybrid",
                "#ANIMAL#-man",
                "#CUSTOM#",
                "#OCCUPATION#"
            ]
        },
        {
            "before": "#ADJN#",
            "after": [
                "Abominable", "Illusive", "Spooky", "Miniscule", "Bleeding",
                "Absurd", "Ape-like", "Awkward", "Astonishing", "Absent-minded", "Bumbling", "Bizarre", "Bewildering", "Brash", "Clumsy", "Capricious", "Dramatic", "Eccentric", "Enigmatic", "Erratic", "Exuberant", 
                "Exasperating", "Evasive", "Foolish", "Farcical", "Frenzied", "Gullible", "Grotesque", "Gumptious", "Hypnotic", "Harebrained", "Impish", "Incoherent", "Inquisitive", "Idiosyncratic", "Kooky", "Ludicrous", 
                "Lazy", "Mischievous", "Mystified", "Meddlesome", "Melodramatic", "Nonsensical", "Nebulous", "Nimble", "Outlandish", "Peculiar", "Pompous", "Quirky", "Quaint", "Quick-witted", "Ridiculous", "Sassy", 
                "Skittish", "Slothful", "Tantalizing", "Timid", "Unruly", "Unpredictable", "Unorthodox", "Unusual", "Vivacious", "Vague", "Voracious", "Verbose", "Wacky", "Wistful", "Wild", "Zany",
            ]
        },
        {
            "before": "#ANIMAL#",
            "after": [
                "Cat","Dog","Donkey","Goat","Guinea pig","Horse","Pig","Rabbit","Aardvark","Aardwolf","Albatross","Alligator","Alpaca","Anaconda","Angelfish","Anglerfish","Ant","Anteater",
                "Antelope","Antlion","Ape","Aphid","Arabian leopard","Arctic Fox","Arctic Wolf","Armadillo","Arrow crab","Asp","Ass","Baboon","Badger","Bald eagle","Bandicoot","Barnacle",
                "Barracuda","Basilisk","Bass","Bat","Bear","Beaver","Bedbug","Bee","Beetle","Bird","Bison","Blue whale","Boa","Boar","Bobcat",
                "Bonobo","Bug","Butterfly","Buzzard","Camel","Capybara","Cardinal","Caribou","Carp","Cat","Catshark","Caterpillar","Catfish","Cattle","Centipede","Chameleon","Cheetah",
                "Chicken","Chimpanzee","Chinchilla","Chipmunk","Clam","Clownfish","Cobra","Cockroach","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Crab","Crane","Crayfish","Cricket",
                "Crocodile","Crow","Cuckoo","Cicada","Deer","Dinosaur","Dog","Dolphin","Donkey","Dove","Dragonfly","Dragon","Duck","Dung beetle","Eagle","Earthworm","Echidna","Eel","Elephant",
                "Elephant seal","Elk","Emu","Falcon","Ferret","Firefly","Fish","Flamingo","Flea","Fly","Fowl","Fox","Frog","Fruit bat","Gazelle","Gecko","Gibbon","Giraffe","Goat","Goldfish","Goose",
                "Gorilla","Grasshopper","Great white shark","Grizzly bear","Hammerhead shark","Hamster","Hare","Hawk","Hedgehog",
                "Hermit crab","Heron","Hippopotamus","Hookworm","Hornet","Horse","Hummingbird","Humpback whale","Hyena","Iguana","Impala","Jackal","Jaguar","Jellyfish","Junglefowl","Kangaroo","Kangaroo mouse",
                "Kangaroo rat","Kingfisher","Kiwi","Koala","Koi","Komodo dragon","Krill","Ladybug","Lamprey","Land snail","Leech","Lemming","Lemur","Leopard","Lion","Lizard","Llama","Lobster",
                "Locust","Lynx","Macaw","Manatee","Manta ray","Marlin","Marmoset","Marmot","Mastodon","Meerkat","Mink",
                "Mole","Mollusk","Mongoose","Monitor lizard","Monkey","Moose","Mosquito","Moth","Mountain goat","Mouse","Mule","Narwhal","Newt","Ocelot","Octopus","Pheasant",
                "Pig","Pigeon","Piranha","Planarian","Platypus","Polar bear","Pony","Porcupine","Porpoise","Portuguese man o' war","Possum","Prairie dog","Prawn","Praying mantis","Primate",
                "Puma","Python","Quail","Rabbit","Raccoon","Rainbow trout","Rat","Rattlesnake","Raven","Red panda","Reindeer","Reptile","Rhinoceros","Right whale","Roadrunner","Rodent","Rook","Rooster","Roundworm",
                "Saber-toothed cat","Salamander","Salmon","Scallop","Scorpion","Seahorse","Sea lion","Sea slug","Sea snail","Shark","Sheep","Shrew","Shrimp","Silkworm",
                "Skunk","Sloth","Slug","Snail","Snake","Snow leopard","Sockeye salmon","Sparrow","Sperm whale","Spider","Spider monkey","Squid","Squirrel","Starfish","Star-nosed mole","Steelhead trout",
                "Stingray","Stork","Sturgeon","Sugar glider","Swan","Swift","Swordfish","Swordtail","Tahr","Takin","Tapir","Tarantula","Tarsier","Tasmanian devil","Termite","Tern","Thrush","Tick","Tiger",
                "Tiger shark","Tiglon","Toad","Tortoise","Toucan","Trout","Tuna","Turkey","Turtle","Vampire bat","Vampire squid","Vicuna","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Whippet",
                "Whitefish","Whooping crane","Wildcat","Wildebeest","Wildfowl","Wolf","Wolverine","Wombat","Woodpecker","Worm","Yak","Zebra"
            ]
        },
        {
            "before": "#OCCUPATION#",
            "after": [
                "Accountant", "Astronaut", "Astronomer", "Blacksmith", "Baker", "Barber", "Butcher", "Butler", "Captain", "Chemist", "Chef", "Dancer", "Diver", "Doctor", "Explorer", "Emperor", "Exterminator", "Fisherman", 
                "Farmer", "Gardener", "Harpist", "Jester", "Judge", "Janitor", "Librarian", "Magician", "Monk", "Miner", "Maid", "Musician", "Nurse", "Oracle", "Physicist", "Professor", "Poet", "Sailor", 
                "Soldier", "Surgeon", "Tailor", "Undertaker", "Vicar", "Weaver"
            ]
        },
        {
            "before": "#CUSTOM#",
            "after": [
                "#FSYLLABLE##SYLLABLE#",
                "#FSYLLABLE##SYLLABLE##SYLLABLE#"
            ]
        },
        {
            "before": "#FSYLLABLE#",
            "after": [
                "Ba", "Pho", "En", "Ha", "Mut", "Ta", "Do", "Mas", "Ca", "Ra", "Sel", "Xie", "Arac", "To", "Ma", "Nos", "Kar", "Jo", 
                "Ro", "Gu", "Mi", "Ca", "Ve", "La", "Na", "Del", "Rey", "An", "Zu", "Har", "Py", "Hu", "Si", "Ren", "Roc", "Ga", 
                "Ama", "Bug", "Lez", "Lert", "Fen", "Nix", "Croc", "Cer", "Be", "Rus", "Ta", "Nu", "Ki", "Bast", "Ty", "Pu", "Leo", "Nio", 
            ]
        },
        {
            "before": "#SYLLABLE#",
            "after": [
                "ba", "pho", "en", "ha", "mut", "ta", "do", "mas", "ca", "ra", "sel", "xie", "arac", "to", "ma", "nos", "kar", "jo",
                "ro", "gu", "mi", "ca", "ve", "la", "na", "del", "rey", "an", "zu", "har", "py", "hu", "si", "ren", "roc", "ga",
                "ama", "bug", "lez", "lert", "fen", "nix", "croc", "cer", "be", "rus", "ta", "nu", "ki", "bast", "ty", "pu", "leo", "nio", 
            ]
        },
        {
            "before": "#BIOME#",
            "after": [
                "Seas", "Oceans", "River", "Ponds", "Walmart Parking Lots", "Savannas","Grasslands", "Taigas", "Tundras", "Skies", "Deserts", "Tropical Rainforests",
                "Forests", "Jungles", "Plateaus", "Coral Reefs", "Marshes", "Swamps", "Floridas", "Shrublands", "Bogs", "Mangrove Swamps", "Abyssal Sea", "Mountains", 
                "Sewers", "Lakes", "Lochs", "Underground Tunnels", "Suburbs", "Caves", "Shores"
            ]
        },

        // ================ DESCRIPTION ===============
        {
            "before": "#DESCRIPTION#",
            "after": [
                "described as having #CHAR#, #CHAR#, and #CHAR#",
                "described as having #CHAR# and #CHAR#",
                "known to have #CHAR#, #CHAR#, and #CHAR#",
                "known to have #CHAR#, and #CHAR#",
                "characterized by its #CHAR#, #CHAR#, and #CHAR#",
                "characterized by its #CHAR#, and #CHAR#",
            ]
        },
        {
            "before": "#CHAR#",
            "after": [
                "#NUMBERC# #BODYC#",
                "#NUMBERC# #ANIMAL#'s #BODYC#",
                "#DESCRIPTIONB# #BODYC#",
                "#NUMBERC# #SPECIALBODYC#"
            ]
        },
        {
            "before": "#NUMBERC#",
            "after": [
                "two","three","four","five","six","seven","eight","nine","ten","a couple", "many","a few","an undefined amount of"
            ]
        },
        {
            "before": "#BODYC#",
            "after": [
                "arms", "legs", "heads", "noses", "mouths", "teeth",
                "feet", "eyes", "tongues", "ears", "necks", "bellys",
                "hands", "fingers"
            ]
        },
        {
            "before": "#DESCRIPTIONB#",
            "after": [
                "bald", "hairy", "spiky", "soft", "hard", "metallic", "gelatinous", "fleshy", "wet",
                "blue", "tan", "beige", "red", "orange", "yellow", "green", "pinkish", "black", "white", "violet", "gray",
                "scaly", "sticky", "bloody", "smelly"
            ]
        },
        {
            "before": "#SPECIALBODYC#",
            "after": [
                "antennae", "tentacles", "gills", "claws", "fins", "tusks", "wings", "tails"
            ]
        },
        // ============= HABITAT ============
        {
            "before": "#HABITAT#",
            "after": [
                "encountered in the #LOC#",
                "can be found in the #LOC#",
                "reportedly seen at the #LOC#",
                "native to the #LOC#",
                "seen once in the #LOC#",
                "rumored to live in the #LOC#"
            ]
        },
        {
            "before": "#LOC#",
            "after": [
                "#BIOME# of #COUNTRY#",
                "#BIOME# of #COUNTRY#",
                "#BIOME# of #COUNTRY#",
                "#BIOME# of #COUNTRY#",
                "#BIOME2# of #COUNTRY#",
                "#BIOME2# of #COUNTRY#",
                "#SPECIALBIOME#",
            ]
        },
        {
            "before": "#COUNTRY#",
            "after": [
                "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Deps","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus",
                "Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Rep","Chad",
                "Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt",
                "El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti",
                "Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea North","Korea South","Kosovo",
                "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania",
                "Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman",
                "Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russian Federation","Rwanda","St Kitts & Nevis","St Lucia","Saint Vincent & the Grenadines",
                "Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka",
                "Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
                "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
                "Ohio", "Brasil",
            ]
        },
        {
            "before": "#SPECIALBIOME#",
            "after": [
                "Arctic polar regions", "White House", "dark side of the moon", "nightmares of children", "dark web", "chuck e cheese restaurants", "roswell asteroid crater",
                "international space station", "cabins in the woods", "pyramids of Egypt", "Mesoamerican pyramids",

            ]
        },
        {
            "before": "#BIOME2#",
            "after": [
                "shadows", "abandoned wells", "abandoned buildings", "shadowy street alleys", "hospitals", "farms", "cemeteries", "amusement parks", "libraries",
                "subway stations", "liminal spaces", "casinos", "windmills", "cathedrals", "churches", "beaches", "waterfalls", "castles", "gardens", "under the bridges",
                "dams", "skyscrapers", "attics", "docks", "shipyards", 
            ]
        },
        // =========== BEHAVIOR ==============
        {
            "before": "#BEHAVIOR#",
            "after": [
                "known to #BEHAV# and #BEHAV#",
                "reportedly likes to #BEHAV# and #BEHAV#",
            ]
        },
        {
            "before": "#BEHAV#",
            "after": [
                "#ACT#",
                "#ACT#",
                "#ACT# when #CONDITION#",
            ]
        },
        {
            "before": "#ACT#",
            "after": [
                "eat #FOOD#",
                "trick people into #TRICK#",
                "hide #HIDE#",
                "sing",
                "play",
                "kill #TARGET#"
            ]
        },
        {
            "before": "#CONDITION#",
            "after": [
                "hungry", "lonely", "feeling sad", "feeling evil", "it's full moon", "the day is hot", "the day is cold", "scared",
                "annoyed", "frustrated", "pollen count is high", "it feels like it", "it's the holidays season", "is being observed",
                "horny", "excited", "nostalgic", "greedy", "wistful" 
            ]
        },
        {
            "before": "#FOOD#",
            "after": [
                "cattle", "cows", "children", "old people", "teenagers", "canned food", "its own children", "sound", "the silence", "dreams",
                "fire", "plastic", "colors", "garbage", "chickens", "fish", "virgins", "grass", "bricks", "cement", "wood", "coconuts", 
                "fear"
            ]
        },
        {
            "before": "#TRICK#",
            "after": [
                "doing its bidding", "suicide", "sex", "going mad", "getting lost in the woods", "sleeping", "doing self-harm", "drowning themselves",
                "killing other people", "kidnapping children",
            ]
        },
        {
            "before": "#HIDE#",
            "after": [
                "inside people's shoes", "in the shadows", "under beds", "inside wardrobes", "in plain sight", "on the walls", "in basements", "in the trees",
                "in cemeteries", "behind waterfalls", "inside trees", "under rocks", "abandoned houses", "under sea shells"
            ]
        },
        {
            "before": "#TARGET#",
            "after": [
                "children", "old people", "teenagers", "unsuspecting adults", "non-believers", "people dressed in white", "house dogs", "house cats", "theists",
                "women", "men", "virgins", "pets", "people born in july"

            ]
        },
    ]
};