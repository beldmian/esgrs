export async function load({ fetch, params }) {
  let data = await fetch("/api/test_data");
  data = await data.json();

  let descriptions = await fetch("/api/descriptions");
  descriptions = await descriptions.json();
  return {
    company_data: data,
    descriptions: descriptions
  };
}
