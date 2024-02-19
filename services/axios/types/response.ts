export interface MktPaginationResponse {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  per_page: string;
  prev_page_url: string | null;
  to: number;
  total: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}
export interface MktValidateResponse {
  [key: string]: string[];
}

export interface MktPayloadResponse {
  pagination?: MktPaginationResponse;
  errors?: MktValidateResponse;
}

export interface MktResponse<T> {
  data: T;
  payload?: MktPayloadResponse;
}
