// 添加自定义的 字体
// Inter, Lusitana 在 nodeModules 中
import { Inter, Lusitana } from 'next/font/google'    // 导入 Inter 字体

export const inter = Inter({
    // subset辅助设置，加载子集 latin, 这好像是必须的
    subsets: ['latin']
});

export const lusitana = Lusitana({
    // 字体weight
    weight: ['400', '700'],
    subsets: ['latin']
})