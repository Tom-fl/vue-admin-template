/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-03 15:57:14
 * @LastEditTime: 2022-03-07 18:06:19
 * @Email: str-liang@outlook.com
 * @FilePath: \vue-admin-template\src\data\res.js
 * @Environment: Win 10
 * @Description:
 */

import Layout from "@/layout";
console.log(Layout);

import dataObj from "@/data/data";
import data2Obj from "@/data/data2";

function getAsyncRoutes(arr) {
  return arr.map((item) => {
    let component = "";
    if (item.pid == 0) {
      component = Layout;
    } else {
      component = (resolve) => {
        require([`@/views/modules/${item.url}.vue`], resolve);
      };
    }
    const route = {
      path: item.url,
      name: item.name,
      meta: {
        title: item.name,
        require: true,
      },
      component,
    };
    if (item.children) {
      route.children = getAsyncRoutes(item.children);
    }
    return route;
  });
}

let resData = getAsyncRoutes(dataObj);

export default resData;
