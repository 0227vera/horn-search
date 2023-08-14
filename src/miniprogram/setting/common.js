export const categoryItems = {
  children: [
    {
      // 名称
      text: '找工人',
      value: '1',
      children: [
        {
          text: '裁床',
          value: '1-1'
        }, {
          text: '尾部(整烫)',
          value: '1-2'
        }, {
          text: '尾部(包装)',
          value: '1-3'
        }, {
          text: '平车',
          value: '1-4'
        }, {
          text: '四线',
          value: '1-5'
        }, {
          text: '手工',
          value: '1-6'
        }, {
          text: '成件',
          value: '1-7'
        }, {
          text: '车板工',
          value: '1-2-8'
        }
      ]
    },
    {
      text: '自定义',
      value: '10'
    }
    // {
    //   text: '直播',
    //   value: '2',
    //   children: [
    //     {
    //       text: '找资源',
    //       value: '2-1'
    //     }, {
    //       text: '公司单',
    //       value: '2-2'
    //     }, {
    //       text: '招主播、主播',
    //       value: '2-3'
    //     }, {
    //       text: '招运营',
    //       value: '2-4'
    //     }, {
    //       text: '招剪辑、美工',
    //       value: '2-5'
    //     }
    //   ]
    // },
    // {
    //   text: '专技、工艺',
    //   value: '3',
    //   children: [
    //     {
    //       text: '绣工',
    //       value: '3-1'
    //     }, {
    //       text: '印花',
    //       value: '3-2'
    //     }, {
    //       text: '打板',
    //       value: '3-3'
    //     }, {
    //       text: '打条',
    //       value: '3-4'
    //     }, {
    //       text: '钉扣锁眼',
    //       value: '3-5'
    //     }, {
    //       text: '压折',
    //       value: '3-6'
    //     }
    //   ]
    // }
  ]
}

export const steps = [{
  desc: '已发布',
  status: '1'
}, {
  desc: '已推送',
  status: '2'
}, {
  desc: '已有人呼叫',
  status: '3'
}, {
  desc: '已匹配成功',
  status: '4'
}, {
  desc: '已完成',
  status: '5'
}]
