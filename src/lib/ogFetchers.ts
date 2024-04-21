import ogs from 'open-graph-scraper';

const ogFetcher = async (url: string) => {
  try {
    const data = await ogs({url: url, timeout: 5000});
    return {
      ...data.result
    }
  } catch (err) {
    throw new Error("Failed to fetch OpenGraph data: " + err);
  }
}

export {
  ogFetcher
};
