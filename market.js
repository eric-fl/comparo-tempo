const edfTempo = {
  provider: "EDF",
  offer: "Tempo",
  isLocal: false,
  subscriptions: [
    {
      kva: 6,
      monthlyCost: 15.59
    },
    {
      kva: 9,
      monthlyCost: 19.38
    },
    {
      kva: 12,
      monthlyCost: 23.07
    },
    {
      kva: 15,
      monthlyCost: 26.47
    },
    {
      kva: 18,
      monthlyCost: 30.04
    },
    {
      kva: 30,
      monthlyCost: 44.73
    },
    {
      kva: 36,
      monthlyCost: 52.42
    }
  ],
  tariff: {
    hcBlue: 0.13250,
    hpBlue: 0.16120,
    hcWhite: 0.14990,
    hpWhite: 0.18710,
    hcRed: 0.15750,
    hpRed: 0.70600
  }
};

const marketOffers = [
  {
    provider: "EDF",
    offer: "Bleu",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.20650,
      hc: 0.15790
    }
  },
  {
    provider: "EDF",
    offer: "Vert Electrique",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.05
      },
      {
        kva: 9,
        monthlyCost: 18.91
      },
      {
        kva: 12,
        monthlyCost: 22.65
      },
      {
        kva: 15,
        monthlyCost: 26.17
      },
      {
        kva: 18,
        monthlyCost: 29.81
      },
      {
        kva: 24,
        monthlyCost: 37.52
      },
      {
        kva: 30,
        monthlyCost: 44.65
      },
      {
        kva: 36,
        monthlyCost: 51.82
      }
    ],
    tariff: {
      hp: 0.20210,
      hc: 0.15760
    }
  },
  {
    provider: "EDF",
    offer: "Vert Electrique Auto",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.05
      },
      {
        kva: 9,
        monthlyCost: 18.91
      },
      {
        kva: 12,
        monthlyCost: 22.65
      },
      {
        kva: 15,
        monthlyCost: 26.17
      },
      {
        kva: 18,
        monthlyCost: 29.81
      },
      {
        kva: 24,
        monthlyCost: 37.52
      },
      {
        kva: 30,
        monthlyCost: 44.65
      },
      {
        kva: 36,
        monthlyCost: 51.82
      }
    ],
    tariff: {
      hp: 0.22290,
      hc: 0.13000
    }
  },
  {
    provider: "EDF",
    offer: "Zen Online",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.19630,
      hc: 0.15050
    }
  },
  {
    provider: "EDF",
    offer: "Zen Fixe",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.05
      },
      {
        kva: 9,
        monthlyCost: 18.91
      },
      {
        kva: 12,
        monthlyCost: 22.65
      },
      {
        kva: 15,
        monthlyCost: 26.17
      },
      {
        kva: 18,
        monthlyCost: 29.81
      },
      {
        kva: 24,
        monthlyCost: 37.52
      },
      {
        kva: 30,
        monthlyCost: 44.65
      },
      {
        kva: 36,
        monthlyCost: 51.82
      }
    ],
    tariff: {
      hp: 0.18880,
      hc: 0.14960
    }
  },
  {
    provider: "Gaz de Bordeaux",
    offer: "NOVAFLEX ELEC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.83
      },
      {
        kva: 9,
        monthlyCost: 19.84
      },
      {
        kva: 12,
        monthlyCost: 23.68
      },
      {
        kva: 15,
        monthlyCost: 27.30
      },
      {
        kva: 18,
        monthlyCost: 31.03
      },
      {
        kva: 24,
        monthlyCost: 38.96
      },
      {
        kva: 30,
        monthlyCost: 46.28
      },
      {
        kva: 36,
        monthlyCost: 53.63
      }
    ],
    tariff: {
      hp: 0.19799,
      hc: 0.15182
    }
  },
  {
    provider: "Gaz de Bordeaux",
    offer: "NOVAFIXE ELEC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.83
      },
      {
        kva: 9,
        monthlyCost: 19.84
      },
      {
        kva: 12,
        monthlyCost: 23.68
      },
      {
        kva: 15,
        monthlyCost: 27.30
      },
      {
        kva: 18,
        monthlyCost: 31.03
      },
      {
        kva: 24,
        monthlyCost: 38.96
      },
      {
        kva: 30,
        monthlyCost: 46.28
      },
      {
        kva: 36,
        monthlyCost: 53.63
      }
    ],
    tariff: {
      hp: 0.17596,
      hc: 0.13610
    }
  },
  {
    provider: "GEDIA",
    offer: "Tarif Réglementé Bleu",
    isLocal: true,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.20586,
      hc: 0.15726
    }
  },
  {
    provider: "GEDIA",
    offer: "All Inclusive BT",
    isLocal: true,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 16.34
      },
      {
        kva: 9,
        monthlyCost: 20.46
      },
      {
        kva: 12,
        monthlyCost: 24.43
      },
      {
        kva: 15,
        monthlyCost: 28.16
      },
      {
        kva: 18,
        monthlyCost: 32.02
      },
      {
        kva: 24,
        monthlyCost: 40.19
      },
      {
        kva: 30,
        monthlyCost: 47.74
      },
      {
        kva: 36,
        monthlyCost: 55.33
      }
    ],
    tariff: {
      hp: 0.22280,
      hc: 0.16934
    }
  },
  {
    provider: "Synelva",
    offer: "Tarif Bleu Option Heures Creuses",
    isLocal: true,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 14.16
      },
      {
        kva: 9,
        monthlyCost: 17.62
      },
      {
        kva: 12,
        monthlyCost: 20.92
      },
      {
        kva: 15,
        monthlyCost: 23.99
      },
      {
        kva: 18,
        monthlyCost: 27.18
      },
      {
        kva: 24,
        monthlyCost: 34.02
      },
      {
        kva: 30,
        monthlyCost: 40.24
      },
      {
        kva: 36,
        monthlyCost: 46.50
      }
    ],
    tariff: {
      hp: 0.16944,
      hc: 0.12084
    }
  },
  {
    provider: "Ohm Énergie",
    offer: "Classique HP/HC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 14.42
      },
      {
        kva: 9,
        monthlyCost: 18.07
      },
      {
        kva: 12,
        monthlyCost: 21.59
      },
      {
        kva: 15,
        monthlyCost: 24.90
      },
      {
        kva: 18,
        monthlyCost: 28.31
      },
      {
        kva: 24,
        monthlyCost: 35.56
      },
      {
        kva: 30,
        monthlyCost: 42.24
      },
      {
        kva: 36,
        monthlyCost: 48.98
      }
    ],
    tariff: {
      hp: 0.20650,
      hc: 0.15790
    }
  },
  {
    provider: "Ohm Énergie",
    offer: "Extra Eco Fixe HP/HC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.84
      },
      {
        kva: 9,
        monthlyCost: 19.83
      },
      {
        kva: 12,
        monthlyCost: 23.68
      },
      {
        kva: 15,
        monthlyCost: 27.30
      },
      {
        kva: 18,
        monthlyCost: 31.03
      },
      {
        kva: 24,
        monthlyCost: 38.97
      },
      {
        kva: 30,
        monthlyCost: 46.27
      },
      {
        kva: 36,
        monthlyCost: 53.63
      }
    ],
    tariff: {
      hp: 0.18240,
      hc: 0.14070
    }
  },
  {
    provider: "Ohm Énergie",
    offer: "Fixe 2 ans HP/HC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.84
      },
      {
        kva: 9,
        monthlyCost: 19.83
      },
      {
        kva: 12,
        monthlyCost: 23.68
      },
      {
        kva: 15,
        monthlyCost: 27.30
      },
      {
        kva: 18,
        monthlyCost: 31.03
      },
      {
        kva: 24,
        monthlyCost: 38.97
      },
      {
        kva: 30,
        monthlyCost: 46.27
      },
      {
        kva: 36,
        monthlyCost: 53.63
      }
    ],
    tariff: {
      hp: 0.21490,
      hc: 0.16390
    }
  },
  {
    provider: "Alterna énergie",
    offer: "Électricité verte 100% locale",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.05
      },
      {
        kva: 9,
        monthlyCost: 19.19
      },
      {
        kva: 12,
        monthlyCost: 23.01
      },
      {
        kva: 15,
        monthlyCost: 26.63
      },
      {
        kva: 18,
        monthlyCost: 30.35
      },
      {
        kva: 24,
        monthlyCost: 38.25
      },
      {
        kva: 30,
        monthlyCost: 45.55
      },
      {
        kva: 36,
        monthlyCost: 52.91
      }
    ],
    tariff: {
      hp: 0.18850,
      hc: 0.14930
    }
  },
  {
    provider: "Alterna énergie",
    offer: "Électricité verte 100% française",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.05
      },
      {
        kva: 9,
        monthlyCost: 19.19
      },
      {
        kva: 12,
        monthlyCost: 23.01
      },
      {
        kva: 15,
        monthlyCost: 26.63
      },
      {
        kva: 18,
        monthlyCost: 30.35
      },
      {
        kva: 24,
        monthlyCost: 38.25
      },
      {
        kva: 30,
        monthlyCost: 45.55
      },
      {
        kva: 36,
        monthlyCost: 52.91
      }
    ],
    tariff: {
      hp: 0.18500,
      hc: 0.14670
    }
  },
  {
    provider: "SELIA",
    offer: "Mon Contrat élec vert Fixe",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 16.66
      },
      {
        kva: 9,
        monthlyCost: 20.90
      },
      {
        kva: 12,
        monthlyCost: 24.97
      },
      {
        kva: 15,
        monthlyCost: 28.80
      },
      {
        kva: 18,
        monthlyCost: 32.76
      },
      {
        kva: 24,
        monthlyCost: 41.16
      },
      {
        kva: 30,
        monthlyCost: 48.90
      },
      {
        kva: 36,
        monthlyCost: 56.69
      }
    ],
    tariff: {
      hp: 0.20760,
      hc: 0.15850
    }
  },
  {
    provider: "ENGIE",
    offer: "Elec Référence 3 ans",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 17.37
      },
      {
        kva: 9,
        monthlyCost: 22.15
      },
      {
        kva: 12,
        monthlyCost: 27.03
      },
      {
        kva: 15,
        monthlyCost: 31.63
      },
      {
        kva: 18,
        monthlyCost: 35.97
      },
      {
        kva: 24,
        monthlyCost: 45.10
      },
      {
        kva: 30,
        monthlyCost: 53.94
      },
      {
        kva: 36,
        monthlyCost: 62.83
      }
    ],
    tariff: {
      hp: 0.20639,
      hc: 0.17238
    }
  },
  {
    provider: "TotalEnergies",
    offer: "Heures Eco",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.83
      },
      {
        kva: 12,
        monthlyCost: 23.93
      },
      {
        kva: 15,
        monthlyCost: 27.61
      },
      {
        kva: 18,
        monthlyCost: 31.03
      },
      {
        kva: 24,
        monthlyCost: 38.97
      },
      {
        kva: 30,
        monthlyCost: 46.27
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.20650,
      hc: 0.15790
    }
  },
  {
    provider: "TotalEnergies",
    offer: "Standard Fixe",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.20650,
      hc: 0.15790
    }
  },
  {
    provider: "TotalEnergies",
    offer: "Verte Fixe",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.21050,
      hc: 0.16080
    }
  },
  {
    provider: "TotalEnergies",
    offer: "Fixe 2 ans",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.20240,
      hc: 0.15500
    }
  },
  {
    provider: "Vattenfall",
    offer: "Electricite Verte Serenite",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 16.83
      },
      {
        kva: 9,
        monthlyCost: 21.83
      },
      {
        kva: 12,
        monthlyCost: 25.68
      },
      {
        kva: 15,
        monthlyCost: 29.30
      },
      {
        kva: 18,
        monthlyCost: 33.03
      },
      {
        kva: 24,
        monthlyCost: 40.96
      },
      {
        kva: 30,
        monthlyCost: 48.27
      },
      {
        kva: 36,
        monthlyCost: 55.63
      }
    ],
    tariff: {
      hp: 0.18940,
      hc: 0.14570
    }
  },
  {
    provider: "Vattenfall",
    offer: "Electricite Verte Equilibre",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 16.83
      },
      {
        kva: 9,
        monthlyCost: 21.83
      },
      {
        kva: 12,
        monthlyCost: 25.68
      },
      {
        kva: 15,
        monthlyCost: 29.30
      },
      {
        kva: 18,
        monthlyCost: 33.03
      },
      {
        kva: 24,
        monthlyCost: 40.96
      },
      {
        kva: 30,
        monthlyCost: 48.27
      },
      {
        kva: 36,
        monthlyCost: 55.63
      }
    ],
    tariff: {
      hp: 0.19790,
      hc: 0.15170
    }
  },
  {
    provider: "Plenitude",
    offer: "Plenifix 1 an",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 18.05
      },
      {
        kva: 9,
        monthlyCost: 22.23
      },
      {
        kva: 12,
        monthlyCost: 26.08
      },
      {
        kva: 15,
        monthlyCost: 29.70
      },
      {
        kva: 18,
        monthlyCost: 33.43
      },
      {
        kva: 24,
        monthlyCost: 41.37
      },
      {
        kva: 30,
        monthlyCost: 48.67
      },
      {
        kva: 36,
        monthlyCost: 54.94
      }
    ],
    tariff: {
      hp: 0.19290,
      hc: 0.14819
    }
  },
  {
    provider: "Plenitude",
    offer: "Plenifix 2 ans",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 18.05
      },
      {
        kva: 9,
        monthlyCost: 22.23
      },
      {
        kva: 12,
        monthlyCost: 26.08
      },
      {
        kva: 15,
        monthlyCost: 29.70
      },
      {
        kva: 18,
        monthlyCost: 33.43
      },
      {
        kva: 24,
        monthlyCost: 41.37
      },
      {
        kva: 30,
        monthlyCost: 48.67
      },
      {
        kva: 36,
        monthlyCost: 54.94
      }
    ],
    tariff: {
      hp: 0.23018,
      hc: 0.17478
    }
  },
  {
    provider: "Alpiq",
    offer: "Électricité Stable",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.18952,
      hc: 0.14578
    }
  },
  {
    provider: "Alpiq",
    offer: "Électricité Référence",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.19968,
      hc: 0.15303
    }
  },
  {
    provider: "Mint Energie",
    offer: "Online & Green",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.83
      },
      {
        kva: 9,
        monthlyCost: 19.83
      },
      {
        kva: 12,
        monthlyCost: 23.68
      },
      {
        kva: 15,
        monthlyCost: 27.30
      },
      {
        kva: 18,
        monthlyCost: 31.03
      },
      {
        kva: 24,
        monthlyCost: 38.97
      },
      {
        kva: 30,
        monthlyCost: 46.27
      },
      {
        kva: 36,
        monthlyCost: 53.63
      }
    ],
    tariff: {
      hp: 0.18780,
      hc: 0.14460
    }
  },
  {
    provider: "Mint Energie",
    offer: "Classic & Green",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.47
      },
      {
        kva: 9,
        monthlyCost: 16.62
      },
      {
        kva: 12,
        monthlyCost: 21.36
      },
      {
        kva: 15,
        monthlyCost: 24.91
      },
      {
        kva: 18,
        monthlyCost: 28.45
      },
      {
        kva: 24,
        monthlyCost: 36.75
      },
      {
        kva: 30,
        monthlyCost: 44.44
      },
      {
        kva: 36,
        monthlyCost: 51.53
      }
    ],
    tariff: {
      hp: 0.20910,
      hc: 0.16460
    }
  },
  {
    provider: "Mint Energie",
    offer: "Smart & Green",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 16.67
      },
      {
        kva: 9,
        monthlyCost: 17.82
      },
      {
        kva: 12,
        monthlyCost: 22.56
      },
      {
        kva: 15,
        monthlyCost: 26.11
      },
      {
        kva: 18,
        monthlyCost: 29.65
      },
      {
        kva: 24,
        monthlyCost: 37.95
      },
      {
        kva: 30,
        monthlyCost: 45.64
      },
      {
        kva: 36,
        monthlyCost: 52.73
      }
    ],
    tariff: {
      hp: 0.20910,
      hc: 0.16460
    }
  },
  {
    provider: "Dyneff",
    offer: "Électricité HP/HC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.19496,
      hc: 0.15930
    }
  },
  {
    provider: "Dyneff",
    offer: "Électricité Verte HP/HC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.19796,
      hc: 0.16230
    }
  },
  {
    provider: "Volterres",
    offer: "Tarif HP/HC",
    isLocal: true,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 19.56
      },
      {
        kva: 12,
        monthlyCost: 23.32
      },
      {
        kva: 15,
        monthlyCost: 26.84
      },
      {
        kva: 18,
        monthlyCost: 30.49
      },
      {
        kva: 24,
        monthlyCost: 38.24
      },
      {
        kva: 30,
        monthlyCost: 45.37
      },
      {
        kva: 36,
        monthlyCost: 52.54
      }
    ],
    tariff: {
      hp: 0.20650,
      hc: 0.15790
    }
  },
  {
    provider: "Urban Solar Energy",
    offer: "Tarif Particuliers HP/HC",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.96
      },
      {
        kva: 9,
        monthlyCost: 20.02
      },
      {
        kva: 12,
        monthlyCost: 24.28
      },
      {
        kva: 15,
        monthlyCost: 28.93
      },
      {
        kva: 18,
        monthlyCost: 33.59
      },
      {
        kva: 24,
        monthlyCost: 42.89
      },
      {
        kva: 30,
        monthlyCost: 52.20
      },
      {
        kva: 36,
        monthlyCost: 61.51
      }
    ],
    tariff: {
      hp: 0.22870,
      hc: 0.17390
    }
  },
  {
    provider: "JPME",
    offer: "Tarifs HP/HC E-Fourniture",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 14.00
      },
      {
        kva: 9,
        monthlyCost: 14.00
      },
      {
        kva: 12,
        monthlyCost: 14.00
      },
      {
        kva: 15,
        monthlyCost: 14.00
      },
      {
        kva: 18,
        monthlyCost: 14.00
      },
      {
        kva: 24,
        monthlyCost: 14.00
      },
      {
        kva: 30,
        monthlyCost: 14.00
      },
      {
        kva: 36,
        monthlyCost: 14.00
      }
    ],
    tariff: {
      hp: 0.21500,
      hc: 0.18500
    }
  },
  {
    provider: "Enercoop",
    offer: "Flexibilité - heures creuses",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 17.87
      },
      {
        kva: 9,
        monthlyCost: 24.03
      },
      {
        kva: 12,
        monthlyCost: 30.56
      },
      {
        kva: 15,
        monthlyCost: 34.94
      },
      {
        kva: 18,
        monthlyCost: 41.03
      },
      {
        kva: 24,
        monthlyCost: 52.09
      },
      {
        kva: 30,
        monthlyCost: 64.00
      },
      {
        kva: 36,
        monthlyCost: 75.91
      }
    ],
    tariff: {
      hp: 0.27456,
      hc: 0.18950
    }
  },
  {
    provider: "Ekwateur",
    offer: "Électricité verte Prix fixe",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.65
      },
      {
        kva: 9,
        monthlyCost: 23.38
      }
    ],
    tariff: {
      hp: 0.18090,
      hc: 0.13960
    }
  },
  {
    provider: "Elmy",
    offer: "Électricité 100% renouvelable",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 17.30
      },
      {
        kva: 9,
        monthlyCost: 21.34
      },
      {
        kva: 12,
        monthlyCost: 25.37
      },
      {
        kva: 15,
        monthlyCost: 29.12
      },
      {
        kva: 18,
        monthlyCost: 32.92
      },
      {
        kva: 24,
        monthlyCost: 41.14
      },
      {
        kva: 30,
        monthlyCost: 49.00
      },
      {
        kva: 36,
        monthlyCost: 56.91
      }
    ],
    tariff: {
      hp: 0.20500,
      hc: 0.15430
    }
  },
  {
    provider: "ilek",
    offer: "ÉnRFixe+",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 28.08
      },
      {
        kva: 9,
        monthlyCost: 38.76
      },
      {
        kva: 12,
        monthlyCost: 45.20
      },
      {
        kva: 15,
        monthlyCost: 51.51
      },
      {
        kva: 18,
        monthlyCost: 57.04
      },
      {
        kva: 24,
        monthlyCost: 68.71
      },
      {
        kva: 30,
        monthlyCost: 73.42
      },
      {
        kva: 36,
        monthlyCost: 87.41
      }
    ],
    tariff: {
      hp: 0.20960,
      hc: 0.16100
    }
  },
  {
    provider: "Octopus Energy",
    offer: "Eco-conso fixe -12%",
    isLocal: false,
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 15.74
      },
      {
        kva: 9,
        monthlyCost: 20.21
      },
      {
        kva: 12,
        monthlyCost: 24.28
      },
      {
        kva: 15,
        monthlyCost: 28.15
      },
      {
        kva: 18,
        monthlyCost: 32.13
      },
      {
        kva: 24,
        monthlyCost: 40.53
      },
      {
        kva: 30,
        monthlyCost: 48.34
      },
      {
        kva: 36,
        monthlyCost: 54.61
      }
    ],
    tariff: {
      hp: 0.18740,
      hc: 0.14820
    }
  }
];
