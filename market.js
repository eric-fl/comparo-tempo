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
    hcBlue: 0.1325,
    hpBlue: 0.1612,
    hcWhite: 0.1499,
    hpWhite: 0.1871,
    hcRed: 0.1575,
    hpRed: 0.7060
  }
};

const marketOffers = [
  {
    provider: "EDF",
    offer: "Bleu HP / HC",
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
      hp: 0.2065,
      hc: 0.1579
    }
  },
  {
    provider: "EDF",
    offer: "Vert Electrique HP / HC",
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
      hp: 0.2021,
      hc: 0.1576
    }
  },
  {
    provider: "EDF",
    offer: "Vert Electrique Auto HP / HC",
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
      hp: 0.2229,
      hc: 0.1300
    }
  }
];
