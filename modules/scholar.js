// 1. arXiv Search Function (Using CORS Proxy)
async function searchArxiv(query) {
    const encodedQuery = encodeURIComponent(query);
    const targetUrl = `https://export.arxiv.org/api/query?search_query=all:${encodedQuery}&start=0&max_results=3`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const text = await response.text();
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const entries = xmlDoc.querySelectorAll("entry");

        let results = [];
        entries.forEach(entry => {
            results.push({
                title: entry.querySelector("title").textContent.trim().replace(/\n/g, ' '),
                summary: entry.querySelector("summary").textContent.trim().replace(/\n/g, ' '),
                link: entry.querySelector("id").textContent.trim(),
                source: "arXiv"
            });
        });
        return results;
    } catch (error) {
        console.error("Error fetching arXiv data:", error);
        return [];
    }
}

// 2. Semantic Scholar Search Function (Using CORS Proxy)
async function searchSemanticScholar(query) {
    const targetUrl = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(query)}&limit=3&fields=title,abstract,url,year,authors`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (!data.data) return [];

        return data.data.map(paper => ({
            title: paper.title,
            summary: paper.abstract || "No abstract available.",
            link: paper.url || `https://www.semanticscholar.org/paper/${paper.paperId}`,
            source: "Semantic Scholar"
        }));
    } catch (error) {
        console.error("Error fetching Semantic Scholar data:", error);
        return [];
    }
}

// 3. Combined Master Search Function
async function searchAllAcademicSources(query) {
    const [arxivResults, semanticResults] = await Promise.all([
        searchArxiv(query),
        searchSemanticScholar(query)
    ]);

    return [...arxivResults, ...semanticResults];
}
