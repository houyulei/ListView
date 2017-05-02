

## 介绍

无限滚动长列表,基于silk-scroller和mobx

[demo](https://houyulei.github.io/ListView/dist/index.html)

原理是将列表分为若干组(建议设置rowsInGroup参数保证每组大约占1屏半的高度),实时判断每组是否在可视区域,如在则显示该组,如不在则渲染一个等高占位容器撑开高度.

## 安装

```bash
$ npm install silk-listview --save
```

## 使用

```jsx
import ListView,{DateSource} from 'silk-listview';

const data = [];
for (let i = 0; i < 300; i++) {
    data.push(i);
}
const dataSource = new DateSource(data);

class ListViewExample extends Component {

    constructor(props) {
        super(props);
        this.lastScrollTop = 0;
        this.state = {
            scrollTop: 0,
            dataSource
        }
    }

    refresh = (resolve) => {
        setTimeout(() => {
            const arr = [];
            for (let i = 0; i < 15; i++) {
                arr.push(i);
            }

            dataSource.replace(arr);

            resolve();
        }, 500)
    }

    loadMore = (resolve) => {
        const arr = [];
        for (let i = dataSource.value.length, len = dataSource.value.length + 15;
             i < len; i++) {
            arr.push(i);
        }

        dataSource.append(arr)
        resolve();
    }

    render() {
        return (
            <ListView
                dataSource={dataSource}
                rowRenderer={item => <div key={item} className="list-view-item">上拉下拉{item + 1}</div>}
                usePullRefresh
                pullRefreshAction={this.refresh}
                useLoadMore
                loadMoreAction={this.loadMore}
            />
        )
    }
}

ReactDOM.render(
    <ListViewExample />, document.getElementById('root')
)


```

## API

### props

| Property             | Description           | Type       | Default       |
|---------------- |----------------|----------|----------|
| dateSource         |  数据源,一个mobx对象, 当其变更时,列表会自动渲染 |  |   |
| rowHeight         |  行高,设定行高会有更好的性能,不设定会自动计算  | number |   |
| rowsInGroup         |   分组行数   | number |  50 |
| scrollTop         |  初始滚动  | number | 0 |
| rowRenderer         |   行渲染函数  | function |   |




### dateSource

#### constructor(data arr)
创建一个DateSource实例,参数通常为Array[Object]类型的初始数据

#### dataSource.append(data arr)
向列表尾部添加数据,参数通常为Array[Object]类型的数据

#### dataSource.replace(data arr)
替换列表数据,会造成重新render,参数通常为Array[Object]类型的数据

#### dataSource.clear()
清空列表数据

