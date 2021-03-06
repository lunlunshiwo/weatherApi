module.exports = {
  getCity() {
    const city = [{
        "country": 1,
        "weaid": 5,
        "cityid": 101010600,
        "simcode": "tongzhou",
        "area_1": "北京",
        "area_2": "通州",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 6,
        "cityid": 101010700,
        "simcode": "changping",
        "area_1": "北京",
        "area_2": "昌平",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 7,
        "cityid": 101010800,
        "simcode": "yanqing",
        "area_1": "北京",
        "area_2": "延庆",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 8,
        "cityid": 101010900,
        "simcode": "fengtai",
        "area_1": "北京",
        "area_2": "丰台",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 9,
        "cityid": 101011000,
        "simcode": "shijingshan",
        "area_1": "北京",
        "area_2": "石景山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 10,
        "cityid": 101011100,
        "simcode": "daxing",
        "area_1": "北京",
        "area_2": "大兴",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 11,
        "cityid": 101011200,
        "simcode": "fangshan",
        "area_1": "北京",
        "area_2": "房山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 12,
        "cityid": 101011300,
        "simcode": "miyun",
        "area_1": "北京",
        "area_2": "密云",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 13,
        "cityid": 101011400,
        "simcode": "mentougou",
        "area_1": "北京",
        "area_2": "门头沟",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 14,
        "cityid": 101011500,
        "simcode": "pinggu",
        "area_1": "北京",
        "area_2": "平谷",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 22,
        "cityid": 101010200,
        "simcode": "haidian",
        "area_1": "北京",
        "area_2": "海淀",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 23,
        "cityid": 101030100,
        "simcode": "tianjin",
        "area_1": "天津",
        "area_2": "城区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 24,
        "cityid": 101030300,
        "simcode": "baodi",
        "area_1": "天津",
        "area_2": "宝坻",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 25,
        "cityid": 101030400,
        "simcode": "dongli",
        "area_1": "天津",
        "area_2": "东丽",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 26,
        "cityid": 101030500,
        "simcode": "xiqing",
        "area_1": "天津",
        "area_2": "西青",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 27,
        "cityid": 101030600,
        "simcode": "beichen",
        "area_1": "天津",
        "area_2": "北辰",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 28,
        "cityid": 101031400,
        "simcode": "tjjixian",
        "area_1": "天津",
        "area_2": "蓟县",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 30,
        "cityid": 101030900,
        "simcode": "jinghai",
        "area_1": "天津",
        "area_2": "静海",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 31,
        "cityid": 101031000,
        "simcode": "jinnan",
        "area_1": "天津",
        "area_2": "津南",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 32,
        "cityid": 101031100,
        "simcode": "binhaixinqu",
        "area_1": "天津",
        "area_2": "滨海新区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 34,
        "cityid": 101030200,
        "simcode": "wuqing",
        "area_1": "天津",
        "area_2": "武清",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 35,
        "cityid": 101030700,
        "simcode": "ninghe",
        "area_1": "天津",
        "area_2": "宁河",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 36,
        "cityid": 101020100,
        "simcode": "shanghai",
        "area_1": "上海",
        "area_2": "城区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 37,
        "cityid": 101020300,
        "simcode": "shbaoshan",
        "area_1": "上海",
        "area_2": "宝山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 38,
        "cityid": 101020500,
        "simcode": "jiading",
        "area_1": "上海",
        "area_2": "嘉定",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 40,
        "cityid": 101020600,
        "simcode": "pudongxinqu",
        "area_1": "上海",
        "area_2": "浦东新区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 41,
        "cityid": 101020800,
        "simcode": "qingpu",
        "area_1": "上海",
        "area_2": "青浦",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 42,
        "cityid": 101020900,
        "simcode": "songjiang",
        "area_1": "上海",
        "area_2": "松江",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 43,
        "cityid": 101021000,
        "simcode": "fengxian",
        "area_1": "上海",
        "area_2": "奉贤",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 44,
        "cityid": 101021100,
        "simcode": "chongming",
        "area_1": "上海",
        "area_2": "崇明",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 45,
        "cityid": 101021200,
        "simcode": "xuhui",
        "area_1": "上海",
        "area_2": "徐汇",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 46,
        "cityid": 101020200,
        "simcode": "minhang",
        "area_1": "上海",
        "area_2": "闵行",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 47,
        "cityid": 101020700,
        "simcode": "jinshan",
        "area_1": "上海",
        "area_2": "金山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 48,
        "cityid": 101090101,
        "simcode": "shijiazhuang",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 49,
        "cityid": 101090301,
        "simcode": "zhangjiakou",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 50,
        "cityid": 101090402,
        "simcode": "chengde",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 51,
        "cityid": 101090501,
        "simcode": "tangshan",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 52,
        "cityid": 101091101,
        "simcode": "qinhuangdao",
        "area_1": "河北",
        "area_2": "秦皇岛",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 53,
        "cityid": 101090701,
        "simcode": "cangzhou",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 54,
        "cityid": 101090801,
        "simcode": "hengshui",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 55,
        "cityid": 101090901,
        "simcode": "xingtai",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 56,
        "cityid": 101091001,
        "simcode": "handan",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 57,
        "cityid": 101090201,
        "simcode": "baoding",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 58,
        "cityid": 101090601,
        "simcode": "langfang",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 59,
        "cityid": 101180101,
        "simcode": "zhengzhou",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 60,
        "cityid": 101180301,
        "simcode": "xinxiang",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 61,
        "cityid": 101180401,
        "simcode": "xuchang",
        "area_1": "河南",
        "area_2": "许昌",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 62,
        "cityid": 101180501,
        "simcode": "pingdingshan",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 63,
        "cityid": 101180601,
        "simcode": "xinyang",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 64,
        "cityid": 101180701,
        "simcode": "nanyang",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 65,
        "cityid": 101180801,
        "simcode": "kaifeng",
        "area_1": "河南",
        "area_2": "开封",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 66,
        "cityid": 101180901,
        "simcode": "luoyang",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 67,
        "cityid": 101181001,
        "simcode": "shangqiu",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 68,
        "cityid": 101181101,
        "simcode": "jiaozuo",
        "area_1": "河南",
        "area_2": "焦作",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 69,
        "cityid": 101181201,
        "simcode": "hebi",
        "area_1": "河南",
        "area_2": "鹤壁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 70,
        "cityid": 101181301,
        "simcode": "puyang",
        "area_1": "河南",
        "area_2": "濮阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 71,
        "cityid": 101181401,
        "simcode": "zhoukou",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 72,
        "cityid": 101181501,
        "simcode": "luohe",
        "area_1": "河南",
        "area_2": "漯河",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 73,
        "cityid": 101181601,
        "simcode": "zhumadian",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 74,
        "cityid": 101181701,
        "simcode": "sanmenxia",
        "area_1": "河南",
        "area_2": "三门峡",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 75,
        "cityid": 101181801,
        "simcode": "jiyuan",
        "area_1": "河南",
        "area_2": "济源",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 76,
        "cityid": 101180201,
        "simcode": "anyang",
        "area_1": "河南",
        "area_2": "安阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 77,
        "cityid": 101220101,
        "simcode": "hefei",
        "area_1": "安徽",
        "area_2": "合肥",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 78,
        "cityid": 101220301,
        "simcode": "wuhu",
        "area_1": "安徽",
        "area_2": "芜湖",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 79,
        "cityid": 101220401,
        "simcode": "huainan",
        "area_1": "安徽",
        "area_2": "淮南",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 80,
        "cityid": 101220501,
        "simcode": "maanshan",
        "area_1": "安徽",
        "area_2": "马鞍山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 81,
        "cityid": 101220601,
        "simcode": "anqing",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 82,
        "cityid": 101220701,
        "simcode": "ahsuzhou",
        "area_1": "安徽",
        "area_2": "宿州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 83,
        "cityid": 101220801,
        "simcode": "ahfuyang",
        "area_1": "安徽",
        "area_2": "阜阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 84,
        "cityid": 101220901,
        "simcode": "bozhou",
        "area_1": "安徽",
        "area_2": "亳州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 85,
        "cityid": 101221001,
        "simcode": "huangshan",
        "area_1": "安徽",
        "area_2": "黄山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 86,
        "cityid": 101221101,
        "simcode": "chuzhou",
        "area_1": "安徽",
        "area_2": "滁州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 87,
        "cityid": 101221201,
        "simcode": "huaibei",
        "area_1": "安徽",
        "area_2": "淮北",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 88,
        "cityid": 101221301,
        "simcode": "tongling",
        "area_1": "安徽",
        "area_2": "铜陵",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 89,
        "cityid": 101221401,
        "simcode": "xuancheng",
        "area_1": "安徽",
        "area_2": "宣城",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 90,
        "cityid": 101221501,
        "simcode": "luan",
        "area_1": "安徽",
        "area_2": "六安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 92,
        "cityid": 101221701,
        "simcode": "chizhou",
        "area_1": "安徽",
        "area_2": "池州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 93,
        "cityid": 101220201,
        "simcode": "bengbu",
        "area_1": "安徽",
        "area_2": "蚌埠",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 94,
        "cityid": 101210101,
        "simcode": "hangzhou",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 95,
        "cityid": 101211101,
        "simcode": "zhoushan",
        "area_1": "浙江",
        "area_2": "舟山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 96,
        "cityid": 101210201,
        "simcode": "huzhou",
        "area_1": "浙江",
        "area_2": "湖州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 97,
        "cityid": 101210301,
        "simcode": "jiaxing",
        "area_1": "浙江",
        "area_2": "嘉兴",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 98,
        "cityid": 101210901,
        "simcode": "jinhua",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 99,
        "cityid": 101210501,
        "simcode": "shaoxing",
        "area_1": "浙江",
        "area_2": "绍兴",
        "area_3": "越城"
      },
      {
        "country": 1,
        "weaid": 100,
        "cityid": 101210601,
        "simcode": "zjtaizhou",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 101,
        "cityid": 101210701,
        "simcode": "wenzhou",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 102,
        "cityid": 101210801,
        "simcode": "zjlishui",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 103,
        "cityid": 101211001,
        "simcode": "zjquzhou",
        "area_1": "浙江",
        "area_2": "衢州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 104,
        "cityid": 101210401,
        "simcode": "ningbo",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 105,
        "cityid": 101040100,
        "simcode": "chongqing",
        "area_1": "重庆",
        "area_2": "城区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 106,
        "cityid": 101040300,
        "simcode": "hechuan",
        "area_1": "重庆",
        "area_2": "合川",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 107,
        "cityid": 101040400,
        "simcode": "nanchuan",
        "area_1": "重庆",
        "area_2": "南川",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 108,
        "cityid": 101040500,
        "simcode": "jiangjin",
        "area_1": "重庆",
        "area_2": "江津",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 110,
        "cityid": 101040700,
        "simcode": "yubei",
        "area_1": "重庆",
        "area_2": "渝北",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 111,
        "cityid": 101040800,
        "simcode": "beibei",
        "area_1": "重庆",
        "area_2": "北碚",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 112,
        "cityid": 101040900,
        "simcode": "banan",
        "area_1": "重庆",
        "area_2": "巴南",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 113,
        "cityid": 101041000,
        "simcode": "changshou",
        "area_1": "重庆",
        "area_2": "长寿",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 114,
        "cityid": 101041100,
        "simcode": "cqqianjiang",
        "area_1": "重庆",
        "area_2": "黔江",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 116,
        "cityid": 101041300,
        "simcode": "wanzhou",
        "area_1": "重庆",
        "area_2": "万州",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 117,
        "cityid": 101041400,
        "simcode": "fuling",
        "area_1": "重庆",
        "area_2": "涪陵",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 118,
        "cityid": 101041500,
        "simcode": "kaixian",
        "area_1": "重庆",
        "area_2": "开县",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 119,
        "cityid": 101041600,
        "simcode": "chengkou",
        "area_1": "重庆",
        "area_2": "城口",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 120,
        "cityid": 101041700,
        "simcode": "yunyang",
        "area_1": "重庆",
        "area_2": "云阳",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 121,
        "cityid": 101041800,
        "simcode": "cqwuxi",
        "area_1": "重庆",
        "area_2": "巫溪",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 122,
        "cityid": 101041900,
        "simcode": "fengjie",
        "area_1": "重庆",
        "area_2": "奉节",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 123,
        "cityid": 101042000,
        "simcode": "cqwushan",
        "area_1": "重庆",
        "area_2": "巫山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 124,
        "cityid": 101042100,
        "simcode": "tongnan",
        "area_1": "重庆",
        "area_2": "潼南",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 125,
        "cityid": 101042200,
        "simcode": "dianjiang",
        "area_1": "重庆",
        "area_2": "垫江",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 126,
        "cityid": 101042300,
        "simcode": "liangping",
        "area_1": "重庆",
        "area_2": "梁平",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 127,
        "cityid": 101042400,
        "simcode": "zhongxian",
        "area_1": "重庆",
        "area_2": "忠县",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 128,
        "cityid": 101042500,
        "simcode": "shizhu",
        "area_1": "重庆",
        "area_2": "石柱",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 129,
        "cityid": 101042600,
        "simcode": "dazu",
        "area_1": "重庆",
        "area_2": "大足",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 130,
        "cityid": 101042700,
        "simcode": "rongchang",
        "area_1": "重庆",
        "area_2": "荣昌",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 131,
        "cityid": 101042800,
        "simcode": "tongliang",
        "area_1": "重庆",
        "area_2": "铜梁",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 132,
        "cityid": 101042900,
        "simcode": "bishan",
        "area_1": "重庆",
        "area_2": "璧山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 133,
        "cityid": 101043000,
        "simcode": "fengdu",
        "area_1": "重庆",
        "area_2": "丰都",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 134,
        "cityid": 101043100,
        "simcode": "wulong",
        "area_1": "重庆",
        "area_2": "武隆",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 135,
        "cityid": 101043200,
        "simcode": "pengshui",
        "area_1": "重庆",
        "area_2": "彭水",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 136,
        "cityid": 101043300,
        "simcode": "qijiang",
        "area_1": "重庆",
        "area_2": "綦江",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 137,
        "cityid": 101043400,
        "simcode": "youyang",
        "area_1": "重庆",
        "area_2": "酉阳",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 138,
        "cityid": 101043600,
        "simcode": "xiushan",
        "area_1": "重庆",
        "area_2": "秀山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 140,
        "cityid": 101040200,
        "simcode": "yongchuan",
        "area_1": "重庆",
        "area_2": "永川",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 141,
        "cityid": 101230101,
        "simcode": "fjfuzhou",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 142,
        "cityid": 101230501,
        "simcode": "quanzhou",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 143,
        "cityid": 101230601,
        "simcode": "zhangzhou",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 144,
        "cityid": 101230701,
        "simcode": "longyan",
        "area_1": "福建",
        "area_2": "龙岩",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 145,
        "cityid": 101230509,
        "simcode": "jinjiang",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "晋江"
      },
      {
        "country": 1,
        "weaid": 146,
        "cityid": 101230901,
        "simcode": "nanping",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 147,
        "cityid": 101230201,
        "simcode": "xiamen",
        "area_1": "福建",
        "area_2": "厦门",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 148,
        "cityid": 101230301,
        "simcode": "ningde",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 149,
        "cityid": 101230401,
        "simcode": "putian",
        "area_1": "福建",
        "area_2": "莆田",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 150,
        "cityid": 101230801,
        "simcode": "sanming",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 151,
        "cityid": 101160101,
        "simcode": "lanzhou",
        "area_1": "甘肃",
        "area_2": "兰州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 152,
        "cityid": 101160301,
        "simcode": "pingliang",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 153,
        "cityid": 101160401,
        "simcode": "gsqingyang",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 154,
        "cityid": 101160501,
        "simcode": "gswuwei",
        "area_1": "甘肃",
        "area_2": "武威",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 155,
        "cityid": 101160601,
        "simcode": "jinchang",
        "area_1": "甘肃",
        "area_2": "金昌",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 156,
        "cityid": 101161401,
        "simcode": "jiayuguan",
        "area_1": "甘肃",
        "area_2": "嘉峪关",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 157,
        "cityid": 101160801,
        "simcode": "jiuquan",
        "area_1": "甘肃",
        "area_2": "酒泉",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 158,
        "cityid": 101160901,
        "simcode": "tianshui",
        "area_1": "甘肃",
        "area_2": "天水",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 159,
        "cityid": 101161001,
        "simcode": "wudu",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "武都"
      },
      {
        "country": 1,
        "weaid": 160,
        "cityid": 101161101,
        "simcode": "linxia",
        "area_1": "甘肃",
        "area_2": "临夏",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 161,
        "cityid": 101161201,
        "simcode": "hezuo",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "合作"
      },
      {
        "country": 1,
        "weaid": 162,
        "cityid": 101161301,
        "simcode": "baiyin",
        "area_1": "甘肃",
        "area_2": "白银",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 163,
        "cityid": 101160201,
        "simcode": "dingxi",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 164,
        "cityid": 101160701,
        "simcode": "zhangye",
        "area_1": "甘肃",
        "area_2": "张掖",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 165,
        "cityid": 101280101,
        "simcode": "guangzhou",
        "area_1": "广东",
        "area_2": "广州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 166,
        "cityid": 101280301,
        "simcode": "huizhou",
        "area_1": "广东",
        "area_2": "惠州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 167,
        "cityid": 101280401,
        "simcode": "meizhou",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 168,
        "cityid": 101280501,
        "simcode": "shantou",
        "area_1": "广东",
        "area_2": "汕头",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 169,
        "cityid": 101280601,
        "simcode": "shenzhen",
        "area_1": "广东",
        "area_2": "深圳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 170,
        "cityid": 101280701,
        "simcode": "zhuhai",
        "area_1": "广东",
        "area_2": "珠海",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 171,
        "cityid": 101280800,
        "simcode": "foshan",
        "area_1": "广东",
        "area_2": "佛山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 172,
        "cityid": 101280901,
        "simcode": "zhaoqing",
        "area_1": "广东",
        "area_2": "肇庆",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 173,
        "cityid": 101281001,
        "simcode": "zhanjiang",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 174,
        "cityid": 101281101,
        "simcode": "jiangmen",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 175,
        "cityid": 101281201,
        "simcode": "heyuan",
        "area_1": "广东",
        "area_2": "河源",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 176,
        "cityid": 101281301,
        "simcode": "gdqingyuan",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 177,
        "cityid": 101281401,
        "simcode": "yunfu",
        "area_1": "广东",
        "area_2": "云浮",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 178,
        "cityid": 101281501,
        "simcode": "chaozhou",
        "area_1": "广东",
        "area_2": "潮州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 179,
        "cityid": 101281601,
        "simcode": "dongguan",
        "area_1": "广东",
        "area_2": "东莞",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 180,
        "cityid": 101281701,
        "simcode": "gdzhongshan",
        "area_1": "广东",
        "area_2": "中山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 181,
        "cityid": 101281801,
        "simcode": "yangjiang",
        "area_1": "广东",
        "area_2": "阳江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 182,
        "cityid": 101281901,
        "simcode": "jieyang",
        "area_1": "广东",
        "area_2": "揭阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 183,
        "cityid": 101282001,
        "simcode": "maoming",
        "area_1": "广东",
        "area_2": "茂名",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 184,
        "cityid": 101282101,
        "simcode": "shanwei",
        "area_1": "广东",
        "area_2": "汕尾",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 185,
        "cityid": 101280201,
        "simcode": "shaoguan",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 186,
        "cityid": 101300101,
        "simcode": "nanning",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 187,
        "cityid": 101300301,
        "simcode": "liuzhou",
        "area_1": "广西",
        "area_2": "柳州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 188,
        "cityid": 101300401,
        "simcode": "laibin",
        "area_1": "广西",
        "area_2": "来宾",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 189,
        "cityid": 101300501,
        "simcode": "guilin",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 190,
        "cityid": 101300601,
        "simcode": "wuzhou",
        "area_1": "广西",
        "area_2": "梧州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 191,
        "cityid": 101301401,
        "simcode": "fangchenggang",
        "area_1": "广西",
        "area_2": "防城港",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 192,
        "cityid": 101300801,
        "simcode": "guigang",
        "area_1": "广西",
        "area_2": "贵港",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 193,
        "cityid": 101300901,
        "simcode": "gxyulin",
        "area_1": "广西",
        "area_2": "玉林",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 194,
        "cityid": 101301001,
        "simcode": "baise",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 195,
        "cityid": 101301101,
        "simcode": "qinzhou",
        "area_1": "广西",
        "area_2": "钦州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 196,
        "cityid": 101301201,
        "simcode": "hechi",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 197,
        "cityid": 101301301,
        "simcode": "beihai",
        "area_1": "广西",
        "area_2": "北海",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 198,
        "cityid": 101300201,
        "simcode": "chongzuo",
        "area_1": "广西",
        "area_2": "崇左",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 199,
        "cityid": 101300701,
        "simcode": "hezhou",
        "area_1": "广西",
        "area_2": "贺州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 200,
        "cityid": 101260101,
        "simcode": "guiyang",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 201,
        "cityid": 101260301,
        "simcode": "anshun",
        "area_1": "贵州",
        "area_2": "安顺",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 202,
        "cityid": 101260401,
        "simcode": "duyun",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "都匀"
      },
      {
        "country": 1,
        "weaid": 204,
        "cityid": 101260601,
        "simcode": "tongren",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 205,
        "cityid": 101260701,
        "simcode": "bijie",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 206,
        "cityid": 101260801,
        "simcode": "shuicheng",
        "area_1": "贵州",
        "area_2": "六盘水",
        "area_3": "水城"
      },
      {
        "country": 1,
        "weaid": 207,
        "cityid": 101260201,
        "simcode": "zunyi",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 208,
        "cityid": 101260501,
        "simcode": "kaili",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "凯里"
      },
      {
        "country": 1,
        "weaid": 209,
        "cityid": 101290101,
        "simcode": "kunming",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 210,
        "cityid": 101290301,
        "simcode": "honghe",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 211,
        "cityid": 101290601,
        "simcode": "wenshan",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 212,
        "cityid": 101290701,
        "simcode": "yuxi",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 213,
        "cityid": 101290801,
        "simcode": "chuxiong",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 214,
        "cityid": 101290901,
        "simcode": "puer",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 215,
        "cityid": 101291001,
        "simcode": "zhaotong",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 216,
        "cityid": 101291101,
        "simcode": "lincang",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 217,
        "cityid": 101291201,
        "simcode": "nujiang",
        "area_1": "云南",
        "area_2": "怒江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 218,
        "cityid": 101291301,
        "simcode": "xianggelila",
        "area_1": "云南",
        "area_2": "迪庆",
        "area_3": "香格里拉"
      },
      {
        "country": 1,
        "weaid": 219,
        "cityid": 101291401,
        "simcode": "lijiang",
        "area_1": "云南",
        "area_2": "丽江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 220,
        "cityid": 101291501,
        "simcode": "dehong",
        "area_1": "云南",
        "area_2": "德宏",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 221,
        "cityid": 101291601,
        "simcode": "jinghong",
        "area_1": "云南",
        "area_2": "西双版纳",
        "area_3": "景洪"
      },
      {
        "country": 1,
        "weaid": 222,
        "cityid": 101290201,
        "simcode": "yndali",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 223,
        "cityid": 101290401,
        "simcode": "qujing",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 224,
        "cityid": 101290501,
        "simcode": "ynbaoshan",
        "area_1": "云南",
        "area_2": "保山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 225,
        "cityid": 101080101,
        "simcode": "huhehaote",
        "area_1": "内蒙古",
        "area_2": "呼和浩特",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 226,
        "cityid": 101080301,
        "simcode": "wuhai",
        "area_1": "内蒙古",
        "area_2": "乌海",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 227,
        "cityid": 101080401,
        "simcode": "nmgjining",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "集宁"
      },
      {
        "country": 1,
        "weaid": 228,
        "cityid": 101080501,
        "simcode": "tongliao",
        "area_1": "内蒙古",
        "area_2": "通辽",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 229,
        "cityid": 101081201,
        "simcode": "azuoqi",
        "area_1": "内蒙古",
        "area_2": "阿拉善盟",
        "area_3": "阿左旗"
      },
      {
        "country": 1,
        "weaid": 230,
        "cityid": 101080701,
        "simcode": "eerduosi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 231,
        "cityid": 101080801,
        "simcode": "linhe",
        "area_1": "内蒙古",
        "area_2": "巴彦淖尔",
        "area_3": "临河"
      },
      {
        "country": 1,
        "weaid": 232,
        "cityid": 101080901,
        "simcode": "xilinhaote",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "锡林浩特"
      },
      {
        "country": 1,
        "weaid": 234,
        "cityid": 101081101,
        "simcode": "wulanhaote",
        "area_1": "内蒙古",
        "area_2": "兴安盟",
        "area_3": "乌兰浩特"
      },
      {
        "country": 1,
        "weaid": 235,
        "cityid": 101080201,
        "simcode": "baotou",
        "area_1": "内蒙古",
        "area_2": "包头",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 236,
        "cityid": 101080601,
        "simcode": "chifeng",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 237,
        "cityid": 101240101,
        "simcode": "nanchang",
        "area_1": "江西",
        "area_2": "南昌",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 238,
        "cityid": 101240301,
        "simcode": "shangrao",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 239,
        "cityid": 101240401,
        "simcode": "fuzhou",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 240,
        "cityid": 101240501,
        "simcode": "jxyichun",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 241,
        "cityid": 101241101,
        "simcode": "yingtan",
        "area_1": "江西",
        "area_2": "鹰潭",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 242,
        "cityid": 101240701,
        "simcode": "ganzhou",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 243,
        "cityid": 101240801,
        "simcode": "jingdezhen",
        "area_1": "江西",
        "area_2": "景德镇",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 244,
        "cityid": 101240901,
        "simcode": "jxpingxiang",
        "area_1": "江西",
        "area_2": "萍乡",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 245,
        "cityid": 101241001,
        "simcode": "xinyu",
        "area_1": "江西",
        "area_2": "新余",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 246,
        "cityid": 101240201,
        "simcode": "jiujiang",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 247,
        "cityid": 101240601,
        "simcode": "jxjian",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 248,
        "cityid": 101200101,
        "simcode": "wuhan",
        "area_1": "湖北",
        "area_2": "武汉",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 249,
        "cityid": 101200501,
        "simcode": "huanggang",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 250,
        "cityid": 101200801,
        "simcode": "hbjingzhou",
        "area_1": "湖北",
        "area_2": "荆州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 251,
        "cityid": 101200901,
        "simcode": "yichang",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 252,
        "cityid": 101201001,
        "simcode": "enshi",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 253,
        "cityid": 101201101,
        "simcode": "shiyan",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 254,
        "cityid": 101201201,
        "simcode": "shennongjia",
        "area_1": "湖北",
        "area_2": "神农架",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 255,
        "cityid": 101201301,
        "simcode": "suizhou",
        "area_1": "湖北",
        "area_2": "随州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 256,
        "cityid": 101201401,
        "simcode": "jingmen",
        "area_1": "湖北",
        "area_2": "荆门",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 257,
        "cityid": 101201501,
        "simcode": "tianmen",
        "area_1": "湖北",
        "area_2": "天门",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 258,
        "cityid": 101201601,
        "simcode": "xiantao",
        "area_1": "湖北",
        "area_2": "仙桃",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 259,
        "cityid": 101201701,
        "simcode": "hbqianjiang",
        "area_1": "湖北",
        "area_2": "潜江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 260,
        "cityid": 101200201,
        "simcode": "xiangyang",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 261,
        "cityid": 101200301,
        "simcode": "ezhou",
        "area_1": "湖北",
        "area_2": "鄂州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 262,
        "cityid": 101200401,
        "simcode": "xiaogan",
        "area_1": "湖北",
        "area_2": "孝感",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 263,
        "cityid": 101200601,
        "simcode": "huangshi",
        "area_1": "湖北",
        "area_2": "黄石",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 264,
        "cityid": 101200701,
        "simcode": "xianning",
        "area_1": "湖北",
        "area_2": "咸宁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 265,
        "cityid": 101270101,
        "simcode": "chengdu",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 266,
        "cityid": 101270301,
        "simcode": "zigong",
        "area_1": "四川",
        "area_2": "自贡",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 267,
        "cityid": 101270401,
        "simcode": "mianyang",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 268,
        "cityid": 101270501,
        "simcode": "nanchong",
        "area_1": "四川",
        "area_2": "南充",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 269,
        "cityid": 101270601,
        "simcode": "dazhou",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 270,
        "cityid": 101270701,
        "simcode": "scsuining",
        "area_1": "四川",
        "area_2": "遂宁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 271,
        "cityid": 101270801,
        "simcode": "guangan",
        "area_1": "四川",
        "area_2": "广安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 272,
        "cityid": 101270901,
        "simcode": "bazhong",
        "area_1": "四川",
        "area_2": "巴中",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 273,
        "cityid": 101271001,
        "simcode": "luzhou",
        "area_1": "四川",
        "area_2": "泸州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 274,
        "cityid": 101271101,
        "simcode": "yibin",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 275,
        "cityid": 101271201,
        "simcode": "neijiang",
        "area_1": "四川",
        "area_2": "内江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 276,
        "cityid": 101271301,
        "simcode": "scziyang",
        "area_1": "四川",
        "area_2": "资阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 277,
        "cityid": 101271401,
        "simcode": "leshan",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 278,
        "cityid": 101271501,
        "simcode": "meishan",
        "area_1": "四川",
        "area_2": "眉山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 279,
        "cityid": 101271601,
        "simcode": "scliangshan",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 280,
        "cityid": 101271701,
        "simcode": "yaan",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 281,
        "cityid": 101271801,
        "simcode": "ganzi",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 282,
        "cityid": 101271901,
        "simcode": "aba",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 283,
        "cityid": 101272001,
        "simcode": "deyang",
        "area_1": "四川",
        "area_2": "德阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 284,
        "cityid": 101272101,
        "simcode": "guangyuan",
        "area_1": "四川",
        "area_2": "广元",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 285,
        "cityid": 101270201,
        "simcode": "panzhihua",
        "area_1": "四川",
        "area_2": "攀枝花",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 286,
        "cityid": 101170101,
        "simcode": "yinchuan",
        "area_1": "宁夏",
        "area_2": "银川",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 287,
        "cityid": 101170501,
        "simcode": "zhongwei",
        "area_1": "宁夏",
        "area_2": "中卫",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 288,
        "cityid": 101170401,
        "simcode": "guyuan",
        "area_1": "宁夏",
        "area_2": "固原",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 289,
        "cityid": 101170201,
        "simcode": "shizuishan",
        "area_1": "宁夏",
        "area_2": "石嘴山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 290,
        "cityid": 101170301,
        "simcode": "wuzhong",
        "area_1": "宁夏",
        "area_2": "吴忠",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 291,
        "cityid": 101150101,
        "simcode": "xining",
        "area_1": "青海",
        "area_2": "西宁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 292,
        "cityid": 101150301,
        "simcode": "huangnan",
        "area_1": "青海",
        "area_2": "黄南",
        "area_3": "同仁"
      },
      {
        "country": 1,
        "weaid": 293,
        "cityid": 101150801,
        "simcode": "haibei",
        "area_1": "青海",
        "area_2": "海北",
        "area_3": "海晏"
      },
      {
        "country": 1,
        "weaid": 294,
        "cityid": 101150501,
        "simcode": "guoluo",
        "area_1": "青海",
        "area_2": "果洛",
        "area_3": "玛沁"
      },
      {
        "country": 1,
        "weaid": 295,
        "cityid": 101150601,
        "simcode": "qhyushu",
        "area_1": "青海",
        "area_2": "玉树",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 296,
        "cityid": 101150701,
        "simcode": "haixi",
        "area_1": "青海",
        "area_2": "海西",
        "area_3": "德令哈"
      },
      {
        "country": 1,
        "weaid": 297,
        "cityid": 101150201,
        "simcode": "haidong",
        "area_1": "青海",
        "area_2": "海东",
        "area_3": "平安"
      },
      {
        "country": 1,
        "weaid": 298,
        "cityid": 101150401,
        "simcode": "hainan",
        "area_1": "青海",
        "area_2": "海南",
        "area_3": "共和"
      },
      {
        "country": 1,
        "weaid": 299,
        "cityid": 101120101,
        "simcode": "jinan",
        "area_1": "山东",
        "area_2": "济南",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 300,
        "cityid": 101120601,
        "simcode": "weifang",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 301,
        "cityid": 101120901,
        "simcode": "sdlinyi",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 302,
        "cityid": 101121001,
        "simcode": "heze",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 303,
        "cityid": 101121101,
        "simcode": "binzhou",
        "area_1": "山东",
        "area_2": "滨州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 304,
        "cityid": 101121201,
        "simcode": "dongying",
        "area_1": "山东",
        "area_2": "东营",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 305,
        "cityid": 101121301,
        "simcode": "weihai",
        "area_1": "山东",
        "area_2": "威海",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 306,
        "cityid": 101121401,
        "simcode": "zaozhuang",
        "area_1": "山东",
        "area_2": "枣庄",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 307,
        "cityid": 101121501,
        "simcode": "rizhao",
        "area_1": "山东",
        "area_2": "日照",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 308,
        "cityid": 101121601,
        "simcode": "laiwu",
        "area_1": "山东",
        "area_2": "莱芜",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 309,
        "cityid": 101121701,
        "simcode": "liaocheng",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 310,
        "cityid": 101120201,
        "simcode": "qingdao",
        "area_1": "山东",
        "area_2": "青岛",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 311,
        "cityid": 101120301,
        "simcode": "zibo",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 312,
        "cityid": 101120401,
        "simcode": "dezhou",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 313,
        "cityid": 101120501,
        "simcode": "yantai",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 314,
        "cityid": 101120701,
        "simcode": "sdjining",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 315,
        "cityid": 101120801,
        "simcode": "sdtaian",
        "area_1": "山东",
        "area_2": "泰安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 316,
        "cityid": 101110101,
        "simcode": "xian",
        "area_1": "陕西",
        "area_2": "西安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 317,
        "cityid": 101110300,
        "simcode": "yanan",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 318,
        "cityid": 101110401,
        "simcode": "sxyulin",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 319,
        "cityid": 101111001,
        "simcode": "tongchuan",
        "area_1": "陕西",
        "area_2": "铜川",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 320,
        "cityid": 101110601,
        "simcode": "shangluo",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 321,
        "cityid": 101110701,
        "simcode": "ankang",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 322,
        "cityid": 101110801,
        "simcode": "hanzhong",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 323,
        "cityid": 101110901,
        "simcode": "baoji",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 324,
        "cityid": 101110200,
        "simcode": "xianyang",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 325,
        "cityid": 101110501,
        "simcode": "weinan",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 326,
        "cityid": 101100101,
        "simcode": "taiyuan",
        "area_1": "山西",
        "area_2": "太原",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 327,
        "cityid": 101100701,
        "simcode": "linfen",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 328,
        "cityid": 101100801,
        "simcode": "yuncheng",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 329,
        "cityid": 101100901,
        "simcode": "shuozhou",
        "area_1": "山西",
        "area_2": "朔州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 330,
        "cityid": 101101001,
        "simcode": "sxxinzhou",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 331,
        "cityid": 101100501,
        "simcode": "changzhi",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 332,
        "cityid": 101100201,
        "simcode": "sxdatong",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 333,
        "cityid": 101100301,
        "simcode": "yangquan",
        "area_1": "山西",
        "area_2": "阳泉",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 334,
        "cityid": 101100401,
        "simcode": "jinzhong",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 335,
        "cityid": 101100601,
        "simcode": "jincheng",
        "area_1": "山西",
        "area_2": "晋城",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 336,
        "cityid": 101101100,
        "simcode": "lvliang",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 337,
        "cityid": 101130101,
        "simcode": "wulumuqi",
        "area_1": "新疆",
        "area_2": "乌鲁木齐",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 338,
        "cityid": 101130301,
        "simcode": "shihezi",
        "area_1": "新疆",
        "area_2": "石河子",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 339,
        "cityid": 101130401,
        "simcode": "changji",
        "area_1": "新疆",
        "area_2": "昌吉",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 340,
        "cityid": 101130501,
        "simcode": "tulufan",
        "area_1": "新疆",
        "area_2": "吐鲁番",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 341,
        "cityid": 101130601,
        "simcode": "kuerle",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "库尔勒"
      },
      {
        "country": 1,
        "weaid": 342,
        "cityid": 101130701,
        "simcode": "alaer",
        "area_1": "新疆",
        "area_2": "阿拉尔",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 343,
        "cityid": 101130801,
        "simcode": "akesu",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 344,
        "cityid": 101130901,
        "simcode": "kashi",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 345,
        "cityid": 101131001,
        "simcode": "yining",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "伊宁"
      },
      {
        "country": 1,
        "weaid": 346,
        "cityid": 101131101,
        "simcode": "tacheng",
        "area_1": "新疆",
        "area_2": "塔城",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 347,
        "cityid": 101131201,
        "simcode": "hami",
        "area_1": "新疆",
        "area_2": "哈密",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 348,
        "cityid": 101131301,
        "simcode": "hetian",
        "area_1": "新疆",
        "area_2": "和田",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 349,
        "cityid": 101131401,
        "simcode": "aletai",
        "area_1": "新疆",
        "area_2": "阿勒泰",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 350,
        "cityid": 101131501,
        "simcode": "atushi",
        "area_1": "新疆",
        "area_2": "克州",
        "area_3": "阿图什"
      },
      {
        "country": 1,
        "weaid": 351,
        "cityid": 101131601,
        "simcode": "bole",
        "area_1": "新疆",
        "area_2": "博尔塔拉",
        "area_3": "博乐"
      },
      {
        "country": 1,
        "weaid": 352,
        "cityid": 101130201,
        "simcode": "kelamayi",
        "area_1": "新疆",
        "area_2": "克拉玛依",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 353,
        "cityid": 101140101,
        "simcode": "lasa",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 354,
        "cityid": 101140301,
        "simcode": "shannan",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 355,
        "cityid": 101140701,
        "simcode": "ali",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 356,
        "cityid": 101140501,
        "simcode": "changdu",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 357,
        "cityid": 101140601,
        "simcode": "naqu",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 358,
        "cityid": 101140201,
        "simcode": "rikaze",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 359,
        "cityid": 101140401,
        "simcode": "linzhi",
        "area_1": "西藏",
        "area_2": "林芝",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 360,
        "cityid": 101340101,
        "simcode": "taibeixian",
        "area_1": "台湾",
        "area_2": "台北",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 361,
        "cityid": 101340201,
        "simcode": "gaoxiong",
        "area_1": "台湾",
        "area_2": "高雄",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 362,
        "cityid": 101340401,
        "simcode": "taizhong",
        "area_1": "台湾",
        "area_2": "台中",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 363,
        "cityid": 101310101,
        "simcode": "haikou",
        "area_1": "海南",
        "area_2": "海口",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 364,
        "cityid": 101310201,
        "simcode": "sanya",
        "area_1": "海南",
        "area_2": "三亚",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 365,
        "cityid": 101310202,
        "simcode": "dongfang",
        "area_1": "海南",
        "area_2": "东方",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 366,
        "cityid": 101310203,
        "simcode": "lingao",
        "area_1": "海南",
        "area_2": "临高",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 367,
        "cityid": 101310204,
        "simcode": "chengmai",
        "area_1": "海南",
        "area_2": "澄迈",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 368,
        "cityid": 101310205,
        "simcode": "danzhou",
        "area_1": "海南",
        "area_2": "儋州",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 369,
        "cityid": 101310206,
        "simcode": "changjiang",
        "area_1": "海南",
        "area_2": "昌江",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 370,
        "cityid": 101310207,
        "simcode": "baisha",
        "area_1": "海南",
        "area_2": "白沙",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 371,
        "cityid": 101310208,
        "simcode": "qiongzhong",
        "area_1": "海南",
        "area_2": "琼中",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 372,
        "cityid": 101310209,
        "simcode": "dingan",
        "area_1": "海南",
        "area_2": "定安",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 373,
        "cityid": 101310210,
        "simcode": "tunchang",
        "area_1": "海南",
        "area_2": "屯昌",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 374,
        "cityid": 101310211,
        "simcode": "qionghai",
        "area_1": "海南",
        "area_2": "琼海",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 375,
        "cityid": 101310212,
        "simcode": "wenchang",
        "area_1": "海南",
        "area_2": "文昌",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 376,
        "cityid": 101310214,
        "simcode": "baoting",
        "area_1": "海南",
        "area_2": "保亭",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 377,
        "cityid": 101310215,
        "simcode": "wanning",
        "area_1": "海南",
        "area_2": "万宁",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 378,
        "cityid": 101310216,
        "simcode": "lingshui",
        "area_1": "海南",
        "area_2": "陵水",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 381,
        "cityid": 101310221,
        "simcode": "ledong",
        "area_1": "海南",
        "area_2": "乐东",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 382,
        "cityid": 101310222,
        "simcode": "wuzhishan",
        "area_1": "海南",
        "area_2": "五指山",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 384,
        "cityid": 101250101,
        "simcode": "changsha",
        "area_1": "湖南",
        "area_2": "长沙",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 385,
        "cityid": 101250301,
        "simcode": "zhuzhou",
        "area_1": "湖南",
        "area_2": "株洲",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 386,
        "cityid": 101250401,
        "simcode": "hengyang",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 387,
        "cityid": 101250501,
        "simcode": "chenzhou",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 388,
        "cityid": 101250601,
        "simcode": "changde",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 389,
        "cityid": 101250700,
        "simcode": "hnyiyang",
        "area_1": "湖南",
        "area_2": "益阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 390,
        "cityid": 101250801,
        "simcode": "loudi",
        "area_1": "湖南",
        "area_2": "娄底",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 391,
        "cityid": 101250901,
        "simcode": "shaoyang",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 392,
        "cityid": 101251001,
        "simcode": "yueyang",
        "area_1": "湖南",
        "area_2": "岳阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 393,
        "cityid": 101251101,
        "simcode": "zhangjiajie",
        "area_1": "湖南",
        "area_2": "张家界",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 394,
        "cityid": 101251201,
        "simcode": "huaihua",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 396,
        "cityid": 101251401,
        "simcode": "yongzhou",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 397,
        "cityid": 101251501,
        "simcode": "jishou",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "吉首"
      },
      {
        "country": 1,
        "weaid": 398,
        "cityid": 101250201,
        "simcode": "xiangtan",
        "area_1": "湖南",
        "area_2": "湘潭",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 399,
        "cityid": 101190101,
        "simcode": "nanjing",
        "area_1": "江苏",
        "area_2": "南京",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 400,
        "cityid": 101190301,
        "simcode": "zhenjiang",
        "area_1": "江苏",
        "area_2": "镇江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 401,
        "cityid": 101190401,
        "simcode": "jssuzhou",
        "area_1": "江苏",
        "area_2": "苏州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 402,
        "cityid": 101190501,
        "simcode": "nantong",
        "area_1": "江苏",
        "area_2": "南通",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 403,
        "cityid": 101190601,
        "simcode": "yangzhou",
        "area_1": "江苏",
        "area_2": "扬州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 404,
        "cityid": 101191301,
        "simcode": "suqian",
        "area_1": "江苏",
        "area_2": "宿迁",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 405,
        "cityid": 101190801,
        "simcode": "xuzhou",
        "area_1": "江苏",
        "area_2": "徐州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 406,
        "cityid": 101190901,
        "simcode": "huaian",
        "area_1": "江苏",
        "area_2": "淮安",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 407,
        "cityid": 101191001,
        "simcode": "lianyungang",
        "area_1": "江苏",
        "area_2": "连云港",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 408,
        "cityid": 101191101,
        "simcode": "changzhou",
        "area_1": "江苏",
        "area_2": "常州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 409,
        "cityid": 101191201,
        "simcode": "jstaizhou",
        "area_1": "江苏",
        "area_2": "泰州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 410,
        "cityid": 101190201,
        "simcode": "jswuxi",
        "area_1": "江苏",
        "area_2": "无锡",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 411,
        "cityid": 101190701,
        "simcode": "yancheng",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 412,
        "cityid": 101050101,
        "simcode": "haerbin",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 413,
        "cityid": 101050301,
        "simcode": "mudanjiang",
        "area_1": "黑龙江",
        "area_2": "牡丹江",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 414,
        "cityid": 101050401,
        "simcode": "jiamusi",
        "area_1": "黑龙江",
        "area_2": "佳木斯",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 415,
        "cityid": 101050501,
        "simcode": "suihua",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 416,
        "cityid": 101050601,
        "simcode": "heihe",
        "area_1": "黑龙江",
        "area_2": "黑河",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 417,
        "cityid": 101051301,
        "simcode": "shuangyashan",
        "area_1": "黑龙江",
        "area_2": "双鸭山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 418,
        "cityid": 101050801,
        "simcode": "hljyichun",
        "area_1": "黑龙江",
        "area_2": "伊春",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 419,
        "cityid": 101050901,
        "simcode": "daqing",
        "area_1": "黑龙江",
        "area_2": "大庆",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 420,
        "cityid": 101051002,
        "simcode": "qitaihe",
        "area_1": "黑龙江",
        "area_2": "七台河",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 421,
        "cityid": 101051101,
        "simcode": "jixi",
        "area_1": "黑龙江",
        "area_2": "鸡西",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 422,
        "cityid": 101051201,
        "simcode": "hegang",
        "area_1": "黑龙江",
        "area_2": "鹤岗",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 423,
        "cityid": 101050201,
        "simcode": "qiqihaer",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 424,
        "cityid": 101050701,
        "simcode": "daxinganling",
        "area_1": "黑龙江",
        "area_2": "大兴安岭",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 425,
        "cityid": 101060101,
        "simcode": "changchun",
        "area_1": "吉林",
        "area_2": "长春",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 426,
        "cityid": 101060301,
        "simcode": "yanji",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "延吉"
      },
      {
        "country": 1,
        "weaid": 427,
        "cityid": 101060401,
        "simcode": "siping",
        "area_1": "吉林",
        "area_2": "四平",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 428,
        "cityid": 101060901,
        "simcode": "baishan",
        "area_1": "吉林",
        "area_2": "白山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 429,
        "cityid": 101060601,
        "simcode": "baicheng",
        "area_1": "吉林",
        "area_2": "白城",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 430,
        "cityid": 101060701,
        "simcode": "liaoyuan",
        "area_1": "吉林",
        "area_2": "辽源",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 431,
        "cityid": 101060801,
        "simcode": "songyuan",
        "area_1": "吉林",
        "area_2": "松原",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 432,
        "cityid": 101060201,
        "simcode": "jilin",
        "area_1": "吉林",
        "area_2": "城区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 433,
        "cityid": 101060501,
        "simcode": "tonghua",
        "area_1": "吉林",
        "area_2": "通化",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 434,
        "cityid": 101070101,
        "simcode": "shenyang",
        "area_1": "辽宁",
        "area_2": "沈阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 435,
        "cityid": 101070301,
        "simcode": "anshan",
        "area_1": "辽宁",
        "area_2": "鞍山",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 436,
        "cityid": 101070401,
        "simcode": "fushun",
        "area_1": "辽宁",
        "area_2": "抚顺",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 437,
        "cityid": 101070501,
        "simcode": "benxi",
        "area_1": "辽宁",
        "area_2": "本溪",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 438,
        "cityid": 101070601,
        "simcode": "dandong",
        "area_1": "辽宁",
        "area_2": "丹东",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 439,
        "cityid": 101071401,
        "simcode": "huludao",
        "area_1": "辽宁",
        "area_2": "葫芦岛",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 440,
        "cityid": 101070801,
        "simcode": "yingkou",
        "area_1": "辽宁",
        "area_2": "营口",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 441,
        "cityid": 101070901,
        "simcode": "fuxin",
        "area_1": "辽宁",
        "area_2": "阜新",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 442,
        "cityid": 101071001,
        "simcode": "liaoyang",
        "area_1": "辽宁",
        "area_2": "辽阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 443,
        "cityid": 101071101,
        "simcode": "tieling",
        "area_1": "辽宁",
        "area_2": "铁岭",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 444,
        "cityid": 101071201,
        "simcode": "lnchaoyang",
        "area_1": "辽宁",
        "area_2": "朝阳",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 445,
        "cityid": 101071301,
        "simcode": "panjin",
        "area_1": "辽宁",
        "area_2": "盘锦",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 446,
        "cityid": 101070201,
        "simcode": "dalian",
        "area_1": "辽宁",
        "area_2": "大连",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 447,
        "cityid": 101070701,
        "simcode": "jinzhou",
        "area_1": "辽宁",
        "area_2": "锦州",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 448,
        "cityid": 101050104,
        "simcode": "acheng",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "阿城"
      },
      {
        "country": 1,
        "weaid": 449,
        "cityid": 101050503,
        "simcode": "anda",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "安达"
      },
      {
        "country": 1,
        "weaid": 450,
        "cityid": 101160208,
        "simcode": "anding",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "安定"
      },
      {
        "country": 1,
        "weaid": 452,
        "cityid": 101081102,
        "simcode": "aershan",
        "area_1": "内蒙古",
        "area_2": "兴安盟",
        "area_3": "阿尔山"
      },
      {
        "country": 1,
        "weaid": 453,
        "cityid": 101240612,
        "simcode": "anfu",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "安福"
      },
      {
        "country": 1,
        "weaid": 454,
        "cityid": 101090220,
        "simcode": "anguo",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "安国"
      },
      {
        "country": 1,
        "weaid": 455,
        "cityid": 101080614,
        "simcode": "aohanqi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "敖汉"
      },
      {
        "country": 1,
        "weaid": 456,
        "cityid": 101131504,
        "simcode": "aheqi",
        "area_1": "新疆",
        "area_2": "克州",
        "area_3": "阿合奇"
      },
      {
        "country": 1,
        "weaid": 457,
        "cityid": 101250704,
        "simcode": "anhua",
        "area_1": "湖南",
        "area_2": "益阳",
        "area_3": "安化"
      },
      {
        "country": 1,
        "weaid": 458,
        "cityid": 101210203,
        "simcode": "anji",
        "area_1": "浙江",
        "area_2": "湖州",
        "area_3": "安吉"
      },
      {
        "country": 1,
        "weaid": 459,
        "cityid": 101081003,
        "simcode": "arongqi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "阿荣旗"
      },
      {
        "country": 1,
        "weaid": 460,
        "cityid": 101131503,
        "simcode": "aketao",
        "area_1": "新疆",
        "area_2": "克州",
        "area_3": "阿克陶"
      },
      {
        "country": 1,
        "weaid": 461,
        "cityid": 101260907,
        "simcode": "anlong",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "安龙"
      },
      {
        "country": 1,
        "weaid": 462,
        "cityid": 101081202,
        "simcode": "alashanyouqi",
        "area_1": "内蒙古",
        "area_2": "阿拉善盟",
        "area_3": "阿右旗"
      },
      {
        "country": 1,
        "weaid": 463,
        "cityid": 101200402,
        "simcode": "anlu",
        "area_1": "湖北",
        "area_2": "孝感",
        "area_3": "安陆"
      },
      {
        "country": 1,
        "weaid": 464,
        "cityid": 101290112,
        "simcode": "anning",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "安宁"
      },
      {
        "country": 1,
        "weaid": 465,
        "cityid": 101090806,
        "simcode": "anping",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "安平"
      },
      {
        "country": 1,
        "weaid": 466,
        "cityid": 101120607,
        "simcode": "anqiu",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "安丘"
      },
      {
        "country": 1,
        "weaid": 467,
        "cityid": 101250509,
        "simcode": "anren",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "安仁"
      },
      {
        "country": 1,
        "weaid": 468,
        "cityid": 101110307,
        "simcode": "ansai",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "安塞"
      },
      {
        "country": 1,
        "weaid": 469,
        "cityid": 101060303,
        "simcode": "antu",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "安图"
      },
      {
        "country": 1,
        "weaid": 470,
        "cityid": 101130809,
        "simcode": "awati",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "阿瓦提"
      },
      {
        "country": 1,
        "weaid": 471,
        "cityid": 101090211,
        "simcode": "anxin",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "安新"
      },
      {
        "country": 1,
        "weaid": 472,
        "cityid": 101230502,
        "simcode": "anxi",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "安溪"
      },
      {
        "country": 1,
        "weaid": 473,
        "cityid": 101250602,
        "simcode": "anxiang",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "安乡"
      },
      {
        "country": 1,
        "weaid": 474,
        "cityid": 101270404,
        "simcode": "anxian",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "安县"
      },
      {
        "country": 1,
        "weaid": 475,
        "cityid": 101240104,
        "simcode": "anyi",
        "area_1": "江西",
        "area_2": "南昌",
        "area_3": "安义"
      },
      {
        "country": 1,
        "weaid": 476,
        "cityid": 101240712,
        "simcode": "anyuan",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "安远"
      },
      {
        "country": 1,
        "weaid": 477,
        "cityid": 101271302,
        "simcode": "anyue",
        "area_1": "四川",
        "area_2": "资阳",
        "area_3": "安岳"
      },
      {
        "country": 1,
        "weaid": 478,
        "cityid": 101100716,
        "simcode": "anze",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "安泽"
      },
      {
        "country": 1,
        "weaid": 479,
        "cityid": 101181106,
        "simcode": "boai",
        "area_1": "河南",
        "area_2": "焦作",
        "area_3": "博爱"
      },
      {
        "country": 1,
        "weaid": 480,
        "cityid": 101050606,
        "simcode": "beian",
        "area_1": "黑龙江",
        "area_2": "黑河",
        "area_3": "北安"
      },
      {
        "country": 1,
        "weaid": 481,
        "cityid": 101300902,
        "simcode": "bobai",
        "area_1": "广西",
        "area_2": "玉林",
        "area_3": "博白"
      },
      {
        "country": 1,
        "weaid": 482,
        "cityid": 101290205,
        "simcode": "binchuan",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "宾川"
      },
      {
        "country": 1,
        "weaid": 483,
        "cityid": 101130804,
        "simcode": "xjbaicheng",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "拜城"
      },
      {
        "country": 1,
        "weaid": 484,
        "cityid": 101130908,
        "simcode": "bachu",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "巴楚"
      },
      {
        "country": 1,
        "weaid": 485,
        "cityid": 101101011,
        "simcode": "baode",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "保德"
      },
      {
        "country": 1,
        "weaid": 486,
        "cityid": 101201008,
        "simcode": "badong",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "巴东"
      },
      {
        "country": 1,
        "weaid": 487,
        "cityid": 101131406,
        "simcode": "buerjin",
        "area_1": "新疆",
        "area_2": "阿勒泰",
        "area_3": "布尔津"
      },
      {
        "country": 1,
        "weaid": 488,
        "cityid": 101180503,
        "simcode": "baofen",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "宝丰"
      },
      {
        "country": 1,
        "weaid": 489,
        "cityid": 101140604,
        "simcode": "bange",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "班戈"
      },
      {
        "country": 1,
        "weaid": 490,
        "cityid": 101271609,
        "simcode": "puge",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "普格"
      },
      {
        "country": 1,
        "weaid": 491,
        "cityid": 101190703,
        "simcode": "binhai",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "滨海"
      },
      {
        "country": 1,
        "weaid": 492,
        "cityid": 101110708,
        "simcode": "baihe",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "白河"
      },
      {
        "country": 1,
        "weaid": 494,
        "cityid": 101130612,
        "simcode": "bohu",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "博湖"
      },
      {
        "country": 1,
        "weaid": 495,
        "cityid": 101251502,
        "simcode": "baojing",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "保靖"
      },
      {
        "country": 1,
        "weaid": 496,
        "cityid": 101200203,
        "simcode": "baokang",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "保康"
      },
      {
        "country": 1,
        "weaid": 498,
        "cityid": 101051003,
        "simcode": "boli",
        "area_1": "黑龙江",
        "area_2": "七台河",
        "area_3": "勃利"
      },
      {
        "country": 1,
        "weaid": 499,
        "cityid": 101300903,
        "simcode": "beiliu",
        "area_1": "广西",
        "area_2": "玉林",
        "area_3": "北流"
      },
      {
        "country": 1,
        "weaid": 500,
        "cityid": 101271603,
        "simcode": "muli",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "木里"
      },
      {
        "country": 1,
        "weaid": 501,
        "cityid": 101131203,
        "simcode": "balikun",
        "area_1": "新疆",
        "area_2": "哈密",
        "area_3": "巴里坤"
      },
      {
        "country": 1,
        "weaid": 502,
        "cityid": 101080605,
        "simcode": "balinzuoqi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "巴林左旗"
      },
      {
        "country": 1,
        "weaid": 503,
        "cityid": 101080606,
        "simcode": "balinyouqi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "巴林右旗"
      },
      {
        "country": 1,
        "weaid": 504,
        "cityid": 101280302,
        "simcode": "boluo",
        "area_1": "广东",
        "area_2": "惠州",
        "area_3": "博罗"
      },
      {
        "country": 1,
        "weaid": 505,
        "cityid": 101301204,
        "simcode": "bama",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "巴马"
      },
      {
        "country": 1,
        "weaid": 506,
        "cityid": 101150502,
        "simcode": "banma",
        "area_1": "青海",
        "area_2": "果洛",
        "area_3": "班玛"
      },
      {
        "country": 1,
        "weaid": 508,
        "cityid": 101071205,
        "simcode": "beipiao",
        "area_1": "辽宁",
        "area_2": "朝阳",
        "area_3": "北票"
      },
      {
        "country": 1,
        "weaid": 509,
        "cityid": 101051303,
        "simcode": "baoqin",
        "area_1": "黑龙江",
        "area_2": "双鸭山",
        "area_3": "宝清"
      },
      {
        "country": 1,
        "weaid": 510,
        "cityid": 101050207,
        "simcode": "baiquan",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "拜泉"
      },
      {
        "country": 1,
        "weaid": 511,
        "cityid": 101110505,
        "simcode": "baishiu",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "白水"
      },
      {
        "country": 1,
        "weaid": 512,
        "cityid": 101090711,
        "simcode": "botou",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "泊头"
      },
      {
        "country": 1,
        "weaid": 513,
        "cityid": 101271619,
        "simcode": "butuo",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "布拖"
      },
      {
        "country": 1,
        "weaid": 514,
        "cityid": 101050105,
        "simcode": "binxian",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "宾县"
      },
      {
        "country": 1,
        "weaid": 515,
        "cityid": 101121102,
        "simcode": "boxin",
        "area_1": "山东",
        "area_2": "滨州",
        "area_3": "博兴"
      },
      {
        "country": 1,
        "weaid": 516,
        "cityid": 101110208,
        "simcode": "sxbinxian",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "彬县"
      },
      {
        "country": 1,
        "weaid": 517,
        "cityid": 101271708,
        "simcode": "baoxing",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "宝兴"
      },
      {
        "country": 1,
        "weaid": 518,
        "cityid": 101070502,
        "simcode": "benxixian",
        "area_1": "辽宁",
        "area_2": "本溪",
        "area_3": "本溪县"
      },
      {
        "country": 1,
        "weaid": 519,
        "cityid": 101050107,
        "simcode": "bayan",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "巴彦"
      },
      {
        "country": 1,
        "weaid": 520,
        "cityid": 101181606,
        "simcode": "biyang",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "泌阳"
      },
      {
        "country": 1,
        "weaid": 521,
        "cityid": 101080202,
        "simcode": "baiyunebo",
        "area_1": "内蒙古",
        "area_2": "包头",
        "area_3": "白云鄂博"
      },
      {
        "country": 1,
        "weaid": 522,
        "cityid": 101190602,
        "simcode": "baoying",
        "area_1": "江苏",
        "area_2": "扬州",
        "area_3": "宝应"
      },
      {
        "country": 1,
        "weaid": 523,
        "cityid": 101090608,
        "simcode": "bazhou",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "霸州"
      },
      {
        "country": 1,
        "weaid": 524,
        "cityid": 101210104,
        "simcode": "chunan",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "淳安"
      },
      {
        "country": 1,
        "weaid": 525,
        "cityid": 101110102,
        "simcode": "changan",
        "area_1": "陕西",
        "area_2": "西安",
        "area_3": "长安"
      },
      {
        "country": 1,
        "weaid": 526,
        "cityid": 101140306,
        "simcode": "cuona",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "错那"
      },
      {
        "country": 1,
        "weaid": 527,
        "cityid": 101131002,
        "simcode": "chabuchaer",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "察布查尔"
      },
      {
        "country": 1,
        "weaid": 528,
        "cityid": 101200702,
        "simcode": "chibi",
        "area_1": "湖北",
        "area_2": "咸宁",
        "area_3": "赤壁"
      },
      {
        "country": 1,
        "weaid": 529,
        "cityid": 101081007,
        "simcode": "chenbaerhuqi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "陈旗"
      },
      {
        "country": 1,
        "weaid": 530,
        "cityid": 101250909,
        "simcode": "chengbu",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "城步"
      },
      {
        "country": 1,
        "weaid": 531,
        "cityid": 101090313,
        "simcode": "chicheng",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "赤城"
      },
      {
        "country": 1,
        "weaid": 532,
        "cityid": 101110508,
        "simcode": "chengcheng",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "澄城"
      },
      {
        "country": 1,
        "weaid": 534,
        "cityid": 101120503,
        "simcode": "changdao",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "长岛"
      },
      {
        "country": 1,
        "weaid": 535,
        "cityid": 101200102,
        "simcode": "caidian",
        "area_1": "湖北",
        "area_2": "武汉",
        "area_3": "蔡甸"
      },
      {
        "country": 1,
        "weaid": 536,
        "cityid": 101220102,
        "simcode": "changfeng",
        "area_1": "安徽",
        "area_2": "合肥",
        "area_3": "长丰"
      },
      {
        "country": 1,
        "weaid": 537,
        "cityid": 101180404,
        "simcode": "changge",
        "area_1": "河南",
        "area_2": "许昌",
        "area_3": "长葛"
      },
      {
        "country": 1,
        "weaid": 538,
        "cityid": 101260502,
        "simcode": "cengong",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "岑巩"
      },
      {
        "country": 1,
        "weaid": 539,
        "cityid": 101290108,
        "simcode": "chenggong",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "呈贡"
      },
      {
        "country": 1,
        "weaid": 540,
        "cityid": 101110806,
        "simcode": "chenggu",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "城固"
      },
      {
        "country": 1,
        "weaid": 541,
        "cityid": 101070206,
        "simcode": "changhai",
        "area_1": "辽宁",
        "area_2": "大连",
        "area_3": "长海"
      },
      {
        "country": 1,
        "weaid": 542,
        "cityid": 101260908,
        "simcode": "ceheng",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "册亨"
      },
      {
        "country": 1,
        "weaid": 543,
        "cityid": 101080408,
        "simcode": "chahaeryouyiqianqi",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "察右前旗"
      },
      {
        "country": 1,
        "weaid": 544,
        "cityid": 101080409,
        "simcode": "chahaeryouyizhongqi",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "察右中旗"
      },
      {
        "country": 1,
        "weaid": 545,
        "cityid": 101080410,
        "simcode": "chahaeryouyihouqi",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "察右后旗"
      },
      {
        "country": 1,
        "weaid": 546,
        "cityid": 101280103,
        "simcode": "conghua",
        "area_1": "广东",
        "area_2": "广州",
        "area_3": "从化"
      },
      {
        "country": 1,
        "weaid": 547,
        "cityid": 101110204,
        "simcode": "chunhua",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "淳化"
      },
      {
        "country": 1,
        "weaid": 548,
        "cityid": 101260517,
        "simcode": "congjiang",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "从江"
      },
      {
        "country": 1,
        "weaid": 549,
        "cityid": 101290702,
        "simcode": "chengjiang",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "澄江"
      },
      {
        "country": 1,
        "weaid": 550,
        "cityid": 101120605,
        "simcode": "changle",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "昌乐"
      },
      {
        "country": 1,
        "weaid": 551,
        "cityid": 101230110,
        "simcode": "zhangle",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "长乐"
      },
      {
        "country": 1,
        "weaid": 552,
        "cityid": 101131303,
        "simcode": "cele",
        "area_1": "新疆",
        "area_2": "和田",
        "area_3": "策勒"
      },
      {
        "country": 1,
        "weaid": 553,
        "cityid": 101060804,
        "simcode": "changling",
        "area_1": "吉林",
        "area_2": "松原",
        "area_3": "长岭"
      },
      {
        "country": 1,
        "weaid": 554,
        "cityid": 101091103,
        "simcode": "changli",
        "area_1": "河北",
        "area_2": "秦皇岛",
        "area_3": "昌黎"
      },
      {
        "country": 1,
        "weaid": 555,
        "cityid": 101090314,
        "simcode": "chongli",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "崇礼"
      },
      {
        "country": 1,
        "weaid": 556,
        "cityid": 101250305,
        "simcode": "chaling",
        "area_1": "湖南",
        "area_2": "株洲",
        "area_3": "茶陵"
      },
      {
        "country": 1,
        "weaid": 557,
        "cityid": 101251103,
        "simcode": "cili",
        "area_1": "湖南",
        "area_2": "张家界",
        "area_3": "慈利"
      },
      {
        "country": 1,
        "weaid": 558,
        "cityid": 101060905,
        "simcode": "changbai",
        "area_1": "吉林",
        "area_2": "白山",
        "area_3": "长白"
      },
      {
        "country": 1,
        "weaid": 559,
        "cityid": 101210709,
        "simcode": "cangnan",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "苍南"
      },
      {
        "country": 1,
        "weaid": 561,
        "cityid": 101250406,
        "simcode": "changning",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "常宁"
      },
      {
        "country": 1,
        "weaid": 562,
        "cityid": 101271106,
        "simcode": "scchangning",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "长宁"
      },
      {
        "country": 1,
        "weaid": 563,
        "cityid": 101290505,
        "simcode": "ynchangning",
        "area_1": "云南",
        "area_2": "保山",
        "area_3": "昌宁"
      },
      {
        "country": 1,
        "weaid": 564,
        "cityid": 101181603,
        "simcode": "suiping",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "遂平"
      },
      {
        "country": 1,
        "weaid": 566,
        "cityid": 101120102,
        "simcode": "changqing",
        "area_1": "山东",
        "area_2": "济南",
        "area_3": "长清"
      },
      {
        "country": 1,
        "weaid": 567,
        "cityid": 101240404,
        "simcode": "chongren",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "崇仁"
      },
      {
        "country": 1,
        "weaid": 568,
        "cityid": 101120904,
        "simcode": "linyilanling",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "兰陵"
      },
      {
        "country": 1,
        "weaid": 569,
        "cityid": 101190402,
        "simcode": "changshu",
        "area_1": "江苏",
        "area_2": "苏州",
        "area_3": "常熟"
      },
      {
        "country": 1,
        "weaid": 570,
        "cityid": 101211002,
        "simcode": "changshan",
        "area_1": "浙江",
        "area_2": "衢州",
        "area_3": "常山"
      },
      {
        "country": 1,
        "weaid": 571,
        "cityid": 101260208,
        "simcode": "chishui",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "赤水"
      },
      {
        "country": 1,
        "weaid": 572,
        "cityid": 101260404,
        "simcode": "changshun",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "长顺"
      },
      {
        "country": 1,
        "weaid": 573,
        "cityid": 101230602,
        "simcode": "changtai",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "长泰"
      },
      {
        "country": 1,
        "weaid": 574,
        "cityid": 101230702,
        "simcode": "changting",
        "area_1": "福建",
        "area_2": "龙岩",
        "area_3": "长汀"
      },
      {
        "country": 1,
        "weaid": 576,
        "cityid": 101071103,
        "simcode": "changtu",
        "area_1": "辽宁",
        "area_2": "铁岭",
        "area_3": "昌图"
      },
      {
        "country": 1,
        "weaid": 577,
        "cityid": 101121008,
        "simcode": "chengwu",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "成武"
      },
      {
        "country": 1,
        "weaid": 578,
        "cityid": 101300604,
        "simcode": "cangwu",
        "area_1": "广西",
        "area_2": "梧州",
        "area_3": "苍梧"
      },
      {
        "country": 1,
        "weaid": 579,
        "cityid": 101110209,
        "simcode": "changwu",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "长武"
      },
      {
        "country": 1,
        "weaid": 580,
        "cityid": 101121007,
        "simcode": "caoxian",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "曹县"
      },
      {
        "country": 1,
        "weaid": 581,
        "cityid": 101210202,
        "simcode": "changxing",
        "area_1": "浙江",
        "area_2": "湖州",
        "area_3": "长兴"
      },
      {
        "country": 1,
        "weaid": 582,
        "cityid": 101210403,
        "simcode": "cixi",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "慈溪"
      },
      {
        "country": 1,
        "weaid": 583,
        "cityid": 101251204,
        "simcode": "chenxi",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "辰溪"
      },
      {
        "country": 1,
        "weaid": 584,
        "cityid": 101300606,
        "simcode": "cenxi",
        "area_1": "广西",
        "area_2": "梧州",
        "area_3": "岑溪"
      },
      {
        "country": 1,
        "weaid": 585,
        "cityid": 101160304,
        "simcode": "chongxin",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "崇信"
      },
      {
        "country": 1,
        "weaid": 586,
        "cityid": 101161002,
        "simcode": "chengxian",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "成县"
      },
      {
        "country": 1,
        "weaid": 587,
        "cityid": 101272105,
        "simcode": "cangxi",
        "area_1": "四川",
        "area_2": "广元",
        "area_3": "苍溪"
      },
      {
        "country": 1,
        "weaid": 588,
        "cityid": 101200704,
        "simcode": "chongyang",
        "area_1": "湖北",
        "area_2": "咸宁",
        "area_3": "崇阳"
      },
      {
        "country": 1,
        "weaid": 589,
        "cityid": 101200908,
        "simcode": "changyang",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "长阳"
      },
      {
        "country": 1,
        "weaid": 590,
        "cityid": 101280502,
        "simcode": "chaoyang",
        "area_1": "广东",
        "area_2": "汕头",
        "area_3": "潮阳"
      },
      {
        "country": 1,
        "weaid": 591,
        "cityid": 101120606,
        "simcode": "changyi",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "昌邑"
      },
      {
        "country": 1,
        "weaid": 592,
        "cityid": 101240702,
        "simcode": "chongyi",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "崇义"
      },
      {
        "country": 1,
        "weaid": 593,
        "cityid": 101180308,
        "simcode": "changyuan",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "长垣"
      },
      {
        "country": 1,
        "weaid": 594,
        "cityid": 101291102,
        "simcode": "cangyuan",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "沧源"
      },
      {
        "country": 1,
        "weaid": 595,
        "cityid": 101270114,
        "simcode": "chongzhou",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "崇州"
      },
      {
        "country": 1,
        "weaid": 596,
        "cityid": 101100509,
        "simcode": "changzi",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "长子"
      },
      {
        "country": 1,
        "weaid": 597,
        "cityid": 101060603,
        "simcode": "daan",
        "area_1": "吉林",
        "area_2": "白城",
        "area_3": "大安"
      },
      {
        "country": 1,
        "weaid": 598,
        "cityid": 101240205,
        "simcode": "dean",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "德安"
      },
      {
        "country": 1,
        "weaid": 599,
        "cityid": 101251403,
        "simcode": "dongan",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "东安"
      },
      {
        "country": 1,
        "weaid": 600,
        "cityid": 101301210,
        "simcode": "duan",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "都安"
      },
      {
        "country": 1,
        "weaid": 601,
        "cityid": 101282004,
        "simcode": "dianbai",
        "area_1": "广东",
        "area_2": "茂名",
        "area_3": "电白"
      },
      {
        "country": 1,
        "weaid": 602,
        "cityid": 101301004,
        "simcode": "debao",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "德保"
      },
      {
        "country": 1,
        "weaid": 603,
        "cityid": 101110405,
        "simcode": "dingbian",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "定边"
      },
      {
        "country": 1,
        "weaid": 604,
        "cityid": 101161205,
        "simcode": "diebu",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "迭部"
      },
      {
        "country": 1,
        "weaid": 605,
        "cityid": 101150713,
        "simcode": "dachaidan",
        "area_1": "青海",
        "area_2": "海西",
        "area_3": "大柴旦"
      },
      {
        "country": 1,
        "weaid": 606,
        "cityid": 101240210,
        "simcode": "duchang",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "都昌"
      },
      {
        "country": 1,
        "weaid": 607,
        "cityid": 101181408,
        "simcode": "dancheng",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "郸城"
      },
      {
        "country": 1,
        "weaid": 608,
        "cityid": 101290103,
        "simcode": "dongchuan",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "东川"
      },
      {
        "country": 1,
        "weaid": 609,
        "cityid": 101090605,
        "simcode": "dacheng",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "大城"
      },
      {
        "country": 1,
        "weaid": 610,
        "cityid": 101090607,
        "simcode": "dachang",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "大厂"
      },
      {
        "country": 1,
        "weaid": 611,
        "cityid": 101271605,
        "simcode": "dechang",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "德昌"
      },
      {
        "country": 1,
        "weaid": 612,
        "cityid": 101050905,
        "simcode": "duerbote",
        "area_1": "黑龙江",
        "area_2": "大庆",
        "area_3": "杜尔伯特"
      },
      {
        "country": 1,
        "weaid": 613,
        "cityid": 101260705,
        "simcode": "dafang",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "大方"
      },
      {
        "country": 1,
        "weaid": 614,
        "cityid": 101060702,
        "simcode": "dongfeng",
        "area_1": "吉林",
        "area_2": "辽源",
        "area_3": "东丰"
      },
      {
        "country": 1,
        "weaid": 615,
        "cityid": 101190708,
        "simcode": "dafeng",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "大丰"
      },
      {
        "country": 1,
        "weaid": 616,
        "cityid": 101180104,
        "simcode": "dengfeng",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "登封"
      },
      {
        "country": 1,
        "weaid": 617,
        "cityid": 101110606,
        "simcode": "danfeng",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "丹凤"
      },
      {
        "country": 1,
        "weaid": 618,
        "cityid": 101070604,
        "simcode": "donggang",
        "area_1": "辽宁",
        "area_2": "丹东",
        "area_3": "东港"
      },
      {
        "country": 1,
        "weaid": 619,
        "cityid": 101090703,
        "simcode": "dongguang",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "东光"
      },
      {
        "country": 1,
        "weaid": 620,
        "cityid": 101291010,
        "simcode": "daguan",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "大关"
      },
      {
        "country": 1,
        "weaid": 621,
        "cityid": 101191002,
        "simcode": "donghai",
        "area_1": "江苏",
        "area_2": "连云港",
        "area_3": "东海"
      },
      {
        "country": 1,
        "weaid": 622,
        "cityid": 101280503,
        "simcode": "chenghai",
        "area_1": "广东",
        "area_2": "汕头",
        "area_3": "澄海"
      },
      {
        "country": 1,
        "weaid": 623,
        "cityid": 101060103,
        "simcode": "dehui",
        "area_1": "吉林",
        "area_2": "长春",
        "area_3": "德惠"
      },
      {
        "country": 1,
        "weaid": 624,
        "cityid": 101060302,
        "simcode": "dunhua",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "敦化"
      },
      {
        "country": 1,
        "weaid": 625,
        "cityid": 101230505,
        "simcode": "dehua",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "德化"
      },
      {
        "country": 1,
        "weaid": 626,
        "cityid": 101160808,
        "simcode": "dunhuang",
        "area_1": "甘肃",
        "area_2": "酒泉",
        "area_3": "敦煌"
      },
      {
        "country": 1,
        "weaid": 627,
        "cityid": 101260610,
        "simcode": "dejiang",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "德江"
      },
      {
        "country": 1,
        "weaid": 628,
        "cityid": 101201107,
        "simcode": "danjiangkou",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "丹江口"
      },
      {
        "country": 1,
        "weaid": 629,
        "cityid": 101270111,
        "simcode": "dujiangyan",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "都江堰"
      },
      {
        "country": 1,
        "weaid": 630,
        "cityid": 101080803,
        "simcode": "dengkou",
        "area_1": "内蒙古",
        "area_2": "巴彦淖尔",
        "area_3": "磴口"
      },
      {
        "country": 1,
        "weaid": 631,
        "cityid": 101250903,
        "simcode": "dongkou",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "洞口"
      },
      {
        "country": 1,
        "weaid": 632,
        "cityid": 101301203,
        "simcode": "donglan",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "东兰"
      },
      {
        "country": 1,
        "weaid": 634,
        "cityid": 101150716,
        "simcode": "haixilenghu",
        "area_1": "青海",
        "area_2": "海西",
        "area_3": "冷湖"
      },
      {
        "country": 1,
        "weaid": 635,
        "cityid": 101110504,
        "simcode": "dali",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "大荔"
      },
      {
        "country": 1,
        "weaid": 636,
        "cityid": 101271505,
        "simcode": "danling",
        "area_1": "四川",
        "area_2": "眉山",
        "area_3": "丹棱"
      },
      {
        "country": 1,
        "weaid": 637,
        "cityid": 101080703,
        "simcode": "dalateqi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "达拉特"
      },
      {
        "country": 1,
        "weaid": 638,
        "cityid": 101080915,
        "simcode": "duolun",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "多伦"
      },
      {
        "country": 1,
        "weaid": 639,
        "cityid": 101280702,
        "simcode": "doumen",
        "area_1": "广东",
        "area_2": "珠海",
        "area_3": "斗门"
      },
      {
        "country": 1,
        "weaid": 640,
        "cityid": 101121004,
        "simcode": "dongming",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "东明"
      },
      {
        "country": 1,
        "weaid": 641,
        "cityid": 101240715,
        "simcode": "dingnan",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "定南"
      },
      {
        "country": 1,
        "weaid": 642,
        "cityid": 101050307,
        "simcode": "dongning",
        "area_1": "黑龙江",
        "area_2": "牡丹江",
        "area_3": "东宁"
      },
      {
        "country": 1,
        "weaid": 643,
        "cityid": 101100705,
        "simcode": "daning",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "大宁"
      },
      {
        "country": 1,
        "weaid": 644,
        "cityid": 101120805,
        "simcode": "dongping",
        "area_1": "山东",
        "area_2": "泰安",
        "area_3": "东平"
      },
      {
        "country": 1,
        "weaid": 645,
        "cityid": 101280404,
        "simcode": "dapu",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "大埔"
      },
      {
        "country": 1,
        "weaid": 646,
        "cityid": 101210204,
        "simcode": "deqing",
        "area_1": "浙江",
        "area_2": "湖州",
        "area_3": "德清"
      },
      {
        "country": 1,
        "weaid": 647,
        "cityid": 101280905,
        "simcode": "gddeqing",
        "area_1": "广东",
        "area_2": "肇庆",
        "area_3": "德庆"
      },
      {
        "country": 1,
        "weaid": 648,
        "cityid": 101140502,
        "simcode": "dingqing",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "丁青"
      },
      {
        "country": 1,
        "weaid": 649,
        "cityid": 101291302,
        "simcode": "deqin",
        "area_1": "云南",
        "area_2": "迪庆",
        "area_3": "德钦"
      },
      {
        "country": 1,
        "weaid": 650,
        "cityid": 101150504,
        "simcode": "dari",
        "area_1": "青海",
        "area_2": "果洛",
        "area_3": "达日"
      },
      {
        "country": 1,
        "weaid": 651,
        "cityid": 101140205,
        "simcode": "dingri",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "定日"
      },
      {
        "country": 1,
        "weaid": 652,
        "cityid": 101080713,
        "simcode": "dongsheng",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "东胜"
      },
      {
        "country": 1,
        "weaid": 653,
        "cityid": 101220702,
        "simcode": "dangshan",
        "area_1": "安徽",
        "area_2": "宿州",
        "area_3": "砀山"
      },
      {
        "country": 1,
        "weaid": 655,
        "cityid": 101211104,
        "simcode": "daishan",
        "area_1": "浙江",
        "area_2": "舟山",
        "area_3": "岱山"
      },
      {
        "country": 1,
        "weaid": 656,
        "cityid": 101230608,
        "simcode": "dongshan",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "东山"
      },
      {
        "country": 1,
        "weaid": 657,
        "cityid": 101260410,
        "simcode": "dushan",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "独山"
      },
      {
        "country": 1,
        "weaid": 658,
        "cityid": 101070802,
        "simcode": "dashiqiao",
        "area_1": "辽宁",
        "area_2": "营口",
        "area_3": "大石桥"
      },
      {
        "country": 1,
        "weaid": 659,
        "cityid": 101071003,
        "simcode": "dengta",
        "area_1": "辽宁",
        "area_2": "辽阳",
        "area_3": "灯塔"
      },
      {
        "country": 1,
        "weaid": 660,
        "cityid": 101121005,
        "simcode": "dingtao",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "定陶"
      },
      {
        "country": 1,
        "weaid": 661,
        "cityid": 101190707,
        "simcode": "dongtai",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "东台"
      },
      {
        "country": 1,
        "weaid": 662,
        "cityid": 101230811,
        "simcode": "datian",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "大田"
      },
      {
        "country": 1,
        "weaid": 663,
        "cityid": 101210706,
        "simcode": "dongtou",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "洞头"
      },
      {
        "country": 1,
        "weaid": 664,
        "cityid": 101150102,
        "simcode": "datong",
        "area_1": "青海",
        "area_2": "西宁",
        "area_3": "大通"
      },
      {
        "country": 1,
        "weaid": 665,
        "cityid": 101220502,
        "simcode": "dangtu",
        "area_1": "安徽",
        "area_2": "马鞍山",
        "area_3": "当涂"
      },
      {
        "country": 1,
        "weaid": 666,
        "cityid": 101071302,
        "simcode": "dawa",
        "area_1": "辽宁",
        "area_2": "盘锦",
        "area_3": "大洼"
      },
      {
        "country": 1,
        "weaid": 668,
        "cityid": 101080909,
        "simcode": "dongwuzhumuqinqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "东乌旗"
      },
      {
        "country": 1,
        "weaid": 669,
        "cityid": 101200404,
        "simcode": "dawu",
        "area_1": "湖北",
        "area_2": "孝感",
        "area_3": "大悟"
      },
      {
        "country": 1,
        "weaid": 670,
        "cityid": 101101002,
        "simcode": "dingxiang",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "定襄"
      },
      {
        "country": 1,
        "weaid": 671,
        "cityid": 101101008,
        "simcode": "daixian",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "代县"
      },
      {
        "country": 1,
        "weaid": 672,
        "cityid": 101240307,
        "simcode": "dexing",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "德兴"
      },
      {
        "country": 1,
        "weaid": 673,
        "cityid": 101240411,
        "simcode": "dongxiang",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "东乡"
      },
      {
        "country": 1,
        "weaid": 674,
        "cityid": 101251405,
        "simcode": "daoxian",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "道县"
      },
      {
        "country": 1,
        "weaid": 675,
        "cityid": 101300205,
        "simcode": "daxin",
        "area_1": "广西",
        "area_2": "崇左",
        "area_3": "大新"
      },
      {
        "country": 1,
        "weaid": 678,
        "cityid": 101190302,
        "simcode": "danyang",
        "area_1": "江苏",
        "area_2": "镇江",
        "area_3": "丹阳"
      },
      {
        "country": 1,
        "weaid": 679,
        "cityid": 101210905,
        "simcode": "dongyang",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "东阳"
      },
      {
        "country": 1,
        "weaid": 680,
        "cityid": 101200907,
        "simcode": "dangyang",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "当阳"
      },
      {
        "country": 1,
        "weaid": 681,
        "cityid": 101290802,
        "simcode": "dayao",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "大姚"
      },
      {
        "country": 1,
        "weaid": 682,
        "cityid": 101200602,
        "simcode": "daye",
        "area_1": "湖北",
        "area_2": "黄石",
        "area_3": "大冶"
      },
      {
        "country": 1,
        "weaid": 683,
        "cityid": 101270108,
        "simcode": "dayi",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "大邑"
      },
      {
        "country": 1,
        "weaid": 684,
        "cityid": 101221104,
        "simcode": "dingyuan",
        "area_1": "安徽",
        "area_2": "滁州",
        "area_3": "定远"
      },
      {
        "country": 1,
        "weaid": 685,
        "cityid": 101240705,
        "simcode": "dayu",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "大余"
      },
      {
        "country": 1,
        "weaid": 686,
        "cityid": 101090219,
        "simcode": "dingzhou",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "定州"
      },
      {
        "country": 1,
        "weaid": 687,
        "cityid": 101221702,
        "simcode": "dongzhi",
        "area_1": "安徽",
        "area_2": "池州",
        "area_3": "东至"
      },
      {
        "country": 1,
        "weaid": 688,
        "cityid": 101180711,
        "simcode": "dengzhou",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "邓州"
      },
      {
        "country": 1,
        "weaid": 689,
        "cityid": 101270604,
        "simcode": "dazhu",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "大竹"
      },
      {
        "country": 1,
        "weaid": 690,
        "cityid": 101260210,
        "simcode": "daozhen",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "道真"
      },
      {
        "country": 1,
        "weaid": 691,
        "cityid": 101260508,
        "simcode": "danzhai",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "丹寨"
      },
      {
        "country": 1,
        "weaid": 692,
        "cityid": 101271406,
        "simcode": "ebian",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "峨边"
      },
      {
        "country": 1,
        "weaid": 693,
        "cityid": 101081203,
        "simcode": "ejinaqi",
        "area_1": "内蒙古",
        "area_2": "阿拉善盟",
        "area_3": "额济纳"
      },
      {
        "country": 1,
        "weaid": 694,
        "cityid": 101080903,
        "simcode": "erlianhaote",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "二连浩特"
      },
      {
        "country": 1,
        "weaid": 695,
        "cityid": 101131103,
        "simcode": "emin",
        "area_1": "新疆",
        "area_2": "塔城",
        "area_3": "额敏"
      },
      {
        "country": 1,
        "weaid": 696,
        "cityid": 101271409,
        "simcode": "emeishan",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "峨眉山"
      },
      {
        "country": 1,
        "weaid": 697,
        "cityid": 101281105,
        "simcode": "enping",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "恩平"
      },
      {
        "country": 1,
        "weaid": 698,
        "cityid": 101290708,
        "simcode": "eshan",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "峨山"
      },
      {
        "country": 1,
        "weaid": 699,
        "cityid": 101080708,
        "simcode": "etuokeqi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "鄂托克"
      },
      {
        "country": 1,
        "weaid": 700,
        "cityid": 101080705,
        "simcode": "etuokeqianqi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "鄂前旗"
      },
      {
        "country": 1,
        "weaid": 701,
        "cityid": 101290210,
        "simcode": "eryuan",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "洱源"
      },
      {
        "country": 1,
        "weaid": 702,
        "cityid": 101230306,
        "simcode": "fuan",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "福安"
      },
      {
        "country": 1,
        "weaid": 703,
        "cityid": 101070602,
        "simcode": "fengcheng",
        "area_1": "辽宁",
        "area_2": "丹东",
        "area_3": "凤城"
      },
      {
        "country": 1,
        "weaid": 704,
        "cityid": 101120804,
        "simcode": "feicheng",
        "area_1": "山东",
        "area_2": "泰安",
        "area_3": "肥城"
      },
      {
        "country": 1,
        "weaid": 705,
        "cityid": 101220302,
        "simcode": "fanchang",
        "area_1": "安徽",
        "area_2": "芜湖",
        "area_3": "繁昌"
      },
      {
        "country": 1,
        "weaid": 706,
        "cityid": 101240510,
        "simcode": "jxfengcheng",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "丰城"
      },
      {
        "country": 1,
        "weaid": 707,
        "cityid": 101180703,
        "simcode": "fangcheng",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "方城"
      },
      {
        "country": 1,
        "weaid": 708,
        "cityid": 101300703,
        "simcode": "fuchuan",
        "area_1": "广西",
        "area_2": "贺州",
        "area_3": "富川"
      },
      {
        "country": 1,
        "weaid": 709,
        "cityid": 101230308,
        "simcode": "fuding",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "福鼎"
      },
      {
        "country": 1,
        "weaid": 710,
        "cityid": 101220103,
        "simcode": "feidong",
        "area_1": "安徽",
        "area_2": "合肥",
        "area_3": "肥东"
      },
      {
        "country": 1,
        "weaid": 711,
        "cityid": 101110907,
        "simcode": "fufeng",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "扶风"
      },
      {
        "country": 1,
        "weaid": 712,
        "cityid": 101281306,
        "simcode": "fugang",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "佛冈"
      },
      {
        "country": 1,
        "weaid": 713,
        "cityid": 101260206,
        "simcode": "fenggang",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "凤冈"
      },
      {
        "country": 1,
        "weaid": 714,
        "cityid": 101181402,
        "simcode": "fugou",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "扶沟"
      },
      {
        "country": 1,
        "weaid": 715,
        "cityid": 101291203,
        "simcode": "fugong",
        "area_1": "云南",
        "area_2": "怒江",
        "area_3": "福贡"
      },
      {
        "country": 1,
        "weaid": 716,
        "cityid": 101110402,
        "simcode": "fugu",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "府谷"
      },
      {
        "country": 1,
        "weaid": 717,
        "cityid": 101131407,
        "simcode": "fuhai",
        "area_1": "新疆",
        "area_2": "阿勒泰",
        "area_3": "福海"
      },
      {
        "country": 1,
        "weaid": 718,
        "cityid": 101210405,
        "simcode": "fenghua",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "奉化"
      },
      {
        "country": 1,
        "weaid": 719,
        "cityid": 101251505,
        "simcode": "fenghuang",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "凤凰"
      },
      {
        "country": 1,
        "weaid": 720,
        "cityid": 101050407,
        "simcode": "fujin",
        "area_1": "黑龙江",
        "area_2": "佳木斯",
        "area_3": "富锦"
      },
      {
        "country": 1,
        "weaid": 721,
        "cityid": 101280907,
        "simcode": "fengkai",
        "area_1": "广东",
        "area_2": "肇庆",
        "area_3": "封开"
      },
      {
        "country": 1,
        "weaid": 722,
        "cityid": 101130404,
        "simcode": "fukang",
        "area_1": "新疆",
        "area_2": "昌吉",
        "area_3": "阜康"
      },
      {
        "country": 1,
        "weaid": 723,
        "cityid": 101070105,
        "simcode": "faku",
        "area_1": "辽宁",
        "area_2": "沈阳",
        "area_3": "法库"
      },
      {
        "country": 1,
        "weaid": 724,
        "cityid": 101290109,
        "simcode": "fumin",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "富民"
      },
      {
        "country": 1,
        "weaid": 725,
        "cityid": 101090502,
        "simcode": "fengnan",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "丰南"
      },
      {
        "country": 1,
        "weaid": 726,
        "cityid": 101220802,
        "simcode": "funan",
        "area_1": "安徽",
        "area_2": "阜阳",
        "area_3": "阜南"
      },
      {
        "country": 1,
        "weaid": 727,
        "cityid": 101190704,
        "simcode": "jsfuning",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "阜宁"
      },
      {
        "country": 1,
        "weaid": 728,
        "cityid": 101290608,
        "simcode": "funing",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "富宁"
      },
      {
        "country": 1,
        "weaid": 729,
        "cityid": 101090408,
        "simcode": "fengning",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "丰宁"
      },
      {
        "country": 1,
        "weaid": 730,
        "cityid": 101090203,
        "simcode": "hbfuping",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "阜平"
      },
      {
        "country": 1,
        "weaid": 731,
        "cityid": 101110506,
        "simcode": "fuping",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "富平"
      },
      {
        "country": 1,
        "weaid": 732,
        "cityid": 101110808,
        "simcode": "sxfuping",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "佛坪"
      },
      {
        "country": 1,
        "weaid": 733,
        "cityid": 101230111,
        "simcode": "fuqing",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "福清"
      },
      {
        "country": 1,
        "weaid": 734,
        "cityid": 101180307,
        "simcode": "fengqiu",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "封丘"
      },
      {
        "country": 1,
        "weaid": 735,
        "cityid": 101291105,
        "simcode": "fengqing",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "凤庆"
      },
      {
        "country": 1,
        "weaid": 736,
        "cityid": 101260405,
        "simcode": "fuquan",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "福泉"
      },
      {
        "country": 1,
        "weaid": 737,
        "cityid": 101090503,
        "simcode": "fengrun",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "丰润"
      },
      {
        "country": 1,
        "weaid": 738,
        "cityid": 101050403,
        "simcode": "hljfuyuan",
        "area_1": "黑龙江",
        "area_2": "佳木斯",
        "area_3": "抚远"
      },
      {
        "country": 1,
        "weaid": 739,
        "cityid": 101100715,
        "simcode": "fushan",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "浮山"
      },
      {
        "country": 1,
        "weaid": 740,
        "cityid": 101101107,
        "simcode": "sxfangshan",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "方山"
      },
      {
        "country": 1,
        "weaid": 741,
        "cityid": 101280406,
        "simcode": "fengshun",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "丰顺"
      },
      {
        "country": 1,
        "weaid": 742,
        "cityid": 101301208,
        "simcode": "fengshan",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "凤山"
      },
      {
        "country": 1,
        "weaid": 743,
        "cityid": 101270302,
        "simcode": "scfushun",
        "area_1": "四川",
        "area_2": "自贡",
        "area_3": "富顺"
      },
      {
        "country": 1,
        "weaid": 744,
        "cityid": 101300206,
        "simcode": "fusui",
        "area_1": "广西",
        "area_2": "崇左",
        "area_3": "扶绥"
      },
      {
        "country": 1,
        "weaid": 745,
        "cityid": 101220402,
        "simcode": "ahfengtai",
        "area_1": "安徽",
        "area_2": "淮南",
        "area_3": "凤台"
      },
      {
        "country": 1,
        "weaid": 746,
        "cityid": 101091008,
        "simcode": "feixiang",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "肥乡"
      },
      {
        "country": 1,
        "weaid": 747,
        "cityid": 101100709,
        "simcode": "fenxi",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "汾西"
      },
      {
        "country": 1,
        "weaid": 748,
        "cityid": 101120909,
        "simcode": "feixian",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "费县"
      },
      {
        "country": 1,
        "weaid": 749,
        "cityid": 101190803,
        "simcode": "jsfengxian",
        "area_1": "江苏",
        "area_2": "徐州",
        "area_3": "丰县"
      },
      {
        "country": 1,
        "weaid": 750,
        "cityid": 101220104,
        "simcode": "feixi",
        "area_1": "安徽",
        "area_2": "合肥",
        "area_3": "肥西"
      },
      {
        "country": 1,
        "weaid": 751,
        "cityid": 101240507,
        "simcode": "fengxin",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "奉新"
      },
      {
        "country": 1,
        "weaid": 752,
        "cityid": 101181305,
        "simcode": "fanxian",
        "area_1": "河南",
        "area_2": "濮阳",
        "area_3": "范县"
      },
      {
        "country": 1,
        "weaid": 753,
        "cityid": 101201106,
        "simcode": "fangxian",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "房县"
      },
      {
        "country": 1,
        "weaid": 754,
        "cityid": 101110305,
        "simcode": "fuxian",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "富县"
      },
      {
        "country": 1,
        "weaid": 755,
        "cityid": 101110910,
        "simcode": "sxfengxian",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "凤县"
      },
      {
        "country": 1,
        "weaid": 756,
        "cityid": 101110906,
        "simcode": "fengxiang",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "凤翔"
      },
      {
        "country": 1,
        "weaid": 757,
        "cityid": 101101111,
        "simcode": "fenyang",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "汾阳"
      },
      {
        "country": 1,
        "weaid": 758,
        "cityid": 101221102,
        "simcode": "fengyang",
        "area_1": "安徽",
        "area_2": "滁州",
        "area_3": "凤阳"
      },
      {
        "country": 1,
        "weaid": 759,
        "cityid": 101210108,
        "simcode": "fuyang",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "富阳"
      },
      {
        "country": 1,
        "weaid": 760,
        "cityid": 101241002,
        "simcode": "fenyi",
        "area_1": "江西",
        "area_2": "新余",
        "area_3": "分宜"
      },
      {
        "country": 1,
        "weaid": 761,
        "cityid": 101050205,
        "simcode": "hljfuyu",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "富裕"
      },
      {
        "country": 1,
        "weaid": 762,
        "cityid": 101060805,
        "simcode": "fuyu",
        "area_1": "吉林",
        "area_2": "松原",
        "area_3": "扶余"
      },
      {
        "country": 1,
        "weaid": 763,
        "cityid": 101280102,
        "simcode": "fanyu",
        "area_1": "广东",
        "area_2": "广州",
        "area_3": "番禺"
      },
      {
        "country": 1,
        "weaid": 764,
        "cityid": 101290404,
        "simcode": "fuyuan",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "富源"
      },
      {
        "country": 1,
        "weaid": 765,
        "cityid": 101131408,
        "simcode": "fuyun",
        "area_1": "新疆",
        "area_2": "阿勒泰",
        "area_3": "富蕴"
      },
      {
        "country": 1,
        "weaid": 766,
        "cityid": 101050109,
        "simcode": "fangzheng",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "方正"
      },
      {
        "country": 1,
        "weaid": 767,
        "cityid": 101101009,
        "simcode": "fanzhi",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "繁峙"
      },
      {
        "country": 1,
        "weaid": 768,
        "cityid": 101080412,
        "simcode": "fengzhen",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "丰镇"
      },
      {
        "country": 1,
        "weaid": 770,
        "cityid": 101240508,
        "simcode": "gaoan",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "高安"
      },
      {
        "country": 1,
        "weaid": 771,
        "cityid": 101200803,
        "simcode": "gongan",
        "area_1": "湖北",
        "area_2": "荆州",
        "area_3": "公安"
      },
      {
        "country": 1,
        "weaid": 772,
        "cityid": 101090602,
        "simcode": "guan",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "固安"
      },
      {
        "country": 1,
        "weaid": 773,
        "cityid": 101090221,
        "simcode": "gaobeidian",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "高碑店"
      },
      {
        "country": 1,
        "weaid": 774,
        "cityid": 101090115,
        "simcode": "gaocheng",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "藁城"
      },
      {
        "country": 1,
        "weaid": 775,
        "cityid": 101190103,
        "simcode": "gaochun",
        "area_1": "江苏",
        "area_2": "南京",
        "area_3": "高淳"
      },
      {
        "country": 1,
        "weaid": 776,
        "cityid": 101200207,
        "simcode": "gucheng",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "谷城"
      },
      {
        "country": 1,
        "weaid": 777,
        "cityid": 101300511,
        "simcode": "gongcheng",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "恭城"
      },
      {
        "country": 1,
        "weaid": 778,
        "cityid": 101150806,
        "simcode": "gangcha",
        "area_1": "青海",
        "area_2": "海北",
        "area_3": "刚察"
      },
      {
        "country": 1,
        "weaid": 779,
        "cityid": 101221406,
        "simcode": "guangde",
        "area_1": "安徽",
        "area_2": "宣城",
        "area_3": "广德"
      },
      {
        "country": 1,
        "weaid": 780,
        "cityid": 101240402,
        "simcode": "guangchang",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "广昌"
      },
      {
        "country": 1,
        "weaid": 781,
        "cityid": 101150404,
        "simcode": "guide",
        "area_1": "青海",
        "area_2": "海南",
        "area_3": "贵德"
      },
      {
        "country": 1,
        "weaid": 782,
        "cityid": 101150503,
        "simcode": "gande",
        "area_1": "青海",
        "area_2": "果洛",
        "area_3": "甘德"
      },
      {
        "country": 1,
        "weaid": 783,
        "cityid": 101260402,
        "simcode": "guiding",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "贵定"
      },
      {
        "country": 1,
        "weaid": 784,
        "cityid": 101250511,
        "simcode": "guidong",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "桂东"
      },
      {
        "country": 1,
        "weaid": 785,
        "cityid": 101240313,
        "simcode": "guangfeng",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "广丰"
      },
      {
        "country": 1,
        "weaid": 786,
        "cityid": 101160905,
        "simcode": "gangu",
        "area_1": "甘肃",
        "area_2": "天水",
        "area_3": "甘谷"
      },
      {
        "country": 1,
        "weaid": 787,
        "cityid": 101272003,
        "simcode": "guanghan",
        "area_1": "四川",
        "area_2": "德阳",
        "area_3": "广汉"
      },
      {
        "country": 1,
        "weaid": 788,
        "cityid": 101081015,
        "simcode": "genhe",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "根河"
      },
      {
        "country": 1,
        "weaid": 789,
        "cityid": 101161104,
        "simcode": "guanghe",
        "area_1": "甘肃",
        "area_2": "临夏",
        "area_3": "广河"
      },
      {
        "country": 1,
        "weaid": 791,
        "cityid": 101290308,
        "simcode": "gejiu",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "个旧"
      },
      {
        "country": 1,
        "weaid": 792,
        "cityid": 101271612,
        "simcode": "zhaojue",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "昭觉"
      },
      {
        "country": 1,
        "weaid": 793,
        "cityid": 101160102,
        "simcode": "gaolan",
        "area_1": "甘肃",
        "area_2": "兰州",
        "area_3": "皋兰"
      },
      {
        "country": 1,
        "weaid": 794,
        "cityid": 101160306,
        "simcode": "zhuanglang",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "庄浪"
      },
      {
        "country": 1,
        "weaid": 795,
        "cityid": 101160503,
        "simcode": "gulang",
        "area_1": "甘肃",
        "area_2": "武威",
        "area_3": "古浪"
      },
      {
        "country": 1,
        "weaid": 796,
        "cityid": 101100205,
        "simcode": "guangling",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "广灵"
      },
      {
        "country": 1,
        "weaid": 797,
        "cityid": 101271006,
        "simcode": "gulin",
        "area_1": "四川",
        "area_2": "泸州",
        "area_3": "古蔺"
      },
      {
        "country": 1,
        "weaid": 798,
        "cityid": 101260306,
        "simcode": "guanling",
        "area_1": "贵州",
        "area_2": "安顺",
        "area_3": "关岭"
      },
      {
        "country": 1,
        "weaid": 799,
        "cityid": 101110107,
        "simcode": "gaoling",
        "area_1": "陕西",
        "area_2": "西安",
        "area_3": "高陵"
      },
      {
        "country": 1,
        "weaid": 800,
        "cityid": 101131005,
        "simcode": "gongliu",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "巩留"
      },
      {
        "country": 1,
        "weaid": 801,
        "cityid": 101271616,
        "simcode": "ganluo",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "甘洛"
      },
      {
        "country": 1,
        "weaid": 802,
        "cityid": 101291103,
        "simcode": "gengma",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "耿马"
      },
      {
        "country": 1,
        "weaid": 803,
        "cityid": 101120608,
        "simcode": "gaomi",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "高密"
      },
      {
        "country": 1,
        "weaid": 804,
        "cityid": 101191005,
        "simcode": "guannan",
        "area_1": "江苏",
        "area_2": "连云港",
        "area_3": "灌南"
      },
      {
        "country": 1,
        "weaid": 805,
        "cityid": 101290607,
        "simcode": "guangnan",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "广南"
      },
      {
        "country": 1,
        "weaid": 806,
        "cityid": 101150407,
        "simcode": "guinan",
        "area_1": "青海",
        "area_2": "海南",
        "area_3": "贵南"
      },
      {
        "country": 1,
        "weaid": 807,
        "cityid": 101280902,
        "simcode": "guangning",
        "area_1": "广东",
        "area_2": "肇庆",
        "area_3": "广宁"
      },
      {
        "country": 1,
        "weaid": 808,
        "cityid": 101091012,
        "simcode": "guangping",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "广平"
      },
      {
        "country": 1,
        "weaid": 809,
        "cityid": 101100605,
        "simcode": "gaoping",
        "area_1": "山西",
        "area_2": "晋城",
        "area_3": "高平"
      },
      {
        "country": 1,
        "weaid": 810,
        "cityid": 101300802,
        "simcode": "guiping",
        "area_1": "广西",
        "area_2": "贵港",
        "area_3": "桂平"
      },
      {
        "country": 1,
        "weaid": 811,
        "cityid": 101120304,
        "simcode": "gaoqing",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "高青"
      },
      {
        "country": 1,
        "weaid": 812,
        "cityid": 101110308,
        "simcode": "ganquan",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "甘泉"
      },
      {
        "country": 1,
        "weaid": 813,
        "cityid": 101121205,
        "simcode": "guangrao",
        "area_1": "山东",
        "area_2": "东营",
        "area_3": "广饶"
      },
      {
        "country": 1,
        "weaid": 814,
        "cityid": 101201302,
        "simcode": "guangshui",
        "area_1": "湖北",
        "area_2": "随州",
        "area_3": "广水"
      },
      {
        "country": 1,
        "weaid": 815,
        "cityid": 101180608,
        "simcode": "gushi",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "固始"
      },
      {
        "country": 1,
        "weaid": 816,
        "cityid": 101180604,
        "simcode": "guangshan",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "光山"
      },
      {
        "country": 1,
        "weaid": 817,
        "cityid": 101291207,
        "simcode": "gongshan",
        "area_1": "云南",
        "area_2": "怒江",
        "area_3": "贡山"
      },
      {
        "country": 1,
        "weaid": 818,
        "cityid": 101091013,
        "simcode": "guantao",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "馆陶"
      },
      {
        "country": 1,
        "weaid": 819,
        "cityid": 101160705,
        "simcode": "gaotai",
        "area_1": "甘肃",
        "area_2": "张掖",
        "area_3": "高台"
      },
      {
        "country": 1,
        "weaid": 820,
        "cityid": 101230302,
        "simcode": "gutian",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "古田"
      },
      {
        "country": 1,
        "weaid": 821,
        "cityid": 101100717,
        "simcode": "guxian",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "古县"
      },
      {
        "country": 1,
        "weaid": 822,
        "cityid": 101241103,
        "simcode": "guixi",
        "area_1": "江西",
        "area_2": "鹰潭",
        "area_3": "贵溪"
      },
      {
        "country": 1,
        "weaid": 823,
        "cityid": 101271107,
        "simcode": "gaoxian",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "高县"
      },
      {
        "country": 1,
        "weaid": 824,
        "cityid": 101271108,
        "simcode": "gongxian",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "珙县"
      },
      {
        "country": 1,
        "weaid": 825,
        "cityid": 101110207,
        "simcode": "qianxian",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "乾县"
      },
      {
        "country": 1,
        "weaid": 826,
        "cityid": 101090206,
        "simcode": "gaoyang",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "高阳"
      },
      {
        "country": 1,
        "weaid": 827,
        "cityid": 101080205,
        "simcode": "guyang",
        "area_1": "内蒙古",
        "area_2": "包头",
        "area_3": "固阳"
      },
      {
        "country": 1,
        "weaid": 828,
        "cityid": 101220902,
        "simcode": "woyang",
        "area_1": "安徽",
        "area_2": "亳州",
        "area_3": "涡阳"
      },
      {
        "country": 1,
        "weaid": 829,
        "cityid": 101250502,
        "simcode": "hnguiyang",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "桂阳"
      },
      {
        "country": 1,
        "weaid": 830,
        "cityid": 101280908,
        "simcode": "gaoyao",
        "area_1": "广东",
        "area_2": "肇庆",
        "area_3": "高要"
      },
      {
        "country": 1,
        "weaid": 831,
        "cityid": 101300509,
        "simcode": "guanyang",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "灌阳"
      },
      {
        "country": 1,
        "weaid": 832,
        "cityid": 101090107,
        "simcode": "gaoyi",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "高邑"
      },
      {
        "country": 1,
        "weaid": 833,
        "cityid": 101180102,
        "simcode": "gongyi",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "巩义"
      },
      {
        "country": 1,
        "weaid": 834,
        "cityid": 101190604,
        "simcode": "gaoyou",
        "area_1": "江苏",
        "area_2": "扬州",
        "area_3": "高邮"
      },
      {
        "country": 1,
        "weaid": 835,
        "cityid": 101090305,
        "simcode": "hbguyuan",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "沽源"
      },
      {
        "country": 1,
        "weaid": 836,
        "cityid": 101191003,
        "simcode": "ganyu",
        "area_1": "江苏",
        "area_2": "连云港",
        "area_3": "赣榆"
      },
      {
        "country": 1,
        "weaid": 837,
        "cityid": 101191004,
        "simcode": "guanyun",
        "area_1": "江苏",
        "area_2": "连云港",
        "area_3": "灌云"
      },
      {
        "country": 1,
        "weaid": 838,
        "cityid": 101230903,
        "simcode": "guangze",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "光泽"
      },
      {
        "country": 1,
        "weaid": 839,
        "cityid": 101140702,
        "simcode": "gaize",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "改则"
      },
      {
        "country": 1,
        "weaid": 840,
        "cityid": 101070803,
        "simcode": "gaizhou",
        "area_1": "辽宁",
        "area_2": "营口",
        "area_3": "盖州"
      },
      {
        "country": 1,
        "weaid": 841,
        "cityid": 101220203,
        "simcode": "guzhen",
        "area_1": "安徽",
        "area_2": "蚌埠",
        "area_3": "固镇"
      },
      {
        "country": 1,
        "weaid": 842,
        "cityid": 101251504,
        "simcode": "guzhang",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "古丈"
      },
      {
        "country": 1,
        "weaid": 843,
        "cityid": 101282002,
        "simcode": "gaozhou",
        "area_1": "广东",
        "area_2": "茂名",
        "area_3": "高州"
      },
      {
        "country": 1,
        "weaid": 845,
        "cityid": 101160805,
        "simcode": "guazhou",
        "area_1": "甘肃",
        "area_2": "酒泉",
        "area_3": "瓜州"
      },
      {
        "country": 1,
        "weaid": 846,
        "cityid": 101060404,
        "simcode": "gongzhuling",
        "area_1": "吉林",
        "area_2": "四平",
        "area_3": "公主岭"
      },
      {
        "country": 1,
        "weaid": 847,
        "cityid": 101090309,
        "simcode": "hbhuaian",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "怀安"
      },
      {
        "country": 1,
        "weaid": 848,
        "cityid": 101190502,
        "simcode": "haian",
        "area_1": "江苏",
        "area_2": "南通",
        "area_3": "海安"
      },
      {
        "country": 1,
        "weaid": 849,
        "cityid": 101230610,
        "simcode": "huaan",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "华安"
      },
      {
        "country": 1,
        "weaid": 850,
        "cityid": 101200502,
        "simcode": "hongan",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "红安"
      },
      {
        "country": 1,
        "weaid": 851,
        "cityid": 101131104,
        "simcode": "hebukesaier",
        "area_1": "新疆",
        "area_2": "塔城",
        "area_3": "和布克赛尔"
      },
      {
        "country": 1,
        "weaid": 852,
        "cityid": 101131402,
        "simcode": "habahe",
        "area_1": "新疆",
        "area_2": "阿勒泰",
        "area_3": "哈巴河"
      },
      {
        "country": 1,
        "weaid": 853,
        "cityid": 101180606,
        "simcode": "huaibin",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "淮滨"
      },
      {
        "country": 1,
        "weaid": 854,
        "cityid": 101050404,
        "simcode": "huachuan",
        "area_1": "黑龙江",
        "area_2": "佳木斯",
        "area_3": "桦川"
      },
      {
        "country": 1,
        "weaid": 855,
        "cityid": 101060308,
        "simcode": "huichun",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "珲春"
      },
      {
        "country": 1,
        "weaid": 856,
        "cityid": 101070304,
        "simcode": "haicheng",
        "area_1": "辽宁",
        "area_2": "鞍山",
        "area_3": "海城"
      },
      {
        "country": 1,
        "weaid": 857,
        "cityid": 101240711,
        "simcode": "huichang",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "会昌"
      },
      {
        "country": 1,
        "weaid": 858,
        "cityid": 101200406,
        "simcode": "hanchuan",
        "area_1": "湖北",
        "area_2": "孝感",
        "area_3": "汉川"
      },
      {
        "country": 1,
        "weaid": 859,
        "cityid": 101110510,
        "simcode": "hancheng",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "韩城"
      },
      {
        "country": 1,
        "weaid": 860,
        "cityid": 101160404,
        "simcode": "huachi",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "华池"
      },
      {
        "country": 1,
        "weaid": 861,
        "cityid": 101131009,
        "simcode": "huocheng",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "霍城"
      },
      {
        "country": 1,
        "weaid": 862,
        "cityid": 101180607,
        "simcode": "huangchuan",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "潢川"
      },
      {
        "country": 1,
        "weaid": 863,
        "cityid": 101080403,
        "simcode": "huade",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "化德"
      },
      {
        "country": 1,
        "weaid": 864,
        "cityid": 101060206,
        "simcode": "huadian",
        "area_1": "吉林",
        "area_2": "桦甸",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 865,
        "cityid": 101250403,
        "simcode": "hengdong",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "衡东"
      },
      {
        "country": 1,
        "weaid": 866,
        "cityid": 101280304,
        "simcode": "huidong",
        "area_1": "广东",
        "area_2": "惠州",
        "area_3": "惠东"
      },
      {
        "country": 1,
        "weaid": 867,
        "cityid": 101271607,
        "simcode": "schuidong",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "会东"
      },
      {
        "country": 1,
        "weaid": 868,
        "cityid": 101280105,
        "simcode": "huadu",
        "area_1": "广东",
        "area_2": "广州",
        "area_3": "花都"
      },
      {
        "country": 1,
        "weaid": 869,
        "cityid": 101240310,
        "simcode": "hengfeng",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "横峰"
      },
      {
        "country": 1,
        "weaid": 870,
        "cityid": 101201006,
        "simcode": "hefeng",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "鹤峰"
      },
      {
        "country": 1,
        "weaid": 871,
        "cityid": 101282102,
        "simcode": "haifeng",
        "area_1": "广东",
        "area_2": "汕尾",
        "area_3": "海丰"
      },
      {
        "country": 1,
        "weaid": 872,
        "cityid": 101100511,
        "simcode": "huguan",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "壶关"
      },
      {
        "country": 1,
        "weaid": 873,
        "cityid": 101251508,
        "simcode": "huayuan",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "花垣"
      },
      {
        "country": 1,
        "weaid": 874,
        "cityid": 101090713,
        "simcode": "huanghua",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "黄骅"
      },
      {
        "country": 1,
        "weaid": 875,
        "cityid": 101200806,
        "simcode": "honghu",
        "area_1": "湖北",
        "area_2": "荆州",
        "area_3": "洪湖"
      },
      {
        "country": 1,
        "weaid": 876,
        "cityid": 101090714,
        "simcode": "hejian",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "河间"
      },
      {
        "country": 1,
        "weaid": 877,
        "cityid": 101100805,
        "simcode": "hejin",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "河津"
      },
      {
        "country": 1,
        "weaid": 878,
        "cityid": 101180302,
        "simcode": "huojia",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "获嘉"
      },
      {
        "country": 1,
        "weaid": 880,
        "cityid": 101280906,
        "simcode": "huaiji",
        "area_1": "广东",
        "area_2": "肇庆",
        "area_3": "怀集"
      },
      {
        "country": 1,
        "weaid": 881,
        "cityid": 101301205,
        "simcode": "huanjiang",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "环江"
      },
      {
        "country": 1,
        "weaid": 882,
        "cityid": 101271004,
        "simcode": "hejiang",
        "area_1": "四川",
        "area_2": "泸州",
        "area_3": "合江"
      },
      {
        "country": 1,
        "weaid": 883,
        "cityid": 101130606,
        "simcode": "hejing",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "和静"
      },
      {
        "country": 1,
        "weaid": 884,
        "cityid": 101080810,
        "simcode": "hangjinhouqi",
        "area_1": "内蒙古",
        "area_2": "巴彦淖尔",
        "area_3": "杭锦后旗"
      },
      {
        "country": 1,
        "weaid": 885,
        "cityid": 101240207,
        "simcode": "hukou",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "湖口"
      },
      {
        "country": 1,
        "weaid": 886,
        "cityid": 101121202,
        "simcode": "hekou",
        "area_1": "山东",
        "area_2": "东营",
        "area_3": "河口"
      },
      {
        "country": 1,
        "weaid": 887,
        "cityid": 101050103,
        "simcode": "hulan",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "呼兰"
      },
      {
        "country": 1,
        "weaid": 888,
        "cityid": 101090311,
        "simcode": "huailai",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "怀来"
      },
      {
        "country": 1,
        "weaid": 889,
        "cityid": 101281904,
        "simcode": "huilai",
        "area_1": "广东",
        "area_2": "揭阳",
        "area_3": "惠来"
      },
      {
        "country": 1,
        "weaid": 890,
        "cityid": 101170104,
        "simcode": "helan",
        "area_1": "宁夏",
        "area_2": "银川",
        "area_3": "贺兰"
      },
      {
        "country": 1,
        "weaid": 891,
        "cityid": 101081001,
        "simcode": "hailaer",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "海拉尔"
      },
      {
        "country": 1,
        "weaid": 892,
        "cityid": 101080104,
        "simcode": "helingeer",
        "area_1": "内蒙古",
        "area_2": "呼和浩特",
        "area_3": "和林"
      },
      {
        "country": 1,
        "weaid": 893,
        "cityid": 101051102,
        "simcode": "hulin",
        "area_1": "黑龙江",
        "area_2": "鸡西",
        "area_3": "虎林"
      },
      {
        "country": 1,
        "weaid": 894,
        "cityid": 101050302,
        "simcode": "hailin",
        "area_1": "黑龙江",
        "area_2": "牡丹江",
        "area_3": "海林"
      },
      {
        "country": 1,
        "weaid": 895,
        "cityid": 101110310,
        "simcode": "huangling",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "黄陵"
      },
      {
        "country": 1,
        "weaid": 896,
        "cityid": 101271606,
        "simcode": "huili",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "会理"
      },
      {
        "country": 1,
        "weaid": 898,
        "cityid": 101060305,
        "simcode": "helong",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "和龙"
      },
      {
        "country": 1,
        "weaid": 899,
        "cityid": 101110311,
        "simcode": "huanglong",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "黄龙"
      },
      {
        "country": 1,
        "weaid": 900,
        "cityid": 101150205,
        "simcode": "hualong",
        "area_1": "青海",
        "area_2": "海东",
        "area_3": "化隆"
      },
      {
        "country": 1,
        "weaid": 901,
        "cityid": 101050504,
        "simcode": "hailun",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "海伦"
      },
      {
        "country": 1,
        "weaid": 902,
        "cityid": 101050704,
        "simcode": "huma",
        "area_1": "黑龙江",
        "area_2": "大兴安岭",
        "area_3": "呼玛"
      },
      {
        "country": 1,
        "weaid": 903,
        "cityid": 101190508,
        "simcode": "haimen",
        "area_1": "江苏",
        "area_2": "南通",
        "area_3": "海门"
      },
      {
        "country": 1,
        "weaid": 904,
        "cityid": 101200508,
        "simcode": "huangmei",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "黄梅"
      },
      {
        "country": 1,
        "weaid": 905,
        "cityid": 101050405,
        "simcode": "huanan",
        "area_1": "黑龙江",
        "area_2": "佳木斯",
        "area_3": "桦南"
      },
      {
        "country": 1,
        "weaid": 906,
        "cityid": 101060504,
        "simcode": "huinan",
        "area_1": "吉林",
        "area_2": "通化",
        "area_3": "辉南"
      },
      {
        "country": 1,
        "weaid": 907,
        "cityid": 101250407,
        "simcode": "hengnan",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "衡南"
      },
      {
        "country": 1,
        "weaid": 908,
        "cityid": 101150304,
        "simcode": "henan",
        "area_1": "青海",
        "area_2": "黄南",
        "area_3": "河南"
      },
      {
        "country": 1,
        "weaid": 909,
        "cityid": 101220605,
        "simcode": "huaining",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "怀宁"
      },
      {
        "country": 1,
        "weaid": 910,
        "cityid": 101210303,
        "simcode": "haining",
        "area_1": "浙江",
        "area_2": "嘉兴",
        "area_3": "海宁"
      },
      {
        "country": 1,
        "weaid": 911,
        "cityid": 101290705,
        "simcode": "huaning",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "华宁"
      },
      {
        "country": 1,
        "weaid": 912,
        "cityid": 101161303,
        "simcode": "huining",
        "area_1": "甘肃",
        "area_2": "白银",
        "area_3": "会宁"
      },
      {
        "country": 1,
        "weaid": 913,
        "cityid": 101170202,
        "simcode": "huinong",
        "area_1": "宁夏",
        "area_2": "石嘴山",
        "area_3": "惠农"
      },
      {
        "country": 1,
        "weaid": 914,
        "cityid": 101281204,
        "simcode": "heping",
        "area_1": "广东",
        "area_2": "河源",
        "area_3": "和平"
      },
      {
        "country": 1,
        "weaid": 915,
        "cityid": 101260505,
        "simcode": "huangping",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "黄平"
      },
      {
        "country": 1,
        "weaid": 916,
        "cityid": 101291403,
        "simcode": "huaping",
        "area_1": "云南",
        "area_2": "丽江",
        "area_3": "华坪"
      },
      {
        "country": 1,
        "weaid": 917,
        "cityid": 101200103,
        "simcode": "huangbei",
        "area_1": "湖北",
        "area_2": "武汉",
        "area_3": "黄陂"
      },
      {
        "country": 1,
        "weaid": 918,
        "cityid": 101301302,
        "simcode": "hepu",
        "area_1": "广西",
        "area_2": "北海",
        "area_3": "合浦"
      },
      {
        "country": 1,
        "weaid": 919,
        "cityid": 101221502,
        "simcode": "huoqiu",
        "area_1": "安徽",
        "area_2": "六安",
        "area_3": "霍邱"
      },
      {
        "country": 1,
        "weaid": 920,
        "cityid": 101290211,
        "simcode": "heqing",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "鹤庆"
      },
      {
        "country": 1,
        "weaid": 921,
        "cityid": 101101004,
        "simcode": "hequ",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "河曲"
      },
      {
        "country": 1,
        "weaid": 922,
        "cityid": 101070504,
        "simcode": "huanren",
        "area_1": "辽宁",
        "area_2": "本溪",
        "area_3": "桓仁"
      },
      {
        "country": 1,
        "weaid": 923,
        "cityid": 101100906,
        "simcode": "huairen",
        "area_1": "山西",
        "area_2": "朔州",
        "area_3": "怀仁"
      },
      {
        "country": 1,
        "weaid": 924,
        "cityid": 101251002,
        "simcode": "huarong",
        "area_1": "湖南",
        "area_2": "岳阳",
        "area_3": "华容"
      },
      {
        "country": 1,
        "weaid": 925,
        "cityid": 101070705,
        "simcode": "heishan",
        "area_1": "辽宁",
        "area_2": "锦州",
        "area_3": "黑山"
      },
      {
        "country": 1,
        "weaid": 926,
        "cityid": 101100405,
        "simcode": "heshun",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "和顺"
      },
      {
        "country": 1,
        "weaid": 928,
        "cityid": 101221506,
        "simcode": "huoshan",
        "area_1": "安徽",
        "area_2": "六安",
        "area_3": "霍山"
      },
      {
        "country": 1,
        "weaid": 929,
        "cityid": 101250402,
        "simcode": "hnhengshan",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "衡山"
      },
      {
        "country": 1,
        "weaid": 930,
        "cityid": 101250604,
        "simcode": "hanshou",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "汉寿"
      },
      {
        "country": 1,
        "weaid": 931,
        "cityid": 101281108,
        "simcode": "heshan",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "鹤山"
      },
      {
        "country": 1,
        "weaid": 932,
        "cityid": 101260406,
        "simcode": "huishui",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "惠水"
      },
      {
        "country": 1,
        "weaid": 933,
        "cityid": 101110407,
        "simcode": "hengshan",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "横山"
      },
      {
        "country": 1,
        "weaid": 934,
        "cityid": 101160405,
        "simcode": "heshui",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "合水"
      },
      {
        "country": 1,
        "weaid": 935,
        "cityid": 101130608,
        "simcode": "heshuo",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "和硕"
      },
      {
        "country": 1,
        "weaid": 936,
        "cityid": 101120307,
        "simcode": "huantai",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "桓台"
      },
      {
        "country": 1,
        "weaid": 937,
        "cityid": 101130402,
        "simcode": "hutubi",
        "area_1": "新疆",
        "area_2": "昌吉",
        "area_3": "呼图壁"
      },
      {
        "country": 1,
        "weaid": 938,
        "cityid": 101160305,
        "simcode": "huating",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "华亭"
      },
      {
        "country": 1,
        "weaid": 939,
        "cityid": 101100710,
        "simcode": "hongdong",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "洪洞"
      },
      {
        "country": 1,
        "weaid": 940,
        "cityid": 101251206,
        "simcode": "huitong",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "会同"
      },
      {
        "country": 1,
        "weaid": 942,
        "cityid": 101180203,
        "simcode": "huaxian",
        "area_1": "河南",
        "area_2": "安阳",
        "area_3": "滑县"
      },
      {
        "country": 1,
        "weaid": 943,
        "cityid": 101180304,
        "simcode": "hnhuixian",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "辉县"
      },
      {
        "country": 1,
        "weaid": 944,
        "cityid": 101300104,
        "simcode": "hengxian",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "横县"
      },
      {
        "country": 1,
        "weaid": 945,
        "cityid": 101110106,
        "simcode": "huxian",
        "area_1": "陕西",
        "area_2": "西安",
        "area_3": "户县"
      },
      {
        "country": 1,
        "weaid": 946,
        "cityid": 101110502,
        "simcode": "sxhuaxian",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "华县"
      },
      {
        "country": 1,
        "weaid": 947,
        "cityid": 101160403,
        "simcode": "huanxian",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "环县"
      },
      {
        "country": 1,
        "weaid": 948,
        "cityid": 101161008,
        "simcode": "huixian",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "徽县"
      },
      {
        "country": 1,
        "weaid": 949,
        "cityid": 101120511,
        "simcode": "haiyang",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "海阳"
      },
      {
        "country": 1,
        "weaid": 950,
        "cityid": 101210306,
        "simcode": "zjhaiyan",
        "area_1": "浙江",
        "area_2": "嘉兴",
        "area_3": "海盐"
      },
      {
        "country": 1,
        "weaid": 951,
        "cityid": 101210612,
        "simcode": "huangyan",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "黄岩"
      },
      {
        "country": 1,
        "weaid": 952,
        "cityid": 101181404,
        "simcode": "huaiyang",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "淮阳"
      },
      {
        "country": 1,
        "weaid": 953,
        "cityid": 101280303,
        "simcode": "huiyang",
        "area_1": "广东",
        "area_2": "惠州",
        "area_3": "惠阳"
      },
      {
        "country": 1,
        "weaid": 954,
        "cityid": 101110509,
        "simcode": "heyang",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "合阳"
      },
      {
        "country": 1,
        "weaid": 956,
        "cityid": 101271504,
        "simcode": "hongya",
        "area_1": "四川",
        "area_2": "眉山",
        "area_3": "洪雅"
      },
      {
        "country": 1,
        "weaid": 958,
        "cityid": 101110511,
        "simcode": "huayin",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "华阴"
      },
      {
        "country": 1,
        "weaid": 959,
        "cityid": 101110704,
        "simcode": "hanyin",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "汉阴"
      },
      {
        "country": 1,
        "weaid": 960,
        "cityid": 101100207,
        "simcode": "hunyuan",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "浑源"
      },
      {
        "country": 1,
        "weaid": 961,
        "cityid": 101220202,
        "simcode": "huaiyuan",
        "area_1": "安徽",
        "area_2": "蚌埠",
        "area_3": "怀远"
      },
      {
        "country": 1,
        "weaid": 962,
        "cityid": 101150103,
        "simcode": "huangyuan",
        "area_1": "青海",
        "area_2": "西宁",
        "area_3": "湟源"
      },
      {
        "country": 1,
        "weaid": 963,
        "cityid": 101170504,
        "simcode": "haiyuan",
        "area_1": "宁夏",
        "area_2": "中卫",
        "area_3": "海原"
      },
      {
        "country": 1,
        "weaid": 964,
        "cityid": 101271704,
        "simcode": "hanyuan",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "汉源"
      },
      {
        "country": 1,
        "weaid": 965,
        "cityid": 101190904,
        "simcode": "hongze",
        "area_1": "江苏",
        "area_2": "淮安",
        "area_3": "洪泽"
      },
      {
        "country": 1,
        "weaid": 966,
        "cityid": 101290408,
        "simcode": "huize",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "会泽"
      },
      {
        "country": 1,
        "weaid": 967,
        "cityid": 101100711,
        "simcode": "huozhou",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "霍州"
      },
      {
        "country": 1,
        "weaid": 968,
        "cityid": 101282003,
        "simcode": "huazhou",
        "area_1": "广东",
        "area_2": "茂名",
        "area_3": "化州"
      },
      {
        "country": 1,
        "weaid": 969,
        "cityid": 101260702,
        "simcode": "hezhang",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "赫章"
      },
      {
        "country": 1,
        "weaid": 970,
        "cityid": 101161105,
        "simcode": "hezheng",
        "area_1": "甘肃",
        "area_2": "临夏",
        "area_3": "和政"
      },
      {
        "country": 1,
        "weaid": 972,
        "cityid": 101060505,
        "simcode": "jian",
        "area_1": "吉林",
        "area_2": "通化",
        "area_3": "集安"
      },
      {
        "country": 1,
        "weaid": 973,
        "cityid": 101240506,
        "simcode": "jingan",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "靖安"
      },
      {
        "country": 1,
        "weaid": 974,
        "cityid": 101271105,
        "simcode": "jiangan",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "江安"
      },
      {
        "country": 1,
        "weaid": 975,
        "cityid": 101110406,
        "simcode": "jingbian",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "靖边"
      },
      {
        "country": 1,
        "weaid": 976,
        "cityid": 101131405,
        "simcode": "jimunai",
        "area_1": "新疆",
        "area_2": "阿勒泰",
        "area_3": "吉木乃"
      },
      {
        "country": 1,
        "weaid": 977,
        "cityid": 101071402,
        "simcode": "jianchang",
        "area_1": "辽宁",
        "area_2": "葫芦岛",
        "area_3": "建昌"
      },
      {
        "country": 1,
        "weaid": 978,
        "cityid": 101121002,
        "simcode": "juancheng",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "鄄城"
      },
      {
        "country": 1,
        "weaid": 979,
        "cityid": 101290209,
        "simcode": "jianchuan",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "剑川"
      },
      {
        "country": 1,
        "weaid": 980,
        "cityid": 101290703,
        "simcode": "jiangchuan",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "江川"
      },
      {
        "country": 1,
        "weaid": 981,
        "cityid": 101290907,
        "simcode": "jiangcheng",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "江城"
      },
      {
        "country": 1,
        "weaid": 982,
        "cityid": 101160302,
        "simcode": "jingchuan",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "泾川"
      },
      {
        "country": 1,
        "weaid": 983,
        "cityid": 101221403,
        "simcode": "jingde",
        "area_1": "安徽",
        "area_2": "宣城",
        "area_3": "旌德"
      },
      {
        "country": 1,
        "weaid": 984,
        "cityid": 101210105,
        "simcode": "jiande",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "建德"
      },
      {
        "country": 1,
        "weaid": 985,
        "cityid": 101051104,
        "simcode": "jidong",
        "area_1": "黑龙江",
        "area_2": "鸡西",
        "area_3": "鸡东"
      },
      {
        "country": 1,
        "weaid": 986,
        "cityid": 101290903,
        "simcode": "jingdong",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "景东"
      },
      {
        "country": 1,
        "weaid": 987,
        "cityid": 101190605,
        "simcode": "jiangdu",
        "area_1": "江苏",
        "area_2": "扬州",
        "area_3": "江都"
      },
      {
        "country": 1,
        "weaid": 988,
        "cityid": 101272104,
        "simcode": "jiange",
        "area_1": "四川",
        "area_2": "广元",
        "area_3": "剑阁"
      },
      {
        "country": 1,
        "weaid": 990,
        "cityid": 101240608,
        "simcode": "jinggangshan",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "井冈山"
      },
      {
        "country": 1,
        "weaid": 991,
        "cityid": 101290902,
        "simcode": "jinggu",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "景谷"
      },
      {
        "country": 1,
        "weaid": 992,
        "cityid": 101101113,
        "simcode": "jiaocheng",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "交城"
      },
      {
        "country": 1,
        "weaid": 993,
        "cityid": 101060204,
        "simcode": "jiaohe",
        "area_1": "吉林",
        "area_2": "蛟河",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 994,
        "cityid": 101250503,
        "simcode": "jiahe",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "嘉禾"
      },
      {
        "country": 1,
        "weaid": 995,
        "cityid": 101260511,
        "simcode": "jianhe",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "剑河"
      },
      {
        "country": 1,
        "weaid": 996,
        "cityid": 101131603,
        "simcode": "jinghe",
        "area_1": "新疆",
        "area_2": "博尔塔拉",
        "area_3": "精河"
      },
      {
        "country": 1,
        "weaid": 997,
        "cityid": 101190706,
        "simcode": "jianhu",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "建湖"
      },
      {
        "country": 1,
        "weaid": 998,
        "cityid": 101190902,
        "simcode": "jinhu",
        "area_1": "江苏",
        "area_2": "淮安",
        "area_3": "金湖"
      },
      {
        "country": 1,
        "weaid": 999,
        "cityid": 101251410,
        "simcode": "jianghua",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "江华"
      },
      {
        "country": 1,
        "weaid": 1000,
        "cityid": 101090102,
        "simcode": "jingxing",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "井陉"
      },
      {
        "country": 1,
        "weaid": 1001,
        "cityid": 101191205,
        "simcode": "jingjiang",
        "area_1": "江苏",
        "area_2": "泰州",
        "area_3": "靖江"
      },
      {
        "country": 1,
        "weaid": 1002,
        "cityid": 101210611,
        "simcode": "jiaojiang",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "椒江"
      },
      {
        "country": 1,
        "weaid": 1003,
        "cityid": 101271404,
        "simcode": "jiajiang",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "夹江"
      },
      {
        "country": 1,
        "weaid": 1004,
        "cityid": 101101108,
        "simcode": "jiaokou",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "交口"
      },
      {
        "country": 1,
        "weaid": 1005,
        "cityid": 101260602,
        "simcode": "jiangkou",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "江口"
      },
      {
        "country": 1,
        "weaid": 1006,
        "cityid": 101230805,
        "simcode": "jiangle",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "将乐"
      },
      {
        "country": 1,
        "weaid": 1007,
        "cityid": 101200805,
        "simcode": "jianli",
        "area_1": "湖北",
        "area_2": "荆州",
        "area_3": "监利"
      },
      {
        "country": 1,
        "weaid": 1008,
        "cityid": 101200802,
        "simcode": "jiangling",
        "area_1": "湖北",
        "area_2": "荆州",
        "area_3": "江陵"
      },
      {
        "country": 1,
        "weaid": 1009,
        "cityid": 101280403,
        "simcode": "jiaoling",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "蕉岭"
      },
      {
        "country": 1,
        "weaid": 1010,
        "cityid": 101140603,
        "simcode": "jiali",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "嘉黎"
      },
      {
        "country": 1,
        "weaid": 1011,
        "cityid": 101130405,
        "simcode": "jimusaer",
        "area_1": "新疆",
        "area_2": "昌吉",
        "area_3": "吉木萨尔"
      },
      {
        "country": 1,
        "weaid": 1012,
        "cityid": 101120204,
        "simcode": "jimo",
        "area_1": "山东",
        "area_2": "青岛",
        "area_3": "即墨"
      },
      {
        "country": 1,
        "weaid": 1013,
        "cityid": 101120206,
        "simcode": "huangdao",
        "area_1": "山东",
        "area_2": "青岛",
        "area_3": "黄岛"
      },
      {
        "country": 1,
        "weaid": 1014,
        "cityid": 101120902,
        "simcode": "junan",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "莒南"
      },
      {
        "country": 1,
        "weaid": 1015,
        "cityid": 101190104,
        "simcode": "jiangning",
        "area_1": "江苏",
        "area_2": "南京",
        "area_3": "江宁"
      },
      {
        "country": 1,
        "weaid": 1016,
        "cityid": 101210809,
        "simcode": "jingning",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "景宁"
      },
      {
        "country": 1,
        "weaid": 1017,
        "cityid": 101230806,
        "simcode": "jianning",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "建宁"
      },
      {
        "country": 1,
        "weaid": 1018,
        "cityid": 101290105,
        "simcode": "jinning",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "晋宁"
      },
      {
        "country": 1,
        "weaid": 1019,
        "cityid": 101160307,
        "simcode": "gsjingning",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "静宁"
      },
      {
        "country": 1,
        "weaid": 1020,
        "cityid": 101230910,
        "simcode": "jianou",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "建瓯"
      },
      {
        "country": 1,
        "weaid": 1021,
        "cityid": 101260515,
        "simcode": "gzjinping",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "锦屏"
      },
      {
        "country": 1,
        "weaid": 1022,
        "cityid": 101290312,
        "simcode": "jinping",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "金平"
      },
      {
        "country": 1,
        "weaid": 1024,
        "cityid": 101190304,
        "simcode": "jurong",
        "area_1": "江苏",
        "area_2": "镇江",
        "area_3": "句容"
      },
      {
        "country": 1,
        "weaid": 1025,
        "cityid": 101100803,
        "simcode": "jishan",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "稷山"
      },
      {
        "country": 1,
        "weaid": 1026,
        "cityid": 101220805,
        "simcode": "jieshou",
        "area_1": "安徽",
        "area_2": "阜阳",
        "area_3": "界首"
      },
      {
        "country": 1,
        "weaid": 1027,
        "cityid": 101211005,
        "simcode": "jiangshan",
        "area_1": "浙江",
        "area_2": "衢州",
        "area_3": "江山"
      },
      {
        "country": 1,
        "weaid": 1028,
        "cityid": 101210302,
        "simcode": "jiashan",
        "area_1": "浙江",
        "area_2": "嘉兴",
        "area_3": "嘉善"
      },
      {
        "country": 1,
        "weaid": 1029,
        "cityid": 101240603,
        "simcode": "jishui",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "吉水"
      },
      {
        "country": 1,
        "weaid": 1030,
        "cityid": 101201003,
        "simcode": "jianshi",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "建始"
      },
      {
        "country": 1,
        "weaid": 1031,
        "cityid": 101201403,
        "simcode": "jingshan",
        "area_1": "湖北",
        "area_2": "荆门",
        "area_3": "京山"
      },
      {
        "country": 1,
        "weaid": 1032,
        "cityid": 101260703,
        "simcode": "jinsha",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "金沙"
      },
      {
        "country": 1,
        "weaid": 1033,
        "cityid": 101290303,
        "simcode": "jianshui",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "建水"
      },
      {
        "country": 1,
        "weaid": 1034,
        "cityid": 101130910,
        "simcode": "jiashi",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "伽师"
      },
      {
        "country": 1,
        "weaid": 1035,
        "cityid": 101060104,
        "simcode": "jiutai",
        "area_1": "吉林",
        "area_2": "长春",
        "area_3": "九台"
      },
      {
        "country": 1,
        "weaid": 1036,
        "cityid": 101191103,
        "simcode": "jintan",
        "area_1": "江苏",
        "area_2": "常州",
        "area_3": "金坛"
      },
      {
        "country": 1,
        "weaid": 1037,
        "cityid": 101270105,
        "simcode": "jintang",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "金堂"
      },
      {
        "country": 1,
        "weaid": 1038,
        "cityid": 101160803,
        "simcode": "jinta",
        "area_1": "甘肃",
        "area_2": "酒泉",
        "area_3": "金塔"
      },
      {
        "country": 1,
        "weaid": 1039,
        "cityid": 101161305,
        "simcode": "jingtai",
        "area_1": "甘肃",
        "area_2": "白银",
        "area_3": "景泰"
      },
      {
        "country": 1,
        "weaid": 1040,
        "cityid": 101271402,
        "simcode": "jianwei",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "犍为"
      },
      {
        "country": 1,
        "weaid": 1041,
        "cityid": 101051302,
        "simcode": "jixian",
        "area_1": "黑龙江",
        "area_2": "双鸭山",
        "area_3": "集贤"
      },
      {
        "country": 1,
        "weaid": 1042,
        "cityid": 101100412,
        "simcode": "jiexiu",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "介休"
      },
      {
        "country": 1,
        "weaid": 1043,
        "cityid": 101100706,
        "simcode": "sxjixian",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "吉县"
      },
      {
        "country": 1,
        "weaid": 1044,
        "cityid": 101120706,
        "simcode": "jinxiang",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "金乡"
      },
      {
        "country": 1,
        "weaid": 1045,
        "cityid": 101120702,
        "simcode": "jiaxiang",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "嘉祥"
      },
      {
        "country": 1,
        "weaid": 1046,
        "cityid": 101121503,
        "simcode": "juxian",
        "area_1": "山东",
        "area_2": "日照",
        "area_3": "莒县"
      },
      {
        "country": 1,
        "weaid": 1047,
        "cityid": 101221405,
        "simcode": "ahjixi",
        "area_1": "安徽",
        "area_2": "宣城",
        "area_3": "绩溪"
      },
      {
        "country": 1,
        "weaid": 1048,
        "cityid": 101221402,
        "simcode": "jingxian",
        "area_1": "安徽",
        "area_2": "宣城",
        "area_3": "泾县"
      },
      {
        "country": 1,
        "weaid": 1049,
        "cityid": 101240105,
        "simcode": "jinxian",
        "area_1": "江西",
        "area_2": "南昌",
        "area_3": "进贤"
      },
      {
        "country": 1,
        "weaid": 1050,
        "cityid": 101240405,
        "simcode": "jinxi",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "金溪"
      },
      {
        "country": 1,
        "weaid": 1051,
        "cityid": 101180502,
        "simcode": "jiaxian",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "郏县"
      },
      {
        "country": 1,
        "weaid": 1052,
        "cityid": 101181202,
        "simcode": "junxian",
        "area_1": "河南",
        "area_2": "鹤壁",
        "area_3": "浚县"
      },
      {
        "country": 1,
        "weaid": 1053,
        "cityid": 101200105,
        "simcode": "jiangxia",
        "area_1": "湖北",
        "area_2": "武汉",
        "area_3": "江夏"
      },
      {
        "country": 1,
        "weaid": 1054,
        "cityid": 101281902,
        "simcode": "jiexi",
        "area_1": "广东",
        "area_2": "揭阳",
        "area_3": "揭西"
      },
      {
        "country": 1,
        "weaid": 1055,
        "cityid": 101300403,
        "simcode": "jinxiu",
        "area_1": "广西",
        "area_2": "来宾",
        "area_3": "金秀"
      },
      {
        "country": 1,
        "weaid": 1056,
        "cityid": 101301005,
        "simcode": "jingxi",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "靖西"
      },
      {
        "country": 1,
        "weaid": 1057,
        "cityid": 101110404,
        "simcode": "sxjiaxian",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "佳县"
      },
      {
        "country": 1,
        "weaid": 1058,
        "cityid": 101120106,
        "simcode": "jiyang",
        "area_1": "山东",
        "area_2": "济南",
        "area_3": "济阳"
      },
      {
        "country": 1,
        "weaid": 1059,
        "cityid": 101191204,
        "simcode": "jiangyan",
        "area_1": "江苏",
        "area_2": "泰州",
        "area_3": "姜堰"
      },
      {
        "country": 1,
        "weaid": 1060,
        "cityid": 101230907,
        "simcode": "jianyang",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "建阳"
      },
      {
        "country": 1,
        "weaid": 1062,
        "cityid": 101110205,
        "simcode": "jingyang",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "泾阳"
      },
      {
        "country": 1,
        "weaid": 1063,
        "cityid": 101271403,
        "simcode": "jingyan",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "井研"
      },
      {
        "country": 1,
        "weaid": 1064,
        "cityid": 101271611,
        "simcode": "jinyang",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "金阳"
      },
      {
        "country": 1,
        "weaid": 1065,
        "cityid": 101121006,
        "simcode": "juye",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "巨野"
      },
      {
        "country": 1,
        "weaid": 1066,
        "cityid": 101050805,
        "simcode": "jiayin",
        "area_1": "黑龙江",
        "area_2": "伊春",
        "area_3": "嘉荫"
      },
      {
        "country": 1,
        "weaid": 1067,
        "cityid": 101190202,
        "simcode": "jiangyin",
        "area_1": "江苏",
        "area_2": "无锡",
        "area_3": "江阴"
      },
      {
        "country": 1,
        "weaid": 1068,
        "cityid": 101251407,
        "simcode": "jiangyong",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "江永"
      },
      {
        "country": 1,
        "weaid": 1069,
        "cityid": 101270408,
        "simcode": "jiangyou",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "江油"
      },
      {
        "country": 1,
        "weaid": 1070,
        "cityid": 101060902,
        "simcode": "jingyu",
        "area_1": "吉林",
        "area_2": "白山",
        "area_3": "靖宇"
      },
      {
        "country": 1,
        "weaid": 1071,
        "cityid": 101210804,
        "simcode": "jinyun",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "缙云"
      },
      {
        "country": 1,
        "weaid": 1072,
        "cityid": 101200703,
        "simcode": "jiayu",
        "area_1": "湖北",
        "area_2": "咸宁",
        "area_3": "嘉鱼"
      },
      {
        "country": 1,
        "weaid": 1073,
        "cityid": 101161302,
        "simcode": "jingyuan",
        "area_1": "甘肃",
        "area_2": "白银",
        "area_3": "靖远"
      },
      {
        "country": 1,
        "weaid": 1074,
        "cityid": 101170404,
        "simcode": "nxjingyuan",
        "area_1": "宁夏",
        "area_2": "固原",
        "area_3": "泾源"
      },
      {
        "country": 1,
        "weaid": 1075,
        "cityid": 101090116,
        "simcode": "hbjinzhou",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "晋州"
      },
      {
        "country": 1,
        "weaid": 1076,
        "cityid": 101120205,
        "simcode": "jiaozhou",
        "area_1": "山东",
        "area_2": "青岛",
        "area_3": "胶州"
      },
      {
        "country": 1,
        "weaid": 1077,
        "cityid": 101221505,
        "simcode": "jinzhai",
        "area_1": "安徽",
        "area_2": "六安",
        "area_3": "金寨"
      },
      {
        "country": 1,
        "weaid": 1078,
        "cityid": 101251205,
        "simcode": "jingzhou",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "靖州"
      },
      {
        "country": 1,
        "weaid": 1079,
        "cityid": 101150302,
        "simcode": "jianzha",
        "area_1": "青海",
        "area_2": "黄南",
        "area_3": "尖扎"
      },
      {
        "country": 1,
        "weaid": 1080,
        "cityid": 101150505,
        "simcode": "jiuzhi",
        "area_1": "青海",
        "area_2": "果洛",
        "area_3": "久治"
      },
      {
        "country": 1,
        "weaid": 1081,
        "cityid": 101090304,
        "simcode": "kangbao",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "康保"
      },
      {
        "country": 1,
        "weaid": 1082,
        "cityid": 101130807,
        "simcode": "kuche",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "库车"
      },
      {
        "country": 1,
        "weaid": 1083,
        "cityid": 101090409,
        "simcode": "kuancheng",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "宽城"
      },
      {
        "country": 1,
        "weaid": 1084,
        "cityid": 101070603,
        "simcode": "kuandian",
        "area_1": "辽宁",
        "area_2": "丹东",
        "area_3": "宽甸"
      },
      {
        "country": 1,
        "weaid": 1085,
        "cityid": 101271802,
        "simcode": "kangding",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "康定"
      },
      {
        "country": 1,
        "weaid": 1086,
        "cityid": 101050209,
        "simcode": "kedong",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "克东"
      },
      {
        "country": 1,
        "weaid": 1087,
        "cityid": 101080503,
        "simcode": "tongliaokezuozho",
        "area_1": "内蒙古",
        "area_2": "通辽",
        "area_3": "科左中旗"
      },
      {
        "country": 1,
        "weaid": 1088,
        "cityid": 101080504,
        "simcode": "tongliaokezuohou",
        "area_1": "内蒙古",
        "area_2": "通辽",
        "area_3": "科左后旗"
      },
      {
        "country": 1,
        "weaid": 1089,
        "cityid": 101211003,
        "simcode": "kaihua",
        "area_1": "浙江",
        "area_2": "衢州",
        "area_3": "开化"
      },
      {
        "country": 1,
        "weaid": 1090,
        "cityid": 101270603,
        "simcode": "kaijiang",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "开江"
      },
      {
        "country": 1,
        "weaid": 1091,
        "cityid": 101101013,
        "simcode": "kelan",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "岢岚"
      },
      {
        "country": 1,
        "weaid": 1092,
        "cityid": 101161102,
        "simcode": "kangle",
        "area_1": "甘肃",
        "area_2": "临夏",
        "area_3": "康乐"
      },
      {
        "country": 1,
        "weaid": 1093,
        "cityid": 101080507,
        "simcode": "kulun",
        "area_1": "内蒙古",
        "area_2": "通辽",
        "area_3": "库伦"
      },
      {
        "country": 1,
        "weaid": 1094,
        "cityid": 101080611,
        "simcode": "kalaqinqi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "喀喇沁"
      },
      {
        "country": 1,
        "weaid": 1095,
        "cityid": 101080506,
        "simcode": "kailu",
        "area_1": "内蒙古",
        "area_2": "通辽",
        "area_3": "开鲁"
      },
      {
        "country": 1,
        "weaid": 1096,
        "cityid": 101070104,
        "simcode": "kangping",
        "area_1": "辽宁",
        "area_2": "沈阳",
        "area_3": "康平"
      },
      {
        "country": 1,
        "weaid": 1097,
        "cityid": 101281103,
        "simcode": "kaiping",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "开平"
      },
      {
        "country": 1,
        "weaid": 1098,
        "cityid": 101130808,
        "simcode": "keping",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "柯坪"
      },
      {
        "country": 1,
        "weaid": 1099,
        "cityid": 101050208,
        "simcode": "keshan",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "克山"
      },
      {
        "country": 1,
        "weaid": 1100,
        "cityid": 101190404,
        "simcode": "kunshan",
        "area_1": "江苏",
        "area_2": "苏州",
        "area_3": "昆山"
      },
      {
        "country": 1,
        "weaid": 1101,
        "cityid": 101080608,
        "simcode": "keshiketengqi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "克什克腾"
      },
      {
        "country": 1,
        "weaid": 1102,
        "cityid": 101161005,
        "simcode": "kangxian",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "康县"
      },
      {
        "country": 1,
        "weaid": 1103,
        "cityid": 101071102,
        "simcode": "lnkaiyuan",
        "area_1": "辽宁",
        "area_2": "铁岭",
        "area_3": "开原"
      },
      {
        "country": 1,
        "weaid": 1104,
        "cityid": 101290307,
        "simcode": "kaiyuan",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "开远"
      },
      {
        "country": 1,
        "weaid": 1105,
        "cityid": 101221106,
        "simcode": "laian",
        "area_1": "安徽",
        "area_2": "滁州",
        "area_3": "来安"
      },
      {
        "country": 1,
        "weaid": 1106,
        "cityid": 101210107,
        "simcode": "linan",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "临安"
      },
      {
        "country": 1,
        "weaid": 1107,
        "cityid": 101300105,
        "simcode": "longan",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "隆安"
      },
      {
        "country": 1,
        "weaid": 1108,
        "cityid": 101110804,
        "simcode": "liuba",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "留坝"
      },
      {
        "country": 1,
        "weaid": 1109,
        "cityid": 101181702,
        "simcode": "lingbao",
        "area_1": "河南",
        "area_2": "三门峡",
        "area_3": "灵宝"
      },
      {
        "country": 1,
        "weaid": 1110,
        "cityid": 101051203,
        "simcode": "luobei",
        "area_1": "黑龙江",
        "area_2": "鹤岗",
        "area_3": "萝北"
      },
      {
        "country": 1,
        "weaid": 1111,
        "cityid": 101260412,
        "simcode": "libo",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "荔波"
      },
      {
        "country": 1,
        "weaid": 1112,
        "cityid": 101271617,
        "simcode": "leibo",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "雷波"
      },
      {
        "country": 1,
        "weaid": 1113,
        "cityid": 101290904,
        "simcode": "lancang",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "澜沧"
      },
      {
        "country": 1,
        "weaid": 1114,
        "cityid": 101090104,
        "simcode": "luancheng",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "栾城"
      },
      {
        "country": 1,
        "weaid": 1115,
        "cityid": 101100502,
        "simcode": "licheng",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "黎城"
      },
      {
        "country": 1,
        "weaid": 1116,
        "cityid": 101100504,
        "simcode": "lucheng",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "潞城"
      },
      {
        "country": 1,
        "weaid": 1117,
        "cityid": 101100604,
        "simcode": "lingchuan",
        "area_1": "山西",
        "area_2": "晋城",
        "area_3": "陵川"
      },
      {
        "country": 1,
        "weaid": 1118,
        "cityid": 101080407,
        "simcode": "liangcheng",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "凉城"
      },
      {
        "country": 1,
        "weaid": 1119,
        "cityid": 101230703,
        "simcode": "liancheng",
        "area_1": "福建",
        "area_2": "龙岩",
        "area_3": "连城"
      },
      {
        "country": 1,
        "weaid": 1120,
        "cityid": 101240410,
        "simcode": "jxlichuan",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "黎川"
      },
      {
        "country": 1,
        "weaid": 1121,
        "cityid": 101180909,
        "simcode": "luanchuan",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "栾川"
      },
      {
        "country": 1,
        "weaid": 1122,
        "cityid": 101201002,
        "simcode": "lichuan",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "利川"
      },
      {
        "country": 1,
        "weaid": 1123,
        "cityid": 101280205,
        "simcode": "lechang",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "乐昌"
      },
      {
        "country": 1,
        "weaid": 1124,
        "cityid": 101281205,
        "simcode": "longchuan",
        "area_1": "广东",
        "area_2": "河源",
        "area_3": "龙川"
      },
      {
        "country": 1,
        "weaid": 1125,
        "cityid": 101300302,
        "simcode": "liucheng",
        "area_1": "广西",
        "area_2": "柳州",
        "area_3": "柳城"
      },
      {
        "country": 1,
        "weaid": 1126,
        "cityid": 101300507,
        "simcode": "gxlingchuan",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "灵川"
      },
      {
        "country": 1,
        "weaid": 1127,
        "cityid": 101300905,
        "simcode": "luchuan",
        "area_1": "广西",
        "area_2": "玉林",
        "area_3": "陆川"
      },
      {
        "country": 1,
        "weaid": 1128,
        "cityid": 101301206,
        "simcode": "luocheng",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "罗城"
      },
      {
        "country": 1,
        "weaid": 1129,
        "cityid": 101271205,
        "simcode": "longchang",
        "area_1": "四川",
        "area_2": "内江",
        "area_3": "隆昌"
      },
      {
        "country": 1,
        "weaid": 1130,
        "cityid": 101291503,
        "simcode": "ynlongchuan",
        "area_1": "云南",
        "area_2": "德宏",
        "area_3": "陇川"
      },
      {
        "country": 1,
        "weaid": 1131,
        "cityid": 101290306,
        "simcode": "lvchun",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "绿春"
      },
      {
        "country": 1,
        "weaid": 1132,
        "cityid": 101110309,
        "simcode": "luochuan",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "洛川"
      },
      {
        "country": 1,
        "weaid": 1133,
        "cityid": 101161009,
        "simcode": "liangdang",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "两当"
      },
      {
        "country": 1,
        "weaid": 1134,
        "cityid": 101170403,
        "simcode": "longde",
        "area_1": "宁夏",
        "area_2": "固原",
        "area_3": "隆德"
      },
      {
        "country": 1,
        "weaid": 1135,
        "cityid": 101050902,
        "simcode": "lindian",
        "area_1": "黑龙江",
        "area_2": "大庆",
        "area_3": "林甸"
      },
      {
        "country": 1,
        "weaid": 1136,
        "cityid": 101281402,
        "simcode": "luoding",
        "area_1": "广东",
        "area_2": "云浮",
        "area_3": "罗定"
      },
      {
        "country": 1,
        "weaid": 1137,
        "cityid": 101260408,
        "simcode": "luodian",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "罗甸"
      },
      {
        "country": 1,
        "weaid": 1138,
        "cityid": 101291002,
        "simcode": "ludian",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "鲁甸"
      },
      {
        "country": 1,
        "weaid": 1139,
        "cityid": 101110104,
        "simcode": "lantian",
        "area_1": "陕西",
        "area_2": "西安",
        "area_3": "蓝田"
      },
      {
        "country": 1,
        "weaid": 1140,
        "cityid": 101150202,
        "simcode": "ledu",
        "area_1": "青海",
        "area_2": "海东",
        "area_3": "乐都"
      },
      {
        "country": 1,
        "weaid": 1141,
        "cityid": 101100104,
        "simcode": "loufan",
        "area_1": "山西",
        "area_2": "太原",
        "area_3": "娄烦"
      },
      {
        "country": 1,
        "weaid": 1142,
        "cityid": 101201007,
        "simcode": "laifeng",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "来凤"
      },
      {
        "country": 1,
        "weaid": 1143,
        "cityid": 101282103,
        "simcode": "lufeng",
        "area_1": "广东",
        "area_2": "汕尾",
        "area_3": "陆丰"
      },
      {
        "country": 1,
        "weaid": 1144,
        "cityid": 101290808,
        "simcode": "ynlufeng",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "禄丰"
      },
      {
        "country": 1,
        "weaid": 1145,
        "cityid": 101110706,
        "simcode": "langao",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "岚皋"
      },
      {
        "country": 1,
        "weaid": 1146,
        "cityid": 101300505,
        "simcode": "lingui",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "临桂"
      },
      {
        "country": 1,
        "weaid": 1147,
        "cityid": 101070702,
        "simcode": "linghai",
        "area_1": "辽宁",
        "area_2": "锦州",
        "area_3": "凌海"
      },
      {
        "country": 1,
        "weaid": 1148,
        "cityid": 101210610,
        "simcode": "linhai",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "临海"
      },
      {
        "country": 1,
        "weaid": 1149,
        "cityid": 101230605,
        "simcode": "longhai",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "龙海"
      },
      {
        "country": 1,
        "weaid": 1150,
        "cityid": 101060503,
        "simcode": "jlliuhe",
        "area_1": "吉林",
        "area_2": "通化",
        "area_3": "柳河"
      },
      {
        "country": 1,
        "weaid": 1151,
        "cityid": 101190105,
        "simcode": "liuhe",
        "area_1": "江苏",
        "area_2": "南京",
        "area_3": "六合"
      },
      {
        "country": 1,
        "weaid": 1152,
        "cityid": 101291507,
        "simcode": "lianghe",
        "area_1": "云南",
        "area_2": "德宏",
        "area_3": "梁河"
      },
      {
        "country": 1,
        "weaid": 1153,
        "cityid": 101200206,
        "simcode": "laohekou",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "老河口"
      },
      {
        "country": 1,
        "weaid": 1154,
        "cityid": 101090407,
        "simcode": "longhua",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "隆化"
      },
      {
        "country": 1,
        "weaid": 1155,
        "cityid": 101240902,
        "simcode": "lianhua",
        "area_1": "江西",
        "area_2": "萍乡",
        "area_3": "莲花"
      },
      {
        "country": 1,
        "weaid": 1156,
        "cityid": 101250902,
        "simcode": "longhui",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "隆回"
      },
      {
        "country": 1,
        "weaid": 1158,
        "cityid": 101050203,
        "simcode": "longjiang",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "龙江"
      },
      {
        "country": 1,
        "weaid": 1159,
        "cityid": 101060307,
        "simcode": "longjing",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "龙井"
      },
      {
        "country": 1,
        "weaid": 1160,
        "cityid": 101060903,
        "simcode": "linjiang",
        "area_1": "吉林",
        "area_2": "白山",
        "area_3": "临江"
      },
      {
        "country": 1,
        "weaid": 1161,
        "cityid": 101121204,
        "simcode": "lijin",
        "area_1": "山东",
        "area_2": "东营",
        "area_3": "利津"
      },
      {
        "country": 1,
        "weaid": 1163,
        "cityid": 101230105,
        "simcode": "fjlianjiang",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "连江"
      },
      {
        "country": 1,
        "weaid": 1164,
        "cityid": 101281005,
        "simcode": "lianjiang",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "廉江"
      },
      {
        "country": 1,
        "weaid": 1165,
        "cityid": 101300305,
        "simcode": "liujiang",
        "area_1": "广西",
        "area_2": "柳州",
        "area_3": "柳江"
      },
      {
        "country": 1,
        "weaid": 1166,
        "cityid": 101180805,
        "simcode": "lankao",
        "area_1": "河南",
        "area_2": "开封",
        "area_3": "兰考"
      },
      {
        "country": 1,
        "weaid": 1167,
        "cityid": 101050304,
        "simcode": "linkou",
        "area_1": "黑龙江",
        "area_2": "牡丹江",
        "area_3": "林口"
      },
      {
        "country": 1,
        "weaid": 1168,
        "cityid": 101120505,
        "simcode": "longkou",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "龙口"
      },
      {
        "country": 1,
        "weaid": 1170,
        "cityid": 101140305,
        "simcode": "langkazi",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "浪卡子"
      },
      {
        "country": 1,
        "weaid": 1171,
        "cityid": 101101105,
        "simcode": "liulin",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "柳林"
      },
      {
        "country": 1,
        "weaid": 1172,
        "cityid": 101120406,
        "simcode": "leling",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "乐陵"
      },
      {
        "country": 1,
        "weaid": 1173,
        "cityid": 101250303,
        "simcode": "liling",
        "area_1": "湖南",
        "area_2": "株洲",
        "area_3": "醴陵"
      },
      {
        "country": 1,
        "weaid": 1174,
        "cityid": 101250606,
        "simcode": "linli",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "临澧"
      },
      {
        "country": 1,
        "weaid": 1175,
        "cityid": 101301008,
        "simcode": "longlin",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "隆林"
      },
      {
        "country": 1,
        "weaid": 1176,
        "cityid": 101260407,
        "simcode": "longli",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "龙里"
      },
      {
        "country": 1,
        "weaid": 1177,
        "cityid": 101290403,
        "simcode": "luliang",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "陆良"
      },
      {
        "country": 1,
        "weaid": 1178,
        "cityid": 101290503,
        "simcode": "longling",
        "area_1": "云南",
        "area_2": "保山",
        "area_3": "龙陵"
      },
      {
        "country": 1,
        "weaid": 1179,
        "cityid": 101140504,
        "simcode": "luolong",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "洛隆"
      },
      {
        "country": 1,
        "weaid": 1180,
        "cityid": 101280305,
        "simcode": "longmen",
        "area_1": "广东",
        "area_2": "惠州",
        "area_3": "龙门"
      },
      {
        "country": 1,
        "weaid": 1181,
        "cityid": 101240714,
        "simcode": "longnan",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "龙南"
      },
      {
        "country": 1,
        "weaid": 1182,
        "cityid": 101281302,
        "simcode": "liannan",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "连南"
      },
      {
        "country": 1,
        "weaid": 1183,
        "cityid": 101110602,
        "simcode": "luonan",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "洛南"
      },
      {
        "country": 1,
        "weaid": 1184,
        "cityid": 101090505,
        "simcode": "luannan",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "滦南"
      },
      {
        "country": 1,
        "weaid": 1185,
        "cityid": 101180905,
        "simcode": "luoning",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "洛宁"
      },
      {
        "country": 1,
        "weaid": 1186,
        "cityid": 101240802,
        "simcode": "leping",
        "area_1": "江西",
        "area_2": "景德镇",
        "area_3": "乐平"
      },
      {
        "country": 1,
        "weaid": 1187,
        "cityid": 101281203,
        "simcode": "lianping",
        "area_1": "广东",
        "area_2": "河源",
        "area_3": "连平"
      },
      {
        "country": 1,
        "weaid": 1188,
        "cityid": 101260513,
        "simcode": "liping",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "黎平"
      },
      {
        "country": 1,
        "weaid": 1189,
        "cityid": 101290407,
        "simcode": "luoping",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "罗平"
      },
      {
        "country": 1,
        "weaid": 1190,
        "cityid": 101291204,
        "simcode": "lanping",
        "area_1": "云南",
        "area_2": "怒江",
        "area_3": "兰坪"
      },
      {
        "country": 1,
        "weaid": 1191,
        "cityid": 101300513,
        "simcode": "lipu",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "荔浦"
      },
      {
        "country": 1,
        "weaid": 1192,
        "cityid": 101131305,
        "simcode": "luopu",
        "area_1": "新疆",
        "area_2": "和田",
        "area_3": "洛浦"
      },
      {
        "country": 1,
        "weaid": 1193,
        "cityid": 101121707,
        "simcode": "linqing",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "临清"
      },
      {
        "country": 1,
        "weaid": 1194,
        "cityid": 101210707,
        "simcode": "leqing",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "乐清"
      },
      {
        "country": 1,
        "weaid": 1195,
        "cityid": 101120604,
        "simcode": "linchun",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "临朐"
      },
      {
        "country": 1,
        "weaid": 1196,
        "cityid": 101220804,
        "simcode": "linquan",
        "area_1": "安徽",
        "area_2": "阜阳",
        "area_3": "临泉"
      },
      {
        "country": 1,
        "weaid": 1197,
        "cityid": 101210803,
        "simcode": "longquan",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "龙泉"
      },
      {
        "country": 1,
        "weaid": 1198,
        "cityid": 101110202,
        "simcode": "liquan",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "礼泉"
      },
      {
        "country": 1,
        "weaid": 1199,
        "cityid": 101161207,
        "simcode": "luqu",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "碌曲"
      },
      {
        "country": 1,
        "weaid": 1200,
        "cityid": 101090106,
        "simcode": "lingshou",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "灵寿"
      },
      {
        "country": 1,
        "weaid": 1201,
        "cityid": 101100411,
        "simcode": "lingshi",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "灵石"
      },
      {
        "country": 1,
        "weaid": 1202,
        "cityid": 101101101,
        "simcode": "lishi",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "离石"
      },
      {
        "country": 1,
        "weaid": 1203,
        "cityid": 101120709,
        "simcode": "liangshan",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "梁山"
      },
      {
        "country": 1,
        "weaid": 1204,
        "cityid": 101120905,
        "simcode": "linshu",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "临沭"
      },
      {
        "country": 1,
        "weaid": 1205,
        "cityid": 101190102,
        "simcode": "lishui",
        "area_1": "江苏",
        "area_2": "南京",
        "area_3": "溧水"
      },
      {
        "country": 1,
        "weaid": 1206,
        "cityid": 101190905,
        "simcode": "lianshui",
        "area_1": "江苏",
        "area_2": "淮安",
        "area_3": "涟水"
      },
      {
        "country": 1,
        "weaid": 1207,
        "cityid": 101240203,
        "simcode": "jxlushan",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "庐山"
      },
      {
        "country": 1,
        "weaid": 1208,
        "cityid": 101180507,
        "simcode": "lushan",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "鲁山"
      },
      {
        "country": 1,
        "weaid": 1209,
        "cityid": 101180603,
        "simcode": "luoshan",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "罗山"
      },
      {
        "country": 1,
        "weaid": 1210,
        "cityid": 101251507,
        "simcode": "longshan",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "龙山"
      },
      {
        "country": 1,
        "weaid": 1211,
        "cityid": 101251408,
        "simcode": "lanshan",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "蓝山"
      },
      {
        "country": 1,
        "weaid": 1212,
        "cityid": 101281304,
        "simcode": "lianshan",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "连山"
      },
      {
        "country": 1,
        "weaid": 1213,
        "cityid": 101300503,
        "simcode": "longsheng",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "龙胜"
      },
      {
        "country": 1,
        "weaid": 1214,
        "cityid": 101301103,
        "simcode": "lingshan",
        "area_1": "广西",
        "area_2": "钦州",
        "area_3": "灵山"
      },
      {
        "country": 1,
        "weaid": 1215,
        "cityid": 101270804,
        "simcode": "linshui",
        "area_1": "四川",
        "area_2": "广安",
        "area_3": "邻水"
      },
      {
        "country": 1,
        "weaid": 1216,
        "cityid": 101260512,
        "simcode": "leishan",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "雷山"
      },
      {
        "country": 1,
        "weaid": 1217,
        "cityid": 101181704,
        "simcode": "lushi",
        "area_1": "河南",
        "area_2": "三门峡",
        "area_3": "卢氏"
      },
      {
        "country": 1,
        "weaid": 1218,
        "cityid": 101271707,
        "simcode": "sclushan",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "芦山"
      },
      {
        "country": 1,
        "weaid": 1219,
        "cityid": 101291205,
        "simcode": "lushui",
        "area_1": "云南",
        "area_2": "怒江",
        "area_3": "泸水"
      },
      {
        "country": 1,
        "weaid": 1220,
        "cityid": 101250803,
        "simcode": "lingshuijiang",
        "area_1": "湖南",
        "area_2": "娄底",
        "area_3": "冷水江"
      },
      {
        "country": 1,
        "weaid": 1222,
        "cityid": 101160205,
        "simcode": "lindao",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "临洮"
      },
      {
        "country": 1,
        "weaid": 1223,
        "cityid": 101160303,
        "simcode": "lingtai",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "灵台"
      },
      {
        "country": 1,
        "weaid": 1224,
        "cityid": 101161202,
        "simcode": "lintan",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "临潭"
      },
      {
        "country": 1,
        "weaid": 1225,
        "cityid": 101130602,
        "simcode": "luntai",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "轮台"
      },
      {
        "country": 1,
        "weaid": 1226,
        "cityid": 101200504,
        "simcode": "luotian",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "罗田"
      },
      {
        "country": 1,
        "weaid": 1227,
        "cityid": 101090506,
        "simcode": "leting",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "乐亭"
      },
      {
        "country": 1,
        "weaid": 1228,
        "cityid": 101110103,
        "simcode": "lintong",
        "area_1": "陕西",
        "area_2": "西安",
        "area_3": "临潼"
      },
      {
        "country": 1,
        "weaid": 1229,
        "cityid": 101250505,
        "simcode": "linwu",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "临武"
      },
      {
        "country": 1,
        "weaid": 1230,
        "cityid": 101170103,
        "simcode": "lingwu",
        "area_1": "宁夏",
        "area_2": "银川",
        "area_3": "灵武"
      },
      {
        "country": 1,
        "weaid": 1231,
        "cityid": 101050507,
        "simcode": "hljlanxi",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "兰西"
      },
      {
        "country": 1,
        "weaid": 1232,
        "cityid": 101090215,
        "simcode": "lixian",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "蠡县"
      },
      {
        "country": 1,
        "weaid": 1233,
        "cityid": 101101102,
        "simcode": "linxian",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "临县"
      },
      {
        "country": 1,
        "weaid": 1234,
        "cityid": 101101104,
        "simcode": "lanxian",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "岚县"
      },
      {
        "country": 1,
        "weaid": 1235,
        "cityid": 101080607,
        "simcode": "linxi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "林西"
      },
      {
        "country": 1,
        "weaid": 1236,
        "cityid": 101120207,
        "simcode": "laixi",
        "area_1": "山东",
        "area_2": "青岛",
        "area_3": "莱西"
      },
      {
        "country": 1,
        "weaid": 1238,
        "cityid": 101221407,
        "simcode": "langxi",
        "area_1": "安徽",
        "area_2": "宣城",
        "area_3": "郎溪"
      },
      {
        "country": 1,
        "weaid": 1239,
        "cityid": 101220903,
        "simcode": "lixin",
        "area_1": "安徽",
        "area_2": "亳州",
        "area_3": "利辛"
      },
      {
        "country": 1,
        "weaid": 1240,
        "cityid": 101210903,
        "simcode": "lanxi",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "兰溪"
      },
      {
        "country": 1,
        "weaid": 1242,
        "cityid": 101251006,
        "simcode": "linxiang",
        "area_1": "湖南",
        "area_2": "岳阳",
        "area_3": "临湘"
      },
      {
        "country": 1,
        "weaid": 1243,
        "cityid": 101250605,
        "simcode": "hnlixian",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "澧县"
      },
      {
        "country": 1,
        "weaid": 1244,
        "cityid": 101251506,
        "simcode": "luxi",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "泸溪"
      },
      {
        "country": 1,
        "weaid": 1245,
        "cityid": 101291508,
        "simcode": "mangshi",
        "area_1": "云南",
        "area_2": "德宏",
        "area_3": "芒市"
      },
      {
        "country": 1,
        "weaid": 1246,
        "cityid": 101290311,
        "simcode": "ynhhluxi",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "泸西"
      },
      {
        "country": 1,
        "weaid": 1247,
        "cityid": 101110911,
        "simcode": "longxian",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "陇县"
      },
      {
        "country": 1,
        "weaid": 1248,
        "cityid": 101160203,
        "simcode": "longxi",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "陇西"
      },
      {
        "country": 1,
        "weaid": 1249,
        "cityid": 101161007,
        "simcode": "gslixian",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "礼县"
      },
      {
        "country": 1,
        "weaid": 1250,
        "cityid": 101271903,
        "simcode": "sclixian",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "理县"
      },
      {
        "country": 1,
        "weaid": 1251,
        "cityid": 101290111,
        "simcode": "luquan",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "禄劝"
      },
      {
        "country": 1,
        "weaid": 1252,
        "cityid": 101120510,
        "simcode": "laiyang",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "莱阳"
      },
      {
        "country": 1,
        "weaid": 1253,
        "cityid": 101191102,
        "simcode": "liyang",
        "area_1": "江苏",
        "area_2": "常州",
        "area_3": "溧阳"
      },
      {
        "country": 1,
        "weaid": 1254,
        "cityid": 101250408,
        "simcode": "leiyang",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "耒阳"
      },
      {
        "country": 1,
        "weaid": 1255,
        "cityid": 101250103,
        "simcode": "liuyang",
        "area_1": "湖南",
        "area_2": "长沙",
        "area_3": "浏阳"
      },
      {
        "country": 1,
        "weaid": 1256,
        "cityid": 101260106,
        "simcode": "kaiyang",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "开阳"
      },
      {
        "country": 1,
        "weaid": 1257,
        "cityid": 101110802,
        "simcode": "lueyang",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "略阳"
      },
      {
        "country": 1,
        "weaid": 1258,
        "cityid": 101301010,
        "simcode": "leye",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "乐业"
      },
      {
        "country": 1,
        "weaid": 1259,
        "cityid": 101100802,
        "simcode": "linyi",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "临猗"
      },
      {
        "country": 1,
        "weaid": 1260,
        "cityid": 101181409,
        "simcode": "luyi",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "鹿邑"
      },
      {
        "country": 1,
        "weaid": 1261,
        "cityid": 101181502,
        "simcode": "linying",
        "area_1": "河南",
        "area_2": "漯河",
        "area_3": "临颍"
      },
      {
        "country": 1,
        "weaid": 1262,
        "cityid": 101211004,
        "simcode": "longyou",
        "area_1": "浙江",
        "area_2": "衢州",
        "area_3": "龙游"
      },
      {
        "country": 1,
        "weaid": 1263,
        "cityid": 101110904,
        "simcode": "linyou",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "麟游"
      },
      {
        "country": 1,
        "weaid": 1264,
        "cityid": 101071203,
        "simcode": "lingyuan",
        "area_1": "辽宁",
        "area_2": "朝阳",
        "area_3": "凌源"
      },
      {
        "country": 1,
        "weaid": 1265,
        "cityid": 101090209,
        "simcode": "laiyuan",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "涞源"
      },
      {
        "country": 1,
        "weaid": 1266,
        "cityid": 101230104,
        "simcode": "luoyuan",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "罗源"
      },
      {
        "country": 1,
        "weaid": 1267,
        "cityid": 101250806,
        "simcode": "lianyuan",
        "area_1": "湖南",
        "area_2": "娄底",
        "area_3": "涟源"
      },
      {
        "country": 1,
        "weaid": 1268,
        "cityid": 101301011,
        "simcode": "lingyun",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "凌云"
      },
      {
        "country": 1,
        "weaid": 1269,
        "cityid": 101271604,
        "simcode": "yanyuan",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "盐源"
      },
      {
        "country": 1,
        "weaid": 1270,
        "cityid": 101160704,
        "simcode": "linze",
        "area_1": "甘肃",
        "area_2": "张掖",
        "area_3": "临泽"
      },
      {
        "country": 1,
        "weaid": 1271,
        "cityid": 101070103,
        "simcode": "liaozhong",
        "area_1": "辽宁",
        "area_2": "沈阳",
        "area_3": "辽中"
      },
      {
        "country": 1,
        "weaid": 1272,
        "cityid": 101120502,
        "simcode": "laizhou",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "莱州"
      },
      {
        "country": 1,
        "weaid": 1273,
        "cityid": 101281303,
        "simcode": "lianzhou",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "连州"
      },
      {
        "country": 1,
        "weaid": 1274,
        "cityid": 101300203,
        "simcode": "longzhou",
        "area_1": "广西",
        "area_2": "崇左",
        "area_3": "龙州"
      },
      {
        "country": 1,
        "weaid": 1275,
        "cityid": 101300304,
        "simcode": "luzhai",
        "area_1": "广西",
        "area_2": "柳州",
        "area_3": "鹿寨"
      },
      {
        "country": 1,
        "weaid": 1276,
        "cityid": 101271303,
        "simcode": "lezhi",
        "area_1": "四川",
        "area_2": "资阳",
        "area_3": "乐至"
      },
      {
        "country": 1,
        "weaid": 1277,
        "cityid": 101260802,
        "simcode": "liuzhi",
        "area_1": "贵州",
        "area_2": "六盘水",
        "area_3": "六枝"
      },
      {
        "country": 1,
        "weaid": 1278,
        "cityid": 101281003,
        "simcode": "leizhou",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "雷州"
      },
      {
        "country": 1,
        "weaid": 1279,
        "cityid": 101140202,
        "simcode": "lazi",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "拉孜"
      },
      {
        "country": 1,
        "weaid": 1280,
        "cityid": 101140307,
        "simcode": "longzi",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "隆子"
      },
      {
        "country": 1,
        "weaid": 1281,
        "cityid": 101120308,
        "simcode": "linzi",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "临淄"
      },
      {
        "country": 1,
        "weaid": 1282,
        "cityid": 101271407,
        "simcode": "mabian",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "马边"
      },
      {
        "country": 1,
        "weaid": 1283,
        "cityid": 101090202,
        "simcode": "mancheng",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "满城"
      },
      {
        "country": 1,
        "weaid": 1284,
        "cityid": 101220904,
        "simcode": "mengcheng",
        "area_1": "安徽",
        "area_2": "亳州",
        "area_3": "蒙城"
      },
      {
        "country": 1,
        "weaid": 1285,
        "cityid": 101200503,
        "simcode": "macheng",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "麻城"
      },
      {
        "country": 1,
        "weaid": 1286,
        "cityid": 101181703,
        "simcode": "shengchi",
        "area_1": "河南",
        "area_2": "三门峡",
        "area_3": "渑池"
      },
      {
        "country": 1,
        "weaid": 1287,
        "cityid": 101271405,
        "simcode": "muchuan",
        "area_1": "四川",
        "area_2": "乐山",
        "area_3": "沐川"
      },
      {
        "country": 1,
        "weaid": 1288,
        "cityid": 101290805,
        "simcode": "mouding",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "牟定"
      },
      {
        "country": 1,
        "weaid": 1289,
        "cityid": 101290206,
        "simcode": "midu",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "弥渡"
      },
      {
        "country": 1,
        "weaid": 1290,
        "cityid": 101150506,
        "simcode": "maduo",
        "area_1": "青海",
        "area_2": "果洛",
        "area_3": "玛多"
      },
      {
        "country": 1,
        "weaid": 1291,
        "cityid": 101271910,
        "simcode": "maerkang",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "马尔康"
      },
      {
        "country": 1,
        "weaid": 1292,
        "cityid": 101131306,
        "simcode": "minfeng",
        "area_1": "新疆",
        "area_2": "和田",
        "area_3": "民丰"
      },
      {
        "country": 1,
        "weaid": 1293,
        "cityid": 101130904,
        "simcode": "maigaiti",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "麦盖提"
      },
      {
        "country": 1,
        "weaid": 1294,
        "cityid": 101221103,
        "simcode": "mingguang",
        "area_1": "安徽",
        "area_2": "滁州",
        "area_3": "明光"
      },
      {
        "country": 1,
        "weaid": 1295,
        "cityid": 101290603,
        "simcode": "maguan",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "马关"
      },
      {
        "country": 1,
        "weaid": 1296,
        "cityid": 101271618,
        "simcode": "meigu",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "美姑"
      },
      {
        "country": 1,
        "weaid": 1297,
        "cityid": 101291603,
        "simcode": "menghai",
        "area_1": "云南",
        "area_2": "西双版纳",
        "area_3": "勐海"
      },
      {
        "country": 1,
        "weaid": 1298,
        "cityid": 101150203,
        "simcode": "minhe",
        "area_1": "青海",
        "area_2": "海东",
        "area_3": "民和"
      },
      {
        "country": 1,
        "weaid": 1299,
        "cityid": 101050703,
        "simcode": "mohe",
        "area_1": "黑龙江",
        "area_2": "大兴安岭",
        "area_3": "漠河"
      },
      {
        "country": 1,
        "weaid": 1300,
        "cityid": 101060502,
        "simcode": "meihekou",
        "area_1": "吉林",
        "area_2": "通化",
        "area_3": "梅河口"
      },
      {
        "country": 1,
        "weaid": 1301,
        "cityid": 101260507,
        "simcode": "majiang",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "麻江"
      },
      {
        "country": 1,
        "weaid": 1302,
        "cityid": 101290906,
        "simcode": "mojiang",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "墨江"
      },
      {
        "country": 1,
        "weaid": 1303,
        "cityid": 101140506,
        "simcode": "mangkang",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "芒康"
      },
      {
        "country": 1,
        "weaid": 1304,
        "cityid": 101050113,
        "simcode": "mulan",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "木兰"
      },
      {
        "country": 1,
        "weaid": 1305,
        "cityid": 101291605,
        "simcode": "mengla",
        "area_1": "云南",
        "area_2": "西双版纳",
        "area_3": "勐腊"
      },
      {
        "country": 1,
        "weaid": 1306,
        "cityid": 101290304,
        "simcode": "mile",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "弥勒"
      },
      {
        "country": 1,
        "weaid": 1307,
        "cityid": 101160703,
        "simcode": "minle",
        "area_1": "甘肃",
        "area_2": "张掖",
        "area_3": "民乐"
      },
      {
        "country": 1,
        "weaid": 1308,
        "cityid": 101130408,
        "simcode": "mulei",
        "area_1": "新疆",
        "area_2": "昌吉",
        "area_3": "木垒"
      },
      {
        "country": 1,
        "weaid": 1309,
        "cityid": 101050303,
        "simcode": "muling",
        "area_1": "黑龙江",
        "area_2": "牡丹江",
        "area_3": "穆棱"
      },
      {
        "country": 1,
        "weaid": 1310,
        "cityid": 101290908,
        "simcode": "menglian",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "孟连"
      },
      {
        "country": 1,
        "weaid": 1311,
        "cityid": 101210305,
        "simcode": "pinghu",
        "area_1": "浙江",
        "area_2": "嘉兴",
        "area_3": "平湖"
      },
      {
        "country": 1,
        "weaid": 1312,
        "cityid": 101290405,
        "simcode": "malong",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "马龙"
      },
      {
        "country": 1,
        "weaid": 1315,
        "cityid": 101290604,
        "simcode": "malipo",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "麻栗坡"
      },
      {
        "country": 1,
        "weaid": 1316,
        "cityid": 101081004,
        "simcode": "molidawaqi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "莫力达瓦"
      },
      {
        "country": 1,
        "weaid": 1317,
        "cityid": 101251004,
        "simcode": "miluo",
        "area_1": "湖南",
        "area_2": "岳阳",
        "area_3": "汨罗"
      },
      {
        "country": 1,
        "weaid": 1318,
        "cityid": 101271614,
        "simcode": "mianning",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "冕宁"
      },
      {
        "country": 1,
        "weaid": 1319,
        "cityid": 101130407,
        "simcode": "manasi",
        "area_1": "新疆",
        "area_2": "昌吉",
        "area_3": "玛纳斯"
      },
      {
        "country": 1,
        "weaid": 1320,
        "cityid": 101120509,
        "simcode": "mouping",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "牟平"
      },
      {
        "country": 1,
        "weaid": 1321,
        "cityid": 101230102,
        "simcode": "minqing",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "闽清"
      },
      {
        "country": 1,
        "weaid": 1322,
        "cityid": 101160502,
        "simcode": "minqin",
        "area_1": "甘肃",
        "area_2": "武威",
        "area_3": "民勤"
      },
      {
        "country": 1,
        "weaid": 1324,
        "cityid": 101181004,
        "simcode": "minquan",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "民权"
      },
      {
        "country": 1,
        "weaid": 1325,
        "cityid": 101161206,
        "simcode": "maqu",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "玛曲"
      },
      {
        "country": 1,
        "weaid": 1327,
        "cityid": 101051103,
        "simcode": "mishan",
        "area_1": "黑龙江",
        "area_2": "鸡西",
        "area_3": "密山"
      },
      {
        "country": 1,
        "weaid": 1328,
        "cityid": 101050505,
        "simcode": "mingshui",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "明水"
      },
      {
        "country": 1,
        "weaid": 1329,
        "cityid": 101300106,
        "simcode": "mashan",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "马山"
      },
      {
        "country": 1,
        "weaid": 1330,
        "cityid": 101300605,
        "simcode": "mengshan",
        "area_1": "广西",
        "area_2": "梧州",
        "area_3": "蒙山"
      },
      {
        "country": 1,
        "weaid": 1331,
        "cityid": 101271702,
        "simcode": "mingshan",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "名山"
      },
      {
        "country": 1,
        "weaid": 1332,
        "cityid": 101260205,
        "simcode": "meitan",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "湄潭"
      },
      {
        "country": 1,
        "weaid": 1333,
        "cityid": 101230807,
        "simcode": "mingxi",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "明溪"
      },
      {
        "country": 1,
        "weaid": 1334,
        "cityid": 101110803,
        "simcode": "mianxian",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "勉县"
      },
      {
        "country": 1,
        "weaid": 1335,
        "cityid": 101110908,
        "simcode": "meixian",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "眉县"
      },
      {
        "country": 1,
        "weaid": 1336,
        "cityid": 101160207,
        "simcode": "minxian",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "岷县"
      },
      {
        "country": 1,
        "weaid": 1337,
        "cityid": 101271904,
        "simcode": "maoxian",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "茂县"
      },
      {
        "country": 1,
        "weaid": 1338,
        "cityid": 101251208,
        "simcode": "mayang",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "麻阳"
      },
      {
        "country": 1,
        "weaid": 1339,
        "cityid": 101150712,
        "simcode": "mangya",
        "area_1": "青海",
        "area_2": "海西",
        "area_3": "茫崖"
      },
      {
        "country": 1,
        "weaid": 1340,
        "cityid": 101120907,
        "simcode": "mengyin",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "蒙阴"
      },
      {
        "country": 1,
        "weaid": 1341,
        "cityid": 101270203,
        "simcode": "miyi",
        "area_1": "四川",
        "area_2": "攀枝花",
        "area_3": "米易"
      },
      {
        "country": 1,
        "weaid": 1342,
        "cityid": 101150802,
        "simcode": "menyuan",
        "area_1": "青海",
        "area_2": "海北",
        "area_3": "门源"
      },
      {
        "country": 1,
        "weaid": 1343,
        "cityid": 101131304,
        "simcode": "moyu",
        "area_1": "新疆",
        "area_2": "和田",
        "area_3": "墨玉"
      },
      {
        "country": 1,
        "weaid": 1344,
        "cityid": 101110408,
        "simcode": "mizhi",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "米脂"
      },
      {
        "country": 1,
        "weaid": 1345,
        "cityid": 101272005,
        "simcode": "mianzhu",
        "area_1": "四川",
        "area_2": "德阳",
        "area_3": "绵竹"
      },
      {
        "country": 1,
        "weaid": 1346,
        "cityid": 101290309,
        "simcode": "mengzi",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "蒙自"
      },
      {
        "country": 1,
        "weaid": 1347,
        "cityid": 101081010,
        "simcode": "manzhouli",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "满洲里"
      },
      {
        "country": 1,
        "weaid": 1348,
        "cityid": 101050306,
        "simcode": "ningan",
        "area_1": "黑龙江",
        "area_2": "牡丹江",
        "area_3": "宁安"
      },
      {
        "country": 1,
        "weaid": 1349,
        "cityid": 101060102,
        "simcode": "nongan",
        "area_1": "吉林",
        "area_2": "长春",
        "area_3": "农安"
      },
      {
        "country": 1,
        "weaid": 1350,
        "cityid": 101230506,
        "simcode": "nanan",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "南安"
      },
      {
        "country": 1,
        "weaid": 1351,
        "cityid": 101280504,
        "simcode": "nanao",
        "area_1": "广东",
        "area_2": "汕头",
        "area_3": "南澳"
      },
      {
        "country": 1,
        "weaid": 1352,
        "cityid": 101301002,
        "simcode": "napo",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "那坡"
      },
      {
        "country": 1,
        "weaid": 1353,
        "cityid": 101270502,
        "simcode": "nanbu",
        "area_1": "四川",
        "area_2": "南充",
        "area_3": "南部"
      },
      {
        "country": 1,
        "weaid": 1354,
        "cityid": 101080613,
        "simcode": "ningcheng",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "宁城"
      },
      {
        "country": 1,
        "weaid": 1355,
        "cityid": 101240408,
        "simcode": "nancheng",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "南城"
      },
      {
        "country": 1,
        "weaid": 1356,
        "cityid": 101301209,
        "simcode": "nandan",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "南丹"
      },
      {
        "country": 1,
        "weaid": 1357,
        "cityid": 101240707,
        "simcode": "ningdu",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "宁都"
      },
      {
        "country": 1,
        "weaid": 1358,
        "cityid": 101240409,
        "simcode": "nanfeng",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "南丰"
      },
      {
        "country": 1,
        "weaid": 1360,
        "cityid": 101090916,
        "simcode": "nangong",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "南宫"
      },
      {
        "country": 1,
        "weaid": 1361,
        "cityid": 101221404,
        "simcode": "ningguo",
        "area_1": "安徽",
        "area_2": "宣城",
        "area_3": "宁国"
      },
      {
        "country": 1,
        "weaid": 1362,
        "cityid": 101210408,
        "simcode": "ninghai",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "宁海"
      },
      {
        "country": 1,
        "weaid": 1363,
        "cityid": 101280803,
        "simcode": "nanhai",
        "area_1": "广东",
        "area_2": "佛山",
        "area_3": "南海"
      },
      {
        "country": 1,
        "weaid": 1364,
        "cityid": 101050202,
        "simcode": "nehe",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "讷河"
      },
      {
        "country": 1,
        "weaid": 1365,
        "cityid": 101230802,
        "simcode": "ninghua",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "宁化"
      },
      {
        "country": 1,
        "weaid": 1366,
        "cityid": 101180204,
        "simcode": "nahuang",
        "area_1": "河南",
        "area_2": "安阳",
        "area_3": "内黄"
      },
      {
        "country": 1,
        "weaid": 1367,
        "cityid": 101290806,
        "simcode": "nanhua",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "南华"
      },
      {
        "country": 1,
        "weaid": 1368,
        "cityid": 101050602,
        "simcode": "nenjiang",
        "area_1": "黑龙江",
        "area_2": "黑河",
        "area_3": "嫩江"
      },
      {
        "country": 1,
        "weaid": 1369,
        "cityid": 101120409,
        "simcode": "ningjin",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "宁津"
      },
      {
        "country": 1,
        "weaid": 1370,
        "cityid": 101230603,
        "simcode": "fjnanjing",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "南靖"
      },
      {
        "country": 1,
        "weaid": 1371,
        "cityid": 101270903,
        "simcode": "nanjiang",
        "area_1": "四川",
        "area_2": "巴中",
        "area_3": "南江"
      },
      {
        "country": 1,
        "weaid": 1372,
        "cityid": 101290212,
        "simcode": "nanjian",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "南涧"
      },
      {
        "country": 1,
        "weaid": 1373,
        "cityid": 101240704,
        "simcode": "nankang",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "南康"
      },
      {
        "country": 1,
        "weaid": 1374,
        "cityid": 101291404,
        "simcode": "ninglang",
        "area_1": "云南",
        "area_2": "丽江",
        "area_3": "宁蒗"
      },
      {
        "country": 1,
        "weaid": 1375,
        "cityid": 101181303,
        "simcode": "nanle",
        "area_1": "河南",
        "area_2": "濮阳",
        "area_3": "南乐"
      },
      {
        "country": 1,
        "weaid": 1376,
        "cityid": 101220304,
        "simcode": "nanling",
        "area_1": "安徽",
        "area_2": "芜湖",
        "area_3": "南陵"
      },
      {
        "country": 1,
        "weaid": 1377,
        "cityid": 101181007,
        "simcode": "ningling",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "宁陵"
      },
      {
        "country": 1,
        "weaid": 1378,
        "cityid": 101131003,
        "simcode": "nileke",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "尼勒克"
      },
      {
        "country": 1,
        "weaid": 1379,
        "cityid": 101140204,
        "simcode": "nielamu",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "聂拉木"
      },
      {
        "country": 1,
        "weaid": 1380,
        "cityid": 101300207,
        "simcode": "ningming",
        "area_1": "广西",
        "area_2": "崇左",
        "area_3": "宁明"
      },
      {
        "country": 1,
        "weaid": 1381,
        "cityid": 101140203,
        "simcode": "nanmulin",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "南木林"
      },
      {
        "country": 1,
        "weaid": 1382,
        "cityid": 101080508,
        "simcode": "naimanqi",
        "area_1": "内蒙古",
        "area_2": "通辽",
        "area_3": "奈曼"
      },
      {
        "country": 1,
        "weaid": 1383,
        "cityid": 101140103,
        "simcode": "nimu",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "尼木"
      },
      {
        "country": 1,
        "weaid": 1384,
        "cityid": 101271608,
        "simcode": "ningnan",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "宁南"
      },
      {
        "country": 1,
        "weaid": 1386,
        "cityid": 101110809,
        "simcode": "ningqiang",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "宁强"
      },
      {
        "country": 1,
        "weaid": 1387,
        "cityid": 101110710,
        "simcode": "ningshan",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "宁陕"
      },
      {
        "country": 1,
        "weaid": 1388,
        "cityid": 101101007,
        "simcode": "ningwu",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "宁武"
      },
      {
        "country": 1,
        "weaid": 1389,
        "cityid": 101180706,
        "simcode": "naxiang",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "内乡"
      },
      {
        "country": 1,
        "weaid": 1390,
        "cityid": 101250102,
        "simcode": "ningxiang",
        "area_1": "湖南",
        "area_2": "长沙",
        "area_3": "宁乡"
      },
      {
        "country": 1,
        "weaid": 1391,
        "cityid": 101250702,
        "simcode": "nanxian",
        "area_1": "湖南",
        "area_2": "益阳",
        "area_3": "南县"
      },
      {
        "country": 1,
        "weaid": 1392,
        "cityid": 101280207,
        "simcode": "nanxiong",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "南雄"
      },
      {
        "country": 1,
        "weaid": 1393,
        "cityid": 101271007,
        "simcode": "naxi",
        "area_1": "四川",
        "area_2": "泸州",
        "area_3": "纳溪"
      },
      {
        "country": 1,
        "weaid": 1394,
        "cityid": 101271104,
        "simcode": "nanxi",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "南溪"
      },
      {
        "country": 1,
        "weaid": 1395,
        "cityid": 101160407,
        "simcode": "ningxian",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "宁县"
      },
      {
        "country": 1,
        "weaid": 1396,
        "cityid": 101120806,
        "simcode": "ningyang",
        "area_1": "山东",
        "area_2": "泰安",
        "area_3": "宁阳"
      },
      {
        "country": 1,
        "weaid": 1397,
        "cityid": 101260706,
        "simcode": "nayong",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "纳雍"
      },
      {
        "country": 1,
        "weaid": 1398,
        "cityid": 101251406,
        "simcode": "ningyuan",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "宁远"
      },
      {
        "country": 1,
        "weaid": 1399,
        "cityid": 101180702,
        "simcode": "nanzhao",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "南召"
      },
      {
        "country": 1,
        "weaid": 1400,
        "cityid": 101200204,
        "simcode": "nanzhang",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "南漳"
      },
      {
        "country": 1,
        "weaid": 1401,
        "cityid": 101110810,
        "simcode": "nanzheng",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "南郑"
      },
      {
        "country": 1,
        "weaid": 1402,
        "cityid": 101210908,
        "simcode": "panan",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "磐安"
      },
      {
        "country": 1,
        "weaid": 1403,
        "cityid": 101270504,
        "simcode": "pengan",
        "area_1": "四川",
        "area_2": "南充",
        "area_3": "蓬安"
      },
      {
        "country": 1,
        "weaid": 1404,
        "cityid": 101260909,
        "simcode": "puan",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "普安"
      },
      {
        "country": 1,
        "weaid": 1406,
        "cityid": 101260304,
        "simcode": "pingba",
        "area_1": "贵州",
        "area_2": "安顺",
        "area_3": "平坝"
      },
      {
        "country": 1,
        "weaid": 1407,
        "cityid": 101301102,
        "simcode": "pubei",
        "area_1": "广西",
        "area_2": "钦州",
        "area_3": "浦北"
      },
      {
        "country": 1,
        "weaid": 1408,
        "cityid": 101290310,
        "simcode": "pingbian",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "屏边"
      },
      {
        "country": 1,
        "weaid": 1409,
        "cityid": 101230906,
        "simcode": "fjpucheng",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "浦城"
      },
      {
        "country": 1,
        "weaid": 1410,
        "cityid": 101270904,
        "simcode": "pingchang",
        "area_1": "四川",
        "area_2": "巴中",
        "area_3": "平昌"
      },
      {
        "country": 1,
        "weaid": 1411,
        "cityid": 101110507,
        "simcode": "pucheng",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "蒲城"
      },
      {
        "country": 1,
        "weaid": 1412,
        "cityid": 101100303,
        "simcode": "pingding",
        "area_1": "山西",
        "area_2": "阳泉",
        "area_3": "平定"
      },
      {
        "country": 1,
        "weaid": 1413,
        "cityid": 101260302,
        "simcode": "puding",
        "area_1": "贵州",
        "area_2": "安顺",
        "area_3": "普定"
      },
      {
        "country": 1,
        "weaid": 1414,
        "cityid": 101120208,
        "simcode": "pingdu",
        "area_1": "山东",
        "area_2": "青岛",
        "area_3": "平度"
      },
      {
        "country": 1,
        "weaid": 1415,
        "cityid": 101101005,
        "simcode": "pianguan",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "偏关"
      },
      {
        "country": 1,
        "weaid": 1416,
        "cityid": 101301007,
        "simcode": "pingguo",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "平果"
      },
      {
        "country": 1,
        "weaid": 1417,
        "cityid": 101230604,
        "simcode": "pinghe",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "平和"
      },
      {
        "country": 1,
        "weaid": 1418,
        "cityid": 101210902,
        "simcode": "zjpujiang",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "浦江"
      },
      {
        "country": 1,
        "weaid": 1419,
        "cityid": 101251005,
        "simcode": "pingjiang",
        "area_1": "湖南",
        "area_2": "岳阳",
        "area_3": "平江"
      },
      {
        "country": 1,
        "weaid": 1420,
        "cityid": 101270109,
        "simcode": "pujiang",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "蒲江"
      },
      {
        "country": 1,
        "weaid": 1421,
        "cityid": 101120504,
        "simcode": "penglai",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "蓬莱"
      },
      {
        "country": 1,
        "weaid": 1422,
        "cityid": 101140705,
        "simcode": "pulan",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "普兰"
      },
      {
        "country": 1,
        "weaid": 1423,
        "cityid": 101070204,
        "simcode": "pulandian",
        "area_1": "辽宁",
        "area_2": "大连",
        "area_3": "普兰店"
      },
      {
        "country": 1,
        "weaid": 1424,
        "cityid": 101300512,
        "simcode": "pingle",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "平乐"
      },
      {
        "country": 1,
        "weaid": 1425,
        "cityid": 101110707,
        "simcode": "pingli",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "平利"
      },
      {
        "country": 1,
        "weaid": 1426,
        "cityid": 101100813,
        "simcode": "pinglu",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "平陆"
      },
      {
        "country": 1,
        "weaid": 1427,
        "cityid": 101170203,
        "simcode": "pingluo",
        "area_1": "宁夏",
        "area_2": "石嘴山",
        "area_3": "平罗"
      },
      {
        "country": 1,
        "weaid": 1428,
        "cityid": 101230309,
        "simcode": "pingnan",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "屏南"
      },
      {
        "country": 1,
        "weaid": 1429,
        "cityid": 101300803,
        "simcode": "gxpingnan",
        "area_1": "广西",
        "area_2": "贵港",
        "area_3": "平南"
      },
      {
        "country": 1,
        "weaid": 1430,
        "cityid": 101281903,
        "simcode": "puning",
        "area_1": "广东",
        "area_2": "揭阳",
        "area_3": "普宁"
      },
      {
        "country": 1,
        "weaid": 1431,
        "cityid": 101090405,
        "simcode": "pingquan",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "平泉"
      },
      {
        "country": 1,
        "weaid": 1432,
        "cityid": 101060205,
        "simcode": "panshi",
        "area_1": "吉林",
        "area_2": "磐石",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 1433,
        "cityid": 101071303,
        "simcode": "panshan",
        "area_1": "辽宁",
        "area_2": "盘锦",
        "area_3": "盘山"
      },
      {
        "country": 1,
        "weaid": 1434,
        "cityid": 101090111,
        "simcode": "pingshan",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "平山"
      },
      {
        "country": 1,
        "weaid": 1435,
        "cityid": 101100506,
        "simcode": "pingshun",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "平顺"
      },
      {
        "country": 1,
        "weaid": 1436,
        "cityid": 101271111,
        "simcode": "scpingshan",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "屏山"
      },
      {
        "country": 1,
        "weaid": 1437,
        "cityid": 101131302,
        "simcode": "pishan",
        "area_1": "新疆",
        "area_2": "和田",
        "area_3": "皮山"
      },
      {
        "country": 1,
        "weaid": 1438,
        "cityid": 101271503,
        "simcode": "pengshan",
        "area_1": "四川",
        "area_2": "眉山",
        "area_3": "彭山"
      },
      {
        "country": 1,
        "weaid": 1440,
        "cityid": 101230108,
        "simcode": "pingtan",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "平潭"
      },
      {
        "country": 1,
        "weaid": 1441,
        "cityid": 101260409,
        "simcode": "pingtang",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "平塘"
      },
      {
        "country": 1,
        "weaid": 1442,
        "cityid": 101211105,
        "simcode": "putuo",
        "area_1": "浙江",
        "area_2": "舟山",
        "area_3": "普陀"
      },
      {
        "country": 1,
        "weaid": 1443,
        "cityid": 101270407,
        "simcode": "pingwu",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "平武"
      },
      {
        "country": 1,
        "weaid": 1444,
        "cityid": 101100708,
        "simcode": "puxian",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "蒲县"
      },
      {
        "country": 1,
        "weaid": 1445,
        "cityid": 101190804,
        "simcode": "peixian",
        "area_1": "江苏",
        "area_2": "徐州",
        "area_3": "沛县"
      },
      {
        "country": 1,
        "weaid": 1446,
        "cityid": 101300204,
        "simcode": "pingxiang",
        "area_1": "广西",
        "area_2": "崇左",
        "area_3": "凭祥"
      },
      {
        "country": 1,
        "weaid": 1447,
        "cityid": 101270107,
        "simcode": "pixian",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "郫县"
      },
      {
        "country": 1,
        "weaid": 1448,
        "cityid": 101270702,
        "simcode": "pengxi",
        "area_1": "四川",
        "area_2": "遂宁",
        "area_3": "蓬溪"
      },
      {
        "country": 1,
        "weaid": 1449,
        "cityid": 101260804,
        "simcode": "panxian",
        "area_1": "贵州",
        "area_2": "六盘水",
        "area_3": "盘县"
      },
      {
        "country": 1,
        "weaid": 1450,
        "cityid": 101100410,
        "simcode": "pingyao",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "平遥"
      },
      {
        "country": 1,
        "weaid": 1451,
        "cityid": 101210704,
        "simcode": "pingyang",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "平阳"
      },
      {
        "country": 1,
        "weaid": 1453,
        "cityid": 101300109,
        "simcode": "binyang",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "宾阳"
      },
      {
        "country": 1,
        "weaid": 1454,
        "cityid": 101170406,
        "simcode": "pengyang",
        "area_1": "宁夏",
        "area_2": "固原",
        "area_3": "彭阳"
      },
      {
        "country": 1,
        "weaid": 1455,
        "cityid": 101120105,
        "simcode": "pingyin",
        "area_1": "山东",
        "area_2": "济南",
        "area_3": "平阴"
      },
      {
        "country": 1,
        "weaid": 1456,
        "cityid": 101120908,
        "simcode": "pingyi",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "平邑"
      },
      {
        "country": 1,
        "weaid": 1457,
        "cityid": 101120408,
        "simcode": "sdpingyuan",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "平原"
      },
      {
        "country": 1,
        "weaid": 1458,
        "cityid": 101280407,
        "simcode": "pingyuan",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "平远"
      },
      {
        "country": 1,
        "weaid": 1459,
        "cityid": 101181607,
        "simcode": "pingyu",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "平舆"
      },
      {
        "country": 1,
        "weaid": 1460,
        "cityid": 101240208,
        "simcode": "pengze",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "彭泽"
      },
      {
        "country": 1,
        "weaid": 1461,
        "cityid": 101190805,
        "simcode": "pizhou",
        "area_1": "江苏",
        "area_2": "徐州",
        "area_3": "邳州"
      },
      {
        "country": 1,
        "weaid": 1462,
        "cityid": 101270112,
        "simcode": "pengzhou",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "彭州"
      },
      {
        "country": 1,
        "weaid": 1463,
        "cityid": 101050509,
        "simcode": "qingan",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "庆安"
      },
      {
        "country": 1,
        "weaid": 1464,
        "cityid": 101060802,
        "simcode": "jlqianan",
        "area_1": "吉林",
        "area_2": "松原",
        "area_3": "乾安"
      },
      {
        "country": 1,
        "weaid": 1465,
        "cityid": 101160904,
        "simcode": "qinan",
        "area_1": "甘肃",
        "area_2": "天水",
        "area_3": "秦安"
      },
      {
        "country": 1,
        "weaid": 1466,
        "cityid": 101090511,
        "simcode": "qianan",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "迁安"
      },
      {
        "country": 1,
        "weaid": 1467,
        "cityid": 101290606,
        "simcode": "qiubei",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "丘北"
      },
      {
        "country": 1,
        "weaid": 1468,
        "cityid": 101200507,
        "simcode": "qinchun",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "蕲春"
      },
      {
        "country": 1,
        "weaid": 1469,
        "cityid": 101272103,
        "simcode": "qingchuan",
        "area_1": "四川",
        "area_2": "广元",
        "area_3": "青川"
      },
      {
        "country": 1,
        "weaid": 1470,
        "cityid": 101190507,
        "simcode": "jsqidong",
        "area_1": "江苏",
        "area_2": "南通",
        "area_3": "启东"
      },
      {
        "country": 1,
        "weaid": 1471,
        "cityid": 101250404,
        "simcode": "qidong",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "祁东"
      },
      {
        "country": 1,
        "weaid": 1472,
        "cityid": 101181304,
        "simcode": "qingfeng",
        "area_1": "河南",
        "area_2": "濮阳",
        "area_3": "清丰"
      },
      {
        "country": 1,
        "weaid": 1473,
        "cityid": 101120710,
        "simcode": "qufu",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "曲阜"
      },
      {
        "country": 1,
        "weaid": 1474,
        "cityid": 101050508,
        "simcode": "qinggang",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "青冈"
      },
      {
        "country": 1,
        "weaid": 1475,
        "cityid": 101131409,
        "simcode": "qinghe",
        "area_1": "新疆",
        "area_2": "阿勒泰",
        "area_3": "青河"
      },
      {
        "country": 1,
        "weaid": 1476,
        "cityid": 101221105,
        "simcode": "quanjiao",
        "area_1": "安徽",
        "area_2": "滁州",
        "area_3": "全椒"
      },
      {
        "country": 1,
        "weaid": 1477,
        "cityid": 101280209,
        "simcode": "qujiang",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "曲江"
      },
      {
        "country": 1,
        "weaid": 1478,
        "cityid": 101291006,
        "simcode": "qiaojia",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "巧家"
      },
      {
        "country": 1,
        "weaid": 1479,
        "cityid": 101110412,
        "simcode": "qingjian",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "清涧"
      },
      {
        "country": 1,
        "weaid": 1480,
        "cityid": 101270113,
        "simcode": "qionglai",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "邛崃"
      },
      {
        "country": 1,
        "weaid": 1481,
        "cityid": 101150803,
        "simcode": "qilian",
        "area_1": "青海",
        "area_2": "海北",
        "area_3": "祁连"
      },
      {
        "country": 1,
        "weaid": 1482,
        "cityid": 101230803,
        "simcode": "qingliu",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "清流"
      },
      {
        "country": 1,
        "weaid": 1483,
        "cityid": 101260902,
        "simcode": "qinglong",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "晴隆"
      },
      {
        "country": 1,
        "weaid": 1484,
        "cityid": 101221004,
        "simcode": "qimen",
        "area_1": "安徽",
        "area_2": "黄山",
        "area_3": "祁门"
      },
      {
        "country": 1,
        "weaid": 1485,
        "cityid": 101150606,
        "simcode": "qumalai",
        "area_1": "青海",
        "area_2": "玉树",
        "area_3": "曲麻莱"
      },
      {
        "country": 1,
        "weaid": 1486,
        "cityid": 101130605,
        "simcode": "qiemo",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "且末"
      },
      {
        "country": 1,
        "weaid": 1487,
        "cityid": 101240713,
        "simcode": "quannan",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "全南"
      },
      {
        "country": 1,
        "weaid": 1488,
        "cityid": 101100602,
        "simcode": "qinshui",
        "area_1": "山西",
        "area_2": "晋城",
        "area_3": "沁水"
      },
      {
        "country": 1,
        "weaid": 1490,
        "cityid": 101220604,
        "simcode": "ahqianshan",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "潜山"
      },
      {
        "country": 1,
        "weaid": 1491,
        "cityid": 101240311,
        "simcode": "qianshan",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "铅山"
      },
      {
        "country": 1,
        "weaid": 1492,
        "cityid": 101110905,
        "simcode": "qishan",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "岐山"
      },
      {
        "country": 1,
        "weaid": 1493,
        "cityid": 101160903,
        "simcode": "qingshui",
        "area_1": "甘肃",
        "area_2": "天水",
        "area_3": "清水"
      },
      {
        "country": 1,
        "weaid": 1494,
        "cityid": 101181609,
        "simcode": "queshan",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "确山"
      },
      {
        "country": 1,
        "weaid": 1495,
        "cityid": 101271506,
        "simcode": "qingshen",
        "area_1": "四川",
        "area_2": "眉山",
        "area_3": "青神"
      },
      {
        "country": 1,
        "weaid": 1496,
        "cityid": 101130406,
        "simcode": "qitai",
        "area_1": "新疆",
        "area_2": "昌吉",
        "area_3": "奇台"
      },
      {
        "country": 1,
        "weaid": 1497,
        "cityid": 101210805,
        "simcode": "qingtian",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "青田"
      },
      {
        "country": 1,
        "weaid": 1498,
        "cityid": 101170306,
        "simcode": "qingtongxia",
        "area_1": "宁夏",
        "area_2": "吴忠",
        "area_3": "青铜峡"
      },
      {
        "country": 1,
        "weaid": 1499,
        "cityid": 101100702,
        "simcode": "quwo",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "曲沃"
      },
      {
        "country": 1,
        "weaid": 1500,
        "cityid": 101090507,
        "simcode": "qianxi",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "迁西"
      },
      {
        "country": 1,
        "weaid": 1501,
        "cityid": 101090702,
        "simcode": "qingxian",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "青县"
      },
      {
        "country": 1,
        "weaid": 1502,
        "cityid": 101100409,
        "simcode": "sxqixian",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "祁县"
      },
      {
        "country": 1,
        "weaid": 1503,
        "cityid": 101100508,
        "simcode": "qinxian",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "沁县"
      },
      {
        "country": 1,
        "weaid": 1504,
        "cityid": 101120507,
        "simcode": "qixia",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "栖霞"
      },
      {
        "country": 1,
        "weaid": 1506,
        "cityid": 101180802,
        "simcode": "hnkfqixian",
        "area_1": "河南",
        "area_2": "开封",
        "area_3": "杞县"
      },
      {
        "country": 1,
        "weaid": 1507,
        "cityid": 101181203,
        "simcode": "hnqixian",
        "area_1": "河南",
        "area_2": "鹤壁",
        "area_3": "淇县"
      },
      {
        "country": 1,
        "weaid": 1508,
        "cityid": 101270605,
        "simcode": "quxian",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "渠县"
      },
      {
        "country": 1,
        "weaid": 1509,
        "cityid": 101100102,
        "simcode": "qingxu",
        "area_1": "山西",
        "area_2": "太原",
        "area_3": "清徐"
      },
      {
        "country": 1,
        "weaid": 1510,
        "cityid": 101090214,
        "simcode": "quyang",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "曲阳"
      },
      {
        "country": 1,
        "weaid": 1511,
        "cityid": 101221703,
        "simcode": "qingyang",
        "area_1": "安徽",
        "area_2": "池州",
        "area_3": "青阳"
      },
      {
        "country": 1,
        "weaid": 1512,
        "cityid": 101181104,
        "simcode": "qinyang",
        "area_1": "河南",
        "area_2": "焦作",
        "area_3": "沁阳"
      },
      {
        "country": 1,
        "weaid": 1514,
        "cityid": 101251402,
        "simcode": "qiyang",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "祁阳"
      },
      {
        "country": 1,
        "weaid": 1515,
        "cityid": 101110903,
        "simcode": "sxqianyang",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "千阳"
      },
      {
        "country": 1,
        "weaid": 1516,
        "cityid": 101070403,
        "simcode": "lnqingyuan",
        "area_1": "辽宁",
        "area_2": "抚顺",
        "area_3": "清原"
      },
      {
        "country": 1,
        "weaid": 1517,
        "cityid": 101090224,
        "simcode": "hbqingyuan",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "清苑"
      },
      {
        "country": 1,
        "weaid": 1518,
        "cityid": 101100510,
        "simcode": "qinyuan",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "沁源"
      },
      {
        "country": 1,
        "weaid": 1519,
        "cityid": 101120407,
        "simcode": "qingyun",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "庆云"
      },
      {
        "country": 1,
        "weaid": 1520,
        "cityid": 101210807,
        "simcode": "zjqingyuan",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "庆元"
      },
      {
        "country": 1,
        "weaid": 1521,
        "cityid": 101091015,
        "simcode": "hbquzhou",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "曲周"
      },
      {
        "country": 1,
        "weaid": 1522,
        "cityid": 101120602,
        "simcode": "qingzhou",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "青州"
      },
      {
        "country": 1,
        "weaid": 1523,
        "cityid": 101300508,
        "simcode": "gxquanzhou",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "全州"
      },
      {
        "country": 1,
        "weaid": 1524,
        "cityid": 101260108,
        "simcode": "qingzhen",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "清镇"
      },
      {
        "country": 1,
        "weaid": 1525,
        "cityid": 101210705,
        "simcode": "ruian",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "瑞安"
      },
      {
        "country": 1,
        "weaid": 1526,
        "cityid": 101300306,
        "simcode": "rongan",
        "area_1": "广西",
        "area_2": "柳州",
        "area_3": "融安"
      },
      {
        "country": 1,
        "weaid": 1527,
        "cityid": 101090207,
        "simcode": "rongcheng",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "容城"
      },
      {
        "country": 1,
        "weaid": 1528,
        "cityid": 101240202,
        "simcode": "ruichang",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "瑞昌"
      },
      {
        "country": 1,
        "weaid": 1529,
        "cityid": 101250508,
        "simcode": "rucheng",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "汝城"
      },
      {
        "country": 1,
        "weaid": 1530,
        "cityid": 101190504,
        "simcode": "rudong",
        "area_1": "江苏",
        "area_2": "南通",
        "area_3": "如东"
      },
      {
        "country": 1,
        "weaid": 1531,
        "cityid": 101190503,
        "simcode": "rugao",
        "area_1": "江苏",
        "area_2": "南通",
        "area_3": "如皋"
      },
      {
        "country": 1,
        "weaid": 1532,
        "cityid": 101280206,
        "simcode": "renhua",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "仁化"
      },
      {
        "country": 1,
        "weaid": 1533,
        "cityid": 101260203,
        "simcode": "renhuai",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "仁怀"
      },
      {
        "country": 1,
        "weaid": 1534,
        "cityid": 101240709,
        "simcode": "ruijin",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "瑞金"
      },
      {
        "country": 1,
        "weaid": 1535,
        "cityid": 101260516,
        "simcode": "rongjiang",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "榕江"
      },
      {
        "country": 1,
        "weaid": 1536,
        "cityid": 101291506,
        "simcode": "ruili",
        "area_1": "云南",
        "area_2": "德宏",
        "area_3": "瑞丽"
      },
      {
        "country": 1,
        "weaid": 1537,
        "cityid": 101181605,
        "simcode": "runan",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "汝南"
      },
      {
        "country": 1,
        "weaid": 1538,
        "cityid": 101090406,
        "simcode": "luanping",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "滦平"
      },
      {
        "country": 1,
        "weaid": 1539,
        "cityid": 101281502,
        "simcode": "raoping",
        "area_1": "广东",
        "area_2": "潮州",
        "area_3": "饶平"
      },
      {
        "country": 1,
        "weaid": 1540,
        "cityid": 101090712,
        "simcode": "renqiu",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "任丘"
      },
      {
        "country": 1,
        "weaid": 1541,
        "cityid": 101130604,
        "simcode": "ruoqiang",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "若羌"
      },
      {
        "country": 1,
        "weaid": 1542,
        "cityid": 101300307,
        "simcode": "rongshui",
        "area_1": "广西",
        "area_2": "柳州",
        "area_3": "融水"
      },
      {
        "country": 1,
        "weaid": 1543,
        "cityid": 101271502,
        "simcode": "renshou",
        "area_1": "四川",
        "area_2": "眉山",
        "area_3": "仁寿"
      },
      {
        "country": 1,
        "weaid": 1544,
        "cityid": 101090504,
        "simcode": "luanxian",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "滦县"
      },
      {
        "country": 1,
        "weaid": 1545,
        "cityid": 101100811,
        "simcode": "ruicheng",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "芮城"
      },
      {
        "country": 1,
        "weaid": 1546,
        "cityid": 101300904,
        "simcode": "gxrongxian",
        "area_1": "广西",
        "area_2": "玉林",
        "area_3": "容县"
      },
      {
        "country": 1,
        "weaid": 1547,
        "cityid": 101270303,
        "simcode": "scrongxian",
        "area_1": "四川",
        "area_2": "自贡",
        "area_3": "荣县"
      },
      {
        "country": 1,
        "weaid": 1548,
        "cityid": 101180910,
        "simcode": "ruyang",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "汝阳"
      },
      {
        "country": 1,
        "weaid": 1549,
        "cityid": 101280202,
        "simcode": "ruyuan",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "乳源"
      },
      {
        "country": 1,
        "weaid": 1550,
        "cityid": 101180504,
        "simcode": "ruzhou",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "汝州"
      },
      {
        "country": 1,
        "weaid": 1551,
        "cityid": 101290809,
        "simcode": "shuangbai",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "双柏"
      },
      {
        "country": 1,
        "weaid": 1552,
        "cityid": 101160806,
        "simcode": "subei",
        "area_1": "甘肃",
        "area_2": "酒泉",
        "area_3": "肃北"
      },
      {
        "country": 1,
        "weaid": 1553,
        "cityid": 101051202,
        "simcode": "suibin",
        "area_1": "黑龙江",
        "area_2": "鹤岗",
        "area_3": "绥滨"
      },
      {
        "country": 1,
        "weaid": 1554,
        "cityid": 101260503,
        "simcode": "shibing",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "施秉"
      },
      {
        "country": 1,
        "weaid": 1555,
        "cityid": 101181604,
        "simcode": "shangcai",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "上蔡"
      },
      {
        "country": 1,
        "weaid": 1556,
        "cityid": 101050102,
        "simcode": "shuangcheng",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "双城"
      },
      {
        "country": 1,
        "weaid": 1557,
        "cityid": 101101006,
        "simcode": "shenchi",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "神池"
      },
      {
        "country": 1,
        "weaid": 1558,
        "cityid": 101221507,
        "simcode": "shucheng",
        "area_1": "安徽",
        "area_2": "六安",
        "area_3": "舒城"
      },
      {
        "country": 1,
        "weaid": 1559,
        "cityid": 101210802,
        "simcode": "suichang",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "遂昌"
      },
      {
        "country": 1,
        "weaid": 1560,
        "cityid": 101230902,
        "simcode": "shunchang",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "顺昌"
      },
      {
        "country": 1,
        "weaid": 1561,
        "cityid": 101230808,
        "simcode": "shaxian",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "沙县"
      },
      {
        "country": 1,
        "weaid": 1563,
        "cityid": 101240610,
        "simcode": "suichuan",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "遂川"
      },
      {
        "country": 1,
        "weaid": 1564,
        "cityid": 101240708,
        "simcode": "shicheng",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "石城"
      },
      {
        "country": 1,
        "weaid": 1565,
        "cityid": 101130905,
        "simcode": "shache",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "莎车"
      },
      {
        "country": 1,
        "weaid": 1566,
        "cityid": 101180609,
        "simcode": "shangcheng",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "商城"
      },
      {
        "country": 1,
        "weaid": 1567,
        "cityid": 101160706,
        "simcode": "shandan",
        "area_1": "甘肃",
        "area_2": "张掖",
        "area_3": "山丹"
      },
      {
        "country": 1,
        "weaid": 1568,
        "cityid": 101280801,
        "simcode": "shunde",
        "area_1": "广东",
        "area_2": "佛山",
        "area_3": "顺德"
      },
      {
        "country": 1,
        "weaid": 1569,
        "cityid": 101110410,
        "simcode": "suide",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "绥德"
      },
      {
        "country": 1,
        "weaid": 1570,
        "cityid": 101290504,
        "simcode": "shidian",
        "area_1": "云南",
        "area_2": "保山",
        "area_3": "施甸"
      },
      {
        "country": 1,
        "weaid": 1571,
        "cityid": 101250905,
        "simcode": "shaodong",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "邵东"
      },
      {
        "country": 1,
        "weaid": 1572,
        "cityid": 101080404,
        "simcode": "shangdu",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "商都"
      },
      {
        "country": 1,
        "weaid": 1573,
        "cityid": 101260411,
        "simcode": "sandu",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "三都"
      },
      {
        "country": 1,
        "weaid": 1574,
        "cityid": 101272004,
        "simcode": "shifang",
        "area_1": "四川",
        "area_2": "德阳",
        "area_3": "什邡"
      },
      {
        "country": 1,
        "weaid": 1575,
        "cityid": 101250802,
        "simcode": "shuangfeng",
        "area_1": "湖南",
        "area_2": "娄底",
        "area_3": "双峰"
      },
      {
        "country": 1,
        "weaid": 1576,
        "cityid": 101050305,
        "simcode": "suifenhe",
        "area_1": "黑龙江",
        "area_2": "牡丹江",
        "area_3": "绥芬河"
      },
      {
        "country": 1,
        "weaid": 1577,
        "cityid": 101240505,
        "simcode": "shanggao",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "上高"
      },
      {
        "country": 1,
        "weaid": 1578,
        "cityid": 101120603,
        "simcode": "shouguang",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "寿光"
      },
      {
        "country": 1,
        "weaid": 1579,
        "cityid": 101230705,
        "simcode": "shanghang",
        "area_1": "福建",
        "area_2": "龙岩",
        "area_3": "上杭"
      },
      {
        "country": 1,
        "weaid": 1580,
        "cityid": 101090609,
        "simcode": "sanhe",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "三河"
      },
      {
        "country": 1,
        "weaid": 1581,
        "cityid": 101090917,
        "simcode": "shahe",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "沙河"
      },
      {
        "country": 1,
        "weaid": 1582,
        "cityid": 101120103,
        "simcode": "shanghe",
        "area_1": "山东",
        "area_2": "济南",
        "area_3": "商河"
      },
      {
        "country": 1,
        "weaid": 1583,
        "cityid": 101191304,
        "simcode": "sihong",
        "area_1": "江苏",
        "area_2": "宿迁",
        "area_3": "泗洪"
      },
      {
        "country": 1,
        "weaid": 1584,
        "cityid": 101270703,
        "simcode": "shehong",
        "area_1": "四川",
        "area_2": "遂宁",
        "area_3": "射洪"
      },
      {
        "country": 1,
        "weaid": 1585,
        "cityid": 101280903,
        "simcode": "sihui",
        "area_1": "广东",
        "area_2": "肇庆",
        "area_3": "四会"
      },
      {
        "country": 1,
        "weaid": 1586,
        "cityid": 101260509,
        "simcode": "sansui",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "三穗"
      },
      {
        "country": 1,
        "weaid": 1587,
        "cityid": 101300308,
        "simcode": "sanjiang",
        "area_1": "广西",
        "area_2": "柳州",
        "area_3": "三江"
      },
      {
        "country": 1,
        "weaid": 1588,
        "cityid": 101291007,
        "simcode": "suijiang",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "绥江"
      },
      {
        "country": 1,
        "weaid": 1589,
        "cityid": 101291104,
        "simcode": "shuangjiang",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "双江"
      },
      {
        "country": 1,
        "weaid": 1590,
        "cityid": 101060202,
        "simcode": "shulan",
        "area_1": "吉林",
        "area_2": "舒兰",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 1591,
        "cityid": 101050510,
        "simcode": "suiling",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "绥棱"
      },
      {
        "country": 1,
        "weaid": 1592,
        "cityid": 101060402,
        "simcode": "shuangliao",
        "area_1": "吉林",
        "area_2": "四平",
        "area_3": "双辽"
      },
      {
        "country": 1,
        "weaid": 1593,
        "cityid": 101300107,
        "simcode": "shanglin",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "上林"
      },
      {
        "country": 1,
        "weaid": 1594,
        "cityid": 101270106,
        "simcode": "shuangliu",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "双流"
      },
      {
        "country": 1,
        "weaid": 1595,
        "cityid": 101290107,
        "simcode": "shilin",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "石林"
      },
      {
        "country": 1,
        "weaid": 1596,
        "cityid": 101101106,
        "simcode": "shilou",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "石楼"
      },
      {
        "country": 1,
        "weaid": 1597,
        "cityid": 101210604,
        "simcode": "sanmen",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "三门"
      },
      {
        "country": 1,
        "weaid": 1598,
        "cityid": 101250607,
        "simcode": "shimen",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "石门"
      },
      {
        "country": 1,
        "weaid": 1599,
        "cityid": 101290110,
        "simcode": "songming",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "嵩明"
      },
      {
        "country": 1,
        "weaid": 1600,
        "cityid": 101271705,
        "simcode": "shimian",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "石棉"
      },
      {
        "country": 1,
        "weaid": 1601,
        "cityid": 101110403,
        "simcode": "shenmu",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "神木"
      },
      {
        "country": 1,
        "weaid": 1602,
        "cityid": 101260605,
        "simcode": "sinan",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "思南"
      },
      {
        "country": 1,
        "weaid": 1603,
        "cityid": 101110607,
        "simcode": "shangnan",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "商南"
      },
      {
        "country": 1,
        "weaid": 1604,
        "cityid": 101160702,
        "simcode": "sunan",
        "area_1": "甘肃",
        "area_2": "张掖",
        "area_3": "肃南"
      },
      {
        "country": 1,
        "weaid": 1605,
        "cityid": 101190806,
        "simcode": "jssuining",
        "area_1": "江苏",
        "area_2": "徐州",
        "area_3": "睢宁"
      },
      {
        "country": 1,
        "weaid": 1606,
        "cityid": 101230304,
        "simcode": "shouning",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "寿宁"
      },
      {
        "country": 1,
        "weaid": 1607,
        "cityid": 101250906,
        "simcode": "hnsuining",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "绥宁"
      },
      {
        "country": 1,
        "weaid": 1608,
        "cityid": 101080906,
        "simcode": "sunitezuoqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "苏左旗"
      },
      {
        "country": 1,
        "weaid": 1609,
        "cityid": 101080907,
        "simcode": "suniteyouqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "苏右旗"
      },
      {
        "country": 1,
        "weaid": 1610,
        "cityid": 101251404,
        "simcode": "shuangpai",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "双牌"
      },
      {
        "country": 1,
        "weaid": 1611,
        "cityid": 101271905,
        "simcode": "songpan",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "松潘"
      },
      {
        "country": 1,
        "weaid": 1613,
        "cityid": 101090216,
        "simcode": "shunping",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "顺平"
      },
      {
        "country": 1,
        "weaid": 1614,
        "cityid": 101290302,
        "simcode": "shiping",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "石屏"
      },
      {
        "country": 1,
        "weaid": 1615,
        "cityid": 101180704,
        "simcode": "sheqi",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "社旗"
      },
      {
        "country": 1,
        "weaid": 1616,
        "cityid": 101260608,
        "simcode": "shiqian",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "石阡"
      },
      {
        "country": 1,
        "weaid": 1617,
        "cityid": 101181410,
        "simcode": "shenqiu",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "沈丘"
      },
      {
        "country": 1,
        "weaid": 1618,
        "cityid": 101110703,
        "simcode": "shiquan",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "石泉"
      },
      {
        "country": 1,
        "weaid": 1619,
        "cityid": 101120708,
        "simcode": "sishui",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "泗水"
      },
      {
        "country": 1,
        "weaid": 1620,
        "cityid": 101181406,
        "simcode": "shangshui",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "商水"
      },
      {
        "country": 1,
        "weaid": 1621,
        "cityid": 101200804,
        "simcode": "shishou",
        "area_1": "湖北",
        "area_2": "荆州",
        "area_3": "石首"
      },
      {
        "country": 1,
        "weaid": 1622,
        "cityid": 101250202,
        "simcode": "shaoshan",
        "area_1": "湖南",
        "area_2": "湘潭",
        "area_3": "韶山"
      },
      {
        "country": 1,
        "weaid": 1623,
        "cityid": 101280802,
        "simcode": "sanshui",
        "area_1": "广东",
        "area_2": "佛山",
        "area_3": "三水"
      },
      {
        "country": 1,
        "weaid": 1624,
        "cityid": 101130504,
        "simcode": "shanshan",
        "area_1": "新疆",
        "area_2": "吐鲁番",
        "area_3": "鄯善"
      },
      {
        "country": 1,
        "weaid": 1625,
        "cityid": 101211102,
        "simcode": "chengsi",
        "area_1": "浙江",
        "area_2": "舟山",
        "area_3": "嵊泗"
      },
      {
        "country": 1,
        "weaid": 1626,
        "cityid": 101301402,
        "simcode": "shangsi",
        "area_1": "广西",
        "area_2": "防城港",
        "area_3": "上思"
      },
      {
        "country": 1,
        "weaid": 1627,
        "cityid": 101220606,
        "simcode": "susong",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "宿松"
      },
      {
        "country": 1,
        "weaid": 1628,
        "cityid": 101221705,
        "simcode": "shitai",
        "area_1": "安徽",
        "area_2": "池州",
        "area_3": "石台"
      },
      {
        "country": 1,
        "weaid": 1629,
        "cityid": 101270402,
        "simcode": "santai",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "三台"
      },
      {
        "country": 1,
        "weaid": 1630,
        "cityid": 101260611,
        "simcode": "songtao",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "松桃"
      },
      {
        "country": 1,
        "weaid": 1631,
        "cityid": 101131107,
        "simcode": "shawan",
        "area_1": "新疆",
        "area_2": "塔城",
        "area_3": "沙湾"
      },
      {
        "country": 1,
        "weaid": 1632,
        "cityid": 101050603,
        "simcode": "sunwu",
        "area_1": "黑龙江",
        "area_2": "黑河",
        "area_3": "孙吴"
      },
      {
        "country": 1,
        "weaid": 1633,
        "cityid": 101230904,
        "simcode": "shaowu",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "邵武"
      },
      {
        "country": 1,
        "weaid": 1634,
        "cityid": 101091006,
        "simcode": "shexian",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "涉县"
      },
      {
        "country": 1,
        "weaid": 1635,
        "cityid": 101121009,
        "simcode": "danxian",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "单县"
      },
      {
        "country": 1,
        "weaid": 1637,
        "cityid": 101221202,
        "simcode": "ahsuixi",
        "area_1": "安徽",
        "area_2": "淮北",
        "area_3": "濉溪"
      },
      {
        "country": 1,
        "weaid": 1638,
        "cityid": 101221006,
        "simcode": "xiexian",
        "area_1": "安徽",
        "area_2": "黄山",
        "area_3": "歙县"
      },
      {
        "country": 1,
        "weaid": 1639,
        "cityid": 101220704,
        "simcode": "sixian",
        "area_1": "安徽",
        "area_2": "宿州",
        "area_3": "泗县"
      },
      {
        "country": 1,
        "weaid": 1640,
        "cityid": 101230908,
        "simcode": "songxi",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "松溪"
      },
      {
        "country": 1,
        "weaid": 1641,
        "cityid": 101181003,
        "simcode": "suixian",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "睢县"
      },
      {
        "country": 1,
        "weaid": 1642,
        "cityid": 101180907,
        "simcode": "songxian",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "嵩县"
      },
      {
        "country": 1,
        "weaid": 1643,
        "cityid": 101280203,
        "simcode": "shixing",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "始兴"
      },
      {
        "country": 1,
        "weaid": 1644,
        "cityid": 101281007,
        "simcode": "gdsuixi",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "遂溪"
      },
      {
        "country": 1,
        "weaid": 1645,
        "cityid": 101060106,
        "simcode": "shuangyang",
        "area_1": "吉林",
        "area_2": "长春",
        "area_3": "双阳"
      },
      {
        "country": 1,
        "weaid": 1646,
        "cityid": 101100407,
        "simcode": "shouyang",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "寿阳"
      },
      {
        "country": 1,
        "weaid": 1647,
        "cityid": 101190705,
        "simcode": "sheyang",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "射阳"
      },
      {
        "country": 1,
        "weaid": 1648,
        "cityid": 101191303,
        "simcode": "siyang",
        "area_1": "江苏",
        "area_2": "宿迁",
        "area_3": "泗阳"
      },
      {
        "country": 1,
        "weaid": 1649,
        "cityid": 101210808,
        "simcode": "songyang",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "松阳"
      },
      {
        "country": 1,
        "weaid": 1650,
        "cityid": 101260204,
        "simcode": "suiyang",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "绥阳"
      },
      {
        "country": 1,
        "weaid": 1651,
        "cityid": 101110608,
        "simcode": "shanyang",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "山阳"
      },
      {
        "country": 1,
        "weaid": 1652,
        "cityid": 101130806,
        "simcode": "shaya",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "沙雅"
      },
      {
        "country": 1,
        "weaid": 1653,
        "cityid": 101090306,
        "simcode": "shangyi",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "尚义"
      },
      {
        "country": 1,
        "weaid": 1654,
        "cityid": 101100903,
        "simcode": "shanyin",
        "area_1": "山西",
        "area_2": "朔州",
        "area_3": "山阴"
      },
      {
        "country": 1,
        "weaid": 1655,
        "cityid": 101240703,
        "simcode": "shangyou",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "上犹"
      },
      {
        "country": 1,
        "weaid": 1656,
        "cityid": 101210503,
        "simcode": "shangyu",
        "area_1": "浙江",
        "area_2": "绍兴",
        "area_3": "上虞"
      },
      {
        "country": 1,
        "weaid": 1658,
        "cityid": 101110201,
        "simcode": "sanyuan",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "三原"
      },
      {
        "country": 1,
        "weaid": 1660,
        "cityid": 101090108,
        "simcode": "shenze",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "深泽"
      },
      {
        "country": 1,
        "weaid": 1661,
        "cityid": 101050111,
        "simcode": "shangzhi",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "尚志"
      },
      {
        "country": 1,
        "weaid": 1662,
        "cityid": 101071403,
        "simcode": "suizhong",
        "area_1": "辽宁",
        "area_2": "葫芦岛",
        "area_3": "绥中"
      },
      {
        "country": 1,
        "weaid": 1663,
        "cityid": 101251102,
        "simcode": "sangzhi",
        "area_1": "湖南",
        "area_2": "张家界",
        "area_3": "桑植"
      },
      {
        "country": 1,
        "weaid": 1664,
        "cityid": 101200807,
        "simcode": "songzi",
        "area_1": "湖北",
        "area_2": "荆州",
        "area_3": "松滋"
      },
      {
        "country": 1,
        "weaid": 1665,
        "cityid": 101290406,
        "simcode": "shizong",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "师宗"
      },
      {
        "country": 1,
        "weaid": 1666,
        "cityid": 101080411,
        "simcode": "siziwangqi",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "四子王旗"
      },
      {
        "country": 1,
        "weaid": 1667,
        "cityid": 101070302,
        "simcode": "lntaian",
        "area_1": "辽宁",
        "area_2": "鞍山",
        "area_3": "台安"
      },
      {
        "country": 1,
        "weaid": 1668,
        "cityid": 101230202,
        "simcode": "tongan",
        "area_1": "福建",
        "area_2": "厦门",
        "area_3": "同安"
      },
      {
        "country": 1,
        "weaid": 1669,
        "cityid": 101180712,
        "simcode": "tongbai",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "桐柏"
      },
      {
        "country": 1,
        "weaid": 1670,
        "cityid": 101110909,
        "simcode": "taibai",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "太白"
      },
      {
        "country": 1,
        "weaid": 1671,
        "cityid": 101190408,
        "simcode": "taicang",
        "area_1": "江苏",
        "area_2": "苏州",
        "area_3": "太仓"
      },
      {
        "country": 1,
        "weaid": 1672,
        "cityid": 101120906,
        "simcode": "tancheng",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "郯城"
      },
      {
        "country": 1,
        "weaid": 1673,
        "cityid": 101220609,
        "simcode": "ahtongcheng",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "桐城"
      },
      {
        "country": 1,
        "weaid": 1674,
        "cityid": 101221107,
        "simcode": "tianchang",
        "area_1": "安徽",
        "area_2": "滁州",
        "area_3": "天长"
      },
      {
        "country": 1,
        "weaid": 1675,
        "cityid": 101181006,
        "simcode": "zhecheng",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "柘城"
      },
      {
        "country": 1,
        "weaid": 1676,
        "cityid": 101200705,
        "simcode": "tongcheng",
        "area_1": "湖北",
        "area_2": "咸宁",
        "area_3": "通城"
      },
      {
        "country": 1,
        "weaid": 1677,
        "cityid": 101290506,
        "simcode": "tengchong",
        "area_1": "云南",
        "area_2": "保山",
        "area_3": "腾冲"
      },
      {
        "country": 1,
        "weaid": 1678,
        "cityid": 101251207,
        "simcode": "tongdao",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "通道"
      },
      {
        "country": 1,
        "weaid": 1679,
        "cityid": 101300202,
        "simcode": "tiandeng",
        "area_1": "广西",
        "area_2": "崇左",
        "area_3": "天等"
      },
      {
        "country": 1,
        "weaid": 1680,
        "cityid": 101150408,
        "simcode": "tongde",
        "area_1": "青海",
        "area_2": "海南",
        "area_3": "同德"
      },
      {
        "country": 1,
        "weaid": 1681,
        "cityid": 101301006,
        "simcode": "tiandong",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "田东"
      },
      {
        "country": 1,
        "weaid": 1682,
        "cityid": 101301202,
        "simcode": "tiane",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "天峨"
      },
      {
        "country": 1,
        "weaid": 1683,
        "cityid": 101100408,
        "simcode": "taigu",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "太谷"
      },
      {
        "country": 1,
        "weaid": 1684,
        "cityid": 101240502,
        "simcode": "tonggu",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "铜鼓"
      },
      {
        "country": 1,
        "weaid": 1685,
        "cityid": 101110503,
        "simcode": "tongguan",
        "area_1": "陕西",
        "area_2": "渭南",
        "area_3": "潼关"
      },
      {
        "country": 1,
        "weaid": 1686,
        "cityid": 101290704,
        "simcode": "tonghai",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "通海"
      },
      {
        "country": 1,
        "weaid": 1687,
        "cityid": 101090509,
        "simcode": "tanghai",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "曹妃甸"
      },
      {
        "country": 1,
        "weaid": 1688,
        "cityid": 101050702,
        "simcode": "tahe",
        "area_1": "黑龙江",
        "area_2": "大兴安岭",
        "area_3": "塔河"
      },
      {
        "country": 1,
        "weaid": 1689,
        "cityid": 101050108,
        "simcode": "tonghe",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "通河"
      },
      {
        "country": 1,
        "weaid": 1690,
        "cityid": 101220806,
        "simcode": "ahtaihe",
        "area_1": "安徽",
        "area_2": "阜阳",
        "area_3": "太和"
      },
      {
        "country": 1,
        "weaid": 1691,
        "cityid": 101240611,
        "simcode": "jxtaihe",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "泰和"
      },
      {
        "country": 1,
        "weaid": 1692,
        "cityid": 101180710,
        "simcode": "tanghe",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "唐河"
      },
      {
        "country": 1,
        "weaid": 1693,
        "cityid": 101220603,
        "simcode": "taihu",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "太湖"
      },
      {
        "country": 1,
        "weaid": 1694,
        "cityid": 101060506,
        "simcode": "tonghuaxian",
        "area_1": "吉林",
        "area_2": "通化",
        "area_3": "通化县"
      },
      {
        "country": 1,
        "weaid": 1695,
        "cityid": 101050406,
        "simcode": "hljtongjiang",
        "area_1": "黑龙江",
        "area_2": "佳木斯",
        "area_3": "同江"
      },
      {
        "country": 1,
        "weaid": 1696,
        "cityid": 101250703,
        "simcode": "taojiang",
        "area_1": "湖南",
        "area_2": "益阳",
        "area_3": "桃江"
      },
      {
        "country": 1,
        "weaid": 1697,
        "cityid": 101270902,
        "simcode": "tongjiang",
        "area_1": "四川",
        "area_2": "巴中",
        "area_3": "通江"
      },
      {
        "country": 1,
        "weaid": 1698,
        "cityid": 101260510,
        "simcode": "taijiang",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "台江"
      },
      {
        "country": 1,
        "weaid": 1699,
        "cityid": 101150708,
        "simcode": "tianjun",
        "area_1": "青海",
        "area_2": "海西",
        "area_3": "天峻"
      },
      {
        "country": 1,
        "weaid": 1700,
        "cityid": 101181403,
        "simcode": "taikang",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "太康"
      },
      {
        "country": 1,
        "weaid": 1701,
        "cityid": 101131008,
        "simcode": "tekesi",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "特克斯"
      },
      {
        "country": 1,
        "weaid": 1702,
        "cityid": 101080103,
        "simcode": "tuoketuo",
        "area_1": "内蒙古",
        "area_2": "呼和浩特",
        "area_3": "托县"
      },
      {
        "country": 1,
        "weaid": 1703,
        "cityid": 101130502,
        "simcode": "tuokexun",
        "area_1": "新疆",
        "area_2": "吐鲁番",
        "area_3": "托克逊"
      },
      {
        "country": 1,
        "weaid": 1704,
        "cityid": 101050210,
        "simcode": "tailai",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "泰来"
      },
      {
        "country": 1,
        "weaid": 1707,
        "cityid": 101050804,
        "simcode": "tieli",
        "area_1": "黑龙江",
        "area_2": "伊春",
        "area_3": "铁力"
      },
      {
        "country": 1,
        "weaid": 1708,
        "cityid": 101100503,
        "simcode": "tunliu",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "屯留"
      },
      {
        "country": 1,
        "weaid": 1709,
        "cityid": 101301012,
        "simcode": "tianlin",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "田林"
      },
      {
        "country": 1,
        "weaid": 1710,
        "cityid": 101131105,
        "simcode": "tuoli",
        "area_1": "新疆",
        "area_2": "塔城",
        "area_3": "托里"
      },
      {
        "country": 1,
        "weaid": 1711,
        "cityid": 101210103,
        "simcode": "tonglu",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "桐庐"
      },
      {
        "country": 1,
        "weaid": 1712,
        "cityid": 101060309,
        "simcode": "tumen",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "图们"
      },
      {
        "country": 1,
        "weaid": 1713,
        "cityid": 101080102,
        "simcode": "tumotezuoqi",
        "area_1": "内蒙古",
        "area_2": "呼和浩特",
        "area_3": "土左旗"
      },
      {
        "country": 1,
        "weaid": 1714,
        "cityid": 101080204,
        "simcode": "tumoteyouqi",
        "area_1": "内蒙古",
        "area_2": "包头",
        "area_3": "土右旗"
      },
      {
        "country": 1,
        "weaid": 1715,
        "cityid": 101060602,
        "simcode": "daonan",
        "area_1": "吉林",
        "area_2": "白城",
        "area_3": "洮南"
      },
      {
        "country": 1,
        "weaid": 1716,
        "cityid": 101230804,
        "simcode": "taining",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "泰宁"
      },
      {
        "country": 1,
        "weaid": 1717,
        "cityid": 101080911,
        "simcode": "taipusiqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "太仆寺"
      },
      {
        "country": 1,
        "weaid": 1718,
        "cityid": 101181302,
        "simcode": "taiqian",
        "area_1": "河南",
        "area_2": "濮阳",
        "area_3": "台前"
      },
      {
        "country": 1,
        "weaid": 1719,
        "cityid": 101081107,
        "simcode": "tuquan",
        "area_1": "内蒙古",
        "area_2": "兴安盟",
        "area_3": "突泉"
      },
      {
        "country": 1,
        "weaid": 1720,
        "cityid": 101271706,
        "simcode": "tianquan",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "天全"
      },
      {
        "country": 1,
        "weaid": 1721,
        "cityid": 101230307,
        "simcode": "zherong",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "柘荣"
      },
      {
        "country": 1,
        "weaid": 1722,
        "cityid": 101130903,
        "simcode": "tashikuergan",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "塔什库尔干"
      },
      {
        "country": 1,
        "weaid": 1723,
        "cityid": 101210702,
        "simcode": "taishun",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "泰顺"
      },
      {
        "country": 1,
        "weaid": 1724,
        "cityid": 101200706,
        "simcode": "tongshan",
        "area_1": "湖北",
        "area_2": "咸宁",
        "area_3": "通山"
      },
      {
        "country": 1,
        "weaid": 1725,
        "cityid": 101281106,
        "simcode": "taishan",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "台山"
      },
      {
        "country": 1,
        "weaid": 1727,
        "cityid": 101210605,
        "simcode": "tiantai",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "天台"
      },
      {
        "country": 1,
        "weaid": 1728,
        "cityid": 101160202,
        "simcode": "tongwei",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "通渭"
      },
      {
        "country": 1,
        "weaid": 1729,
        "cityid": 101090205,
        "simcode": "tangxian",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "唐县"
      },
      {
        "country": 1,
        "weaid": 1730,
        "cityid": 101191203,
        "simcode": "taixing",
        "area_1": "江苏",
        "area_2": "泰州",
        "area_3": "泰兴"
      },
      {
        "country": 1,
        "weaid": 1731,
        "cityid": 101210304,
        "simcode": "tongxiang",
        "area_1": "浙江",
        "area_2": "嘉兴",
        "area_3": "桐乡"
      },
      {
        "country": 1,
        "weaid": 1732,
        "cityid": 101300602,
        "simcode": "tengxian",
        "area_1": "广西",
        "area_2": "梧州",
        "area_3": "藤县"
      },
      {
        "country": 1,
        "weaid": 1733,
        "cityid": 101170302,
        "simcode": "tongxin",
        "area_1": "宁夏",
        "area_2": "吴忠",
        "area_3": "同心"
      },
      {
        "country": 1,
        "weaid": 1734,
        "cityid": 101180804,
        "simcode": "tongxu",
        "area_1": "河南",
        "area_2": "开封",
        "area_3": "通许"
      },
      {
        "country": 1,
        "weaid": 1735,
        "cityid": 101301003,
        "simcode": "tianyang",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "田阳"
      },
      {
        "country": 1,
        "weaid": 1736,
        "cityid": 101180202,
        "simcode": "tangyin",
        "area_1": "河南",
        "area_2": "安阳",
        "area_3": "汤阴"
      },
      {
        "country": 1,
        "weaid": 1737,
        "cityid": 101050402,
        "simcode": "tangyuan",
        "area_1": "黑龙江",
        "area_2": "佳木斯",
        "area_3": "汤原"
      },
      {
        "country": 1,
        "weaid": 1738,
        "cityid": 101060605,
        "simcode": "tongyu",
        "area_1": "吉林",
        "area_2": "白城",
        "area_3": "通榆"
      },
      {
        "country": 1,
        "weaid": 1739,
        "cityid": 101250603,
        "simcode": "taoyuan",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "桃源"
      },
      {
        "country": 1,
        "weaid": 1740,
        "cityid": 101100204,
        "simcode": "tianzhen",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "天镇"
      },
      {
        "country": 1,
        "weaid": 1741,
        "cityid": 101121405,
        "simcode": "tengzhou",
        "area_1": "山东",
        "area_2": "枣庄",
        "area_3": "滕州"
      },
      {
        "country": 1,
        "weaid": 1742,
        "cityid": 101260514,
        "simcode": "gztianzhu",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "天柱"
      },
      {
        "country": 1,
        "weaid": 1743,
        "cityid": 101160505,
        "simcode": "gstianzhu",
        "area_1": "甘肃",
        "area_2": "武威",
        "area_3": "天祝"
      },
      {
        "country": 1,
        "weaid": 1744,
        "cityid": 101260207,
        "simcode": "tongzi",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "桐梓"
      },
      {
        "country": 1,
        "weaid": 1745,
        "cityid": 101091016,
        "simcode": "wuan",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "武安"
      },
      {
        "country": 1,
        "weaid": 1746,
        "cityid": 101240609,
        "simcode": "wanan",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "万安"
      },
      {
        "country": 1,
        "weaid": 1747,
        "cityid": 101090606,
        "simcode": "wenan",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "文安"
      },
      {
        "country": 1,
        "weaid": 1748,
        "cityid": 101181503,
        "simcode": "wuyang",
        "area_1": "河南",
        "area_2": "漯河",
        "area_3": "舞阳"
      },
      {
        "country": 1,
        "weaid": 1749,
        "cityid": 101110411,
        "simcode": "wubao",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "吴堡"
      },
      {
        "country": 1,
        "weaid": 1750,
        "cityid": 101272102,
        "simcode": "wangcang",
        "area_1": "四川",
        "area_2": "广元",
        "area_3": "旺苍"
      },
      {
        "country": 1,
        "weaid": 1751,
        "cityid": 101050112,
        "simcode": "wuchang",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "五常"
      },
      {
        "country": 1,
        "weaid": 1752,
        "cityid": 101090410,
        "simcode": "weichang",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "围场"
      },
      {
        "country": 1,
        "weaid": 1753,
        "cityid": 101080107,
        "simcode": "nmgwuchuan",
        "area_1": "内蒙古",
        "area_2": "呼和浩特",
        "area_3": "武川"
      },
      {
        "country": 1,
        "weaid": 1754,
        "cityid": 101120402,
        "simcode": "wucheng",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "武城"
      },
      {
        "country": 1,
        "weaid": 1755,
        "cityid": 101210703,
        "simcode": "wencheng",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "文成"
      },
      {
        "country": 1,
        "weaid": 1756,
        "cityid": 101281002,
        "simcode": "gdwuchuan",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "吴川"
      },
      {
        "country": 1,
        "weaid": 1757,
        "cityid": 101260212,
        "simcode": "gzwuchuan",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "务川"
      },
      {
        "country": 1,
        "weaid": 1758,
        "cityid": 101271902,
        "simcode": "wenchuan",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "汶川"
      },
      {
        "country": 1,
        "weaid": 1759,
        "cityid": 101050605,
        "simcode": "wudalianchi",
        "area_1": "黑龙江",
        "area_2": "黑河",
        "area_3": "五大连池"
      },
      {
        "country": 1,
        "weaid": 1760,
        "cityid": 101121103,
        "simcode": "wudi",
        "area_1": "山东",
        "area_2": "滨州",
        "area_3": "无棣"
      },
      {
        "country": 1,
        "weaid": 1761,
        "cityid": 101290807,
        "simcode": "wuding",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "武定"
      },
      {
        "country": 1,
        "weaid": 1762,
        "cityid": 101090210,
        "simcode": "wangdu",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "望都"
      },
      {
        "country": 1,
        "weaid": 1763,
        "cityid": 101070202,
        "simcode": "wafangdian",
        "area_1": "辽宁",
        "area_2": "大连",
        "area_3": "瓦房店"
      },
      {
        "country": 1,
        "weaid": 1764,
        "cityid": 101200906,
        "simcode": "wufeng",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "五峰"
      },
      {
        "country": 1,
        "weaid": 1765,
        "cityid": 101180506,
        "simcode": "hnwugang",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "舞钢"
      },
      {
        "country": 1,
        "weaid": 1766,
        "cityid": 101250908,
        "simcode": "hnsywugang",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "武冈"
      },
      {
        "country": 1,
        "weaid": 1767,
        "cityid": 101110206,
        "simcode": "wugong",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "武功"
      },
      {
        "country": 1,
        "weaid": 1768,
        "cityid": 101220204,
        "simcode": "wuhe",
        "area_1": "安徽",
        "area_2": "蚌埠",
        "area_3": "五河"
      },
      {
        "country": 1,
        "weaid": 1769,
        "cityid": 101180305,
        "simcode": "weihui",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "卫辉"
      },
      {
        "country": 1,
        "weaid": 1770,
        "cityid": 101280408,
        "simcode": "wuhua",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "五华"
      },
      {
        "country": 1,
        "weaid": 1771,
        "cityid": 101090110,
        "simcode": "wuji",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "无极"
      },
      {
        "country": 1,
        "weaid": 1772,
        "cityid": 101190407,
        "simcode": "wujiang",
        "area_1": "江苏",
        "area_2": "苏州",
        "area_3": "吴江"
      },
      {
        "country": 1,
        "weaid": 1773,
        "cityid": 101220607,
        "simcode": "wangjiang",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "望江"
      },
      {
        "country": 1,
        "weaid": 1774,
        "cityid": 101180903,
        "simcode": "mengjin",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "孟津"
      },
      {
        "country": 1,
        "weaid": 1775,
        "cityid": 101270104,
        "simcode": "wenjiang",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "温江"
      },
      {
        "country": 1,
        "weaid": 1776,
        "cityid": 101050506,
        "simcode": "wangkui",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "望奎"
      },
      {
        "country": 1,
        "weaid": 1777,
        "cityid": 101150709,
        "simcode": "wulan",
        "area_1": "青海",
        "area_2": "海西",
        "area_3": "乌兰"
      },
      {
        "country": 1,
        "weaid": 1778,
        "cityid": 101210607,
        "simcode": "wenling",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "温岭"
      },
      {
        "country": 1,
        "weaid": 1779,
        "cityid": 101130603,
        "simcode": "weili",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "尉犁"
      },
      {
        "country": 1,
        "weaid": 1780,
        "cityid": 101080804,
        "simcode": "wulateqianqi",
        "area_1": "内蒙古",
        "area_2": "巴彦淖尔",
        "area_3": "乌前旗"
      },
      {
        "country": 1,
        "weaid": 1781,
        "cityid": 101080806,
        "simcode": "wulatezhongqi",
        "area_1": "内蒙古",
        "area_2": "巴彦淖尔",
        "area_3": "乌中旗"
      },
      {
        "country": 1,
        "weaid": 1782,
        "cityid": 101080807,
        "simcode": "wulatehouqi",
        "area_1": "内蒙古",
        "area_2": "巴彦淖尔",
        "area_3": "乌后旗"
      },
      {
        "country": 1,
        "weaid": 1783,
        "cityid": 101121105,
        "simcode": "huimin",
        "area_1": "山东",
        "area_2": "滨州",
        "area_3": "惠民"
      },
      {
        "country": 1,
        "weaid": 1784,
        "cityid": 101300108,
        "simcode": "wuming",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "武鸣"
      },
      {
        "country": 1,
        "weaid": 1785,
        "cityid": 101260905,
        "simcode": "wangmo",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "望谟"
      },
      {
        "country": 1,
        "weaid": 1786,
        "cityid": 101240204,
        "simcode": "wuning",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "武宁"
      },
      {
        "country": 1,
        "weaid": 1787,
        "cityid": 101240306,
        "simcode": "wannian",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "万年"
      },
      {
        "country": 1,
        "weaid": 1788,
        "cityid": 101260704,
        "simcode": "weining",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "威宁"
      },
      {
        "country": 1,
        "weaid": 1789,
        "cityid": 101080609,
        "simcode": "wengniuteqi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "翁牛特"
      },
      {
        "country": 1,
        "weaid": 1790,
        "cityid": 101230704,
        "simcode": "wuping",
        "area_1": "福建",
        "area_2": "龙岩",
        "area_3": "武平"
      },
      {
        "country": 1,
        "weaid": 1791,
        "cityid": 101060304,
        "simcode": "wangqing",
        "area_1": "吉林",
        "area_2": "延边",
        "area_3": "汪清"
      },
      {
        "country": 1,
        "weaid": 1792,
        "cityid": 101090708,
        "simcode": "wuqiao",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "吴桥"
      },
      {
        "country": 1,
        "weaid": 1793,
        "cityid": 101131502,
        "simcode": "wuqia",
        "area_1": "新疆",
        "area_2": "克州",
        "area_3": "乌恰"
      },
      {
        "country": 1,
        "weaid": 1794,
        "cityid": 101090310,
        "simcode": "wanquan",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "万全"
      },
      {
        "country": 1,
        "weaid": 1795,
        "cityid": 101131602,
        "simcode": "wenquan",
        "area_1": "新疆",
        "area_2": "博尔塔拉",
        "area_3": "温泉"
      },
      {
        "country": 1,
        "weaid": 1796,
        "cityid": 101100804,
        "simcode": "wanrong",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "万荣"
      },
      {
        "country": 1,
        "weaid": 1797,
        "cityid": 101101112,
        "simcode": "wenshui",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "文水"
      },
      {
        "country": 1,
        "weaid": 1798,
        "cityid": 101120703,
        "simcode": "sdweishan",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "微山"
      },
      {
        "country": 1,
        "weaid": 1799,
        "cityid": 101120707,
        "simcode": "wenshang",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "汶上"
      },
      {
        "country": 1,
        "weaid": 1800,
        "cityid": 101180803,
        "simcode": "weishi",
        "area_1": "河南",
        "area_2": "开封",
        "area_3": "尉氏"
      },
      {
        "country": 1,
        "weaid": 1801,
        "cityid": 101270803,
        "simcode": "wusheng",
        "area_1": "四川",
        "area_2": "广安",
        "area_3": "武胜"
      },
      {
        "country": 1,
        "weaid": 1802,
        "cityid": 101260604,
        "simcode": "wanshan",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "万山"
      },
      {
        "country": 1,
        "weaid": 1803,
        "cityid": 101290208,
        "simcode": "weishan",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "巍山"
      },
      {
        "country": 1,
        "weaid": 1804,
        "cityid": 101160906,
        "simcode": "gswushan",
        "area_1": "甘肃",
        "area_2": "天水",
        "area_3": "武山"
      },
      {
        "country": 1,
        "weaid": 1805,
        "cityid": 101130802,
        "simcode": "wushi",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "乌什"
      },
      {
        "country": 1,
        "weaid": 1806,
        "cityid": 101131106,
        "simcode": "wusu",
        "area_1": "新疆",
        "area_2": "塔城",
        "area_3": "乌苏"
      },
      {
        "country": 1,
        "weaid": 1807,
        "cityid": 101130803,
        "simcode": "wensu",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "温宿"
      },
      {
        "country": 1,
        "weaid": 1809,
        "cityid": 101090307,
        "simcode": "weixian",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "蔚县"
      },
      {
        "country": 1,
        "weaid": 1810,
        "cityid": 101100507,
        "simcode": "wuxiang",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "武乡"
      },
      {
        "country": 1,
        "weaid": 1811,
        "cityid": 101181107,
        "simcode": "hnwenxian",
        "area_1": "河南",
        "area_2": "焦作",
        "area_3": "温县"
      },
      {
        "country": 1,
        "weaid": 1812,
        "cityid": 101291005,
        "simcode": "weixin",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "威信"
      },
      {
        "country": 1,
        "weaid": 1813,
        "cityid": 101161003,
        "simcode": "wenxian",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "文县"
      },
      {
        "country": 1,
        "weaid": 1814,
        "cityid": 101291303,
        "simcode": "weixi",
        "area_1": "云南",
        "area_2": "迪庆",
        "area_3": "维西"
      },
      {
        "country": 1,
        "weaid": 1815,
        "cityid": 101200509,
        "simcode": "wuxue",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "武穴"
      },
      {
        "country": 1,
        "weaid": 1816,
        "cityid": 101300405,
        "simcode": "wuxuan",
        "area_1": "广西",
        "area_2": "来宾",
        "area_3": "武宣"
      },
      {
        "country": 1,
        "weaid": 1817,
        "cityid": 101210906,
        "simcode": "wuyi",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "武义"
      },
      {
        "country": 1,
        "weaid": 1818,
        "cityid": 101050803,
        "simcode": "wuying",
        "area_1": "黑龙江",
        "area_2": "伊春",
        "area_3": "五营"
      },
      {
        "country": 1,
        "weaid": 1819,
        "cityid": 101050802,
        "simcode": "wuyiling",
        "area_1": "黑龙江",
        "area_2": "伊春",
        "area_3": "乌伊岭"
      },
      {
        "country": 1,
        "weaid": 1820,
        "cityid": 101230905,
        "simcode": "wuyishan",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "武夷山"
      },
      {
        "country": 1,
        "weaid": 1821,
        "cityid": 101080802,
        "simcode": "wuyuan",
        "area_1": "内蒙古",
        "area_2": "巴彦淖尔",
        "area_3": "五原"
      },
      {
        "country": 1,
        "weaid": 1822,
        "cityid": 101240303,
        "simcode": "mouyuan",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "婺源"
      },
      {
        "country": 1,
        "weaid": 1823,
        "cityid": 101280204,
        "simcode": "wengyuan",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "翁源"
      },
      {
        "country": 1,
        "weaid": 1824,
        "cityid": 101270606,
        "simcode": "wanyuan",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "万源"
      },
      {
        "country": 1,
        "weaid": 1825,
        "cityid": 101160204,
        "simcode": "gsweiyuan",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "渭源"
      },
      {
        "country": 1,
        "weaid": 1826,
        "cityid": 101271203,
        "simcode": "weiyuan",
        "area_1": "四川",
        "area_2": "内江",
        "area_3": "威远"
      },
      {
        "country": 1,
        "weaid": 1827,
        "cityid": 101240504,
        "simcode": "wanzai",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "万载"
      },
      {
        "country": 1,
        "weaid": 1828,
        "cityid": 101101014,
        "simcode": "wuzhai",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "五寨"
      },
      {
        "country": 1,
        "weaid": 1829,
        "cityid": 101181103,
        "simcode": "wuzhi",
        "area_1": "河南",
        "area_2": "焦作",
        "area_3": "武陟"
      },
      {
        "country": 1,
        "weaid": 1830,
        "cityid": 101150204,
        "simcode": "huzhu",
        "area_1": "青海",
        "area_2": "海东",
        "area_3": "互助"
      },
      {
        "country": 1,
        "weaid": 1831,
        "cityid": 101180902,
        "simcode": "xinan",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "新安"
      },
      {
        "country": 1,
        "weaid": 1832,
        "cityid": 101081008,
        "simcode": "xinbaerhuzuoqi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "新左旗"
      },
      {
        "country": 1,
        "weaid": 1833,
        "cityid": 101081009,
        "simcode": "xinbaerhuyouqi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "新右旗"
      },
      {
        "country": 1,
        "weaid": 1834,
        "cityid": 101181608,
        "simcode": "xincai",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "新蔡"
      },
      {
        "country": 1,
        "weaid": 1835,
        "cityid": 101071404,
        "simcode": "xingcheng",
        "area_1": "辽宁",
        "area_2": "葫芦岛",
        "area_3": "兴城"
      },
      {
        "country": 1,
        "weaid": 1836,
        "cityid": 101210504,
        "simcode": "xinchang",
        "area_1": "浙江",
        "area_2": "绍兴",
        "area_3": "新昌"
      },
      {
        "country": 1,
        "weaid": 1837,
        "cityid": 101180403,
        "simcode": "hnxcxiangcheng",
        "area_1": "河南",
        "area_2": "许昌",
        "area_3": "襄城"
      },
      {
        "country": 1,
        "weaid": 1838,
        "cityid": 101180708,
        "simcode": "xichuan",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "淅川"
      },
      {
        "country": 1,
        "weaid": 1839,
        "cityid": 101300402,
        "simcode": "xincheng",
        "area_1": "广西",
        "area_2": "来宾",
        "area_3": "忻城"
      },
      {
        "country": 1,
        "weaid": 1840,
        "cityid": 101271610,
        "simcode": "xichang",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "西昌"
      },
      {
        "country": 1,
        "weaid": 1841,
        "cityid": 101270506,
        "simcode": "xichong",
        "area_1": "四川",
        "area_2": "南充",
        "area_3": "西充"
      },
      {
        "country": 1,
        "weaid": 1842,
        "cityid": 101290602,
        "simcode": "xichou",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "西畴"
      },
      {
        "country": 1,
        "weaid": 1843,
        "cityid": 101181407,
        "simcode": "hnxiangcheng",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "项城"
      },
      {
        "country": 1,
        "weaid": 1844,
        "cityid": 101271613,
        "simcode": "xide",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "喜德"
      },
      {
        "country": 1,
        "weaid": 1845,
        "cityid": 101290104,
        "simcode": "xundian",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "寻甸"
      },
      {
        "country": 1,
        "weaid": 1846,
        "cityid": 101270103,
        "simcode": "xindu",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "新都"
      },
      {
        "country": 1,
        "weaid": 1847,
        "cityid": 101201005,
        "simcode": "xuanen",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "宣恩"
      },
      {
        "country": 1,
        "weaid": 1848,
        "cityid": 101071104,
        "simcode": "xifeng",
        "area_1": "辽宁",
        "area_2": "铁岭",
        "area_3": "西丰"
      },
      {
        "country": 1,
        "weaid": 1849,
        "cityid": 101100707,
        "simcode": "xiangfen",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "襄汾"
      },
      {
        "country": 1,
        "weaid": 1850,
        "cityid": 101240706,
        "simcode": "jxxinfeng",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "信丰"
      },
      {
        "country": 1,
        "weaid": 1851,
        "cityid": 101201004,
        "simcode": "xianfeng",
        "area_1": "湖北",
        "area_2": "恩施",
        "area_3": "咸丰"
      },
      {
        "country": 1,
        "weaid": 1852,
        "cityid": 101280208,
        "simcode": "xinfeng",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "新丰"
      },
      {
        "country": 1,
        "weaid": 1853,
        "cityid": 101260105,
        "simcode": "gzxifeng",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "息烽"
      },
      {
        "country": 1,
        "weaid": 1855,
        "cityid": 101240604,
        "simcode": "xingan",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "新干"
      },
      {
        "country": 1,
        "weaid": 1856,
        "cityid": 101240717,
        "simcode": "xingguo",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "兴国"
      },
      {
        "country": 1,
        "weaid": 1857,
        "cityid": 101270602,
        "simcode": "xuanhan",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "宣汉"
      },
      {
        "country": 1,
        "weaid": 1858,
        "cityid": 101150406,
        "simcode": "xinghai",
        "area_1": "青海",
        "area_2": "海南",
        "area_3": "兴海"
      },
      {
        "country": 1,
        "weaid": 1859,
        "cityid": 101080406,
        "simcode": "xinghe",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "兴和"
      },
      {
        "country": 1,
        "weaid": 1860,
        "cityid": 101161006,
        "simcode": "xihe",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "西和"
      },
      {
        "country": 1,
        "weaid": 1861,
        "cityid": 101161208,
        "simcode": "xiahe",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "夏河"
      },
      {
        "country": 1,
        "weaid": 1862,
        "cityid": 101130805,
        "simcode": "xinhe",
        "area_1": "新疆",
        "area_2": "阿克苏",
        "area_3": "新和"
      },
      {
        "country": 1,
        "weaid": 1863,
        "cityid": 101090604,
        "simcode": "xianghe",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "香河"
      },
      {
        "country": 1,
        "weaid": 1864,
        "cityid": 101080912,
        "simcode": "xianghuangqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "镶黄旗"
      },
      {
        "country": 1,
        "weaid": 1865,
        "cityid": 101090302,
        "simcode": "xuanhua",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "宣化"
      },
      {
        "country": 1,
        "weaid": 1866,
        "cityid": 101191202,
        "simcode": "xinghua",
        "area_1": "江苏",
        "area_2": "泰州",
        "area_3": "兴化"
      },
      {
        "country": 1,
        "weaid": 1867,
        "cityid": 101250805,
        "simcode": "xinhua",
        "area_1": "湖南",
        "area_2": "娄底",
        "area_3": "新化"
      },
      {
        "country": 1,
        "weaid": 1868,
        "cityid": 101251209,
        "simcode": "xinhuang",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "新晃"
      },
      {
        "country": 1,
        "weaid": 1869,
        "cityid": 101281104,
        "simcode": "xinhui",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "新会"
      },
      {
        "country": 1,
        "weaid": 1870,
        "cityid": 101150206,
        "simcode": "xunhua",
        "area_1": "青海",
        "area_2": "海东",
        "area_3": "循化"
      },
      {
        "country": 1,
        "weaid": 1871,
        "cityid": 101181405,
        "simcode": "xihua",
        "area_1": "河南",
        "area_2": "周口",
        "area_3": "西华"
      },
      {
        "country": 1,
        "weaid": 1872,
        "cityid": 101090114,
        "simcode": "xinji",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "辛集"
      },
      {
        "country": 1,
        "weaid": 1873,
        "cityid": 101100806,
        "simcode": "xinjiang",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "新绛"
      },
      {
        "country": 1,
        "weaid": 1874,
        "cityid": 101120410,
        "simcode": "xiajin",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "夏津"
      },
      {
        "country": 1,
        "weaid": 1875,
        "cityid": 101240102,
        "simcode": "xinjian",
        "area_1": "江西",
        "area_2": "南昌",
        "area_3": "新建"
      },
      {
        "country": 1,
        "weaid": 1876,
        "cityid": 101240605,
        "simcode": "xiajiang",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "峡江"
      },
      {
        "country": 1,
        "weaid": 1877,
        "cityid": 101270110,
        "simcode": "xinjin",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "新津"
      },
      {
        "country": 1,
        "weaid": 1878,
        "cityid": 101170402,
        "simcode": "xiji",
        "area_1": "宁夏",
        "area_2": "固原",
        "area_3": "西吉"
      },
      {
        "country": 1,
        "weaid": 1879,
        "cityid": 101271908,
        "simcode": "xiaojin",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "小金"
      },
      {
        "country": 1,
        "weaid": 1880,
        "cityid": 101210606,
        "simcode": "xianji",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "仙居"
      },
      {
        "country": 1,
        "weaid": 1881,
        "cityid": 101050604,
        "simcode": "xunke",
        "area_1": "黑龙江",
        "area_2": "黑河",
        "area_3": "逊克"
      },
      {
        "country": 1,
        "weaid": 1882,
        "cityid": 101090117,
        "simcode": "xinle",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "新乐"
      },
      {
        "country": 1,
        "weaid": 1883,
        "cityid": 101301009,
        "simcode": "xilin",
        "area_1": "广西",
        "area_2": "百色",
        "area_3": "西林"
      },
      {
        "country": 1,
        "weaid": 1885,
        "cityid": 101090404,
        "simcode": "xinglong",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "兴隆"
      },
      {
        "country": 1,
        "weaid": 1886,
        "cityid": 101290909,
        "simcode": "ximeng",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "西盟"
      },
      {
        "country": 1,
        "weaid": 1887,
        "cityid": 101070106,
        "simcode": "xinmin",
        "area_1": "辽宁",
        "area_2": "沈阳",
        "area_3": "新民"
      },
      {
        "country": 1,
        "weaid": 1888,
        "cityid": 101180105,
        "simcode": "xinmi",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "新密"
      },
      {
        "country": 1,
        "weaid": 1889,
        "cityid": 101100712,
        "simcode": "xiangning",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "乡宁"
      },
      {
        "country": 1,
        "weaid": 1890,
        "cityid": 101221007,
        "simcode": "xiuning",
        "area_1": "安徽",
        "area_2": "黄山",
        "area_3": "休宁"
      },
      {
        "country": 1,
        "weaid": 1891,
        "cityid": 101250907,
        "simcode": "xinning",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "新宁"
      },
      {
        "country": 1,
        "weaid": 1892,
        "cityid": 101280402,
        "simcode": "xingning",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "兴宁"
      },
      {
        "country": 1,
        "weaid": 1893,
        "cityid": 101290706,
        "simcode": "xinping",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "新平"
      },
      {
        "country": 1,
        "weaid": 1894,
        "cityid": 101110211,
        "simcode": "xingping",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "兴平"
      },
      {
        "country": 1,
        "weaid": 1895,
        "cityid": 101181602,
        "simcode": "xiping",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "西平"
      },
      {
        "country": 1,
        "weaid": 1896,
        "cityid": 101230303,
        "simcode": "xiapu",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "霞浦"
      },
      {
        "country": 1,
        "weaid": 1897,
        "cityid": 101251211,
        "simcode": "xupu",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "溆浦"
      },
      {
        "country": 1,
        "weaid": 1898,
        "cityid": 101260903,
        "simcode": "xingren",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "兴仁"
      },
      {
        "country": 1,
        "weaid": 1899,
        "cityid": 101090204,
        "simcode": "xushui",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "徐水"
      },
      {
        "country": 1,
        "weaid": 1900,
        "cityid": 101190702,
        "simcode": "xiangshui",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "响水"
      },
      {
        "country": 1,
        "weaid": 1901,
        "cityid": 101210102,
        "simcode": "xiaoshan",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "萧山"
      },
      {
        "country": 1,
        "weaid": 1902,
        "cityid": 101240212,
        "simcode": "xiushui",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "修水"
      },
      {
        "country": 1,
        "weaid": 1903,
        "cityid": 101200506,
        "simcode": "hbxishui",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "浠水"
      },
      {
        "country": 1,
        "weaid": 1904,
        "cityid": 101200904,
        "simcode": "xingshan",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "兴山"
      },
      {
        "country": 1,
        "weaid": 1905,
        "cityid": 101250904,
        "simcode": "xinshao",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "新邵"
      },
      {
        "country": 1,
        "weaid": 1906,
        "cityid": 101260209,
        "simcode": "gzxishui",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "习水"
      },
      {
        "country": 1,
        "weaid": 1907,
        "cityid": 101090105,
        "simcode": "xingtang",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "行唐"
      },
      {
        "country": 1,
        "weaid": 1908,
        "cityid": 101120802,
        "simcode": "xintai",
        "area_1": "山东",
        "area_2": "泰安",
        "area_3": "新泰"
      },
      {
        "country": 1,
        "weaid": 1909,
        "cityid": 101251409,
        "simcode": "xintian",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "新田"
      },
      {
        "country": 1,
        "weaid": 1910,
        "cityid": 101281004,
        "simcode": "xuwen",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "徐闻"
      },
      {
        "country": 1,
        "weaid": 1911,
        "cityid": 101271110,
        "simcode": "xingwen",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "兴文"
      },
      {
        "country": 1,
        "weaid": 1912,
        "cityid": 101260107,
        "simcode": "xiuwen",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "修文"
      },
      {
        "country": 1,
        "weaid": 1913,
        "cityid": 101290409,
        "simcode": "xuanwei",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "宣威"
      },
      {
        "country": 1,
        "weaid": 1914,
        "cityid": 101080910,
        "simcode": "xiwuzhumuqinqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "西乌旗"
      },
      {
        "country": 1,
        "weaid": 1915,
        "cityid": 101240716,
        "simcode": "xunwu",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "寻乌"
      },
      {
        "country": 1,
        "weaid": 1916,
        "cityid": 101181102,
        "simcode": "xiuwu",
        "area_1": "河南",
        "area_2": "焦作",
        "area_3": "修武"
      },
      {
        "country": 1,
        "weaid": 1917,
        "cityid": 101090217,
        "simcode": "xiongxian",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "雄县"
      },
      {
        "country": 1,
        "weaid": 1918,
        "cityid": 101100704,
        "simcode": "sxxixian",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "隰县"
      },
      {
        "country": 1,
        "weaid": 1919,
        "cityid": 101101103,
        "simcode": "xingxian",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "兴县"
      },
      {
        "country": 1,
        "weaid": 1920,
        "cityid": 101220705,
        "simcode": "xiaoxian",
        "area_1": "安徽",
        "area_2": "宿州",
        "area_3": "萧县"
      },
      {
        "country": 1,
        "weaid": 1921,
        "cityid": 101180705,
        "simcode": "xixia",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "西峡"
      },
      {
        "country": 1,
        "weaid": 1922,
        "cityid": 101250203,
        "simcode": "xiangxiang",
        "area_1": "湖南",
        "area_2": "湘潭",
        "area_3": "湘乡"
      },
      {
        "country": 1,
        "weaid": 1923,
        "cityid": 101281403,
        "simcode": "xinxing",
        "area_1": "广东",
        "area_2": "云浮",
        "area_3": "新兴"
      },
      {
        "country": 1,
        "weaid": 1924,
        "cityid": 101110807,
        "simcode": "xixiang",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "西乡"
      },
      {
        "country": 1,
        "weaid": 1925,
        "cityid": 101180602,
        "simcode": "hnxixian",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "息县"
      },
      {
        "country": 1,
        "weaid": 1926,
        "cityid": 101180605,
        "simcode": "xinxian",
        "area_1": "河南",
        "area_2": "信阳",
        "area_3": "新县"
      },
      {
        "country": 1,
        "weaid": 1927,
        "cityid": 101250302,
        "simcode": "youxian",
        "area_1": "湖南",
        "area_2": "株洲",
        "area_3": "攸县"
      },
      {
        "country": 1,
        "weaid": 1928,
        "cityid": 101100406,
        "simcode": "xiyang",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "昔阳"
      },
      {
        "country": 1,
        "weaid": 1929,
        "cityid": 101180103,
        "simcode": "xingyang",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "荥阳"
      },
      {
        "country": 1,
        "weaid": 1930,
        "cityid": 101110705,
        "simcode": "xunyang",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "旬阳"
      },
      {
        "country": 1,
        "weaid": 1931,
        "cityid": 101180709,
        "simcode": "xinye",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "新野"
      },
      {
        "country": 1,
        "weaid": 1932,
        "cityid": 101101110,
        "simcode": "xiaoyi",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "孝义"
      },
      {
        "country": 1,
        "weaid": 1933,
        "cityid": 101190807,
        "simcode": "jsxinyi",
        "area_1": "江苏",
        "area_2": "徐州",
        "area_3": "新沂"
      },
      {
        "country": 1,
        "weaid": 1934,
        "cityid": 101181008,
        "simcode": "xiayi",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "夏邑"
      },
      {
        "country": 1,
        "weaid": 1935,
        "cityid": 101251003,
        "simcode": "xiangyin",
        "area_1": "湖南",
        "area_2": "岳阳",
        "area_3": "湘阴"
      },
      {
        "country": 1,
        "weaid": 1936,
        "cityid": 101282005,
        "simcode": "gdxinyi",
        "area_1": "广东",
        "area_2": "茂名",
        "area_3": "信宜"
      },
      {
        "country": 1,
        "weaid": 1938,
        "cityid": 101110210,
        "simcode": "xunyi",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "旬邑"
      },
      {
        "country": 1,
        "weaid": 1939,
        "cityid": 101230402,
        "simcode": "xianyou",
        "area_1": "福建",
        "area_2": "莆田",
        "area_3": "仙游"
      },
      {
        "country": 1,
        "weaid": 1940,
        "cityid": 101271005,
        "simcode": "xuyong",
        "area_1": "四川",
        "area_2": "泸州",
        "area_3": "叙永"
      },
      {
        "country": 1,
        "weaid": 1941,
        "cityid": 101100505,
        "simcode": "xiangyuan",
        "area_1": "山西",
        "area_2": "长治",
        "area_3": "襄垣"
      },
      {
        "country": 1,
        "weaid": 1942,
        "cityid": 101290207,
        "simcode": "xiangyun",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "祥云"
      },
      {
        "country": 1,
        "weaid": 1943,
        "cityid": 101131006,
        "simcode": "xinyuan",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "新源"
      },
      {
        "country": 1,
        "weaid": 1945,
        "cityid": 101180106,
        "simcode": "xinzheng",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "新郑"
      },
      {
        "country": 1,
        "weaid": 1946,
        "cityid": 101200104,
        "simcode": "hbxinzhou",
        "area_1": "湖北",
        "area_2": "武汉",
        "area_3": "新洲"
      },
      {
        "country": 1,
        "weaid": 1947,
        "cityid": 101300404,
        "simcode": "xiangzhou",
        "area_1": "广西",
        "area_2": "来宾",
        "area_3": "象州"
      },
      {
        "country": 1,
        "weaid": 1948,
        "cityid": 101240209,
        "simcode": "xingzi",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "星子"
      },
      {
        "country": 1,
        "weaid": 1949,
        "cityid": 101050206,
        "simcode": "yian",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "依安"
      },
      {
        "country": 1,
        "weaid": 1950,
        "cityid": 101230810,
        "simcode": "yongan",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "永安"
      },
      {
        "country": 1,
        "weaid": 1951,
        "cityid": 101200902,
        "simcode": "yuanan",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "远安"
      },
      {
        "country": 1,
        "weaid": 1952,
        "cityid": 101290804,
        "simcode": "yaoan",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "姚安"
      },
      {
        "country": 1,
        "weaid": 1953,
        "cityid": 101270204,
        "simcode": "yanbian",
        "area_1": "四川",
        "area_2": "攀枝花",
        "area_3": "盐边"
      },
      {
        "country": 1,
        "weaid": 1954,
        "cityid": 101290203,
        "simcode": "yangbi",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "漾濞"
      },
      {
        "country": 1,
        "weaid": 1955,
        "cityid": 101100603,
        "simcode": "yangcheng",
        "area_1": "山西",
        "area_2": "晋城",
        "area_3": "阳城"
      },
      {
        "country": 1,
        "weaid": 1956,
        "cityid": 101100713,
        "simcode": "sxyicheng",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "翼城"
      },
      {
        "country": 1,
        "weaid": 1957,
        "cityid": 101121003,
        "simcode": "sdyuncheng",
        "area_1": "山东",
        "area_2": "菏泽",
        "area_3": "郓城"
      },
      {
        "country": 1,
        "weaid": 1958,
        "cityid": 101120411,
        "simcode": "sdyucheng",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "禹城"
      },
      {
        "country": 1,
        "weaid": 1959,
        "cityid": 101230504,
        "simcode": "yongchun",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "永春"
      },
      {
        "country": 1,
        "weaid": 1960,
        "cityid": 101181009,
        "simcode": "yongcheng",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "永城"
      },
      {
        "country": 1,
        "weaid": 1961,
        "cityid": 101181005,
        "simcode": "hnyucheng",
        "area_1": "河南",
        "area_2": "商丘",
        "area_3": "虞城"
      },
      {
        "country": 1,
        "weaid": 1962,
        "cityid": 101180906,
        "simcode": "hnyichuan",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "伊川"
      },
      {
        "country": 1,
        "weaid": 1963,
        "cityid": 101200405,
        "simcode": "yingcheng",
        "area_1": "湖北",
        "area_2": "孝感",
        "area_3": "应城"
      },
      {
        "country": 1,
        "weaid": 1964,
        "cityid": 101200205,
        "simcode": "hbyicheng",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "宜城"
      },
      {
        "country": 1,
        "weaid": 1965,
        "cityid": 101281802,
        "simcode": "yangchun",
        "area_1": "广东",
        "area_2": "阳江",
        "area_3": "阳春"
      },
      {
        "country": 1,
        "weaid": 1966,
        "cityid": 101270802,
        "simcode": "yuechi",
        "area_1": "四川",
        "area_2": "广安",
        "area_3": "岳池"
      },
      {
        "country": 1,
        "weaid": 1967,
        "cityid": 101110301,
        "simcode": "yanchang",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "延长"
      },
      {
        "country": 1,
        "weaid": 1968,
        "cityid": 101110302,
        "simcode": "yanchuan",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "延川"
      },
      {
        "country": 1,
        "weaid": 1969,
        "cityid": 101110304,
        "simcode": "sxyichuan",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "宜川"
      },
      {
        "country": 1,
        "weaid": 1970,
        "cityid": 101160602,
        "simcode": "yongchang",
        "area_1": "甘肃",
        "area_2": "金昌",
        "area_3": "永昌"
      },
      {
        "country": 1,
        "weaid": 1971,
        "cityid": 101170303,
        "simcode": "yanchi",
        "area_1": "宁夏",
        "area_2": "吴忠",
        "area_3": "盐池"
      },
      {
        "country": 1,
        "weaid": 1972,
        "cityid": 101130906,
        "simcode": "yecheng",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "叶城"
      },
      {
        "country": 1,
        "weaid": 1973,
        "cityid": 101100402,
        "simcode": "yuci",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "榆次"
      },
      {
        "country": 1,
        "weaid": 1974,
        "cityid": 101281307,
        "simcode": "yingde",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "英德"
      },
      {
        "country": 1,
        "weaid": 1975,
        "cityid": 101160103,
        "simcode": "yongdeng",
        "area_1": "甘肃",
        "area_2": "兰州",
        "area_3": "永登"
      },
      {
        "country": 1,
        "weaid": 1976,
        "cityid": 101291106,
        "simcode": "yongde",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "永德"
      },
      {
        "country": 1,
        "weaid": 1977,
        "cityid": 101230706,
        "simcode": "yongding",
        "area_1": "福建",
        "area_2": "龙岩",
        "area_3": "永定"
      },
      {
        "country": 1,
        "weaid": 1978,
        "cityid": 101240710,
        "simcode": "yudu",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "于都"
      },
      {
        "country": 1,
        "weaid": 1979,
        "cityid": 101240503,
        "simcode": "yifeng",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "宜丰"
      },
      {
        "country": 1,
        "weaid": 1980,
        "cityid": 101240606,
        "simcode": "yongfeng",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "永丰"
      },
      {
        "country": 1,
        "weaid": 1981,
        "cityid": 101300504,
        "simcode": "yongfu",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "永福"
      },
      {
        "country": 1,
        "weaid": 1982,
        "cityid": 101240305,
        "simcode": "yugan",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "余干"
      },
      {
        "country": 1,
        "weaid": 1983,
        "cityid": 101210106,
        "simcode": "yuhang",
        "area_1": "浙江",
        "area_2": "杭州",
        "area_3": "余杭"
      },
      {
        "country": 1,
        "weaid": 1984,
        "cityid": 101051304,
        "simcode": "raohe",
        "area_1": "黑龙江",
        "area_2": "双鸭山",
        "area_3": "饶河"
      },
      {
        "country": 1,
        "weaid": 1985,
        "cityid": 101100703,
        "simcode": "yonghe",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "永和"
      },
      {
        "country": 1,
        "weaid": 1986,
        "cityid": 101210806,
        "simcode": "yunhe",
        "area_1": "浙江",
        "area_2": "丽水",
        "area_3": "云和"
      },
      {
        "country": 1,
        "weaid": 1987,
        "cityid": 101260609,
        "simcode": "yanhe",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "沿河"
      },
      {
        "country": 1,
        "weaid": 1988,
        "cityid": 101210603,
        "simcode": "yuhuan",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "玉环"
      },
      {
        "country": 1,
        "weaid": 1989,
        "cityid": 101240407,
        "simcode": "yihuang",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "宜黄"
      },
      {
        "country": 1,
        "weaid": 1990,
        "cityid": 101060203,
        "simcode": "jlyongji",
        "area_1": "吉林",
        "area_2": "永吉",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 1991,
        "cityid": 101210708,
        "simcode": "yongjia",
        "area_1": "浙江",
        "area_2": "温州",
        "area_3": "永嘉"
      },
      {
        "country": 1,
        "weaid": 1992,
        "cityid": 101241102,
        "simcode": "yujiang",
        "area_1": "江西",
        "area_2": "鹰潭",
        "area_3": "余江"
      },
      {
        "country": 1,
        "weaid": 1993,
        "cityid": 101180306,
        "simcode": "hnyanjin",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "延津"
      },
      {
        "country": 1,
        "weaid": 1994,
        "cityid": 101250705,
        "simcode": "hnyuanjiang",
        "area_1": "湖南",
        "area_2": "益阳",
        "area_3": "沅江"
      },
      {
        "country": 1,
        "weaid": 1995,
        "cityid": 101260607,
        "simcode": "yinjiang",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "印江"
      },
      {
        "country": 1,
        "weaid": 1996,
        "cityid": 101291504,
        "simcode": "yingjiang",
        "area_1": "云南",
        "area_2": "德宏",
        "area_3": "盈江"
      },
      {
        "country": 1,
        "weaid": 1997,
        "cityid": 101291009,
        "simcode": "ynyanjin",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "盐津"
      },
      {
        "country": 1,
        "weaid": 1998,
        "cityid": 101290709,
        "simcode": "ynyuanjiang",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "元江"
      },
      {
        "country": 1,
        "weaid": 1999,
        "cityid": 101161103,
        "simcode": "yongjing",
        "area_1": "甘肃",
        "area_2": "临夏",
        "area_3": "永靖"
      },
      {
        "country": 1,
        "weaid": 2000,
        "cityid": 101100810,
        "simcode": "sxyongji",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "永济"
      },
      {
        "country": 1,
        "weaid": 2001,
        "cityid": 101080711,
        "simcode": "yijinhuoluoqi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "伊金霍洛"
      },
      {
        "country": 1,
        "weaid": 2002,
        "cityid": 101130902,
        "simcode": "yingjisha",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "英吉沙"
      },
      {
        "country": 1,
        "weaid": 2003,
        "cityid": 101111003,
        "simcode": "yijun",
        "area_1": "陕西",
        "area_2": "铜川",
        "area_3": "宜君"
      },
      {
        "country": 1,
        "weaid": 2004,
        "cityid": 101210907,
        "simcode": "yongkang",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "永康"
      },
      {
        "country": 1,
        "weaid": 2005,
        "cityid": 101081011,
        "simcode": "yakeshi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "牙克石"
      },
      {
        "country": 1,
        "weaid": 2006,
        "cityid": 101050106,
        "simcode": "yilan",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "依兰"
      },
      {
        "country": 1,
        "weaid": 2007,
        "cityid": 101180402,
        "simcode": "hnxcyanling",
        "area_1": "河南",
        "area_2": "许昌",
        "area_3": "鄢陵"
      },
      {
        "country": 1,
        "weaid": 2008,
        "cityid": 101250306,
        "simcode": "hnyanling",
        "area_1": "湖南",
        "area_2": "株洲",
        "area_3": "炎陵"
      },
      {
        "country": 1,
        "weaid": 2009,
        "cityid": 101251203,
        "simcode": "yuanling",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "沅陵"
      },
      {
        "country": 1,
        "weaid": 2010,
        "cityid": 101271109,
        "simcode": "junlian",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "筠连"
      },
      {
        "country": 1,
        "weaid": 2011,
        "cityid": 101291003,
        "simcode": "ynstyiliang",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "彝良"
      },
      {
        "country": 1,
        "weaid": 2012,
        "cityid": 101290106,
        "simcode": "ynyiliang",
        "area_1": "云南",
        "area_2": "昆明",
        "area_3": "宜良"
      },
      {
        "country": 1,
        "weaid": 2013,
        "cityid": 101270505,
        "simcode": "yilong",
        "area_1": "四川",
        "area_2": "南充",
        "area_3": "仪陇"
      },
      {
        "country": 1,
        "weaid": 2014,
        "cityid": 101200403,
        "simcode": "yunmeng",
        "area_1": "湖北",
        "area_2": "孝感",
        "area_3": "云梦"
      },
      {
        "country": 1,
        "weaid": 2015,
        "cityid": 101290707,
        "simcode": "yimen",
        "area_1": "云南",
        "area_2": "玉溪",
        "area_3": "易门"
      },
      {
        "country": 1,
        "weaid": 2016,
        "cityid": 101160807,
        "simcode": "yumen",
        "area_1": "甘肃",
        "area_2": "酒泉",
        "area_3": "玉门"
      },
      {
        "country": 1,
        "weaid": 2017,
        "cityid": 101131102,
        "simcode": "yumin",
        "area_1": "新疆",
        "area_2": "塔城",
        "area_3": "裕民"
      },
      {
        "country": 1,
        "weaid": 2018,
        "cityid": 101290803,
        "simcode": "yuanmou",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "元谋"
      },
      {
        "country": 1,
        "weaid": 2019,
        "cityid": 101120903,
        "simcode": "yinan",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "沂南"
      },
      {
        "country": 1,
        "weaid": 2020,
        "cityid": 101281404,
        "simcode": "yunan",
        "area_1": "广东",
        "area_2": "云浮",
        "area_3": "郁南"
      },
      {
        "country": 1,
        "weaid": 2021,
        "cityid": 101091009,
        "simcode": "yongnian",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "永年"
      },
      {
        "country": 1,
        "weaid": 2022,
        "cityid": 101300103,
        "simcode": "gxyongning",
        "area_1": "广西",
        "area_2": "南宁",
        "area_3": "邕宁"
      },
      {
        "country": 1,
        "weaid": 2023,
        "cityid": 101170102,
        "simcode": "nxyongning",
        "area_1": "宁夏",
        "area_2": "银川",
        "area_3": "永宁"
      },
      {
        "country": 1,
        "weaid": 2024,
        "cityid": 101130909,
        "simcode": "yuepuhu",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "岳普湖"
      },
      {
        "country": 1,
        "weaid": 2025,
        "cityid": 101101015,
        "simcode": "yuanping",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "原平"
      },
      {
        "country": 1,
        "weaid": 2026,
        "cityid": 101260603,
        "simcode": "yuping",
        "area_1": "贵州",
        "area_2": "铜仁",
        "area_3": "玉屏"
      },
      {
        "country": 1,
        "weaid": 2027,
        "cityid": 101290204,
        "simcode": "yongping",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "永平"
      },
      {
        "country": 1,
        "weaid": 2028,
        "cityid": 101260213,
        "simcode": "yuqing",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "余庆"
      },
      {
        "country": 1,
        "weaid": 2029,
        "cityid": 101130607,
        "simcode": "xjyanshi",
        "area_1": "新疆",
        "area_2": "巴音郭楞",
        "area_3": "焉耆"
      },
      {
        "country": 1,
        "weaid": 2030,
        "cityid": 101090603,
        "simcode": "yongqing",
        "area_1": "河北",
        "area_2": "廊坊",
        "area_3": "永清"
      },
      {
        "country": 1,
        "weaid": 2031,
        "cityid": 101100103,
        "simcode": "yangqu",
        "area_1": "山西",
        "area_2": "太原",
        "area_3": "阳曲"
      },
      {
        "country": 1,
        "weaid": 2032,
        "cityid": 101100809,
        "simcode": "yuanqu",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "垣曲"
      },
      {
        "country": 1,
        "weaid": 2033,
        "cityid": 101290810,
        "simcode": "yongren",
        "area_1": "云南",
        "area_2": "楚雄",
        "area_3": "永仁"
      },
      {
        "country": 1,
        "weaid": 2034,
        "cityid": 101050110,
        "simcode": "yanshou",
        "area_1": "黑龙江",
        "area_2": "哈尔滨",
        "area_3": "延寿"
      },
      {
        "country": 1,
        "weaid": 2035,
        "cityid": 101060105,
        "simcode": "jlyushu",
        "area_1": "吉林",
        "area_2": "长春",
        "area_3": "榆树"
      },
      {
        "country": 1,
        "weaid": 2036,
        "cityid": 101090112,
        "simcode": "yuanshi",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "元氏"
      },
      {
        "country": 1,
        "weaid": 2037,
        "cityid": 101100403,
        "simcode": "yushe",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "榆社"
      },
      {
        "country": 1,
        "weaid": 2038,
        "cityid": 101120910,
        "simcode": "yishui",
        "area_1": "山东",
        "area_2": "临沂",
        "area_3": "沂水"
      },
      {
        "country": 1,
        "weaid": 2039,
        "cityid": 101220803,
        "simcode": "yingshang",
        "area_1": "安徽",
        "area_2": "阜阳",
        "area_3": "颍上"
      },
      {
        "country": 1,
        "weaid": 2040,
        "cityid": 101240312,
        "simcode": "yushan",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "玉山"
      },
      {
        "country": 1,
        "weaid": 2041,
        "cityid": 101180908,
        "simcode": "hnyanshi",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "偃师"
      },
      {
        "country": 1,
        "weaid": 2042,
        "cityid": 101200505,
        "simcode": "hbyingshan",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "英山"
      },
      {
        "country": 1,
        "weaid": 2043,
        "cityid": 101251503,
        "simcode": "yongshun",
        "area_1": "湖南",
        "area_2": "湘西",
        "area_3": "永顺"
      },
      {
        "country": 1,
        "weaid": 2044,
        "cityid": 101281305,
        "simcode": "yangshan",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "阳山"
      },
      {
        "country": 1,
        "weaid": 2045,
        "cityid": 101300510,
        "simcode": "yangshuo",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "阳朔"
      },
      {
        "country": 1,
        "weaid": 2046,
        "cityid": 101270503,
        "simcode": "scyingshan",
        "area_1": "四川",
        "area_2": "南充",
        "area_3": "营山"
      },
      {
        "country": 1,
        "weaid": 2047,
        "cityid": 101291008,
        "simcode": "yongshan",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "永善"
      },
      {
        "country": 1,
        "weaid": 2048,
        "cityid": 101290605,
        "simcode": "yanshan",
        "area_1": "云南",
        "area_2": "文山",
        "area_3": "砚山"
      },
      {
        "country": 1,
        "weaid": 2049,
        "cityid": 101110203,
        "simcode": "yongshou",
        "area_1": "陕西",
        "area_2": "咸阳",
        "area_3": "永寿"
      },
      {
        "country": 1,
        "weaid": 2050,
        "cityid": 101291402,
        "simcode": "yongsheng",
        "area_1": "云南",
        "area_2": "丽江",
        "area_3": "永胜"
      },
      {
        "country": 1,
        "weaid": 2051,
        "cityid": 101120704,
        "simcode": "yutai",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "鱼台"
      },
      {
        "country": 1,
        "weaid": 2052,
        "cityid": 101190903,
        "simcode": "xuchi",
        "area_1": "江苏",
        "area_2": "淮安",
        "area_3": "盱眙"
      },
      {
        "country": 1,
        "weaid": 2053,
        "cityid": 101230107,
        "simcode": "yongtai",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "永泰"
      },
      {
        "country": 1,
        "weaid": 2054,
        "cityid": 101270403,
        "simcode": "yanting",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "盐亭"
      },
      {
        "country": 1,
        "weaid": 2055,
        "cityid": 101131307,
        "simcode": "xjyutian",
        "area_1": "新疆",
        "area_2": "和田",
        "area_3": "于田"
      },
      {
        "country": 1,
        "weaid": 2056,
        "cityid": 101090508,
        "simcode": "hbyutian",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "玉田"
      },
      {
        "country": 1,
        "weaid": 2057,
        "cityid": 101210904,
        "simcode": "zjyiwu",
        "area_1": "浙江",
        "area_2": "金华",
        "area_3": "义乌"
      },
      {
        "country": 1,
        "weaid": 2058,
        "cityid": 101131204,
        "simcode": "xjyiwu",
        "area_1": "新疆",
        "area_2": "哈密",
        "area_3": "伊吾"
      },
      {
        "country": 1,
        "weaid": 2059,
        "cityid": 101070704,
        "simcode": "lnyixian",
        "area_1": "辽宁",
        "area_2": "锦州",
        "area_3": "义县"
      },
      {
        "country": 1,
        "weaid": 2060,
        "cityid": 101090212,
        "simcode": "hbyixian",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "易县"
      },
      {
        "country": 1,
        "weaid": 2061,
        "cityid": 101100905,
        "simcode": "yingxian",
        "area_1": "山西",
        "area_2": "朔州",
        "area_3": "应县"
      },
      {
        "country": 1,
        "weaid": 2062,
        "cityid": 101121104,
        "simcode": "hnyangxin",
        "area_1": "山东",
        "area_2": "滨州",
        "area_3": "阳信"
      },
      {
        "country": 1,
        "weaid": 2063,
        "cityid": 101190203,
        "simcode": "yixing",
        "area_1": "江苏",
        "area_2": "无锡",
        "area_3": "宜兴"
      },
      {
        "country": 1,
        "weaid": 2064,
        "cityid": 101221005,
        "simcode": "ahyixian",
        "area_1": "安徽",
        "area_2": "黄山",
        "area_3": "黟县"
      },
      {
        "country": 1,
        "weaid": 2065,
        "cityid": 101220608,
        "simcode": "ahyuexi",
        "area_1": "安徽",
        "area_2": "安庆",
        "area_3": "岳西"
      },
      {
        "country": 1,
        "weaid": 2066,
        "cityid": 101230609,
        "simcode": "yunxiao",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "云霄"
      },
      {
        "country": 1,
        "weaid": 2067,
        "cityid": 101230809,
        "simcode": "youxi",
        "area_1": "福建",
        "area_2": "三明",
        "area_3": "尤溪"
      },
      {
        "country": 1,
        "weaid": 2068,
        "cityid": 101240607,
        "simcode": "yongxin",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "永新"
      },
      {
        "country": 1,
        "weaid": 2069,
        "cityid": 101240206,
        "simcode": "yongxiu",
        "area_1": "江西",
        "area_2": "九江",
        "area_3": "永修"
      },
      {
        "country": 1,
        "weaid": 2070,
        "cityid": 101180505,
        "simcode": "yexian",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "叶县"
      },
      {
        "country": 1,
        "weaid": 2071,
        "cityid": 101200603,
        "simcode": "hbyangxin",
        "area_1": "湖北",
        "area_2": "黄石",
        "area_3": "阳新"
      },
      {
        "country": 1,
        "weaid": 2072,
        "cityid": 101201103,
        "simcode": "yunxi",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "郧西"
      },
      {
        "country": 1,
        "weaid": 2073,
        "cityid": 101201104,
        "simcode": "yunxian",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "郧阳"
      },
      {
        "country": 1,
        "weaid": 2074,
        "cityid": 101250510,
        "simcode": "yongxing",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "永兴"
      },
      {
        "country": 1,
        "weaid": 2075,
        "cityid": 101271615,
        "simcode": "scyuexi",
        "area_1": "四川",
        "area_2": "凉山",
        "area_3": "越西"
      },
      {
        "country": 1,
        "weaid": 2076,
        "cityid": 101110805,
        "simcode": "yangxian",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "洋县"
      },
      {
        "country": 1,
        "weaid": 2079,
        "cityid": 101070303,
        "simcode": "xiuyan",
        "area_1": "辽宁",
        "area_2": "鞍山",
        "area_3": "岫岩"
      },
      {
        "country": 1,
        "weaid": 2080,
        "cityid": 101210404,
        "simcode": "yuyao",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "余姚"
      },
      {
        "country": 1,
        "weaid": 2081,
        "cityid": 101240309,
        "simcode": "jxyiyang",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "弋阳"
      },
      {
        "country": 1,
        "weaid": 2082,
        "cityid": 101180303,
        "simcode": "hnyuanyang",
        "area_1": "河南",
        "area_2": "新乡",
        "area_3": "原阳"
      },
      {
        "country": 1,
        "weaid": 2083,
        "cityid": 101180904,
        "simcode": "hnlyyiyang",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "宜阳"
      },
      {
        "country": 1,
        "weaid": 2084,
        "cityid": 101290305,
        "simcode": "ynyuanyang",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "元阳"
      },
      {
        "country": 1,
        "weaid": 2085,
        "cityid": 101090308,
        "simcode": "yangyuan",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "阳原"
      },
      {
        "country": 1,
        "weaid": 2086,
        "cityid": 101100904,
        "simcode": "youyu",
        "area_1": "山西",
        "area_2": "朔州",
        "area_3": "右玉"
      },
      {
        "country": 1,
        "weaid": 2087,
        "cityid": 101120306,
        "simcode": "yiyuan",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "沂源"
      },
      {
        "country": 1,
        "weaid": 2088,
        "cityid": 101120705,
        "simcode": "yanzhou",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "兖州"
      },
      {
        "country": 1,
        "weaid": 2089,
        "cityid": 101190303,
        "simcode": "yangzhong",
        "area_1": "江苏",
        "area_2": "镇江",
        "area_3": "扬中"
      },
      {
        "country": 1,
        "weaid": 2090,
        "cityid": 101190603,
        "simcode": "yizheng",
        "area_1": "江苏",
        "area_2": "扬州",
        "area_3": "仪征"
      },
      {
        "country": 1,
        "weaid": 2091,
        "cityid": 101180405,
        "simcode": "yuzhou",
        "area_1": "河南",
        "area_2": "许昌",
        "area_3": "禹州"
      },
      {
        "country": 1,
        "weaid": 2092,
        "cityid": 101250504,
        "simcode": "yizhang",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "宜章"
      },
      {
        "country": 1,
        "weaid": 2093,
        "cityid": 101301207,
        "simcode": "yizhou",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "宜州"
      },
      {
        "country": 1,
        "weaid": 2094,
        "cityid": 101160104,
        "simcode": "yuzhong",
        "area_1": "甘肃",
        "area_2": "兰州",
        "area_3": "榆中"
      },
      {
        "country": 1,
        "weaid": 2095,
        "cityid": 101230607,
        "simcode": "zhaoan",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "诏安"
      },
      {
        "country": 1,
        "weaid": 2096,
        "cityid": 101260211,
        "simcode": "zhengan",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "正安"
      },
      {
        "country": 1,
        "weaid": 2097,
        "cityid": 101110605,
        "simcode": "zhenan",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "镇安"
      },
      {
        "country": 1,
        "weaid": 2098,
        "cityid": 101110811,
        "simcode": "zhenba",
        "area_1": "陕西",
        "area_2": "汉中",
        "area_3": "镇巴"
      },
      {
        "country": 1,
        "weaid": 2099,
        "cityid": 101090303,
        "simcode": "zhangbei",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "张北"
      },
      {
        "country": 1,
        "weaid": 2100,
        "cityid": 101120711,
        "simcode": "zoucheng",
        "area_1": "山东",
        "area_2": "济宁",
        "area_3": "邹城"
      },
      {
        "country": 1,
        "weaid": 2101,
        "cityid": 101120609,
        "simcode": "zhucheng",
        "area_1": "山东",
        "area_2": "潍坊",
        "area_3": "诸城"
      },
      {
        "country": 1,
        "weaid": 2102,
        "cityid": 101280104,
        "simcode": "zengcheng",
        "area_1": "广东",
        "area_2": "广州",
        "area_3": "增城"
      },
      {
        "country": 1,
        "weaid": 2103,
        "cityid": 101110303,
        "simcode": "zichang",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "子长"
      },
      {
        "country": 1,
        "weaid": 2104,
        "cityid": 101090103,
        "simcode": "zhengding",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "正定"
      },
      {
        "country": 1,
        "weaid": 2106,
        "cityid": 101050502,
        "simcode": "zhaodong",
        "area_1": "黑龙江",
        "area_2": "绥化",
        "area_3": "肇东"
      },
      {
        "country": 1,
        "weaid": 2107,
        "cityid": 101150603,
        "simcode": "zhiduo",
        "area_1": "青海",
        "area_2": "玉树",
        "area_3": "治多"
      },
      {
        "country": 1,
        "weaid": 2108,
        "cityid": 101150604,
        "simcode": "zaduo",
        "area_1": "青海",
        "area_2": "玉树",
        "area_3": "杂多"
      },
      {
        "country": 1,
        "weaid": 2109,
        "cityid": 101260904,
        "simcode": "zhenfeng",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "贞丰"
      },
      {
        "country": 1,
        "weaid": 2110,
        "cityid": 101140505,
        "simcode": "zuogong",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "左贡"
      },
      {
        "country": 1,
        "weaid": 2111,
        "cityid": 101080704,
        "simcode": "zhungeerqi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "准格尔"
      },
      {
        "country": 1,
        "weaid": 2112,
        "cityid": 101200903,
        "simcode": "zigui",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "秭归"
      },
      {
        "country": 1,
        "weaid": 2113,
        "cityid": 101210412,
        "simcode": "zhenhai",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "镇海"
      },
      {
        "country": 1,
        "weaid": 2114,
        "cityid": 101070207,
        "simcode": "zhuanghe",
        "area_1": "辽宁",
        "area_2": "大连",
        "area_3": "庄河"
      },
      {
        "country": 1,
        "weaid": 2115,
        "cityid": 101230909,
        "simcode": "zhenghe",
        "area_1": "福建",
        "area_2": "南平",
        "area_3": "政和"
      },
      {
        "country": 1,
        "weaid": 2116,
        "cityid": 101090510,
        "simcode": "zunhua",
        "area_1": "河北",
        "area_2": "唐山",
        "area_3": "遵化"
      },
      {
        "country": 1,
        "weaid": 2117,
        "cityid": 101090109,
        "simcode": "zanhuang",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "赞皇"
      },
      {
        "country": 1,
        "weaid": 2118,
        "cityid": 101121106,
        "simcode": "zhanhua",
        "area_1": "山东",
        "area_2": "滨州",
        "area_3": "沾化"
      },
      {
        "country": 1,
        "weaid": 2119,
        "cityid": 101160907,
        "simcode": "zhangjiachuan",
        "area_1": "甘肃",
        "area_2": "天水",
        "area_3": "张家川"
      },
      {
        "country": 1,
        "weaid": 2120,
        "cityid": 101210502,
        "simcode": "zhuji",
        "area_1": "浙江",
        "area_2": "绍兴",
        "area_3": "诸暨"
      },
      {
        "country": 1,
        "weaid": 2121,
        "cityid": 101200910,
        "simcode": "hbzhijiang",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "枝江"
      },
      {
        "country": 1,
        "weaid": 2122,
        "cityid": 101251210,
        "simcode": "hnzhijiang",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "芷江"
      },
      {
        "country": 1,
        "weaid": 2123,
        "cityid": 101281202,
        "simcode": "zijin",
        "area_1": "广东",
        "area_2": "河源",
        "area_3": "紫金"
      },
      {
        "country": 1,
        "weaid": 2124,
        "cityid": 101260707,
        "simcode": "zhijin",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "织金"
      },
      {
        "country": 1,
        "weaid": 2125,
        "cityid": 101272002,
        "simcode": "zhongjiang",
        "area_1": "四川",
        "area_2": "德阳",
        "area_3": "中江"
      },
      {
        "country": 1,
        "weaid": 2126,
        "cityid": 101190403,
        "simcode": "zhangjiagang",
        "area_1": "江苏",
        "area_2": "苏州",
        "area_3": "张家港"
      },
      {
        "country": 1,
        "weaid": 2127,
        "cityid": 101291108,
        "simcode": "zhenkang",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "镇康"
      },
      {
        "country": 1,
        "weaid": 2128,
        "cityid": 101150303,
        "simcode": "zeku",
        "area_1": "青海",
        "area_2": "黄南",
        "area_3": "泽库"
      },
      {
        "country": 1,
        "weaid": 2129,
        "cityid": 101060604,
        "simcode": "zhenlai",
        "area_1": "吉林",
        "area_2": "白城",
        "area_3": "镇赉"
      },
      {
        "country": 1,
        "weaid": 2130,
        "cityid": 101080509,
        "simcode": "zhaluteqi",
        "area_1": "内蒙古",
        "area_2": "通辽",
        "area_3": "扎鲁特"
      },
      {
        "country": 1,
        "weaid": 2131,
        "cityid": 101081105,
        "simcode": "zhalaiteqi",
        "area_1": "内蒙古",
        "area_2": "兴安盟",
        "area_3": "扎赉特"
      },
      {
        "country": 1,
        "weaid": 2132,
        "cityid": 101081012,
        "simcode": "zhalantun",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "扎兰屯"
      },
      {
        "country": 1,
        "weaid": 2133,
        "cityid": 101090312,
        "simcode": "zhuolu",
        "area_1": "河北",
        "area_2": "张家口",
        "area_3": "涿鹿"
      },
      {
        "country": 1,
        "weaid": 2134,
        "cityid": 101180107,
        "simcode": "zhongmou",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "中牟"
      },
      {
        "country": 1,
        "weaid": 2135,
        "cityid": 101230305,
        "simcode": "zhouning",
        "area_1": "福建",
        "area_2": "宁德",
        "area_3": "周宁"
      },
      {
        "country": 1,
        "weaid": 2136,
        "cityid": 101260303,
        "simcode": "zhenning",
        "area_1": "贵州",
        "area_2": "安顺",
        "area_3": "镇宁"
      },
      {
        "country": 1,
        "weaid": 2137,
        "cityid": 101160406,
        "simcode": "zhengning",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "正宁"
      },
      {
        "country": 1,
        "weaid": 2138,
        "cityid": 101161203,
        "simcode": "zhuoni",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "卓尼"
      },
      {
        "country": 1,
        "weaid": 2139,
        "cityid": 101170502,
        "simcode": "zhongning",
        "area_1": "宁夏",
        "area_2": "中卫",
        "area_3": "中宁"
      },
      {
        "country": 1,
        "weaid": 2140,
        "cityid": 101121107,
        "simcode": "zouping",
        "area_1": "山东",
        "area_2": "滨州",
        "area_3": "邹平"
      },
      {
        "country": 1,
        "weaid": 2141,
        "cityid": 101230707,
        "simcode": "zhangping",
        "area_1": "福建",
        "area_2": "龙岩",
        "area_3": "漳平"
      },
      {
        "country": 1,
        "weaid": 2142,
        "cityid": 101180707,
        "simcode": "hnzhenping",
        "area_1": "河南",
        "area_2": "南阳",
        "area_3": "镇平"
      },
      {
        "country": 1,
        "weaid": 2143,
        "cityid": 101300702,
        "simcode": "zhaoping",
        "area_1": "广西",
        "area_2": "贺州",
        "area_3": "昭平"
      },
      {
        "country": 1,
        "weaid": 2144,
        "cityid": 101110709,
        "simcode": "sxzhenping",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "镇坪"
      },
      {
        "country": 1,
        "weaid": 2145,
        "cityid": 101230606,
        "simcode": "zhangpu",
        "area_1": "福建",
        "area_2": "漳州",
        "area_3": "漳浦"
      },
      {
        "country": 1,
        "weaid": 2146,
        "cityid": 101130907,
        "simcode": "zepu",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "泽普"
      },
      {
        "country": 1,
        "weaid": 2147,
        "cityid": 101120104,
        "simcode": "zhangqiu",
        "area_1": "山东",
        "area_2": "济南",
        "area_3": "章丘"
      },
      {
        "country": 1,
        "weaid": 2148,
        "cityid": 101100404,
        "simcode": "zuoquan",
        "area_1": "山西",
        "area_2": "晋中",
        "area_3": "左权"
      },
      {
        "country": 1,
        "weaid": 2149,
        "cityid": 101161204,
        "simcode": "zhouqu",
        "area_1": "甘肃",
        "area_2": "甘南",
        "area_3": "舟曲"
      },
      {
        "country": 1,
        "weaid": 2150,
        "cityid": 101240509,
        "simcode": "zhangshu",
        "area_1": "江西",
        "area_2": "宜春",
        "area_3": "樟树"
      },
      {
        "country": 1,
        "weaid": 2151,
        "cityid": 101201105,
        "simcode": "zhushan",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "竹山"
      },
      {
        "country": 1,
        "weaid": 2152,
        "cityid": 101300704,
        "simcode": "gxzhongshan",
        "area_1": "广西",
        "area_2": "贺州",
        "area_3": "钟山"
      },
      {
        "country": 1,
        "weaid": 2153,
        "cityid": 101110603,
        "simcode": "zuoshui",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "柞水"
      },
      {
        "country": 1,
        "weaid": 2154,
        "cityid": 101131007,
        "simcode": "zhaosu",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "昭苏"
      },
      {
        "country": 1,
        "weaid": 2155,
        "cityid": 101270405,
        "simcode": "zitong",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "梓潼"
      },
      {
        "country": 1,
        "weaid": 2156,
        "cityid": 101070902,
        "simcode": "zhangwu",
        "area_1": "辽宁",
        "area_2": "阜新",
        "area_3": "彰武"
      },
      {
        "country": 1,
        "weaid": 2157,
        "cityid": 101090113,
        "simcode": "zhaoxian",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "赵县"
      },
      {
        "country": 1,
        "weaid": 2158,
        "cityid": 101240406,
        "simcode": "zixi",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "资溪"
      },
      {
        "country": 1,
        "weaid": 2159,
        "cityid": 101201102,
        "simcode": "zhuxi",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "竹溪"
      },
      {
        "country": 1,
        "weaid": 2160,
        "cityid": 101201402,
        "simcode": "zhongxiang",
        "area_1": "湖北",
        "area_2": "荆门",
        "area_3": "钟祥"
      },
      {
        "country": 1,
        "weaid": 2161,
        "cityid": 101250507,
        "simcode": "zixing",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "资兴"
      },
      {
        "country": 1,
        "weaid": 2162,
        "cityid": 101291004,
        "simcode": "zhenxiong",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "镇雄"
      },
      {
        "country": 1,
        "weaid": 2163,
        "cityid": 101160206,
        "simcode": "zhangxian",
        "area_1": "甘肃",
        "area_2": "定西",
        "area_3": "漳县"
      },
      {
        "country": 1,
        "weaid": 2164,
        "cityid": 101080913,
        "simcode": "zhengxiangbaiqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "正镶白旗"
      },
      {
        "country": 1,
        "weaid": 2165,
        "cityid": 101101109,
        "simcode": "zhongyang",
        "area_1": "山西",
        "area_2": "吕梁",
        "area_3": "中阳"
      },
      {
        "country": 1,
        "weaid": 2166,
        "cityid": 101221305,
        "simcode": "congyang",
        "area_1": "安徽",
        "area_2": "铜陵",
        "area_3": "枞阳"
      },
      {
        "country": 1,
        "weaid": 2167,
        "cityid": 101200208,
        "simcode": "zaoyang",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "枣阳"
      },
      {
        "country": 1,
        "weaid": 2168,
        "cityid": 101110702,
        "simcode": "sxziyang",
        "area_1": "陕西",
        "area_2": "安康",
        "area_3": "紫阳"
      },
      {
        "country": 1,
        "weaid": 2169,
        "cityid": 101181610,
        "simcode": "zhengyang",
        "area_1": "河南",
        "area_2": "驻马店",
        "area_3": "正阳"
      },
      {
        "country": 1,
        "weaid": 2170,
        "cityid": 101290402,
        "simcode": "zhanyi",
        "area_1": "云南",
        "area_2": "曲靖",
        "area_3": "沾益"
      },
      {
        "country": 1,
        "weaid": 2171,
        "cityid": 101050904,
        "simcode": "hljzhaoyuan",
        "area_1": "黑龙江",
        "area_2": "大庆",
        "area_3": "肇源"
      },
      {
        "country": 1,
        "weaid": 2172,
        "cityid": 101100208,
        "simcode": "zuoyun",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "左云"
      },
      {
        "country": 1,
        "weaid": 2173,
        "cityid": 101120506,
        "simcode": "sdzhaoyuan",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "招远"
      },
      {
        "country": 1,
        "weaid": 2174,
        "cityid": 101300514,
        "simcode": "ziyuan",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "资源"
      },
      {
        "country": 1,
        "weaid": 2175,
        "cityid": 101260504,
        "simcode": "gzzhenyuan",
        "area_1": "贵州",
        "area_2": "黔东南",
        "area_3": "镇远"
      },
      {
        "country": 1,
        "weaid": 2176,
        "cityid": 101260305,
        "simcode": "ziyun",
        "area_1": "贵州",
        "area_2": "安顺",
        "area_3": "紫云"
      },
      {
        "country": 1,
        "weaid": 2177,
        "cityid": 101160408,
        "simcode": "gszhenyuan",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "镇原"
      },
      {
        "country": 1,
        "weaid": 2178,
        "cityid": 101290911,
        "simcode": "ynzhenyuan",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "镇沅"
      },
      {
        "country": 1,
        "weaid": 2179,
        "cityid": 101050903,
        "simcode": "zhaozhou",
        "area_1": "黑龙江",
        "area_2": "大庆",
        "area_3": "肇州"
      },
      {
        "country": 1,
        "weaid": 2180,
        "cityid": 101090218,
        "simcode": "zhuozhou",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "涿州"
      },
      {
        "country": 1,
        "weaid": 2181,
        "cityid": 101110409,
        "simcode": "zizhou",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "子洲"
      },
      {
        "country": 1,
        "weaid": 2182,
        "cityid": 101110105,
        "simcode": "zhouzhi",
        "area_1": "陕西",
        "area_2": "西安",
        "area_3": "周至"
      },
      {
        "country": 1,
        "weaid": 2183,
        "cityid": 101271204,
        "simcode": "zizhong",
        "area_1": "四川",
        "area_2": "内江",
        "area_3": "资中"
      },
      {
        "country": 1,
        "weaid": 2184,
        "cityid": 101080402,
        "simcode": "zhuozi",
        "area_1": "内蒙古",
        "area_2": "乌兰察布",
        "area_3": "卓资"
      },
      {
        "country": 1,
        "weaid": 2185,
        "cityid": 101220703,
        "simcode": "lingbi",
        "area_1": "安徽",
        "area_2": "宿州",
        "area_3": "灵璧"
      },
      {
        "country": 1,
        "weaid": 2212,
        "cityid": 101090811,
        "simcode": "shenzhou",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "深州"
      },
      {
        "country": 1,
        "weaid": 2213,
        "cityid": 101131011,
        "simcode": "kuizhun",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "奎屯"
      },
      {
        "country": 1,
        "weaid": 2214,
        "cityid": 101050204,
        "simcode": "gannan",
        "area_1": "黑龙江",
        "area_2": "齐齐哈尔",
        "area_3": "甘南"
      },
      {
        "country": 1,
        "weaid": 2215,
        "cityid": 101051305,
        "simcode": "youyi",
        "area_1": "黑龙江",
        "area_2": "双鸭山",
        "area_3": "友谊"
      },
      {
        "country": 1,
        "weaid": 2216,
        "cityid": 101060403,
        "simcode": "lishu",
        "area_1": "吉林",
        "area_2": "四平",
        "area_3": "梨树"
      },
      {
        "country": 1,
        "weaid": 2217,
        "cityid": 101060405,
        "simcode": "yitong",
        "area_1": "吉林",
        "area_2": "四平",
        "area_3": "伊通"
      },
      {
        "country": 1,
        "weaid": 2218,
        "cityid": 101060703,
        "simcode": "dongliao",
        "area_1": "吉林",
        "area_2": "辽源",
        "area_3": "东辽"
      },
      {
        "country": 1,
        "weaid": 2219,
        "cityid": 101060803,
        "simcode": "qianguo",
        "area_1": "吉林",
        "area_2": "松原",
        "area_3": "前郭"
      },
      {
        "country": 1,
        "weaid": 2221,
        "cityid": 101060906,
        "simcode": "fusong",
        "area_1": "吉林",
        "area_2": "白山",
        "area_3": "抚松"
      },
      {
        "country": 1,
        "weaid": 2222,
        "cityid": 101060907,
        "simcode": "jiangyuan",
        "area_1": "吉林",
        "area_2": "白山",
        "area_3": "江源"
      },
      {
        "country": 1,
        "weaid": 2223,
        "cityid": 101070203,
        "simcode": "jinzhou",
        "area_1": "辽宁",
        "area_2": "大连",
        "area_3": "金州"
      },
      {
        "country": 1,
        "weaid": 2224,
        "cityid": 101070205,
        "simcode": "lvshun",
        "area_1": "辽宁",
        "area_2": "大连",
        "area_3": "旅顺"
      },
      {
        "country": 1,
        "weaid": 2225,
        "cityid": 101070402,
        "simcode": "xinbin",
        "area_1": "辽宁",
        "area_2": "抚顺",
        "area_3": "新宾"
      },
      {
        "country": 1,
        "weaid": 2227,
        "cityid": 101070706,
        "simcode": "beizhen",
        "area_1": "辽宁",
        "area_2": "锦州",
        "area_3": "北镇"
      },
      {
        "country": 1,
        "weaid": 2228,
        "cityid": 101071002,
        "simcode": "liaoyangxian",
        "area_1": "辽宁",
        "area_2": "辽阳",
        "area_3": "辽阳县"
      },
      {
        "country": 1,
        "weaid": 2229,
        "cityid": 101071004,
        "simcode": "gongchangling",
        "area_1": "辽宁",
        "area_2": "辽阳",
        "area_3": "弓长岭"
      },
      {
        "country": 1,
        "weaid": 2230,
        "cityid": 101071105,
        "simcode": "tiefa",
        "area_1": "辽宁",
        "area_2": "铁岭",
        "area_3": "调兵山"
      },
      {
        "country": 1,
        "weaid": 2231,
        "cityid": 101071204,
        "simcode": "kazuo",
        "area_1": "辽宁",
        "area_2": "朝阳",
        "area_3": "喀左"
      },
      {
        "country": 1,
        "weaid": 2232,
        "cityid": 101071207,
        "simcode": "jianpingxian",
        "area_1": "辽宁",
        "area_2": "朝阳",
        "area_3": "建平县"
      },
      {
        "country": 1,
        "weaid": 2233,
        "cityid": 101080105,
        "simcode": "qingshuihe",
        "area_1": "内蒙古",
        "area_2": "呼和浩特",
        "area_3": "清水河"
      },
      {
        "country": 1,
        "weaid": 2234,
        "cityid": 101080106,
        "simcode": "hushijiaoqu",
        "area_1": "内蒙古",
        "area_2": "呼和浩特",
        "area_3": "赛罕"
      },
      {
        "country": 1,
        "weaid": 2236,
        "cityid": 101080206,
        "simcode": "damaoqi",
        "area_1": "内蒙古",
        "area_2": "包头",
        "area_3": "达茂旗"
      },
      {
        "country": 1,
        "weaid": 2242,
        "cityid": 101080603,
        "simcode": "aluqi",
        "area_1": "内蒙古",
        "area_2": "赤峰",
        "area_3": "阿鲁旗"
      },
      {
        "country": 1,
        "weaid": 2249,
        "cityid": 101080709,
        "simcode": "hangjinqi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "杭锦旗"
      },
      {
        "country": 1,
        "weaid": 2250,
        "cityid": 101080710,
        "simcode": "wushenqi",
        "area_1": "内蒙古",
        "area_2": "鄂尔多斯",
        "area_3": "乌审旗"
      },
      {
        "country": 1,
        "weaid": 2255,
        "cityid": 101080904,
        "simcode": "abaga",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "阿巴嘎"
      },
      {
        "country": 1,
        "weaid": 2257,
        "cityid": 101080914,
        "simcode": "zhenglanqi",
        "area_1": "内蒙古",
        "area_2": "锡林郭勒",
        "area_3": "正蓝旗"
      },
      {
        "country": 1,
        "weaid": 2260,
        "cityid": 101081005,
        "simcode": "elunchunqi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "鄂伦春旗"
      },
      {
        "country": 1,
        "weaid": 2261,
        "cityid": 101081006,
        "simcode": "ewenkeqi",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "鄂温克旗"
      },
      {
        "country": 1,
        "weaid": 2262,
        "cityid": 101081014,
        "simcode": "eerguna",
        "area_1": "内蒙古",
        "area_2": "呼伦贝尔",
        "area_3": "额尔古纳"
      },
      {
        "country": 1,
        "weaid": 2263,
        "cityid": 101081103,
        "simcode": "keyouzhongqi",
        "area_1": "内蒙古",
        "area_2": "兴安盟",
        "area_3": "科右中旗"
      },
      {
        "country": 1,
        "weaid": 2266,
        "cityid": 101081109,
        "simcode": "keyouqianqi",
        "area_1": "内蒙古",
        "area_2": "兴安盟",
        "area_3": "科右前旗"
      },
      {
        "country": 1,
        "weaid": 2276,
        "cityid": 101090118,
        "simcode": "luquan",
        "area_1": "河北",
        "area_2": "石家庄",
        "area_3": "鹿泉"
      },
      {
        "country": 1,
        "weaid": 2277,
        "cityid": 101090222,
        "simcode": "laishui",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "涞水"
      },
      {
        "country": 1,
        "weaid": 2278,
        "cityid": 101090223,
        "simcode": "dingxing",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "定兴"
      },
      {
        "country": 1,
        "weaid": 2279,
        "cityid": 101090225,
        "simcode": "boye",
        "area_1": "河北",
        "area_2": "保定",
        "area_3": "博野"
      },
      {
        "country": 1,
        "weaid": 2280,
        "cityid": 101090403,
        "simcode": "chengdexian",
        "area_1": "河北",
        "area_2": "承德",
        "area_3": "承德县"
      },
      {
        "country": 1,
        "weaid": 2282,
        "cityid": 101090704,
        "simcode": "haixing",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "海兴"
      },
      {
        "country": 1,
        "weaid": 2283,
        "cityid": 101090705,
        "simcode": "yanshan",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "盐山"
      },
      {
        "country": 1,
        "weaid": 2284,
        "cityid": 101090706,
        "simcode": "suning",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "肃宁"
      },
      {
        "country": 1,
        "weaid": 2285,
        "cityid": 101090707,
        "simcode": "nanpi",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "南皮"
      },
      {
        "country": 1,
        "weaid": 2286,
        "cityid": 101090709,
        "simcode": "xianxian",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "献县"
      },
      {
        "country": 1,
        "weaid": 2287,
        "cityid": 101090710,
        "simcode": "mengcun",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "孟村"
      },
      {
        "country": 1,
        "weaid": 2288,
        "cityid": 101090716,
        "simcode": "cangxian",
        "area_1": "河北",
        "area_2": "沧州",
        "area_3": "沧县"
      },
      {
        "country": 1,
        "weaid": 2289,
        "cityid": 101090802,
        "simcode": "zaoqiang",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "枣强"
      },
      {
        "country": 1,
        "weaid": 2290,
        "cityid": 101090803,
        "simcode": "wuyi",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "武邑"
      },
      {
        "country": 1,
        "weaid": 2291,
        "cityid": 101090804,
        "simcode": "wuqiang",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "武强"
      },
      {
        "country": 1,
        "weaid": 2292,
        "cityid": 101090805,
        "simcode": "raoyang",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "饶阳"
      },
      {
        "country": 1,
        "weaid": 2293,
        "cityid": 101090807,
        "simcode": "gucheng",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "故城"
      },
      {
        "country": 1,
        "weaid": 2294,
        "cityid": 101090808,
        "simcode": "jingxian",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "景县"
      },
      {
        "country": 1,
        "weaid": 2295,
        "cityid": 101090809,
        "simcode": "fucheng",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "阜城"
      },
      {
        "country": 1,
        "weaid": 2296,
        "cityid": 101090810,
        "simcode": "jizhou",
        "area_1": "河北",
        "area_2": "衡水",
        "area_3": "冀州"
      },
      {
        "country": 1,
        "weaid": 2297,
        "cityid": 101090902,
        "simcode": "lincheng",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "临城"
      },
      {
        "country": 1,
        "weaid": 2298,
        "cityid": 101090904,
        "simcode": "neiqiu",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "内丘"
      },
      {
        "country": 1,
        "weaid": 2299,
        "cityid": 101090905,
        "simcode": "baixiang",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "柏乡"
      },
      {
        "country": 1,
        "weaid": 2300,
        "cityid": 101090906,
        "simcode": "longyao",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "隆尧"
      },
      {
        "country": 1,
        "weaid": 2301,
        "cityid": 101090907,
        "simcode": "nanhe",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "南和"
      },
      {
        "country": 1,
        "weaid": 2302,
        "cityid": 101090908,
        "simcode": "ningjin",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "宁晋"
      },
      {
        "country": 1,
        "weaid": 2303,
        "cityid": 101090909,
        "simcode": "julu",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "巨鹿"
      },
      {
        "country": 1,
        "weaid": 2304,
        "cityid": 101090910,
        "simcode": "xinhe",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "新河"
      },
      {
        "country": 1,
        "weaid": 2305,
        "cityid": 101090911,
        "simcode": "guangzong",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "广宗"
      },
      {
        "country": 1,
        "weaid": 2306,
        "cityid": 101090912,
        "simcode": "pingxiang",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "平乡"
      },
      {
        "country": 1,
        "weaid": 2307,
        "cityid": 101090913,
        "simcode": "weixian",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "威县"
      },
      {
        "country": 1,
        "weaid": 2308,
        "cityid": 101090914,
        "simcode": "qinghe",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "清河"
      },
      {
        "country": 1,
        "weaid": 2309,
        "cityid": 101090915,
        "simcode": "linxi",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "临西"
      },
      {
        "country": 1,
        "weaid": 2310,
        "cityid": 101090918,
        "simcode": "renxian",
        "area_1": "河北",
        "area_2": "邢台",
        "area_3": "任县"
      },
      {
        "country": 1,
        "weaid": 2311,
        "cityid": 101091002,
        "simcode": "fengfeng",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "峰峰"
      },
      {
        "country": 1,
        "weaid": 2312,
        "cityid": 101091003,
        "simcode": "linzhang",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "临漳"
      },
      {
        "country": 1,
        "weaid": 2313,
        "cityid": 101091004,
        "simcode": "chengan",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "成安"
      },
      {
        "country": 1,
        "weaid": 2314,
        "cityid": 101091005,
        "simcode": "daming",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "大名"
      },
      {
        "country": 1,
        "weaid": 2315,
        "cityid": 101091007,
        "simcode": "cixian",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "磁县"
      },
      {
        "country": 1,
        "weaid": 2316,
        "cityid": 101091010,
        "simcode": "qiuxian",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "邱县"
      },
      {
        "country": 1,
        "weaid": 2317,
        "cityid": 101091011,
        "simcode": "jize",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "鸡泽"
      },
      {
        "country": 1,
        "weaid": 2318,
        "cityid": 101091014,
        "simcode": "weixian",
        "area_1": "河北",
        "area_2": "邯郸",
        "area_3": "魏县"
      },
      {
        "country": 1,
        "weaid": 2319,
        "cityid": 101091102,
        "simcode": "qinglong",
        "area_1": "河北",
        "area_2": "秦皇岛",
        "area_3": "青龙"
      },
      {
        "country": 1,
        "weaid": 2320,
        "cityid": 101091104,
        "simcode": "funing",
        "area_1": "河北",
        "area_2": "秦皇岛",
        "area_3": "抚宁"
      },
      {
        "country": 1,
        "weaid": 2321,
        "cityid": 101091105,
        "simcode": "lulong",
        "area_1": "河北",
        "area_2": "秦皇岛",
        "area_3": "卢龙"
      },
      {
        "country": 1,
        "weaid": 2322,
        "cityid": 101091106,
        "simcode": "beidaihe",
        "area_1": "河北",
        "area_2": "秦皇岛",
        "area_3": "北戴河"
      },
      {
        "country": 1,
        "weaid": 2323,
        "cityid": 101100105,
        "simcode": "gujiao",
        "area_1": "山西",
        "area_2": "太原",
        "area_3": "古交"
      },
      {
        "country": 1,
        "weaid": 2324,
        "cityid": 101100106,
        "simcode": "jiancaopingqu",
        "area_1": "山西",
        "area_2": "太原",
        "area_3": "尖草坪区"
      },
      {
        "country": 1,
        "weaid": 2325,
        "cityid": 101100107,
        "simcode": "xiaodianqu",
        "area_1": "山西",
        "area_2": "太原",
        "area_3": "小店区"
      },
      {
        "country": 1,
        "weaid": 2326,
        "cityid": 101100202,
        "simcode": "yanggao",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "阳高"
      },
      {
        "country": 1,
        "weaid": 2327,
        "cityid": 101100203,
        "simcode": "datongxian",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "大同县"
      },
      {
        "country": 1,
        "weaid": 2328,
        "cityid": 101100206,
        "simcode": "lingqiu",
        "area_1": "山西",
        "area_2": "大同",
        "area_3": "灵丘"
      },
      {
        "country": 1,
        "weaid": 2329,
        "cityid": 101100302,
        "simcode": "yuxian",
        "area_1": "山西",
        "area_2": "阳泉",
        "area_3": "盂县"
      },
      {
        "country": 1,
        "weaid": 2330,
        "cityid": 101100606,
        "simcode": "zezhou",
        "area_1": "山西",
        "area_2": "晋城",
        "area_3": "泽州"
      },
      {
        "country": 1,
        "weaid": 2331,
        "cityid": 101100714,
        "simcode": "houma",
        "area_1": "山西",
        "area_2": "临汾",
        "area_3": "侯马"
      },
      {
        "country": 1,
        "weaid": 2332,
        "cityid": 101100807,
        "simcode": "jiangxian",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "绛县"
      },
      {
        "country": 1,
        "weaid": 2333,
        "cityid": 101100808,
        "simcode": "wenxi",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "闻喜"
      },
      {
        "country": 1,
        "weaid": 2334,
        "cityid": 101100812,
        "simcode": "xiaxian",
        "area_1": "山西",
        "area_2": "运城",
        "area_3": "夏县"
      },
      {
        "country": 1,
        "weaid": 2335,
        "cityid": 101100902,
        "simcode": "pinglu",
        "area_1": "山西",
        "area_2": "朔州",
        "area_3": "平鲁"
      },
      {
        "country": 1,
        "weaid": 2336,
        "cityid": 101101003,
        "simcode": "wutaixian",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "五台县"
      },
      {
        "country": 1,
        "weaid": 2338,
        "cityid": 101101012,
        "simcode": "jingle",
        "area_1": "山西",
        "area_2": "忻州",
        "area_3": "静乐"
      },
      {
        "country": 1,
        "weaid": 2339,
        "cityid": 101110306,
        "simcode": "zhidan",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "志丹"
      },
      {
        "country": 1,
        "weaid": 2340,
        "cityid": 101110312,
        "simcode": "wuqi",
        "area_1": "陕西",
        "area_2": "延安",
        "area_3": "吴起"
      },
      {
        "country": 1,
        "weaid": 2341,
        "cityid": 101110413,
        "simcode": "yuyang",
        "area_1": "陕西",
        "area_2": "榆林",
        "area_3": "榆阳"
      },
      {
        "country": 1,
        "weaid": 2342,
        "cityid": 101110604,
        "simcode": "shangzhou",
        "area_1": "陕西",
        "area_2": "商洛",
        "area_3": "商州"
      },
      {
        "country": 1,
        "weaid": 2343,
        "cityid": 101110912,
        "simcode": "chencang",
        "area_1": "陕西",
        "area_2": "宝鸡",
        "area_3": "陈仓"
      },
      {
        "country": 1,
        "weaid": 2344,
        "cityid": 101111004,
        "simcode": "yaozhou",
        "area_1": "陕西",
        "area_2": "铜川",
        "area_3": "耀州"
      },
      {
        "country": 1,
        "weaid": 2345,
        "cityid": 101111101,
        "simcode": "yangling",
        "area_1": "陕西",
        "area_2": "杨凌",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 2346,
        "cityid": 101120202,
        "simcode": "laoshan",
        "area_1": "山东",
        "area_2": "青岛",
        "area_3": "崂山"
      },
      {
        "country": 1,
        "weaid": 2347,
        "cityid": 101120302,
        "simcode": "zichuan",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "淄川"
      },
      {
        "country": 1,
        "weaid": 2348,
        "cityid": 101120303,
        "simcode": "boshan",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "博山"
      },
      {
        "country": 1,
        "weaid": 2349,
        "cityid": 101120305,
        "simcode": "zhoucun",
        "area_1": "山东",
        "area_2": "淄博",
        "area_3": "周村"
      },
      {
        "country": 1,
        "weaid": 2350,
        "cityid": 101120403,
        "simcode": "linyi",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "临邑"
      },
      {
        "country": 1,
        "weaid": 2351,
        "cityid": 101120405,
        "simcode": "qihe",
        "area_1": "山东",
        "area_2": "德州",
        "area_3": "齐河"
      },
      {
        "country": 1,
        "weaid": 2352,
        "cityid": 101120508,
        "simcode": "fushan",
        "area_1": "山东",
        "area_2": "烟台",
        "area_3": "福山"
      },
      {
        "country": 1,
        "weaid": 2353,
        "cityid": 101121203,
        "simcode": "kenli",
        "area_1": "山东",
        "area_2": "东营",
        "area_3": "垦利"
      },
      {
        "country": 1,
        "weaid": 2354,
        "cityid": 101121302,
        "simcode": "wendeng",
        "area_1": "山东",
        "area_2": "威海",
        "area_3": "文登"
      },
      {
        "country": 1,
        "weaid": 2355,
        "cityid": 101121303,
        "simcode": "rongcheng",
        "area_1": "山东",
        "area_2": "威海",
        "area_3": "荣成"
      },
      {
        "country": 1,
        "weaid": 2356,
        "cityid": 101121304,
        "simcode": "rushan",
        "area_1": "山东",
        "area_2": "威海",
        "area_3": "乳山"
      },
      {
        "country": 1,
        "weaid": 2359,
        "cityid": 101121402,
        "simcode": "xuecheng",
        "area_1": "山东",
        "area_2": "枣庄",
        "area_3": "薛城"
      },
      {
        "country": 1,
        "weaid": 2360,
        "cityid": 101121403,
        "simcode": "yicheng",
        "area_1": "山东",
        "area_2": "枣庄",
        "area_3": "峄城"
      },
      {
        "country": 1,
        "weaid": 2361,
        "cityid": 101121404,
        "simcode": "taierzhuang",
        "area_1": "山东",
        "area_2": "枣庄",
        "area_3": "台儿庄"
      },
      {
        "country": 1,
        "weaid": 2362,
        "cityid": 101121502,
        "simcode": "wulian",
        "area_1": "山东",
        "area_2": "日照",
        "area_3": "五莲"
      },
      {
        "country": 1,
        "weaid": 2363,
        "cityid": 101121702,
        "simcode": "guanxian",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "冠县"
      },
      {
        "country": 1,
        "weaid": 2364,
        "cityid": 101121703,
        "simcode": "yanggu",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "阳谷"
      },
      {
        "country": 1,
        "weaid": 2365,
        "cityid": 101121704,
        "simcode": "gaotang",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "高唐"
      },
      {
        "country": 1,
        "weaid": 2366,
        "cityid": 101121705,
        "simcode": "chiping",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "茌平"
      },
      {
        "country": 1,
        "weaid": 2367,
        "cityid": 101121706,
        "simcode": "donge",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "东阿"
      },
      {
        "country": 1,
        "weaid": 2368,
        "cityid": 101121709,
        "simcode": "shenxian",
        "area_1": "山东",
        "area_2": "聊城",
        "area_3": "莘县"
      },
      {
        "country": 1,
        "weaid": 2370,
        "cityid": 101130105,
        "simcode": "dabancheng",
        "area_1": "新疆",
        "area_2": "乌鲁木齐",
        "area_3": "达坂城"
      },
      {
        "country": 1,
        "weaid": 2374,
        "cityid": 101130202,
        "simcode": "wuerhe",
        "area_1": "新疆",
        "area_2": "克拉玛依",
        "area_3": "乌尔禾"
      },
      {
        "country": 1,
        "weaid": 2375,
        "cityid": 101130203,
        "simcode": "baijiantan",
        "area_1": "新疆",
        "area_2": "克拉玛依",
        "area_3": "白碱滩"
      },
      {
        "country": 1,
        "weaid": 2383,
        "cityid": 101130911,
        "simcode": "shufu",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "疏附"
      },
      {
        "country": 1,
        "weaid": 2384,
        "cityid": 101130912,
        "simcode": "shule",
        "area_1": "新疆",
        "area_2": "喀什",
        "area_3": "疏勒"
      },
      {
        "country": 1,
        "weaid": 2385,
        "cityid": 101131004,
        "simcode": "yiningxian",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "伊宁县"
      },
      {
        "country": 1,
        "weaid": 2386,
        "cityid": 101131010,
        "simcode": "huoerguosi",
        "area_1": "新疆",
        "area_2": "伊犁",
        "area_3": "霍尔果斯"
      },
      {
        "country": 1,
        "weaid": 2387,
        "cityid": 101131606,
        "simcode": "alashankou",
        "area_1": "新疆",
        "area_2": "博尔塔拉",
        "area_3": "阿拉山口"
      },
      {
        "country": 1,
        "weaid": 2388,
        "cityid": 101140102,
        "simcode": "dangxiong",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "当雄"
      },
      {
        "country": 1,
        "weaid": 2389,
        "cityid": 101140104,
        "simcode": "linzhou",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "林周"
      },
      {
        "country": 1,
        "weaid": 2390,
        "cityid": 101140105,
        "simcode": "duilongdeqing",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "堆龙德庆"
      },
      {
        "country": 1,
        "weaid": 2391,
        "cityid": 101140106,
        "simcode": "qushui",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "曲水"
      },
      {
        "country": 1,
        "weaid": 2392,
        "cityid": 101140107,
        "simcode": "dazi",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "达孜"
      },
      {
        "country": 1,
        "weaid": 2393,
        "cityid": 101140108,
        "simcode": "mozhugongka",
        "area_1": "西藏",
        "area_2": "拉萨",
        "area_3": "墨竹工卡"
      },
      {
        "country": 1,
        "weaid": 2394,
        "cityid": 101140206,
        "simcode": "jiangzi",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "江孜"
      },
      {
        "country": 1,
        "weaid": 2396,
        "cityid": 101140208,
        "simcode": "zhongba",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "仲巴"
      },
      {
        "country": 1,
        "weaid": 2397,
        "cityid": 101140209,
        "simcode": "saga",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "萨嘎"
      },
      {
        "country": 1,
        "weaid": 2398,
        "cityid": 101140210,
        "simcode": "jilong",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "吉隆"
      },
      {
        "country": 1,
        "weaid": 2399,
        "cityid": 101140211,
        "simcode": "angren",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "昂仁"
      },
      {
        "country": 1,
        "weaid": 2400,
        "cityid": 101140212,
        "simcode": "dingjie",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "定结"
      },
      {
        "country": 1,
        "weaid": 2401,
        "cityid": 101140213,
        "simcode": "sajia",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "萨迦"
      },
      {
        "country": 1,
        "weaid": 2402,
        "cityid": 101140214,
        "simcode": "xietongmen",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "谢通门"
      },
      {
        "country": 1,
        "weaid": 2403,
        "cityid": 101140216,
        "simcode": "gangba",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "岗巴"
      },
      {
        "country": 1,
        "weaid": 2404,
        "cityid": 101140217,
        "simcode": "bailang",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "白朗"
      },
      {
        "country": 1,
        "weaid": 2405,
        "cityid": 101140218,
        "simcode": "yadong",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "亚东"
      },
      {
        "country": 1,
        "weaid": 2406,
        "cityid": 101140219,
        "simcode": "kangma",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "康马"
      },
      {
        "country": 1,
        "weaid": 2407,
        "cityid": 101140220,
        "simcode": "renbu",
        "area_1": "西藏",
        "area_2": "日喀则",
        "area_3": "仁布"
      },
      {
        "country": 1,
        "weaid": 2408,
        "cityid": 101140302,
        "simcode": "gongga",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "贡嘎"
      },
      {
        "country": 1,
        "weaid": 2409,
        "cityid": 101140303,
        "simcode": "zhanan",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "扎囊"
      },
      {
        "country": 1,
        "weaid": 2410,
        "cityid": 101140304,
        "simcode": "jiacha",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "加查"
      },
      {
        "country": 1,
        "weaid": 2412,
        "cityid": 101140309,
        "simcode": "naidong",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "乃东"
      },
      {
        "country": 1,
        "weaid": 2413,
        "cityid": 101140310,
        "simcode": "sangri",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "桑日"
      },
      {
        "country": 1,
        "weaid": 2414,
        "cityid": 101140311,
        "simcode": "luozha",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "洛扎"
      },
      {
        "country": 1,
        "weaid": 2415,
        "cityid": 101140312,
        "simcode": "cuomei",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "措美"
      },
      {
        "country": 1,
        "weaid": 2416,
        "cityid": 101140313,
        "simcode": "qiongjie",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "琼结"
      },
      {
        "country": 1,
        "weaid": 2417,
        "cityid": 101140314,
        "simcode": "qusong",
        "area_1": "西藏",
        "area_2": "山南",
        "area_3": "曲松"
      },
      {
        "country": 1,
        "weaid": 2418,
        "cityid": 101140402,
        "simcode": "bomi",
        "area_1": "西藏",
        "area_2": "林芝",
        "area_3": "波密"
      },
      {
        "country": 1,
        "weaid": 2419,
        "cityid": 101140403,
        "simcode": "milin",
        "area_1": "西藏",
        "area_2": "林芝",
        "area_3": "米林"
      },
      {
        "country": 1,
        "weaid": 2420,
        "cityid": 101140404,
        "simcode": "chayu",
        "area_1": "西藏",
        "area_2": "林芝",
        "area_3": "察隅"
      },
      {
        "country": 1,
        "weaid": 2421,
        "cityid": 101140405,
        "simcode": "gongbujiangda",
        "area_1": "西藏",
        "area_2": "林芝",
        "area_3": "工布江达"
      },
      {
        "country": 1,
        "weaid": 2422,
        "cityid": 101140406,
        "simcode": "langxian",
        "area_1": "西藏",
        "area_2": "林芝",
        "area_3": "朗县"
      },
      {
        "country": 1,
        "weaid": 2423,
        "cityid": 101140407,
        "simcode": "motuo",
        "area_1": "西藏",
        "area_2": "林芝",
        "area_3": "墨脱"
      },
      {
        "country": 1,
        "weaid": 2424,
        "cityid": 101140503,
        "simcode": "bianba",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "边坝"
      },
      {
        "country": 1,
        "weaid": 2425,
        "cityid": 101140507,
        "simcode": "leiwuqi",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "类乌齐"
      },
      {
        "country": 1,
        "weaid": 2426,
        "cityid": 101140508,
        "simcode": "basu",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "八宿"
      },
      {
        "country": 1,
        "weaid": 2427,
        "cityid": 101140509,
        "simcode": "jiangda",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "江达"
      },
      {
        "country": 1,
        "weaid": 2428,
        "cityid": 101140510,
        "simcode": "chaya",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "察雅"
      },
      {
        "country": 1,
        "weaid": 2429,
        "cityid": 101140511,
        "simcode": "gongjue",
        "area_1": "西藏",
        "area_2": "昌都",
        "area_3": "贡觉"
      },
      {
        "country": 1,
        "weaid": 2430,
        "cityid": 101140602,
        "simcode": "nima",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "尼玛"
      },
      {
        "country": 1,
        "weaid": 2431,
        "cityid": 101140605,
        "simcode": "anduo",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "安多"
      },
      {
        "country": 1,
        "weaid": 2432,
        "cityid": 101140606,
        "simcode": "suoxian",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "索县"
      },
      {
        "country": 1,
        "weaid": 2433,
        "cityid": 101140607,
        "simcode": "nierong",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "聂荣"
      },
      {
        "country": 1,
        "weaid": 2434,
        "cityid": 101140608,
        "simcode": "baqing",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "巴青"
      },
      {
        "country": 1,
        "weaid": 2435,
        "cityid": 101140609,
        "simcode": "biru",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "比如"
      },
      {
        "country": 1,
        "weaid": 2436,
        "cityid": 101140610,
        "simcode": "shuanghu",
        "area_1": "西藏",
        "area_2": "那曲",
        "area_3": "双湖"
      },
      {
        "country": 1,
        "weaid": 2438,
        "cityid": 101140706,
        "simcode": "zhada",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "札达"
      },
      {
        "country": 1,
        "weaid": 2439,
        "cityid": 101140707,
        "simcode": "gaer",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "噶尔"
      },
      {
        "country": 1,
        "weaid": 2440,
        "cityid": 101140708,
        "simcode": "ritu",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "日土"
      },
      {
        "country": 1,
        "weaid": 2441,
        "cityid": 101140709,
        "simcode": "geji",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "革吉"
      },
      {
        "country": 1,
        "weaid": 2442,
        "cityid": 101140710,
        "simcode": "cuoqin",
        "area_1": "西藏",
        "area_2": "阿里",
        "area_3": "措勤"
      },
      {
        "country": 1,
        "weaid": 2443,
        "cityid": 101150104,
        "simcode": "huangzhong",
        "area_1": "青海",
        "area_2": "西宁",
        "area_3": "湟中"
      },
      {
        "country": 1,
        "weaid": 2445,
        "cityid": 101150602,
        "simcode": "chenduo",
        "area_1": "青海",
        "area_2": "玉树",
        "area_3": "称多"
      },
      {
        "country": 1,
        "weaid": 2446,
        "cityid": 101150605,
        "simcode": "nangqian",
        "area_1": "青海",
        "area_2": "玉树",
        "area_3": "囊谦"
      },
      {
        "country": 1,
        "weaid": 2449,
        "cityid": 101160308,
        "simcode": "kongtong",
        "area_1": "甘肃",
        "area_2": "平凉",
        "area_3": "崆峒"
      },
      {
        "country": 1,
        "weaid": 2450,
        "cityid": 101160409,
        "simcode": "qingcheng",
        "area_1": "甘肃",
        "area_2": "庆阳",
        "area_3": "庆城"
      },
      {
        "country": 1,
        "weaid": 2451,
        "cityid": 101160804,
        "simcode": "akesai",
        "area_1": "甘肃",
        "area_2": "酒泉",
        "area_3": "阿克塞"
      },
      {
        "country": 1,
        "weaid": 2452,
        "cityid": 101160908,
        "simcode": "maiji",
        "area_1": "甘肃",
        "area_2": "天水",
        "area_3": "麦积"
      },
      {
        "country": 1,
        "weaid": 2453,
        "cityid": 101161004,
        "simcode": "dangchang",
        "area_1": "甘肃",
        "area_2": "陇南",
        "area_3": "宕昌"
      },
      {
        "country": 1,
        "weaid": 2454,
        "cityid": 101161106,
        "simcode": "dongxiang",
        "area_1": "甘肃",
        "area_2": "临夏",
        "area_3": "东乡"
      },
      {
        "country": 1,
        "weaid": 2455,
        "cityid": 101161107,
        "simcode": "jishishan",
        "area_1": "甘肃",
        "area_2": "临夏",
        "area_3": "积石山"
      },
      {
        "country": 1,
        "weaid": 2456,
        "cityid": 101161304,
        "simcode": "pingchuan",
        "area_1": "甘肃",
        "area_2": "白银",
        "area_3": "平川"
      },
      {
        "country": 1,
        "weaid": 2457,
        "cityid": 101180108,
        "simcode": "shangjie",
        "area_1": "河南",
        "area_2": "郑州",
        "area_3": "上街"
      },
      {
        "country": 1,
        "weaid": 2458,
        "cityid": 101180205,
        "simcode": "linzhou",
        "area_1": "河南",
        "area_2": "安阳",
        "area_3": "林州"
      },
      {
        "country": 1,
        "weaid": 2459,
        "cityid": 101180508,
        "simcode": "shilong",
        "area_1": "河南",
        "area_2": "平顶山",
        "area_3": "石龙"
      },
      {
        "country": 1,
        "weaid": 2460,
        "cityid": 101180911,
        "simcode": "jili",
        "area_1": "河南",
        "area_2": "洛阳",
        "area_3": "吉利"
      },
      {
        "country": 1,
        "weaid": 2461,
        "cityid": 101181108,
        "simcode": "mengzhou",
        "area_1": "河南",
        "area_2": "焦作",
        "area_3": "孟州"
      },
      {
        "country": 1,
        "weaid": 2462,
        "cityid": 101181705,
        "simcode": "yima",
        "area_1": "河南",
        "area_2": "三门峡",
        "area_3": "义马"
      },
      {
        "country": 1,
        "weaid": 2463,
        "cityid": 101181706,
        "simcode": "shanxian",
        "area_1": "河南",
        "area_2": "三门峡",
        "area_3": "陕县"
      },
      {
        "country": 1,
        "weaid": 2464,
        "cityid": 101190107,
        "simcode": "pukou",
        "area_1": "江苏",
        "area_2": "南京",
        "area_3": "浦口"
      },
      {
        "country": 1,
        "weaid": 2465,
        "cityid": 101190204,
        "simcode": "xishan",
        "area_1": "江苏",
        "area_2": "无锡",
        "area_3": "锡山"
      },
      {
        "country": 1,
        "weaid": 2466,
        "cityid": 101190305,
        "simcode": "dantu",
        "area_1": "江苏",
        "area_2": "镇江",
        "area_3": "丹徒"
      },
      {
        "country": 1,
        "weaid": 2467,
        "cityid": 101190405,
        "simcode": "wuzhong",
        "area_1": "江苏",
        "area_2": "苏州",
        "area_3": "吴中"
      },
      {
        "country": 1,
        "weaid": 2468,
        "cityid": 101190509,
        "simcode": "tongzhou",
        "area_1": "江苏",
        "area_2": "南通",
        "area_3": "通州"
      },
      {
        "country": 1,
        "weaid": 2469,
        "cityid": 101190606,
        "simcode": "hanjiang",
        "area_1": "江苏",
        "area_2": "扬州",
        "area_3": "邗江"
      },
      {
        "country": 1,
        "weaid": 2470,
        "cityid": 101190709,
        "simcode": "yandu",
        "area_1": "江苏",
        "area_2": "盐城",
        "area_3": "盐都"
      },
      {
        "country": 1,
        "weaid": 2471,
        "cityid": 101190802,
        "simcode": "tongshan",
        "area_1": "江苏",
        "area_2": "徐州",
        "area_3": "铜山"
      },
      {
        "country": 1,
        "weaid": 2472,
        "cityid": 101190906,
        "simcode": "huaiyinqu",
        "area_1": "江苏",
        "area_2": "淮安",
        "area_3": "淮阴区"
      },
      {
        "country": 1,
        "weaid": 2473,
        "cityid": 101190908,
        "simcode": "huaianqu",
        "area_1": "江苏",
        "area_2": "淮安",
        "area_3": "淮安区"
      },
      {
        "country": 1,
        "weaid": 2474,
        "cityid": 101191104,
        "simcode": "wujin",
        "area_1": "江苏",
        "area_2": "常州",
        "area_3": "武进"
      },
      {
        "country": 1,
        "weaid": 2475,
        "cityid": 101191302,
        "simcode": "shuyang",
        "area_1": "江苏",
        "area_2": "宿迁",
        "area_3": "沭阳"
      },
      {
        "country": 1,
        "weaid": 2476,
        "cityid": 101191305,
        "simcode": "suyu",
        "area_1": "江苏",
        "area_2": "宿迁",
        "area_3": "宿豫"
      },
      {
        "country": 1,
        "weaid": 2477,
        "cityid": 101200106,
        "simcode": "dongxihu",
        "area_1": "湖北",
        "area_2": "武汉",
        "area_3": "东西湖"
      },
      {
        "country": 1,
        "weaid": 2478,
        "cityid": 101200202,
        "simcode": "xiangzhou",
        "area_1": "湖北",
        "area_2": "襄阳",
        "area_3": "襄州"
      },
      {
        "country": 1,
        "weaid": 2479,
        "cityid": 101200302,
        "simcode": "liangzihu",
        "area_1": "湖北",
        "area_2": "鄂州",
        "area_3": "梁子湖"
      },
      {
        "country": 1,
        "weaid": 2480,
        "cityid": 101200407,
        "simcode": "xiaochang",
        "area_1": "湖北",
        "area_2": "孝感",
        "area_3": "孝昌"
      },
      {
        "country": 1,
        "weaid": 2481,
        "cityid": 101200510,
        "simcode": "tuanfeng",
        "area_1": "湖北",
        "area_2": "黄冈",
        "area_3": "团风"
      },
      {
        "country": 1,
        "weaid": 2482,
        "cityid": 101200604,
        "simcode": "tieshan",
        "area_1": "湖北",
        "area_2": "黄石",
        "area_3": "铁山"
      },
      {
        "country": 1,
        "weaid": 2483,
        "cityid": 101200605,
        "simcode": "xialu",
        "area_1": "湖北",
        "area_2": "黄石",
        "area_3": "下陆"
      },
      {
        "country": 1,
        "weaid": 2484,
        "cityid": 101200606,
        "simcode": "xisaishan",
        "area_1": "湖北",
        "area_2": "黄石",
        "area_3": "西塞山"
      },
      {
        "country": 1,
        "weaid": 2485,
        "cityid": 101200909,
        "simcode": "yidu",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "宜都"
      },
      {
        "country": 1,
        "weaid": 2487,
        "cityid": 101200912,
        "simcode": "yiling",
        "area_1": "湖北",
        "area_2": "宜昌",
        "area_3": "夷陵"
      },
      {
        "country": 1,
        "weaid": 2488,
        "cityid": 101201108,
        "simcode": "maojian",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "茅箭"
      },
      {
        "country": 1,
        "weaid": 2489,
        "cityid": 101201109,
        "simcode": "zhangwan",
        "area_1": "湖北",
        "area_2": "十堰",
        "area_3": "张湾"
      },
      {
        "country": 1,
        "weaid": 2490,
        "cityid": 101201404,
        "simcode": "duodao",
        "area_1": "湖北",
        "area_2": "荆门",
        "area_3": "掇刀"
      },
      {
        "country": 1,
        "weaid": 2491,
        "cityid": 101201405,
        "simcode": "shayang",
        "area_1": "湖北",
        "area_2": "荆门",
        "area_3": "沙洋"
      },
      {
        "country": 1,
        "weaid": 2493,
        "cityid": 101210406,
        "simcode": "xiangshan",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "象山"
      },
      {
        "country": 1,
        "weaid": 2494,
        "cityid": 101210410,
        "simcode": "beilun",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "北仑"
      },
      {
        "country": 1,
        "weaid": 2495,
        "cityid": 101210411,
        "simcode": "yinzhou",
        "area_1": "浙江",
        "area_2": "宁波",
        "area_3": "鄞州"
      },
      {
        "country": 1,
        "weaid": 2496,
        "cityid": 101210505,
        "simcode": "shengzhou",
        "area_1": "浙江",
        "area_2": "绍兴",
        "area_3": "嵊州"
      },
      {
        "country": 1,
        "weaid": 2497,
        "cityid": 101210506,
        "simcode": "keqiao",
        "area_1": "浙江",
        "area_2": "绍兴",
        "area_3": "柯桥"
      },
      {
        "country": 1,
        "weaid": 2499,
        "cityid": 101210613,
        "simcode": "luqiao",
        "area_1": "浙江",
        "area_2": "台州",
        "area_3": "路桥"
      },
      {
        "country": 1,
        "weaid": 2500,
        "cityid": 101211006,
        "simcode": "qujiang",
        "area_1": "浙江",
        "area_2": "衢州",
        "area_3": "衢江"
      },
      {
        "country": 1,
        "weaid": 2501,
        "cityid": 101211106,
        "simcode": "dinghai",
        "area_1": "浙江",
        "area_2": "舟山",
        "area_3": "定海"
      },
      {
        "country": 1,
        "weaid": 2502,
        "cityid": 101220105,
        "simcode": "chaohu",
        "area_1": "安徽",
        "area_2": "合肥",
        "area_3": "巢湖"
      },
      {
        "country": 1,
        "weaid": 2503,
        "cityid": 101220106,
        "simcode": "lujiang",
        "area_1": "安徽",
        "area_2": "合肥",
        "area_3": "庐江"
      },
      {
        "country": 1,
        "weaid": 2504,
        "cityid": 101220303,
        "simcode": "wuhuxian",
        "area_1": "安徽",
        "area_2": "芜湖",
        "area_3": "芜湖县"
      },
      {
        "country": 1,
        "weaid": 2505,
        "cityid": 101220305,
        "simcode": "wuwei",
        "area_1": "安徽",
        "area_2": "芜湖",
        "area_3": "无为"
      },
      {
        "country": 1,
        "weaid": 2506,
        "cityid": 101220403,
        "simcode": "panji",
        "area_1": "安徽",
        "area_2": "淮南",
        "area_3": "潘集"
      },
      {
        "country": 1,
        "weaid": 2507,
        "cityid": 101220503,
        "simcode": "hanshan",
        "area_1": "安徽",
        "area_2": "马鞍山",
        "area_3": "含山"
      },
      {
        "country": 1,
        "weaid": 2508,
        "cityid": 101220504,
        "simcode": "hexian",
        "area_1": "安徽",
        "area_2": "马鞍山",
        "area_3": "和县"
      },
      {
        "country": 1,
        "weaid": 2509,
        "cityid": 101221002,
        "simcode": "huangshanqu",
        "area_1": "安徽",
        "area_2": "黄山",
        "area_3": "黄山区"
      },
      {
        "country": 1,
        "weaid": 2510,
        "cityid": 101221003,
        "simcode": "tunxi",
        "area_1": "安徽",
        "area_2": "黄山",
        "area_3": "屯溪"
      },
      {
        "country": 1,
        "weaid": 2512,
        "cityid": 101221704,
        "simcode": "jiuhuashan",
        "area_1": "安徽",
        "area_2": "池州",
        "area_3": "九华山"
      },
      {
        "country": 1,
        "weaid": 2513,
        "cityid": 101230103,
        "simcode": "minhou",
        "area_1": "福建",
        "area_2": "福州",
        "area_3": "闽侯"
      },
      {
        "country": 1,
        "weaid": 2515,
        "cityid": 101230404,
        "simcode": "hanjiang",
        "area_1": "福建",
        "area_2": "莆田",
        "area_3": "涵江"
      },
      {
        "country": 1,
        "weaid": 2516,
        "cityid": 101230405,
        "simcode": "xiuyu",
        "area_1": "福建",
        "area_2": "莆田",
        "area_3": "秀屿"
      },
      {
        "country": 1,
        "weaid": 2517,
        "cityid": 101230406,
        "simcode": "licheng",
        "area_1": "福建",
        "area_2": "莆田",
        "area_3": "荔城"
      },
      {
        "country": 1,
        "weaid": 2518,
        "cityid": 101230407,
        "simcode": "chengxiang",
        "area_1": "福建",
        "area_2": "莆田",
        "area_3": "城厢"
      },
      {
        "country": 1,
        "weaid": 2520,
        "cityid": 101230508,
        "simcode": "huian",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "惠安"
      },
      {
        "country": 1,
        "weaid": 2521,
        "cityid": 101230510,
        "simcode": "shishi",
        "area_1": "福建",
        "area_2": "泉州",
        "area_3": "石狮"
      },
      {
        "country": 1,
        "weaid": 2522,
        "cityid": 101231001,
        "simcode": "diaoyudao",
        "area_1": "福建",
        "area_2": "钓鱼岛",
        "area_3": "城区"
      },
      {
        "country": 1,
        "weaid": 2523,
        "cityid": 101240103,
        "simcode": "nanchangxian",
        "area_1": "江西",
        "area_2": "南昌",
        "area_3": "南昌县"
      },
      {
        "country": 1,
        "weaid": 2524,
        "cityid": 101240302,
        "simcode": "poyang",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "鄱阳"
      },
      {
        "country": 1,
        "weaid": 2525,
        "cityid": 101240308,
        "simcode": "shangraoxian",
        "area_1": "江西",
        "area_2": "上饶",
        "area_3": "上饶县"
      },
      {
        "country": 1,
        "weaid": 2526,
        "cityid": 101240403,
        "simcode": "anle",
        "area_1": "江西",
        "area_2": "抚州",
        "area_3": "乐安"
      },
      {
        "country": 1,
        "weaid": 2527,
        "cityid": 101240602,
        "simcode": "jianxian",
        "area_1": "江西",
        "area_2": "吉安",
        "area_3": "吉安县"
      },
      {
        "country": 1,
        "weaid": 2528,
        "cityid": 101240718,
        "simcode": "ganxian",
        "area_1": "江西",
        "area_2": "赣州",
        "area_3": "赣县"
      },
      {
        "country": 1,
        "weaid": 2529,
        "cityid": 101240803,
        "simcode": "fuliang",
        "area_1": "江西",
        "area_2": "景德镇",
        "area_3": "浮梁"
      },
      {
        "country": 1,
        "weaid": 2530,
        "cityid": 101240903,
        "simcode": "shangli",
        "area_1": "江西",
        "area_2": "萍乡",
        "area_3": "上栗"
      },
      {
        "country": 1,
        "weaid": 2531,
        "cityid": 101240904,
        "simcode": "anyuan",
        "area_1": "江西",
        "area_2": "萍乡",
        "area_3": "安源"
      },
      {
        "country": 1,
        "weaid": 2532,
        "cityid": 101240905,
        "simcode": "luxi",
        "area_1": "江西",
        "area_2": "萍乡",
        "area_3": "芦溪"
      },
      {
        "country": 1,
        "weaid": 2533,
        "cityid": 101240906,
        "simcode": "xiangdong",
        "area_1": "江西",
        "area_2": "萍乡",
        "area_3": "湘东"
      },
      {
        "country": 1,
        "weaid": 2534,
        "cityid": 101250104,
        "simcode": "xiangjiangxinqu",
        "area_1": "湖南",
        "area_2": "长沙",
        "area_3": "湘江新区"
      },
      {
        "country": 1,
        "weaid": 2535,
        "cityid": 101250105,
        "simcode": "wangcheng",
        "area_1": "湖南",
        "area_2": "长沙",
        "area_3": "望城"
      },
      {
        "country": 1,
        "weaid": 2536,
        "cityid": 101250405,
        "simcode": "hengyangxian",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "衡阳县"
      },
      {
        "country": 1,
        "weaid": 2537,
        "cityid": 101250409,
        "simcode": "nanyue",
        "area_1": "湖南",
        "area_2": "衡阳",
        "area_3": "南岳"
      },
      {
        "country": 1,
        "weaid": 2538,
        "cityid": 101250512,
        "simcode": "suxian",
        "area_1": "湖南",
        "area_2": "郴州",
        "area_3": "苏仙"
      },
      {
        "country": 1,
        "weaid": 2539,
        "cityid": 101250608,
        "simcode": "jinshi",
        "area_1": "湖南",
        "area_2": "常德",
        "area_3": "津市"
      },
      {
        "country": 1,
        "weaid": 2540,
        "cityid": 101250701,
        "simcode": "heshanqu",
        "area_1": "湖南",
        "area_2": "益阳",
        "area_3": "赫山区"
      },
      {
        "country": 1,
        "weaid": 2541,
        "cityid": 101250910,
        "simcode": "shaoyangxian",
        "area_1": "湖南",
        "area_2": "邵阳",
        "area_3": "邵阳县"
      },
      {
        "country": 1,
        "weaid": 2542,
        "cityid": 101251104,
        "simcode": "wulingyuan",
        "area_1": "湖南",
        "area_2": "张家界",
        "area_3": "武陵源"
      },
      {
        "country": 1,
        "weaid": 2543,
        "cityid": 101251212,
        "simcode": "zhongfang",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "中方"
      },
      {
        "country": 1,
        "weaid": 2544,
        "cityid": 101251213,
        "simcode": "hongjiang",
        "area_1": "湖南",
        "area_2": "怀化",
        "area_3": "洪江"
      },
      {
        "country": 1,
        "weaid": 2545,
        "cityid": 101251411,
        "simcode": "lengshuitan",
        "area_1": "湖南",
        "area_2": "永州",
        "area_3": "冷水滩"
      },
      {
        "country": 1,
        "weaid": 2546,
        "cityid": 101260102,
        "simcode": "baiyun",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "白云"
      },
      {
        "country": 1,
        "weaid": 2547,
        "cityid": 101260103,
        "simcode": "huaxi",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "花溪"
      },
      {
        "country": 1,
        "weaid": 2548,
        "cityid": 101260104,
        "simcode": "wudang",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "乌当"
      },
      {
        "country": 1,
        "weaid": 2550,
        "cityid": 101260110,
        "simcode": "yunyan",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "云岩"
      },
      {
        "country": 1,
        "weaid": 2551,
        "cityid": 101260111,
        "simcode": "nanming",
        "area_1": "贵州",
        "area_2": "贵阳",
        "area_3": "南明"
      },
      {
        "country": 1,
        "weaid": 2552,
        "cityid": 101260202,
        "simcode": "zunyixian",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "遵义县"
      },
      {
        "country": 1,
        "weaid": 2553,
        "cityid": 101260214,
        "simcode": "huichuan",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "汇川"
      },
      {
        "country": 1,
        "weaid": 2554,
        "cityid": 101260215,
        "simcode": "honghuagang",
        "area_1": "贵州",
        "area_2": "遵义",
        "area_3": "红花岗"
      },
      {
        "country": 1,
        "weaid": 2555,
        "cityid": 101260403,
        "simcode": "wengan",
        "area_1": "贵州",
        "area_2": "黔南",
        "area_3": "瓮安"
      },
      {
        "country": 1,
        "weaid": 2556,
        "cityid": 101260708,
        "simcode": "qianxi",
        "area_1": "贵州",
        "area_2": "毕节",
        "area_3": "黔西"
      },
      {
        "country": 1,
        "weaid": 2557,
        "cityid": 101260901,
        "simcode": "xingyi",
        "area_1": "贵州",
        "area_2": "黔西南",
        "area_3": "兴义"
      },
      {
        "country": 1,
        "weaid": 2558,
        "cityid": 101270102,
        "simcode": "longquanyi",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "龙泉驿"
      },
      {
        "country": 1,
        "weaid": 2559,
        "cityid": 101270115,
        "simcode": "qingbaijiang",
        "area_1": "四川",
        "area_2": "成都",
        "area_3": "青白江"
      },
      {
        "country": 1,
        "weaid": 2560,
        "cityid": 101270202,
        "simcode": "renhe",
        "area_1": "四川",
        "area_2": "攀枝花",
        "area_3": "仁和"
      },
      {
        "country": 1,
        "weaid": 2561,
        "cityid": 101270406,
        "simcode": "beichuan",
        "area_1": "四川",
        "area_2": "绵阳",
        "area_3": "北川"
      },
      {
        "country": 1,
        "weaid": 2562,
        "cityid": 101270507,
        "simcode": "langzhong",
        "area_1": "四川",
        "area_2": "南充",
        "area_3": "阆中"
      },
      {
        "country": 1,
        "weaid": 2563,
        "cityid": 101270607,
        "simcode": "tongchuan",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "通川"
      },
      {
        "country": 1,
        "weaid": 2564,
        "cityid": 101270608,
        "simcode": "dachuan",
        "area_1": "四川",
        "area_2": "达州",
        "area_3": "达川"
      },
      {
        "country": 1,
        "weaid": 2565,
        "cityid": 101270805,
        "simcode": "huaying",
        "area_1": "四川",
        "area_2": "广安",
        "area_3": "华蓥"
      },
      {
        "country": 1,
        "weaid": 2566,
        "cityid": 101271003,
        "simcode": "luxian",
        "area_1": "四川",
        "area_2": "泸州",
        "area_3": "泸县"
      },
      {
        "country": 1,
        "weaid": 2567,
        "cityid": 101271103,
        "simcode": "yibinxian",
        "area_1": "四川",
        "area_2": "宜宾",
        "area_3": "宜宾县"
      },
      {
        "country": 1,
        "weaid": 2568,
        "cityid": 101271202,
        "simcode": "dongxing",
        "area_1": "四川",
        "area_2": "内江",
        "area_3": "东兴"
      },
      {
        "country": 1,
        "weaid": 2570,
        "cityid": 101271703,
        "simcode": "yingjing",
        "area_1": "四川",
        "area_2": "雅安",
        "area_3": "荥经"
      },
      {
        "country": 1,
        "weaid": 2571,
        "cityid": 101271803,
        "simcode": "luding",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "泸定"
      },
      {
        "country": 1,
        "weaid": 2572,
        "cityid": 101271804,
        "simcode": "danba",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "丹巴"
      },
      {
        "country": 1,
        "weaid": 2573,
        "cityid": 101271805,
        "simcode": "jiulong",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "九龙"
      },
      {
        "country": 1,
        "weaid": 2574,
        "cityid": 101271806,
        "simcode": "yajiang",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "雅江"
      },
      {
        "country": 1,
        "weaid": 2575,
        "cityid": 101271807,
        "simcode": "daofu",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "道孚"
      },
      {
        "country": 1,
        "weaid": 2576,
        "cityid": 101271808,
        "simcode": "luhuo",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "炉霍"
      },
      {
        "country": 1,
        "weaid": 2577,
        "cityid": 101271809,
        "simcode": "xinlong",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "新龙"
      },
      {
        "country": 1,
        "weaid": 2578,
        "cityid": 101271810,
        "simcode": "dege",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "德格"
      },
      {
        "country": 1,
        "weaid": 2579,
        "cityid": 101271811,
        "simcode": "baiyu",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "白玉"
      },
      {
        "country": 1,
        "weaid": 2580,
        "cityid": 101271812,
        "simcode": "shiqu",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "石渠"
      },
      {
        "country": 1,
        "weaid": 2581,
        "cityid": 101271813,
        "simcode": "seda",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "色达"
      },
      {
        "country": 1,
        "weaid": 2582,
        "cityid": 101271814,
        "simcode": "litang",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "理塘"
      },
      {
        "country": 1,
        "weaid": 2583,
        "cityid": 101271815,
        "simcode": "batang",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "巴塘"
      },
      {
        "country": 1,
        "weaid": 2584,
        "cityid": 101271816,
        "simcode": "xiangcheng",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "乡城"
      },
      {
        "country": 1,
        "weaid": 2585,
        "cityid": 101271817,
        "simcode": "daocheng",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "稻城"
      },
      {
        "country": 1,
        "weaid": 2586,
        "cityid": 101271818,
        "simcode": "derong",
        "area_1": "四川",
        "area_2": "甘孜",
        "area_3": "得荣"
      },
      {
        "country": 1,
        "weaid": 2587,
        "cityid": 101271906,
        "simcode": "jiuzhaigou",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "九寨沟"
      },
      {
        "country": 1,
        "weaid": 2588,
        "cityid": 101271907,
        "simcode": "jinchuan",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "金川"
      },
      {
        "country": 1,
        "weaid": 2589,
        "cityid": 101271909,
        "simcode": "heishui",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "黑水"
      },
      {
        "country": 1,
        "weaid": 2590,
        "cityid": 101271911,
        "simcode": "rangtang",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "壤塘"
      },
      {
        "country": 1,
        "weaid": 2591,
        "cityid": 101271912,
        "simcode": "nuoergai",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "若尔盖"
      },
      {
        "country": 1,
        "weaid": 2592,
        "cityid": 101271913,
        "simcode": "hongyuan",
        "area_1": "四川",
        "area_2": "阿坝",
        "area_3": "红原"
      },
      {
        "country": 1,
        "weaid": 2593,
        "cityid": 101272006,
        "simcode": "luojiang",
        "area_1": "四川",
        "area_2": "德阳",
        "area_3": "罗江"
      },
      {
        "country": 1,
        "weaid": 2594,
        "cityid": 101280210,
        "simcode": "zhenjiang",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "浈江"
      },
      {
        "country": 1,
        "weaid": 2595,
        "cityid": 101280211,
        "simcode": "wujiang",
        "area_1": "广东",
        "area_2": "韶关",
        "area_3": "武江"
      },
      {
        "country": 1,
        "weaid": 2596,
        "cityid": 101280409,
        "simcode": "meixian",
        "area_1": "广东",
        "area_2": "梅州",
        "area_3": "梅县"
      },
      {
        "country": 1,
        "weaid": 2597,
        "cityid": 101280703,
        "simcode": "jinwan",
        "area_1": "广东",
        "area_2": "珠海",
        "area_3": "金湾"
      },
      {
        "country": 1,
        "weaid": 2598,
        "cityid": 101280804,
        "simcode": "gaoming",
        "area_1": "广东",
        "area_2": "佛山",
        "area_3": "高明"
      },
      {
        "country": 1,
        "weaid": 2599,
        "cityid": 101281006,
        "simcode": "chikan",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "赤坎"
      },
      {
        "country": 1,
        "weaid": 2600,
        "cityid": 101281008,
        "simcode": "potou",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "坡头"
      },
      {
        "country": 1,
        "weaid": 2601,
        "cityid": 101281009,
        "simcode": "xiashan",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "霞山"
      },
      {
        "country": 1,
        "weaid": 2602,
        "cityid": 101281010,
        "simcode": "mazhang",
        "area_1": "广东",
        "area_2": "湛江",
        "area_3": "麻章"
      },
      {
        "country": 1,
        "weaid": 2603,
        "cityid": 101281107,
        "simcode": "pengjiang",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "蓬江"
      },
      {
        "country": 1,
        "weaid": 2604,
        "cityid": 101281109,
        "simcode": "jianghai",
        "area_1": "广东",
        "area_2": "江门",
        "area_3": "江海"
      },
      {
        "country": 1,
        "weaid": 2605,
        "cityid": 101281206,
        "simcode": "dongyuan",
        "area_1": "广东",
        "area_2": "河源",
        "area_3": "东源"
      },
      {
        "country": 1,
        "weaid": 2606,
        "cityid": 101281308,
        "simcode": "qingxin",
        "area_1": "广东",
        "area_2": "清远",
        "area_3": "清新"
      },
      {
        "country": 1,
        "weaid": 2607,
        "cityid": 101281406,
        "simcode": "yunan",
        "area_1": "广东",
        "area_2": "云浮",
        "area_3": "云安"
      },
      {
        "country": 1,
        "weaid": 2608,
        "cityid": 101281503,
        "simcode": "chaoan",
        "area_1": "广东",
        "area_2": "潮州",
        "area_3": "潮安"
      },
      {
        "country": 1,
        "weaid": 2609,
        "cityid": 101281803,
        "simcode": "yangdong",
        "area_1": "广东",
        "area_2": "阳江",
        "area_3": "阳东"
      },
      {
        "country": 1,
        "weaid": 2610,
        "cityid": 101281804,
        "simcode": "yangxi",
        "area_1": "广东",
        "area_2": "阳江",
        "area_3": "阳西"
      },
      {
        "country": 1,
        "weaid": 2611,
        "cityid": 101281905,
        "simcode": "jiedong",
        "area_1": "广东",
        "area_2": "揭阳",
        "area_3": "揭东"
      },
      {
        "country": 1,
        "weaid": 2613,
        "cityid": 101282104,
        "simcode": "luhe",
        "area_1": "广东",
        "area_2": "汕尾",
        "area_3": "陆河"
      },
      {
        "country": 1,
        "weaid": 2615,
        "cityid": 101290202,
        "simcode": "yunlong",
        "area_1": "云南",
        "area_2": "大理",
        "area_3": "云龙"
      },
      {
        "country": 1,
        "weaid": 2616,
        "cityid": 101290313,
        "simcode": "hekou",
        "area_1": "云南",
        "area_2": "红河",
        "area_3": "河口"
      },
      {
        "country": 1,
        "weaid": 2617,
        "cityid": 101290912,
        "simcode": "ninger",
        "area_1": "云南",
        "area_2": "普洱",
        "area_3": "宁洱"
      },
      {
        "country": 1,
        "weaid": 2618,
        "cityid": 101291011,
        "simcode": "shuifu",
        "area_1": "云南",
        "area_2": "昭通",
        "area_3": "水富"
      },
      {
        "country": 1,
        "weaid": 2619,
        "cityid": 101291107,
        "simcode": "yunxian",
        "area_1": "云南",
        "area_2": "临沧",
        "area_3": "云县"
      },
      {
        "country": 1,
        "weaid": 2620,
        "cityid": 101300406,
        "simcode": "heshan",
        "area_1": "广西",
        "area_2": "来宾",
        "area_3": "合山"
      },
      {
        "country": 1,
        "weaid": 2621,
        "cityid": 101300506,
        "simcode": "xingan",
        "area_1": "广西",
        "area_2": "桂林",
        "area_3": "兴安"
      },
      {
        "country": 1,
        "weaid": 2622,
        "cityid": 101300906,
        "simcode": "xingye",
        "area_1": "广西",
        "area_2": "玉林",
        "area_3": "兴业"
      },
      {
        "country": 1,
        "weaid": 2623,
        "cityid": 101301211,
        "simcode": "dahua",
        "area_1": "广西",
        "area_2": "河池",
        "area_3": "大化"
      },
      {
        "country": 1,
        "weaid": 2625,
        "cityid": 101301403,
        "simcode": "dongxing",
        "area_1": "广西",
        "area_2": "防城港",
        "area_3": "东兴"
      },
      {
        "country": 1,
        "weaid": 2626,
        "cityid": 101301405,
        "simcode": "fangcheng",
        "area_1": "广西",
        "area_2": "防城港",
        "area_3": "防城"
      },
      {
        "country": 1,
        "weaid": 2628,
        "cityid": 101320101,
        "simcode": "hongkong",
        "area_1": "香港",
        "area_2": "城区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 2629,
        "cityid": 101320102,
        "simcode": "jiulong",
        "area_1": "香港",
        "area_2": "九龙",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 2630,
        "cityid": 101320103,
        "simcode": "xinjie",
        "area_1": "香港",
        "area_2": "新界",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 2631,
        "cityid": 101330101,
        "simcode": "macao",
        "area_1": "澳门",
        "area_2": "城区",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 2632,
        "cityid": 101330102,
        "simcode": "dangzidao",
        "area_1": "澳门",
        "area_2": "氹仔岛",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 2633,
        "cityid": 101330103,
        "simcode": "luhuandao",
        "area_1": "澳门",
        "area_2": "路环岛",
        "area_3": ""
      },
      {
        "country": 1,
        "weaid": 2634,
        "cityid": 101340102,
        "simcode": "taoyuan",
        "area_1": "台湾",
        "area_2": "台北",
        "area_3": "桃园"
      },
      {
        "country": 1,
        "weaid": 2635,
        "cityid": 101340103,
        "simcode": "xinzhu",
        "area_1": "台湾",
        "area_2": "台北",
        "area_3": "新竹"
      },
      {
        "country": 1,
        "weaid": 2636,
        "cityid": 101340104,
        "simcode": "yilan",
        "area_1": "台湾",
        "area_2": "台北",
        "area_3": "宜兰"
      },
      {
        "country": 1,
        "weaid": 2637,
        "cityid": 101340202,
        "simcode": "jiayi",
        "area_1": "台湾",
        "area_2": "高雄",
        "area_3": "嘉义"
      },
      {
        "country": 1,
        "weaid": 2638,
        "cityid": 101340203,
        "simcode": "tainan",
        "area_1": "台湾",
        "area_2": "高雄",
        "area_3": "台南"
      },
      {
        "country": 1,
        "weaid": 2639,
        "cityid": 101340204,
        "simcode": "taidong",
        "area_1": "台湾",
        "area_2": "高雄",
        "area_3": "台东"
      },
      {
        "country": 1,
        "weaid": 2640,
        "cityid": 101340205,
        "simcode": "pingdong",
        "area_1": "台湾",
        "area_2": "高雄",
        "area_3": "屏东"
      },
      {
        "country": 1,
        "weaid": 2641,
        "cityid": 101340402,
        "simcode": "miaoli",
        "area_1": "台湾",
        "area_2": "台中",
        "area_3": "苗栗"
      },
      {
        "country": 1,
        "weaid": 2642,
        "cityid": 101340403,
        "simcode": "zhanghua",
        "area_1": "台湾",
        "area_2": "台中",
        "area_3": "彰化"
      },
      {
        "country": 1,
        "weaid": 2643,
        "cityid": 101340404,
        "simcode": "nantou",
        "area_1": "台湾",
        "area_2": "台中",
        "area_3": "南投"
      },
      {
        "country": 1,
        "weaid": 2644,
        "cityid": 101340405,
        "simcode": "hualian",
        "area_1": "台湾",
        "area_2": "台中",
        "area_3": "花莲"
      },
      {
        "country": 1,
        "weaid": 2645,
        "cityid": 101340406,
        "simcode": "yunlin",
        "area_1": "台湾",
        "area_2": "台中",
        "area_3": "云林"
      },
      {
        "country": 1,
        "weaid": 2650,
        "cityid": 101220408,
        "simcode": "shouxian",
        "area_1": "安徽",
        "area_2": "淮南",
        "area_3": "寿县"
      },
      {
        "country": 1,
        "weaid": 2651,
        "cityid": 101120107,
        "simcode": "lixia",
        "area_1": "山东",
        "area_2": "济南",
        "area_3": "历下"
      },
      {
        "country": 2,
        "weaid": 2186,
        "cityid": 102010100,
        "simcode": "seoul",
        "area_1": "韩国",
        "area_2": "首尔(Seoul)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2187,
        "cityid": 104010100,
        "simcode": "singapore",
        "area_1": "新加坡",
        "area_2": "新加坡(Singapore)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2188,
        "cityid": 106010100,
        "simcode": "bangkok",
        "area_1": "泰国",
        "area_2": "曼谷(Bangkok)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2189,
        "cityid": 401110101,
        "simcode": "newyork",
        "area_1": "美国",
        "area_2": "纽约(NewYork)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2190,
        "cityid": 124020100,
        "simcode": "dubai",
        "area_1": "阿拉伯联合酋长国",
        "area_2": "迪拜(Dubai)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2191,
        "cityid": 103163100,
        "simcode": "osaka",
        "area_1": "日本",
        "area_2": "大阪(Osaka)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2192,
        "cityid": 601020101,
        "simcode": "sydney",
        "area_1": "澳大利亚",
        "area_2": "悉尼(Sydney)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2193,
        "cityid": 601060101,
        "simcode": "melbourne",
        "area_1": "澳大利亚",
        "area_2": "墨尔本(Melbourne)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2194,
        "cityid": 401040101,
        "simcode": "losangeles",
        "area_1": "美国",
        "area_2": "洛杉矶(LosAngeles)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2195,
        "cityid": 105010100,
        "simcode": "kualalumpur",
        "area_1": "马来西亚",
        "area_2": "吉隆坡(KualaLumpur)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2196,
        "cityid": 201010100,
        "simcode": "london",
        "area_1": "英国",
        "area_2": "伦敦(London)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2197,
        "cityid": 401070101,
        "simcode": "chicago",
        "area_1": "美国",
        "area_2": "芝加哥(Chicago)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2198,
        "cityid": 203020100,
        "simcode": "frankfurt",
        "area_1": "德国",
        "area_2": "法兰克福(Frankfurt)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2199,
        "cityid": 401620100,
        "simcode": "washington",
        "area_1": "美国",
        "area_2": "华盛顿(WashingtonD.C)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2200,
        "cityid": 208010100,
        "simcode": "moscow",
        "area_1": "俄罗斯",
        "area_2": "莫斯科(Moscow)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2201,
        "cityid": 103010100,
        "simcode": "tokyo",
        "area_1": "日本",
        "area_2": "东京(Tokyo)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2202,
        "cityid": 203038900,
        "simcode": "munich",
        "area_1": "德国",
        "area_2": "慕尼黑(Munich)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2203,
        "cityid": 401060100,
        "simcode": "boston",
        "area_1": "美国",
        "area_2": "波士顿(Boston)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2204,
        "cityid": 401370100,
        "simcode": "lasvegas",
        "area_1": "美国",
        "area_2": "拉斯维加斯(Lasvegas)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2205,
        "cityid": 202010100,
        "simcode": "paris",
        "area_1": "法国",
        "area_2": "巴黎(Paris)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2206,
        "cityid": 404430100,
        "simcode": "vancouver",
        "area_1": "加拿大",
        "area_2": "温哥华港(VancouverHarbour)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2207,
        "cityid": 103090100,
        "simcode": "kyoto",
        "area_1": "日本",
        "area_2": "京都(Kyoto)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2208,
        "cityid": 401640100,
        "simcode": "sanfrancisco",
        "area_1": "美国",
        "area_2": "旧金山(Sanfrancisco)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2209,
        "cityid": 601365100,
        "simcode": "wellington",
        "area_1": "澳大利亚",
        "area_2": "惠灵顿(Wellington)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2210,
        "cityid": 107010100,
        "simcode": "hanoi",
        "area_1": "越南",
        "area_2": "河内(Hanoi)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2211,
        "cityid": 107130100,
        "simcode": "danang",
        "area_1": "越南",
        "area_2": "岘港(Danang)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2648,
        "cityid": 404040100,
        "simcode": "duolunduo",
        "area_1": "加拿大",
        "area_2": "多伦多(Toronto)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2652,
        "cityid": 149090100,
        "simcode": "kompong",
        "area_1": "柬埔寨",
        "area_2": "磅湛(Kompong Cham)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2653,
        "cityid": 149050100,
        "simcode": "Stungtreng",
        "area_1": "柬埔寨",
        "area_2": "上丁省(Stungtreng)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2654,
        "cityid": 149010100,
        "simcode": "PhnomPenh",
        "area_1": "柬埔寨",
        "area_2": "金边(PhnomPenh)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2655,
        "cityid": 149100100,
        "simcode": "Svayrieng",
        "area_1": "柬埔寨",
        "area_2": "柴桢(Svayrieng)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2656,
        "cityid": 149020100,
        "simcode": "Battambang",
        "area_1": "柬埔寨",
        "area_2": "马德望(Battambang)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2657,
        "cityid": 149080100,
        "simcode": "Kampot",
        "area_1": "柬埔寨",
        "area_2": "贡布(Kampot)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2658,
        "cityid": 149030100,
        "simcode": "Siemreap",
        "area_1": "柬埔寨",
        "area_2": "暹粒(Siemreap)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2659,
        "cityid": 149040100,
        "simcode": "Krakor",
        "area_1": "柬埔寨",
        "area_2": "格罗戈(Krakor)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2660,
        "cityid": 106650100,
        "simcode": "Prachinburi",
        "area_1": "泰国",
        "area_2": "巴真武里(Prachinburi)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2661,
        "cityid": 106108100,
        "simcode": "PhatthalungAgriMet",
        "area_1": "泰国",
        "area_2": "博他仑农业气象组(PhatthalungAgriMet)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2662,
        "cityid": 106770100,
        "simcode": "BangnaAgriMet",
        "area_1": "泰国",
        "area_2": "邦那农业气象组(BangnaAgriMet)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2663,
        "cityid": 106700100,
        "simcode": "PakchongAgriMet",
        "area_1": "泰国",
        "area_2": "北冲农业气象组(PakchongAgriMet)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2664,
        "cityid": 106810100,
        "simcode": "ChachoengsaoAgriMet",
        "area_1": "泰国",
        "area_2": "北柳农业气象组(ChachoengsaoAgriMet)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2665,
        "cityid": 106123100,
        "simcode": "Pattani",
        "area_1": "泰国",
        "area_2": "北大年(Pattani)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2666,
        "cityid": 106350100,
        "simcode": "Phetchabun",
        "area_1": "泰国",
        "area_2": "碧差汶(Phetchabun)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2667,
        "cityid": 106470100,
        "simcode": "ChainatAgriMet",
        "area_1": "泰国",
        "area_2": "猜纳农业气象组(ChainatAgriMet)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2668,
        "cityid": 106750100,
        "simcode": "Kanchanaburi",
        "area_1": "泰国",
        "area_2": "北碧府(Kanchanaburi)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2669,
        "cityid": 106840100,
        "simcode": "Phatthaya",
        "area_1": "泰国",
        "area_2": "芭提雅(Phatthaya)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2670,
        "cityid": 106190100,
        "simcode": "Uttaradit",
        "area_1": "泰国",
        "area_2": "程逸(Uttaradit)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2671,
        "cityid": 106980100,
        "simcode": "Chumphon",
        "area_1": "泰国",
        "area_2": "春蓬(Chumphon)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2672,
        "cityid": 106480100,
        "simcode": "Chaiyaphum",
        "area_1": "泰国",
        "area_2": "猜也贲(Chaiyaphum)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2673,
        "cityid": 105400100,
        "simcode": "Petalingjaya",
        "area_1": "马来西亚",
        "area_2": "八打灵(Petalingjaya)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2674,
        "cityid": 105200100,
        "simcode": "Kuantan",
        "area_1": "马来西亚",
        "area_2": "关丹(Kuantan)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2675,
        "cityid": 105310100,
        "simcode": "Kotabharu",
        "area_1": "马来西亚",
        "area_2": "哥打巴鲁(Kotabharu)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2676,
        "cityid": 105100100,
        "simcode": "Tawau",
        "area_1": "马来西亚",
        "area_2": "斗湖(Tawau)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2677,
        "cityid": 105190100,
        "simcode": "Temerloh",
        "area_1": "马来西亚",
        "area_2": "淡马鲁(Temerloh)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2678,
        "cityid": 105020100,
        "simcode": "Kuching",
        "area_1": "马来西亚",
        "area_2": "古晋(Kuching)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2679,
        "cityid": 105280100,
        "simcode": "Butterworth",
        "area_1": "马来西亚",
        "area_2": "巴特沃斯(Butterworth)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2680,
        "cityid": 105090100,
        "simcode": "Kudat",
        "area_1": "马来西亚",
        "area_2": "古达(Kudat)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2681,
        "cityid": 105010100,
        "simcode": "KualaLumpur",
        "area_1": "马来西亚",
        "area_2": "吉隆坡(KualaLumpur)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2682,
        "cityid": 105330100,
        "simcode": "Kualatrengganu",
        "area_1": "马来西亚",
        "area_2": "瓜拉登嘉楼(Kualatrengganu)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2683,
        "cityid": 105180100,
        "simcode": "KualalumpurIntLAirp",
        "area_1": "马来西亚",
        "area_2": "吉隆坡国际机场(KualalumpurInt'LAirpor",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2684,
        "cityid": 105320100,
        "simcode": "Kualakrai",
        "area_1": "马来西亚",
        "area_2": "瓜拉吉赖(Kualakrai)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2685,
        "cityid": 105240100,
        "simcode": "Mersing",
        "area_1": "马来西亚",
        "area_2": "丰盛港(Mersing)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2686,
        "cityid": 435020100,
        "simcode": "PortOfSpain",
        "area_1": "特立尼达和多巴哥",
        "area_2": "西班牙港(PortOfSpain)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2687,
        "cityid": 435030100,
        "simcode": "PiarcoIntLAirport",
        "area_1": "特立尼达和多巴哥",
        "area_2": "皮亚科国际机场(PiarcoInt'LAirport)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2688,
        "cityid": 206500100,
        "simcode": "Avila",
        "area_1": "西班牙",
        "area_2": "阿维拉(Avila)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2689,
        "cityid": 206120100,
        "simcode": "Valladolid",
        "area_1": "西班牙",
        "area_2": "巴利亚多利德(Valladolid)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2690,
        "cityid": 206750100,
        "simcode": "Alicante",
        "area_1": "西班牙",
        "area_2": "阿里坎特(Alicante)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2691,
        "cityid": 206100100,
        "simcode": "AlmeriaAeropuerto",
        "area_1": "西班牙",
        "area_2": "阿尔梅里亚(AlmeriaAeropuerto)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2692,
        "cityid": 206740100,
        "simcode": "Almagro",
        "area_1": "西班牙",
        "area_2": "阿尔马格罗(Almagro)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2693,
        "cityid": 206790100,
        "simcode": "Jaen",
        "area_1": "西班牙",
        "area_2": "哈恩(Jaen)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2694,
        "cityid": 206580100,
        "simcode": "Guadalajara",
        "area_1": "西班牙",
        "area_2": "瓜达拉哈拉(Guadalajara)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2695,
        "cityid": 206070100,
        "simcode": "Oviedo",
        "area_1": "西班牙",
        "area_2": "奥维耶多(Oviedo)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2696,
        "cityid": 206020100,
        "simcode": "Barcelona",
        "area_1": "西班牙",
        "area_2": "巴塞罗那(Barcelona)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2697,
        "cityid": 206090100,
        "simcode": "AlbaceteLosllanos",
        "area_1": "西班牙",
        "area_2": "阿尔巴塞特(AlbaceteLosllanos)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2698,
        "cityid": 206320100,
        "simcode": "Orense",
        "area_1": "西班牙",
        "area_2": "奥伦塞(Orense)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2699,
        "cityid": 206110100,
        "simcode": "AlicanteElaltet",
        "area_1": "西班牙",
        "area_2": "阿利坎特(AlicanteElaltet)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2700,
        "cityid": 206670100,
        "simcode": "Valencia",
        "area_1": "西班牙",
        "area_2": "巴伦西亚(Valencia)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2701,
        "cityid": 502114100,
        "simcode": "Barbacena",
        "area_1": "巴西",
        "area_2": "巴巴塞纳(Barbacena)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2702,
        "cityid": 502277100,
        "simcode": "Abrolhos",
        "area_1": "巴西",
        "area_2": "阿波罗荷斯(Abrolhos)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2703,
        "cityid": 502715100,
        "simcode": "Araguaina",
        "area_1": "巴西",
        "area_2": "阿拉瓜伊纳(Araguaina)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2704,
        "cityid": 502329100,
        "simcode": "Alfredochaves",
        "area_1": "巴西",
        "area_2": "阿尔弗雷多查维斯(Alfredochaves)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2705,
        "cityid": 502518100,
        "simcode": "Acarau",
        "area_1": "巴西",
        "area_2": "阿凯劳(Acarau)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2706,
        "cityid": 502670100,
        "simcode": "Altamira",
        "area_1": "巴西",
        "area_2": "阿尔塔米拉(Altamira)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2707,
        "cityid": 502312100,
        "simcode": "Aquidauana",
        "area_1": "巴西",
        "area_2": "阿圭达瓦讷(Aquidauana)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2708,
        "cityid": 502234100,
        "simcode": "Aragarcas",
        "area_1": "巴西",
        "area_2": "阿拉加尔萨斯(Aragarcas)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2709,
        "cityid": 502983100,
        "simcode": "Abrolhos",
        "area_1": "巴西",
        "area_2": "阿波罗荷斯(Abrolhos)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2710,
        "cityid": 502567100,
        "simcode": "Araguaina",
        "area_1": "巴西",
        "area_2": "阿拉瓜伊纳(Araguaina)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2711,
        "cityid": 502658100,
        "simcode": "Acarau",
        "area_1": "巴西",
        "area_2": "阿凯劳(Acarau)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2712,
        "cityid": 502671100,
        "simcode": "AltamiraAirport",
        "area_1": "巴西",
        "area_2": "阿尔塔米拉机场(AltamiraAirport)",
        "area_3": ""
      },
      {
        "country": 2,
        "weaid": 2713,
        "cityid": 502260100,
        "simcode": "Almenara",
        "area_1": "巴西",
        "area_2": "阿尔梅纳拉(Almenara)",
        "area_3": ""
      }
    ]
    return city
  }
}