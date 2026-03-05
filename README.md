# Skills

A curated collection of [Agent Skills](https://agentskills.io/home). This repository follows the architecture of [antfu/skills](https://github.com/antfu/skills)—using git submodules to connect external documentation and skill repositories, then generating or syncing skills into this repo.

> [!IMPORTANT]
> This is a proof-of-concept project for generating agent skills from source documentation and keeping them in sync. Feedback and contributions are welcome.

## Installation

```bash
pnpx skills add <this-repo> --skill='*'
```

or clone this repository and reference the `skills/` directory (e.g. symlink into `.cursor/skills` or your agent's skills path). Learn more about the CLI at [skills](https://github.com/vercel-labs/skills).

## Skills

This collection includes skills from different sources and scopes. Add projects in `meta.ts`, then run `pnpm init` and `pnpm sync` to pull and sync.

### Hand-maintained Skills

> Opinionated

Manually maintained with preferred tools, setup conventions, and best practices. Listed in `meta.ts` under `manual`.

| Skill | Description |
|-------|-------------|
| *(Add entries in meta.ts and create skill directories under skills/)* | |

### Skills Generated from Official Documentation

> Unopinionated but with tilted focus (e.g. TypeScript, ESM, modern stacks)

Generated from official documentation. Configure in `meta.ts` under `submodules`, then run `pnpm init` to clone source repos into `sources/`. Generate skill files under `skills/{project}/` from `sources/{project}/docs/`.

| Skill | Description | Source |
|-------|-------------|--------|
| *(Add submodule entries in meta.ts, run pnpm init, then generate skills)* | | |

### Vendored Skills

Synced from external repositories that maintain their own skills. Configure in `meta.ts` under `vendors`, then run `pnpm init` and `pnpm sync`.

| Skill | Description | Source |
|-------|-------------|--------|
| *(Add vendor entries in meta.ts, run pnpm init and pnpm sync)* | | |

## FAQ

### What Makes This Collection Different?

This project uses git submodules to directly reference source documentation and existing skill repos. That provides reliable context and lets skills stay up-to-date with upstream over time.

The layout is flexible: you can use it as a template to build your own skill collection. See [AGENTS.md](AGENTS.md) for workflows and file formats.

### Skills vs llms.txt vs AGENTS.md

The value of skills is being **shareable** and **on-demand**. Shareable prompts are easier to manage and reuse across projects. On-demand means skills can be pulled in when needed, beyond what fits in one agent context.

AGENTS.md loads everything upfront so agents always see it; skills can have false negatives when the agent doesn’t pull them. Skills are a standardized format for agents—plain markdown. If you want certain skills to always apply, reference them in your AGENTS.md.

## Generate Your Own Skills

Fork or clone this repository to create your own collection.

1. Fork or clone this repository
2. Install dependencies: `pnpm install`
3. Update `meta.ts` with your projects and skill sources (submodules and/or vendors)
4. Run `pnpm cleanup` to remove existing submodules and skills (optional, if reusing the template)
5. Run `pnpm init` to clone the submodules into `sources/` and `vendor/`
6. Run `pnpm sync` to sync vendored skills into `skills/`
7. For generated skills (Type 1), ask your agent to generate skills from `sources/{project}/docs/` (recommended one project at a time)

See [AGENTS.md](AGENTS.md) for detailed generation guidelines.

## License

Skills and the scripts in this repository are MIT licensed.

Vendored skills from external repositories retain their original licenses—see each skill directory for details.
