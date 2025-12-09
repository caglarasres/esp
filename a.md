graph TD
    %% Define Nodes and Styling
    A[Kullanıcı Sorgusu ve Dosya Yukleme] --> B{LLM Router / Planner Agent};
    
    subgraph I_PLANLAMA_VE_YONLENDIRME
        B -->|Plan Oluştur| C[Plan (JSON) Oluşturuldu];
        C --> D{Tool Chooser / Dispatcher};
        D --> E{Plan Başarısız Mı?};
    end

    subgraph II_VERI_HAZIRLIGI_VE_RAG
        D1[Dosya Parsers (PDF, Excel, Word)] --> D2[Chunking];
        D2 --> D3(Embedding Modeli Calistirilir);
        D3 --> E1[Vektor Veritabani (VDB) Guncellendi];
    end

    subgraph III_PARALEL_UZMANLIK_YURUTME
        D --> |Finans Analizi Gerekiyor| F1{Finans Analiz Agent};
        D --> |Hukuki Kontrol Gerekiyor| F2{Compliance Agent};
        D --> |Belge No Gerekiyor| F3{Document Number Agent};
        
        E1 --> F1;
        E1 --> F2;
        E1 --> F3;
        
        F1 -->|Finans Sonucu (JSON)| G1[Finans Cevabı];
        F2 -->|Risk Sonucu (JSON)| G2[Hukuki Cevap];
        F3 -->|ID'ler (JSON)| G3[Belge ID'leri];
    end

    subgraph IV_SENTEZ_VE_KONTROL
        G1 & G2 & G3 --> H{Sentez Agent / Final LLM};
        H --> I{Guven Skoru Kontrolu > 0.8?};
    end

    subgraph V_HATA_YONETIMI
        E -- Hayir --> D;
        I -- Hayir --> J[Planı Revize Et / Tekrar Dene];
        J --> C;
    end

    subgraph VI_FINAL_CIKTI
        I -- Evet --> K[Nihai Kullanici Cevabi];
        K --> L(Kullanici Arayuzu/UI);
    end

    %% Flow Connections and Styling
    style B fill:#f9f,stroke:#000,stroke-width:2px;
    style D fill:#f9f,stroke:#000;
    style F1 fill:#ccf,stroke:#000;
    style F2 fill:#ccf,stroke:#000;
    style F3 fill:#ccf,stroke:#000;
    style H fill:#f9f,stroke:#000,stroke-width:2px;
    style K fill:#afa,stroke:#000,stroke-width:2px;
    style J fill:#faa,stroke:#000;

    %% Data Flow
    D1 --> D2;
    D2 --> D3;
    D3 --> E1;
    
    %% Error Flow
    E -- Evet --> L;
