export interface Plan {
  id: string;
  currency: string;
  description: string;
  grace_interval: string;
  grace_period: number;
  invoice_interval: string;
  invoice_period: number;
  is_active: boolean;
  name: string;
  price: number;
  signup_fee: number;
  tag: string;
  tier: number;
  trial_interval: string;
  trial_mode: string;
  trial_period: number;
}

export type Product = {
  created_at: string;
  description: string | null;
  download: string | null;
  id: number;
  name: string;
  image: string;
  plans?: {
    data: Plan[];
  };
  prefix_key: string;
  revenue: number;
  slug: string;
  status: string;
  url: string | null;
  url_detail: string | null;
  url_doc: string | null;
  version: string;
};
