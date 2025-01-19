type Attack = {
  name: string;
  cost: string[];
  extras: string;
  damage: number;
};

type Ability = {
  name: string;
  description: string;
};

type Card = {
  id: string;
  name: string;
  element: string;
  type: string;
  subtype: string;
  health: number;
  craftingCost: number;
  set: string;
  pack: string;
  rarity: string;
  retreatCost: string[];
  attacks: Attack[];
  abilities: Ability[];
};

export declare const en: {
  geneticApex: Card[];
  promo: Card[];
};

export declare const fr: {
  geneticApex: Card[];
  promo: Card[];
};

export declare const cn: {
  geneticApex: Card[];
  promo: Card[];
};
