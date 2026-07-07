# 00-MASTER_AGENT_GUIDE.md

> Fonte única de verdade (Single Source of Truth) do projeto
> **Certikyndo**.
>
> Este documento governa todas as decisões do GitHub Copilot Agent
> durante todo o ciclo de vida do projeto.

------------------------------------------------------------------------

# REGRA Nº 1

Antes de executar QUALQUER tarefa:

1.  Leia integralmente este documento.
2.  Considere-o como a documentação oficial.
3.  Não recrie regras já existentes.
4.  Execute apenas o escopo solicitado.
5.  Preserve compatibilidade com todo o projeto.
6.  Atualize a documentação afetada ao concluir.
7.  Execute autoauditoria antes de encerrar.

Nenhum prompt posterior substitui este documento; eles apenas
complementam a fase solicitada.

------------------------------------------------------------------------

# DOCUMENTAÇÃO PADRÃO

    docs/
    │
    ├── 00-MASTER_AGENT_GUIDE.md
    ├── 01-ARCHITECTURE.md
    ├── 02-CODING_STANDARDS.md
    ├── 03-DESIGN_SYSTEM.md
    ├── 04-CONTENT_MODEL.md
    ├── 05-FEATURES.md
    ├── 06-DATABASE.md
    ├── 07-SEO.md
    ├── 08-SECURITY.md
    ├── 09-PERFORMANCE.md
    ├── 10-TESTING.md
    ├── 11-DEPLOY.md
    ├── 12-OBSERVABILITY.md
    ├── 13-ROADMAP.md
    └── CHANGELOG.md

Sempre consulte somente os documentos relevantes para a tarefa atual.

------------------------------------------------------------------------

# OBJETIVO

Construir inicialmente uma Landing Page para **Certikyndo**,
preparada desde o início para evoluir para uma plataforma SaaS.

Escopo futuro previsto:

-   Landing Page
-   Blog
-   CMS
-   CRM
-   Área do Cliente
-   Painel Administrativo
-   Gestão de Pedidos
-   Analytics
-   Integrações
-   API
-   Autenticação
-   Uploads
-   Notificações

Nenhuma decisão pode impedir essa evolução.

------------------------------------------------------------------------

# STACK

-   Next.js 15
-   React 19
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Framer Motion
-   Zod
-   React Hook Form
-   Supabase
-   PostgreSQL
-   pnpm
-   ESLint
-   Prettier
-   Husky
-   lint-staged
-   Commitlint

------------------------------------------------------------------------

# PRINCÍPIOS

-   Clean Architecture
-   Feature First
-   SOLID
-   DRY
-   KISS
-   Separation of Concerns
-   Composition over Inheritance

------------------------------------------------------------------------

# CAMADAS

Infrastructure

Domain

Application

Presentation

Shared

Nunca inverter dependências.

------------------------------------------------------------------------

# ESTRUTURA

src/

-   app
-   features
-   shared
-   components
-   hooks
-   providers
-   services
-   repositories
-   config
-   constants
-   lib
-   types
-   utils
-   styles
-   assets

Raiz:

-   docs
-   public
-   scripts
-   tests

------------------------------------------------------------------------

# REGRAS

Nunca:

-   duplicar código
-   usar any
-   usar ts-ignore
-   deixar texto hardcoded
-   criar componente sem reutilização
-   alterar código estável fora do escopo

Sempre:

-   procurar arquivo existente antes de criar outro
-   reutilizar componentes
-   centralizar configurações
-   tipar tudo
-   documentar alterações
-   manter baixo acoplamento

------------------------------------------------------------------------

# ORDEM DAS FASES

1.  Bootstrap
2.  Arquitetura
3.  Foundation Layer
4.  Configuration & Content
5.  UI Composition
6.  Business Components
7.  Architecture Validation
8.  Landing Page
9.  SEO
10. Performance
11. Supabase
12. Testes
13. Segurança
14. Observabilidade
15. Produção
16. Auditoria Final
17. Deploy

Uma fase só inicia quando a anterior estiver aprovada.

------------------------------------------------------------------------

# CRITÉRIOS DE ACEITE

Obrigatórios ao final de cada fase:

-   Build sem erros
-   Typecheck sem erros
-   Lint sem erros
-   Sem warnings relevantes
-   Sem código duplicado
-   Sem imports mortos
-   Sem arquivos órfãos
-   Documentação atualizada

------------------------------------------------------------------------

# AUTOAUDITORIA

Antes de concluir qualquer tarefa verificar:

-   Arquitetura
-   Tipagem
-   Performance
-   SEO
-   Acessibilidade
-   Segurança
-   Responsabilidades
-   Duplicações
-   Dead code
-   Nomenclatura
-   Consistência

Se houver problema, corrigir e repetir a auditoria.

------------------------------------------------------------------------

# CONSUMO DE CONTEXTO

Para economizar contexto do Copilot:

-   Nunca repetir regras deste documento.
-   Referenciar apenas a fase atual.
-   Ler somente a documentação relacionada.
-   Evitar reescrever arquivos completos quando pequenas alterações
    resolverem.
-   Preservar APIs públicas de componentes.

------------------------------------------------------------------------

# SAÍDA ESPERADA

Ao término do projeto:

-   Estrutura pronta para produção.
-   Escalável.
-   Documentada.
-   Testável.
-   Preparada para evolução sem reorganização significativa.
