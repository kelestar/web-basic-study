const formItem = [
  {
    prop: "nativePlace",
    label: "籍贯",
    width: "calc(100% - 140px)",
    span: 24,
    disabled: false,
    moduleType: "cascader",
    editOptions: {
      clearable: true,
      filterable: true,
    },
    moduleOption: [
      {
        label: "福建",
        value: "fujian",
        children: [
          {
            label: "福州",
            value: "fujian-fuzhou",
            children: [
              { label: "鼓楼区", value: "fujian-fuzhou-gulou" },
              { label: "马尾区", value: "fujian-fuzhou-mawei" },
            ],
          },
        ],
      },
    ],
  },
  {
    prop: "sex",
    label: "性别",
    width: "calc(100% - 140px)",
    span: 8,
    disabled: false,
    moduleType: "basicDict",
    editOptions: { clearable: true }, //可选
    moduleOption: [
      { dictDataName: "男", dictDataCode: "male" },
      { dictDataName: "女", dictDataCode: "female" },
    ],
  },
  // moduleType=='input',默认类型
  {
    prop: "name",
    label: "姓名",
    width: "calc(100% - 140px)",
    span: 8,
    disabled: false,
    moduleType: "input",
    editOptions: { clearable: true }, //可选
  },
  {
    prop: "age",
    label: "年龄",
    width: "calc(100% - 140px)",
    span: 8,
    disabled: false,
    moduleType: "number",
    editOptions: { clearable: true }, //可选
  },
  {
    prop: 'dept',
    label: '部门',
    width: "calc(100% - 140px)",
    span: 8,
    disabled: false,
    moduleType: "org",
    editOptions: { clearable: true }, //可选
  },
  {
    prop: 'dept',
    label: '部门',
    width: "calc(100% - 140px)",
    span: 8,
    disabled: false,
    moduleType: "org",
    editOptions: { clearable: true }, //可选
    moduleOption: [
      {
        orgId: '003501',
        orgName: '鼓楼区',
        children: [
          {
            label: '洪山镇',
            value: '003501003',
            children: [
              {
                label: 'XX街道居委会',
                value: '003501003001',
              }
            ]
          }
        ]
      }
    ]
  },
];
