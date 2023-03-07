export interface article {
  _id: string;
  display_date: string;
  headlines: { basic: string };
  promo_items: {
    basic: {
      url: string;
    };
  };
  subtype: string;
  taxonomy: {
    tags: tag[];
  };
  website_url: string;
}

export interface articleApiResponse {
  articles: article[];
}

export interface tag {
  count?: number;
  slug: string;
  text: string;
}
