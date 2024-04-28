
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ppr: true, // 自动将Suspend组件包含的内容 切分为前端渲染
  },
}

module.exports = nextConfig;
