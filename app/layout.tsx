//  layout 为根布局
// 导入全局样式
import '@/app/ui/global.css';
// 导入字体
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* inter.className ??? 这样就能应用到整体了？ */}
      {/* antialiased： Tailwind的平滑字体的类 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
