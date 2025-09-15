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

---

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

---

## 7. Modelos de Dados

### 7.1. Modelo Conceitual

O sistema opera em torno de três conceitos centrais: **Usuários**, **Projetos** e **Pacotes**.

* Um **Usuário** pode ser um `Cliente` ou `Admin`. Clientes iniciam projetos, enquanto Admins gerenciam o conteúdo e as solicitações da plataforma.
* Um **Pacote** representa um serviço de construção pré-definido (ex: "Reforma de Luxo"), com escopo, preço base e cronograma definidos.
* Um **Projeto** é criado quando um `Cliente` solicita um `Pacote`. O projeto conterá todas as informações associadas, incluindo dados do cliente, endereço, pacote escolhido, documentos, atualizações de status e histórico de comunicação. Ele conecta o cliente à equipe de profissionais designada.

https://github.com/dancoutto/easingLiving/releases/download/image/Captura.de.tela.2025-09-15.205254.png
sha256:627bb0dfa5e95bb4aa904bd821866444c5a0a70c4b01502f8d0cc9aa6f49e852

### 7.2. Modelo Entidade-Relacionamento (Básico)

https://github.com/dancoutto/easingLiving/releases/download/image/Captura.de.tela.2025-09-15.205306.png

__________________________________________________________________________________________________________________________________________
