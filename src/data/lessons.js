export const lessons = {
  homophones: {
    title: "Les homophones grammaticaux",
    icon: "🔤",
    color: "#58CC02",
    intro: "Les homophones sont des mots qui se prononcent pareil mais s'écrivent différemment.",
    sections: [
      {
        title: "a / à",
        rule: "« a » sans accent = verbe avoir (3e personne du singulier). « à » avec accent = préposition.",
        tip: "💡 Remplacez par « avait » : si la phrase fonctionne, écrivez « a » sans accent.",
        examples: [
          { sentence: "Il **a** un chien.", note: "→ Il avait un chien ✅ = verbe avoir" },
          { sentence: "Je vais **à** Paris.", note: "→ Je vais avait Paris ❌ = préposition, donc à" }
        ],
        mistakes: ["Il à un chien. ❌", "Je vais a Paris. ❌"]
      },
      {
        title: "et / est",
        rule: "« est » = verbe être (il est). « et » = conjonction qui relie deux éléments (pain et beurre).",
        tip: "💡 Remplacez par « était » : si ça marche, c'est « est ». Sinon, c'est « et ».",
        examples: [
          { sentence: "Mon frère **est** grand.", note: "→ Mon frère était grand ✅ = verbe être" },
          { sentence: "Du pain **et** du beurre.", note: "→ Du pain était du beurre ❌ = conjonction" }
        ],
        mistakes: ["Mon frère et grand. ❌", "Du pain est du beurre. ❌"]
      },
      {
        title: "ou / où",
        rule: "« ou » sans accent = choix entre deux options. « où » avec accent = lieu ou moment.",
        tip: "💡 Remplacez par « ou bien » : si ça marche, pas d'accent.",
        examples: [
          { sentence: "Thé **ou** café ?", note: "→ Thé ou bien café ? ✅ = choix" },
          { sentence: "La ville **où** je suis né.", note: "→ La ville ou bien je suis né ❌ = lieu" }
        ],
        mistakes: ["Thé où café ? ❌", "La ville ou je suis né. ❌"]
      },
      {
        title: "ce / se",
        rule: "« ce » = déterminant devant un nom (ce livre). « se » = pronom réfléchi devant un verbe (se laver).",
        tip: "💡 Si le mot est devant un verbe pronominal, c'est « se ». Devant un nom, c'est « ce ».",
        examples: [
          { sentence: "**Ce** matin, il fait beau.", note: "→ Devant un nom = ce" },
          { sentence: "Elle **se** regarde.", note: "→ Devant un verbe pronominal = se" }
        ],
        mistakes: ["Se matin, il fait beau. ❌", "Elle ce regarde. ❌"]
      },
      {
        title: "son / sont",
        rule: "« son » = possessif (son livre = le sien). « sont » = verbe être au pluriel (ils sont).",
        tip: "💡 Remplacez par « étaient » : si ça marche, c'est « sont ».",
        examples: [
          { sentence: "Ils **sont** partis.", note: "→ Ils étaient partis ✅ = verbe être" },
          { sentence: "Il a oublié **son** sac.", note: "→ Il a oublié étaient sac ❌ = possessif" }
        ],
        mistakes: ["Ils son partis. ❌", "Il a oublié sont sac. ❌"]
      },
      {
        title: "on / ont",
        rule: "« on » = pronom sujet (on = quelqu'un/nous). « ont » = verbe avoir au pluriel (ils ont).",
        tip: "💡 Remplacez par « avaient » : si ça marche, c'est « ont ».",
        examples: [
          { sentence: "Les enfants **ont** joué.", note: "→ Les enfants avaient joué ✅ = verbe avoir" },
          { sentence: "**On** dit que...", note: "→ Avaient dit que... ❌ = pronom on" }
        ],
        mistakes: ["Les enfants on joué. ❌", "Ont dit que... ❌"]
      }
    ]
  },
  conjugaison: {
    title: "La conjugaison française",
    icon: "📝",
    color: "#1CB0F6",
    intro: "Maîtriser la conjugaison, c'est savoir accorder le verbe avec son sujet à chaque temps.",
    sections: [
      {
        title: "Le présent de l'indicatif",
        rule: "1er groupe (-er) : -e, -es, -e, -ons, -ez, -ent. 2e groupe (-ir) : -is, -is, -it, -issons, -issez, -issent. 3e groupe : irréguliers.",
        tip: "💡 Avec « tu », il y a presque toujours un -s. Avec « nous », toujours -ons. Avec « vous », toujours -ez (sauf être, dire, faire).",
        examples: [
          { sentence: "Je **parle**, tu **parles**, il **parle**", note: "1er groupe : radical + terminaisons" },
          { sentence: "Je **finis**, tu **finis**, il **finit**", note: "2e groupe : radical + -iss + terminaisons" },
          { sentence: "Je **vais**, tu **vas**, il **va**", note: "3e groupe : verbe irrégulier" }
        ],
        mistakes: ["Je parles ❌ (pas de -s avec je)", "Ils mangent ❌ → Ils mange ❌ (le -ent est muet mais obligatoire)"]
      },
      {
        title: "L'imparfait",
        rule: "Radical du présent (nous) + -ais, -ais, -ait, -ions, -iez, -aient. Toujours régulier !",
        tip: "💡 L'imparfait est le temps le plus régulier : prenez le radical de « nous » au présent et ajoutez les terminaisons. Aucune exception !",
        examples: [
          { sentence: "Je **parlais**, tu **parlais**, il **parlait**", note: "Nous parlons → parl- + ais" },
          { sentence: "Nous **finissions**, vous **finissiez**", note: "Nous finissons → finiss- + ions" }
        ],
        mistakes: ["Je mangeait ❌ → je mangeais ✅ (avec je/tu = -ais)"]
      },
      {
        title: "Le passé composé",
        rule: "Auxiliaire (avoir ou être) au présent + participe passé. Avec être, le PP s'accorde avec le sujet.",
        tip: "💡 14 verbes utilisent être : Dr & Mrs Vandertramp (Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Retourner, Tomber, Rentrer, Arriver, Mourir, Partir) + tous les verbes pronominaux.",
        examples: [
          { sentence: "J'**ai mangé** une pomme.", note: "Avoir + mangé (pas d'accord)" },
          { sentence: "Elle **est partie** tôt.", note: "Être + partie (accord féminin singulier)" }
        ],
        mistakes: ["Elle est parti ❌ → elle est partie ✅", "J'ai manger ❌ → j'ai mangé ✅"]
      },
      {
        title: "Le futur simple",
        rule: "Infinitif + -ai, -as, -a, -ons, -ez, -ont. Verbes irréguliers : radical spécial + mêmes terminaisons.",
        tip: "💡 Le futur se construit sur l'infinitif entier. On entend toujours le -r : je parlerai, je finirai, je prendrai.",
        examples: [
          { sentence: "Je **parlerai**, tu **parleras**", note: "Infinitif parler + -ai, -as" },
          { sentence: "Je **viendrai**, tu **viendras**", note: "Venir → viendr- (radical irrégulier)" }
        ],
        mistakes: ["Je viendrai ✅ ≠ je venirai ❌", "Je ferais ❌ (conditionnel) ≠ je ferai ✅ (futur)"]
      }
    ]
  },
  accords: {
    title: "Les règles d'accord",
    icon: "🎯",
    color: "#FF9600",
    intro: "En français, les mots s'accordent entre eux en genre (masculin/féminin) et en nombre (singulier/pluriel).",
    sections: [
      {
        title: "L'accord de l'adjectif",
        rule: "L'adjectif s'accorde en genre et en nombre avec le nom qu'il qualifie. Féminin : souvent +e. Pluriel : souvent +s.",
        tip: "💡 Si le nom est féminin pluriel, l'adjectif prend -es. Si masculin + féminin ensemble, le masculin l'emporte.",
        examples: [
          { sentence: "Une **grande** maison / Des **grandes** maisons", note: "Féminin sing. → fém. pluriel" },
          { sentence: "Pierre et Marie sont **contents**.", note: "Masc. + fém. = masculin pluriel" }
        ],
        mistakes: ["Des fleurs bleu ❌ → des fleurs bleues ✅", "Elle est grand ❌ → elle est grande ✅"]
      },
      {
        title: "Le participe passé avec être",
        rule: "Avec l'auxiliaire être, le participe passé s'accorde TOUJOURS avec le sujet.",
        tip: "💡 C'est simple : être = accord avec le sujet. Toujours. Sans exception.",
        examples: [
          { sentence: "Elle est **partie**.", note: "Sujet féminin singulier → -ie" },
          { sentence: "Ils sont **arrivés**.", note: "Sujet masculin pluriel → -és" },
          { sentence: "Elles sont **allées**.", note: "Sujet féminin pluriel → -ées" }
        ],
        mistakes: ["Elle est parti ❌ → elle est partie ✅", "Ils sont arrivé ❌ → ils sont arrivés ✅"]
      },
      {
        title: "Le participe passé avec avoir",
        rule: "Avec l'auxiliaire avoir, le PP s'accorde avec le COD seulement si celui-ci est placé AVANT le verbe.",
        tip: "💡 Posez la question « avoir + quoi ? ». Si la réponse est avant le verbe, accordez. Sinon, pas d'accord.",
        examples: [
          { sentence: "J'ai **mangé** une pomme.", note: "COD après → pas d'accord" },
          { sentence: "La pomme que j'ai **mangée**.", note: "COD « que » (= pomme) avant → accord fém." },
          { sentence: "Les livres que j'ai **lus**.", note: "COD « que » (= livres) avant → accord masc. plur." }
        ],
        mistakes: ["Les pommes que j'ai mangé ❌ → mangées ✅", "J'ai mangée une pomme ❌ → mangé ✅"]
      },
      {
        title: "Les pluriels spéciaux",
        rule: "Noms en -al → -aux (sauf bals, festivals...). Noms en -ou → -ous (sauf bijoux, cailloux, choux, genoux, hiboux, joujoux, poux).",
        tip: "💡 Pour les 7 exceptions en -oux, pensez à cette phrase : « Viens mon chou, mon bijou, sur mes genoux avec tes joujoux, et ne jette pas de cailloux sur ce hibou même s'il a des poux ! »",
        examples: [
          { sentence: "Un hôpital → des **hôpitaux**", note: "Règle -al → -aux" },
          { sentence: "Un chou → des **choux**", note: "Exception en -oux" },
          { sentence: "Un clou → des **clous**", note: "Règle normale -ou → -ous" }
        ],
        mistakes: ["Des hôpitals ❌ → des hôpitaux ✅", "Des chous ❌ → des choux ✅"]
      }
    ]
  },
  orthographe: {
    title: "L'orthographe des mots courants",
    icon: "✍️",
    color: "#CE82FF",
    intro: "Certains mots français sont souvent mal orthographiés. Voici les règles et astuces pour ne plus se tromper.",
    sections: [
      {
        title: "Les doubles consonnes",
        rule: "Certains mots doublent une consonne, d'autres non. Il n'y a pas de règle universelle, mais des familles de mots à retenir.",
        tip: "💡 Quelques repères : apparaître (2p), apercevoir (1p), appeler (2p), adresse (1d, 2s), développer (2p), grammaire (2m).",
        examples: [
          { sentence: "**apparemment** (2p, 2m)", note: "Famille de « apparent »" },
          { sentence: "**apercevoir** (1p)", note: "Attention : un seul p !" },
          { sentence: "**développer** (2p)", note: "Comme « envelopper »" }
        ],
        mistakes: ["Aparemment ❌ → apparemment ✅", "Appercevoir ❌ → apercevoir ✅"]
      },
      {
        title: "Les adverbes en -ment",
        rule: "Adjectif en -ent → adverbe en -emment. Adjectif en -ant → adverbe en -amment. Autres : féminin + -ment.",
        tip: "💡 Retenez : -ent → -emment (évidemment), -ant → -amment (méchamment). Le féminin + ment marche pour le reste (douce → doucement).",
        examples: [
          { sentence: "évident → **évidemment**", note: "-ent → -emment" },
          { sentence: "méchant → **méchamment**", note: "-ant → -amment" },
          { sentence: "douce → **doucement**", note: "Féminin + -ment" }
        ],
        mistakes: ["Évidament ❌ → évidemment ✅", "Mechament ❌ → méchamment ✅"]
      },
      {
        title: "Les accents",
        rule: "Accent aigu (é) : son fermé. Accent grave (è) : son ouvert. Accent circonflexe (ê) : souvent un ancien « s » disparu.",
        tip: "💡 L'accent circonflexe rappelle souvent un « s » latin : hôpital (hospital), forêt (forest), île (isle).",
        examples: [
          { sentence: "**préféré** : deux accents aigus", note: "é = son fermé" },
          { sentence: "**père** : accent grave", note: "è = son ouvert" },
          { sentence: "**hôpital** : accent circonflexe", note: "Du latin « hospitale »" }
        ],
        mistakes: ["Prefere ❌ → préféré ✅", "Hopital ❌ → hôpital ✅"]
      },
      {
        title: "Les mots pièges courants",
        rule: "Certains mots sont régulièrement mal écrits à cause de l'influence de l'anglais ou de la prononciation.",
        tip: "💡 Langage (pas language), adresse (pas address), nécessaire (1c, 2s), intéressant (1r), maintenant (main-tenant).",
        examples: [
          { sentence: "**langage** (sans u)", note: "≠ anglais « language »" },
          { sentence: "**adresse** (1d, 2s)", note: "≠ anglais « address »" },
          { sentence: "**nécessaire** (1c, 2s)", note: "né-ces-saire" }
        ],
        mistakes: ["Language ❌ → langage ✅", "Nécéssaire ❌ → nécessaire ✅", "Interressant ❌ → intéressant ✅"]
      }
    ]
  }
};
