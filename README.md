# EasingLiving - README do Projeto

## 1. Visão Geral do Projeto

**EasingLiving** é uma plataforma web projetada para facilitar a vida de clientes interessados em realizar obras residenciais ou comerciais. O objetivo final do projeto é atuar como um intermediador entre o cliente e as equipes responsáveis pela execução da obra — engenheiros, arquitetos e prestadores de serviço.

A plataforma oferecerá pacotes de construção pré-definidos (padrão médio, alto e de luxo) e cuidará de toda a parte burocrática envolvida, como documentação, licenciamento e o acompanhamento do andamento da obra. O objetivo é garantir praticidade, transparência e segurança para o cliente.

## 2. Equipe

* Daniel Braga Alves do Couto - 62312771
* Gabriel Mendes Bitencourt - 62321162
* Giovanna Monteiro Rocha - 62320643
* Hugo Gonçalves Costa - 62321289
* Yasmim Vitória Soares Pereira - 62313109

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

## 6. Requisitos do Sistema
### 6.1. Requisitos Funcionais

As seguintes funcionalidades são especificadas para a plataforma, categorizadas por prioridade: `(M) Must (Obrigatório) / (S) Should (Desejável) / (C) Could (Opcional)`.

| FR-001 | M | Cadastro de usuário (cliente e admin) exigindo nome, CPF, e-mail, telefone de contato e endereço. |
| FR-002 | M | Página para listar pacotes (médio/alto/luxo) com: descrição, escopo, prazo estimado, preço base, equipe de engenheiros, arquitetos e afins do projeto. |
| FR-003 | M | Página de detalhes do pacote com destaque a entregáveis e timeline exemplo. |
| FR-004 | M | Página de FAQ/Informativo gerais, incluindo informações básicas sobre todas as etapas do que seria o projeto. |
| FR-005 | C | Página institucional "Sobre nós" (missão, visão, valores, credibilidade da empresa). |
| FR-006 | M | Formulário de solicitação com dados do cliente, endereço, tipo de obra, pacote pretendido e anexos iniciais. |
| FR-007 | M | Geração de número de protocolo ao concluir o processo inicial de compra. |
| FR-008 | M | Upload/download de documentos (PDF/JPG/PNG) com versionamento simples. |
| FR-009 | C | Área de contato rápido (formulário simples ou link para WhatsApp/telefone). |
| FR-010 | M | Dashboard simples para administrador visualizar novas solicitações com filtros básicos. |

### 6.2. Requisitos Não Funcionais

Os seguintes requisitos técnicos e de qualidade são obrigatórios para o sistema.

| ID | Prioridade | Descrição |
| NFR-001 | M | O sistema deve ser responsivo (desktop e mobile). |
| NFR-002 | M | O tempo de resposta para carregamento de páginas não deve exceder 3 segundos em conexões estáveis. |
| NFR-003 | M | Disponibilidade mínima de 99% em horário comercial (08h-18h). |
| NFR-004 | M | Interface intuitiva, moderna e com acessibilidade mínima (uso de labels, contraste adequado, navegação simples). |
| NFR-005 | M | Senha com no mínimo 8 caracteres. |
| NFR-006 | M | O sistema deve estar em português-BR por padrão. |
| NFR-007 | M | Deve seguir parcialmente as diretrizes WCAG 2.1 nível AA (no mínimo apresentar textos alternativos em imagens). |

## 7. Modelos de Dados
### 7.1. Modelo Conceitual

O sistema opera em torno de três conceitos centrais: **Usuários**, **Projetos** e **Pacotes**.

* Um **Usuário** pode ser um `Cliente` ou `Admin`. Clientes iniciam projetos, enquanto Admins gerenciam o conteúdo e as solicitações da plataforma.
* Um **Pacote** representa um serviço de construção pré-definido (ex: "Reforma de Luxo"), com escopo, preço base e cronograma definidos.
* Um **Projeto** é criado quando um `Cliente` solicita um `Pacote`. O projeto conterá todas as informações associadas, incluindo dados do cliente, endereço, pacote escolhido, documentos, atualizações de status e histórico de comunicação. Ele conecta o cliente à equipe de profissionais designada.

---

# EasingLiving - Project README

## 1. Project Overview

**EasingLiving** is a web platform designed to make life easier for clients interested in residential or commercial construction. The project's ultimate goal is to act as an intermediary between the client and the teams responsible for executing the project—engineers, architects, and service providers.

The platform will offer pre-defined construction packages (mid-standard, high-end, and luxury) and will handle all the bureaucratic aspects involved, such as documentation, licensing, and progress monitoring. The goal is to ensure convenience, transparency, and security for the client.

## 2. Team

* Daniel Braga Alves do Couto - 62312771
* Gabriel Mendes Bitencourt - 62321162
* Giovanna Monteiro Rocha - 62320643
* Hugo Gonçalves Costa - 62321289
* Yasmim Vitória Soares Pereira - 62313109

## 3. The Problem: The Client's Perspective

Currently, those looking to build or renovate face many challenges:
* **Lack of Time:** Difficulty dealing with bureaucratic documentation and licensing.
* **Search for Professionals:** Difficulty finding trustworthy and qualified professionals.
* **Budgets:** Excessive variations in budgets and lack of clarity about final costs.
* **Lack of Transparency:** Insecurity regarding the quality of service, adherence to deadlines, and project monitoring.

Despite the constant demand for construction and renovation projects, the process is still seen as complicated, time-consuming, and full of unexpected issues.

## 4. The Solution: Proposed Platform

The team proposes the creation of a web platform that connects clients with construction professionals, offering pre-defined construction packages and centralizing all bureaucratic processes in a practical and transparent manner.

The proposed system will simplify the contracting and construction execution process, eliminating uncertainty and bureaucracy for the client. The platform centralizes information, increases transparency, reduces communication errors, and will help the company position itself as a reliable, modern, and practical solution, strengthening the relationship of trust with the market.

## 5. Main Features

Based on the client's needs and the proposed solution, the platform will include:

* **Client and Professional Registration:** Profiles for clients and service providers (engineers, architects, and construction teams). * **Construction Package Selection:** The client can choose from predefined packages (medium, high, luxury), with clear pricing and scope details to facilitate decision-making.
* **Online Monitoring Dashboard:** A dashboard that allows the client to track the progress of the project in real time, including deadlines and completed stages, increasing confidence in the service.
* **Document and License Management:** The platform will organize all necessary documentation, with uploads and status tracking, preventing the client from wasting time on bureaucracy.
* **Integrated Communication:** A direct communication channel to ensure that questions and adjustments are resolved quickly between the client and the team.
* **Online Estimating and Payments:** Clear presentation of costs, with the convenience of making payments through the platform itself to avoid financial surprises.

## 6. System Requirements
### 6.1. Functional Requirements

The following functionalities are specified for the platform, categorized by priority: (M) Must / (S) Should / (C) Could.

| FR-001 | M | User registration (client and admin) requiring name, CPF, email, contact phone number, and address. |
| FR-002 | M | Page to list packages (medium/high/luxury) with: description, scope, estimated deadline, base price, project team of engineers, architects, and related personnel. |
| FR-003 | M | Package details page highlighting deliverables and a sample timeline. |
| FR-004 | M | General FAQ/Information page, including basic information on all stages of the project. |
| FR-005 | C | Institutional "About Us" page (mission, vision, values, company credibility). |
| FR-006 | M | Request form with client data, address, type of work, desired package, and initial attachments. |
| FR-007 | M | Generation of protocol number upon completion of the initial purchase process. |
| FR-008 | M | Upload/download documents (PDF/JPG/PNG) with simple versioning. |
| FR-009 | C | Quick contact area (simple form or link to WhatsApp/phone). |
| FR-010 | M | Simple dashboard for administrators to view new requests with basic filters. |

### 6.2. Non-Functional Requirements

The following technical and quality requirements are mandatory for the system.

| ID | Priority | Description |
| NFR-001 | M | The system must be responsive (desktop and mobile). |
| NFR-002 | M | Response time for page loading must not exceed 3 seconds on stable connections. |
| NFR-003 | M | Minimum availability of 99% during business hours (8:00 AM - 6:00 PM). |
| NFR-004 | M | Intuitive, modern interface with minimal accessibility (use of labels, adequate contrast, simple navigation). |
| NFR-005 | M | Password with at least 8 characters. |
| NFR-006 | M | The system must be in Brazilian Portuguese by default. |
| NFR-007 | M | Must partially follow WCAG 2.1 level AA guidelines (at least present alternative text in images). |

## 7. Data Models
### 7.1. Conceptual Model

The system operates around three core concepts: **Users**, **Projects**, and **Packages**.

* A **User** can be a `Client` or `Admin`. Clients initiate projects, while Admins manage the platform's content and requests.
* A **Package** represents a predefined construction service (e.g., "Luxury Renovation"), with a defined scope, base price, and schedule.
* A **Project** is created when a Client requests a `Package`. The project will contain all associated information, including client details, address, chosen package, documents, status updates, and communication history. It connects the client to the designated team of professionals.
