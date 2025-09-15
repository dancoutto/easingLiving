# EasingLiving - README do Projeto

## 1. Visão Geral do Projeto

[cite_start]**EasingLiving** é uma plataforma web projetada para facilitar a vida de clientes interessados em realizar obras residenciais ou comerciais[cite: 8]. [cite_start]O objetivo final do projeto é atuar como um intermediador entre o cliente e as equipes responsáveis pela execução da obra — engenheiros, arquitetos e prestadores de serviço[cite: 9].

[cite_start]A plataforma oferecerá pacotes de construção pré-definidos (padrão médio, alto e de luxo) e cuidará de toda a parte burocrática envolvida, como documentação, licenciamento e o acompanhamento do andamento da obra[cite: 9]. O objetivo é garantir praticidade, transparência e segurança para o cliente.

## 2. Equipe

* [cite_start]Daniel Braga Alves do Couto - 62312771 [cite: 3]
* [cite_start]Gabriel Mendes Bitencourt - 62321162 [cite: 3]
* [cite_start]Giovanna Monteiro Rocha - 62320643 [cite: 3]
* [cite_start]Hugo Gonçalves Costa - 62321289 [cite: 3]
* [cite_start]Yasmim Vitória Soares Pereira - 62313109 [cite: 4, 5]

## 3. O Problema: A Perspectiva do Cliente

Atualmente, quem deseja construir ou reformar enfrenta muitas dificuldades:
* **Falta de Tempo:** Dificuldade para lidar com burocracias de documentação e licenciamento.
* **Busca por Profissionais:** Dificuldade em encontrar profissionais de confiança e qualificados.
* **Orçamentos:** Variações excessivas nos orçamentos e pouca clareza sobre os custos finais.
* **Falta de Transparência:** Insegurança em relação à qualidade do serviço, ao cumprimento de prazos e ao acompanhamento da obra.

Apesar da demanda constante por obras e reformas, o processo ainda é visto como algo complicado, demorado e cheio de imprevistos.

## 4. A Solução: Plataforma Proposta

A equipe propõe a criação de uma plataforma web que conecte clientes a profissionais da construção civil, oferecendo pacotes de obra pré-definidos e centralizando toda a parte burocrática de forma prática e transparente.

O sistema proposto vai simplificar o processo de contratação e execução de obras, eliminando a insegurança e a burocracia para o cliente. A plataforma centraliza informações, aumenta a transparência, reduz erros de comunicação e ajudará a empresa a se posicionar como uma solução confiável, moderna e prática, fortalecendo a relação de confiança com o mercado.

## 5. Principais Funcionalidades

Com base nas necessidades do cliente e na solução proposta, a plataforma incluirá:

* **Cadastro de Clientes e Profissionais:** Perfis para clientes e prestadores de serviço (engenheiros, arquitetos e equipes de obra).
* **Seleção de Pacotes de Obra:** O cliente poderá escolher entre pacotes pré-definidos (médio, alto, luxo), com detalhes claros de preço e escopo para facilitar a decisão.
* **Dashboard de Acompanhamento Online:** Um painel que permite ao cliente acompanhar o andamento da obra em tempo real, incluindo prazos e etapas concluídas, aumentando a confiança no serviço.
* **Gestão de Documentos e Licenças:** A plataforma organizará toda a documentação necessária, com upload e acompanhamento de status, evitando que o cliente perca tempo com burocracia.
* **Comunicação Integrada:** Um canal de comunicação direto para garantir que dúvidas e ajustes sejam resolvidos rapidamente entre o cliente e a equipe.
* **Orçamento e Pagamentos Online:** Apresentação clara dos custos, com a praticidade de realizar pagamentos através da própria plataforma para evitar surpresas financeiras.

---

## 6. Requisitos do Sistema

### 6.1. Requisitos Funcionais

As seguintes funcionalidades são especificadas para a plataforma, categorizadas por prioridade: `(M) Must (Obrigatório) / (S) Should (Desejável) / (C) Could (Opcional)`.

| ID | Prioridade | Descrição |
| :--- | :---: | :--- |
| FR-001 | M | [cite_start]Cadastro de usuário (cliente e admin) exigindo nome, CPF, e-mail, telefone de contato e endereço[cite: 12]. |
| FR-002 | M | [cite_start]Página para listar pacotes (médio/alto/luxo) com: descrição, escopo, prazo estimado, preço base, equipe de engenheiros, arquitetos e afins do projeto[cite: 13]. |
| FR-003 | M | [cite_start]Página de detalhes do pacote com destaque a entregáveis e timeline exemplo[cite: 14]. |
| FR-004 | M | [cite_start]Página de FAQ/Informativo gerais, incluindo informações básicas sobre todas as etapas do que seria o projeto[cite: 15]. |
| FR-005 | C | [cite_start]Página institucional "Sobre nós" (missão, visão, valores, credibilidade da empresa)[cite: 16]. |
| FR-006 | M | [cite_start]Formulário de solicitação com dados do cliente, endereço, tipo de obra, pacote pretendido e anexos iniciais[cite: 17]. |
| FR-007 | M | [cite_start]Geração de número de protocolo ao concluir o processo inicial de compra[cite: 18]. |
| FR-008 | M | [cite_start]Upload/download de documentos (PDF/JPG/PNG) com versionamento simples[cite: 19]. |
| FR-009 | C | [cite_start]Área de contato rápido (formulário simples ou link para WhatsApp/telefone)[cite: 20]. |
| FR-010 | M | [cite_start]Dashboard simples para administrador visualizar novas solicitações com filtros básicos[cite: 21]. |

### 6.2. Requisitos Não Funcionais

Os seguintes requisitos técnicos e de qualidade são obrigatórios para o sistema.

| ID | Prioridade | Descrição |
| :--- | :---: | :--- |
| NFR-001 | M | [cite_start]O sistema deve ser responsivo (desktop e mobile)[cite: 25]. |
| NFR-002 | M | [cite_start]O tempo de resposta para carregamento de páginas não deve exceder 3 segundos em conexões estáveis[cite: 26, 27]. |
| NFR-003 | M | [cite_start]Disponibilidade mínima de 99% em horário comercial (08h-18h)[cite: 28]. |
| NFR-004 | M | [cite_start]Interface intuitiva, moderna e com acessibilidade mínima (uso de labels, contraste adequado, navegação simples)[cite: 29, 30]. |
| NFR-005 | M | [cite_start]Senha com no mínimo 8 caracteres[cite: 31]. |
| NFR-006 | M | [cite_start]O sistema deve estar em português-BR por padrão[cite: 32]. |
| NFR-007 | M | [cite_start]Deve seguir parcialmente as diretrizes WCAG 2.1 nível AA (no mínimo apresentar textos alternativos em imagens)[cite: 33, 34]. |

---

## 7. Modelos de Dados

### 7.1. Modelo Conceitual

O sistema opera em torno de três conceitos centrais: **Usuários**, **Projetos** e **Pacotes**.

* Um **Usuário** pode ser um `Cliente` ou `Admin`. Clientes iniciam projetos, enquanto Admins gerenciam o conteúdo e as solicitações da plataforma.
* Um **Pacote** representa um serviço de construção pré-definido (ex: "Reforma de Luxo"), com escopo, preço base e cronograma definidos.
* Um **Projeto** é criado quando um `Cliente` solicita um `Pacote`. O projeto conterá todas as informações associadas, incluindo dados do cliente, endereço, pacote escolhido, documentos, atualizações de status e histórico de comunicação. Ele conecta o cliente à equipe de profissionais designada.

### 7.2. Modelo Entidade-Relacionamento (Básico)

__________________________________________________________________________________________________________________________________________
# EasingLiving - Project README

## 1. Project Overview

[cite_start]**EasingLiving** is a web platform designed to simplify the process of residential and commercial construction projects[cite: 8]. [cite_start]The project's main goal is to act as an intermediary between clients and the teams responsible for executing the work, such as engineers, architects, and service providers[cite: 9].

[cite_start]The platform will offer pre-defined construction packages (e.g., medium, high, and luxury standards) and manage all the bureaucratic aspects involved, including documentation, licensing, and project monitoring[cite: 9]. The ultimate objective is to provide a practical, transparent, and secure experience for clients looking to build or renovate.

## 2. Team Members

* [cite_start]Daniel Braga Alves do Couto - 62312771 [cite: 3]
* [cite_start]Gabriel Mendes Bitencourt - 62321162 [cite: 3]
* [cite_start]Giovanna Monteiro Rocha - 62320643 [cite: 3]
* [cite_start]Hugo Gonçalves Costa - 62321289 [cite: 3]
* [cite_start]Yasmim Vitória Soares Pereira - 62313109 [cite: 4, 5]

## 3. The Problem: The Client's Perspective

Currently, anyone wishing to build or renovate faces significant challenges:
* **Lack of Time:** Difficulty managing the bureaucratic processes of documentation and licensing.
* **Finding Professionals:** Trouble finding reliable and qualified professionals.
* **Budgeting Issues:** Wide variations in quotes and a lack of clarity on final costs.
* **Lack of Transparency:** Insecurity regarding the quality of service, adherence to deadlines, and monitoring the project's progress.

While there is constant demand for construction and renovation, the process is generally perceived as complicated, time-consuming, and fraught with unforeseen issues.

## 4. The Solution: Proposed Platform

The team proposes the creation of a web platform that connects clients with construction professionals, centralizing the entire process in a practical and transparent manner.

The final system will resolve the client's main problems by:
* **Simplifying the Process:** Eliminating the client's insecurity and bureaucratic burdens.
* **Centralizing Information:** Providing a single hub for communication, documentation, and project tracking.
* **Increasing Transparency:** Offering clear insights into timelines, costs, and project stages.
* **Building Trust:** Positioning the company as a modern, reliable, and practical solution in the construction market.

## 5. Key Features

Based on client needs and the proposed solution, the platform will include:

* **User Registration:** Profiles for both clients and professionals (engineers, architects, construction teams).
* [cite_start]**Pre-defined Packages:** Clients can select from medium, high, and luxury packages with clear scopes and pricing[cite: 9, 13]. This simplifies decision-making and provides cost clarity.
* [cite_start]**Online Project Dashboard:** A dashboard for clients to track the progress of their project in real-time, including timelines, completed stages, and pending tasks, thereby increasing confidence[cite: 21].
* [cite_start]**Document & License Management:** The platform will handle the uploading, organization, and status tracking of all necessary documentation, freeing the client from bureaucratic hurdles[cite: 19].
* **Integrated Communication:** A direct channel (such as an internal chat) for seamless communication between the client and the responsible team, ensuring that questions and adjustments are handled quickly.
* **Clear Budgeting and Online Payments:** Transparent presentation of costs and the convenience of making payments directly through the platform to avoid financial surprises.

---

## 6. System Requirements

### 6.1. Functional Requirements

[cite_start]The following functionalities are specified for the platform, categorized by priority: `(M) Must / (S) Should / (C) Could`[cite: 22].

| ID | Priority | Description |
| :--- | :---: | :--- |
| FR-001 | M | [cite_start]User registration (client and admin) requiring name, CPF, email, contact phone, and address[cite: 12]. |
| FR-002 | M | [cite_start]A page to list packages (medium/high/luxury) with description, scope, estimated timeline, base price, and the assigned team of professionals[cite: 13]. |
| FR-003 | M | [cite_start]A detailed package page highlighting deliverables and an example timeline[cite: 14]. |
| FR-004 | M | [cite_start]A general FAQ/Informational page, including basic information about all project stages[cite: 15]. |
| FR-005 | C | [cite_start]An institutional "About Us" page (mission, vision, values, company credibility)[cite: 16]. |
| FR-006 | M | [cite_start]A request form with client data, address, project type, intended package, and initial attachments[cite: 17]. |
| FR-007 | M | [cite_start]Generation of a protocol number upon completion of the initial purchase process[cite: 18]. |
| FR-008 | M | [cite_start]Document upload/download (`PDF/JPG/PNG`) with simple versioning[cite: 19]. |
| FR-009 | C | [cite_start]A quick contact area (simple form or link to WhatsApp/phone)[cite: 20]. |
| FR-010 | M | [cite_start]A simple dashboard for administrators to view new requests with basic filters[cite: 21]. |

### 6.2. Non-Functional Requirements

The following technical and quality requirements are mandatory for the system.

| ID | Priority | Description |
| :--- | :---: | :--- |
| NFR-001 | M | [cite_start]The system must be responsive (desktop and mobile)[cite: 25]. |
| NFR-002 | M | [cite_start]Page load response time should not exceed 3 seconds on stable connections[cite: 26, 27]. |
| NFR-003 | M | [cite_start]Minimum availability of 99% during business hours (08h-18h)[cite: 28]. |
| NFR-004 | M | [cite_start]The interface must be intuitive, modern, and have minimum accessibility (use of labels, adequate contrast, simple navigation)[cite: 29, 30]. |
| NFR-005 | M | [cite_start]Passwords must have a minimum of 8 characters[cite: 31]. |
| NFR-006 | M | [cite_start]The system's default language must be Portuguese-BR[cite: 32]. |
| NFR-007 | M | [cite_start]The system must partially follow WCAG 2.1 level AA guidelines (at a minimum, provide alternative text for images)[cite: 33, 34]. |

---

## 7. Data Models

### 7.1. Conceptual Model

The system operates around three core concepts: **Users**, **Projects**, and **Packages**.

* A **User** can be a `Client` or an `Admin`. Clients initiate projects, while Admins manage the platform's content and requests.
* A **Package** represents a pre-defined construction service (e.g., "Luxury Renovation"). It has a defined scope, base price, and typical timeline.
* A **Project** is created when a `Client` requests a `Package`. The project will contain all associated information, including the client's details, address, chosen package, documents, status updates, and communication history. It links the client to the team of professionals assigned to that service tier.

### 7.2. Entity-Relationship Model (Basic)


