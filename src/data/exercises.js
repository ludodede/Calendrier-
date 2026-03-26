export const exercises = {
  homophones: {
    id: "homophones",
    title: "Homophones",
    icon: "🔤",
    color: "#58CC02",
    description: "a/à, et/est, ou/où, ce/se...",
    questions: [
      {
        id: "h1",
        type: "qcm",
        question: "Il ___ mangé une pomme.",
        options: ["a", "à", "as", "ah"],
        correct: 0,
        explanation: "« a » sans accent est le verbe avoir conjugué au présent (3e personne). Astuce : on peut le remplacer par « avait ». « à » avec accent est une préposition."
      },
      {
        id: "h2",
        type: "qcm",
        question: "Je vais ___ la boulangerie.",
        options: ["a", "à", "as"],
        correct: 1,
        explanation: "« à » avec accent est une préposition qui indique le lieu. On ne peut pas le remplacer par « avait », donc ce n'est pas le verbe avoir."
      },
      {
        id: "h3",
        type: "qcm",
        question: "Mon frère ___ fatigué aujourd'hui.",
        options: ["et", "est", "es", "ai"],
        correct: 1,
        explanation: "« est » est le verbe être conjugué au présent (3e personne). Astuce : on peut le remplacer par « était ». « et » est une conjonction de coordination (équivalent de « and »)."
      },
      {
        id: "h4",
        type: "qcm",
        question: "Je veux du pain ___ du beurre.",
        options: ["et", "est", "es"],
        correct: 0,
        explanation: "« et » est une conjonction de coordination qui relie deux éléments. Astuce : on peut le remplacer par « et aussi » ou « et puis ». On ne peut pas dire « était du beurre »."
      },
      {
        id: "h5",
        type: "qcm",
        question: "Tu veux du thé ___ du café ?",
        options: ["ou", "où"],
        correct: 0,
        explanation: "« ou » sans accent exprime un choix, une alternative. Astuce : on peut le remplacer par « ou bien ». « où » avec accent indique un lieu ou un moment."
      },
      {
        id: "h6",
        type: "qcm",
        question: "La ville ___ je suis né est petite.",
        options: ["ou", "où"],
        correct: 1,
        explanation: "« où » avec accent indique un lieu (pronom relatif). Astuce : il répond à la question « à quel endroit ? ». On ne peut pas le remplacer par « ou bien »."
      },
      {
        id: "h7",
        type: "qcm",
        question: "___ matin, il fait froid.",
        options: ["Ce", "Se"],
        correct: 0,
        explanation: "« Ce » est un déterminant démonstratif qui accompagne un nom (ce matin, ce livre). « Se » est un pronom réfléchi qui accompagne un verbe (se laver, se lever)."
      },
      {
        id: "h8",
        type: "qcm",
        question: "Elle ___ regarde dans le miroir.",
        options: ["ce", "se"],
        correct: 1,
        explanation: "« se » est un pronom réfléchi (elle se regarde = elle regarde elle-même). Astuce : à l'infinitif, on dirait « se regarder ». « ce » accompagne toujours un nom."
      },
      {
        id: "h9",
        type: "qcm",
        question: "Ils ___ partis hier soir.",
        options: ["son", "sont"],
        correct: 1,
        explanation: "« sont » est le verbe être au présent (3e personne du pluriel). Astuce : on peut le remplacer par « étaient ». « son » est un déterminant possessif (son livre)."
      },
      {
        id: "h10",
        type: "qcm",
        question: "Il a oublié ___ sac à l'école.",
        options: ["son", "sont"],
        correct: 0,
        explanation: "« son » est un déterminant possessif (= le sien). Astuce : on peut le remplacer par « mon » ou « ton ». « sont » est le verbe être conjugué."
      },
      {
        id: "h11",
        type: "qcm",
        question: "Les enfants ___ joué dans le parc.",
        options: ["on", "ont"],
        correct: 1,
        explanation: "« ont » est le verbe avoir au présent (3e personne du pluriel). Astuce : on peut le remplacer par « avaient ». « on » est un pronom indéfini (= quelqu'un, nous)."
      },
      {
        id: "h12",
        type: "qcm",
        question: "___ dit que l'hiver sera rude.",
        options: ["On", "Ont"],
        correct: 0,
        explanation: "« On » est un pronom personnel indéfini sujet (3e personne du singulier). Astuce : on peut le remplacer par « il » ou « quelqu'un ». « Ont » est le verbe avoir conjugué."
      },
      {
        id: "h13",
        type: "qcm",
        question: "___ une belle journée !",
        options: ["Ces", "Ses", "C'est", "S'est"],
        correct: 2,
        explanation: "« C'est » = cela est. Il introduit une affirmation ou une présentation. « S'est » accompagne un verbe pronominal (il s'est levé). « Ces » et « ses » sont des déterminants pluriels."
      },
      {
        id: "h14",
        type: "qcm",
        question: "Il faut ___ donner du temps.",
        options: ["leur", "leurs"],
        correct: 0,
        explanation: "« leur » sans -s est un pronom personnel complément (= à eux). Astuce : il est placé devant un verbe. « leurs » avec -s est un déterminant possessif pluriel (leurs enfants)."
      },
      {
        id: "h15",
        type: "qcm",
        question: "___ chaussures sont dans l'entrée.",
        options: ["Leur", "Leurs"],
        correct: 1,
        explanation: "« Leurs » avec -s est un déterminant possessif qui s'accorde au pluriel car « chaussures » est pluriel. Astuce : « leur(s) » devant un nom = possessif, on accorde avec le nom."
      }
    ]
  },

  conjugaison: {
    id: "conjugaison",
    title: "Conjugaison",
    icon: "📝",
    color: "#1CB0F6",
    description: "Présent, passé, futur...",
    questions: [
      {
        id: "c1",
        type: "qcm",
        question: "Nous ___ au cinéma ce soir. (aller, présent)",
        options: ["allons", "alons", "allont", "allions"],
        correct: 0,
        explanation: "« Aller » au présent avec « nous » donne « allons ». C'est un verbe du 3e groupe irrégulier. Attention : « allions » est l'imparfait."
      },
      {
        id: "c2",
        type: "qcm",
        question: "Tu ___ tes devoirs tous les soirs. (faire, présent)",
        options: ["fait", "fais", "fais", "fes"],
        correct: 1,
        explanation: "« Faire » au présent : je fais, tu fais, il fait. Avec « tu », la terminaison est -s. Astuce : au présent, « tu » prend presque toujours un -s."
      },
      {
        id: "c3",
        type: "qcm",
        question: "Ils ___ la vérité depuis longtemps. (savoir, présent)",
        options: ["savent", "savent", "savons", "saves"],
        correct: 0,
        explanation: "« Savoir » au présent avec « ils » donne « savent ». Conjugaison : je sais, tu sais, il sait, nous savons, vous savez, ils savent."
      },
      {
        id: "c4",
        type: "qcm",
        question: "Quand j'étais petit, je ___ au football. (jouer, imparfait)",
        options: ["joue", "jouais", "joué", "jouai"],
        correct: 1,
        explanation: "L'imparfait exprime une habitude dans le passé. Avec « je », la terminaison est -ais. Astuce : les terminaisons de l'imparfait sont toujours -ais, -ais, -ait, -ions, -iez, -aient."
      },
      {
        id: "c5",
        type: "qcm",
        question: "Elle ___ pendant que je lisais. (dormir, imparfait)",
        options: ["dormais", "dormait", "dormai", "dormit"],
        correct: 1,
        explanation: "Avec « elle » (3e personne du singulier), l'imparfait se termine en -ait. « dormais » serait pour « je » ou « tu ». « dormit » est le passé simple."
      },
      {
        id: "c6",
        type: "qcm",
        question: "Hier, nous ___ un bon film. (voir, passé composé)",
        options: ["avons vu", "avons voir", "avons voyé", "sommes vus"],
        correct: 0,
        explanation: "Le passé composé de « voir » se forme avec l'auxiliaire avoir + le participe passé « vu ». « Voir » est irrégulier : son participe passé est « vu », pas « voyé »."
      },
      {
        id: "c7",
        type: "qcm",
        question: "Elles ___ à Paris l'année dernière. (aller, passé composé)",
        options: ["ont allé", "sont allées", "sont allés", "ont allées"],
        correct: 1,
        explanation: "« Aller » se conjugue avec l'auxiliaire être au passé composé. Avec être, le participe passé s'accorde avec le sujet : « elles » = féminin pluriel = « allées »."
      },
      {
        id: "c8",
        type: "qcm",
        question: "Demain, je ___ te voir. (venir, futur simple)",
        options: ["viendrai", "venirai", "venirais", "viendras"],
        correct: 0,
        explanation: "Le futur de « venir » est irrégulier : je viendrai, tu viendras, il viendra... Attention : « venirais » serait le conditionnel. Astuce : le radical du futur de venir est « viendr- »."
      },
      {
        id: "c9",
        type: "qcm",
        question: "Vous ___ ce livre avant vendredi. (finir, futur simple)",
        options: ["finirai", "finirez", "finissez", "finiriez"],
        correct: 1,
        explanation: "Le futur de « finir » avec « vous » : finirez. Les verbes du 2e groupe forment le futur sur l'infinitif + terminaisons (-ai, -as, -a, -ons, -ez, -ont)."
      },
      {
        id: "c10",
        type: "qcm",
        question: "Il faut que tu ___ à l'heure. (être, subjonctif présent)",
        options: ["es", "sois", "soit", "soies"],
        correct: 1,
        explanation: "Après « il faut que », on utilise le subjonctif. « Être » au subjonctif : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient."
      },
      {
        id: "c11",
        type: "qcm",
        question: "Je ne pense pas qu'il ___ raison. (avoir, subjonctif présent)",
        options: ["a", "aie", "ait", "est"],
        correct: 2,
        explanation: "Après « je ne pense pas que », on utilise le subjonctif. « Avoir » au subjonctif avec « il » : qu'il ait. Astuce : « aie » est pour « je » ou « tu » au subjonctif."
      },
      {
        id: "c12",
        type: "qcm",
        question: "Si j'avais le temps, je ___ un gâteau. (faire, conditionnel présent)",
        options: ["fais", "ferai", "ferais", "faisais"],
        correct: 2,
        explanation: "Après « si + imparfait », on utilise le conditionnel présent dans la principale. « Faire » au conditionnel : je ferais. Astuce : le conditionnel = radical du futur + terminaisons de l'imparfait."
      },
      {
        id: "c13",
        type: "qcm",
        question: "Les enfants ___ dans la cour. (courir, présent)",
        options: ["courent", "courre", "courrent", "cours"],
        correct: 0,
        explanation: "« Courir » au présent avec « ils » : courent. Attention : un seul -r au présent ! Les deux -r apparaissent au futur (je courrai) et au conditionnel (je courrais)."
      },
      {
        id: "c14",
        type: "qcm",
        question: "Il ___ beaucoup voyagé dans sa jeunesse. (avoir, plus-que-parfait)",
        options: ["a", "avait", "eut", "aura"],
        correct: 1,
        explanation: "Le plus-que-parfait se forme avec l'auxiliaire à l'imparfait + participe passé. « Avoir » à l'imparfait avec « il » = avait. Le plus-que-parfait exprime une action antérieure à une autre action passée."
      }
    ]
  },

  accords: {
    id: "accords",
    title: "Accords",
    icon: "🎯",
    color: "#FF9600",
    description: "Pluriel, féminin, participes...",
    questions: [
      {
        id: "a1",
        type: "qcm",
        question: "Les pommes que j'ai ___ étaient délicieuses.",
        options: ["mangé", "mangée", "mangés", "mangées"],
        correct: 3,
        explanation: "Avec l'auxiliaire avoir, le participe passé s'accorde avec le COD s'il est placé avant le verbe. Ici le COD « les pommes » (féminin pluriel) est avant = mangées."
      },
      {
        id: "a2",
        type: "qcm",
        question: "Elle s'est ___ les mains.",
        options: ["lavé", "lavée", "lavés", "lavées"],
        correct: 0,
        explanation: "Avec un verbe pronominal, si le COD est après le verbe (ici « les mains »), le participe passé ne s'accorde pas. Elle a lavé quoi ? Les mains (COD après) = pas d'accord."
      },
      {
        id: "a3",
        type: "qcm",
        question: "Elles se sont ___ dans le miroir.",
        options: ["regardé", "regardée", "regardés", "regardées"],
        correct: 3,
        explanation: "Elles ont regardé qui ? « se » = elles-mêmes (COD placé avant). Avec un verbe pronominal réfléchi, le participe s'accorde avec le COD « se » qui représente « elles » = féminin pluriel."
      },
      {
        id: "a4",
        type: "qcm",
        question: "Ces fleurs sont très ___.",
        options: ["beau", "beaux", "belle", "belles"],
        correct: 3,
        explanation: "L'adjectif s'accorde en genre et en nombre avec le nom qu'il qualifie. « Fleurs » est féminin pluriel, donc « belles ». Attention : beau/belle est un adjectif irrégulier."
      },
      {
        id: "a5",
        type: "qcm",
        question: "Des robes bleu ___.",
        options: ["clair", "clairs", "claire", "claires"],
        correct: 0,
        explanation: "Quand un adjectif de couleur est suivi d'un autre adjectif qui le nuance (bleu clair, vert foncé), les deux restent invariables. Donc « bleu clair » ne prend ni féminin ni pluriel."
      },
      {
        id: "a6",
        type: "qcm",
        question: "Ils ont l'air ___.",
        options: ["content", "contents", "contente", "contentes"],
        correct: 1,
        explanation: "Avec « avoir l'air », l'adjectif s'accorde avec le sujet quand le sens est « sembler, paraître ». « Ils » = masculin pluriel, donc « contents »."
      },
      {
        id: "a7",
        type: "qcm",
        question: "Les ___ sont fermés le dimanche.",
        options: ["hôpitaux", "hôpitals", "hopitaux", "hopitals"],
        correct: 0,
        explanation: "Les noms en -al font généralement leur pluriel en -aux : un hôpital, des hôpitaux. Attention à l'accent circonflexe sur le « o » de hôpital. Exceptions : des bals, des festivals, des carnavals."
      },
      {
        id: "a8",
        type: "qcm",
        question: "J'ai acheté des ___ pour la soupe.",
        options: ["choux", "chous", "choues", "chous"],
        correct: 0,
        explanation: "Les noms en -ou prennent un -s au pluriel, sauf 7 exceptions qui prennent -x : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux."
      },
      {
        id: "a9",
        type: "qcm",
        question: "Ma voisine est très ___.",
        options: ["gentil", "gentille", "gentile", "gentil"],
        correct: 1,
        explanation: "Le féminin de « gentil » est « gentille » avec deux -l. C'est une forme irrégulière. Astuce : comme « pareil/pareille », on double le -l au féminin."
      },
      {
        id: "a10",
        type: "qcm",
        question: "La lettre que j'ai ___ est importante.",
        options: ["écrit", "écrite", "écrits", "écrites"],
        correct: 1,
        explanation: "Avec l'auxiliaire avoir, le participe passé s'accorde avec le COD placé avant. « La lettre » (féminin singulier) est le COD placé avant le verbe = « écrite »."
      },
      {
        id: "a11",
        type: "qcm",
        question: "Marie et Sophie sont ___ ce matin.",
        options: ["arrivé", "arrivée", "arrivés", "arrivées"],
        correct: 3,
        explanation: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet. « Marie et Sophie » = deux personnes féminines = féminin pluriel = « arrivées »."
      },
      {
        id: "a12",
        type: "qcm",
        question: "Pierre et Marie sont ___ au parc.",
        options: ["allé", "allée", "allés", "allées"],
        correct: 2,
        explanation: "Avec l'auxiliaire être, le participe s'accorde avec le sujet. « Pierre et Marie » = masculin + féminin = masculin pluriel (le masculin l'emporte en grammaire) = « allés »."
      },
      {
        id: "a13",
        type: "qcm",
        question: "Des chemises ___.",
        options: ["orange", "oranges"],
        correct: 0,
        explanation: "Les adjectifs de couleur dérivés d'un nom (orange, marron, crème, turquoise...) sont invariables. On dit « des chemises orange » car orange vient du fruit. Exceptions : rose, mauve, écarlate, fauve, pourpre s'accordent."
      },
      {
        id: "a14",
        type: "qcm",
        question: "Ci-___ les documents demandés.",
        options: ["joint", "joints", "jointe", "jointes"],
        correct: 1,
        explanation: "« Ci-joint » placé après le nom s'accorde avec celui-ci. « Les documents » est masculin pluriel, donc « ci-joints ». Astuce : « ci-joint » est invariable en début de phrase ou devant un nom sans déterminant."
      }
    ]
  },

  orthographe: {
    id: "orthographe",
    title: "Orthographe",
    icon: "✍️",
    color: "#CE82FF",
    description: "Mots courants, doubles lettres...",
    questions: [
      {
        id: "o1",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["aparemment", "apparemment", "apparament", "aparamment"],
        correct: 1,
        explanation: "« Apparemment » prend deux -p et se termine par -emment. Astuce : les adverbes formés sur un adjectif en -ent prennent -emment (évident → évidemment, apparent → apparemment)."
      },
      {
        id: "o2",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["apercevoir", "appercevoir", "apparcevoir", "apperçevoir"],
        correct: 0,
        explanation: "« Apercevoir » ne prend qu'un seul -p. C'est un piège classique ! Astuce : contrairement à « apparaître » ou « appeler » qui doublent le -p, apercevoir n'en a qu'un."
      },
      {
        id: "o3",
        type: "qcm",
        question: "Il y a ___ de monde dans la rue.",
        options: ["beaucoup", "beaucoups", "beaucou", "baucoup"],
        correct: 0,
        explanation: "« Beaucoup » est invariable et se termine par -p muet. Il ne prend jamais de -s, même au sens pluriel. Astuce : le -p final est muet, comme dans « coup » et « trop »."
      },
      {
        id: "o4",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["déveloper", "développer", "developper", "devellopper"],
        correct: 1,
        explanation: "« Développer » prend deux -p et un accent aigu sur le premier -e. Astuce : pensez à « envelopper » qui double aussi le -p. La famille du mot garde le double -p (développement)."
      },
      {
        id: "o5",
        type: "qcm",
        question: "C'est mon émission ___.",
        options: ["préferrée", "préférée", "préfèrée", "preferée"],
        correct: 1,
        explanation: "« Préférée » prend des accents aigus sur les deux premiers -e. Attention : ne pas doubler le -r (ce n'est pas comme « concurrence »). Le féminin ajoute -ée."
      },
      {
        id: "o6",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["maintenent", "maintenant", "maintnant", "mentenant"],
        correct: 1,
        explanation: "« Maintenant » s'écrit avec -aint- puis -enant. Astuce mnémotechnique : « main-tenant » = qui tient dans la main (le moment présent)."
      },
      {
        id: "o7",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["envirronement", "environement", "environnement", "environement"],
        correct: 2,
        explanation: "« Environnement » prend deux -n au milieu. Astuce : pensez à « environner » (entourer), qui prend aussi deux -n."
      },
      {
        id: "o8",
        type: "qcm",
        question: "Nous avons eu une ___ discussion.",
        options: ["longue", "longe", "longhe"],
        correct: 0,
        explanation: "Le féminin de « long » est « longue » avec -gue. C'est une forme particulière pour garder le son [g]. Même logique pour : public → publique."
      },
      {
        id: "o9",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["language", "langage", "langaje", "langague"],
        correct: 1,
        explanation: "« Langage » s'écrit sans -u après le -g. Attention : ne pas confondre avec l'anglais « language ». En français, le -g devant -a se prononce déjà [g], pas besoin de -u."
      },
      {
        id: "o10",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["address", "adresse", "addresse", "adrèsse"],
        correct: 1,
        explanation: "« Adresse » prend un seul -d et deux -s. Attention : ne pas confondre avec l'anglais « address » qui double le -d. En français : un -d, deux -s."
      },
      {
        id: "o11",
        type: "qcm",
        question: "Le film était vraiment ___.",
        options: ["interressant", "intéressant", "interessant", "intérressant"],
        correct: 1,
        explanation: "« Intéressant » prend un accent aigu sur le premier -e et un seul -r. Erreur fréquente : doubler le -r. Toute la famille du mot garde cette orthographe (intérêt, intéresser)."
      },
      {
        id: "o12",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["malheureusement", "malheurseument", "malheuresement", "malhereusement"],
        correct: 0,
        explanation: "« Malheureusement » est formé de malheureux + -ment. Les adverbes formés sur un adjectif en -eux changent en -eusement (heureux → heureusement, malheureux → malheureusement)."
      },
      {
        id: "o13",
        type: "qcm",
        question: "Il a fait une erreur de ___.",
        options: ["grammaire", "grammere", "gramaire", "grammaire"],
        correct: 0,
        explanation: "« Grammaire » prend deux -m et se termine par -aire. Astuce : pensez à la famille du mot (grammatical, grammairien) qui garde le double -m."
      },
      {
        id: "o14",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["nécéssaire", "nécessaire", "necessaire", "nécèssaire"],
        correct: 1,
        explanation: "« Nécessaire » prend un accent aigu sur le premier -e, un -c simple et deux -s. Astuce : un -c, deux -s, -aire à la fin. La famille du mot suit la même logique (nécessité, nécessiter)."
      },
      {
        id: "o15",
        type: "qcm",
        question: "Quelle est la bonne orthographe ?",
        options: ["différament", "différemment", "différament", "differemment"],
        correct: 1,
        explanation: "« Différemment » prend -emment car il vient de l'adjectif « différent » (en -ent). Règle : adjectif en -ent → adverbe en -emment ; adjectif en -ant → adverbe en -amment."
      }
    ]
  }
};
