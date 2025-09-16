## 1. Requisitos do Sistema
### 1.1. Requisitos Funcionais

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

### 1.2. Requisitos Não Funcionais

Os seguintes requisitos técnicos e de qualidade são obrigatórios para o sistema.

| ID | Prioridade | Descrição |
| NFR-001 | M | O sistema deve ser responsivo (desktop e mobile). |
| NFR-002 | M | O tempo de resposta para carregamento de páginas não deve exceder 3 segundos em conexões estáveis. |
| NFR-003 | M | Disponibilidade mínima de 99% em horário comercial (08h-18h). |
| NFR-004 | M | Interface intuitiva, moderna e com acessibilidade mínima (uso de labels, contraste adequado, navegação simples). |
| NFR-005 | M | Senha com no mínimo 8 caracteres. |
| NFR-006 | M | O sistema deve estar em português-BR por padrão. |
| NFR-007 | M | Deve seguir parcialmente as diretrizes WCAG 2.1 nível AA (no mínimo apresentar textos alternativos em imagens). |
