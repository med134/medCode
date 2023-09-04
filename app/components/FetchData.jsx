export async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=med_code`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

