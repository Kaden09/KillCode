import type { ElementType } from "react";

interface PortfolioProject {
  img: string;
  title: string;
  desc: string;
  cost: number;
  stack: string[];
}

interface ContactItem {
  Icon: ElementType;
  title: string;
  value: string;
  link: string;
  ariaLabel: string;
}

interface AdvantageCard {
  Icon: ElementType;
  title: string;
  desc: string;
}

interface GrowthStep {
  title: string;
  desc: string;
}

export interface I18nSchema {
  header: {
    navigation: {
      advantages: string;
      instruction: string;
      contacts: string;
      portfolio: string;
    };
  };
  hero: {
    about: {
      stats: {
        clients: {
          firstPart: string;
          secondPart: string;
        };
      };
      title: {
        firstPart: string;
        secondPart: string;
      };
      description: string;
      contactsButton: string;
      portfolioButton: string;
    };
  };
  products: string[];
  products2: string[];
  advantages: {
    title: {
      firstPart: string;
      secondPart: string;
    };
    subtitle: string;
    cards: AdvantageCard[];
  };
  instruction: {
    title: {
      firstPart: string;
      secondPart: string;
    };
    subtitle: string;
    currentStep: string;
    steps: {
      firstStep: {
        title: string;
        description: string;
      };
      secondStep: {
        title: string;
        description: string;
      };
      tertiaryStep: {
        title: string;
        description: string;
      };
      fourthStep: {
        title: string;
        description: string;
      };
      fifthStep: {
        title: string;
        description: string;
      };
    };
  };
  growth: {
    title: {
      firstPart: string;
      secondPart: string;
    };
    subtitle: string;
    growthSteps: GrowthStep[];
  };
  contacts: {
    title: {
      firstPart: string;
      secondPart: string;
    };
    description: string;
    trustItems: string[];
    formFields: {
      name: string;
      contact: string;
      message: string;
      send: string;
      loading: string;
      sent: string;
    };
    contactItems: ContactItem[];
    errorMessages: {
      name: {
        error: string;
      };
      contact: {
        firstError: string;
        secondError: string;
      };
      message: {
        firstError: string;
        secondError: string;
      };
    };
  };
  portfolio: PortfolioProject[];
  footer: {
    slogan: string;
    contacts: Omit<ContactItem, "title" | "value">[];
  };
}
