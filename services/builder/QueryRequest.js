import { isEmptyObj } from "../helpers/function";
import Parser from "./Parser";

export const initialQueryRequest = {
  page: 1,
  per_page: 10,
};

export default class QueryRequest {
  constructor(options = {}) {
    // @TODO validate options is an object
    // if (options && typeof(options) !== Object) {
    //   throw new Error('Please pass in an options object to the constructor.');
    // }

    // the model to execute the query against
    // set by calling .for(model)
    this.model = null;

    // will use base_url if passed in
    this.base_url = options.base_url || null;

    // default filter names
    this.queryParameters = options.queryParameters || {
      filters: "filter",
      fields: "fields",
      includes: "include",
      appends: "append",
      page: "page",
      limit: "limit",
      per_page: "per_page",
      sort: "sort",
    };

    // initialise variables to hold
    // the urls data
    this.include = [];
    this.append = [];
    this.sorts = [];
    this.fields = {};
    this.filters = {};
    this.pageValue = null;
    this.limitValue = null;
    this.perPageValue = null;
    this.paramsObj = null;

    this.parser = new Parser(this);
  }

  // set the model for the query
  for(model) {
    this.model = model;

    return this;
  }

  // return the parsed url
  get() {
    // generate the url
    const url = this.base_url
      ? this.base_url + this.parseQuery()
      : this.parseQuery();
    // reset the url so the query object can be re-used
    this.reset();
    return url;
  }

  url() {
    return this.get();
  }

  reset() {
    // reset the uri
    this.parser.uri = "";
  }

  parseQuery() {
    if (!this.model) {
      throw new Error(
        "Please call the for() method before adding filters or calling url() / get()."
      );
    }

    return `/${this.model}${this.parser.parse()}`;
  }

  /**
   * Query builder
   */
  includes(...include) {
    if (!include.length) {
      throw new Error(
        `The ${this.queryParameters.includes}s() function takes at least one argument.`
      );
    }

    this.include = include;

    return this;
  }

  appends(...append) {
    if (!append.length) {
      throw new Error(
        `The ${this.queryParameters.appends}s() function takes at least one argument.`
      );
    }

    this.append = append;

    return this;
  }

  select(...fields) {
    if (!fields.length) {
      throw new Error(
        `The ${this.queryParameters.fields}() function takes a single argument of an array.`
      );
    }

    // single entity .fields(['age', 'firstname'])
    if (fields[0].constructor === String || Array.isArray(fields[0])) {
      this.fields = fields.join(",");
    }

    // related entities .fields({ posts: ['title', 'content'], user: ['age', 'firstname']} )
    if (fields[0].constructor === Object) {
      Object.entries(fields[0]).forEach(([key, value]) => {
        this.fields[key] = value.join(",");
      });
    }

    return this;
  }

  where(key, value) {
    if (key === undefined || value === undefined)
      throw new Error(
        "The where() function takes 2 arguments both of string values."
      );

    if (Array.isArray(value) || value instanceof Object)
      throw new Error(
        "The second argument to the where() function must be a string. Use whereIn() if you need to pass in an array."
      );

    this.filters[key] = value;

    return this;
  }

  whereIn(key, array) {
    if (!key || !array) {
      throw new Error(
        "The whereIn() function takes 2 arguments of (string, array)."
      );
    }

    if ((!key && Array.isArray(key)) || typeof key === "object") {
      throw new Error(
        "The first argument for the whereIn() function must be a string or integer."
      );
    }

    if (!Array.isArray(array)) {
      throw new Error(
        "The second argument for the whereIn() function must be an array."
      );
    }

    this.filters[key] = array.join(",");

    return this;
  }

  sort(...args) {
    this.sorts = args;

    return this;
  }

  page(value) {
    if (!Number.isInteger(value)) {
      throw new Error(
        "The page() function takes a single argument of a number"
      );
    }

    this.pageValue = value;

    return this;
  }

  limit(value) {
    if (!Number.isInteger(value)) {
      throw new Error(
        "The limit() function takes a single argument of a number."
      );
    }

    this.limitValue = value;

    return this;
  }

  per_page(value) {
    if (!Number.isInteger(value)) {
      throw new Error(
        "The per_page() function takes a single argument of a number."
      );
    }

    this.perPageValue = value;

    return this;
  }

  params(params) {
    if (params === undefined || params.constructor !== Object) {
      throw new Error(
        "The params() function takes a single argument of an object."
      );
    }

    if (!isEmptyObj(params)) {
      this.paramsObj = params;
    }

    return this;
  }
}
