import { MicroAppWithMemoHistory, useLocation, useOutlet as useChildren } from '@umijs/max'
import { qiankunConfig } from '@/qiankun-config';

export function useOutlet() {
  const { pathname } = useLocation();

  const children = useChildren();

  const [, moduleName] = pathname.split('/');

  // 如果没有匹配到子模块，就使用主模块的useOutlet
  if (!qiankunConfig.apps.some(app => app.name === moduleName)) {
    return children;
  }


  return (
    <MicroAppWithMemoHistory id={pathname} name={moduleName} url={pathname} />
  )
}
