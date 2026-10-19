// 1. arXiv Search Function
async function searchArxiv(query) {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://export.arxiv.org/api/query?search_query=all:${encodedQuery}&start=0&max_results=3`;

    try {
        const response = await fetch(url);
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

// 2. Semantic Scholar Search Function
async function searchSemanticScholar(query) {
    try {
        const response = await fetch(`https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(query)}&limit=3&fields=title,abstract,url,year,authors`);
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
    // Run both requests at the same time for faster loading
    const [arxivResults, semanticResults] = await Promise.all([
        searchArxiv(query),
        searchSemanticScholar(query)
    ]);

    // Merge both arrays together
    return [...arxivResults, ...semanticResults];
}
