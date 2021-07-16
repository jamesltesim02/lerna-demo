
interface ApiUrls {
  PULL: string;
  BET: string;
  QUOTE: string;
};

interface ApiContextInitParams {
  onSignRequest: Function;
  onApiError: Function;
  urls: ApiUrls;
}

class ApiContext {

  protected signRequest () {}
  protected apiError () {}

  onSignRequest (fn: Function) {}
  onApiError (fn: Function) {}

  init (params: ApiContextInitParams) {
    
  }
}

export default new ApiContext();