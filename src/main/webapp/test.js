/**
 * Project name(项目名称)：JS_Yanghui_triangle
 * File name(文件名): test
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/3
 * Time(创建时间)： 12:57
 * Version(版本): 1.0
 * Description(描述)： 无
 */

function print(v)
{
    if (typeof v == "number")
    {
        var w = 30;
        if (n > 30)
        {
            w = (n - 30) + 40;
        }
        var s = '<span style="padding:4px 2px;display:inline-block;text-align:center;width:' + w + 'px;">' + v + '</span>';
        document.write(s);
    }
    else
    {
        document.write(v);
    }
}

var n = prompt("请输入幂数：", 9);
n = n - 0;
var t1 = new Date();
var a1 = [1, 1];
var a2 = [1, 1];
print('<div style=text-align:center;">');
for (var i = 0; i <= n; i++)
{
    for (var j = 1; j < i + 2; j++)
    {
        print(c(i, j));
    }
    print("<br />");
}
print("</div>");
var t2 = new Date();
print("<p style='text-align:center;'>耗时为（毫秒）：" + (t2 - t1) + "</p>");

function c(x, y)
{
    if ((y == 1) || (y == x + 1))
    {
        return 1;
    }
    return c(x - 1, y - 1) + c(x - 1, y);
}