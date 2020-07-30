export const fetchCharactersData = async () => {
  return await fetch(
    "https://fe-cors-proxy.herokuapp.com", {
      headers: {
        "Target-URL": "https://dragon-ball-api.herokuapp.com/api/character/"
      }
    }
  ).then((res) => res.json());
}