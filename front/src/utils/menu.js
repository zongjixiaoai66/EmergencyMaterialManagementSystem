const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"健康打卡管理",
                        "menuJump":"列表",
                        "tableName":"daka"
                    }
                ],
                "menu":"健康打卡管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"物资类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWuzi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "报表",
                            "修改",
                            "删除"
                        ],
                        "menu":"物资管理",
                        "menuJump":"列表",
                        "tableName":"wuzi"
                    }
                ],
                "menu":"物资管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"物资申请管理",
                        "menuJump":"列表",
                        "tableName":"wuzishenqing"
                    }
                ],
                "menu":"物资申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"物资运输管理",
                        "menuJump":"列表",
                        "tableName":"wuziyunshu"
                    }
                ],
                "menu":"物资运输管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"部门管理",
                        "menuJump":"列表",
                        "tableName":"bumen"
                    }
                ],
                "menu":"部门管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"健康打卡管理",
                        "menuJump":"列表",
                        "tableName":"daka"
                    }
                ],
                "menu":"健康打卡管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"物资管理",
                        "menuJump":"列表",
                        "tableName":"wuzi"
                    }
                ],
                "menu":"物资管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"物资申请管理",
                        "menuJump":"列表",
                        "tableName":"wuzishenqing"
                    }
                ],
                "menu":"物资申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"物资运输管理",
                        "menuJump":"列表",
                        "tableName":"wuziyunshu"
                    }
                ],
                "menu":"物资运输管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
