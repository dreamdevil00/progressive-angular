export const appData = {
  menu: {
    text: '主导航',
    group: true,
    children: [
      {
        text: '仪表盘',
        link: '/dashboard',
        icon: 'icon-speedometer',
        children: [{ text: '关于', link: '/dashboard/about', icon: 'icon-info' }]
      },
      {
        text: '个人中心',
        link: '/personal-center',
        icon: 'icon-user',
        children: [
          { text: '账户', link: '/personal-center/account', icon: 'icon-user' },
          { text: '我的工区', link: '/personal-center/sites', icon: 'icon-bag' }
        ]
      },
      {
        text: '项目资源',
        link: '/resource',
        icon: 'icon-share',
        children: [
          { text: '查询', link: '/resource/search', icon: 'icon-magnifier' }
        ]
      },
      {
        text: '工区创建',
        link: '/workflow/creation',
        icon: 'icon-fire',
        children: [
          { text: 'A1工区', link: '/workflow/creation/a1', icon: 'icon-pin' },
          { text: '汇交工区', link: '/workflow/creation/hj', icon: 'icon-pin' }
        ]
      },
      {
        text: '数据质控',
        link: '/workflow/qualitycheck',
        icon: 'icon-shield',
        children: [
          { text: '结构化数据', link: '/workflow/qualitycheck/strctured', icon: 'icon-pin' },
          {
            text: '非结构化数据',
            link: '/workflow/qualitycheck/unstructured',
            icon: 'icon-pin'
          }
        ]
      },
      {
        text: '数据归档',
        link: '/workflow/arch/arch',
        icon: 'icon-tag'
      },
      {
        text: '数据同步',
        link: '/workflow/sync/sync',
        icon: 'icon-equalizer'
      },
      {
        text: '工区操作',
        link: '/workflow/operation',
        icon: 'icon-wrench',
        children: [{ text: '删除工区', link: '/workflow/operation/delete', icon: 'icon-trash' }]
      },
      {
        text: '日志',
        link: '/logs',
        icon: 'icon-event',
        children: [
          { text: '登录日志', link: '/logs/login', icon: 'icon-event' },
          { text: '同步日志', link: '/logs/sync', icon: 'icon-event' },
          { text: '操作日志', link: '/logs/operation', icon: 'icon-event' }
        ]
      },
      {
        text: '数据统计',
        link: '/statistics',
        icon: 'icon-chart',
        children: [
          { text: '统计1', link: '/statistics/a', icon: 'icon-chart' },
          { text: '统计2', link: '/statistics/b', icon: 'icon-chart' }
        ]
      },
      {
        text: '审核管理',
        link: '/review',
        icon: 'icon-eye',
        children: [
          { text: '注册审核', link: '/review/register', icon: 'icon-eye' },
          { text: '下载审核', link: '/review/download', icon: 'icon-eye' }
        ]
      },
      {
        text: '系统配置',
        link: '/system',
        icon: 'icon-settings',
        children: [
          { text: '用户配置', link: '/system/users', icon: 'icon-people' },
          { text: '存储配置', link: '/system/storage', icon: 'fa fa-database' }
        ]
      },
      { text: '专业软件', link: '/software', icon: 'icon-cursor' }
    ]
  }
};
