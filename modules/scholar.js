async function searchAcademicPapers(query) {
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
                link: entry.querySelector("id").textContent.trim()
            });
        });

        return results;
    } catch (error) {
        console.error("Error fetching academic data:", error);
        return [];
    }
}
