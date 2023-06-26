export const categoryItems = {
  children: [
    {
      // 名称
      text: '找工人',
      value: '1',
      children: [
        {
          text: '长工',
          value: '1-1',
          children: [
            {
              text: '开发',
              value: '1-1-1',
              children: [
                {
                  text: '设计师',
                  value: '1-1-1-1',
                  data: {
                    component: 'default',
                    params: {
                      key: '我是设计师模块特有的数据'
                    }
                  }
                }, {
                  text: '设计助理',
                  value: '1-1-1-2',
                  data: {
                    params: {},
                    component: 'custom'
                  }
                }, {
                  text: '辅料员',
                  value: '1-1-1-3',
                  data: {
                    params: {}
                  }
                }, {
                  text: '制版工',
                  value: '1-1-1-4',
                  data: {
                    params: {}
                  }
                }, {
                  text: '车版工',
                  value: '1-1-1-5',
                  data: {
                    params: {}
                  }
                }
              ]
            },
            {
              text: '行政管理',
              value: '1-1-2',
              children: [
                {
                  text: '厂长',
                  value: '1-1-2-1',
                  data: {
                    params: {}
                  }
                }, {
                  text: '车间管理',
                  value: '1-1-2-2',
                  data: {
                    params: {}
                  }
                }, {
                  text: '尾部主管',
                  value: '1-1-2-3',
                  data: {
                    params: {}
                  }
                }, {
                  text: '跟单',
                  value: '1-1-2-4',
                  data: {
                    params: {}
                  }
                }, {
                  text: '文员',
                  value: '1-1-2-5',
                  data: {
                    params: {}
                  }
                }, {
                  text: '财会',
                  value: '1-1-2-6',
                  data: {
                    params: {}
                  }
                }
              ]
            }
          ]
        },
        {
          text: '临工',
          value: '1-2',
          children: [
            {
              text: '裁床',
              value: '1-2-1'
            }, {
              text: '尾部（整烫）',
              value: '1-2-2'
            }, {
              text: '尾部（包装）',
              value: '1-2-3'
            }, {
              text: '平车',
              value: '1-2-4'
            }, {
              text: '四线',
              value: '1-2-5'
            }, {
              text: '手工',
              value: '1-2-6'
            }, {
              text: '成件',
              value: '1-2-7'
            }, {
              text: '车板工',
              value: '1-2-8'
            }
          ]
        }
      ]
    },
    {
      text: '直播',
      value: '2',
      children: [
        {
          text: '找资源',
          value: '2-1'
        }, {
          text: '公司单',
          value: '2-2'
        }, {
          text: '招主播、主播',
          value: '2-3'
        }, {
          text: '招运营',
          value: '2-4'
        }, {
          text: '招剪辑、美工',
          value: '2-5'
        }
      ]
    },
    {
      text: '专技、工艺',
      value: '3',
      children: [
        {
          text: '绣工',
          value: '3-1'
        }, {
          text: '印花',
          value: '3-2'
        }, {
          text: '打板',
          value: '3-3'
        }, {
          text: '打条',
          value: '3-4'
        }, {
          text: '钉扣锁眼',
          value: '3-5'
        }, {
          text: '压折',
          value: '3-6'
        }
      ]
    }
  ]
}
