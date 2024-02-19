import { Plan } from "../axios/types";

export const joinUrl = (dir?: string, BASE_URL: string = "/", link = "/") => {
  const maxlength = BASE_URL.length;
  const str = BASE_URL.substring(maxlength - 1, maxlength);
  if (str !== link) {
    BASE_URL += link;
  }

  if (dir) {
    dir = dir.replace(/^[\/]{1,}/, "");
    return `${BASE_URL}${dir}`;
  } else {
    let url = BASE_URL;
    if (url && url?.length > 1) {
      url = url.replace(/[\/]{1,}$/, "");
    }
    return url;
  }
};

export function getPlanPeriod(
  plans: Plan[],
  period?: string
): Plan | undefined {
  switch (period) {
    case "vv":
      return plans.find((plan) => plan.invoice_period === 11111);

    case "2nam":
      return plans.find((plan) => plan.invoice_period === 730);

    default:
      return plans.find((plan) => plan.invoice_period === 365);
  }
}

export const isEmptyObj = (obj: object) => {
  let emty = true;
  if (obj) {
    emty = Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  return emty;
};
