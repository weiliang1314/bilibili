let arr = [{ comment_id: 1, user_id: 43, comment_date: "04-23", comment_content: "蜡笔小新很好看!", parent_id: null },
    { comment_id: 2, user_id: 19, comment_date: "04-24", comment_content: "还不错哦!很好看", parent_id: null, },
    { comment_id: 3, user_id: 17, comment_date: "04-25", comment_content: "我也感觉蜡笔小新很好看", parent_id: "1", },
    { comment_id: 4, user_id: 14, comment_date: "04-26", comment_content: "我感觉机器猫更好看一点", parent_id: "3", },
    { comment_id: 5, user_id: 13, comment_date: "04-27", comment_content: "好看,已三连!", parent_id: null, },
    { comment_id: 6, user_id: 21, comment_date: "04-26", comment_content: "你是机器猫的粉丝吗", parent_id: "4", },
    { comment_id: 7, user_id: 14, comment_date: "04-27", comment_content: "是的,我是机器猫的粉丝", parent_id: "6", },
    { comment_id: 8, user_id: 23, comment_date: "04-27", comment_content: "我更喜欢白嫖!", parent_id: "5", },
    { comment_id: 9, user_id: 25, comment_date: "04-28", comment_content: "你个白嫖怪", parent_id: "8", }
]

function fn(temp) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parent_id == temp) {
            arr1.push(arr[i])
            arr[i].child = fn(arr[i].comment_id)

        }
    }
    return arr1
}
const res = fn(null)