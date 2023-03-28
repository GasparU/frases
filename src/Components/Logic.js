const LogicPhrase = (arr) => {
  const phrasesJson = Math.floor(Math.random() * arr.length);
  return arr[phrasesJson];
};
export default LogicPhrase;
