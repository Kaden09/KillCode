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
    cards: {
      firstCard: {
        title: string;
        description: string;
      };
      secondCard: {
        title: string;
        description: string;
      };
      tertiaryCard: {
        title: string;
        description: string;
      };
    };
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
  contacts: {
    title: {
      firstPart: string;
      secondPart: string;
    };
    description: string;
    trustItems: {
      firstItem: string;
      secondItem: string;
      tertiaryItem: string;
    };
    formFields: {
      name: string;
      contact: string;
      message: string;
      send: string;
      loading: string;
      sent: string;
    };
    contactItems: {
      firstItem: {
        title: string;
      };
      secondItem: {
        title: string;
      };
      tertiaryItem: {
        title: string;
      };
    };
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
  footer: {
    slogan: string;
  };
}
