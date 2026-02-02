const edfTempo = {
  provider: "EDF",
  offer: "Tempo",
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
    provider: "Gaz de Bordeaux",
    offer: "NOVAFLEX ELEC",
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
    provider: "GEDIA (localement)",
    offer: "Tarif Réglementé Bleu",
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
    provider: "GEDIA (localement)",
    offer: "All Inclusive BT",
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
    provider: "Synelva (localement)",
    offer: "Tarif Bleu Option Heures Creuses",
    subscriptions: [
      {
        kva: 6,
        monthlyCost: 11.80
      },
      {
        kva: 9,
        monthlyCost: 14.68
      },
      {
        kva: 12,
        monthlyCost: 17.43
      },
      {
        kva: 15,
        monthlyCost: 19.99
      },
      {
        kva: 18,
        monthlyCost: 22.65
      },
      {
        kva: 24,
        monthlyCost: 28.35
      },
      {
        kva: 30,
        monthlyCost: 33.53
      },
      {
        kva: 36,
        monthlyCost: 38.75
      }
    ],
    tariff: {
      hp: 0.14120,
      hc: 0.10070
    }
  },
  {
    provider: "Ohm Énergie",
    offer: "Classique HP/HC",
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
  }
];
