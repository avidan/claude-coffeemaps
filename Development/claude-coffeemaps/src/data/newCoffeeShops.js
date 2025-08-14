// All new coffee shops from Excel file
const newShops = `Cafe Ubuntu,Rift Valley,,Africa,Kenya
Espresso Lab,Cape Town,,Africa,South Africa
Rosetta Roastery,Cape Town,,Africa,South Africa
Colombo Coffee & Tea,Durban,,Africa,South Africa
Father Coffee,Johannesburg,,Africa,South Africa
Real Coffee,Beijing,,Asia,China
Voyage Coffee,Beijing,,Asia,China
Mondoli Studio,Chengdu,,Asia,China
Cafe Bintino,Dailan,,Asia,China
Rose Café,Guangzhou,,Asia,China
18 Grams (Causeway),Hong Kong,,Asia,China
Barista Cafe,Hong Kong,,Asia,China
Barista Jam,Hong Kong,,Asia,China
Coco Espresso,Hong Kong,,Asia,China
Cupping Room,Hong Kong,,Asia,China
Hazel & Hershey ,Hong Kong,,Asia,China
Knock Box,Hong Kong,,Asia,China
UNI-UNI,Nanjing,,Asia,China
Cafe de Vulcan,Shanghai,,Asia,China
Café Mingqian,Shanghai,,Asia,China
Mellower Coffee,Shanghai,,Asia,China
SeeSaw,Shanghai,,Asia,China
Boutique Café ,Kashan,,Asia,Iran
Street Lounge Café ,Shiraz,,Asia,Iran
Lamiz,Tehran,,Asia,Iran
Mahtaab Café,Tehran,,Asia,Iran
Roberto Cafe,Tehran,,Asia,Iran
SAM Cafe,Tehran,,Asia,Iran
V Cafe,Tehran,,Asia,Iran
Cafe Phalam,Kyoto,,Asia,Japan
Sentido,Kyoto,,Asia,Japan
About Life Coffee Brewers,Tokyo,,Asia,Japan
Arise,Tokyo,,Asia,Japan
Bear Pond,Tokyo,,Asia,Japan
Cafe de L'Ambre,Tokyo,,Asia,Japan
Cafe Les Jeux,Tokyo,,Asia,Japan
Fuglen,Tokyo,,Asia,Japan
Glitch,Tokyo,,Asia,Japan
Good Neighbor,Tokyo,,Asia,Japan
Maruyama Coffee,Tokyo,,Asia,Japan
Sarutahiko Coffee Atelier Sengawa ,Tokyo,,Asia,Japan
Switch Coffee,Tokyo,,Asia,Japan
The Local Coffee Stand,Tokyo,,Asia,Japan
Unlimited Coffee Bar,Tokyo,,Asia,Japan
VCR,Kuala Lumpur,,Asia,Malaysia
Tesla Coffee,Ekaterinaburg,,Asia,Russia
Burger Brothers,Moscow,,Asia,Russia
Cafe del Parco,Moscow,,Asia,Russia
Chernyi Cooperative,Moscow,,Asia,Russia
Coffeemania,Moscow,,Asia,Russia
Double B,Moscow,,Asia,Russia
Good Enough Coffee,Moscow,,Asia,Russia
Les,Moscow,,Asia,Russia
The Man and the Steamboat,Moscow,,Asia,Russia
WakeUp Cafe,Moscow,,Asia,Russia
Nanyang Old Coffee,Singapore,,Asia,Singapore
Nylon Coffee Roasters,Singapore,,Asia,Singapore
5 Extracts,Hongdae,,Asia,South Korea
Anthracite,Seoul,,Asia,South Korea
Bohemian,Seoul,,Asia,South Korea
Club Espresso,Seoul,,Asia,South Korea
Coffee LEC (may be closed),Seoul,,Asia,South Korea
Coffee Libre ,Seoul,,Asia,South Korea
Coffee Seed,Seoul,,Asia,South Korea
Coffee Temple,Seoul,,Asia,South Korea
D-Plex,Seoul,,Asia,South Korea
Fritz Coffee Company,Seoul,,Asia,South Korea
Roasting Humanoid,Seoul,,Asia,South Korea
Homerun Coffee Roasters,Keelung,,Asia,Taiwan
Retro,Taichung,,Asia,Taiwan
Cafe Lulu,Taichung,,Asia,Taiwan
Coffee Lover's Planet,Taipei,,Asia,Taiwan
WOW Woolloomooloo Out West,Taipei,,Asia,Taiwan
Rahdesign cafe,Taipei,,Asia,Taiwan
Fika Fika,Taipei,,Asia,Taiwan
GaBee,Taipei,,Asia,Taiwan
Peloso Coffee Roasters,Taipei,,Asia,Taiwan
Ugly Duckling Coffee Bar,Taipei,,Asia,Taiwan
Brave Coffee Roaster,Bangkok,,Asia,Thailand
Ceresia Coffee,Bangkok,,Asia,Thailand
Gallery Drip Coffee,Bangkok,,Asia,Thailand
Phil Coffee,Bangkok,,Asia,Thailand
Roast Coffee & Eatery,Bangkok,,Asia,Thailand
The Sum of Us,Dubai,,Asia,UAE
Tom & Serg,Dubai,,Asia,UAE
Bar 9,Adelaide,,Australia,Australia
Elementary Coffee,Adelaide,,Australia,Australia
Exchange Specialty,Adelaide,,Australia,Australia
Monday's Coffee,Adelaide,,Australia,Australia
Harry's,Bondi,,Australia,Australia
Bunker,Brisbane,,Australia,Australia
Dandelion and Driftwood,Brisbane,,Australia,Australia
Gauge,Brisbane,,Australia,Australia
Merriweather Cafe,Brisbane,,Australia,Australia
Pour Boy,Brisbane,,Australia,Australia
Strauss FD,Brisbane,,Australia,Australia
Bayleaf,Byron Bay,,Australia,Australia
Ona Café,Canberra,,Australia,Australia
Altius,Melbourne,,Australia,Australia
Assembly,Melbourne,,Australia,Australia
Auction Rooms,Melbourne,,Australia,Australia
Duchess of Spotswood (restaurant),Melbourne,,Australia,Australia
Everyday Coffee,Melbourne,,Australia,Australia
Kettle Black,Melbourne,,Australia,Australia
Mailing Room,Melbourne,,Australia,Australia
Market Lane Coffee,Melbourne,,Australia,Australia
Patricia's,Melbourne,,Australia,Australia
Proud Mary,Melbourne,,Australia,Australia
Seven Seeds,Melbourne,,Australia,Australia
Small Batch,Melbourne,,Australia,Australia
St. Ali,Melbourne,,Australia,Australia
Top Paddock,Melbourne,,Australia,Australia
Clandestino Roasters,Noosa,,Australia,Australia
Five Senses,Perth,,Australia,Australia
Typika,Perth,,Australia,Australia
Coffee Alchemy,Sydney,,Australia,Australia
Edition Coffee Roasters,Sydney,,Australia,Australia
Mecca,Sydney,,Australia,Australia
Paramount Coffee,Sydney,,Australia,Australia
Salvage Coffee,Sydney,,Australia,Australia
Sensory Lab,Sydney,,Australia,Australia
Single Origin Roasters,Sydney,,Australia,Australia
Irons and Craig,Yamba,,Australia,Australia
Brumas del Zurqui ,Heredia,,Central America,Costa Rica
Don Mayo Coffee,San Jose,,Central America,Costa Rica
Crafters,,,Central America,El Salvador
4 Monkeys,,,Central America,El Salvador
S-Cool,El Zonte,,Central America,El Salvador
Viva Espresso,San Salvador,,Central America,El Salvador
Bella Vista Coffee,Antigua,,Central America,Guatemala
Cafe Divino,,,Central America,Guatemala
El Injerto Cafe,Guatemala City,,Central America,Guatemala
The Room,Guatemala City,,Central America,Guatemala
Cafe Museo,Huehuetenango,,Central America,Guatemala
Nancy's Coffee Shop,Marcala,,Central America,Honduras
El Dorao,Peña Blanca,,Central America,Honduras
Kaldi's Coffee,Santa Rosa de Copan,,Central America,Honduras
Café Prückel,Vienna,,Europe,Austria
Simon Says,Ghent,,Europe,Belgium
Viva Sara,Kortrijk,,Europe,Belgium
Bistro 75,Zagreb,,Europe,Croatia
Eliscaffe,Zagreb,,Europe,Croatia
Express Bar,Zagreb,,Europe,Croatia
Mak Na Konac,Zagreb,,Europe,Croatia
EMA,Prague,,Europe,Czech Republic
Kaverna Prazina,Prague,,Europe,Czech Republic
Muj Salek Kavy,Prague,,Europe,Czech Republic
La Cabra,Aarhus,,Europe,Denmark
Amass (restaurant) ,Copenhagen,,Europe,Denmark
Coffee Collective Godthåbsvej,Copenhagen,,Europe,Denmark
Coffee Collective Jaegersbrogadde,Copenhagen,,Europe,Denmark
Coffee Collective Torvehallerne,Copenhagen,,Europe,Denmark
Europa,Copenhagen,,Europe,Denmark
Collona & Smalls,Bath,,Europe,England
Bold Street,Liverpool,,Europe,England
46b Espresso hut,London,,Europe,England
Association Coffee ,London,,Europe,England
Bar Termini,London,,Europe,England
Bean About Town,London,,Europe,England
Browns of Brockley,London,,Europe,England
Bulldog Edition,London,,Europe,England
Caravan Roasters,London,,Europe,England
Climpson & Sons,London,,Europe,England
Craft (cart),London,,Europe,England
Curator's Coffee,London,,Europe,England
Dose,London,,Europe,England
Harris and Hoole\, Stansted Airport,London,,Europe,England
Kaffeine,London,,Europe,England
Leila's,London,,Europe,England
Lyle's,London,,Europe,England
Monmouth (Covent Garden),London,,Europe,England
Monmouth (SPA Terminus),London,,Europe,England
Prufrock Coffee,London,,Europe,England
Timberyards (Seven Dials),London,,Europe,England
Workshop (Clerkenwell Rd),London,,Europe,England
Workshop (Fitzrovia),London,,Europe,England
Workshop Coffee (Marylebone),London,,Europe,England
Good Life Coffee,Helsinki,,Europe,Finland
Kahvila Siili ,Helsinki,,Europe,Finland
La Boîte à Café,Lyon,,Europe,France
C.R.E.A.M.,Paris,,Europe,France
Café Lomi,Paris,,Europe,France
Coutume,Paris,,Europe,France
Fondation,Paris,,Europe,France
Fragments,Paris,,Europe,France
Hexagone,Paris,,Europe,France
Holybelly,Paris,,Europe,France
Honor Cafe,Paris,,Europe,France
KBCafe,Paris,,Europe,France
Loustic,Paris,,Europe,France
Telescope,Paris,,Europe,France
Ten Belles,Paris,,Europe,France
AmEnde der Welt,Berlin,,Europe,Germany
Bonanza,Berlin,,Europe,Germany
Chapter One,Berlin,,Europe,Germany
Coffee Companion,Berlin,,Europe,Germany
Coffee Profilers,Berlin,,Europe,Germany
Companion Coffee,Berlin,,Europe,Germany
Father Carpenter,Berlin,,Europe,Germany
Five Elephant,Berlin,,Europe,Germany
Nano Coffee,Berlin,,Europe,Germany
Nobelhart & Schmutzig,Berlin,,Europe,Germany
The Barn,Berlin,,Europe,Germany
Best Espresso Kaffeemuseum,Hamburg,,Europe,Germany
Elb Gold (Messe locaton),Hamburg,,Europe,Germany
SPEICHERSTADT KAFFERÖSTEREI,Hamburg,,Europe,Germany
Stockholm Espresso Club,Hamburg,,Europe,Germany
Coffee Nerd,Heidelberg,,Europe,Germany
Kaffee,Munich,,Europe,Germany
Machhörndi Kaffee,Nuremburg,,Europe,Germany
Tailor Made,Athens,,Europe,Greece
The Underdog,Athens,,Europe,Greece
Espresso Embassy,Budapest,,Europe,Hungary
Kontakt,Budapest,,Europe,Hungary
My Little Melbourne,Budapest,,Europe,Hungary
Braginn,Flúðir,,Europe,Iceland
Pallett Kaffikompaní,Hafnarfjordur,,Europe,Iceland
Kaffitár,Keflavik,,Europe,Iceland
Dill (restaurant),Reykjavík,,Europe,Iceland
Kaffibrugghúsið,Reykjavík,,Europe,Iceland
Kaffihús Vesturbæja,Reykjavík,,Europe,Iceland
Kaffislippur,Reykjavík,,Europe,Iceland
Reykjavík Roasters,Reykjavík,,Europe,Iceland
Established Coffee,Belfast,,Europe,Ireland
3FE,Dublin,,Europe,Ireland
Coffeeangel,Dublin,,Europe,Ireland
Fumbally Cafe,Dublin,,Europe,Ireland
Kaph,Dublin,,Europe,Ireland
Love Supreme,Dublin,,Europe,Ireland
Proper Order,Dublin,,Europe,Ireland
Roasted Brown,Dublin,,Europe,Ireland
Tamp and Stitch,Dublin,,Europe,Ireland
Vice,Dublin,,Europe,Ireland
Caffe Terzi,Bologna,,Europe,Italy
Ditta Artigianale ,Florence,,Europe,Italy
Bar Elisa,Lucca,,Europe,Italy
Taglio,Milan,,Europe,Italy
Santo Eustachio,Rome,,Europe,Italy
Tazza D'Oro,Rome,,Europe,Italy
Illy Caffe,Trieste,,Europe,Italy
Cafe del Doge,Venice,,Europe,Italy
Koko Coffee & Design,Amsterdam,,Europe,Netherlands
Scandinavian Embassy,Amsterdam,,Europe,Netherlands
White Label Coffee,Amsterdam,,Europe,Netherlands
Blanche Dael,Matricht,,Europe,Netherlands
Man Met Bril Koffie,Rotterdam,,Europe,Netherlands
Java ,Oslo,,Europe,Norway
Moka,Oslo,,Europe,Norway
Solberg & Hansen Concept Boutique,Oslo,,Europe,Norway
Supreme Roastworks,Oslo,,Europe,Norway
Tim Wendelboe,Oslo,,Europe,Norway
Karmaroasters,Krakow,,Europe,Poland
Filtry,Warsaw,,Europe,Poland
Kofi Brand,Warsaw,,Europe,Poland
Ministerwsto Kavy,Warsaw,,Europe,Poland
Relaks,Warsaw,,Europe,Poland
Bettina e Niccolò Corallo,Lisbon,,Europe,Portugal
Fábrica Coffee Roasters,Lisbon,,Europe,Portugal
Grémio,Lisbon,,Europe,Portugal
Artisan Coffee,Edinburgh,,Europe,Scotland
Fortitude Coffee,Edinburgh,,Europe,Scotland
All That is Coffee,Glasgow,,Europe,Scotland
Avenue Coffee,Glasgow,,Europe,Scotland
Laboratorio,Glasgow,,Europe,Scotland
Paper Cup,Glasgow,,Europe,Scotland
Pena,Glasgow,,Europe,Scotland
The Plan,Cardiff,,Europe,Wales
Kofein,Belgrade,,Europe,Serbia
Pržionica,Belgrade,,Europe,Serbia
Nomad,Barcelona,,Europe,Spain
Satan's Coffee Corner,Barcelona,,Europe,Spain
Alkemisten,Gothenburg,,Europe,Sweden
Da Matteo,Gothenburg,,Europe,Sweden
Kale'i Kaffebar,Gothenburg,,Europe,Sweden
Syster Marmelad (Restaurant),Gothenburg,,Europe,Sweden
Viktors Kaffe,Gothenburg,,Europe,Sweden
Koppi,Helsingborg,,Europe,Sweden
Drop Coffee,Stockholm,,Europe,Sweden
Johan & Nystrom Concept Store,Stockholm,,Europe,Sweden
Kaffeverket/Snickarbacken 7,Stockholm,,Europe,Sweden
Mean Coffee,Stockholm,,Europe,Sweden
Kronotrop,Istanbul,,Europe,Turkey
Mandabatmaz,Istanbul,,Europe,Turkey
Norm Coffee,Istanbul,,Europe,Turkey
Petra Coffee,Istanbul,,Europe,Turkey
Şark Kahvesi,Istanbul,,Europe,Turkey
Analog Coffee,Calgary,AB,North America,Canada
Cafe Gravity,Calgary,AB,North America,Canada
Monogram Coffee,Calgary,AB,North America,Canada
Phil & Sebastian,Calgary,AB,North America,Canada
Rosso Coffee Roasters,Calgary,AB,North America,Canada
Elm,Edmonton,AB,North America,Canada
Transcend,Edmonton,AB,North America,Canada
Dose,Red Deer,AB,North America,Canada
49th Parallel (Main St),Vancouver,BC,North America,Canada
Birds & Beets (resto?),Vancouver,BC,North America,Canada
Caffe Artigiano,Vancouver,BC,North America,Canada
Elysian Coffee,Vancouver,BC,North America,Canada
Revolver Coffee,Vancouver,BC,North America,Canada
Timbertrain Coffee Roasters,Vancouver,BC,North America,Canada
Ratio Coffee & Pastry,Vernon,BC,North America,Canada
Bows & Arrows,Victoria,BC,North America,Canada
Habit Coffee,Victoria,BC,North America,Canada
Hey Happy,Victoria,BC,North America,Canada
Little Sister,Winnipeg,MB,North America,Canada
Make,Winnipeg,MB,North America,Canada
Parlour,Winnipeg,MB,North America,Canada
Thom Bargen,Winnipeg,MB,North America,Canada
Two if By Sea,Halifax,NS,North America,Canada
Pinecone,Hamilton,ON,North America,Canada
Bread and Sons,Ottawa,ON,North America,Canada
Boxcar Social,Toronto,ON,North America,Canada
Buds Coffee,Toronto,ON,North America,Canada
Jacked Up,Toronto,ON,North America,Canada
Jasons Coffee,Toronto,ON,North America,Canada
Manic Coffee,Toronto,ON,North America,Canada
Reunion Island,Toronto,ON,North America,Canada
Sam James Coffee Bar (Ossington),Toronto,ON,North America,Canada
Tokyo Smoke,Toronto,ON,North America,Canada
Cafe Myriade,Montreal,QC,North America,Canada
Le Couteau,Montreal,QC,North America,Canada
Le Pista Café Montréal (Velopresso),Montreal,QC,North America,Canada
Pikolo Espresso Bar,Montreal,QC,North America,Canada
Collective Coffee,Saskatoon,SK,North America,Canada
Museo,Saskatoon,SK,North America,Canada
Prado Café,Vancouver,BC,North America,Canada
Buna MX,Mexico City,,North America,Mexico
Cafe Passmar,Mexico City,,North America,Mexico
PalReal Cafe,Mexico City,,North America,Mexico
Sospeso Tijuana,Tijuana,,North America,Mexico
Seeds,Birmingham,AL,North America,US
Onyx,Fayetteville,AR,North America,US
Flatiron Coffee,Jerome,AZ,North America,US
Cartel Coffee,Phoenix,AZ,North America,US
Algorithm,Berkeley,CA,North America,US
Bartevalle Coffee & Wine,Berkeley,CA,North America,US
Verve Coffee Roasters,Capitola,CA,North America,US
Kuppajoy,Clovis,CA,North America,US
Coffee Comissary,Culver City,CA,North America,US
Bird Rock Coffee,La Jolla,CA,North America,US
Blacktop Coffee,Los Angeles,CA,North America,US
Cafe Dulce,Los Angeles,CA,North America,US
Cognoscenti Coffee,Los Angeles,CA,North America,US
G&B,Los Angeles,CA,North America,US
Go Get Em Tiger,Los Angeles,CA,North America,US
Intelligentsia (Venice),Los Angeles,CA,North America,US
Intelligentsia Silverlake,Los Angeles,CA,North America,US
Proof,Los Angeles,CA,North America,US
Sqirl,Los Angeles,CA,North America,US
Tiago,Los Angeles,CA,North America,US
Trystero,Los Angeles,CA,North America,US
Verve LA,Los Angeles,CA,North America,US
Arbor,Oakland,CA,North America,US
Modern,Oakland,CA,North America,US
Timeless Cafe,Oakland,CA,North America,US
Zombie Runner,Palo Alto,CA,North America,US
Intelligentsia Pasadena,Pasadena,CA,North America,US
Compania Cafe,San Fernando,CA,North America,US
Blue Bottle Coffee (Mint Plaza),San Francisco,CA,North America,US
Four Barrel Coffee,San Francisco,CA,North America,US
Linea Caffe,San Francisco,CA,North America,US
Mazarine,San Francisco,CA,North America,US
Ritual Coffee Roasters,San Francisco,CA,North America,US
Ritual Coffee Roasters (container),San Francisco,CA,North America,US
Saint Frank,San Francisco,CA,North America,US
Sightglass Coffee,San Francisco,CA,North America,US
Tiny Warrior Coffee,San Francisco,CA,North America,US
Trouble Coffee,San Francisco,CA,North America,US
Wrecking Ball,San Francisco,CA,North America,US
Chromatic Coffee,San Jose,CA,North America,US
Scout Coffee,San Luis Obispo,CA,North America,US
The French Press,Santa Barbara,CA,North America,US
Black Oak Coffee Roasters,Ukaiah,CA,North America,US
Gjusta,Venice,CA,North America,US
Menotti's Coffee,Venice,CA,North America,US
Two Rivers,Arvada,CO,North America,US
Alpine Modern,Boulder,CO,North America,US
Amethyst,Denver,CO,North America,US
Boxcar Coffee,Denver,CO,North America,US
Corvus Coffee,Denver,CO,North America,US
Crema,Denver,CO,North America,US
Mercantile,Denver,CO,North America,US
Metropolis Coffee Denver,Denver,CO,North America,US
Novo Coffee at Denver Museum,Denver,CO,North America,US
Sweet Bloom Coffee Roaster,Denver,CO,North America,US
Harbinger Coffee ,Fort Collins,CO,North America,US
Ristretto Coffee Lounge,Steamboat Springs,CO,North America,US
Swings,Washington,DC,North America,US
The Seed,Boca Raton,FL,North America,US
Volta,Gainesville,FL,North America,US
Brew and Bold Bean,Jacksonville,FL,North America,US
Panther Coffee,Miami,FL,North America,US
Stardust Video & Coffee,Winter Park,FL,North America,US
Chattahoochee Coffee,Atlanta,GA,North America,US
Empire State South,Atlanta,GA,North America,US
Spiller Park,Atlanta,GA,North America,US
Perc,Savannah,GA,North America,US
The Florence,Savannah,GA,North America,US
Doma,Coeur D'Alene,ID,North America,US
Caffe Streets,Chicago,IL,North America,US
Intelligentsia Millennium Park,Chicago,IL,North America,US
Intelligentsia Monadnock,Chicago,IL,North America,US
Ipsento,Chicago,IL,North America,US
Blackberry Marke,Glen Ellyn,IL,North America,US
The Wormhole,Chicago,IL,North America,US
PT's Coffee,Topeka,KS,North America,US
Gralehouse,Louisville,KY,North America,US
Cafe du Monde,New Orleans,LA,North America,US
Cherry Espresso Bar,New Orleans,LA,North America,US
Solo Espresso,New Orleans,LA,North America,US
Barismo,Boston,MA,North America,US
George Howell Cafe,Boston,MA,North America,US
Pavement Coffeehouse,Boston,MA,North America,US
Render,Boston,MA,North America,US
Voltage,Boston,MA,North America,US
1369Coffee,Cambridge,MA,North America,US
Crema Cafe,Cambridge,MA,North America,US
Simon's,Cambridge,MA,North America,US
Ceremony Coffee,Annapolis,MD,North America,US
Bard Coffee,Portland,ME,North America,US
Tandem,Portland,ME,North America,US
Comet Coffee,Ann Arbor,MI,North America,US
Astro Coffee,Detroit,MI,North America,US
Madcap Coffee,Grand Rapids,MI,North America,US
Rowster,Grand Rapids,MI,North America,US
Dead River Coffee,Marquette,MI,North America,US
BLK/MRKT,Traverse City,MI,North America,US
Cultivate,Ypsilanti,MI,North America,US
Hyperion Coffee,Ypsilanti,MI,North America,US
Fika Coffee,Grand Marais,MN,North America,US
5Watt Cafe,Minneapolis,MN,North America,US
Dogwood Coffee,Minneapolis,MN,North America,US
Kopplin's Coffee,St. Paul,MN,North America,US
Parisi Coffee,Kansas City ,MO,North America,US
Second Best Coffee,Kansas City ,MO,North America,US
Brick and Mortar,Springfield,MO,North America,US
The Coffee Ethic,Springfield,MO,North America,US
Blueprint Coffee,St Louis,MO,North America,US
Kaldi's Coffee,St Louis,MO,North America,US
Olio,St Louis,MO,North America,US
Sump Coffee,St Louis,MO,North America,US
Not Just Coffee,Charlotte,NC,North America,US
The Daily Press,Charlotte,NC,North America,US
Jubala,Raleigh,NC,North America,US
Fireflour Pizza (restaurant),Bismarck,ND,North America,US
Archetype,Omaha,NE,North America,US
Pressed,Nashua,NH,North America,US
Publicus,Las Vegas,NV,North America,US
Budin,Brooklyn,NY,North America,US
Cafe Devoción,Brooklyn,NY,North America,US
Cafe Grumpy (Greenpoint),Brooklyn,NY,North America,US
Café Devoción,Brooklyn,NY,North America,US
Fort Defiance,Brooklyn,NY,North America,US
Parlor Coffee,Brooklyn,NY,North America,US
Reynards,Brooklyn,NY,North America,US
Smith Canteen,Brooklyn,NY,North America,US
Gimme! Coffee,Ithaca,NY,North America,US
Sweetleaf,Long Island City,NY,North America,US
Abraço,New York,NY,North America,US
Amor y Amargo,New York,NY,North America,US
Blue Bottle (High Line),New York,NY,North America,US
Box Kite East Village,New York,NY,North America,US
Cafe Grumpy Chelsea,New York,NY,North America,US
El Rey,New York,NY,North America,US
Eleven Madison Park,New York,NY,North America,US
Everyman Espresso,New York,NY,North America,US
Intelligentsia High Line (truck),New York,NY,North America,US
Joe Pro Shop,New York,NY,North America,US
Little Collins,New York,NY,North America,US
Ninth Street Espresso,New York,NY,North America,US
The Red Cat,New York,NY,North America,US
Third Rail,New York,NY,North America,US
Collective Espresso,Cinncinatti,OH,North America,US
Pour Coffee,Cleveland,OH,North America,US
Fox in the Snow,Columbus,OH,North America,US
Mission,Columbus,OH,North America,US
Cafe Evoke,Edmond,OK,North America,US
Bespoke,Corvallis,OR,North America,US
Barista (Alberta),Portland,OR,North America,US
Barista (Pearl),Portland,OR,North America,US
Coava Coffee,Portland,OR,North America,US
Either/Or,Portland,OR,North America,US
Good Coffee,Portland,OR,North America,US
Heart Coffee,Portland,OR,North America,US
Stumptown Belmont,Portland,OR,North America,US
Water Avenue Coffee,Portland,OR,North America,US
Elixr,Philadelphia,PA,North America,US
La Colombe (Fishtown),Philadelphia,PA,North America,US
Ultimo Coffee,Philadelphia,PA,North America,US
21st Street Coffee & Tea,Pittsburgh,PA,North America,US
Commonplace,Pittsburgh,PA,North America,US
Constellation,Pittsburgh,PA,North America,US
Angelia's,Bristol,RI,North America,US
Bolt,Providence,RI,North America,US
Seven Stars Bakery,Providence,RI,North America,US
The Shop,Providence,RI,North America,US
City Lights,Charleston,SC,North America,US
Cafe 17,Travelers Rest,SC,North America,US
Coffea Roasterie,Sioux Falls,SD,North America,US
Brash,Chattanooga,TN,North America,US
City and State,Memphis,TN,North America,US
Crema,Nashville,TN,North America,US
Palace,Amarillo,TX,North America,US
Caffe Medici,Austin,TX,North America,US
Cenote,Austin,TX,North America,US
Cuvee Coffee,Austin,TX,North America,US
Figure 8,Austin,TX,North America,US
Flat Track Coffee,Austin,TX,North America,US
Fleet Coffee,Austin,TX,North America,US
Houndstooth Coffee,Austin,TX,North America,US
Patika,Austin,TX,North America,US
The Once-Over,Austin,TX,North America,US
Thunderbird Cafe & Taproom,Austin,TX,North America,US
Avoca,Dallas,TX,North America,US
Cultivar,Dallas,TX,North America,US
Davis Street Espresso,Dallas,TX,North America,US
Zenzero,Dallas,TX,North America,US
Brewed,Forth Worth,TX,North America,US
Blacksmith,Houston,TX,North America,US
Boomtown Coffee,Houston,TX,North America,US
Southside Espresso,Houston,TX,North America,US
Local Coffee,San Antonio,TX,North America,US
Theory Coffee Company,San Antonio,TX,North America,US
Dichotomy,Waco,TX,North America,US
Black Water Loft,Floyd,VA,North America,US
Alchemy,Richmond,VA,North America,US
Brio,Burlington,VT,North America,US
Maglianero,Burlington,VT,North America,US
Scout,Burlington,VT,North America,US
Bar Francis,Olympia,WA,North America,US
Olympia Coffee Roasters,Olympia,WA,North America,US
Lava Java,Ridgefield,WA,North America,US
Analog Coffee,Seattle,WA,North America,US
Cafe Vivace (original),Seattle,WA,North America,US
Caffe Vita (Pike),Seattle,WA,North America,US
Canlis (restaurant),Seattle,WA,North America,US
Garage Auto Hero,Seattle,WA,North America,US
Lighthouse,Seattle,WA,North America,US
Milstead & Co,Seattle,WA,North America,US
Neptune Coffee,Seattle,WA,North America,US
Slate,Seattle,WA,North America,US
Street Bean,Seattle,WA,North America,US
Stumptown (12th & Madison),Seattle,WA,North America,US
Victrola,Seattle,WA,North America,US
Vif,Seattle,WA,North America,US
Zig Zag (bar),Seattle,WA,North America,US
Zoka,Seattle,WA,North America,US
Caffe Mela,Wenatchee,WA,North America,US
Bradbury's,Madison,WI,North America,US
Colectivo (Humboldt),Milwaukee,WI,North America,US
Stone Creek,Milwaukee,WI,North America,US
Ruby Coffee Roasters,Nelsonville,WI,North America,US
Kickapoo Coffee,Viroqua,WI,North America,US
Mangsi Coffee,Denpasar,,Oceania,Indonesia
ABCD (A Bunch of Caffeine Dealers),Jakarta,,Oceania,Indonesia
Tanamera Coffee,Jakarta,,Oceania,Indonesia
Revolver,Kuta,,Oceania,Indonesia
Seniman Coffee Studio,Ubud,,Oceania,Indonesia
Bespecialty,Auckland,,Oceania,New Zealand
Kokako,Auckland,,Oceania,New Zealand
Customs Brew Bar,Wellington,,Oceania,New Zealand
Flight Coffee,Wellington,,Oceania,New Zealand
Roaster Boutique,La Paz,,South America,Bolivia
Lucca Cafes Especias,Curitiba,,South America,Brazil
Rause,Curitiba,,South America,Brazil
Suplicy Cafe,Sao Paolo,,South America,Brazil
Isso é Caffé,Saõ Paolo,,South America,Brazil
Coffee Lab,São Paolo,,South America,Brazil
Octavio Café,São Paolo,,South America,Brazil
Santa Grao,São Paolo,,South America,Brazil
Cafè Triciclo,Santiago,,South America,Chile
Amor Perfecto,Bogota,,South America,Colombia
Azahar Coffee,Bogota,,South America,Colombia
Cafe Pergamino,Medellin,,South America,Colombia
Arabica,Lima,,South America,Peru
Cafe Verde,Lima,,South America,Peru
The Coffee Road,Lima,,South America,Peru
El Cafe de Harry,Lima,,South America,Peru
Finca La Campina,Lima,,South America,Peru
Tostaduria Bisetti,Lima,,South America,Peru`;

// Simple coordinate mapping for major cities
const cityCoordinates = {
  'Cape Town': [-33.9249, 18.4241],
  'Durban': [-29.8587, 31.0218],
  'Johannesburg': [-26.2041, 28.0473],
  'Beijing': [39.9042, 116.4074],
  'Chengdu': [30.5728, 104.0668],
  'Dailan': [38.9140, 121.6147],
  'Guangzhou': [23.1291, 113.2644],
  'Hong Kong': [22.3193, 114.1694],
  'Nanjing': [32.0603, 118.7969],
  'Shanghai': [31.2304, 121.4737],
  'Tokyo': [35.6762, 139.6503],
  'Kyoto': [35.0116, 135.7681],
  'Seoul': [37.5665, 126.9780],
  'Taipei': [25.0330, 121.5654],
  'Bangkok': [13.7563, 100.5018],
  'Singapore': [1.3521, 103.8198],
  'Moscow': [55.7558, 37.6176],
  'Dubai': [25.2048, 55.2708],
  'Melbourne': [-37.8136, 144.9631],
  'Sydney': [-33.8688, 151.2093],
  'Brisbane': [-27.4698, 153.0251],
  'Adelaide': [-34.9285, 138.6007],
  'Perth': [-31.9505, 115.8605],
  'Auckland': [-36.8485, 174.7633],
  'Wellington': [-41.2865, 174.7762],
  'Paris': [48.8566, 2.3522],
  'London': [51.5074, -0.1278],
  'Berlin': [52.5200, 13.4050],
  'Hamburg': [53.5511, 9.9937],
  'Munich': [48.1351, 11.5820],
  'Rome': [41.9028, 12.4964],
  'Milan': [45.4642, 9.1900],
  'Amsterdam': [52.3676, 4.9041],
  'Oslo': [59.9139, 10.7522],
  'Stockholm': [59.3293, 18.0686],
  'Copenhagen': [55.6761, 12.5683],
  'Vienna': [48.2082, 16.3738],
  'Prague': [50.0755, 14.4378],
  'Warsaw': [52.2297, 21.0122],
  'Barcelona': [41.3851, 2.1734],
  'Istanbul': [41.0082, 28.9784],
  'New York': [40.7128, -74.0060],
  'Los Angeles': [34.0522, -118.2437],
  'Chicago': [41.8781, -87.6298],
  'San Francisco': [37.7749, -122.4194],
  'Seattle': [47.6062, -122.3321],
  'Toronto': [43.6532, -79.3832],
  'Vancouver': [49.2827, -123.1207],
  'Montreal': [45.5017, -73.5673],
  'Mexico City': [19.4326, -99.1332],
  'Bogota': [-4.7110, -74.0721],
  'Lima': [-12.0464, -77.0428],
  'Santiago': [-33.4489, -70.6693],
  'São Paolo': [-23.5505, -46.6333],
  'Buenos Aires': [-34.6118, -58.3960]
};

function parseShopsData() {
  const lines = newShops.trim().split('\n');
  const shops = [];
  let id = 11; // Start after existing shops
  
  lines.forEach(line => {
    const [name, city, state, continent, country] = line.split(',');
    if (name && city && country) {
      const coordinates = cityCoordinates[city] || [0, 0]; // Default to 0,0 if city not found
      
      shops.push({
        id: id++,
        name: name.trim(),
        city: city.trim(),
        country: country.trim(),
        coordinates,
        notes: "",
        qualityIndicators: {
          singleOrigin: true,
          latteArt: true,
          noFlavoredSyrups: true,
          thirdWave: true
        },
        rating: 4
      });
    }
  });
  
  return shops;
}

export const newCoffeeShops = parseShopsData();