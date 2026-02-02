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
  }
];
