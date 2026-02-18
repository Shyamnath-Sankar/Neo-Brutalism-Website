import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'lumina',
        title: 'LuminaIQ',
        category: 'AI / Education',
        description: 'AI-assisted learning environment designed to structure interaction with knowledge rather than simulate conversation.',
        longDescription: 'LuminaIQ represents a shift from "chatting with PDF" to "structuring knowledge from PDF". Unlike standard RAG implementations that focus on conversational retrieval, LuminaIQ builds a knowledge graph from ingested documents, allowing users to traverse concepts relationally. The system prioritizes citation accuracy and structural context over fluency.',
        challenge: 'LLMs often hallucinate connections or lose context when processing large technical documents. Standard RAG (Retrieval-Augmented Generation) retrieves chunks but fails to understand the structural relationship between concepts.',
        solution: 'Implemented a multi-stage ingestion pipeline that not only chunks text but also extracts hierarchical structure and entites. These are stored in a graph database (Neo4j) alongside vector embeddings. The query engine first resolves structural position before retrieving content, significantly reducing hallucination and improving answer relevance.',
        gallery: [
            'https://picsum.photos/800/600?random=11',
            'https://picsum.photos/800/600?random=12',
            'https://picsum.photos/800/600?random=13'
        ],
        techStack: ['Python', 'JavaScript', 'LLM Integration', 'PDF Processing', 'Neo4j', 'Pinecone'],
        status: 'Ongoing Development',
        focus: 'Cognitive structuring & AI workflows',
        imageUrl: 'https://picsum.photos/800/600?random=1',
        liveLink: '#',
        repoLink: '#'
    },
    {
        id: 'hrms',
        title: 'Genrec-One',
        category: 'Enterprise / HRMS',
        description: 'Operational management system modeling administrative environments. Full-stack HRMS designed to simulate the complexity of institutional workflows.',
        longDescription: 'Genrec-One is a monolithic approach to HR management, designed for organizations with complex, rigid hierarchies. It models the actual flow of approvals and document signing rather than just database state changes. The system includes a custom workflow engine that handles multi-party approvals with state rollback capabilities.',
        challenge: 'Existing HR tools were either too flexible (lacking audit trails) or too rigid (unable to handle edge cases). The client needed a system that enforced protocol but allowed for authorized overrides.',
        solution: 'Built a state-machine based workflow engine in FastAPI. Every action is an immutable event in the ledger. The frontend uses a "document-first" approach where UI elements mimic physical forms to reduce training time for legacy staff.',
        gallery: [
            'https://picsum.photos/800/600?random=21',
            'https://picsum.photos/800/600?random=22'
        ],
        techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
        status: 'Modeled Environment',
        focus: 'Translating organizational processes',
        imageUrl: 'https://picsum.photos/800/600?random=2',
        liveLink: '#',
        repoLink: '#'
    },
    {
        id: 'sync',
        title: 'SyncStream',
        category: 'Real-time / WebSocket',
        description: 'Real-time synchronization experiment. Enables multiple clients to consume shared media in synchronized time.',
        longDescription: 'SyncStream explores the constraints of latency in distributed consumption. It allows a "leader" to control the playback state of audio/video for n-number of "follower" clients. The system handles clock synchronization (NTP-style) to ensure playback is synchronized within <50ms variance across devices.',
        challenge: 'Network jitter and varying device decoding speeds make "true" synchronization difficult on the web without specialized protocols.',
        solution: 'Implemented a custom WebSocket protocol on top of Socket.io. The server acts as the source of truth for "time". Clients constantly ping for server-time offset. Playback commands are sent with a "future timestamp" to allow all clients to buffer and execute simultaneously.',
        gallery: [
            'https://picsum.photos/800/600?random=31',
            'https://picsum.photos/800/600?random=32'
        ],
        techStack: ['WebSockets', 'Node.js', 'React', 'Redis'],
        status: 'Experimental System',
        focus: 'Shared-state coordination',
        imageUrl: 'https://picsum.photos/800/600?random=3',
        repoLink: '#'
    },
    {
        id: 'bus',
        title: 'Bus Tracking',
        category: 'IoT / Transport',
        description: 'Lightweight web-based tracking interface. Emphasizes reliability and simplicity for live data representation of transport assets.',
        techStack: ['Geolocation API', 'Maps Integration', 'PWA'],
        status: 'Functional Prototype',
        focus: 'Live data representation',
        imageUrl: 'https://picsum.photos/800/600?random=4'
    },
    {
        id: 'pdf',
        title: 'PDF Suite',
        category: 'Utility',
        description: 'Utility toolkit for document manipulation workflows. Browser-based operations for merging, splitting, and processing files.',
        techStack: ['WASM', 'JavaScript', 'File API'],
        status: 'Utility System',
        focus: 'Automating digital operations',
        imageUrl: 'https://picsum.photos/800/600?random=5'
    },
    {
        id: 'gen-eng',
        title: 'Gen Engineering',
        category: 'Web / Identity',
        description: 'Technical web presence created for engineering-oriented services. A focused TypeScript implementation emphasizing clarity.',
        techStack: ['TypeScript', 'React', 'Tailwind'],
        status: 'Published Site',
        focus: 'Technical identity',
        imageUrl: 'https://picsum.photos/800/600?random=6'
    }
];
