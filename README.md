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

## Generate Your Own Skills

Use this repository as a template to create your own skill collection.

1. **Use this template** — On GitHub, click "Use this template" to create a new repo from this template
2. **Install** — `pnpm install`
3. **Configure** — Update `meta.ts` and `.gitmodules` with your projects and skill sources (submodules and/or vendors)
4. **Generate** — Run `pnpm start` to clone submodules, sync vendored skills, and generate your own repository
5. **Add your own skills** — Place any hand-written or custom output skills in the `skills/` folder

See [AGENTS.md](AGENTS.md) for detailed generation guidelines.

## License

Skills and the scripts in this repository are MIT licensed.

Vendored skills from external repositories retain their original licenses—see each skill directory for details.
