/* eslint-disable react/no-deprecated */
// Q1-1
function sortUserName(users) {
  if (!users || users?.length === 0) return [];

  return users.sort((a, b) => {
    if (a.firstName !== b.firstName) {
      return a.firstName.localeCompare(b.firstName);
    }

    if ((a.lastName || "") !== (b.lastName || "")) {
      return (a.lastName || "").localeCompare(b.lastName || "");
    }

    return parseInt(a.customerID, 10) - parseInt(b.customerID, 10);
  });
}

// Q1-2
const professionRank = {
  systemAnalytics: 5,
  engineer: 4,
  productOwner: 3,
  freelancer: 2,
  student: 1,
};

const getProfessionRank = (profession) => {
  return professionRank[profession] || 0;
};

function sortUsersByProfession(users) {
  if (!users || users?.length === 0) return [];

  return users.sort((a, b) => {
    return professionRank[b.profession] - professionRank[a.profession];
  });
}

// Q2
/* css *
1.因為 .container .shop-list li.item 選擇權重大於 .container .shop-list .item
如果要在第一個列表使用，就改成這樣即可
.container ol.shop-list .item {
  color: blue;
}
2.讓底色互相不同，我會使用偽元素作修改
.container .shop-list .item:nth-of-type(odd) {
  background-color: green;
}
.container .shop-list .item:nth-of-type(even) {
   background-color: red;
}
*/

// Q3
// 用Set的方法
function getUniqueNumber(items) {
  return [...new Set(items)];
}
/* 不用Set的方法
function getUniqueNumber(items) {
  const mappingTable = {};
  items.forEach((item) => {
    mappingTable[item] = (mappingTable[item] || 0) + 1;
  });

  return Object.keys(mappingTable).map(Number);
}
*/

/** Q4
 * Interface 可以對物件的整體結構做定義
 * ex: 
 * interface UserType {
    firstName: string;
    lastName?: string;
    customerID: number;
  }

  function sortUserName(users: UserType[]) {...}

  * enum 通常用於取值被限定在一定範圍內
  * ex: 
  * enum professionRank {
    systemAnalytics = 5,
    engineer = 4,
    productOwner = 3,
    freelancer = 2,
    student = 1,
}
*/

/** Q5
 *  因為在react非同步處理每一次的狀態改變，在這裡導致每一次更改狀態都是使用原本狀態中計數更改狀態，所以會導致每次點擊都只會加一
 * 可以把 handleAddCount改成 修正成() {
    this.setState((prev) => ({ ...prev, count: prev.count + 1 }));
    this.setState((prev) => ({ ...prev, count: prev.count + 1 }));
    this.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  }
 */

//Q6
var SearchBox = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    this.handleOnChange = this.debounce(this.handleOnChange, 500);
  },

  debounce: function (func, wait) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    };
  },

  handleOnChange: function (event) {
    // make ajax call
  },

  render: function () {
    return <input type="search" name="p" onChange={this.handleOnChange} />;
  },
});
