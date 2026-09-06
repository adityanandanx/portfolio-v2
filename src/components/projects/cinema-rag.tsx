import { ArchList, Figure, PageHero, Section, Stats, statIcons } from "./shared";

export default function CinemaRagPage() {
  return (
    <>
      <PageHero
        kicker="RAG // Qdrant + Llama 4"
        title="Hybrid RAG: Conversational Movie Agent"
        tagline="A multi-agent hybrid retrieval pipeline that answers natural-language questions across 2,200 movie screenplays — dense and sparse retrieval fused, grounded in the text."
        links={[
          { label: "GitHub", href: "https://github.com/adityanandanx/cinema-rag" },
        ]}
      />

      <Stats
        items={[
          { value: "2,200", label: "screenplays", icon: statIcons.film },
          { value: "289,124", label: "chunks indexed", icon: statIcons.database },
          { value: "k = 10", label: "retrieval depth", icon: statIcons.target },
          { value: "17B", label: "Llama 4 via Groq", icon: statIcons.brain },
        ]}
      />

      <Section index="01" title="The problem">
        <p>
          LLMs confidently hallucinate about movies. A corpus of 2,200 full
          screenplays is far beyond any context window, and naive chunk-and-embed
          retrieval misses the queries that matter: exact quotes, character
          names, and specific scenes need keyword precision, while thematic
          questions (motifs, arcs, tone) need semantic search. One retrieval
          mode fails half the queries.
        </p>
      </Section>

      <Section index="02" title="Architecture">
        <ArchList
          items={[
            "Ingestion: 2,200 screenplays chunked into 289,124 documents, indexed in Qdrant running in a local Docker container.",
            "Dense path: BAAI/bge-small-en-v1.5 embeddings for semantic similarity.",
            "Sparse path: BM25 for exact keyword and quote matching.",
            "Fusion: Reciprocal Rank Fusion re-ranks both lists so a document strong in either signal surfaces.",
            "Serving: top-10 retrieval feeds a multi-agent setup — a default agent plus a local Gemma 4 variant — with generation on Llama 4 17B via Groq for fast inference.",
            "Surfaces: Gradio chat UI, CLI, and API server from one shared pipeline (cinema_rag/gradio, cli, api).",
          ]}
        />
        <Figure
          src="/images/projects/cinema-cover.png"
          alt="Cinema RAG pipeline diagram: query to dense plus sparse retrieval to RRF fusion to Qdrant to Llama 4"
          caption="The pipeline: hybrid retrieval, fused ranking, grounded generation."
        />
      </Section>

      <Section index="03" title="My approach">
        <p>
          The key decision was refusing to choose between dense and sparse. I
          benchmarked the failure modes mentally first: pure embeddings bury
          exact quotes, pure BM25 cannot do themes — so the architecture fuses
          both with RRF instead of hand-tuned weights. Qdrant runs locally in
          Docker to keep the 289K-vector index reproducible and free, while
          generation goes to Groq because local inference at 17B would make a
          conversational demo unusably slow. Separate agents (default and local
          Gemma 4) behind one retrieval tool keep the experiment surface open
          without forking the pipeline.
        </p>
      </Section>

      <Section index="04" title="Learnings and honest measurements">
        <p>
          What is measured: corpus scale (2,200 scripts, 289,124 chunks),
          retrieval depth (k=10), and the latency rationale for Groq over local
          inference. What is not: I have not published a formal retrieval
          evaluation (recall@k, faithfulness scores) for this build, so there
          is no accuracy chart here — that is the documented next step,
          alongside query expansion and a groundedness scorer. I would rather
          show the gap than fill it with a synthetic benchmark.
        </p>
      </Section>
    </>
  );
}
