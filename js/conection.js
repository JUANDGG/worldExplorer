
const baseURI = {
    protocol: "https",
    hostName: "restcountries.com",
    path: "v3.1/all"
  };
  
  
  function buildURI(baseURI) {
    const { protocol, hostName, path } = baseURI;
    return `${protocol}://${hostName}/${path}`;
  }
  
  
  const fullURI = buildURI(baseURI);
  
  
  export { fullURI };
  