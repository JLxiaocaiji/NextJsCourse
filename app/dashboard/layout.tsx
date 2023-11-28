import SideNav from '@/app/ui/dashboard/sidenav';

/*
dashboard 中的页面包括其子文件夹中的 页面 将自动嵌套在 <Layout /> 内
*/

// children 是 node 节点, 整体
export default function Layout({ children}: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            {/*
            @media (min-width: 768px) {
                .md\:w-64 {
                }
            }
            */}
            <div className='w-full flex-none md:w-64'>
                <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                { children }
            </div>
        </div>
    )
}