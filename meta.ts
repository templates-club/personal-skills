export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * 从文档生成 skill 的外部仓库（无现成 skills，需从 docs 生成）
 * 克隆到 sources/{name}，从 docs 生成到 skills/{name}
 */
export const submodules: Record<string, string> = {
  // 示例：Vue 文档
  // vue: 'https://github.com/vuejs/docs',
  // 按需添加：nuxt, vite, vitest, pinia, vitepress, unocss, pnpm 等
}

/**
 * 已有 skills 的外部仓库（直接同步其 skills/ 目录）
 * 克隆到 vendor/{name}，将指定 skills 同步到 skills/{outputName}
 */
export const vendors: Record<string, VendorSkillMeta> = {
  // 示例：同步 vueuse/skills 的 vueuse-functions
  // 'vueuse': {
  //   official: true,
  //   source: 'https://github.com/vueuse/skills',
  //   skills: { 'vueuse-functions': 'vueuse-functions' },
  // },
}

/**
 * 手写、不依赖外部仓库的 skills 目录名
 */
export const manual: string[] = [
  // 例如: 'antfu',
]
