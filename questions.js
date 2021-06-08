const questions = [
  {
    "question": "Predstavljajte si naslednje potovanje. Stopili ste ob vznožje piramide Preporoda. Obhodili jo boste v krogu in opazovali njene štiri ploskve. Med potovanjem boste odgovorili na 12 vprašanj, po 3 za vsako stranico piramide. Pri vsakem vprašanju vam bo piramida ponudila 4 odgovore. Na podlagi vaših odgovorov bo globoki um piramide spoznal vaše bistvo in vas usmeril na pravilno izmed dveh poti do freštreš: Preporoda. Razumeš?",
    "answer1": "Rojen sem bil za to",
    "answer1Total": "1",
    "answer2": "Ne razumem",
    "answer2Total": "2",
    "answer3": "Nikoli nisem pripravljen na nič",
    "answer3Total": "3",
    "answer4": "Strah me je",
    "answer4Total": "4"
  },
  {
    "question": "Začeli ste hoditi. Prva ploskev piramide utripa v živih in mesenih barvah. Na njej so nekako upodobljene entitete iz vaše okolice, le groteskno spačene, kot svetlobni spomin, projiciran na vaši veki, ko zaprete oči. Kaj vidite, ko zaprete oči?",
    "answer1": "Nedoločno množico, ki drsi skozi tunel",
    "answer1Total": "1",
    "answer2": "Zlobna bitja, ki vas usmerjajo z nevro-krmili",
    "answer2Total": "2",
    "answer3": "Sebe v drugih, nemočne, prezrcaljene",
    "answer3Total": "3",
    "answer4": "Dno brez dna, nastalo zaradi norih eksperimentov",
    "answer4Total": "4"
  },
  {
    "question":
      "Napnete oči in na ploskvi prepoznate drobne razpoke. Če jih pogledate skozi brušeno steklo, se zdi, kot da se zbirajo v krožne vzorce, če jih pogledate skozi temno steklo, pa tvorijo koordinatni sistem. Katero od teh oblik reda imate najraje?",
    "answer1": "Vzporedne rešetke žara",
    "answer1Total": "1",
    "answer2": "Pravokotne osi koles",
    "answer2Total": "3",
    "answer3": "Elipsaste parabole meteorjev",
    "answer3Total": "2",
    "answer4": "Krivulje prstnih blazinic",
    "answer4Total": "4"
  },
  {
    "question": "Sistem, ki ste ga zaslutili, je gotovo prisoten, ampak ne morete ga jasno razbrati. Piramida gotovo ni zgrajena iz tridimenzionalnih blokov, temveč si je graditelj pomagal z višjimi dimenzijami. Katera dimenzija se vam zdi najbolj uporabna pri gradnji piramide?",
    "answer1": "Prva dimenzija",
    "answer1Total": "3",
    "answer2": "Absurdna dimenzija",
    "answer2Total": "2",
    "answer3": "Parlamentarna dimenzija",
    "answer3Total": "1",
    "answer4": "Najduhovitejša dimenzija",
    "answer4Total": "4"
  },
  {
    "question": "Prispeli ste do prvega kota in se obrnili za 90 stopinj. Naslednja ploskev piramide je bolj senčna in brezoblična, ampak vzbuja manj močna čustva. Srčni utrip vam pojenja. Čeprav je to fizično nemogoče, se zdi, da je ploskev piramide vbočena in lahko hodite skoznjo. Kako ravnate, ko naletite na nepravilnosti v prostoru?",
    "answer1": "Izogibam se pastem",
    "answer1Total": "1",
    "answer2": "Plazim proti simbolni maternici",
    "answer2Total": "2",
    "answer3": "Ne verjamem optičnim iluzijam",
    "answer3Total": "3",
    "answer4": "Poskusim plezati po plazmatskih kapnikih",
    "answer4Total": "4"
  },
  {
    "question": "Piramida se upogne vase že do te mere, da postane črna luknja. Iztezate se proti jedru črne luknje – to je v fiziki t.i. proces “špagetifikacije”, tanjšanja in raztezanja prostorskih teles. Katera testeninska jed bi bili najraje?",
    "answer1": "Farfalle z ribjo omako",
    "answer1Total": "1",
    "answer2": "Linguini di Mama",
    "answer2Total": "2",
    "answer3": "Okusni riževi rezanci",
    "answer3Total": "3",
    "answer4": "Neskončne ploskve za lazanjo (zmanjkalo)",
    "answer4Total": "4"
  },
  {
    "question": "Pretočili ste se skozi črno luknjo. Na drugi strani so se atomi vašega snovnega telesa sestavili v nove, nepredstavljive oblike. Pred vami spet stoji piramida, le da je prezrcaljena skozi točko, ki jo lahko v tridimenzionalnem koordinatnem sistemu definiramo kot (0,0,0). Če lahko položaj točke A v piramidi α opišemo kot (2,4,9), opišite položaj točke A' v piramidi α'!",
    "answer1": "(4,6,2)",
    "answer1Total": "1",
    "answer2": "(0,1,9)",
    "answer2Total": "2",
    "answer3": "(8,7,23)",
    "answer3Total": "3",
    "answer4": "Nič od navedenega",
    "answer4Total": "4"
  },
  {
    "question": "Naslednja ploskev vas popolnoma osupne. Pulzirajoča ekstaza, ki emanira s te ploskve, nima čutnozaznavnih lastnosti, ki jih je moč opisati, razen, morda, drhteče basovske intenzivnosti, ki prodira v kosti. ",
    "answer1": "Preglasite vesolje",
    "answer1Total": "1",
    "answer2": "Zamašite si ušesa z mehko, naravno vatico",
    "answer2Total": "2",
    "answer3": "V tem raju hočete biti za vedno",
    "answer3Total": "3",
    "answer4": "Kuriozni fenomen zbudi vaše zanimanje",
    "answer4Total": "4"
  }, 
  {
    "question": "Tedaj se vam ta glasbena uganka razjasni – vibracije prihajajo z vrha piramide, kjer za mešalnim pultom, visokim petdeset kubitov, širokim 30 kubitov in dolgim 9 kubitov, stoji DJ s stotimi očmi, ki se zdijo kot delfinove, in vsako oko ima šeststo šestnajst prstov, samih palcev in kazalcev, ki sučejo zagrizeno glasbo. Kako najlaže dosežete, da DJ upošteva vašo glasbeno željo?",
    "answer1": "Izrazito odobravate njegove glasbene odločitve",
    "answer1Total": "1",
    "answer2": "Motite ga z nerodnimi komplimenti",
    "answer2Total": "2",
    "answer3": "Na negativen način pritegnite pozornost (politje pijače)",
    "answer3Total": "3",
    "answer4": "Vdrete v njegov računalnik",
    "answer4Total": "4"
  },  
  {
    "question": "DJ sprejema samo glasbene želje s področja »Zvoki narave«. Katera podzvrst žanra »Zvoki narave« vam je najbliže?",
    "answer1": "Zvoki plime in nasedlih kitov",
    "answer1Total": "1",
    "answer2": "Zvoki škripanja puščave med zobmi",
    "answer2Total": "2",
    "answer3": "Zvoki požara v gozdu sekvoj",
    "answer3Total": "3",
    "answer4": "Zvoki vetrnih elektrarn",
    "answer4Total": "4"
  },    
  {
    "question": "Za vami je dolga pot. V mislih imate počitek, ampak zadnja ploskev piramide je najbolj silovita od vseh. Ugotovite, da vsaka ploskev piramide deloma spominja na prejšnjo, deloma pa na naslednjo. Po tejle očitno nenehno polzi magma in se dogajajo nezaslišane stvari. Kateri od naštetih športov vas najbolj privlači?",
    "answer1": "Magmomet",
    "answer1Total": "1",
    "answer2": "Srfanje po magmi",
    "answer2Total": "2",
    "answer3": "5D Magma šah",
    "answer3Total": "3",
    "answer4": "Plavanje v magmi (uporaba tobogana za doplačilo)",
    "answer4Total": "4"
  }, 
  {
    "question": "Magma je bila očitno le nekakšen represiven ukrep, značilen za dimenzijo, v kateri obstaja Četrta ploskev piramide. Na vratih vašega hotela je z nožem pribit list gverilskih borcev za svobodo, ki nasprotujejo komercializaciji te stranice. Kako se odzivate na prepovedi?",
    "answer1": "Nadaljujem z zabavo (magma me varuje)",
    "answer1Total": "1",
    "answer2": "Pridružim se revoluciji (magma me podžiga)",
    "answer2Total": "2",
    "answer3": "Počutim se močnejšega v ožjih okvirjih (magma me uči)",
    "answer3Total": "3",
    "answer4": "V vsem najdem pozitivno plat (magma je v resnici karamela)",
    "answer4Total": "4"
  }, 
  {
    "question": "Med brezskrbno športno zabavo na magmatskih poljih Četrte stranice se vam je pod pazduho prisesal parazit. Kateri od teh je po vašem mnenju najboljši način za odstranitev parazita?",
    "answer1": "Odščipnemo ga z razbeljenimi kleščami",
    "answer1Total": "1",
    "answer2": "Potopimo se za 1 dan v 70% rum",
    "answer2Total": "2",
    "answer3": "Izpostavimo ga gama sevanju",
    "answer3Total": "3",
    "answer4": "Počasi se vzvratno vrnemo v smeri prihoda",
    "answer4Total": "4"
  }            
]
