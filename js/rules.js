const data = {
    "rules":[
        // MEMORIES
        {
            "before": "#MEM#",
            "after": [
                "#INCONVENIENCE#",
                "#INCONSEQUENTIAL#",
                "#PEOPLE#",
                "#SENSES#",
                "#THOUGHTS#",
                "#THOUGHTS#"
            ]
        },
        {
            "before": "#INCONVENIENCE#",
            "after": [
                "You found a mole on your #BODY#",
                "You found a bruise on your #BODY#",
                "You found a cut on your #BODY#",
                "You bumped your #BODY# on the #FURNITURE#",
                "You scratched yourself on your #FURNITURE#",
                "You stained your #FURNITURE#",
                "You broke your #FURNITURE#",
                "You found a white hair",
                "You lost a bunch of hair in the shower",
                "You stubbed your toe on the #FURNITURE#",
                "You spilled your drink on your #FURNITURE#",
                "You got sick",
                "You fell ill",
                "You caught a virus that was going around",
                "You had a terrible headache",
                "You had a mild headache",
                "You had a terrible stomachache",
                "You had a mild stomachache",
                "You had a terrible allergy",
                "You had a mild allergy",
                "You tripped",
                "You tripped and fell",
                "You tripped and fell in public",
                "You forgot an important password",
                "You said a word wrong in front of #PERSON#",
                "You spelled a word wrong on the group chat",
                "Your phone battery died",
                "You ran out of soap mid-shower",
                "You ran out of shampoo mid-shower",
                "You couldn't sleep",
                "You got a call from an unknown number",
                "Your #BODY# ached randomly",
                "You bit your tongue",
                "You stepped on water while wearing socks",
                "You stepped on a pointy rock",
            ]
        },
        {
            "before": "#INCONSEQUENTIAL#",
            "after": [
                "You scratched your #BODY#",
                "Your #BODY# looked different than what you remembered",
                "Your #BODY# looked prettier than what you remembered",
                "Your #BODY# looked uglier than what you remembered",
                "You bought a new #FURNITURE#",
                "You saw an abandoned #FURNITURE# on the sidewalk",
                "You laughed",
                "You cried",
                "You smiled",
                "You frowned",
                "You wept",
                "You sobbed",
                "You #ACTIVITY#",
                "You #ACTIVITY#",
                "You #ACTIVITY#",
                "You #ACTIVITY#",
                "You #ACTIVITY# and it made you #EMOTION#",
            ]
        },
        {
            "before": "#PEOPLE#",
            "after": [
                "You met #PERSON# for the first time",
                "You saw #PERSON# for the last time",
                "You dreamt about #PERSON#",
                "You felt #PERSON#'s presence",
                "You thought you saw #PERSON#, but it wasn't them",
                "You #ACTIVITY# with #PERSON#",
                "You #ACTIVITY# with #PERSON#",
                "You #ACTIVITY# with #PERSON#",
                "You were mad at #PERSON#",
                "You were happy at #PERSON#",
                "You were angry at #PERSON#",
                "You were annoyed at #PERSON#",
                "You loved #PERSON#",
                "You missed #PERSON#",
                "You imagined how your life would be if you were #PERSON#",
            ]
        },
        {
            "before": "#SENSES#",
            "after": [
                "You felt #EMOTION#",
                "You felt #EMOTION#",
                "You felt #EMOTION#",
                "You felt #EMOTION#",
                "You listened to a song",
                "You listened to a song you loved",
                "You listened to a song you hated",
                "You listened to a song you always loved",
                "You listened to a song you have grown to love",
                "You listened to a song you have grown to hate",
                "You listened to and felt more #EMOTION# than usual",
                "You listened to the sounds of a #ANIMAL#",
                "You smelled a flower",
                "You smelled a foul odor",
                "The smell of food reminded you of #PERSON#",
                "You saw something beautiful",
                "You saw something horrible",
                "You saw something peaceful",
                "You saw something confusing",
            ]
        },
        {
            "before": "#THOUGHTS#",
            "after": [
                "You tought about #ANIMAL#",
                "You dreamt about #ANIMAL#",
                "You imagined how your life would be if you were a #ANIMAL#",
                "You pondered about the definition of #WORD#",
                "You got anxious about #WORD#",
                "You thought about #WORD#",
                "You thought about #WORD#",
                "You thought about #WORD#",
                "You thought about your #BODY#",
                "You briefly considered working as a #OCCUPATION#",
                "You imagined how your life would be if you were a #OCCUPATION#",
            ]
        },
        // ==== CATEGORIES ====
        {
            "before": "#BODY#",
            "after": [
                "arm", "leg", "head", "forehead", "nose", "mouth",
                "foot", "eye", "eyelid", "tongue", "ear", "neck", "belly",
                "hand", "finger", "toe", "back", "breast", "butt", "shin","lips",
                "knee", "armpit", "bellybutton",
            ],
        },
        {
            "before": "#FURNITURE#",
            "after": [
                "armchair","armoire","bar stool","beach chair","bean bag chair","bed","bed table","bench","bookcase","bookshelf","bunk bed",
                "cabinet","canopy bed","card table","carpet","cart","chair","chandelier","chest","chest of drawers","china cabinet","coffee table","console",
                "cot","couch","cradle","credenza","crib","cupboard","curtains","cushion","deck chair","desk","desk chair","dining room table","display cabinet","divan","drapery","drapes","dresser",
                "easy chair","end table","file cabinet","folding chair","folding screen","footrest","footstool","furniture","futon","game table","garden bench",
                "grandfather clock","hammock","hat stand","highchair","kitchen island","lamp","lawn chair",
                "lounge chair","lounger","love seat","mantle","mattress","mirror","nightstand","office chair","ottoman","pantry","park bench","patio chair","patio table","pew","piano bench","picnic table","pillow",
                "porch swing","rack","recliner","rocking chair","room divider","rug","screen","seat","sectional sofa","shelf","shoji screen","sideboard","sleeper sofa","sofa","sofabed","stool","table",
                "throne","throw rug","wardrobe","waste basket","waterbed","window shades","work table","writing desk",
            ],
        },
        {
            "before": "#PERSON#",
            "after": [
                "your #RELATION#",
                "#FNAME#",
            ],
        },
        {
            "before": "#RELATION#",
            "after": [
                "mom", "dad", "sibling", "sister", "brother", "cousin", "aunt",
                "uncle", "grandma", "grandpa", "best friend", "crush", "wife", "husband", "son", "daughter",
                "ex", "exwife", "exhusband", "boyfriend", "girlfriend", "exgirlfriend", "exboyfriend", 
            ],
        },
        {
            "before": "#FNAME#",
            "after": [
                "Jack","Thomas","Joshua","James","Daniel","Chloe","Harry","Oliver","Emily","Samuel","Jessica","William","Joseph","Sophie","Olivia","Charlie","Matthew","Benjamin","George","Megan","Lewis","Charlotte","Luke","Callum","Lucy","Ryan","Hannah","Ellie","Grace","Alfie","Adam","Jake","Ethan","Alexander","Katie","Liam","Jacob","Amy","Lauren","Connor","Ella","Holly","Dylan","Amelia","Ruby","Lily","Rebecca","Mia","Jamie","Bethany","Nathan","Cameron","Ben","Emma","Abigail","Molly","Georgia","Tyler","Max","Michael","Mohammed","Owen","Jordan","Alex","Kieran","Millie","Aaron","Leah","Harvey","Caitlin","Evie","Eleanor","Daisy","Bradley","Jasmine","Kyle","Brandon","Harrison","Isabella","Isabelle","Archie","Phoebe","Elizabeth","Alice","Freya","Edward","Reece","Louis","David","Henry","Erin","Amber","Lucas","Poppy","Morgan","Oscar","Courtney","Shannon","Isaac","Sarah","Paige","Christopher","Robert","Anna","Leo","Sam","Imogen","Toby","Maisie","Jayden","Charles","Taylor","Riley","Joe",
                "Laura","Noah","Rhys","Mason","Finley","Jade","Logan","Kai","Nicole","Rachel","Summer","Ava","Niamh","Zoe","Isabel","Isobel","Sophia","Abbie","Muhammad","Scarlett","Rosie","Andrew","Bailey","Madison","Aimee","Joel","John","Leon","Brooke","Tia","Finlay","Natasha","Billy","Alisha","Libby","Jay","Kian","Aidan","Alexandra","Dominic","Elliot","Freddie","Sean","Hollie","Harley","Jonathan","Keira","Lydia","Victoria","Ellis","Eve","Eva","Harriet","Alicia","Ashley","Isla","Francesca","Georgina","Sebastian","Zachary","Chelsea","Lola","Patrick","Maria","Melissa","Matilda","Theo","Scott","Lilly","Danielle","Mollie","Hayden","Samantha","Louise","Faith","Zara","Gabriel","Maddison","Nicholas","Luca","Declan","Kayleigh","Maya","Skye","Aiden","Ewan","Jennifer","Madeleine","Peter","Tom","Layla","Corey","Gracie","Anthony","Louie","Sara","Julia","Kate","Mohammad","Sienna","Natalie","Katherine","Josh","Aisha","Casey","Jodie","Jason","Eloise","Zak","Naomi","Sofia","Mark","Reuben","Yasmin",
                "Amelie","Evan","Marcus","Elliott","Ibrahim","Jude","Ashton","Mitchell","Stephanie","Ali","Lacey","Gemma","Frankie","Ellen","Maryam","Martha","Stephen","Faye","Tommy","Angel","Christian","Kiera","Tilly","Elise","Conor","Lara","Hamza","Nathaniel","Emilia","Rose","Kelsey","Mohamed","Florence","Demi","Lee","Lois","Paul","Cody","Danny","Bobby","Ross","Blake","Ashleigh","Jakub","Finn","Aaliyah","Sonny","Tegan","Fatima","Annabel","Frederick","Ebony","Natalia","Esme","Robyn","Kane","Ahmed","Mya","Catherine","Caleb","Richard","Beth","Rory","Stanley","Gabriella","Zainab","Lexi","Rowan","Gabrielle","Mackenzie","Evelyn","Annabelle","Eden","Steven","Cerys","Annie","Arthur","Charley","Anya","Zain","Neve","Kevin","Rhiannon","Calum","Heidi","Lexie","Madeline","Sasha","Shaun","Hassan","Kirsty","Levi","Muhammed","Tobias","Cole","Sian","Ronnie","Shane","Tristan","Eliza","Bethan","Zahra","Felix","Ciara","Mckenzie","Ciaran","Elle","Abby","Katy","Hope","Kieron","Maisy","Kacper","Yusuf","Milly",
                "Heather","Maxwell","India","Spencer","Lucie","Abdullah","Ayesha","Esther","Amina","Darcy","Nadia","Kaitlyn","Mariam","Caitlyn","Connie","Mary","Alfred","Rhianna","Euan","Emmanuel","Wiktoria","Zack","Robbie","Elisha","Curtis","Abdul","Omar","Niall","Sadie","Kayla","Elijah","Kimberley","Rio","Laila","Jasmin","Kacey","Ollie","Paris","Seth","Rachael","Alyssa","Dean","Kira","Adrian","Macy","Cara","Lillie","Jenna","Miles","Kathryn","Chantelle","Zac","Hayley","Rebekah","Elena","Simran","Claudia","Willow","Rohan","Timothy","Nicola","Shay","Savannah","Simon","Martin","Keeley","Beatrice","Theodore","Iqra","Darcey","Jenson","Justin","Austin","Travis","Drew","Fraser","Leila","Craig","Marley","Kayden","Regan","Tara","Jemima","Sana","Sydney","Nancy","Saffron","Bilal","Alan","Kye","Louisa","Tiffany","Macey","Michelle","Oliwia","Dillon","Daniella","Jaden","Aliyah","Mustafa","Jessie","Myles","Liberty","Alana","Alexis","Nikita","Josephine","Tabitha","Scarlet","Nina","Filip","Lennon","Kelly",
                "Lucia","Ruben","Maia","Kyra","Hugo","Ismail","Albert","Jesse","Josie","Jackson","Ria","Syed","Joanna","Ruth","Umar","Maja","Tomas","Zuzanna","Will","Destiny","Philip","Lottie","Ellie-mae","Kaitlin","Shania","Katelyn","Leighton","Amaan","Georgie","Hasan","Vanessa","Beau","Safa","Aleena","Saskia","Helena","Michaela","Ellie-may","Mateusz","Kenzie","Jasper","Vincent","Felicity","Jemma","Devon","Oskar","Khadija","Zach","Roman","Dexter","Francis","Troy","Honey","Violet","Aleksandra","Ayaan","Luis","Kara","Orla","Dominik","Lukas","Nikola","Elsie","Carys","Amie","Hafsa","Darcie","Abbey","Malachi","Brooklyn","Leanne","Tayla","Layton","Lisa","Sinead","Crystal","Shauna","Bryony","Patryk","Dawid","Hana","Kitty","Flynn","Helen","Talia","Darren","Trinity","Christina","Angus","Alexia","Mathew","Lana","Laiba","Kaiden","Frank","Thea","Carl","Anisa","Carla","Warren","Brendan","April","Maximilian","Antonia","Fiona","Alesha","Amira","Iman","Jaiden","Sabrina","Milo","Clara","Kiran","Polly",
                "Kristian","Salma","Gabriela","Sami","Sky","Michal","Damian","Cian","Teddy","Halima","Cory","Tamara","Hanna","Conner","Jonah","Serena","Aryan","Diana","Claire","Amir","Alistair","Maddie","Alina","Tamzin","Lawrence","Brodie","Shelby","Aston","Philippa","Marshall","Tyrese","Szymon","Priya","Bella","Usman","Gregory","Iona","Tiana","Byron","Jamal","Robin","Rosa","Adil","Brogan","Tallulah","Macie","Benedict","Xavier","Iris","Lloyd","Stefan","Klaudia","Solomon","Sidney","Aman","Kirsten","Imaan","Hamzah","Kyla","Carly","Alexa","Haydn","Haris","Victor","Jared","Karl","Jai","Arjun","Leonie","Zaynab","Karolina","Jimmy","Eric","Erica","Emilie","Toni","Stuart","Lily-mae","Isha","Anastasia","Amanda","Jorja","Harris","Ahmad","Frances","Isobelle","Rayan","Aoife","Malaika","Leona","Stacey","Carter","Kaden","Khadijah","Kamil","Ana","Lauryn","Lyla","Katrina","Noor","Constance","Renee","Arron","Laurence","Barnaby","Deborah","Hafsah","Andre","Kaci","Bonnie","Aysha","Weronika","Melanie",
                "Tanisha","Jak","Hazel","Keiran","Ian","Brian","Kyran","Kasey","Ronan","Zakariya","Antony","Andrea","Tanya","Khalid","Teagan","Billie","Demi-leigh","Wesley","Rhea","Miriam","Yasmine","Calvin","Jan","Lilia","Cain","Tony","Tiegan","Daniela","Freddy","Angelina","Sandra","Leonardo","Tianna","Aminah","Verity","Marc","Miley","Nicolas","Jaydon","Raphael","Antonio","Guy","Mae","Haider","Maggie","Reggie","Kiara","Preston","Sally","Phoenix","Syeda","Siobhan","Musa","Kelsie","Lorna","Martyna","Lia","Stella","Angela","Haleema","Rocco","Lena","Marcel","Abi","Carmen","Emelia","Lily-may","Farhan","Jensen","Anisha","Saif","Amna","Fabian","Kia","Roxanne","Teigan","Chanel","Fletcher","Millicent","Junaid","Jed","Sadia","Melody","Fern","Codie","Kallum","Nevaeh","Rafael","Arran","Keaton","Rayyan","Jazmin","Meghan","Zachariah","Ivan","Imran","Yahya","Zane","Damien","Bartosz","Karina","Rihanna","Hermione","Sahil","Haroon","Autumn","Edie","Jordon","Sonia","Samira","Milan","Kacie","Precious",
                "Isa","Jada","Asha","Ryley","Ajay","Josiah","Maximus","Chelsey","Shakira","Julian","Marco","Seren","Hashim","Kamran","Sumaya","Keegan","Ted","Kerry","Shanice","Elsa","Jeremy","Annalise","Danyal","Nia","Zoya","Micah","Roisin","Anais","Elias","Aqsa","Vinnie","Paulina","Dennis","Abdirahman","Sameer","Adele","Evangeline","Hugh","Aliya","Ayman","Denis","Emmie","Amirah","Edith","Alishba","Awais","Kaya","Todd","Cassie","Tamsin","Marie","Leyla","Rehan","Halle","Hussain","Saul","Lily-rose","Wiktor","Riya","Anas","Esha","Oakley","Ralph","Nell","Luka","Brittany","Chanelle","Adnan","Zakaria","Lenny","Monica","Fatimah","Caroline","Caden","Isaiah","Lillian","Douglas","Alec","Tyrone","Dominika","Macauley","Joey","Hamish","Neha","Stevie","Eddie","Aishah","Qasim","Dana","Brianna","May","Igor","Eli","Farah","Alannah","Dante","Clayton","Arun","Rufus","Shona","Brody","Lacie","Patrycja","Britney","Lila","Joanne","Aliza","Samir","Lincoln","Sapphire","Erika","Harmony","Kurtis","Jakob","Junior",
                "Jenny","Antonio","Nadine","Faiza","Albie","Humaira","Johnny","Frazer","Jaime","Coby","Brett","Amani","Aleksander","Diya","Keelan","Anika","Olly","Fergus","Rahul","Shea","Rosemary","Keisha","Maximillian","Fleur","Mikey","Yusra","Mikolaj","Kayley","Gareth","Arabella","Dion","Xander","Uzair","Armaan","Kieren","Pippa","Bianca","Selina","Josef","Ty","Yasin","Jazmine","Alysha","Simone","Ellie-mai","Ivy","Flora","Ellena","Abbi","Phillip","Sumayyah","Callie","Cayden","Alicja","Maciej","Carlos","Leia","Subhan","Rianna","Hasnain","Saira","Zeeshan","Gary","Bryn","Aadam","Cleo","Davina","Asma","Sharon","Kathleen","Krystian","Caiden","Patricia","Sabah","Ayla","Daria","Aron","Aaminah","Tasnim","Liliana","Marwa","Leyton","Ricardo","Aleesha","Honor","Mario","Asher","Jonathon","Piotr",

            ],
        },
        {
            "before": "#EMOTION#",
            "after": [
                "alive", "tired", "sleepy", "anxious", "nervous", "angry", "sad", "happy",
                "exhausted", "joyous", "scared", "confused", "excited", "calm", "embarrassed", "vibrant",
                "depleted", "optimistic", "pessimistic", "heartbroken", "worried", "unsure", "irritated",
                "brave", "adventurous", "confident",
            ],
        },
        {
            "before": "#ACTIVITY#",
            "after": [
                "watched tv", "watched a movie", "jogged", "played the guiter", "played soccer", "played a board game", "played video games", "went to the gym", "cooked a meal", "baked bread", "baked a dessert", 
                "surfed on the internet", "went to the park", "went to a restaurant", "danced", "sang", "whistled", 
                "went to a bar", "drank", "ate", "hugged", "kissed",
            ],
        },


        // =========== ROOM NAME ============
        {
            "before": "#ROOM#",
            "after": [
                "#ADJN# #FIRSTN#",
                "#FIRSTN#",
                "#FIRSTN#",
                "#FIRSTN#",
                "#FIRSTN#",
            ]
        },
        {
            "before": "#FIRSTN#",
            "after": [
                "#ANIMAL#",
                "#CUSTOM#",
                "#OCCUPATION#",
                "#WORD#"
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
            "before": "#WORD#",
            "after": [
                "people","history","way","art","world","information","map","two","family","government","health","system","computer","meat","year","thanks","music","person","reading","method","data","food","understanding",
                "theory","law","bird","literature","problem","software","control","knowledge","power","ability","economics","love","internet","television","science","library","nature","fact","product","idea","temperature",
                "investment","area","society","activity","story","industry","media","thing","oven","community","definition","safety","quality","development","language","management","player","variety","video","week","security",
                "country","exam","movie","organization","equipment","physics","analysis","policy","series","thought","basis","boyfriend","direction","strategy","technology","army","camera","freedom","paper","environment","child",
                "instance","month","truth","marketing","university","writing","article","department","difference","goal","news","audience","fishing","growth","income","marriage","user","combination","failure","meaning","medicine",
                "philosophy","teacher","communication","night","chemistry","disease","disk","energy","nation","road","role","soup","advertising","location","success","addition","apartment","education","math","moment","painting","politics",
                "attention","decision","event","property","shopping","student","wood","competition","distribution","entertainment","office","population","president","unit","category","cigarette","context","introduction","opportunity",
                "performance","driver","flight","length","magazine","newspaper","relationship","teaching","cell","dealer","finding","lake","member","message","phone","scene","appearance","association","concept","customer","death",
                "discussion","housing","inflation","insurance","mood","woman","advice","blood","effort","expression","importance","opinion","payment","reality","responsibility","situation","skill","statement","wealth","application",
                "city","county","depth","estate","foundation","grandmother","heart","perspective","photo","recipe","studio","topic","collection","depression","imagination","passion","percentage","resource","setting","ad","agency",
                "college","connection","criticism","debt","description","memory","patience","secretary","solution","administration","aspect","attitude","director","personality","psychology","recommendation","response","selection",
                "storage","version","alcohol","argument","complaint","contract","emphasis","highway","loss","membership","possession","preparation","steak","union","agreement","cancer","currency","employment","engineering","entry",
                "interaction","mixture","preference","region","republic","tradition","virus","actor","classroom","delivery","device","difficulty","drama","election","engine","football","guidance","hotel","owner","priority","protection",
                "suggestion","tension","variation","anxiety","atmosphere","awareness","bath","bread","candidate","climate","comparison","confusion","construction","elevator","emotion","employee","employer","guest","height","leadership",
                "mall","manager","operation","recording","sample","transportation","charity","cousin","disaster","editor","efficiency","excitement","extent","feedback","guitar","homework","leader","mom","outcome","permission","presentation",
                "promotion","reflection","refrigerator","resolution","revenue","session","singer","tennis","basket","bonus","cabinet","childhood","church","clothes","coffee","dinner","drawing","hair","hearing","initiative","judgment","lab",
                "measurement","mode","mud","orange","poetry","police","possibility","procedure","queen","ratio","relation","restaurant","satisfaction","sector","signature","significance","song","tooth","town","vehicle","volume","wife","accident",
                "airport","appointment","arrival","assumption","baseball","chapter","committee","conversation","database","enthusiasm","error","explanation","farmer","gate","girl","hall","historian","hospital","injury","instruction",
                "maintenance","manufacturer","meal","perception","pie","poem","presence","proposal","reception","replacement","revolution","river","son","speech","tea","village","warning","winner","worker","writer","assistance","breath",
                "buyer","chest","chocolate","conclusion","contribution","cookie","courage","dad","desk","drawer","establishment","examination","garbage","grocery","honey","impression","improvement","independence","insect","inspection",
                "inspector","king","ladder","menu","penalty","piano","potato","profession","professor","quantity","reaction","requirement","salad","sister","supermarket","tongue","weakness","wedding","affair","ambition","analyst","apple",
                "assignment","assistant","bathroom","bedroom","beer","birthday","celebration","championship","cheek","client","consequence","departure","diamond","dirt","ear","fortune","friendship","funeral","gene","girlfriend","hat",
                "indication","intention","lady","midnight","negotiation","obligation","passenger","pizza","platform","poet","pollution","recognition","reputation","shirt","sir","speaker","stranger","surgery","sympathy","tale","throat",
                "trainer","uncle","youth","time","work","film","water","money","example","while","business","study","game","life","form","air","day","place","number","part","field","fish","back","process","heat","hand","experience","job",
                "book","end","point","type","home","economy","value","body","market","guide","interest","state","radio","course","company","price","size","card","list","mind","trade","line","care","group","risk","word","fat","force","key",
                "light","training","name","school","top","amount","level","order","practice","research","sense","service","piece","web","boss","sport","fun","house","page","term","test","answer","sound","focus","matter","kind","soil","board",
                "oil","picture","access","garden","range","rate","reason","future","site","demand","exercise","image","case","cause","coast","action","age","bad","boat","record","result","section","building","mouse","cash","class","nothing",
                "period","plan","store","tax","side","subject","space","rule","stock","weather","chance","figure","man","model","source","beginning","earth","program","chicken","design","feature","head","material","purpose","question","rock",
                "salt","act","birth","car","dog","object","scale","sun","note","profit","rent","speed","style","war","bank","craft","half","inside","outside","standard","bus","exchange","eye","fire","position","pressure","stress","advantage",
                "benefit","box","frame","issue","step","cycle","face","item","metal","paint","review","room","screen","structure","view","account","ball","discipline","medium","share","balance","bit","black","bottom","choice","gift","impact",
                "machine","shape","tool","wind","address","average","career","culture","morning","pot","sign","table","task","condition","contact","credit","egg","hope","ice","network","north","square","attempt","date","effect","link","post",
                "star","voice","capital","challenge","friend","self","shot","brush","couple","debate","exit","front","function","lack","living","plant","plastic","spot","summer","taste","theme","track","wing","brain","button","click","desire",
                "foot","gas","influence","notice","rain","wall","base","damage","distance","feeling","pair","savings","staff","sugar","target","text","animal","author","budget","discount","file","ground","lesson","minute","officer","phase",
                "reference","register","sky","stage","stick","title","trouble","bowl","bridge","campaign","character","club","edge","evidence","fan","letter","lock","maximum","novel","option","pack","park","plenty","quarter","skin","sort",
                "weight","baby","background","carry","dish","factor","fruit","glass","joint","master","muscle","red","strength","traffic","trip","vegetable","appeal","chart","gear","ideal","kitchen","land","log","mother","net","party",
                "principle","relative","sale","season","signal","spirit","street","tree","wave","belt","bench","commission","copy","drop","minimum","path","progress","project","sea","south","status","stuff","ticket","tour","angle","blue",
                "breakfast","confidence","daughter","degree","doctor","dot","dream","duty","essay","father","fee","finance","hour","juice","limit","luck","milk","mouth","peace","pipe","seat","stable","storm","substance","team","trick","afternoon",
                "bat","beach","blank","catch","chain","consideration","cream","crew","detail","gold","interview","kid","mark","match","mission","pain","pleasure","score","screw","sex","shop","shower","suit","tone","window","agent","band",
                "block","bone","calendar","cap","coat","contest","corner","court","cup","district","door","east","finger","garage","guarantee","hole","hook","implement","layer","lecture","lie","manner","meeting","nose","parking","partner",
                "profile","respect","rice","routine","schedule","swimming","telephone","tip","winter","airline","bag","battle","bed","bill","bother","cake","code","curve","designer","dimension","dress","ease","emergency","evening","extension",
                "farm","fight","gap","grade","holiday","horror","horse","host","husband","loan","mistake","mountain","nail","noise","occasion","package","patient","pause","phrase","proof","race","relief","sand","sentence","shoulder","smoke",
                "stomach","string","tourist","towel","vacation","west","wheel","wine","arm","aside","associate","bet","blow","border","branch","breast","brother","buddy","bunch","chip","coach","cross","document","draft","dust","expert","floor",
                "god","golf","habit","iron","judge","knife","landscape","league","mail","mess","native","opening","parent","pattern","pin","pool","pound","request","salary","shame","shelter","shoe","silver","tackle","tank","trust","assist",
                "bake","bar","bell","bike","blame","boy","brick","chair","closet","clue","collar","comment","conference","devil","diet","fear","fuel","glove","jacket","lunch","monitor","mortgage","nurse","pace","panic","peak","plane",
                "reward","row","sandwich","shock","spite","spray","surprise","till","transition","weekend","welcome","yard","alarm","bend","bicycle","bite","blind","bottle","cable","candle","clerk","cloud","concert","counter","flower",
                "grandfather","harm","knee","lawyer","leather","load","mirror","neck","pension","plate","purple","ruin","ship","skirt","slice","snow","specialist","stroke","switch","trash","tune","zone","anger","award","bid","bitter","boot",
                "bug","camp","candy","carpet","cat","champion","channel","clock","comfort","cow","crack","engineer","entrance","fault","grass","guy","hell","highlight","incident","island","joke","jury","leg","lip","mate","motor","nerve",
                "passage","pen","pride","priest","prize","promise","resident","resort","ring","roof","rope","sail","scheme","script","sock","station","toe","tower","truck","witness","a","you","it","can","will","if","one","many","most","other",
                "use","make","good","look","help","go","great","being","few","might","still","public","read","keep","start","give","human","local","general","she","specific","long","play","feel","high","tonight","put","common","set","change",
                "simple","past","big","possible","particular","today","major","personal","current","national","cut","natural","physical","show","try","check","second","call","move","pay","let","increase","single","individual","turn","ask","buy",
                "guard","hold","main","offer","potential","professional","international","travel","cook","alternative","following","special","working","whole","dance","excuse","cold","commercial","low","purchase","deal","primary","worth","fall",
                "necessary","positive","produce","search","present","spend","talk","creative","tell","cost","drive","green","support","glad","remove","return","run","complex","due","effective","middle","regular","reserve","independent","leave",
                "original","reach","rest","serve","watch","beautiful","charge","active","break","negative","safe","stay","visit","visual","affect","cover","report","rise","walk","white","beyond","junior","pick","unique","anything","classic",
                "final","lift","mix","private","stop","teach","western","concern","familiar","fly","official","broad","comfortable","gain","maybe","rich","save","stand","young","fail","heavy","hello","lead","listen","valuable","worry","handle",
                "leading","meet","release","sell","finish","normal","press","ride","secret","spread","spring","tough","wait","brown","deep","display","flow","hit","objective","shoot","touch","cancel","chemical","cry","dump","extreme",
                "push","conflict","eat","fill","formal","jump","kick","opposite","pass","pitch","remote","total","treat","vast","abuse","beat","burn","deposit","print","raise","sleep","somewhere","advance","anywhere","consist","dark",
                "double","draw","equal","fix","hire","internal","join","kill","sensitive","tap","win","attack","claim","constant","drag","drink","guess","minor","pull","raw","soft","solid","wear","weird","wonder","annual","count","dead",
                "doubt","feed","forever","impress","nobody","repeat","round","sing","slide","strip","whereas","wish","combine","command","dig","divide","equivalent","hang","hunt","initial","march","mention","smell","spiritual","survey",
                "tie","adult","brief","crazy","escape","gather","hate","prior","repair","rough","sad","scratch","sick","strike","employ","external","hurt","illegal","laugh","lay","mobile","nasty","ordinary","respond","royal","senior",
                "split","strain","struggle","swim","train","upper","wash","yellow","convert","crash","dependent","fold","funny","grab","hide","miss","permit","quote","recover","resolve","roll","sink","slip","spare","suspect","sweet",
                "swing","twist","upstairs","usual","abroad","brave","calm","concentrate","estimate","grand","male","mine","prompt","quiet","refuse","regret","reveal","rush","shake","shift","shine","steal","suck","surround","anybody",
                "bear","brilliant","dare","dear","delay","drunk","female","hurry","inevitable","invite","kiss","neat","pop","punch","quit","reply","representative","resist","rip","rub","silly","smile","spell","stretch","stupid","tear",
                "temporary","tomorrow","wake","wrap","yesterday",
            ]
        }

    ]
};