import ogs from 'open-graph-scraper';

const ogFetcher = async (url: string) => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';
    try {
      const data = await ogs({url: url, timeout: 5000, onlyGetOpenGraphInfo: true, fetchOptions: { headers: { 'user-agent': userAgent } }});
      return data?.result ?? []
    } catch (error) {
      console.error(error);
    }

}

export {
  ogFetcher
};
