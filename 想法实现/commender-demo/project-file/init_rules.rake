# coding: utf-8
namespace :byod_cloud do
  desc "Init role rules"
  task init_rules: [:environment, :init_action_names] do
    # action_ids 指向的是 init_action_names中的id

    # 安全
    securities = [
      { id: 1, name: '查看首页', action_ids: [1, 2113, 2114, 2381, 2383], parent_id: 0 },
      { id: 2, name: '查看模版管理', action_ids: [2, 2108], parent_id: 0 },
      { id: 3, name: '创建模版', action_ids: [3, 2168, 2174], parent_id: 2 },
      # { id: 4, name: '查看模版', action_ids: [4, 10], parent_id: 2 },
      { id: 5, name: '编辑模版', action_ids: [4, 5, 10, 2168, 2174], parent_id: 2 },
      { id: 6, name: '删除模版', action_ids: [6], parent_id: 2 },
      { id: 7, name: '查看管理员赋权', action_ids: [7, 11], parent_id: 0 },
      { id: 8, name: '设置管理员权限', action_ids: [8], parent_id: 7 },
      # { id: 9, name: '查看系统设置', action_ids: [9], parent_id: 0 }
    ]

    # 审计
    audits = [
      { id: 1001, name: '查看首页', action_ids: [1001, 2113, 2114, 2381, 2383], parent_id: 0 },
      { id: 1002, name: '查看日志管理', action_ids: [1002], parent_id: 0 },
      { id: 1003, name: '查看管理员日志', action_ids: [1003, 1007], parent_id: 1002 },
      # { id: 1004, name: '导出日志', action_ids: [1004], parent_id: 1003 },
      # { id: 1005, name: '查看导出日志', action_ids: [1005], parent_id: 1002 },
      # { id: 1006, name: '查看系统日志', action_ids: [1006], parent_id: 1002 },
      { id: 1007, name: '查看管理员日志详情', action_ids: [1008], parent_id: 1003 },

    ]

    # 系统
    systems = [
      # { id: 2001, name: '查看顶部菜单', action_ids: [2001], parent_id: 0 },
      { id: 2002, name: '查看关于', action_ids: [2002], parent_id: 0 },
      { id: 2003, name: '查看授权', action_ids: [2003], parent_id: 0 },
      { id: 2004, name: '查看态势感知', action_ids: [2004, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395], parent_id: 0, byod_enabled: false },
      { id: 2005, name: '查看首页', action_ids: [2005, 2113, 2114, 2381, 2383, 2384, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370], parent_id: 0 },

      { id: 2006, name: '查看终端管理模块', action_ids: [2006], parent_id: 0 },
      { id: 2007, name: '查看终端管理', action_ids: [2007], parent_id: 2006 },
{ id: 2007, name: '查看终端页面', action_ids: [2007], parent_id: 2006 },
      { id: 2008, name: '查看终端准入', action_ids: [2008, 2104, 2105, 2106], parent_id: 2006 },
      { id: 2009, name: '查看终端标签', action_ids: [2009, 2111, 2401], parent_id: 2006 },
      { id: 2010, name: '查看终端定位', action_ids: [2010, 2112, 2490], parent_id: 2006, byod_enabled: false },
      { id: 2011, name: '查看自定义属性', action_ids: [2011, 2107], parent_id: 2006 },

      { id: 2012, name: '查看用户管理', action_ids: [2012], parent_id: 0 },
      { id: 2013, name: '查看终端用户', action_ids: [2013, 2159], parent_id: 2012 },

      { id: 2014, name: '查看应用管理', action_ids: [2014], parent_id: 0 },
      { id: 2015, name: '查看Android平台', action_ids: [2015, 2458, 2459, 2477, 2478,2504,2505], parent_id: 2014 },
      { id: 2016, name: '查看iOS平台', action_ids: [2412, 2462, 2477, 2478], parent_id: 2014 },
      { id: 2017, name: '查看H5轻应用', action_ids: [2017, 2407, 2408, 2409, 2477, 2478], parent_id: 2014 },
      { id: 2018, name: '查看应用安装统计', action_ids: [2018, 2202, 2431], parent_id: 2014 },
      # { id: 2019, name: '查看应用权限模版', action_ids: [2019], parent_id: 2014 },
      { id: 2020, name: '查看应用策略', action_ids: [2020, 2373, 2374, 2375], parent_id: 2014 },

      { id: 2021, name: '查看安全策略', action_ids: [2021], parent_id: 0 },
      { id: 2022, name: '查看管控策略', action_ids: [2022, 2372, 2376, 2377, 2378,2500], parent_id: 2021, byod_enabled: false },
      { id: 2023, name: '查看空间策略', action_ids: [2023, 2372, 2376, 2377, 2378], parent_id: 2021 },
      { id: 2024, name: '查看合规策略', action_ids: [2024, 2372, 2376, 2377, 2378], parent_id: 2021 },
      { id: 2025, name: '查看浏览策略', action_ids: [2025, 2372, 2376, 2377, 2378], parent_id: 2257 },

      { id: 2026, name: '查看终端配置', action_ids: [2026], parent_id: 0 },
      { id: 2027, name: '查看WiFi配置', action_ids: [2027, 2429, 2430], parent_id: 2026 },
      { id: 2028, name: '查看安全邮件', action_ids: [2028], parent_id: 2257 },
      { id: 2029, name: '查看证书配置', action_ids: [2029, 2466, 2467], parent_id: 2026 },
      { id: 2030, name: '查看VPN配置', action_ids: [2030, 2433, 2434], parent_id: 2026 },
      { id: 2031, name: '查看单位通讯录', action_ids: [2031], parent_id: 2257 },
      # { id: 2032, name: '查看APN配置', action_ids: [2032], parent_id: 2026 },
      # { id: 2033, name: '查看应用访问控制', action_ids: [2033], parent_id: 2026 },

      { id: 2522, name: '查看行为审计', action_ids: [2522], parent_id: 0 },
      { id: 12526, name: '查看应用审计', action_ids: [12007,12008], parent_id: 2522 },
      { id: 12527, name: '查看应用流量统计', action_ids: [12009,12010], parent_id: 2522 },
      { id: 12528, name: '查看应用崩溃统计', action_ids: [12019,12020], parent_id: 2522 },

      { id: 2034, name: '查看安全防护', action_ids: [2034], parent_id: 0 },
      { id: 2035, name: '查看终端防护', action_ids: [2035, 2379, 2487, 2488, 2489], parent_id: 2034 },
      { id: 2036, name: '查看病毒日志', action_ids: [2036, 2380], parent_id: 2034 },
      { id: 2037, name: '查看病毒库管理', action_ids: [2037], parent_id: 2034 },

      { id: 2038, name: '查看报表管理', action_ids: [2038], parent_id: 0 },
      { id: 2039, name: '查看报表模板', action_ids: [2039], parent_id: 2038 },
      { id: 2040, name: '查看报表订阅', action_ids: [2040], parent_id: 2038 },

      { id: 2041, name: '查看日志', action_ids: [2041], parent_id: 0 },
      { id: 2042, name: '查看终端日志', action_ids: [2042, 2371], parent_id: 2041 },
      { id: 2043, name: '查看敏感词日志', action_ids: [2043, 2501], parent_id: 2041, byod_enabled: false },
      { id: 2045, name: '查看导出任务日志', action_ids: [2045], parent_id: 2041 },
      { id: 2046, name: '查看工作区日志', action_ids: [2046, 2428], parent_id: 2041 },
      { id: 2048, name: '查看系统日志', action_ids: [2396], parent_id: 2041 },
      { id: 2254, name: '查看违规截屏上报', action_ids: [2048, 2468], parent_id: 2041 },


      { id: 2049, name: '查看系统管理', action_ids: [2049], parent_id: 0 },
      { id: 2050, name: '查看客户端部署', action_ids: [2050, 2312], parent_id: 2049 },
      { id: 2051, name: '查看客户端界面', action_ids: [2051, 2325, 2326], parent_id: 2049 },
      { id: 2052, name: '查看运维管理', action_ids: [2052, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2469, 2470, 2486], parent_id: 2049 },
      { id: 2053, name: '查看Agent管理', action_ids: [2053], parent_id: 2049, byod_enabled: false },
      { id: 2054, name: '查看系统工具', action_ids: [2054, 2351], parent_id: 2049 },
      { id: 2055, name: '查看系统设置', action_ids: [2056, 2353, 2354, 2355, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2460, 2495, 2496, 2497], parent_id: 2049 },
      { id: 2056, name: '查看管理控制', action_ids: [2055, 2352], parent_id: 2049 },
      { id: 2057, name: '查看管理员管理', action_ids: [2057, 11], parent_id: 2049 },

      # 查看终端管理
      { id: 2058, name: '操作', action_ids: [2058], parent_id: 2007 },
      { id: 2059, name: '锁定终端', action_ids: [2059, 2472], parent_id: 2058, byod_enabled: false },
      { id: 2060, name: '解锁终端', action_ids: [2060, 2472], parent_id: 2058, byod_enabled: false },
      { id: 2061, name: '解除终端绑定', action_ids: [2061], parent_id: 2058 },
      { id: 2062, name: '动态密码解绑', action_ids: [2062], parent_id: 2058 },
      { id: 2063, name: '重启终端', action_ids: [2063, 2476], parent_id: 2058, byod_enabled: false },
      { id: 2064, name: '终端关机', action_ids: [2064, 2476], parent_id: 2058, byod_enabled: false },
      { id: 2065, name: '恢复出厂设置', action_ids: [2065], parent_id: 2058, byod_enabled: false },
      { id: 2066, name: '擦除全部数据', action_ids: [2066], parent_id: 2058, byod_enabled: false },
      { id: 2067, name: '启动响铃', action_ids: [2067], parent_id: 2058, byod_enabled: false },
      { id: 2068, name: '关闭响铃', action_ids: [2068], parent_id: 2058, byod_enabled: false },
      { id: 2069, name: '关联标签', action_ids: [2069, 2471], parent_id: 2058 },
      { id: 2070, name: '标记个人终端', action_ids: [2070], parent_id: 2058, byod_enabled: false },
      { id: 2071, name: '标记单位终端', action_ids: [2071], parent_id: 2058, byod_enabled: false },
      { id: 2072, name: '标记丢失', action_ids: [2072], parent_id: 2058, byod_enabled: false },
      { id: 2073, name: '标记找回', action_ids: [2073], parent_id: 2058, byod_enabled: false },
      { id: 2074, name: '锁定工作区', action_ids: [2074, 2476], parent_id: 2058 },
      { id: 2075, name: '解锁工作区', action_ids: [2075, 2476], parent_id: 2058 },
      { id: 2076, name: '下发工作区密码', action_ids: [2076, 2476], parent_id: 2058 },
      { id: 2077, name: '清除工作区密码', action_ids: [2077, 2476], parent_id: 2058 },
      { id: 2078, name: '更新客户端', action_ids: [2078, 2476], parent_id: 2058 },
      { id: 2079, name: '运行状态上报', action_ids: [2079], parent_id: 2058, byod_enabled: false },
      { id: 2080, name: '查看终端详情', action_ids: [2080, 2096, 2097, 2098, 2099, 2100, 2101, 2109, 2432, 2473, 2474, 2475], parent_id: 2007 },
      { id: 2081, name: '推送证书', action_ids: [2081], parent_id: 2007 },
      { id: 2083, name: '删除', action_ids: [2083, 2463], parent_id: 2007 },
      # { id: 2084, name: '自定义列表', action_ids: [2084], parent_id: 2007 },
      { id: 2085, name: '导出', action_ids: [2085], parent_id: 2007 },

      # 查看终端准入
      { id: 2086, name: '配置准入条件', action_ids: [2086, 2102, 2103, 2498, 2499], parent_id: 2008 },

      # 查看终端标签
      { id: 2087, name: '添加标签', action_ids: [2087], parent_id: 2009 },
      { id: 2088, name: '添加智能标签', action_ids: [2088, 2397], parent_id: 2009 },
      { id: 2089, name: '导出', action_ids: [2089], parent_id: 2009 },
      { id: 2090, name: '编辑标签', action_ids: [2090, 2110, 2399, 2400, 2402], parent_id: 2009 },
      { id: 2091, name: '删除标签', action_ids: [2091, 2398], parent_id: 2009 },

      # 查看自定义属性
      { id: 2092, name: '添加属性', action_ids: [2092], parent_id: 2011 },
      { id: 2093, name: '编辑属性', action_ids: [2093], parent_id: 2011 },
      { id: 2094, name: '删除属性', action_ids: [2094], parent_id: 2011 },
      { id: 2095, name: '导出', action_ids: [2095], parent_id: 2011 },

      # 查看终端用户
      { id: 2096, name: '操作', action_ids: [2115], parent_id: 2013 },
      { id: 2097, name: '邮件邀请', action_ids: [2117, 2118, 2119], parent_id: 2096 },
      { id: 2098, name: '短信邀请', action_ids: [2120, 2121], parent_id: 2096 },
      { id: 2099, name: '禁用用户', action_ids: [2122], parent_id: 2096 },
      { id: 2100, name: '启用用户', action_ids: [2123], parent_id: 2096 },
      { id: 2101, name: '重置登录密码', action_ids: [2124, 2125], parent_id: 2096 },
      { id: 2102, name: '转移到分组', action_ids: [2126, 2127, 2128], parent_id: 2096 },
      { id: 2103, name: '删除', action_ids: [2129, 2130], parent_id: 2096 },
      { id: 2104, name: '最大活跃终端数', action_ids: [2131, 2132], parent_id: 2096 },
      { id: 2105, name: '更新二维码', action_ids: [2133], parent_id: 2096 },
      { id: 2106, name: '推送消息', action_ids: [2134, 2135, 2491], parent_id: 2096 },
      { id: 2107, name: '推送文件', action_ids: [2136, 2137, 2435], parent_id: 2096 },

      { id: 2108, name: '添加用户', action_ids: [2116], parent_id: 2013 },
      { id: 2109, name: '手动添加', action_ids: [2138, 2139, 2140], parent_id: 2108 },
      { id: 2110, name: '批量导入', action_ids: [2141, 2142, 2404], parent_id: 2108 },
      { id: 2111, name: 'LDAP导入', action_ids: [2143, 2144, 2145, 2405, 2502], parent_id: 2108 },

      { id: 2112, name: '用户详情', action_ids: [2147, 2158], parent_id: 2013 },
      { id: 2113, name: '编辑用户', action_ids: [2148, 2149], parent_id: 2112 },
      { id: 2114, name: '导出', action_ids: [2146], parent_id: 2013 },
      # { id: 2115, name: '删除用户', action_ids: [2129, 2130], parent_id: 2013 },
      # { id: 2116, name: '自定义列表', action_ids: [2150], parent_id: 2013 },
      # { id: 2117, name: '添加分组', action_ids: [2151, 2152, 2153], parent_id: 2013 },
      # { id: 2118, name: '编辑分组', action_ids: [2151, 2157], parent_id: 2013 },
      # { id: 2119, name: '删除分组', action_ids: [2151, 2154, 2155, 2156], parent_id: 2013 },

      { id: 2120, name: '添加Android应用', action_ids: [2182, 2160, 2161, 2403, 2480,2503], parent_id: 2015 },
      { id: 2121, name: '删除', action_ids: [2183, 2162], parent_id: 2015 },
      { id: 2122, name: '下载', action_ids: [2184, 2163], parent_id: 2015 },
      { id: 2123, name: '清除应用数据', action_ids: [2185, 2164], parent_id: 2015 },
      { id: 2124, name: '导出', action_ids: [2167], parent_id: 2015 },

      { id: 2125, name: '导出', action_ids: [2181], parent_id: 2016 },

      { id: 2126, name: '升级', action_ids: [2188, 2169, 2173, 2161], parent_id: 2015 },
      { id: 2127, name: '编辑', action_ids: [2187, 2169, 2173, 2161], parent_id: 2015 },
      { id: 2128, name: '统计', action_ids: [2189, 2170], parent_id: 2015 },
      { id: 2129, name: '封装详情', action_ids: [2190, 2171], parent_id: 2015 },
      { id: 2130, name: '重新封装', action_ids: [2191, 2172], parent_id: 2015 },

      { id: 2131, name: '添加H5轻应用', action_ids: [2160, 2175, 2410, 2461], parent_id: 2017},
      { id: 2132, name: '删除', action_ids: [2176, 2411], parent_id: 2017},
      # { id: 2133, name: '清除应用数据', action_ids: [2177], parent_id: 2017},
      { id: 2134, name: '编辑', action_ids: [2160, 2179, 2178], parent_id: 2017},
      { id: 2135, name: '导出', action_ids: [2180], parent_id: 2017 },

      # { id: 2136, name: '重试', action_ids: [2186, 2201], parent_id: 2015 },

      { id: 2137, name: '添加iOS应用', action_ids: [2192, 2160, 2161, 2484], parent_id: 2016 },
      { id: 2138, name: '删除', action_ids: [2193, 2162], parent_id: 2016 },
      { id: 2139, name: '下载', action_ids: [2194, 2163], parent_id: 2016 },
      { id: 2140, name: '清除应用数据', action_ids: [2195, 2164], parent_id: 2016 },
      # { id: 2141, name: '重试', action_ids: [2196, 2201], parent_id: 2016 },
      { id: 2142, name: '编辑', action_ids: [2197, 2169, 2173, 2161], parent_id: 2016 },
      { id: 2143, name: '升级', action_ids: [2198, 2169, 2173, 2161], parent_id: 2016 },
      { id: 2144, name: '封装详情', action_ids: [2199, 2171], parent_id: 2016 },
      { id: 2145, name: '重新封装', action_ids: [2200, 2172], parent_id: 2016 },

      { id: 2146, name: '导出', action_ids: [2203], parent_id: 2018 },
      { id: 2147, name: '卸载', action_ids: [2204, 2493], parent_id: 2018 },

      # { id: 2148, name: '添加', action_ids: [2210], parent_id: 2019 },
      # { id: 2149, name: '编辑', action_ids: [2213, 2214], parent_id: 2019 },
      # { id: 2150, name: '删除', action_ids: [2211, 2212], parent_id: 2019 },
      # { id: 2153, name: '导出', action_ids: [2215], parent_id: 2019 },

      { id: 2151, name: '添加', action_ids: [2205, 2206], parent_id: 2020 },
      { id: 2152, name: '编辑', action_ids: [2205, 2208, 2209], parent_id: 2020 },
      { id: 2153, name: '删除', action_ids: [2207], parent_id: 2020 },

      { id: 2154, name: '添加', action_ids: [2229, 2217, 2218, 2219, 2220, 2221, 2222, 2412, 2492], parent_id: 2022, byod_enabled: false },
      { id: 2155, name: '编辑', action_ids: [2230, 2217, 2220, 2221, 2225, 2226, 2227], parent_id: 2022, byod_enabled: false },
      { id: 2156, name: '删除', action_ids: [2231, 2223, 2228], parent_id: 2022, byod_enabled: false },
      { id: 2157, name: '导出', action_ids: [2232, 2224], parent_id: 2022, byod_enabled: false },

      { id: 2158, name: '添加', action_ids: [2233, 2217, 2218, 2219, 2220, 2221, 2222, 2492], parent_id: 2023 },
      { id: 2159, name: '编辑', action_ids: [2234, 2217, 2220, 2221, 2225, 2226, 2227], parent_id: 2023 },
      { id: 2160, name: '删除', action_ids: [2235, 2223, 2228], parent_id: 2023 },
      { id: 2161, name: '导出', action_ids: [2236, 2224], parent_id: 2023 },

      { id: 2162, name: '添加', action_ids: [2237, 2217, 2218, 2219, 2220, 2221, 2222, 2492], parent_id: 2024 },
      { id: 2163, name: '编辑', action_ids: [2238, 2217, 2220, 2221, 2225, 2226, 2227], parent_id: 2024 },
      { id: 2164, name: '删除', action_ids: [2239, 2223, 2228], parent_id: 2024 },
      { id: 2165, name: '导出', action_ids: [2240, 2224], parent_id: 2024 },

      { id: 2166, name: '添加', action_ids: [2241, 2217, 2218, 2219, 2220, 2221, 2222, 2492], parent_id: 2025 },
      { id: 2167, name: '编辑', action_ids: [2242, 2217, 2220, 2221, 2225, 2226, 2227], parent_id: 2025 },
      { id: 2168, name: '删除', action_ids: [2243, 2223, 2228], parent_id: 2025 },
      { id: 2169, name: '导出', action_ids: [2244, 2224], parent_id: 2025 },

      { id: 2170, name: '添加', action_ids: [2249, 2245], parent_id: 2027 },
      { id: 2171, name: '编辑', action_ids: [2250, 2246, 2248], parent_id: 2027 },
      { id: 2172, name: '删除', action_ids: [2251, 2247], parent_id: 2027 },
      { id: 2173, name: '导出', action_ids: [2252], parent_id: 2027 },

      { id: 2174, name: '添加', action_ids: [2253, 2245], parent_id: 2028 },
      { id: 2175, name: '编辑', action_ids: [2254, 2246, 2248], parent_id: 2028 },
      { id: 2176, name: '删除', action_ids: [2255, 2247], parent_id: 2028 },
      { id: 2177, name: '导出', action_ids: [2256], parent_id: 2028 },

      { id: 2178, name: '导出', action_ids: [2257], parent_id: 2029 },
      { id: 2179, name: '添加根证书', action_ids: [2258, 2448], parent_id: 2029 },
      { id: 2180, name: '删除', action_ids: [2259], parent_id: 2029 },
      { id: 2181, name: '详情', action_ids: [2260], parent_id: 2029 },
      { id: 2182, name: '导出证书', action_ids: [2261], parent_id: 2029 },
      { id: 2183, name: '添加VPN配置', action_ids: [2263, 2450], parent_id: 2030 },
      { id: 2184, name: '删除', action_ids: [2264], parent_id: 2030 },
      { id: 2185, name: '编辑', action_ids: [2265, 2266], parent_id: 2030 },
      { id: 2186, name: '导出', action_ids: [2262], parent_id: 2030 },
      { id: 2187, name: '添加单位通讯录', action_ids: [2271, 2269, 2449, 2464, 2465], parent_id: 2031 },
      { id: 2188, name: '下载', action_ids: [2267], parent_id: 2031 },
      { id: 2189, name: '删除', action_ids: [2270], parent_id: 2031 },
      { id: 2190, name: '编辑', action_ids: [2272, 2268, 2269], parent_id: 2031 },
      { id: 2191, name: '更新', action_ids: [2273, 2268, 2269], parent_id: 2031 },
      { id: 2192, name: '导出', action_ids: [2274], parent_id: 2031 },

      # { id: 2193, name: '添加APN配置', action_ids: [2275], parent_id: 2032 },
      # { id: 2194, name: '编辑', action_ids: [2276, 2277], parent_id: 2032 },
      # { id: 2195, name: '删除', action_ids: [2278, 2279], parent_id: 2032 },
      # { id: 2196, name: '导出', action_ids: [2280], parent_id: 2032 },

      { id: 2197, name: '操作', action_ids: [2281, 2494], parent_id: 2035 },
      { id: 2198, name: '快速扫描', action_ids: [2282, 2283], parent_id: 2197 },
      { id: 2199, name: '全盘扫描', action_ids: [2285, 2284], parent_id: 2197 },
      { id: 2200, name: '病毒库更新', action_ids: [2287, 2286], parent_id: 2197 },
      { id: 2201, name: '导出', action_ids: [2288], parent_id: 2035 },
      { id: 2202, name: '导出', action_ids: [2289], parent_id: 2036 },
      { id: 2203, name: '病毒库更新操作', action_ids: [2290, 2413, 2414], parent_id: 2037 },

      { id: 2204, name: '新建', action_ids: [2291], parent_id: 2039 },
      { id: 2205, name: '编辑', action_ids: [2292, 2293], parent_id: 2039 },
      { id: 2206, name: '删除', action_ids: [2294], parent_id: 2039 },
      { id: 2207, name: '导出', action_ids: [2295], parent_id: 2039 },

      { id: 2208, name: '新建', action_ids: [2296, 2297], parent_id: 2040 },
      { id: 2209, name: '编辑', action_ids: [2298, 2299], parent_id: 2040 },
      { id: 2210, name: '删除', action_ids: [2300], parent_id: 2040 },
      { id: 2211, name: '导出', action_ids: [2301], parent_id: 2040 },

      { id: 2212, name: '导出', action_ids: [2302], parent_id: 2042 },
      { id: 2213, name: '导出', action_ids: [2303], parent_id: 2043, byod_enabled: false },
      { id: 2214, name: '导出', action_ids: [2304], parent_id: 2046 },
      { id: 2215, name: '下载', action_ids: [2305], parent_id: 2045 },
      { id: 2216, name: '加速', action_ids: [2307], parent_id: 2045 },
      { id: 2217, name: '删除', action_ids: [2306], parent_id: 2045 },

      { id: 2218, name: 'Android客户端部署', action_ids: [2314], parent_id: 2050 },
      { id: 2219, name: '点击上传', action_ids: [2316, 2308, 2310], parent_id: 2218 },
      { id: 2220, name: '编辑', action_ids: [2317, 2308, 2309, 2310], parent_id: 2218 },
      { id: 2221, name: '删除', action_ids: [2318, 2312], parent_id: 2218 },
      { id: 2222, name: '二维码', action_ids: [2319, 2311], parent_id: 2218 },

      { id: 2223, name: 'iOS客户端部署', action_ids: [2320], parent_id: 2050 },
      { id: 2224, name: '点击上传', action_ids: [2321, 2308, 2310], parent_id: 2223 },
      { id: 2225, name: '编辑', action_ids: [2322, 2308, 2309, 2310], parent_id: 2223 },
      { id: 2226, name: '删除', action_ids: [2323, 2312], parent_id: 2223 },
      { id: 2227, name: '二维码', action_ids: [2324, 2311], parent_id: 2223 },
      # { id: 2228, name: '系统备份', action_ids: [2327, 2328, 2329, 2330, 2331], parent_id: 2052 },
      # { id: 2229, name: '系统还原', action_ids: [2332, 2333], parent_id: 2052 },
      # { id: 2230, name: '系统升级', action_ids: [2334, 2335, 2336], parent_id: 2052 },
      # { id: 2231, name: '服务器迁移', action_ids: [2337, 2338, 2339, 2340], parent_id: 2052 },
      # { id: 2232, name: '系统端口', action_ids: [2341, 2342, 2343], parent_id: 2052 },

      { id: 2233, name: '添加Agent', action_ids: [2344, 2427], parent_id: 2053, byod_enabled: false },
      { id: 2234, name: '下载', action_ids: [2345], parent_id: 2053, byod_enabled: false },
      { id: 2235, name: '删除', action_ids: [2346], parent_id: 2053, byod_enabled: false },
      { id: 2236, name: '详情', action_ids: [2347], parent_id: 2053, byod_enabled: false },
      { id: 2237, name: '编辑', action_ids: [2348, 2349], parent_id: 2053, byod_enabled: false },
      { id: 2238, name: '导出', action_ids: [2350], parent_id: 2053, byod_enabled: false },

      { id: 2239, name: '新建', action_ids: [2356], parent_id: 2057 },
      { id: 2240, name: '详情', action_ids: [2357], parent_id: 2057 },
      { id: 2241, name: '编辑', action_ids: [2357, 2358], parent_id: 2057 },
      { id: 2242, name: '删除', action_ids: [2382, 2359], parent_id: 2057 },
      { id: 2243, name: '导出', action_ids: [2360], parent_id: 2057 },

      # { id: 2244, name: '终端违规情况', action_ids: [2361], parent_id: 2005 },
      # { id: 2245, name: '策略执行情况', action_ids: [2362], parent_id: 2005 },
      # { id: 2246, name: '终端状态', action_ids: [2363], parent_id: 2005 },
      # { id: 2247, name: '终端安全', action_ids: [2364], parent_id: 2005 },
      # { id: 2248, name: '终端平台', action_ids: [2365], parent_id: 2005 },
      # { id: 2249, name: '终端所有权', action_ids: [2366], parent_id: 2005 },
      # { id: 2250, name: '最新事件', action_ids: [2367], parent_id: 2005 },
      # { id: 2251, name: '客户端版本', action_ids: [2368], parent_id: 2005 },
      # { id: 2252, name: '终端活跃度统计', action_ids: [2369], parent_id: 2005 },
      # { id: 2253, name: '终端类型', action_ids: [2370], parent_id: 2005 },
      { id: 2255, name: '分组操作（添加，修改，删除）', action_ids: [2406, 2151, 2154, 2155, 2156, 2152, 2153, 2157], parent_id: 2013 },
      { id: 2256, name: '封装策略', action_ids: [2479,2481,2482,2483, 2485], parent_id: 2021, encap_policy_enabled: true },
      { id: 2257, name: '查看套件管理', action_ids: [5000], parent_id: 0 }
    ]

    Rule.delete_all
    Rule::Security.import securities.map { |rule| Rule::Security.new(rule) }
    Rule::Audit.import audits.map { |rule| Rule::Audit.new(rule) }
    Rule::System.import systems.map { |rule| Rule::System.new(rule) }

    ActionNamesRule.delete_all
    ras = []
    [securities, audits, systems].each do |rules|
      rules.each do |r|
        r[:action_ids].each { |aid| ras << ActionNamesRule.new(rule_id: r[:id], action_name_id: aid) }
      end
    end
    ActionNamesRule.import ras
  end
end
