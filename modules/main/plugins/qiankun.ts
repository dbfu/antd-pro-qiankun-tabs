import { IApi } from '@umijs/max';

export default (api: IApi) => {
  api.describe({
    key: 'qiankunNew',
    config: {
      schema({ zod }) {
        return zod
          .object({
            slave: zod.record(zod.any()),
            master: zod.record(zod.any()),
            externalQiankun: zod.boolean(),
          })
          .deepPartial();
      },
    },
  });

  api.addRuntimePluginKey(() => ['qiankunNew']);

  api.registerPlugins([
    require.resolve('./qiankun/master.ts'),
  ]);
};
